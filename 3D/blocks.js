const ScratchBlocks = require('original-blocks');
const Toolbox = require('raw-loader!./default_toolbox.xml');

Object.assign(ScratchBlocks.Blocks, {
	'motion_rotate': {
		/**
		 * Block to change relative rotation.
		 * @this ScratchBlocks.Block
		 */
		init: function () {
			this.jsonInit({
				"message0": "rotate by x: %1 y: %2 z: %3 degrees",
				"args0": [
					{
						"type": "input_value",
						"name": "DEGREESX"
					},
					{
						"type": "input_value",
						"name": "DEGREESY"
					},
					{
						"type": "input_value",
						"name": "DEGREESZ"
					}
				],
				"category": ScratchBlocks.Categories.motion,
				"extensions": ["colours_motion", "shape_statement"]
			});
		},
	},
	'motion_setrotation': {
		/**
		 * Block to set absolute rotation.
		 * @this ScratchBlocks.Block
		 */
		init: function () {
			this.jsonInit({
				"message0": "set rotation to x: %1 y: %2 z: %3 degrees",
				"args0": [
					{
						"type": "input_value",
						"name": "DEGREESX"
					},
					{
						"type": "input_value",
						"name": "DEGREESY"
					},
					{
						"type": "input_value",
						"name": "DEGREESZ"
					}
				],
				"category": ScratchBlocks.Categories.motion,
				"extensions": ["colours_motion", "shape_statement"]
			});
		}
	},
	'motion_gotoxyz': {
		/**
		 * Block to go to X, Y.
		 * @this ScratchBlocks.Block
		 */
		init: function () {
			this.jsonInit({
				"message0": "go to x: %1 y: %2 z: %3",
				"args0": [
					{
						"type": "input_value",
						"name": "X"
					},
					{
						"type": "input_value",
						"name": "Y"
					},
					{
						"type": "input_value",
						"name": "Z"
					}
				],
				"category": ScratchBlocks.Categories.motion,
				"extensions": ["colours_motion", "shape_statement"]
			});
		}
	},
	'motion_changezby': {
		/**
		 * Block to change Y.
		 * @this ScratchBlocks.Block
		 */
		init: function () {
			this.jsonInit({
				"message0": "change z by %1",
				"args0": [
					{
						"type": "input_value",
						"name": "DZ"
					}
				],
				"category": ScratchBlocks.Categories.motion,
				"extensions": ["colours_motion", "shape_statement"]
			});
		}
	},
	'motion_setz': {
		/**
		 * Block to set Z.
		 * @this ScratchBlocks.Block
		 */
		init: function () {
			this.jsonInit({
				"message0": "set z to %1",
				"args0": [
					{
						"type": "input_value",
						"name": "Z"
					}
				],
				"category": ScratchBlocks.Categories.motion,
				"extensions": ["colours_motion", "shape_statement"]
			});
		}
	},
	'motion_zposition': {
		/**
		 * Block to report Z.
		 * @this ScratchBlocks.Block
		 */
		init: function () {
			this.jsonInit({
				"message0": "z position",
				"category": ScratchBlocks.Categories.motion,
				"checkboxInFlyout": true,
				"extensions": ["colours_motion", "output_number"]
			});
		}
	},
	'looks_setcamerato': {
		/**
		 * Block to set camera position
		 * @this ScratchBlocks.Block
		 */
		init: function () {
			this.jsonInit({
				"message0": "set camera to x: %1 y: %2 z: %3",
				"args0": [
					{
						"type": "input_value",
						"name": "X"
					},
					{
						"type": "input_value",
						"name": "Y"
					},
					{
						"type": "input_value",
						"name": "Z"
					}
				],
				"category": ScratchBlocks.Categories.looks,
				"extensions": ["colours_looks", "shape_statement"]
			});
		}
	},
	'looks_changecameraxby': {
		/**
		 * Block to change camera x position
		 * @this ScratchBlocks.Block
		 */
		init: function () {
			this.jsonInit({
				"message0": "change camera x by %1",
				"args0": [
					{
						"type": "input_value",
						"name": "DX"
					}
				],
				"category": ScratchBlocks.Categories.looks,
				"extensions": ["colours_looks", "shape_statement"]
			});
		}
	},
	'looks_changecamerayby': {
		/**
		 * Block to change camera y position
		 * @this ScratchBlocks.Block
		 */
		init: function () {
			this.jsonInit({
				"message0": "change camera y by %1",
				"args0": [
					{
						"type": "input_value",
						"name": "DY"
					}
				],
				"category": ScratchBlocks.Categories.looks,
				"extensions": ["colours_looks", "shape_statement"]
			});
		}
	},
	'looks_changecamerazby': {
		/**
		 * Block to change camera z position
		 * @this ScratchBlocks.Block
		 */
		init: function () {
			this.jsonInit({
				"message0": "change camera z by %1",
				"args0": [
					{
						"type": "input_value",
						"name": "DZ"
					}
				],
				"category": ScratchBlocks.Categories.looks,
				"extensions": ["colours_looks", "shape_statement"]
			});
		}
	},
	'looks_turncameravertical': {
		/**
		 * Block to rotate camera up and down around center.
		 * @this ScratchBlocks.Block
		 */
		init: function () {
			this.jsonInit({
				"message0": "orbit camera %1 degrees vertically",
				"args0": [
					{
						"type": "input_value",
						"name": "DEGREES"
					}
				],
				"category": ScratchBlocks.Categories.looks,
				"extensions": ["colours_looks", "shape_statement"]
			});
		}
	},
	'looks_turncamerahorizontal': {
		/**
		 * Block to rotate camera left and right around center
		 * @this ScratchBlocks.Block
		 */
		init: function () {
			this.jsonInit({
				"message0": "orbit camera %1 degrees horizontally",
				"args0": [
					{
						"type": "input_value",
						"name": "DEGREES"
					}
				],
				"category": ScratchBlocks.Categories.looks,
				"extensions": ["colours_looks", "shape_statement"]
			});
		}
	},
	'looks_changecamerazoomby': {
		/**
		 * Block to change camera zoom
		 * @this ScratchBlocks.Block
		 */
		init: function () {
			this.jsonInit({
				"message0": "change camera zoom by %1",
				"args0": [
					{
						"type": "input_value",
						"name": "DZOOM"
					}
				],
				"category": ScratchBlocks.Categories.looks,
				"extensions": ["colours_looks", "shape_statement"]
			});
		}
	},
	'pen_sphere': {
		/**
		 * Block to draw sphere
		 * @this ScratchBlocks.Block
		 */
		init: function () {
			this.jsonInit({
				"message0": "sphere radius: %1",
				"args0": [
					{
						"type": "input_value",
						"name": "RADIUS"
					}
				],
				"category": ScratchBlocks.Categories.pen,
				"extensions": ["colours_pen", "shape_statement"]
			});
		}
	},
	'pen_box': {
		/**
		 * Block to draw cube
		 * @this ScratchBlocks.Block
		 */
		init: function () {
			this.jsonInit({
				"message0": "box width: %1 height: %2 depth: %3",
				"args0": [
					{
						"type": "input_value",
						"name": "WIDTH"
					},
					{
						"type": "input_value",
						"name": "HEIGHT"
					},
					{
						"type": "input_value",
						"name": "DEPTH"
					}
				],
				"category": ScratchBlocks.Categories.pen,
				"extensions": ["colours_pen", "shape_statement"]
			});
		}
	},
	'pen_arc': {
		/**
		 * Block to draw cube
		 * @this ScratchBlocks.Block
		 */
		init: function () {
			this.jsonInit({
				"message0": "arc width: %1 height: %2",
				"args0": [
					{
						"type": "input_value",
						"name": "WIDTH"
					},
					{
						"type": "input_value",
						"name": "HEIGHT"
					}
				],
				"category": ScratchBlocks.Categories.pen,
				"extensions": ["colours_pen", "shape_statement"]
			});
		}
	},
	'pen_cylinder': {
		/**
		 * Block to draw cube
		 * @this ScratchBlocks.Block
		 */
		init: function () {
			this.jsonInit({
				"message0": "cylinder top: %1 bottom: %2 height: %3",
				"args0": [
					{
						"type": "input_value",
						"name": "TOP"
					},
					{
						"type": "input_value",
						"name": "BOTTOM"
					},
					{
						"type": "input_value",
						"name": "HEIGHT"
					}
				],
				"category": ScratchBlocks.Categories.pen,
				"extensions": ["colours_pen", "shape_statement"]
			});
		}
	}
});

ScratchBlocks.Blocks.defaultToolbox = Toolbox;

module.exports = ScratchBlocks;
