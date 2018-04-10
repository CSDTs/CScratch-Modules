let NEW_BLOCK_STRING_drawcircle = '<block type="pen_drawcircle" id="pen_drawcircle"><value name="NUM1"><shadow type="math_number"><field name="NUM">100</field></shadow></value>'
  + '<value name="NUM2"><shadow type="math_number"><field name="NUM">360</field></shadow></value></block>';
let NEW_BLOCK_CATEGORY_shiftandstamp = 'Pen';


vm.runtime._primitives.pen_drawcircle = function (args, util) {
  let rad2deg = 180 / Math.PI;
  let diameter = Number(args.NUM1);
  let sweep = Number(args.NUM2);
  let anglecount = 0;
  let stepinc = 6;
  let numbsides = 180 / (Math.asin(stepinc / diameter) * rad2deg);
  while ((360 / numbsides + anglecount) <= sweep) {
    anglecount += 360 / numbsides;
    args.DEGREES = 360 / numbsides;
    vm.runtime._primitives.motion_turnleft(args, util);
    args.STEPS = stepinc;
    vm.runtime._primitives.motion_movesteps(args, util);
  }
  args.DEGREES = sweep - anglecount;
  vm.runtime._primitives.motion_turnleft(args, util);
}

ScratchBlocks.Blocks['pen_drawcircle'] = {
  /**
   * drawcircle Block+.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      message0: "circle: diameter %1 sweep %2",
      args0:
        [{ type: "input_value", name: "NUM1" },
        { type: "input_value", name: "NUM2" }
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

var toolboxDOM = (new
  DOMParser).parseFromString(ScratchBlocks.Blocks.defaultToolbox, 'text/xml');
var newBlockDOM = (new DOMParser).parseFromString(NEW_BLOCK_STRING_drawcircle,
  'text/xml');
toolboxDOM.getElementsByName('Pen')[0].appendChild(newBlockDOM.children[0]);
var toolboxXML = (new XMLSerializer).serializeToString(toolboxDOM);
Blockly.getMainWorkspace().updateToolbox(toolboxXML);