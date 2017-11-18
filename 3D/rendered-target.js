const MathUtil = require('scratch-vm/src/util/math-util');
const Target = require('scratch-vm/src/engine/target');

/**
 * Rendered target: instance of a sprite (clone), or the stage.
 */
class RenderedTarget extends Target {
	/**
	 * @param {!Sprite} sprite Reference to the parent sprite.
	 * @param {Runtime} runtime Reference to the runtime.
	 * @constructor
	 */
	constructor (sprite, runtime) {
		super(runtime, sprite.blocks);

		/**
		 * Reference to the sprite that this is a render of.
		 * @type {!Sprite}
		 */
		this.sprite = sprite;
		/**
		 * Reference to the global renderer for this VM, if one exists.
		 * @type {?RenderWebGL}
		 */
		this.renderer = null;
		if (this.runtime) {
			this.renderer = this.runtime.renderer;
		}
		/**
		 * ID of the drawable for this rendered target,
		 * returned by the renderer, if rendered.
		 * @type {?Number}
		 */
		this.drawableID = null;

		/**
		 * Drag state of this rendered target. If true, x/y position can't be
		 * changed by blocks.
		 * @type {boolean}
		 */
		this.dragging = false;

		/**
		 * Whether this represents an "original" non-clone rendered-target for a sprite,
		 * i.e., created by the editor and not clone blocks.
		 * @type {boolean}
		 */
		this.isOriginal = true;

		/**
		 * Whether this rendered target represents the Scratch stage.
		 * @type {boolean}
		 */
		this.isStage = false;

		/**
		 * Scratch X coordinate. Currently should range from -240 to 240.
		 * @type {Number}
		 */
		this.x = 0;

		/**
		 * Scratch Y coordinate. Currently should range from -180 to 180.
		 * @type {number}
		 */
		this.y = 0;

		this.z = 0;

		this.rotation = [0, 0, 0];

		/**
		 * Whether the rendered target is draggable on the stage
		 * @type {boolean}
		 */
		this.draggable = false;

		/**
		 * Whether the rendered target is currently visible.
		 * @type {boolean}
		 */
		this.visible = true;

		/**
		 * Size of rendered target as a percent of costume size.
		 * @type {number}
		 */
		this.size = 100;

		/**
		 * Currently selected costume index.
		 * @type {number}
		 */
		this.currentCostume = 0;
	}

	get position () {
		return [this.x, this.y, this.z];
	}

	/**
	 * Create a drawable with the this.renderer.
	 */
	initDrawable () {
		if (this.renderer) {
			this.drawableID = this.renderer.createDrawable();
		}
		// If we're a clone, start the hats.
		if (!this.isOriginal) {
			this.runtime.startHats(
				'control_start_as_clone', null, this
			);
		}

		/**
		 * Audio player
		 */
		this.audioPlayer = null;
		if (this.runtime && this.runtime.audioEngine) {
			this.audioPlayer = this.runtime.audioEngine.createPlayer();
		}
	}

	/**
	 * Event which fires when a target moves.
	 * @type {string}
	 */
	static get EVENT_TARGET_MOVED () {
		return 'TARGET_MOVED';
	}

	setXY (x, y) {
		this.setXYZ(x, y, this.z);
	}

	setXYZ (x, y, z) {
		if (this.isStage) return;
		const oldX = this.x;
		const oldY = this.y;
		const oldZ = this.z;
		this.x = x;
		this.y = y;
		this.z = z;
		if (this.renderer) {
			this.renderer.updateDrawableProperties(this.drawableID, {
				position: [x, y, z]
			});
			if (this.visible) {
				this.runtime.requestRedraw();
			}
		}
		this.emit(RenderedTarget.EVENT_TARGET_MOVED, this, oldX, oldY, oldZ);
		this.runtime.requestTargetsUpdate(this);
	}

	setRotation (x, y, z) {
		if (this.isStage) {
			return;
		}

		this.rotation = [x, y, z].map(n => {
			return MathUtil.wrapClamp(n, 0, 359);
		});

		if (this.renderer) {
			this.renderer.updateDrawableProperties(this.drawableID, {
				rotation: this.rotation
			});
			if (this.visible) {
				this.runtime.requestRedraw();
			}
		}
		this.runtime.requestTargetsUpdate(this);
	}

	/**
	 * Set visibility; i.e., whether it's shown or hidden.
	 * @param {!boolean} visible True if should be shown.
	 */
	setVisible (visible) {
		if (this.isStage) {
			return;
		}
		this.visible = !!visible;
		if (this.renderer) {
			this.renderer.updateDrawableProperties(this.drawableID, {
				visible: this.visible
			});
			if (this.visible) {
				this.runtime.requestRedraw();
			}
		}
		this.runtime.requestTargetsUpdate(this);
	}

