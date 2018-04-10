let NEW_BLOCK_STRING_drawline = '<block type="pen_drawline" id="pen_drawline"><value name="length"><shadow type="math_number"><field name="NUM">100</field></shadow></value>'
	+ '<value name="pensize"><shadow type="math_number"><field name="NUM">1</field></shadow></value>'
	+ '<value name="growth"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>';
let NEW_BLOCK_CATEGORY_drawline = 'Pen';


vm.runtime._primitives.pen_drawline = function (args, util) {
	let linelength = Number(args.length);
	let initialpensize = Number(args.pensize);
	let pengrowth1 = Number(args.growth);
	let roundend = args.operand;
	let stepinc = 2;
	let pensizetemp = initialpensize;
	let x_temp = 0;
	let y_temp = 0;
	let pengrowth2 = 0;
	let pensizefinal = 0;

	if (linelength < 0) {
		args.DEGREES = 180;
		vm.runtime._primitives.motion_turnleft(args, util);
		linelength = Math.abs(linelength);
	}
	for (let i =0; i < linelength / stepinc; i++) {
		pensizetemp = pensizetemp + pengrowth1;
		args.SIZE = pensizetemp;
		vm.runtime._primitives.pen_setpensizeto(args, util);
		args.STEPS = stepinc;
		vm.runtime._primitives.motion_movesteps(args, util);
	}
	pensizefinal = pensizetemp;
	if (!roundend) {
		x_temp = util.target.x;
		y_temp = util.target.y;
		args.DEGREES = 45 + 15 * (pengrowth1 / stepinc);
		vm.runtime._primitives.motion_turnleft(args, util);
		pengrowth2 = (3 - pengrowth1 / stepinc) / 2.1;
		pensizestemp = pensizetemp - pengrowth2 * 2;
		while (pensizetemp >= 1) {
			args.STEPS = 1;
			vm.runtime._primitives.motion_movesteps(args, util);
			args.SIZE = pensizetemp;
			vm.runtime._primitives.pen_setpensizeto(args, util);
			pensizetemp = pensizetemp - pengrowth2;
		}
		args.X = x_temp;
		args.Y = y_temp;
		vm.runtime._primitives.motion_gotoxy(args, util);
		args.SIZE = pensizefinal;
		vm.runtime._primitives.pen_setpensizeto(args, util);
		pensizetemp = pensizefinal;
		args.DEGREES = 90 + (30 * (pengrowth1 / stepinc));
		vm.runtime._primitives.motion_turnright(args, util);
		pengrowth2 = (3 - (pengrowth1 / stepinc)) / 2.1;
		pensizetemp = pensizetemp - (pengrowth2 * 2);
		args.SIZE = pensizetemp;
		vm.runtime._primitives.pen_setpensizeto(args, util);
		while (pensizetemp >= 1) {
			args.STEPS = 1;
			vm.runtime._primitives.motion_movesteps(args, util);
			args.SIZE = pensizetemp;
			vm.runtime._primitives.pen_setpensizeto(args, util);
			pensizetemp = pensizetemp - pengrowth2;
		}
		args.X = x_temp;
		args.Y = y_temp;
		vm.runtime._primitives.motion_gotoxy(args, util);
		args.DEGREES = 45 + (15 * (pengrowth1 / stepinc));
		vm.runtime._primitives.motion_turnleft(args, util);
	}
	args.SIZE = pensizefinal;
	vm.runtime._primitives.pen_setpensizeto(args, util);
}

ScratchBlocks.Blocks['pen_drawline'] = {
	/**
	 * drawline Block+.
	 * @this Blockly.Block
	 */
	init: function () {
		this.jsonInit({
			"message0": "line: length %1 pen size %2 growth %3 round end? %4",
			args0:
				[{ type: "input_value", name: "length" },
				{ type: "input_value", name: "pensize" },
				{ type: "input_value", name: "growth" },
				{ type: "input_value", name: "operand", check: "Boolean" }
				],

			inputsInline: !0,
			previousStatement: null,
			nextStatement: null,
			category: ScratchBlocks.Categories.pen,
			colour: ScratchBlocks.Colours.pen.primary,
			colourSecondary: ScratchBlocks.Colours.pen.secondary,
			colourTertiary: ScratchBlocks.Colours.pen.tertiary
		})
	}
};

let toolboxDOM_drawline = (new
	DOMParser).parseFromString(ScratchBlocks.Blocks.defaultToolbox, 'text/xml');
let newBlockDOM_drawline = (new DOMParser).parseFromString(NEW_BLOCK_STRING_drawline,
	'text/xml');
toolboxDOM_drawline.getElementsByName('Pen')[0].appendChild(newBlockDOM_drawline.children[0]);
let toolboxXML_drawline = (new XMLSerializer).serializeToString(toolboxDOM_drawline);
Blockly.getMainWorkspace().updateToolbox(toolboxXML_drawline);