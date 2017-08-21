let NEW_BLOCK_STRING_rt = '<block type="pen_rt" id="pen_rt"><value name="beads"><shadow type="math_number"><field name="NUM">1</field></shadow></value>'
+'<value name="rows"><shadow type="math_number"><field name="NUM">2</field></shadow></value>'
+'<value name="total"><shadow type="math_number"><field name="NUM">15</field></shadow></value>'
+'<value name="direction"><shadow type="text"><field name="TEXT">+x</field></shadow></value></block>';
let NEW_BLOCK_CATEGORY_rt = 'Pen';
//
let NEW_BLOCK_STRING_translatebyx_nostamp = '<block type="motion_translate_inx_nostamp" id="motion_translate_inx_nostamp"><value name="STEPS"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block>';
let NEW_BLOCK_CATEGORY_translatebyx = 'Motion';
//
let NEW_BLOCK_STRING_translatebyy_nostamp = '<block type="motion_translate_iny_nostamp" id="motion_translate_iny_nostamp"><value name="STEPS"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block>';
let NEW_BLOCK_CATEGORY_translatebyy = 'Motion';
//
let NEW_BLOCK_STRING_lineofbeads = '<block type="pen_lineofbeads" id="pen_lineofbeads"><value name="NUMb"><shadow type="math_number"><field name="NUM">15</field></shadow></value>'
+'<value name="rise"><shadow type="math_number"><field name="NUM">2</field></shadow></value>'
+'<value name="run"><shadow type="math_number"><field name="NUM">2</field></shadow></value></block>';
let NEW_BLOCK_CATEGORY_shiftandstamp = 'Pen';
let NEW_BLOCK_STRING_translateby_width = '<block type="motion_translate_bywidth" id="motion_translate_bywidth"><value name="STEPS"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block>';
let NEW_BLOCK_CATEGORY_translatebywidth = 'Motion';
let NEW_BLOCK_STRING_translateby_height = '<block type="motion_translate_byheight" id="motion_translate_byheight"><value name="STEPS"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block>';
let NEW_BLOCK_CATEGORY_translateby_height = 'Motion';
//
/*****************************************************************************************************
******************************************************************************************************
*****************************************************************************************************/
vm.runtime._primitives.motion_translate_inx_nostamp = function (args, util) {
		var times= Number(args.STEPS);
		let size= (util.target.getBounds().right) - (util.target.getBounds().left);
		var dx=0;
		if (times>0) {dx = size; }
		else {
			dx= -1*size;
			times= Math.abs(times);
		}
		for (i=0;i<times;i++){
			args.STEPS=dx;
			vm.runtime._primitives.motion_movesteps(args,util);
		}
    }

ScratchBlocks.Blocks['motion_translate_inx_nostamp'] = {
  /**
   * Translate_in_x Block+.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit ( {
        message0:"translate by %1 customes in x",
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
/////////////////////////////////////////////////////////////////////////////////
// translate by y
vm.runtime._primitives.motion_translate_iny_nostamp = function (args, util) {
		
		var times= Number(args.STEPS);
		let size= (util.target.getBounds().top) - (util.target.getBounds().bottom);
        let radians = Math.PI*(90 - util.target.direction)/180;
        let dx = -1*size * Math.sin(radians);
        let dy = size * Math.cos(radians);
		if (times<0) {
			dy *= -1;
			times= Math.abs(times); 
		}	
		//repeat args times
		for (i=0;i<times;i++){
			// move
			util.target.setXY(util.target.x + dx, util.target.y+dy);
		}
		
	
    }
ScratchBlocks.Blocks['motion_translate_iny_nostamp'] = {
  /**
   * Translate_in_y Block+.
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
////////////////////////////////////////////////////////////////////////////////
/*** 
function for draw rt triangle
***/
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
		for (j=0;j<total;j++){
			args.NUM1= iteration;
			args.NUM2= rows;
			let mod = vm.runtime._primitives.operator_mod(args, util);
			
			if (mod ==0 && iteration >0){
				beadlength+=beads;
			}
			args.NUMb= beadlength;
			args.rise=0;
			args.run= beadlength;
			vm.runtime._primitives.pen_lineofbeads(args, util);
			iteration+=1;
			
			if (total != iteration){
				
				args.STEPS= (-1)* beadlength;
				vm.runtime._primitives.motion_translate_inx_nostamp(args, util);
				args.STEPS= (-1);
				vm.runtime._primitives.motion_translate_iny_nostamp(args, util);

			}
		}
		if (direction=='+x'){
			args.DEGREES= -90;
		}
		if (direction=='-x'){
			args.DEGREES= 90;
		}
		if (direction=='-y'){
			args.DEGREES=-180;
		}
		if (direction=='+y'){
			args.DEGREES=0;
		}
		vm.runtime._primitives.motion_turnleft(args,util);
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
}
////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
/*translate by width
*/
vm.runtime._primitives.motion_translate_bywidth = function (args, util) {
		var percent= Number(args.STEPS)/100;
		let size= (util.target.getBounds().right) - (util.target.getBounds().left);
		var dx=size * percent;
		// move
		args.STEPS=dx;
		vm.runtime._primitives.motion_movesteps(args,util);
    }

