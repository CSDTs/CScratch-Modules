let NEW_BLOCK_STRING_shiftandstamp = '<block type="pen_shiftandstamp" id="pen_shiftandstamp"><shadow type="math_number"><field name="NUM">10</field></value></block>';
let NEW_BLOCK_CATEGORY_shiftandstamp = 'Pen';

vm.runtime._primitives.pen_shiftandstamp = function (args, util) {
	// set variables
	let x = util.target.x;
	let y = util.target.y;
	let direction = util.target.direction;
	let size = util.target.size;
	let width = size * 1.2;
	let height = size * 0.7;
	let xstitch = Math.round(x / (size * 1.2));
	//set directions, x and y
	args.DEGREES = 0;
	vm.runtime._primitives.motion_pointindirection(args, util);
	args.X = Math.round((x / width)) * width;
	args.Y = Math.round((y / height)) * height;
	vm.runtime._primitives.motion_gotoxy(args, util);
	// calculate mod
	args.NUM1 = Math.round(xstitch);
	args.NUM2 = 2;
	let r = vm.runtime._primitives.operator_mod(args, util);
	if (r == 1) {
		args.STEPS = 50;
		vm.runtime._primitives.motion_translate_bywidth(args, util);
	}
	//stamp
	vm.runtime._primitives.pen_stamp(args, util);
	args.X = x;
	args.Y = y;
	vm.runtime._primitives.motion_gotoxy(args, util);
	args.DEGREES = direction;
	vm.runtime._primitives.motion_pointindirection(args, util);

}

ScratchBlocks.Blocks['pen_shiftandstamp'] = {
	/**
	 * Nonsense Block+.
	 * @this Blockly.Block
	 */
	init: function () {
		this.jsonInit({
			message0: "shift and stamp",
			inputsInline: 0,
			previousStatement: null,
			nextStatement: null,
			category: ScratchBlocks.Categories.pen,
			colour: ScratchBlocks.Colours.pen.primary,
			colourSecondary: ScratchBlocks.Colours.pen.secondary,
			colourTertiary: ScratchBlocks.Colours.pen.tertiary
		})
	}
};

let toolboxDOM_shiftandstamp = (new
	DOMParser).parseFromString(ScratchBlocks.Blocks.defaultToolbox, 'text/xml');
let newBlockDOM_shiftandstamp = (new DOMParser).parseFromString(NEW_BLOCK_STRING_shiftandstamp,
	'text/xml');
toolboxDOM_shiftandstamp.getElementsByName('Pen')[0].appendChild(newBlockDOM_shiftandstamp.children[0]);
let toolboxXML_shiftandstamp = (new XMLSerializer).serializeToString(toolboxDOM_shiftandstamp);
Blockly.getMainWorkspace().updateToolbox(toolboxXML_shiftandstamp);