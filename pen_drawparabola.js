const NEW_BLOCK_STRING_parabola = '<block type="pen_parabola" id="pen_parabola"><value name="NUMa"><shadow type="math_number"><field name="NUM">50</field></shadow></value>'
+'<value name="sweep"><shadow type="math_number"><field name="NUM">180</field></shadow></value>'
+'<value name="size"><shadow type="math_number"><field name="NUM">1</field></shadow></value>'
+'<value name="widthrate"><shadow type="math_number"><field name="NUM">0.3</field></shadow></value></block>';
const NEW_BLOCK_CATEGORY_parabola = 'Pen';


vm.runtime._primitives.pen_parabola = function (args, util) {
		const rad2deg= 180/Math.PI;
		const deg2rad= Math.PI/180;
		let a=Number(args.NUMa);
		let sweep=Number(args.sweep);
		let size=Number(args.size);
		let widthrate=Number(args.widthrate);
		const x_orgin=util.target.x;
		const y_orgin=util.target.y;
		let starting_direction=util.target.direction;
		let tinc=4;
		let t=sweep*-0.5;
		let r= size*(-2*a)/(1+ Math.cos(t*deg2rad));
		let x_old= x_orgin;
		let y_old= y_orgin;
		let x_new=0;
		let y_new=0;
		vm.runtime._primitives.looks_hide(args,util);
		vm.runtime._primitives.pen_penup(args,util);
		args.DIRECTION= util.target.direction - t / 2;
		vm.runtime._primitives.motion_pointindirection(args,util);
		args.STEPS= r*-1;
		vm.runtime._primitives.motion_movesteps(args,util);
		while (t <= sweep*0.5){
				args.DEGREES= tinc;
				vm.runtime._primitives.motion_turnright(args,util);
				t=t+tinc;
				if (t-tinc*3<0){
					args.SIZE=widthrate;
					vm.runtime._primitives.pen_changepensizeby(args,util);
				}
				else{
					args.SIZE=widthrate*-1;
					vm.runtime._primitives.pen_changepensizeby(args,util);
				}
				r= size*(-2*a /(1+Math.cos(t*deg2rad)));
				args.STEPS=r;
				vm.runtime._primitives.motion_movesteps(args,util);
				vm.runtime._primitives.looks_show(args,util);
				args.DIRECTION= util.target.direction-t/2 -90;
				vm.runtime._primitives.motion_pointindirection(args,util);
				args.DURATION=0.001;
				vm.runtime._primitives.control_wait(args,util);
				x_new=util.target.x;
				y_new=util.target.y;
				args.X= x_old;
				args.Y= y_old;
				vm.runtime._primitives.motion_gotoxy(args,util);
				vm.runtime._primitives.pen_pendown(args,util);
				args.X= x_new;
				args.Y= y_new;
				vm.runtime._primitives.motion_gotoxy(args,util);
				args.DIRECTION= util.target.direction- t/-2 +90;
				vm.runtime._primitives.motion_pointindirection(args,util);
				vm.runtime._primitives.pen_penup(args,util);
				vm.runtime._primitives.looks_hide(args,util);
				args.STEPS=r*-1;
				vm.runtime._primitives.motion_movesteps(args,util);
				x_old=x_new;
				y_old=y_new;
		}
		args.X= x_new;
		args.Y= y_new;
		vm.runtime._primitives.motion_gotoxy(args,util);
		vm.runtime._primitives.looks_show(args,util);
		args.DEGREES=t/2+180;
		vm.runtime._primitives.motion_turnright(args,util);
}

ScratchBlocks.Blocks['pen_parabola'] = {
  /**
   * drawparabola Block+.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit ( {
        "message0":"parabola a %1 sweep %2 size %3 width rate %4",
		 args0:
          [{type:"input_value",name:"NUMa"},
		   {type:"input_value",name:"sweep"},
		   {type:"input_value",name:"size"},
		   {type:"input_value",name:"widthrate"},
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

let toolboxDOM_parabola = (new
DOMParser).parseFromString(ScratchBlocks.Blocks.defaultToolbox, 'text/xml');
let newBlockDOM_parabola = (new DOMParser).parseFromString(NEW_BLOCK_STRING_parabola,
'text/xml');
toolboxDOM_parabola.getElementsByName('Pen')[0].appendChild(newBlockDOM_parabola.children[0]);
let toolboxXML_parabola = (new XMLSerializer).serializeToString(toolboxDOM_parabola);
Blockly.getMainWorkspace().updateToolbox(toolboxXML_parabola);