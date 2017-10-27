// MOTION BLOCKS
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

// LOOKS BLOCKS
let NEW_BLOCK_STRING_show = '<block type="looks_show" id="looks_show"></block>'

let NEW_BLOCK_STRING_hide = '<block type="looks_hide" id="looks_hide"></block>'

let NEW_BLOCK_STRING_switchcostumeto = '<block type="looks_switchcostumeto" id="looks_switchcostumeto">'
+'<value name="COSTUME"><shadow type="looks_costume"></shadow></value></block>'

let NEW_BLOCK_STRING_nextcostume = '<block type="looks_nextcostume" id="looks_nextcostume"></block>'

let NEW_BLOCK_STRING_nextbackdrop = '<block type="looks_nextbackdrop" id="looks_nextbackdrop"></block>'

let NEW_BLOCK_STRING_switchbackdropto = '<block type="looks_switchbackdropto" id="looks_switchbackdropto">'
+'<value name="BACKDROP"><shadow type="looks_backdrops"></shadow></value></block>'

let NEW_BLOCK_STRING_switchbackdroptoandwait = '<block type="looks_switchbackdroptoandwait"id="looks_switchbackdroptoandwait">'
+'<value name="BACKDROP"><shadow type="looks_backdrops"></shadow></value></block>'

let NEW_BLOCK_STRING_setscaleto = '<block type="looks_setscaleto" id="looks_setscaleto"><value name="SCALEX">'
+'<shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="SCALEY">'
+'<shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="SCALEZ">'
+'<shadow type="math_number"><field name="NUM">1</field></shadow></value></block>'

let NEW_BLOCK_STRING_costumeorder = '<block type="looks_costumeorder" id="looks_costumeorder"></block>'

let NEW_BLOCK_STRING_backdroporder = '<block type="looks_backdroporder" id="looks_backdroporder"></block>'

let NEW_BLOCK_STRING_backdropname = '<block type="looks_backdropname" id="looks_backdropname"></block>'

let NEW_BLOCK_STRING_setcamerato = '<block type="looks_setcamerato" id="looks_setcamerato"><value name="X">'
+'<shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Y"><shadow type="math_number">'
+'<field name="NUM">50</field></shadow></value><value name="Z"><shadow type="math_number"><field name="NUM">500</field>'
+'</shadow></value></block>'

let NEW_BLOCK_STRING_changecameraxby = '<block type="looks_changecameraxby" id="looks_changecameraxby">'
+'<value name="DX"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block>'

let NEW_BLOCK_STRING_changecamerayby = '<block type="looks_changecamerayby" id="looks_changecameraxby">'
+'<value name="DY"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block>'

let NEW_BLOCK_STRING_changecamerazby = '<block type="looks_changecamerazby" id="looks_changecameraxby">'
+'<value name="DZ"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block>'

let NEW_BLOCK_STRING_turncameraaroundx = '<block type="looks_turncameraaroundx" id="looks_changecameraxby">'
+'<value name="DEGREES"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block>'

let NEW_BLOCK_STRING_turncameraaroundy = '<block type="looks_turncameraaroundy" id="looks_changecameraxby">'
+'<value name="DEGREES"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block>'

let NEW_BLOCK_STRING_turncameraaroundz = '<block type="looks_turncameraaroundz" id="looks_changecameraxby">'
+'<value name="DEGREES"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block>'

// SOUND BLOCKS
let NEW_BLOCK_STRING_play = '<block type="sound_play" id="sound_play"><value name="SOUND_MENU">'
+'<shadow type="sound_sounds_menu"></shadow> </value></block>'

let NEW_BLOCK_STRING_playuntildone = '<block type="sound_playuntildone" id="sound_playuntildone">'
+'<value name="SOUND_MENU"><shadow type="sound_sounds_menu"></shadow></value></block>'

let NEW_BLOCK_STRING_stopallsounds = '<block type="sound_stopallsounds" id="sound_stopallsounds"></block>'

let NEW_BLOCK_STRING_playdrumforbeats = '<block type="sound_playdrumforbeats" id="sound_playdrumforbeats">'
+'<value name="DRUM"> +<shadow type="sound_drums_menu"></shadow> +</value> +<value name="BEATS">'
+'<shadow type="math_number"><field name="NUM">0.25</field></shadow></value></block>'

let NEW_BLOCK_STRING_restforbeats = '<block type="sound_restforbeats" id="sound_restforbeats">'
+'<value name="BEATS"><shadow type="math_number"><field name="NUM">0.25</field></shadow></value></block>'

