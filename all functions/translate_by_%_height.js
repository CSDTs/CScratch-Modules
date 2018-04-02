let NEW_BLOCK_STRING_translateby_height = '<block type="motion_translate_byheight" id="motion_translate_byheight"><value name="STEPS"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block>';
let NEW_BLOCK_CATEGORY_translateby_height = 'Motion';


vm.runtime._primitives.motion_translate_byheight = function (args, util) {
	var percent = Number(args.STEPS) / 100;
	let size = (util.target.getBounds().top) - (util.target.getBounds().bottom);
	var dy = 0;
	if (percent > 0) { dy = size * percent; }
	else {
		dy = -1 * size * percent;
	}
	// stamp
	vm.runtime._primitives.pen_stamp(args, util);
	// move
	util.target.setXY(util.target.x, util.target.y + dy);
}

ScratchBlocks.Blocks['motion_translate_byheight'] = {
	/**
	 * Translate_by_height Block+.
	 * @this Blockly.Block
	 */
	init: function () {
		this.jsonInit({
			message0: 'translate by %1 percent of height in y',
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

var toolboxDOM = (new
	DOMParser).parseFromString(ScratchBlocks.Blocks.defaultToolbox, 'text/xml');
var newBlockDOM = (new DOMParser).parseFromString(NEW_BLOCK_STRING_translateby_height,
	'text/xml');
toolboxDOM.getElementsByName('Motion')[0].appendChild(newBlockDOM.children[0]);
var toolboxXML = (new XMLSerializer).serializeToString(toolboxDOM);
Blockly.getMainWorkspace().updateToolbox(toolboxXML);