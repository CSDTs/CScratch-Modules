const NEW_BLOCK_STRING_translatebyy = '<block type="motion_translate_iny" id="motion_translate_iny"><value name="STEPS"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block>';
const NEW_BLOCK_CATEGORY_translatebyy = 'Motion';


vm.runtime._primitives.motion_translate_iny = function (args, util) {
		
		var times= Number(args.STEPS);
		const size= (util.target.getBounds().top) - (util.target.getBounds().bottom);
		var dy=0;
		if (times>0) {dy = size; }
		else {
			dy= -1*size;
			times= Math.abs(times);
		}
		//repeat args times
		for (i=0;i<times;i++){
			const penSkinId = vm.runtime.renderer.createPenSkin();
			const penDrawableId = vm.runtime.renderer.createDrawable();
			// stamp
			vm.runtime.renderer.setDrawableOrder(penDrawableId, 1);
			vm.runtime.renderer.updateDrawableProperties(penDrawableId, {skinId: penSkinId});
			const target = util.target;
            vm.runtime.renderer.penStamp(penSkinId, target.drawableID);
            vm.runtime.requestRedraw();
			// move
			util.target.setXY(util.target.x , util.target.y+dy );

		}
		
	
    }

ScratchBlocks.Blocks['motion_translate_iny'] = {
  /**
   * Translate_in_x Block+.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit ( {
        message0:"translate by %1 costumes in y",
        args0:
          [{type:"input_value",name:"STEPS"}],
          inputsInline:!0,
          previousStatement:null,
          nextStatement:null,
          category:ScratchBlocks.Categories.motion,
          colour:ScratchBlocks.Colours.motion.primary,
          colourSecondary:ScratchBlocks.Colours.motion.secondary,
          colourTertiary:ScratchBlocks.Colours.motion.tertiary
    })
  }
};

var toolboxDOM = (new
DOMParser).parseFromString(ScratchBlocks.Blocks.defaultToolbox, 'text/xml');
var newBlockDOM = (new DOMParser).parseFromString(NEW_BLOCK_STRING_translatebyy,
'text/xml');
toolboxDOM.getElementsByName('Motion')[0].appendChild(newBlockDOM.children[0]);
var toolboxXML = (new XMLSerializer).serializeToString(toolboxDOM);
Blockly.getMainWorkspace().updateToolbox(toolboxXML);