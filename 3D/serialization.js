const Blocks = require('scratch-vm/src/engine/blocks');
const OldSprite = require('scratch-vm/src/sprites/sprite');
const Variable = require('scratch-vm/src/engine/variable');
const List = require('scratch-vm/src/engine/list');
const RenderedTarget = require('./rendered-target');

const loadCostume = require('./load-costume');
const loadSound = require('scratch-vm/src/import/load-sound');

/**
 * The createClone method must be overwritten to use the custom rendered target class
 */
class Sprite extends OldSprite {
	createClone () {
		const newClone = new RenderedTarget(this, this.runtime);
		newClone.isOriginal = this.clones.length === 0;
		this.clones.push(newClone);
		if (newClone.isOriginal) {
			newClone.initDrawable();
			this.runtime.fireTargetWasCreated(newClone);
		} else {
			this.runtime.fireTargetWasCreated(newClone, this.clones[0]);
		}
		return newClone;
	}
}

const serialize = function (runtime) {
	return {'targets': runtime.targets.filter(target => target.isOriginal)};
};

const parseScratchObject = function (object, runtime) {
	if (!object.hasOwnProperty('name')) {
		// Watcher/monitor - skip this object until those are implemented in VM.
		// @todo
		return;
	}
	// Blocks container for this object.
	const blocks = new Blocks();

	// @todo: For now, load all Scratch objects (stage/sprites) as a Sprite.
	const sprite = new Sprite(blocks, runtime);

	// Sprite/stage name from JSON.
	if (object.hasOwnProperty('name')) {
		sprite.name = object.name;
	}
	if (object.hasOwnProperty('blocks')) {
		for (let blockId in object.blocks) {
			blocks.createBlock(object.blocks[blockId]);
		}
		// console.log(blocks);
	}
	// Costumes from JSON.
	const costumePromises = (object.costumes || []).map(costumeSource => {
		const costume = {
			skinId: null,
			name: costumeSource.name,
			bitmapResolution: 1, // These three are required by TargetPane
			rotationCenterX: 0,
			rotationCenterY: 0
		};
		const dataFormat = costumeSource.dataFormat || 'png';
		const costumeMd5 = `${dataFormat === 'json' ? costumeSource.name : costumeSource.assetId}.${dataFormat}`;
		return loadCostume(costumeMd5, costume, runtime);
	});
	// Sounds from JSON
	const soundPromises = (object.sounds || []).map(soundSource => {
		const sound = {
			format: soundSource.format,
			fileUrl: soundSource.fileUrl,
			rate: soundSource.rate,
			sampleCount: soundSource.sampleCount,
			soundID: soundSource.soundID,
			name: soundSource.name,
			md5: soundSource.md5,
			data: null
		};
		return loadSound(sound, runtime);
	});
	// Create the first clone, and load its run-state from JSON.
	const target = sprite.createClone();
	// Load target properties from JSON.
	if (object.hasOwnProperty('variables')) {
		for (let id in object.variables) {
			const variable = object.variables[id];
			const newVariable = new Variable(
				variable.id,
				variable.name,
				variable.value,
				variable.isPersistent
			);
			target.variables[newVariable.id] = newVariable;
		}
	}
	if (object.hasOwnProperty('lists')) {
		for (let k = 0; k < object.lists.length; k++) {
			const list = object.lists[k];
			// @todo: monitor properties.
			target.lists[list.listName] = new List(
				list.listName,
				list.contents
			);
		}
	}
	if (object.hasOwnProperty('x')) {
		target.x = object.x;
	}
	if (object.hasOwnProperty('y')) {
		target.y = object.y;
	}
	if (object.hasOwnProperty('z')) {
		target.z = object.z;
	}
	if (object.hasOwnProperty('rotation')) {
		target.rotation = object.rotation;
	}
	if (object.hasOwnProperty('size')) {
		target.size = object.size;
	}
	if (object.hasOwnProperty('visible')) {
		target.visible = object.visible;
	}
	if (object.hasOwnProperty('currentCostume')) {
		target.currentCostume = object.currentCostume;
	}
	if (object.hasOwnProperty('isStage')) {
		target.isStage = object.isStage;
	}
	Promise.all(costumePromises).then(costumes => {
		sprite.costumes = costumes;
	});
	Promise.all(soundPromises).then(sounds => {
		sprite.sounds = sounds;
	});
	return Promise.all(costumePromises.concat(soundPromises)).then(() => target);
};

const deserialize = function (json, runtime) {
	return Promise.all((json.targets || []).map(target => parseScratchObject(target, runtime)));
};

module.exports = {
	serialize: serialize,
	deserialize: deserialize
};
