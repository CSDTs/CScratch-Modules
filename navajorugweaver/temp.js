let NEW_BLOCK_STRING_shiftandstamp = '<block type="pen_shiftandstamp" id="pen_shiftandstamp"><shadow type="math_number"><field name="NUM">10</field></value></block>';
let NEW_BLOCK_CATEGORY_shiftandstamp = 'Pen';
//
//
let NEW_BLOCK_STRING_translatebyx = '<block type="motion_translate_inx_stitch" id="motion_translate_inx_nostamp"><value name="STEPS"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block>';
let NEW_BLOCK_CATEGORY_translatebyx = 'Motion';
//
let NEW_BLOCK_STRING_translatebyy = '<block type="motion_translate_iny_stitch" id="motion_translate_iny_nostamp"><value name="STEPS"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block>';
let NEW_BLOCK_CATEGORY_translatebyy = 'Motion';
//
let NEW_BLOCK_STRING_gotostitch = '<block type="motion_gotostitch" id="motion_gotostitch"><value name="NUM_X"><shadow type="math_number"><field name="NUM">0</field></shadow></value>'
	+ '<value name="NUM_Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block>';
let NEW_BLOCK_CATEGORY_gotostitch = 'Motion';
//
let NEW_BLOCK_STRING_translateby_width = '<block type="motion_translate_bywidth" id="motion_translate_bywidth"><value name="STEPS"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block>';
let NEW_BLOCK_CATEGORY_translatebywidth = 'Motion';
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
			message0: 'shift and stamp',
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
//
vm.runtime._primitives.motion_gotostitch = function (args, util) {
	let x = Number(args.NUM_X);
	let y = Number(args.NUM_Y);
	let size_x = (util.target.getBounds().right) - (util.target.getBounds().left);
	let size_y = (util.target.getBounds().top) - (util.target.getBounds().bottom);
	let dx = size_x;
	let dy = size_y;
	args.X = dx * x;
	args.Y = dy * y;
	vm.runtime._primitives.motion_gotoxy(args, util);
}

ScratchBlocks.Blocks['motion_gotostitch'] = {
	/**
	 * gotostitch Block+.
	 * @this Blockly.Block
	 */
	init: function () {
		this.jsonInit({
			message0: 'go to stitches %1 x, %2 y',
			args0:
				[{ type: 'input_value', name: 'NUM_X' },
					{ type: 'input_value', name: 'NUM_Y' }
				],
			inputsInline: !0,
			previousStatement: null,
			nextStatement: null,
			category: ScratchBlocks.Categories.motion,
			colour: ScratchBlocks.Colours.motion.primary,
			colourSecondary: ScratchBlocks.Colours.motion.secondary,
			colourTertiary: ScratchBlocks.Colours.motion.tertiary
		})
	}
};
//
vm.runtime._primitives.motion_translate_inx_stitch = function (args, util) {
	var times = Number(args.STEPS);
	let size = (util.target.getBounds().right) - (util.target.getBounds().left);
	var dx = 0;
	if (times > 0) { dx = size; }
	else {
		dx = -1 * size;
		times = Math.abs(times);
	}
	for (let i = 0; i < times; i++) {
		// move
		util.target.setXY(util.target.x + dx, util.target.y);
	}
}
ScratchBlocks.Blocks['motion_translate_inx_stitch'] = {
	/**
	 * Translate_in_x_stitch Block+.
	 * @this Blockly.Block
	 */
	init: function () {
		this.jsonInit({
			message0: 'translate by %1 stitches in x',
			args0:
				[{ type: 'input_value', name: 'STEPS' }],
			inputsInline: !0,
			previousStatement: null,
			nextStatement: null,
			category: ScratchBlocks.Categories.motion,
			colour: ScratchBlocks.Colours.motion.primary,
			colourSecondary: ScratchBlocks.Colours.motion.secondary,
			colourTertiary: ScratchBlocks.Colours.motion.tertiary
		})
	}
};
//
/////////////////////////////////////////////////////////////////////////////////
// translate by y
vm.runtime._primitives.motion_translate_iny_stitch = function (args, util) {

	var times = Number(args.STEPS);
	let size = (util.target.getBounds().top) - (util.target.getBounds().bottom);
	var dy = 0;
	if (times > 0) { dy = size; }
	else {
		dy = -1 * size;
		times = Math.abs(times);
	}
	//repeat args times
	for (let i = 0; i < times; i++) {
		// move
		util.target.setXY(util.target.x, util.target.y + dy);

	}


}
ScratchBlocks.Blocks['motion_translate_iny_stitch'] = {
	/**
	 * Translate_in_y Block+.
	 * @this Blockly.Block
	 */
	init: function () {
		this.jsonInit({
			message0: 'translate by %1 stitches in y',
			args0:
				[{ type: 'input_value', name: 'STEPS' }],
			inputsInline: !0,
			previousStatement: null,
			nextStatement: null,
			category: ScratchBlocks.Categories.motion,
			colour: ScratchBlocks.Colours.motion.primary,
			colourSecondary: ScratchBlocks.Colours.motion.secondary,
			colourTertiary: ScratchBlocks.Colours.motion.tertiary
		})
	}
};
///////////////////////////////////////////////////////////////////////////////////////
/*translate by width
*/
vm.runtime._primitives.motion_translate_bywidth = function (args, util) {
	var percent = Number(args.STEPS) / 100;
	let size = (util.target.getBounds().right) - (util.target.getBounds().left);
	var dx = size * percent;
	// move
	args.STEPS = dx;
	vm.runtime._primitives.motion_movesteps(args, util);
}

