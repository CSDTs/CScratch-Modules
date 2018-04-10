let NEW_BLOCK_STRING_translatebyx = '<block type="motion_translate_inx" id="motion_translate_inx"><value name="STEPS"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block>';
let NEW_BLOCK_CATEGORY_translatebyx = 'Motion';


vm.runtime._primitives.motion_translate_inx = function (args, util) {
  var times = Number(args.STEPS);
  let size = (util.target.getBounds().right) - (util.target.getBounds().left);
  var dx = 0;
  if (times > 0) { dx = size; }
  else {
    dx = -1 * size;
    times = Math.abs(times);
  }
  for (let i =0; i < times; i++) {
    // stamp
    vm.runtime._primitives.pen_stamp(args, util);
    // move
    util.target.setXY(util.target.x + dx, util.target.y);
  }
}

ScratchBlocks.Blocks['motion_translate_inx'] = {
  /**
   * Translate_in_x Block+.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      message0: "translate by %1 costumes in x",
      args0:
        [{ type: "input_value", name: "STEPS" }],
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

let toolboxDOM_translatebyx = (new
  DOMParser).parseFromString(ScratchBlocks.Blocks.defaultToolbox, 'text/xml');
let newBlockDOM_translatebyx = (new DOMParser).parseFromString(NEW_BLOCK_STRING_translatebyx,
  'text/xml');
toolboxDOM_translatebyx.getElementsByName('Motion')[0].appendChild(newBlockDOM_translatebyx.children[0]);
let toolboxXML_translatebyx = (new XMLSerializer).serializeToString(toolboxDOM_translatebyx);
Blockly.getMainWorkspace().updateToolbox(toolboxXML_translatebyx);