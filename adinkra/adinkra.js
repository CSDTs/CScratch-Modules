let NEW_BLOCK_STRING_logspiralc = '<block type="pen_logspiralc" id="pen_logspiralc"><value name="NUMC"><shadow type="math_number"><field name="NUM">1.002</field></shadow></value>'
	+ '<value name="startangle"><shadow type="math_number"><field name="NUM">180</field></shadow></value>'
	+ '<value name="endangle"><shadow type="math_number"><field name="NUM">0</field></shadow></value>'
	+ '<value name="size"><shadow type="math_number"><field name="NUM">500</field></shadow></value>'
	+ '<value name="pengrowth"><shadow type="math_number"><field name="NUM">0.2</field></shadow></value></block>';
//
let NEW_BLOCK_STRING_drawcircle = '<block type="pen_drawcircle" id="pen_drawcircle"><value name="NUM1"><shadow type="math_number"><field name="NUM">100</field></shadow></value>'
	+ '<value name="NUM2"><shadow type="math_number"><field name="NUM">360</field></shadow></value></block>';
//
let NEW_BLOCK_STRING_drawline = '<block type="pen_drawline" id="pen_drawline"><value name="length"><shadow type="math_number"><field name="NUM">100</field></shadow></value>'
	+ '<value name="pensize"><shadow type="math_number"><field name="NUM">1</field></shadow></value>'
	+ '<value name="growth"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>';
//
let NEW_BLOCK_STRING_parabola = '<block type="pen_parabola" id="pen_parabola"><value name="NUMa"><shadow type="math_number"><field name="NUM">50</field></shadow></value>'
	+ '<value name="sweep"><shadow type="math_number"><field name="NUM">180</field></shadow></value>'
	+ '<value name="size"><shadow type="math_number"><field name="NUM">1</field></shadow></value>'
	+ '<value name="widthrate"><shadow type="math_number"><field name="NUM">0.3</field></shadow></value></block>';
//
let NEW_BLOCK_STRING_false = '<block type="operators_false" id="operators_false"></block>';
//
let NEW_BLOCK_STRING_true = '<block type="operators_true" id="operators_true"></block>';
/*
**
**   all Functions for adinkra
**
*/
// draw log spiral
vm.runtime._primitives.pen_logspiralc = function (args, util) {
	let C = Number(args.NUMC)
	let startangle = Number(args.startangle)
	let endangle = Number(args.endangle)
	let size = Number(args.size)
	let pengrowth = Number(args.pengrowth)
	let clockwise = args.operand
	let x_orgin = util.target.x
	let y_orgin = util.target.y
	let s_direction = util.target.direction
	let starting_direction = 0
	let beta = Math.log(C)
	let t = startangle
	let tinc = 4
	let roffset = size * Math.pow(Math.E, beta * startangle) - size
	let r = 0
	let rad2deg = 180 / Math.PI
	let deg2rad = Math.PI / 180
	if (C <= 1) {
		return 0
	}
	if (C > 1.1) {
		return 0
	}
	if (startangle > endangle) {
		starting_direction = s_direction + 90
	}
	else {
		starting_direction = s_direction
	}
	if (endangle > startangle) {
		tinc = 4
		if (clockwise) {
			args.DEGREES = Math.atan(1 / beta) * rad2deg
			vm.runtime._primitives.motion_turnright(args, util)
		}
		else {
			args.DEGREES = Math.atan(1 / beta) * rad2deg
			vm.runtime._primitives.motion_turnleft(args, util)
		}
	}
	else {
		tinc = -4
		if (clockwise) {
			args.DEGREES = Math.atan(1 / beta) * rad2deg + 180
			vm.runtime._primitives.motion_turnleft(args, util)
		}
		else {
			args.DEGREES = Math.atan(1 / beta) * rad2deg + 180
			vm.runtime._primitives.motion_turnright(args, util)
		}
	}
	for (let i = 0; i < Math.abs((endangle - startangle) / tinc); i++) {
		t = t + tinc
		r = size * Math.pow(Math.E, beta * t) - size
		if (startangle > endangle) {
			if (clockwise) {
				args.DEGREES = tinc
				vm.runtime._primitives.motion_turnright(args, util)
			}
			else {
				args.DEGREES = tinc
				vm.runtime._primitives.motion_turnleft(args, util)
			}
		}
		else {
			if (clockwise) {
				args.DEGREES = tinc
				vm.runtime._primitives.motion_turnleft(args, util)
			}
			else {
				args.DEGREES = tinc
				vm.runtime._primitives.motion_turnright(args, util)
			}
		}
		args.SIZE = pengrowth
		vm.runtime._primitives.pen_changepensizeby(args, util)
		if (!clockwise) {
			let x_go = (x_orgin + r * Math.cos((t + starting_direction) * deg2rad)) - (roffset * Math.cos((startangle + starting_direction) * deg2rad))
			let y_go = (y_orgin + r * Math.sin((t + starting_direction) * deg2rad)) - (roffset * Math.sin((startangle + starting_direction) * deg2rad))
			args.X = x_go
			args.Y = y_go
			vm.runtime._primitives.motion_gotoxy(args, util)
			args.DURATION = 0.001
			vm.runtime._primitives.control_wait(args, util)
		}
		else {
			let x_go = (x_orgin + r * Math.cos((t * -1 + starting_direction) * deg2rad)) - (roffset * Math.cos((startangle * -1 + starting_direction) * deg2rad))
			let y_go = (y_orgin + r * Math.sin((t * -1 + starting_direction) * deg2rad)) - (roffset * Math.sin((startangle * -1 + starting_direction) * deg2rad))
			args.X = x_go
			args.Y = y_go
			vm.runtime._primitives.motion_gotoxy(args, util)
			args.DURATION = 0.001
			vm.runtime._primitives.control_wait(args, util)
		}

	}

}