	/**
	 * Set size, as a percentage of the costume size.
	 * @param {!number} size Size of rendered target, as % of costume size.
	 */
	setSize (size) {
		if (this.isStage) {
			return;
		}
		if (this.renderer) {
			// Clamp to scales relative to costume and stage size.
			// See original ScratchSprite.as:setSize.
			const costumeSize = this.renderer.getSkinSize(this.drawableID);
			const origW = costumeSize[0];
			const origH = costumeSize[1];
			const minScale = Math.min(1, Math.max(5 / origW, 5 / origH));
			const maxScale = Math.min(
				(1.5 * this.runtime.constructor.STAGE_WIDTH) / origW,
				(1.5 * this.runtime.constructor.STAGE_HEIGHT) / origH
			);
			this.size = MathUtil.clamp(size / 100, minScale, maxScale) * 100;
			const renderedDirectionScale = this._getRenderedDirectionAndScale();
			this.renderer.updateDrawableProperties(this.drawableID, {
				direction: renderedDirectionScale.direction,
				scale: renderedDirectionScale.scale
			});
			if (this.visible) {
				this.runtime.requestRedraw();
			}
		}
	}

	setSize (scale) {
		if (this.isStage) {
			return;
		}

		if (this.renderer) {
			this.scale = scale.map(n => {
				return MathUtil.clamp(n, 0, Infinity);
			});
			this.renderer.updateDrawableProperties(this.drawableID, {
				scale: this.scale / 100
			});
			if (this.visible) {
				this.runtime.requestRedraw();
			}
		}
	}

	/**
	 * Set the current costume.
	 * @param {number} index New index of costume.
	 */
	setCostume (index) {
		// Keep the costume index within possible values.
		index = Math.round(index);
		this.currentCostume = MathUtil.wrapClamp(
			index, 0, this.sprite.costumes.length - 1
		);
		if (this.renderer) {
			const costume = this.sprite.costumes[this.currentCostume];
			const drawableProperties = {
				skinId: costume.skinId,
				costumeResolution: costume.bitmapResolution
			};
			if (
				typeof costume.rotationCenterX !== 'undefined' &&
				typeof costume.rotationCenterY !== 'undefined'
			) {
				const scale = costume.bitmapResolution || 1;
				drawableProperties.rotationCenter = [
					costume.rotationCenterX / scale,
					costume.rotationCenterY / scale
				];
			}
			this.renderer.updateDrawableProperties(this.drawableID, drawableProperties);
			if (this.visible) {
				this.runtime.requestRedraw();
			}
		}
		this.runtime.requestTargetsUpdate(this);
	}

	/**
	 * Delete a costume by index.
	 * @param {number} index Costume index to be deleted
	 */
	deleteCostume (index) {
		const originalCostumeCount = this.sprite.costumes.length;
		if (originalCostumeCount === 1) return;

		this.sprite.costumes = this.sprite.costumes
			.slice(0, index)
			.concat(this.sprite.costumes.slice(index + 1));

		if (index === this.currentCostume && index === originalCostumeCount - 1) {
			this.setCostume(index - 1);
		} else if (index < this.currentCostume) {
			this.setCostume(this.currentCostume - 1);
		} else {
			this.setCostume(this.currentCostume);
		}

		this.runtime.requestTargetsUpdate(this);
	}

	/**
	 * Delete a sound by index.
	 * @param {number} index Sound index to be deleted
	 */
	deleteSound (index) {
		this.sprite.sounds = this.sprite.sounds
			.slice(0, index)
			.concat(this.sprite.sounds.slice(index + 1));
		this.runtime.requestTargetsUpdate(this);
	}

	/**
	 * Get a costume index of this rendered target, by name of the costume.
	 * @param {?string} costumeName Name of a costume.
	 * @return {number} Index of the named costume, or -1 if not present.
	 */
	getCostumeIndexByName (costumeName) {
		for (let i = 0; i < this.sprite.costumes.length; i++) {
			if (this.sprite.costumes[i].name === costumeName) {
				return i;
			}
		}
		return -1;
	}

	/**
	 * Get a costume of this rendered target by id.
	 * @return {object} current costume
	 */
	getCurrentCostume () {
		return this.sprite.costumes[this.currentCostume];
	}

	/**
	 * Get full costume list
	 * @return {object[]} list of costumes
	 */
	getCostumes () {
		return this.sprite.costumes;
	}

	/**
	 * Get full sound list
	 * @return {object[]} list of sounds
	 */
	getSounds () {
		return this.sprite.sounds;
	}

	/**
	 * Update all drawable properties for this rendered target.
	 * Use when a batch has changed, e.g., when the drawable is first created.
	 */
	updateAllDrawableProperties () {
		if (this.renderer) {
			const costume = this.sprite.costumes[this.currentCostume];
			const bitmapResolution = costume.bitmapResolution || 1;
			const props = {
				position: [this.x, this.y, this.z],
				scale: this.scale,
				visible: this.visible,
				skinId: costume.skinId,
				costumeResolution: bitmapResolution,
				rotationCenter: [
					costume.rotationCenterX / bitmapResolution,
					costume.rotationCenterY / bitmapResolution
				]
			};
			this.renderer.updateDrawableProperties(this.drawableID, props);
			if (this.visible) {
				this.runtime.requestRedraw();
			}
		}
		this.runtime.requestTargetsUpdate(this);
	}