ScratchBlocks.Blocks['motion_translate_bywidth'] = {
	/**
	 * Translate_by_width Block+.
	 * @this Blockly.Block
	 */
	init: function () {
		this.jsonInit({
			message0: 'translate by %1 percent of width in x',
			args0:
				[{ type: 'input_value', name: 'STEPS' }],
			inputsInline: !0,
			previousStatement: null,
			nextStatement: null,
			category: ScratchBlocks.Categories.motion,
			colour: ScratchBlocks.Colours.motion.primary,
			colourSecondary: ScratchBlocks.Colours.motion.secondary,
			colourTertiary: ScratchBlocks.Colours.motion.tertiary
		})
	}
};
let toolboxDOM_shiftandstamp = (new
	DOMParser).parseFromString(ScratchBlocks.Blocks.defaultToolbox, 'text/xml');
let newBlockDOM_shiftandstamp = (new DOMParser).parseFromString(NEW_BLOCK_STRING_shiftandstamp,
	'text/xml');
let newBlockDOM_translatebyx = (new DOMParser).parseFromString(NEW_BLOCK_STRING_translatebyx,
	'text/xml');
let newBlockDOM_translatebyy = (new DOMParser).parseFromString(NEW_BLOCK_STRING_translatebyy,
	'text/xml');
let newBlockDOM_gotostitch = (new DOMParser).parseFromString(NEW_BLOCK_STRING_gotostitch,
	'text/xml');
let newBlockDOM_translatebywidth = (new DOMParser).parseFromString(NEW_BLOCK_STRING_translateby_width, 'text/xml');
toolboxDOM_shiftandstamp.getElementsByName('Pen')[0].appendChild(newBlockDOM_shiftandstamp.children[0]);
toolboxDOM_shiftandstamp.getElementsByName('Motion')[0].appendChild(newBlockDOM_translatebyx.children[0]);
toolboxDOM_shiftandstamp.getElementsByName('Motion')[0].appendChild(newBlockDOM_translatebyy.children[0]);
toolboxDOM_shiftandstamp.getElementsByName('Motion')[0].appendChild(newBlockDOM_gotostitch.children[0]);
toolboxDOM_shiftandstamp.getElementsByName('Motion')[0].appendChild(newBlockDOM_translatebywidth.children[0]);
let toolboxXML_shiftandstamp = (new XMLSerializer).serializeToString(toolboxDOM_shiftandstamp);
Blockly.getMainWorkspace().updateToolbox(toolboxXML_shiftandstamp);