ScratchBlocks.Blocks['pen_logspiralc'] = {
	/**
	 * drawcircle Block+.
	 * @this Blockly.Block
	 */
	init: function () {
		this.jsonInit({
			'message0': 'log spiral C %1 start angle %2 end angle %3 size %4 pen growth%5 clockwise %6',
			args0:
				[{ type: 'input_value', name: 'NUMC' },
					{ type: 'input_value', name: 'startangle' },
					{ type: 'input_value', name: 'endangle' },
					{ type: 'input_value', name: 'size' },
					{ type: 'input_value', name: 'pengrowth' },
					{ type: 'input_value', name: 'operand', check: 'Boolean' }
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
/**
  * drawcircle 
  * 
  */
vm.runtime._primitives.pen_drawcircle = function (args, util) {
	let rad2deg = 180 / Math.PI
	let diameter = Number(args.NUM1)
	let sweep = Number(args.NUM2)
	let anglecount = 0
	let stepinc = 6
	let numbsides = 180 / (Math.asin(stepinc / diameter) * rad2deg)
	while ((360 / numbsides + anglecount) <= sweep) {
		anglecount += 360 / numbsides
		args.DEGREES = 360 / numbsides
		vm.runtime._primitives.motion_turnleft(args, util)
		args.STEPS = stepinc
		vm.runtime._primitives.motion_movesteps(args, util)
	}
	args.DEGREES = sweep - anglecount
	vm.runtime._primitives.motion_turnleft(args, util)
}

ScratchBlocks.Blocks['pen_drawcircle'] = {
	/**
	 * drawcircle Block+.
	 * @this Blockly.Block
	 */
	init: function () {
		this.jsonInit({
			message0: 'circle: diameter %1 sweep %2',
			args0:
				[{ type: 'input_value', name: 'NUM1' },
					{ type: 'input_value', name: 'NUM2' }
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
/**
  * drawline
  * 
  */
vm.runtime._primitives.pen_drawline = function (args, util) {
	let linelength = Number(args.length)
	let initialpensize = Number(args.pensize)
	let pengrowth1 = Number(args.growth)
	let roundend = args.operand
	let stepinc = 2
	let pensizetemp = initialpensize
	let x_temp = 0
	let y_temp = 0
	let pengrowth2 = 0
	let pensizefinal = 0

	if (linelength < 0) {
		args.DEGREES = 180
		vm.runtime._primitives.motion_turnleft(args, util)
		linelength = Math.abs(linelength)
	}
	for (let i = 0; i < linelength / stepinc; i++) {
		pensizetemp = pensizetemp + pengrowth1
		args.SIZE = pensizetemp
		vm.runtime._primitives.pen_setpensizeto(args, util)
		args.STEPS = stepinc;
		vm.runtime._primitives.motion_movesteps(args, util)
	}
	pensizefinal = pensizetemp;
	if (!roundend) {
		x_temp = util.target.x
		y_temp = util.target.y
		args.DEGREES = 45 + 15 * (pengrowth1 / stepinc)
		vm.runtime._primitives.motion_turnleft(args, util)
		pengrowth2 = (3 - pengrowth1 / stepinc) / 2.1
		pensizestemp = pensizetemp - pengrowth2 * 2
		while (pensizetemp >= 1) {
			args.STEPS = 1
			vm.runtime._primitives.motion_movesteps(args, util)
			args.SIZE = pensizetemp
			vm.runtime._primitives.pen_setpensizeto(args, util)
			pensizetemp = pensizetemp - pengrowth2
		}
		args.X = x_temp
		args.Y = y_temp
		vm.runtime._primitives.motion_gotoxy(args, util)
		args.SIZE = pensizefinal
		vm.runtime._primitives.pen_setpensizeto(args, util)
		pensizetemp = pensizefinal
		args.DEGREES = 90 + (30 * (pengrowth1 / stepinc))
		vm.runtime._primitives.motion_turnright(args, util)
		pengrowth2 = (3 - (pengrowth1 / stepinc)) / 2.1
		pensizetemp = pensizetemp - (pengrowth2 * 2)
		args.SIZE = pensizetemp
		vm.runtime._primitives.pen_setpensizeto(args, util)
		while (pensizetemp >= 1) {
			args.STEPS = 1
			vm.runtime._primitives.motion_movesteps(args, util)
			args.SIZE = pensizetemp
			vm.runtime._primitives.pen_setpensizeto(args, util)
			pensizetemp = pensizetemp - pengrowth2
		}
		args.X = x_temp
		args.Y = y_temp
		vm.runtime._primitives.motion_gotoxy(args, util)
		args.DEGREES = 45 + (15 * (pengrowth1 / stepinc))
		vm.runtime._primitives.motion_turnleft(args, util)
	}
	args.SIZE = pensizefinal
	vm.runtime._primitives.pen_setpensizeto(args, util)
}

ScratchBlocks.Blocks['pen_drawline'] = {
	/**
	 * drawline Block+.
	 * @this Blockly.Block
	 */
	init: function () {
		this.jsonInit({
			'message0': 'line: length %1 pen size %2 growth %3 round end? %4',
			args0:
				[{ type: 'input_value', name: 'length' },
					{ type: 'input_value', name: 'pensize' },
					{ type: 'input_value', name: 'growth' },
					{ type: 'input_value', name: 'operand', check: 'Boolean' }
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
//
/**
  * drawparabola
  * 
  */
vm.runtime._primitives.pen_parabola = function (args, util) {
	let rad2deg = 180 / Math.PI
	let deg2rad = Math.PI / 180
	let a = Number(args.NUMa)
	let sweep = Number(args.sweep)
	let size = Number(args.size)
	let widthrate = Number(args.widthrate)
	let x_orgin = util.target.x
	let y_orgin = util.target.y
	let starting_direction = util.target.direction
	let tinc = 4
	let t = sweep * -0.5
	let r = size * (-2 * a) / (1 + Math.cos(t * deg2rad))
	let x_old = x_orgin
	let y_old = y_orgin
	let x_new = 0
	let y_new = 0
	vm.runtime._primitives.looks_hide(args, util)
	vm.runtime._primitives.pen_penup(args, util)
	args.DIRECTION = util.target.direction - t / 2
	vm.runtime._primitives.motion_pointindirection(args, util)
	args.STEPS = r * -1
	vm.runtime._primitives.motion_movesteps(args, util)
	while (t <= sweep * 0.5) {
		args.DEGREES = tinc
		vm.runtime._primitives.motion_turnright(args, util)
		t = t + tinc
		if (t - tinc * 3 < 0) {
			args.SIZE = widthrate
			vm.runtime._primitives.pen_changepensizeby(args, util)
		}
		else {
			args.SIZE = widthrate * -1
			vm.runtime._primitives.pen_changepensizeby(args, util)
		}
		r = size * (-2 * a / (1 + Math.cos(t * deg2rad)));
		args.STEPS = r
		vm.runtime._primitives.motion_movesteps(args, util)
		vm.runtime._primitives.looks_show(args, util)
		args.DIRECTION = util.target.direction - t / 2 - 90
		vm.runtime._primitives.motion_pointindirection(args, util)
		args.DURATION = 0.001
		vm.runtime._primitives.control_wait(args, util)
		x_new = util.target.x
		y_new = util.target.y
		args.X = x_old
		args.Y = y_old
		vm.runtime._primitives.motion_gotoxy(args, util)
		vm.runtime._primitives.pen_pendown(args, util)
		args.X = x_new
		args.Y = y_new
		vm.runtime._primitives.motion_gotoxy(args, util)
		args.DIRECTION = util.target.direction - t / -2 + 90
		vm.runtime._primitives.motion_pointindirection(args, util)
		vm.runtime._primitives.pen_penup(args, util)
		vm.runtime._primitives.looks_hide(args, util)
		args.STEPS = r * -1
		vm.runtime._primitives.motion_movesteps(args, util)
		x_old = x_new
		y_old = y_new
	}
	args.X = x_new
	args.Y = y_new
	vm.runtime._primitives.motion_gotoxy(args, util)
	vm.runtime._primitives.looks_show(args, util)
	args.DEGREES = t / 2 + 180
	vm.runtime._primitives.motion_turnright(args, util)
}

ScratchBlocks.Blocks['pen_parabola'] = {
	/**
	 * drawparabola Block+.
	 * @this Blockly.Block
	 */
	init: function () {
		this.jsonInit({
			'message0': 'parabola a %1 sweep %2 size %3 width rate %4',
			args0:
				[{ type: 'input_value', name: 'NUMa' },
					{ type: 'input_value', name: 'sweep' },
					{ type: 'input_value', name: 'size' },
					{ type: 'input_value', name: 'widthrate' },
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
/**
  * operator false
  * 
  */
vm.runtime._primitives.operators_false = function (args) {
	return false
}
ScratchBlocks.Blocks['operators_false'] = {
	/**
	 * False Block+.
	 * @this Blockly.Block
	 */
	init: function () {
		this.jsonInit({
			message0: 'false',
			category: ScratchBlocks.Categories.operators,
			colour: ScratchBlocks.Colours.operators.primary,
			colourSecondary: ScratchBlocks.Colours.operators.secondary,
			colourTertiary: ScratchBlocks.Colours.operators.tertiary,
			'extensions': ['colours_operators', 'output_boolean'],
		})
	}
};
/**
  * operator true
  * 
  */
vm.runtime._primitives.operators_true = function (args) {
	return true
}

ScratchBlocks.Blocks['operators_true'] = {
	/**
	 * Translate_in_x Block+.
	 * @this Blockly.Block
	 */
	init: function () {
		this.jsonInit({
			message0: 'true',
			category: ScratchBlocks.Categories.operators,
			colour: ScratchBlocks.Colours.operators.primary,
			colourSecondary: ScratchBlocks.Colours.operators.secondary,
			colourTertiary: ScratchBlocks.Colours.operators.tertiary,
			'extensions': ['colours_operators', 'output_boolean'],
		})
	}
};
//
let toolboxDOM = (new
	DOMParser).parseFromString(ScratchBlocks.Blocks.defaultToolbox, 'text/xml')
//
let newBlockDOM = (new DOMParser).parseFromString(NEW_BLOCK_STRING_logspiralc, 'text/xml')
let newBlockDOM_drawcircle = (new DOMParser).parseFromString(NEW_BLOCK_STRING_drawcircle, 'text/xml')
let newBlockDOM_drawline = (new DOMParser).parseFromString(NEW_BLOCK_STRING_drawline, 'text/xml')
let newBlockDOM_parabola = (new DOMParser).parseFromString(NEW_BLOCK_STRING_parabola, 'text/xml')
let newBlockDOM_false = (new DOMParser).parseFromString(NEW_BLOCK_STRING_false, 'text/xml')
let newBlockDOM_true = (new DOMParser).parseFromString(NEW_BLOCK_STRING_true, 'text/xml')
//
toolboxDOM.getElementsByName('Pen')[0].appendChild(newBlockDOM.children[0])
toolboxDOM.getElementsByName('Pen')[0].appendChild(newBlockDOM_drawcircle.children[0])
toolboxDOM.getElementsByName('Pen')[0].appendChild(newBlockDOM_drawline.children[0])
toolboxDOM.getElementsByName('Pen')[0].appendChild(newBlockDOM_parabola.children[0])
toolboxDOM.getElementsByName('Operators')[0].appendChild(newBlockDOM_false.children[0])
toolboxDOM.getElementsByName('Operators')[0].appendChild(newBlockDOM_true.children[0])
let toolboxXML = (new XMLSerializer).serializeToString(toolboxDOM)
Blockly.getMainWorkspace().updateToolbox(toolboxXML)