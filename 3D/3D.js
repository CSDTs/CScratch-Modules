let NEW_BLOCK_STRING_rotate = '<block type="motion_rotate" id="motion_rotate">'
+'<value name="DEGREESX"> <shadow type="math_number"><field name="NUM">0</field>'
+'</shadow></value><value name="DEGREESY"><shadow type="math_number">'
+'<field name="NUM">0</field></shadow></value><value name="DEGREESZ">'
+'<shadow type="math_number"><field name="NUM">0</field></shadow></value></block>'

let NEW_BLOCK_STRING_setrotation = '<block type="motion_setrotation" id="motion_setrotation">'
+'<value name="DEGREESX"><shadow type="math_number"><field name="NUM">0</field>'
+'</shadow></value><value name="DEGREESY"><shadow type="math_number"><field name="NUM">0</field>'
+'</shadow></value><value name="DEGREESZ"><shadow type="math_number"><field name="NUM">0</field>'
+'</shadow></value></block>'

let NEW_BLOCK_STRING_gotoxyz = '<block type="motion_gotoxyz" id="motion_gotoxyz">'
+'<value name="X"><shadow id="movex" type="math_number"><field name="NUM">0</field>'
+'</shadow></value><value name="Y"><shadow id="movey" type="math_number">'
+'<field name="NUM">0</field></shadow></value><value name="Z">'
+'<shadow id="movez" type="math_number"><field name="NUM">0</field></shadow></value></block>'

let NEW_BLOCK_STRING_changexby = '<block type="motion_changexby" id="motion_changexby">'
+'<value name="DX"><shadow type="math_number"><field name="NUM">10</field>'
+'</shadow></value></block>'

let NEW_BLOCK_STRING_setx = '<block type="motion_setx" id="motion_setx">'
+'<value name="X"><shadow id="setx" type="math_number"><field name="NUM">0</field>'
+'</shadow></value></block>'

let NEW_BLOCK_STRING_changeyby = '<block type="motion_changeyby" id="motion_changeyby">'
+'<value name="DY"><shadow type="math_number"><field name="NUM">10</field>'
+'</shadow></value></block>'

let NEW_BLOCK_STRING_sety = '<block type="motion_sety" id="motion_sety">'
+'<value name="Y"><shadow id="sety" type="math_number"><field name="NUM">0</field>'
+'</shadow></value></block>'

let NEW_BLOCK_STRING_changezby = '<block type="motion_changezby" id="motion_changezby">'
+'<value name="DZ"><shadow type="math_number"><field name="NUM">10</field>'
+'</shadow></value></block>'

let NEW_BLOCK_STRING_setz = '<block type="motion_setz" id="motion_setz">'
+'<value name="Z"><shadow id="setz" type="math_number"><field name="NUM">0</field>'
+'</shadow></value></block>'

let NEW_BLOCK_STRING_xposition = '<block type="motion_xposition" id="motion_xposition"></block>'

let NEW_BLOCK_STRING_yposition = '<block type="motion_yposition" id="motion_yposition"></block>'

let NEW_BLOCK_STRING_zposition = '<block type="motion_zposition" id="motion_zposition"></block>'

vm.runtime._primitives.motion_rotate = function (args, util) {
    let x = Number(args.NUM_X);
    let y = Number(args.NUM_Y);
    let z = Number(args.NUM_Z);
}

vm.runtime._primitives.motion_setrotation = function (args, util) {

}

vm.runtime._primitives.motion_gotoxyz = function (args, util) {

}

vm.runtime._primitives.motion_changexby = function (args, util) {

}

vm.runtime._primitives.motion_setx = function (args, util) {

}

vm.runtime._primitives.motion_changeyby = function (args, util) {

}

vm.runtime._primitives.motion_sety = function (args, util) {

}

vm.runtime._primitives.motion_changezby = function (args, util) {

}

vm.runtime._primitives.motion_setz = function (args, util) {

}

vm.runtime._primitives.motion_xposition = function (args, util) {

}

vm.runtime._primitives.motion_yposition = function (args, util) {

}

vm.runtime._primitives.motion_zposition = function (args, util) {

}


let toolboxDOM = (new DOMParser).parseFromString(ScratchBlocks.Blocks.defaultToolbox, 'text/xml')
let newBlockDOM_rotate = (new DOMParser).parseFromString(NEW_BLOCK_STRING_rotate, 'text/xml')
let newBlockDOM_setrotation = (new DOMParser).parseFromString(NEW_BLOCK_STRING_setrotation, 'text/xml')
let newBlockDOM_gotoxyz = (new DOMParser).parseFromString(NEW_BLOCK_STRING_gotoxyz, 'text/xml')
let newBlockDOM_changexby = (new DOMParser).parseFromString(NEW_BLOCK_STRING_changexby, 'text/xml')
let newBlockDOM_setx = (new DOMParser).parseFromString(NEW_BLOCK_STRING_setx, 'text/xml')
let newBlockDOM_changeyby = (new DOMParser).parseFromString(NEW_BLOCK_STRING_changeyby, 'text/xml')
let newBlockDOM_sety = (new DOMParser).parseFromString(NEW_BLOCK_STRING_sety, 'text/xml')
let newBlockDOM_changezby = (new DOMParser).parseFromString(NEW_BLOCK_STRING_changezby, 'text/xml')
let newBlockDOM_setz = (new DOMParser).parseFromString(NEW_BLOCK_STRING_setz, 'text/xml')
let newBlockDOM_xposition = (new DOMParser).parseFromString(NEW_BLOCK_STRING_xposition, 'text/xml')
let newBlockDOM_yposition = (new DOMParser).parseFromString(NEW_BLOCK_STRING_yposition, 'text/xml')
let newBlockDOM_zposition = (new DOMParser).parseFromString(NEW_BLOCK_STRING_zposition, 'text/xml')

toolboxDOM.getElementsByName('motion')[0].appendChild(newBlockDOM_rotate.children[0])
toolboxDOM.getElementsByName('motion')[0].appendChild(newBlockDOM_setrotation.children[0])
toolboxDOM.getElementsByName('motion')[0].appendChild(newBlockDOM_gotoxyz.children[0])
toolboxDOM.getElementsByName('motion')[0].appendChild(newBlockDOM_changexby.children[0])
toolboxDOM.getElementsByName('motion')[0].appendChild(newBlockDOM_setx.children[0])
toolboxDOM.getElementsByName('motion')[0].appendChild(newBlockDOM_changeyby.children[0])
toolboxDOM.getElementsByName('motion')[0].appendChild(newBlockDOM_sety.children[0])
toolboxDOM.getElementsByName('motion')[0].appendChild(newBlockDOM_changezby.children[0])
toolboxDOM.getElementsByName('motion')[0].appendChild(newBlockDOM_setz.children[0])
toolboxDOM.getElementsByName('motion')[0].appendChild(newBlockDOM_xposition.children[0])
toolboxDOM.getElementsByName('motion')[0].appendChild(newBlockDOM_yposition.children[0])
toolboxDOM.getElementsByName('motion')[0].appendChild(newBlockDOM_zposition.children[0])

let toolboxXML = (new XMLSerializer).serializeToString(toolboxDOM)
Blockly.getMainWorkspace().updateToolbox(toolboxXML)