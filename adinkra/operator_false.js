let NEW_BLOCK_STRING_false = '<block type="operators_false" id="operators_false"></block>';
let NEW_BLOCK_CATEGORY_false = 'Operators';


vm.runtime._primitives.operators_false= function (args) {
		return false;
    }

ScratchBlocks.Blocks['operators_false'] = {
  /**
   * False Block+.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit ( {
        message0:"false",
          category:ScratchBlocks.Categories.operators,
          colour:ScratchBlocks.Colours.operators.primary,
          colourSecondary:ScratchBlocks.Colours.operators.secondary,
          colourTertiary:ScratchBlocks.Colours.operators.tertiary,
		  "extensions": ["colours_operators", "output_boolean"],
    })
  }
};

var toolboxDOM = (new DOMParser).parseFromString(ScratchBlocks.Blocks.defaultToolbox, 'text/xml');
var newBlockDOM = (new DOMParser).parseFromString(NEW_BLOCK_STRING_false,
'text/xml');
toolboxDOM.getElementsByName('Operators')[0].appendChild(newBlockDOM.children[0]);
var toolboxXML = (new XMLSerializer).serializeToString(toolboxDOM);
Blockly.getMainWorkspace().updateToolbox(toolboxXML);