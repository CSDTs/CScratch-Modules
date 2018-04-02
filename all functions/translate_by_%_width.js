let NEW_BLOCK_STRING_translateby_width = '<block type="motion_translate_bywidth" id="motion_translate_bywidth"><value name="STEPS"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block>';
let NEW_BLOCK_CATEGORY_translatebywidth = 'Motion';


vm.runtime._primitives.motion_translate_bywidth = function (args, util) {
	var percent = Number(args.STEPS) / 100;
	let size = (util.target.getBounds().right) - (util.target.getBounds().left);
	var dx = size * percent;
	// stamp
	vm.runtime._primitives.pen_stamp(args, util);
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

var toolboxDOM_width = (new DOMParser).parseFromString(ScratchBlocks.Blocks.defaultToolbox, 'text/xml');
var newBlockDOM_width = (new DOMParser).parseFromString(NEW_BLOCK_STRING_translateby_width, 'text/xml');
toolboxDOM_width.getElementsByName('Motion')[0].appendChild(newBlockDOM_width.children[0]);
var toolboxXML_width = (new XMLSerializer).serializeToString(toolboxDOM_width);
Blockly.getMainWorkspace().updateToolbox(toolboxXML_width);