let NEW_BLOCK_STRING_playnoteforbeats = '<block type="sound_playnoteforbeats" id="sound_playnoteforbeats">'
+'<value name="NOTE"><shadow type="math_number"><field name="NUM">60</field></shadow></value>'
+'<value name="BEATS"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block>'

let NEW_BLOCK_STRING_setinstrumentto = '<block type="sound_setinstrumentto" id="sound_setinstrumentto">'
+'<value name="INSTRUMENT"> +<shadow type="sound_instruments_menu"></shadow> +</value> +</block>'

// MOTION VM FUNCTIONS
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
    return Number(args.NUM_X);
}

vm.runtime._primitives.motion_yposition = function (args, util) {
    return Number(args.NUM_Y);
}

vm.runtime._primitives.motion_zposition = function (args, util) {
    return Number(args.NUM_Z);
}

// LOOKS VM FUNCTIONS
vm.runtime._primitives.looks_show = function (args, util) {

}

vm.runtime._primitives.looks_hide = function (args, util) {

}

vm.runtime._primitives.looks_switchcostumeto = function (args, util) {

}

vm.runtime._primitives.looks_nextcostume = function (args, util) {

}

vm.runtime._primitives.looks_nextbackdrop = function (args, util) {

}

vm.runtime._primitives.looks_switchbackdropto = function (args, util) {

}

vm.runtime._primitives.looks_switchbackdroptoandwait = function (args, util) {

}

vm.runtime._primitives.looks_setscaleto = function (args, util) {

}

vm.runtime._primitives.looks_costumeorder = function (args, util) {

}

vm.runtime._primitives.looks_backdroporder = function (args, util) {

}

vm.runtime._primitives.looks_backdropname = function (args, util) {

}

vm.runtime._primitives.looks_setcamerato = function (args, util) {

}

vm.runtime._primitives.looks_changecameraxby = function (args, util) {

}

vm.runtime._primitives.looks_changecamerayby = function (args, util) {

}

vm.runtime._primitives.looks_changecamerazby = function (args, util) {

}

vm.runtime._primitives.looks_turncameraaroundx = function (args, util) {

}

vm.runtime._primitives.looks_turncameraaroundy = function (args, util) {

}

vm.runtime._primitives.looks_turncameraaroundz = function (args, util) {

}

// SOUND VM FUNCTIONS
vm.runtime._primitives.sound_play = function (args, util) {

}

vm.runtime._primitives.sound_playuntildone = function (args, util) {

}

vm.runtime._primitives.sound_stopallsounds = function (args, util) {

}

vm.runtime._primitives.sound_playdrumforbeats = function (args, util) {

}

vm.runtime._primitives.sound_restforbeats = function (args, util) {

}

