const NEW_BLOCK_STRING_lineofbeads = '<block type="pen_lineofbeads" id="pen_lineofbeads"><value name="NUMb"><shadow type="math_number"><field name="NUM">15</field></shadow></value>'
+'<value name="rise"><shadow type="math_number"><field name="NUM">2</field></shadow></value>'
+'<value name="run"><shadow type="math_number"><field name="NUM">2</field></shadow></value></block>';
const NEW_BLOCK_CATEGORY_shiftandstamp = 'Pen';


vm.runtime._primitives.pen_lineofbeads = function (args, util) {
		let length= Number(args.Numb);
		let rise = Number(args.rise);
		let run = Number(args.run);
		let totalcount=0;
		let runcount=0;
		let risecount=0;
		let risesign=0;
		let runsign=0;
		if (rise<0){
			risesign=-1;
		}
		else{
			risesign=1;
		}
		if (run<0){
			runsign=-1;
		}
		else{
			runsign=1;
		}
		while (totalcount!=length){
			runcount=0;
			while((runcount!= Math.abs(run)) && (totalcount!=length)){
				vm.runtime._primitives.pen_stamp(args,util);
				args.STEPS=runsign*100;
				vm.runtime._primitives_motion_translate_bywidth(args.util);
				runcount+=1;
				totalcount+=1;
			}
			risecount=0;
			while ((risecount!=Math.abs(rise)) && (totalcount!= length)){
				vm.runtime._primitives.pen_stamp(args,util);
				args.STEPS=risesign*100;
				vm.runtime._primitives_motion_translate_byheight(args.util);
				risecount+=1;
				totalcount+=1;
			}
		}
		
    }

ScratchBlocks.Blocks['pen_lineofbeads'] = {
  /**
   * drawcircle Block+.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit ( {
        "message0":"line of %1 beads: rise %2 / run %3",
		 args0:
          [{type:"input_value",name:"NUMb"},
		   {type:"input_value",name:"rise"},
		   {type:"input_value",name:"run"}
		  ],

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


let toolboxDOM_lineofbeads = (new
DOMParser).parseFromString(ScratchBlocks.Blocks.defaultToolbox, 'text/xml');
let newBlockDOM_lineofbeads = (new DOMParser).parseFromString(NEW_BLOCK_STRING_lineofbeads,
'text/xml');
toolboxDOM_lineofbeads.getElementsByName('Pen')[0].appendChild(newBlockDOM_lineofbeads.children[0]);
let toolboxXML_lineofbeads = (new XMLSerializer).serializeToString(toolboxDOM_lineofbeads);
Blockly.getMainWorkspace().updateToolbox(toolboxXML_lineofbeads);