	/**
	 * Return the human-readable name for this rendered target, e.g., the sprite's name.
	 * @override
	 * @returns {string} Human-readable name.
	 */
	getName () {
		return this.sprite.name;
	}

	/**
	 * Return whether this rendered target is a sprite (not a clone, not the stage).
	 * @return {boolean} True if not a clone and not the stage.
	 */
	isSprite () {
		return !this.isStage && this.isOriginal;
	}

	/**
	 * Move to the front layer.
	 */
	goToFront () {
		if (this.renderer) {
			this.renderer.setDrawableOrder(this.drawableID, Infinity);
		}
	}

	/**
	 * Move back a number of layers.
	 * @param {number} nLayers How many layers to go back.
	 */
	goBackLayers (nLayers) {
		if (this.renderer) {
			this.renderer.setDrawableOrder(this.drawableID, -nLayers, true, 1);
		}
	}

	/**
	 * Move behind some other rendered target.
	 * @param {!RenderedTarget} other Other rendered target to move behind.
	 */
	goBehindOther (other) {
		if (this.renderer) {
			const otherLayer = this.renderer.setDrawableOrder(
				other.drawableID, 0, true);
			this.renderer.setDrawableOrder(this.drawableID, otherLayer);
		}
	}

	/**
	 * Make a clone, copying any run-time properties.
	 * If we've hit the global clone limit, returns null.
	 * @return {RenderedTarget} New clone.
	 */
	makeClone () {
		if (!this.runtime.clonesAvailable() || this.isStage) {
			return null; // Hit max clone limit, or this is the stage.
		}
		this.runtime.changeCloneCounter(1);
		const newClone = this.sprite.createClone();
		// Copy all properties.
		newClone.x = this.x;
		newClone.y = this.y;
		newClone.z = this.z;
		newClone.rotation = this.rotation;
		newClone.visible = this.visible;
		newClone.size = this.size;
		newClone.scale = this.scale;
		newClone.currentCostume = this.currentCostume;
		newClone.variables = JSON.parse(JSON.stringify(this.variables));
		newClone.lists = JSON.parse(JSON.stringify(this.lists));
		newClone.initDrawable();
		newClone.updateAllDrawableProperties();
		// Place behind the current target.
		newClone.goBehindOther(this);
		return newClone;
	}

	/**
	 * Called when the project receives a "green flag."
	 * For a rendered target, this clears graphic effects.
	 */
	onGreenFlag () {}

	/**
	 * Called when the project receives a "stop all"
	 * Stop all sounds and clear graphic effects.
	 */
	onStopAll () {
		if (this.audioPlayer) {
			this.audioPlayer.stopAllSounds();
			this.audioPlayer.clearEffects();
		}
	}

	/**
	 * Post/edit sprite info.
	 * @param {object} data An object with sprite info data to set.
	postSpriteInfo (data) {
		if (data.hasOwnProperty('x')) {
			this.setXYZ(data.x, this.y, this.z);
		}
		if (data.hasOwnProperty('y')) {
			this.setXYZ(this.x, data.y, this.z);
		}
		if (data.hasOwnProperty('direction')) {
			this.setDirection(data.direction);
		}
		if (data.hasOwnProperty('rotation')) {
			this.setRotation(data.rotation);
		}
		if (data.hasOwnProperty('scale')) {
			this.setScale(data.scale);
		}
		if (data.hasOwnProperty('draggable')) {
			this.setDraggable(data.draggable);
		}
		if (data.hasOwnProperty('rotationStyle')) {
			this.setRotationStyle(data.rotationStyle);
		}
		if (data.hasOwnProperty('visible')) {
			this.setVisible(data.visible);
		}
	}
*/

	/**
	 * Serialize sprite info, used when emitting events about the sprite
	 * @returns {object} Sprite data as a simple object
	 */
	toJSON () {
		const costumes = this.getCostumes();
		return {
			id: this.id,
			name: this.getName(),
			isStage: this.isStage,
			x: this.x,
			y: this.y,
			z: this.z,
			size: this.size,
			rotation: this.rotation,
			currentCostume: this.currentCostume,
			costume: costumes[this.currentCostume],
			costumeCount: costumes.length,
			visible: this.visible,
			blocks: this.blocks._blocks,
			variables: this.variables,
			lists: this.lists,
			costumes: costumes,
			sounds: this.getSounds()
		};
	}

	/**
	 * Dispose, destroying any run-time properties.
	 */
	dispose () {
		this.runtime.changeCloneCounter(-1);
		this.runtime.stopForTarget(this);
		this.sprite.removeClone(this);
		if (this.renderer && this.drawableID !== null) {
			this.renderer.destroyDrawable(this.drawableID);
			if (this.visible) {
				this.runtime.requestRedraw();
			}
		}
	}
}

module.exports = RenderedTarget;
