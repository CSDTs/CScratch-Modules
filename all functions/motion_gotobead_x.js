let NEW_BLOCK_STRING_gotobead = '<block type="motion_gotobead" id="motion_GOTOBEAD"><value name="NUM_X"><shadow type="math_number"><field name="NUM">0</field></shadow></value>'
  + '<value name="NUM_Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block>';
let NEW_BLOCK_CATEGORY_gotobead = 'Motion';


vm.runtime._primitives.motion_gotobead = function (args, util) {
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

ScratchBlocks.Blocks['motion_gotobead'] = {
  /**
   * Translate_in_x Block+.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      message0: "go to bead %1 x, %2 y",
      args0:
        [{ type: "input_value", name: "NUM_X" },
        { type: "input_value", name: "NUM_Y" }
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

let toolboxDOM_gotobead = (new
  DOMParser).parseFromString(ScratchBlocks.Blocks.defaultToolbox, 'text/xml');
let newBlockDOM_gotobead = (new DOMParser).parseFromString(NEW_BLOCK_STRING_gotobead,
  'text/xml');
toolboxDOM_gotobead.getElementsByName('Motion')[0].appendChild(newBlockDOM_gotobead.children[0]);
let toolboxXML_gotobead = (new XMLSerializer).serializeToString(toolboxDOM_gotobead);
Blockly.getMainWorkspace().updateToolbox(toolboxXML_gotobead);