const NEW_BLOCK_STRING_rt = '<block type="pen_rt" id="pen_rt"><value name="beads"><shadow type="math_number"><field name="NUM">15</field></shadow></value>'
+'<value name="rows"><shadow type="math_number"><field name="NUM">2</field></shadow></value>'
+'<value name="total"><shadow type="math_number"><field name="NUM">2</field></shadow></value>'
+'<value name="direction"><shadow type="text"><field name="TEXT">+x</field></shadow></value></block>';
const NEW_BLOCK_CATEGORY_rt = 'Pen';


vm.runtime._primitives.pen_rt = function (args, util) {
		let beads= Number(args.beads);
		let rows= Number(args.rows);
		let total= Number (args.total);
		let beadlength=1;
		let iteration=0;
		let direction= String(args.direction);
		args.DEGREES=0;
		if (direction=='+x'){
			args.DEGREES= 90;
		}
		if (direction=='-x'){
			args.DEGREES=-90;
		}
		if (direction=='-y'){
			args.DEGREES=180;
		}
		if (direction=='+y'){
			args.DEGREES=0;
		}
		vm.runtime._primitives.motion_turnleft(args,util);
		for (i=0;i<total;i++){
			if ()
		}
    }

ScratchBlocks.Blocks['pen_rt'] = {
  /**
   * draw right triangle Block+.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit ( {
        "message0":"rt triangle :add %1 beads every %2 rows for %3 iterations in direction %4",
		 args0:
          [{type:"input_value",name:"beads"},
		   {type:"input_value",name:"rows"},
		   {type:"input_value",name:"total"},
		   {type: "input_value", name:"direction"}
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


let toolboxDOM_rt = (new
DOMParser).parseFromString(ScratchBlocks.Blocks.defaultToolbox, 'text/xml');
let newBlockDOM_rt = (new DOMParser).parseFromString(NEW_BLOCK_STRING_rt,
'text/xml');
toolboxDOM_rt.getElementsByName('Pen')[0].appendChild(newBlockDOM_rt.children[0]);
let toolboxXML_rt = (new XMLSerializer).serializeToString(toolboxDOM_rt);
Blockly.getMainWorkspace().updateToolbox(toolboxXML_rt);