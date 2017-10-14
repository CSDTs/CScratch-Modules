let NEW_BLOCK_STRING_rotateandstamp = '<block type="pen_rotateandstamp" id="pen_rotateandstamp"><shadow type="math_number"><field name="NUM">10</field></value></block>';
let NEW_BLOCK_CATEGORY_rotateandstamp = 'Pen';


vm.runtime._primitives.pen_rotateandstamp = function (args, util) {
		// set variables
		let x=util.target.x;
		let y=util.target.y;
		let direction= util.target.direction;
		let size= util.target.size;
		let x_weave= Math.round(x/(size*0.245));
		let y_weave= Math.round(y/(size*0.245));
		args.NUM1=x_weave+y_weave;
		args.NUM2=2;
		let r=vm.runtime._primitives.operator_mod(args,util);
		if (r==1){
			args.DEGREES=90;
			vm.runtime._primitives.motion_pointindirection(args,util);
		}
		else{
			args.DEGREES=180;
		    vm.runtime._primitives.motion_pointindirection(args,util);
		}
			vm.runtime._primitives.pen_stamp(args,util);
			args.DEGREES=direction;
			vm.runtime._primitives.motion_pointindirection(args,util);
    }

ScratchBlocks.Blocks['pen_rotateandstamp'] = {
  /**
   * rotateandstamp Block+.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit ( {
        message0:"shift and stamp",
          inputsInline:0,
          previousStatement:null,
          nextStatement:null,
          category:ScratchBlocks.Categories.pen,
          colour:ScratchBlocks.Colours.pen.primary,
          colourSecondary:ScratchBlocks.Colours.pen.secondary,
          colourTertiary:ScratchBlocks.Colours.pen.tertiary
    })
  }
};

let toolboxDOM_rotateandstamp = (new
DOMParser).parseFromString(ScratchBlocks.Blocks.defaultToolbox, 'text/xml');
let newBlockDOM_rotateandstamp = (new DOMParser).parseFromString(NEW_BLOCK_STRING_rotateandstamp,
'text/xml');
toolboxDOM_rotateandstamp.getElementsByName('Pen')[0].appendChild(newBlockDOM_rotateandstamp.children[0]);
let toolboxXML_rotateandstamp = (new XMLSerializer).serializeToString(toolboxDOM_rotateandstamp);
Blockly.getMainWorkspace().updateToolbox(toolboxXML_rotateandstamp);