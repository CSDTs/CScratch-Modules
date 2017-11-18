const VirtualMachine = require('original-vm');
const Cast = require('scratch-vm/src/util/cast');
const MathUtil = require('scratch-vm/src/util/math-util');
const RenderedTarget = require('./rendered-target');
const loadCostume = require('./load-costume');
const serialization = require('./serialization');
const PenBlocks = require('./pen');

class CustomVM extends VirtualMachine {
	constructor (...args) {
		super(...args);

		Object.assign(this.runtime._primitives, {
			motion_rotate: (args, util) => {
				util.target.setRotation(
					util.target.rotation[0] + Cast.toNumber(args.DEGREESX),
					util.target.rotation[1] + Cast.toNumber(args.DEGREESY),
					util.target.rotation[2] + Cast.toNumber(args.DEGREESZ)
				)
			},
			motion_setrotation: (args, util) => {
				util.target.setRotation(
					Cast.toNumber(args.DEGREESX),
					Cast.toNumber(args.DEGREESY),
					Cast.toNumber(args.DEGREESZ)
				);
			},
			motion_gotoxyz: (args, util) => {
				util.target.setXYZ(
					Cast.toNumber(args.X),
					Cast.toNumber(args.Y),
					Cast.toNumber(args.Z)
				);
			},
			motion_changezby: (args, util) => {
				util.target.setXYZ(util.target.x, util.target.y, util.target.z + Cast.toNumber(args.DZ));
			},
			motion_setz: (args, util) => {
				util.target.setXYZ(util.target.x, util.target.y, Cast.toNumber(args.Z));
			},
			motion_zposition: (args, util) => {
				return util.target.z;
			},
			looks_setcamerato: (args, util) => {
				if (!util.target.isStage) return;
				this.runtime.renderer.cameraPosition = [
					Cast.toNumber(args.X),
					Cast.toNumber(args.Y),
					Cast.toNumber(args.Z)
				];
			},
			looks_changecameraxby: (args, util) => {
				if (!util.target.isStage) return;
				const renderer = this.runtime.renderer;
				const currentPosition = renderer.cameraPosition;
				renderer.cameraPosition = [
					currentPosition[0] + Cast.toNumber(args.DX),
					currentPosition[1],
					currentPosition[2]
				];
			},
			looks_changecamerayby: (args, util) => {
				if (!util.target.isStage) return;
				const renderer = this.runtime.renderer;
				const currentPosition = renderer.cameraPosition;
				renderer.cameraPosition = [
					currentPosition[0],
					currentPosition[1] + Cast.toNumber(args.DY),
					currentPosition[2]
				];
			},
			looks_changecamerazby: (args, util) => {
				if (!util.target.isStage) return;
				const renderer = this.runtime.renderer;
				const currentPosition = renderer.cameraPosition;
				renderer.cameraPosition = [
					currentPosition[0],
					currentPosition[1],
					currentPosition[2] + Cast.toNumber(args.DZ)
				];
			},
			looks_turncameravertical: (args, util) => {
				if (!util.target.isStage) return;
				this.runtime.renderer.rotateCameraVertical(Cast.toNumber(args.DEGREES));
			},
			looks_turncamerahorizontal: (args, util) => {
				if (!util.target.isStage) return;
				this.runtime.renderer.rotateCameraHorizontal(Cast.toNumber(args.DEGREES));
			}
		});

		const penBlocks = new PenBlocks(this.runtime);
		const primitives = penBlocks.getPrimitives();
		for (const op in primitives) {
			this.runtime._primitives[op] = primitives[op].bind(penBlocks);
		}
	}


	addCostume (md5ext, costumeObject) {
		loadCostume(md5ext, costumeObject, this.runtime).then(() => {
			this.editingTarget.sprite.costumes.push(costumeObject);
			this.editingTarget.setCostume(
				this.editingTarget.sprite.costumes.length - 1
			);
		});
	}

	toJSON () {
		return JSON.stringify(serialization.serialize(this.runtime));
	}

	fromJSON (json) {
		// Clear the current runtime
		this.clear();

		// Validate & parse
		if (typeof json !== 'string') {
			log.error('Failed to parse project. Non-string supplied to fromJSON.');
			return;
		}
		json = JSON.parse(json);
		if (typeof json !== 'object') {
			log.error('Failed to parse project. JSON supplied to fromJSON is not an object.');
			return;
		}

		return serialization.deserialize(json, this.runtime).then(targets => {
			this.clear();
			for (let n = 0; n < targets.length; n++) {
				if (targets[n] !== null) {
					this.runtime.targets.push(targets[n]);
					targets[n].updateAllDrawableProperties();
				}
			}
			// Select the first target for editing, e.g., the first sprite.
			if (this.runtime.targets.length > 1) {
				this.editingTarget = this.runtime.targets[1];
			} else {
				this.editingTarget = this.runtime.targets[0];
			}

			// Update the VM user's knowledge of targets and blocks on the workspace.
			this.emitTargetsUpdate();
			this.emitWorkspaceUpdate();
			this.runtime.setEditingTarget(this.editingTarget);
		});
	}
}

module.exports = CustomVM;
