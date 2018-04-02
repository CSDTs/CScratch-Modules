let NEW_BLOCK_STRING_true = '<block type="operators_true" id="operators_true"></block>';
let NEW_BLOCK_CATEGORY_true = 'Operators';


vm.runtime._primitives.operators_true = function (args) {
	return true;
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

var toolboxDOM = (new DOMParser).parseFromString(ScratchBlocks.Blocks.defaultToolbox, 'text/xml');
var newBlockDOM = (new DOMParser).parseFromString(NEW_BLOCK_STRING_true,
	'text/xml');
toolboxDOM.getElementsByName('Operators')[0].appendChild(newBlockDOM.children[0]);
var toolboxXML = (new XMLSerializer).serializeToString(toolboxDOM);
Blockly.getMainWorkspace().updateToolbox(toolboxXML);