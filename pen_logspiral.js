const NEW_BLOCK_STRING_logspiralc = '<block type="pen_logspiralc" id="pen_logspiralc"><value name="NUMC"><shadow type="math_number"><field name="NUM">1.002</field></shadow></value>'
+'<value name="startangle"><shadow type="math_number"><field name="NUM">180</field></shadow></value>'
+'<value name="endangle"><shadow type="math_number"><field name="NUM">0</field></shadow></value>'
+'<value name="size"><shadow type="math_number"><field name="NUM">500</field></shadow></value>'
+'<value name="pengrowth"><shadow type="math_number"><field name="NUM">0.2</field></shadow></value></block>';
const NEW_BLOCK_CATEGORY_shiftandstamp = 'Pen';


vm.runtime._primitives.pen_logspiralc = function (args, util) {
		let C = Number(args.NUMC);
		let startangle= Number(args.startangle);
		let endangle = Number(args.endangle);
		let size =Number(args.size);
		let pengrowth= Number(args.pengrowth);
		let clockwise= true;
		const x_orgin= util.target.x;
		const y_orgin= util.target.y;
		const s_direction=util.target.direction;
		let starting_direction=0;
		let beta=Math.log(C);
		let t=startangle;
		let tinc=4;
		let roffset=size*Math.pow(Math.E,beta*startangle)-size;
		let r=0;
		const rad2deg=180/Math.PI;
		const deg2rad= Math.PI/180;
		if ( C <= 1) {
			return 0;
		}
		if (C > 1.1) {
			return 0;
		}
		if (startangle>endangle){
			starting_direction=s_direction+90;
		}
		else{
			starting_direction=s_direction;
		}
		if (endangle>startangle){
			tinc=4;
			if (clockwise) {
				args.DEGREES= Math.atan(1/beta)*rad2deg;
				vm.runtime._primitives.motion_turnright(args,util);
			}
			else{
				args.DEGREES= Math.atan(1/beta)*rad2deg;
				vm.runtime._primitives.motion_turnleft(args,util);
			}	
		}
		else{
			tinc=-4;
			if (clockwise){
				args.DEGREES= Math.atan(1/beta)*rad2deg+180;
				vm.runtime._primitives.motion_turnleft(args,util);
0			}
			else{
				args.DEGREES= Math.atan(1/beta)*rad2deg+180;
				vm.runtime._primitives.motion_turnright(args,util);
			}
		}
		for (i=0;i< Math.abs((endangle-startangle)/tinc);i++){
			t=t+tinc;
			r= size*Math.pow(Math.E,beta*t)-size;
			if (startangle>endangle){
				if (clockwise){
					args.DEGREES=tinc;
					vm.runtime._primitives.motion_turnright(args,util);
				}
				else{
					args.DEGREES=tinc;
					vm.runtime._primitives.motion_turnleft(args,util);
				}	
			}
			else{
				if (clockwise){
					args.DEGREES=tinc;
					vm.runtime._primitives.motion_turnleft(args,util);
				}
				else{
					args.DEGREES=tinc;
					vm.runtime._primitives.motion_turnright(args,util);
				}	
			}
			args.SIZE=pengrowth;
			vm.runtime._primitives.pen_changepensizeby(args,util);
			if (!clockwise){
				let x_go= (x_orgin+ r* Math.cos((t+starting_direction)*deg2rad))- 
				(roffset*Math.cos((startangle+starting_direction)*deg2rad));
				let y_go= (y_orgin+r* Math.sin((t+starting_direction)*deg2rad))-
				(roffset*Math.sin((startangle+starting_direction)*deg2rad));
				args.X= x_go;
				args.Y= y_go;
				vm.runtime._primitives.motion_gotoxy(args,util);
				args.DURATION=0.001;
				vm.runtime._primitives.control_wait(args,util);
			}
			else{
				let x_go= (x_orgin+ r* Math.cos((t*-1+starting_direction)*deg2rad))- 
				(roffset*Math.cos((startangle*-1+starting_direction)*deg2rad));
				let y_go= (y_orgin+ r*Math.sin((t*-1+starting_direction)*deg2rad))-
				(roffset*Math.sin((startangle*-1+starting_direction)*deg2rad));
				args.X= x_go;
				args.Y= y_go;
				vm.runtime._primitives.motion_gotoxy(args,util);
				args.DURATION=0.001;
				vm.runtime._primitives.control_wait(args,util);
			}	
			
		}	
		
    }

ScratchBlocks.Blocks['pen_logspiralc'] = {
  /**
   * drawcircle Block+.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit ( {
        "message0":"log spiral C %1 start angle %2 end angle %3 size %4 pen growth%5 clockwise %6",
		 args0:
          [{type:"input_value",name:"NUMC"},
		   {type:"input_value",name:"startangle"},
		   {type:"input_value",name:"endangle"},
		   {type:"input_value",name:"size"},
		   {type:"input_value",name:"pengrowth"},
		   {type:"input_value",name:"operand", check:"Boolean"}
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

let toolboxDOM = (new
DOMParser).parseFromString(ScratchBlocks.Blocks.defaultToolbox, 'text/xml');
let newBlockDOM = (new DOMParser).parseFromString(NEW_BLOCK_STRING_logspiralc,
'text/xml');
toolboxDOM.getElementsByName('Pen')[0].appendChild(newBlockDOM.children[0]);
let toolboxXML = (new XMLSerializer).serializeToString(toolboxDOM);
Blockly.getMainWorkspace().updateToolbox(toolboxXML);