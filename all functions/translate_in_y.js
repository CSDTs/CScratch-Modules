let NEW_BLOCK_STRING_translatebyy = '<block type="motion_translate_iny" id="motion_translate_iny"><value name="STEPS"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block>';
let NEW_BLOCK_CATEGORY_translatebyy = 'Motion';


vm.runtime._primitives.motion_translate_iny = function (args, util) {

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
		// stamp
		vm.runtime._primitives.pen_stamp(args, util);
		// move
		util.target.setXY(util.target.x, util.target.y + dy);

	}


}

ScratchBlocks.Blocks['motion_translate_iny'] = {
	/**
	 * Translate_in_y Block+.
	 * @this Blockly.Block
	 */
	init: function () {
		this.jsonInit({
			message0: 'translate by %1 costumes in y',
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

let toolboxDOM_translatebyy = (new
	DOMParser).parseFromString(ScratchBlocks.Blocks.defaultToolbox, 'text/xml');
let newBlockDOM_translatebyy = (new DOMParser).parseFromString(NEW_BLOCK_STRING_translatebyy,
	'text/xml');
toolboxDOM_translatebyy.getElementsByName('Motion')[0].appendChild(newBlockDOM_translatebyy.children[0]);
let toolboxXML_translatebyy = (new XMLSerializer).serializeToString(toolboxDOM_translatebyy);
Blockly.getMainWorkspace().updateToolbox(toolboxXML_translatebyy);