vm.runtime._primitives.sound_playnoteforbeats = function (args, util) {

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
let newBlockDOM_show = (new DOMParser).parseFromString(NEW_BLOCK_STRING_show, 'text/xml')
let newBlockDOM_hide = (new DOMParser).parseFromString(NEW_BLOCK_STRING_hide, 'text/xml')
let newBlockDOM_switchcostumeto = (new DOMParser).parseFromString(NEW_BLOCK_STRING_switchcostumeto, 'text/xml')
let newBlockDOM_nextcostume = (new DOMParser).parseFromString(NEW_BLOCK_STRING_nextcostume, 'text/xml')
let newBlockDOM_nextbackdrop = (new DOMParser).parseFromString(NEW_BLOCK_STRING_nextbackdrop, 'text/xml')
let newBlockDOM_switchbackdropto = (new DOMParser).parseFromString(NEW_BLOCK_STRING_switchbackdropto, 'text/xml')
let newBlockDOM_switchbackdroptoandwait = (new DOMParser).parseFromString(NEW_BLOCK_STRING_switchbackdroptoandwait, 'text/xml')
let newBlockDOM_setscaleto = (new DOMParser).parseFromString(NEW_BLOCK_STRING_setscaleto, 'text/xml')
let newBlockDOM_costumeorder = (new DOMParser).parseFromString(NEW_BLOCK_STRING_costumeorder, 'text/xml')
let newBlockDOM_backdroporder = (new DOMParser).parseFromString(NEW_BLOCK_STRING_backdroporder, 'text/xml')
let newBlockDOM_backdropname = (new DOMParser).parseFromString(NEW_BLOCK_STRING_backdropname, 'text/xml')
let newBlockDOM_setcamerato = (new DOMParser).parseFromString(NEW_BLOCK_STRING_setcamerato, 'text/xml')
let newBlockDOM_changecameraxby = (new DOMParser).parseFromString(NEW_BLOCK_STRING_changecameraxby, 'text/xml')
let newBlockDOM_changecamerayby = (new DOMParser).parseFromString(NEW_BLOCK_STRING_changecamerayby, 'text/xml')
let newBlockDOM_changecamerazby = (new DOMParser).parseFromString(NEW_BLOCK_STRING_changecamerazby, 'text/xml')
let newBlockDOM_turncameraaroundx = (new DOMParser).parseFromString(NEW_BLOCK_STRING_turncameraaroundx, 'text/xml')
let newBlockDOM_turncameraaroundy = (new DOMParser).parseFromString(NEW_BLOCK_STRING_turncameraaroundy, 'text/xml')
let newBlockDOM_turncameraaroundz = (new DOMParser).parseFromString(NEW_BLOCK_STRING_turncameraaroundz, 'text/xml')
let newBlockDOM_play = (new DOMParser).parseFromString(NEW_BLOCK_STRING_play, 'text/xml')
let newBlockDOM_playuntildone = (new DOMParser).parseFromString(NEW_BLOCK_STRING_playuntildone, 'text/xml')
let newBlockDOM_stopallsounds = (new DOMParser).parseFromString(NEW_BLOCK_STRING_stopallsounds, 'text/xml')
let newBlockDOM_playdrumforbeats = (new DOMParser).parseFromString(NEW_BLOCK_STRING_playdrumforbeats, 'text/xml')
let newBlockDOM_restforbeats = (new DOMParser).parseFromString(NEW_BLOCK_STRING_restforbeats, 'text/xml')
let newBlockDOM_playnoteforbeats = (new DOMParser).parseFromString(NEW_BLOCK_STRING_playnoteforbeats, 'text/xml')

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
toolboxDOM.getElementsByName('looks')[0].appendChild(newBlockDOM_show.children[0])
toolboxDOM.getElementsByName('looks')[0].appendChild(newBlockDOM_hide.children[0])
toolboxDOM.getElementsByName('looks')[0].appendChild(newBlockDOM_switchcostumeto.children[0])
toolboxDOM.getElementsByName('looks')[0].appendChild(newBlockDOM_nextcostume.children[0])
toolboxDOM.getElementsByName('looks')[0].appendChild(newBlockDOM_nextbackdrop.children[0])
toolboxDOM.getElementsByName('looks')[0].appendChild(newBlockDOM_switchbackdropto.children[0])
toolboxDOM.getElementsByName('looks')[0].appendChild(newBlockDOM_switchbackdroptoandwait.children[0])
toolboxDOM.getElementsByName('looks')[0].appendChild(newBlockDOM_setscaleto.children[0])
toolboxDOM.getElementsByName('looks')[0].appendChild(newBlockDOM_costumeorder.children[0])
toolboxDOM.getElementsByName('looks')[0].appendChild(newBlockDOM_backdroporder.children[0])
toolboxDOM.getElementsByName('looks')[0].appendChild(newBlockDOM_setcamerato.children[0])
toolboxDOM.getElementsByName('looks')[0].appendChild(newBlockDOM_changecameraxby.children[0])
toolboxDOM.getElementsByName('looks')[0].appendChild(newBlockDOM_changecamerayby.children[0])
toolboxDOM.getElementsByName('looks')[0].appendChild(newBlockDOM_changecamerazby.children[0])
toolboxDOM.getElementsByName('looks')[0].appendChild(newBlockDOM_turncameraaroundx.children[0])
toolboxDOM.getElementsByName('looks')[0].appendChild(newBlockDOM_turncameraaroundy.children[0])
toolboxDOM.getElementsByName('looks')[0].appendChild(newBlockDOM_turncameraaroundz.children[0])
toolboxDOM.getElementsByName('sound')[0].appendChild(newBlockDOM_play.children[0])
toolboxDOM.getElementsByName('sound')[0].appendChild(newBlockDOM_playuntildone.children[0])
toolboxDOM.getElementsByName('sound')[0].appendChild(newBlockDOM_stopallsounds.children[0])
toolboxDOM.getElementsByName('sound')[0].appendChild(newBlockDOM_playdrumforbeats.children[0])
toolboxDOM.getElementsByName('sound')[0].appendChild(newBlockDOM_restforbeats.children[0])
toolboxDOM.getElementsByName('sound')[0].appendChild(newBlockDOM_playnoteforbeats.children[0])

let toolboxXML = (new XMLSerializer).serializeToString(toolboxDOM)
Blockly.getMainWorkspace().updateToolbox(toolboxXML)