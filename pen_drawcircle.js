const NEW_BLOCK_STRING_drawcircle = '<block type="pen_drawcircle" id="pen_drawcircle"><value name="NUM1"><shadow type="math_number"><field name="NUM">10</field></value></block>';
const NEW_BLOCK_CATEGORY_shiftandstamp = 'Pen';


vm.runtime._primitives.pen_drawcircle = function (args, util) {
		const d= Number(args.NUM1);
		const r= d/2;
		let x=0;
		let xc=util.target.x;
		let y=r;
		let yc=util.target.y;
		const start=x;
		const end1=r;
		const end2=-r;
		while (x != end1){
			x=x+0.5;
			y=Math.sqrt(r*r-x*x)-r;
			args.X=x+xc;
			args.Y=y+yc;
			vm.runtime._primitives.motion_gotoxy(args,util);
		}
		while (x!=start){
			x=x-0.5;
			y=Math.sqrt(r*r-x*x)*-1-r;
			args.X=x+xc;
			args.Y=y+yc;
			vm.runtime._primitives.motion_gotoxy(args,util);
		}
		while (x!=end2){
			x=x-0.5;
			y=Math.sqrt(r*r-x*x)*-1-r;
			args.X=x+xc;
			args.Y=y+yc;
			vm.runtime._primitives.motion_gotoxy(args,util);
		}
		while (x!=start){
			x=x+0.5;
			y=Math.sqrt(r*r-x*x)-r;
			args.X=x+xc;
			args.Y=y+yc;
			vm.runtime._primitives.motion_gotoxy(args,util);
		}
    }

ScratchBlocks.Blocks['pen_drawcircle'] = {
  /**
   * drawcircle Block+.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit ( {
        message0:"draw circle with diameter %1",
		 args0:
          [{type:"input_value",name:"NUM1"}],
          inputsInline:!0,
          previousStatement:null,
          nextStatement:null,
          category:ScratchBlocks.Categories.pen,
          colour:ScratchBlocks.Colours.pen.primary,
          colourSecondary:ScratchBlocks.Colours.pen.secondary,
          colourTertiary:ScratchBlocks.Colours.pen.tertiary
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