ScratchBlocks.Blocks['motion_translate_bywidth'] = {
  /**
   * Translate_by_width Block+.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit ( {
        message0:"translate by %1 percent of width in x",
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
//////////////////////////////////////////////////////////////////////////////////////
/** translate by height
*/
vm.runtime._primitives.motion_translate_byheight = function (args, util) {
		var percent= Number(args.STEPS)/100;
		let radians = Math.PI*(90-util.target.direction)/180;
		let size= (util.target.getBounds().top) - (util.target.getBounds().bottom);
		let dx = size * -1* Math.sin(radians)*percent;
        let dy = size * Math.cos(radians)*percent;

		// move
		util.target.setXY(util.target.x+dx, util.target.y+dy );
    }
 ScratchBlocks.Blocks['motion_translate_byheight'] = {
  /**
   * Translate_by_height Block+.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit ( {
        message0:"translate by %1 percent of height in y",
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
/////////////////////////////////////////////////////////////////////////////////////////////
/**
function for lineofbeads
**/
vm.runtime._primitives.pen_lineofbeads = function (args, util){
		let length= Number(args.NUMb);
		let rise = Number(args.rise);
		let run = Number(args.run);
		let totalcount=0;
		let runcount=0;
		let risecount=0;
		let risesign=1;
		let runsign=1;
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
				vm.runtime._primitives.motion_translate_bywidth(args,util);
				runcount+=1;
				totalcount+=1;
			}
			if (totalcount==length){
				break;
			}
			risecount=0;
			while ((risecount!=Math.abs(rise)) && (totalcount!= length)){
				vm.runtime._primitives.pen_stamp(args,util);
				args.STEPS=risesign*100;
				vm.runtime._primitives.motion_translate_byheight(args,util);
				risecount+=1;
				totalcount+=1;
			}
		}
		
    }

ScratchBlocks.Blocks['pen_lineofbeads'] = {
  /**
   * lineofbeads Block+.
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
////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************
update toolbox *********************************************************************
************************************************************************************/
/////////////////////////////////////////////////////////////////////////////////////
let toolboxDOM_rt = (new
DOMParser).parseFromString(ScratchBlocks.Blocks.defaultToolbox, 'text/xml');
//
let newBlockDOM_rt = (new DOMParser).parseFromString(NEW_BLOCK_STRING_rt,
'text/xml');
let newBlockDOM_translatebyx = (new DOMParser).parseFromString(NEW_BLOCK_STRING_translatebyx_nostamp,
'text/xml');
let newBlockDOM_translatebyy = (new DOMParser).parseFromString(NEW_BLOCK_STRING_translatebyy_nostamp,
'text/xml');
let newBlockDOM_lineofbeads = (new DOMParser).parseFromString(NEW_BLOCK_STRING_lineofbeads,'text/xml');
let newBlockDOM_translatebywidth= (new DOMParser).parseFromString(NEW_BLOCK_STRING_translateby_width,'text/xml');
let newBlockDOM_translatebyheight= (new DOMParser).parseFromString(NEW_BLOCK_STRING_translateby_height,'text/xml');
//
toolboxDOM_rt.getElementsByName('Pen')[0].appendChild(newBlockDOM_rt.children[0]);
toolboxDOM_rt.getElementsByName('Motion')[0].appendChild(newBlockDOM_translatebyx.children[0]);
toolboxDOM_rt.getElementsByName('Motion')[0].appendChild(newBlockDOM_translatebyy.children[0]);
toolboxDOM_rt.getElementsByName('Pen')[0].appendChild(newBlockDOM_lineofbeads.children[0]);
toolboxDOM_rt.getElementsByName('Motion')[0].appendChild(newBlockDOM_translatebywidth.children[0]);
toolboxDOM_rt.getElementsByName('Motion')[0].appendChild(newBlockDOM_translatebyheight.children[0]);
//
let toolboxXML_rt = (new XMLSerializer).serializeToString(toolboxDOM_rt);
Blockly.getMainWorkspace().updateToolbox(toolboxXML_rt);