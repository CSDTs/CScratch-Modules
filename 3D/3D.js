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

let NEW_BLOCK_STRING_changeeffectby = '<block type="sound_changeeffectby" id="sound_changeeffectby"> +'
+'<value name="VALUE"> +<shadow type="math_number"><field name="NUM">10</field></shadow></value> +</block> +'

let NEW_BLOCK_STRING_seteffectto = '<block type="sound_seteffectto" id="sound_seteffectto"> +'
+'<value name="VALUE"> +<shadow type="math_number"><field name="NUM">100</field></shadow></value> +</block> +'

let NEW_BLOCK_STRING_cleareffects = '<block type="sound_cleareffects" id="sound_cleareffects"></block> +'

let NEW_BLOCK_STRING_changevolumeby = '<block type="sound_changevolumeby" id="sound_changevolumeby">'
+'<value name="VOLUME"><shadow type="math_number"><field name="NUM">-10</field></shadow></value></block>'

let NEW_BLOCK_STRING_setvolumeto = '<block type="sound_setvolumeto" id="sound_setvolumeto"><value name="VOLUME">'
+'<shadow type="math_number"><field name="NUM">100</field></shadow></value></block>'

let NEW_BLOCK_STRING_volume = '<block type="sound_volume" id="sound_volume"></block>'

let NEW_BLOCK_STRING_changetempoby = '<block type="sound_changetempoby" id="sound_changetempoby">'
+'<value name="TEMPO"><shadow type="math_number"><field name="NUM">20</field></shadow></value></block>'

let NEW_BLOCK_STRING_settempotobpm = '<block type="sound_settempotobpm" id="sound_settempotobpm">'
+'<value name="TEMPO"><shadow type="math_number"><field name="NUM">60</field></shadow></value></block>'

let NEW_BLOCK_STRING_tempo = '<block type="sound_tempo" id="sound_tempo"></block>'

// PEN BLOCKS
let NEW_BLOCK_STRING_clear = '<block type="pen_clear" id="pen_clear"></block>'

let NEW_BLOCK_STRING_stamp = '<block type="pen_stamp" id="pen_stamp"></block>'

let NEW_BLOCK_STRING_pendown = '<block type="pen_pendown" id="pen_pendown"></block>'

let NEW_BLOCK_STRING_penup = '<block type="pen_penup" id="pen_penup"></block>'

let NEW_BLOCK_STRING_setpencolortocolor = '<block type="pen_setpencolortocolor" id="pen_setpencolortocolor">'
+'<value name="COLOR"><shadow type="colour_picker"></shadow></value></block>'

let NEW_BLOCK_STRING_changepencolorby = '<block type="pen_changepencolorby" id="pen_changepencolorby">'
+'<value name="COLOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block>'

let NEW_BLOCK_STRING_setpencolortonum = '<block type="pen_setpencolortonum" id="pen_setpencolortonum">'
+'<value name="COLOR"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block>'

let NEW_BLOCK_STRING_changepenshadeby = '<block type="pen_changepenshadeby" id="pen_changepenshadeby">'
+'<value name="SHADE"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block>'

let NEW_BLOCK_STRING_setpenshadeto = '<block type="pen_setpenshadeto" id="pen_setpenshadeto">'
+'<value name="SHADE"><shadow type="math_number"><field name="NUM">50</field></shadow></value></block>'

let NEW_BLOCK_STRING_changepensizeby = '<block type="pen_changepensizeby" id="pen_changepensizeby">'
+'<value name="SIZE"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>'

let NEW_BLOCK_STRING_setpensizeto = '<block type="pen_setpensizeto" id="pen_setpensizeto">'
+'<value name="SIZE"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>'

let NEW_BLOCK_STRING_sphere = '<block type="pen_sphere" id="pen_sphere"><value name="RADIUS">'
+'<shadow type="math_number"><field name="NUM">50</field></shadow></value></block>'

let NEW_BLOCK_STRING_box = '<block type="pen_box" id="pen_box"><value name="WIDTH">'
+'<shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="HEIGHT">'
+'<shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="DEPTH">'
+'<shadow type="math_number"><field name="NUM">50</field></shadow></value></block>'

let NEW_BLOCK_STRING_arc = '<block type="pen_arc" id="pen_box"><value name="WIDTH">'
+'<shadow type="math_number"><field name="NUM">50</field></shadow></value>'
+'<value name="HEIGHT"><shadow type="math_number"><field name="NUM">50</field></shadow></value></block>'

let NEW_BLOCK_STRING_cylinder = '<block type="pen_cylinder" id="pen_box"><value name="TOP">'
+'<shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="BOTTOM">'
+'<shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="HEIGHT">'
+'<shadow type="math_number"><field name="NUM">100</field></shadow></value></block>'

// CONTROL BLOCKS
let NEW_BLOCK_STRING_wait = '<block type="control_wait" id="control_wait"><value name="DURATION">'
+'<shadow type="math_positive_number"><field name="NUM">1</field></shadow></value></block>'

let NEW_BLOCK_STRING_repeat = '<block type="control_repeat" id="control_repeat"><value name="TIMES">'
+'<shadow type="math_whole_number"><field name="NUM">10</field></shadow></value></block>'

let NEW_BLOCK_STRING_forever = '<block type="control_forever" id="control_forever"></block>'

let NEW_BLOCK_STRING_if = '<block type="control_if" id="control_if"></block>'

let NEW_BLOCK_STRING_if_else = '<block type="control_if_else" id="control_if_else"></block>'

let NEW_BLOCK_STRING_wait_until = '<block type="control_wait_until" id="control_wait_until"></block>'

let NEW_BLOCK_STRING_repeat_until = '<block type="control_repeat_until" id="control_repeat_until"></block>'

let NEW_BLOCK_STRING_stop = '<block type="control_stop" id="control_stop"></block>'

let NEW_BLOCK_STRING_start_as_clone = '<block type="control_start_as_clone" id="control_start_as_clone"></block>'

let NEW_BLOCK_STRING_create_clone_of = '<block type="control_create_clone_of" id="control_create_clone_of">'
+'<value name="CLONE_OPTION"><shadow type="control_create_clone_of_menu"></shadow></value></block>'

let NEW_BLOCK_STRING_delete_this_clone = '<block type="control_delete_this_clone" id="control_delete_this_clone"></block>'

// ALL SENSING BLOCKS
let NEW_BLOCK_STRING_touchingobject = '<block type="sensing_touchingobject" id="sensing_touchingobject">'
+'<value name="TOUCHINGOBJECTMENU"><shadow type="sensing_touchingobjectmenu"></shadow></value></block>'

let NEW_BLOCK_STRING_touchingcolor = '<block type="sensing_touchingcolor" id="sensing_touchingcolor">'
+'<value name="COLOR"><shadow type="colour_picker"></shadow></value></block>'

let NEW_BLOCK_STRING_coloristouchingcolor = '<block type="sensing_coloristouchingcolor" id="sensing_coloristouchingcolor">'
+'<value name="COLOR"><shadow type="colour_picker"></shadow></value><value name="COLOR2">'
+'<shadow type="colour_picker"></shadow></value></block>'

let NEW_BLOCK_STRING_distanceto = '<block type="sensing_distanceto" id="sensing_distanceto">'
+'<value name="DISTANCETOMENU"><shadow type="sensing_distancetomenu"></shadow></value></block>'

let NEW_BLOCK_STRING_keypressed = '<block type="sensing_keypressed" id="sensing_keypressed">'
+'<value name="KEY_OPTION"><shadow type="sensing_keyoptions"></shadow></value></block>'

let NEW_BLOCK_STRING_mousedown = '<block type="sensing_mousedown" id="sensing_mousedown"></block>'

let NEW_BLOCK_STRING_mousex = '<block type="sensing_mousex" id="sensing_mousex"></block>'

let NEW_BLOCK_STRING_mousey = '<block type="sensing_mousey" id="sensing_mousey"></block>'

let NEW_BLOCK_STRING_loudness = '<block type="sensing_loudness" id="sensing_loudness"></block>'

let NEW_BLOCK_STRING_timer = '<block type="sensing_timer" id="sensing_timer"></block>'

let NEW_BLOCK_STRING_resettimer = '<block type="sensing_resettimer" id="sensing_resettimer"></block>'

let NEW_BLOCK_STRING_of = '<block type="sensing_of" id="sensing_of"><value name="PROPERTY">'
+'<shadow type="sensing_of_property_menu"></shadow></value><value name="OBJECT">'
+'<shadow type="sensing_of_object_menu"></shadow></value></block>'

let NEW_BLOCK_STRING_current = '<block type="sensing_current" id="sensing_current">'
+'<value name="CURRENTMENU"><shadow type="sensing_currentmenu"></shadow></value></block>'

let NEW_BLOCK_STRING_dayssince2000 = '<block type="sensing_dayssince2000" id="sensing_dayssince2000"></block>'

// OPERATORS BLOCKS
let NEW_BLOCK_STRING_add = '<block type="operator_add" id="operator_add"><value name="NUM1">'
+'<shadow type="math_number"><field name="NUM"></field></shadow></value><value name="NUM2">'
+'<shadow type="math_number"><field name="NUM"></field></shadow></value></block>'

let NEW_BLOCK_STRING_subtract = '<block type="operator_subtract" id="operator_subtract">'
+'<value name="NUM1"><shadow type="math_number"><field name="NUM"></field></shadow>'
+'</value><value name="NUM2"><shadow type="math_number"><field name="NUM"></field>'
+'</shadow></value></block>'

let NEW_BLOCK_STRING_multiply = '<block type="operator_multiply" id="operator_multiply">'
+'<value name="NUM1"><shadow type="math_number"><field name="NUM"></field></shadow>'
+'</value><value name="NUM2"><shadow type="math_number"><field name="NUM"></field>'
+'</shadow></value></block>'

let NEW_BLOCK_STRING_divide = '<block type="operator_divide" id="operator_divide">'
+'<value name="NUM1"><shadow type="math_number"><field name="NUM"></field></shadow>'
+'</value><value name="NUM2"><shadow type="math_number"><field name="NUM"></field>'
+'</shadow></value></block>'

let NEW_BLOCK_STRING_random = '<block type="operator_random" id="operator_random">'
+'<value name="FROM"><shadow type="math_number"><field name="NUM">1</field>'
+'</shadow></value><value name="TO"><shadow type="math_number">'
+'<field name="NUM">10</field></shadow></value></block>'

let NEW_BLOCK_STRING_lt = '<block type="operator_lt" id="operator_lt">'
+'<value name="OPERAND1"><shadow type="text"><field name="TEXT"></field></shadow>'
+'</value><value name="OPERAND2"><shadow type="text"><field name="TEXT"></field>'
+'</shadow></value></block>'

let NEW_BLOCK_STRING_equals = '<block type="operator_equals" id="operator_equals">'
+'<value name="OPERAND1"><shadow type="text"><field name="TEXT"></field></shadow>'
+'</value><value name="OPERAND2"><shadow type="text"><field name="TEXT"></field>'
+'</shadow></value></block>'

let NEW_BLOCK_STRING_gt = '<block type="operator_gt" id="operator_gt">'
+'<value name="OPERAND1"><shadow type="text"><field name="TEXT"></field>'
+'</shadow></value><value name="OPERAND2"><shadow type="text">'
+'<field name="TEXT"></field></shadow></value></block>'

let NEW_BLOCK_STRING_and = '<block type="operator_and" id="operator_and"></block>'

let NEW_BLOCK_STRING_or = '<block type="operator_or" id="operator_or"></block>'

let NEW_BLOCK_STRING_not = '<block type="operator_not" id="operator_not"></block>'

let NEW_BLOCK_STRING_join = '<block type="operator_join" id="operator_join">'
+'<value name="STRING1"><shadow type="text"><field name="TEXT">hello</field>'
+'</shadow></value><value name="STRING2"><shadow type="text">'
+'<field name="TEXT">world</field></shadow></value></block>'

let NEW_BLOCK_STRING_letter_of = '<block type="operator_letter_of" id="operator_letter_of">'
+'<value name="LETTER"><shadow type="math_whole_number"><field name="NUM">1</field>'
+'</shadow></value><value name="STRING"><shadow type="text"><field name="TEXT">world</field>'
+'</shadow></value></block>'

let NEW_BLOCK_STRING_length = '<block type="operator_length" id="operator_length">'
+'<value name="STRING"><shadow type="text"><field name="TEXT">world</field>'
+'</shadow></value></block>'

let NEW_BLOCK_STRING_mod = '<block type="operator_mod" id="operator_mod">'
+'<value name="NUM1"><shadow type="math_number"><field name="NUM"></field>'
+'</shadow></value><value name="NUM2"><shadow type="math_number">'
+'<field name="NUM"></field></shadow></value></block>'

let NEW_BLOCK_STRING_round = '<block type="operator_round" id="operator_round">'
+'<value name="NUM"><shadow type="math_number"><field name="NUM"></field>'
+'</shadow></value></block>'

let NEW_BLOCK_STRING_mathop = '<block type="operator_mathop" id="operator_mathop">'
+'<value name="NUM"><shadow type="math_number"><field name="NUM"></field>'
+'</shadow></value></block>'

// MOTION VM FUNCTIONS
vm.runtime._primitives.motion_rotate = function (args, util) {
    util.target.setRotation(
        util.target.rotation[0] + Cast.toNumber(args.DEGREESX),
        util.target.rotation[1] + Cast.toNumber(args.DEGREESY),
        util.target.rotation[2] + Cast.toNumber(args.DEGREESZ)
    );
}

vm.runtime._primitives.motion_setrotation = function (args, util) {
    util.target.setRotation(
        Cast.toNumber(args.DEGREESX),
        Cast.toNumber(args.DEGREESY),
        Cast.toNumber(args.DEGREESZ)
    );
}

vm.runtime._primitives.motion_gotoxyz = function (args, util) {
    util.target.setXYZ(
        Cast.toNumber(args.X),
        Cast.toNumber(args.Y),
        Cast.toNumber(args.Z)
    );
}

vm.runtime._primitives.motion_changexby = function (args, util) {
    util.target.setXYZ(util.target.x + Cast.toNumber(args.DX), util.target.y, util.target.z);
}

vm.runtime._primitives.motion_setx = function (args, util) {
    util.target.setXYZ(Cast.toNumber(args.X), util.target.y, util.target.z);
}

vm.runtime._primitives.motion_changeyby = function (args, util) {
    util.target.setXYZ(util.target.x, util.target.y + Cast.toNumber(args.DY), util.target.z);
}

vm.runtime._primitives.motion_sety = function (args, util) {
    util.target.setXYZ(util.target.x, Cast.toNumber(args.Y), util.target.z);
}

vm.runtime._primitives.motion_changezby = function (args, util) {
    util.target.setXYZ(util.target.x, util.target.y, util.target.z + Cast.toNumber(args.DZ));
}

vm.runtime._primitives.motion_setz = function (args, util) {
    util.target.setXYZ(util.target.x, util.target.y, Cast.toNumber(args.Z));
}

vm.runtime._primitives.motion_xposition = function (args, util) {
    return util.target.x;
}

vm.runtime._primitives.motion_yposition = function (args, util) {
    return util.target.y;
}

vm.runtime._primitives.motion_zposition = function (args, util) {
    return util.target.z;
}

// LOOKS VM FUNCTIONS
vm.runtime._primitives.looks_show = function (args, util) {
    util.target.setVisible(true);
}

vm.runtime._primitives.looks_hide = function (args, util) {
    util.target.setVisible(false);
}

function _setCostumeOrBackdrop(target, requestedCostume, optZeroIndex) {
    if (typeof requestedCostume === 'number') {
        target.setCostume(optZeroIndex ? requestedCostume : requestedCostume - 1);
    } else {
        var costumeIndex = target.getCostumeIndexByName(requestedCostume);
        if (costumeIndex > -1) {
            target.setCostume(costumeIndex);
        } else if (requestedCostume === 'previous costume' || requestedCostume === 'previous backdrop') {
            target.setCostume(target.currentCostume - 1);
        } else if (requestedCostume === 'next costume' || requestedCostume === 'next backdrop') {
            target.setCostume(target.currentCostume + 1);
        } else {
            var forcedNumber = Number(requestedCostume);
            if (!isNaN(forcedNumber)) {
                target.setCostume(optZeroIndex ? forcedNumber : forcedNumber - 1);
            }
        }
    }
    if (target === this.runtime.getTargetForStage()) {
        // Target is the stage - start hats.
        var newName = target.sprite.costumes[target.currentCostume].name;
        return this.runtime.startHats('event_whenbackdropswitchesto', {
            BACKDROP: newName
        });
    }
    return [];
}

vm.runtime._primitives.looks_switchcostumeto = function (args, util) {
    this._setCostumeOrBackdrop(util.target, args.COSTUME);
}

vm.runtime._primitives.looks_nextcostume = function (args, util) {
    this._setCostumeOrBackdrop(util.target, util.target.currentCostume + 1, true);
}

vm.runtime._primitives.looks_nextbackdrop = function (args, util) {
    var stage = this.runtime.getTargetForStage();
    this._setCostumeOrBackdrop(stage, stage.currentCostume + 1, true);
}

vm.runtime._primitives.looks_switchbackdropto = function (args, util) {
    this._setCostumeOrBackdrop(this.runtime.getTargetForStage(), args.BACKDROP);
}

vm.runtime._primitives.looks_switchbackdroptoandwait = function (args, util) {
    // Have we run before, starting threads?
    if (!util.stackFrame.startedThreads) {
        // No - switch the backdrop.
        util.stackFrame.startedThreads = this._setCostumeOrBackdrop(this.runtime.getTargetForStage(), args.BACKDROP);
        if (util.stackFrame.startedThreads.length === 0) {
            // Nothing was started.
            return;
        }
    }
    // We've run before; check if the wait is still going on.
    var instance = this;
    var waiting = util.stackFrame.startedThreads.some(function (thread) {
        return instance.runtime.isActiveThread(thread);
    });
    if (waiting) {
        util.yield();
    }
}

vm.runtime._primitives.looks_setscaleto = function (args, util) {
    var size = Cast.toNumber(args.SIZE);
    util.target.setSize(size);
}

vm.runtime._primitives.looks_costumeorder = function (args, util) {
    return util.target.currentCostume + 1;
}

vm.runtime._primitives.looks_backdroporder = function (args, util) {
    var stage = this.runtime.getTargetForStage();
    return stage.currentCostume + 1;
}

vm.runtime._primitives.looks_backdropname = function (args, util) {
    var stage = this.runtime.getTargetForStage();
    return stage.sprite.costumes[stage.currentCostume].name;
}

vm.runtime._primitives.looks_setcamerato = function (args, util) {
    if (!util.target.isStage) return;
    this.runtime.renderer.cameraPosition = [
        Cast.toNumber(args.X),
        Cast.toNumber(args.Y),
        Cast.toNumber(args.Z)
    ];
}

vm.runtime._primitives.looks_changecameraxby = function (args, util) {
    if (!util.target.isStage) return;
    const renderer = this.runtime.renderer;
    const currentPosition = renderer.cameraPosition;
    renderer.cameraPosition = [
        currentPosition[0] + Cast.toNumber(args.DX),
        currentPosition[1],
        currentPosition[2]
    ];
}

vm.runtime._primitives.looks_changecamerayby = function (args, util) {
    if (!util.target.isStage) return;
    const renderer = this.runtime.renderer;
    const currentPosition = renderer.cameraPosition;
    renderer.cameraPosition = [
        currentPosition[0],
        currentPosition[1] + Cast.toNumber(args.DY),
        currentPosition[2]
    ];
}

vm.runtime._primitives.looks_changecamerazby = function (args, util) {
    if (!util.target.isStage) return;
    const renderer = this.runtime.renderer;
    const currentPosition = renderer.cameraPosition;
    renderer.cameraPosition = [
        currentPosition[0],
        currentPosition[1],
        currentPosition[2] + Cast.toNumber(args.DZ)
    ];
}

vm.runtime._primitives.looks_turncameraaroundx = function (args, util) {
    if (!util.target.isStage) return;
    this.runtime.renderer.rotateCameraVertical(Cast.toNumber(args.DEGREES));
}

vm.runtime._primitives.looks_turncameraaroundy = function (args, util) {
    if (!util.target.isStage) return;
    this.runtime.renderer.rotateCameraHorizontal(Cast.toNumber(args.DEGREES));
}

vm.runtime._primitives.looks_turncameraaroundz = function (args, util) {

}

// SOUND VM FUNCTIONS
vm.runtime._primitives.sound_play = function (args, util) {
    var index = this._getSoundIndex(args.SOUND_MENU, util);
    if (index >= 0) {
        var soundId = util.target.sprite.sounds[index].soundId;
        if (util.target.audioPlayer === null) return;
        util.target.audioPlayer.playSound(soundId);
    }
}

vm.runtime._primitives.sound_playuntildone = function (args, util) {
    var index = this._getSoundIndex(args.SOUND_MENU, util);
    if (index >= 0) {
        var soundId = util.target.sprite.sounds[index].soundId;
        if (util.target.audioPlayer === null) return;
        return util.target.audioPlayer.playSound(soundId);
    }
}

function _getSoundIndex(soundName, util) {
    // if the sprite has no sounds, return -1
    var len = util.target.sprite.sounds.length;
    if (len === 0) {
        return -1;
    }

    // look up by name first
    var index = this.getSoundIndexByName(soundName, util);
    if (index !== -1) {
        return index;
    }

    // then try using the sound name as a 1-indexed index
    var oneIndexedIndex = parseInt(soundName, 10);
    if (!isNaN(oneIndexedIndex)) {
        return MathUtil.wrapClamp(oneIndexedIndex - 1, 0, len - 1);
    }

    // could not be found as a name or converted to index, return -1
    return -1;
}

vm.runtime._primitives.sound_stopallsounds = function (args, util) {
    if (util.target.audioPlayer === null) return;
    util.target.audioPlayer.stopAllSounds();
}

vm.runtime._primitives.sound_playdrumforbeats = function (args, util) {
    var drum = Cast.toNumber(args.DRUM);
    drum -= 1; // drums are one-indexed
    if (typeof this.runtime.audioEngine === 'undefined') return;
    drum = MathUtil.wrapClamp(drum, 0, this.runtime.audioEngine.numDrums - 1);
    var beats = Cast.toNumber(args.BEATS);
    beats = this._clampBeats(beats);
    if (util.target.audioPlayer === null) return;
    return util.target.audioPlayer.playDrumForBeats(drum, beats);
}

vm.runtime._primitives.sound_restforbeats = function (args, util) {
    var beats = Cast.toNumber(args.BEATS);
    beats = this._clampBeats(beats);
    if (typeof this.runtime.audioEngine === 'undefined') return;
    return this.runtime.audioEngine.waitForBeats(beats);
}

vm.runtime._primitives.sound_playnoteforbeats = function (args, util) {
    var note = Cast.toNumber(args.NOTE);
    note = MathUtil.clamp(note, Scratch3SoundBlocks.MIDI_NOTE_RANGE.min, Scratch3SoundBlocks.MIDI_NOTE_RANGE.max);
    var beats = Cast.toNumber(args.BEATS);
    beats = this._clampBeats(beats);
    var soundState = this._getSoundState(util.target);
    var inst = soundState.currentInstrument;
    var vol = soundState.volume;
    if (typeof this.runtime.audioEngine === 'undefined') return;
    return this.runtime.audioEngine.playNoteForBeatsWithInstAndVol(note, beats, inst, vol);
}

function _clampBeats(beats) {
    return MathUtil.clamp(beats, Scratch3SoundBlocks.BEAT_RANGE.min, Scratch3SoundBlocks.BEAT_RANGE.max);
}

vm.runtime._primitives.sound_setinstrumentto = function (args, util) {
    var soundState = this._getSoundState(util.target);
    var instNum = Cast.toNumber(args.INSTRUMENT);
    instNum -= 1; // instruments are one-indexed
    if (typeof this.runtime.audioEngine === 'undefined') return;
    instNum = MathUtil.wrapClamp(instNum, 0, this.runtime.audioEngine.numInstruments - 1);
    soundState.currentInstrument = instNum;
    return this.runtime.audioEngine.instrumentPlayer.loadInstrument(soundState.currentInstrument);
}

vm.runtime._primitives.sound_changeeffectby = function (args, util) {
    this._updateEffect(args, util, true);
}

vm.runtime._primitives.sound_seteffectto = function (args, util) {
    this._updateEffect(args, util, false);
}

vm.runtime._primitives.sound_cleareffects = function (args, util) {
    var soundState = this._getSoundState(util.target);
    for (var effect in soundState.effects) {
        if (!soundState.effects.hasOwnProperty(effect)) continue;
        soundState.effects[effect] = 0;
    }
    if (util.target.audioPlayer === null) return;
    util.target.audioPlayer.clearEffects();
}

function _updateEffect(args, util, change) {
    var effect = Cast.toString(args.EFFECT).toLowerCase();
    var value = Cast.toNumber(args.VALUE);

    var soundState = this._getSoundState(util.target);
    if (!soundState.effects.hasOwnProperty(effect)) return;

    if (change) {
        soundState.effects[effect] += value;
    } else {
        soundState.effects[effect] = value;
    }

    var effectRange = Scratch3SoundBlocks.EFFECT_RANGE[effect];
    soundState.effects[effect] = MathUtil.clamp(soundState.effects[effect], effectRange.min, effectRange.max);

    if (util.target.audioPlayer === null) return;
    util.target.audioPlayer.setEffect(effect, soundState.effects[effect]);
}

vm.runtime._primitives.sound_changevolumeby = function (args, util) {
    var soundState = this._getSoundState(util.target);
    var volume = Cast.toNumber(args.VOLUME) + soundState.volume;
    this._updateVolume(volume, util);
}

vm.runtime._primitives.sound_setvolumeto = function (args, util) {
    var volume = Cast.toNumber(args.VOLUME);
    this._updateVolume(volume, util);
}

vm.runtime._primitives.sound_volume = function (args, util) {
    var soundState = this._getSoundState(util.target);
    return soundState.volume;
}

vm.runtime._primitives.sound_changetempoby = function (args, util) {
    var change = Cast.toNumber(args.TEMPO);
    if (typeof this.runtime.audioEngine === 'undefined') return;
    var tempo = change + this.runtime.audioEngine.currentTempo;
    this._updateTempo(tempo);
}

vm.runtime._primitives.sound_settempotobpm = function (args, util) {
    var tempo = Cast.toNumber(args.TEMPO);
    this._updateTempo(tempo);
}

vm.runtime._primitives.sound_tempo = function (args, util) {
    if (typeof this.runtime.audioEngine === 'undefined') return;
    return this.runtime.audioEngine.currentTempo;
}

function _updateTempo(tempo) {
    tempo = MathUtil.clamp(tempo, Scratch3SoundBlocks.TEMPO_RANGE.min, Scratch3SoundBlocks.TEMPO_RANGE.max);
    if (typeof this.runtime.audioEngine === 'undefined') return;
    this.runtime.audioEngine.setTempo(tempo);
}

// PEN VM FUNCTIONS
/**
 * The pen "clear" block clears the pen layer's contents.
 */
vm.runtime._primitives.pen_clear = function (args, util) {
    const penSkinId = this._getPenLayerID();
    if (penSkinId >= 0) {
        this.runtime.renderer.penClear(penSkinId);
        this.runtime.requestRedraw();
    }
}
/**
 * The pen "stamp" block stamps the current drawable's image onto the pen layer.
 * @param {object} args - the block arguments.
 * @param {object} util - utility object provided by the runtime.
 */
vm.runtime._primitives.pen_stamp = function (args, util) {
    const penSkinId = this._getPenLayerID();
    if (penSkinId >= 0) {
        const target = util.target;
        this.runtime.renderer.penStamp(penSkinId, target.drawableID);
        this.runtime.requestRedraw();
    }
}
/**
 * The pen "pen down" block causes the target to leave pen trails on future motion.
 * @param {object} args - the block arguments.
 * @param {object} util - utility object provided by the runtime.
 */
vm.runtime._primitives.pen_pendown = function (args, util) {
    const target = util.target;
    const penState = this._getPenState(target);

    if (!penState.penDown) {
        penState.penDown = true;
        target.addListener(RenderedTarget.EVENT_TARGET_MOVED, this._onTargetMoved);
    }

    const penSkinId = this._getPenLayerID();
    if (penSkinId >= 0) {
        this.runtime.renderer.penPoint(penSkinId, penState.penAttributes, target.position);
        this.runtime.requestRedraw();
    }
}
/**
 * The pen "pen up" block stops the target from leaving pen trails.
 * @param {object} args - the block arguments.
 * @param {object} util - utility object provided by the runtime.
 */
vm.runtime._primitives.pen_penup = function (args, util) {
    const target = util.target;
    const penState = this._getPenState(target);

    if (penState.penDown) {
        penState.penDown = false;
        target.removeListener(RenderedTarget.EVENT_TARGET_MOVED, this._onTargetMoved);
    }
}
/**
 * The pen "set pen color to {color}" block sets the pen to a particular RGB color.
 * @param {object} args - the block arguments.
 *  @property {int} COLOR - the color to set, expressed as a 24-bit RGB value (0xRRGGBB).
 * @param {object} util - utility object provided by the runtime.
 */
vm.runtime._primitives.pen_setpencolortocolor = function (args, util) {
    const penState = this._getPenState(util.target);
    const rgb = Cast.toRgbColorObject(args.COLOR);
    const hsv = Color.rgbToHsv(rgb);

    penState.hue = 200 * hsv.h / 360;
    penState.shade = 50 * hsv.v;
    penState.penAttributes.color[0] = rgb.r / 255.0;
    penState.penAttributes.color[1] = rgb.g / 255.0;
    penState.penAttributes.color[2] = rgb.b / 255.0;
    if (rgb.hasOwnProperty('a')) {  // Will there always be an 'a'?
        penState.penAttributes.color[3] = rgb.a / 255.0;
    } else {
        penState.penAttributes.color[3] = 1;
    }
}
/**
 * The pen "change pen color by {number}" block rotates the hue of the pen by the given amount.
 * @param {object} args - the block arguments.
 *  @property {number} COLOR - the amount of desired hue rotation.
 * @param {object} util - utility object provided by the runtime.
 */
vm.runtime._primitives.pen_changepencolorby = function (args, util) {
    const penState = this._getPenState(util.target);
    penState.hue = this._wrapHueOrShade(penState.hue + Cast.toNumber(args.COLOR));
    this._updatePenColor(penState);
}
/**
 * The pen "set pen color to {number}" block sets the hue of the pen.
 * @param {object} args - the block arguments.
 *  @property {number} COLOR - the desired hue.
 * @param {object} util - utility object provided by the runtime.
 */
vm.runtime._primitives.pen_setpencolortonum = function (args, util) {
    const penState = this._getPenState(util.target);
    penState.hue = this._wrapHueOrShade(Cast.toNumber(args.COLOR));
    this._updatePenColor(penState);
}
/**
 * The pen "change pen shade by {number}" block changes the "shade" of the pen, related to the HSV value.
 * @param {object} args - the block arguments.
 *  @property {number} SHADE - the amount of desired shade change.
 * @param {object} util - utility object provided by the runtime.
 */
vm.runtime._primitives.pen_changepenshadeby = function (args, util) {
    const penState = this._getPenState(util.target);
    penState.shade = this._wrapHueOrShade(penState.shade + Cast.toNumber(args.SHADE));
    this._updatePenColor(penState);
}
/**
 * The pen "set pen shade to {number}" block sets the "shade" of the pen, related to the HSV value.
 * @param {object} args - the block arguments.
 *  @property {number} SHADE - the amount of desired shade change.
 * @param {object} util - utility object provided by the runtime.
 */
vm.runtime._primitives.pen_setpenshadeto = function (args, util) {
    const penState = this._getPenState(util.target);
    penState.shade = this._wrapHueOrShade(Cast.toNumber(args.SHADE));
    this._updatePenColor(penState);
}
/**
 * The pen "change pen size by {number}" block changes the pen size by the given amount.
 * @param {object} args - the block arguments.
 *  @property {number} SIZE - the amount of desired size change.
 * @param {object} util - utility object provided by the runtime.
 */
vm.runtime._primitives.pen_changepensizeby = function (args, util) {
    const penAttributes = this._getPenState(util.target).penAttributes;
    penAttributes.diameter = this._clampPenSize(penAttributes.diameter + Cast.toNumber(args.SIZE));
}
/**
 * The pen "set pen size to {number}" block sets the pen size to the given amount.
 * @param {object} args - the block arguments.
 *  @property {number} SIZE - the amount of desired size change.
 * @param {object} util - utility object provided by the runtime.
 */
vm.runtime._primitives.pen_setpensizeto = function (args, util) {
    const penAttributes = this._getPenState(util.target).penAttributes;
    penAttributes.diameter = this._clampPenSize(Cast.toNumber(args.SIZE));
}

vm.runtime._primitives.pen_sphere = function (args, util) {
    const target = util.target;
    const penAttributes = this._getPenState(target).penAttributes;
    const penSkinId = this._getPenLayerID();

    if (penSkinId >= 0) {
        this.runtime.renderer.penSphere(penSkinId, penAttributes, Cast.toNumber(args.RADIUS), target.position);
        this.runtime.requestRedraw();
    }
}

vm.runtime._primitives.pen_box = function (args, util) {
    const target = util.target;
    const penAttributes = this._getPenState(target).penAttributes;
    const penSkinId = this._getPenLayerID();

    if (penSkinId >= 0) {
        const dimensions = [Cast.toNumber(args.WIDTH), Cast.toNumber(args.HEIGHT), Cast.toNumber(args.DEPTH)];
        const position = target.position;
        const rotation = target.rotation;
        this.runtime.renderer.penCube(penSkinId, penAttributes, dimensions, position, rotation);
    }
}

vm.runtime._primitives.pen_arc = function (args, util) {
    const target = util.target;
    const penAttributes = this._getPenState(target).penAttributes;
    const penSkinId = this._getPenLayerID();

    if (penSkinId >= 0) {
        const dimensions = [Cast.toNumber(args.WIDTH), Cast.toNumber(args.HEIGHT)];
        const position = target.position;
        const rotation = target.rotation;
        this.runtime.renderer.penArc(penSkinId, penAttributes, dimensions, position, rotation);
    }
}

vm.runtime._primitives.pen_cylinder = function (args, util) {
    const target = util.target;
    const penAttributes = this._getPenState(target).penAttributes;
    const penSkinId = this._getPenLayerID();

    if (penSkinId >= 0) {
        const dimensions = [Cast.toNumber(args.TOP), Cast.toNumber(args.BOTTOM), Cast.toNumber(args.HEIGHT)];
        const position = target.position;
        const rotation = target.rotation;
        this.runtime.renderer.penCylinder(penSkinId, penAttributes, dimensions, position, rotation);
    }
}

// CONTROL VM FUNCTIONS
vm.runtime._primitives.control_wait = function (args, util) {
    var duration = Math.max(0, 1000 * Cast.toNumber(args.DURATION));
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, duration);
    });
}

vm.runtime._primitives.control_repeat = function (args, util) {
    var times = Math.floor(Cast.toNumber(args.TIMES));
    // Initialize loop
    if (typeof util.stackFrame.loopCounter === 'undefined') {
        util.stackFrame.loopCounter = times;
    }
    // Only execute once per frame.
    // When the branch finishes, `repeat` will be executed again and
    // the second branch will be taken, yielding for the rest of the frame.
    // Decrease counter
    util.stackFrame.loopCounter--;
    // If we still have some left, start the branch.
    if (util.stackFrame.loopCounter >= 0) {
        util.startBranch(1, true);
    }
}

vm.runtime._primitives.control_forever = function (args, util) {
    util.startBranch(1, true);
}

vm.runtime._primitives.control_if = function (args, util) {
    var condition = Cast.toBoolean(args.CONDITION);
    if (condition) {
        util.startBranch(1, false);
    }
}

vm.runtime._primitives.control_if_else = function (args, util) {
    var condition = Cast.toBoolean(args.CONDITION);
    if (condition) {
        util.startBranch(1, false);
    } else {
        util.startBranch(2, false);
    }
}

vm.runtime._primitives.control_wait_until = function (args, util) {
    var condition = Cast.toBoolean(args.CONDITION);
    if (!condition) {
        util.yield();
    }
}

vm.runtime._primitives.control_repeat_until = function (args, util) {
    var condition = Cast.toBoolean(args.CONDITION);
    // If the condition is true, start the branch.
    if (!condition) {
        util.startBranch(1, true);
    }
}

vm.runtime._primitives.control_stop = function (args, util) {
    var option = args.STOP_OPTION;
    if (option === 'all') {
        util.stopAll();
    } else if (option === 'other scripts in sprite' || option === 'other scripts in stage') {
        util.stopOtherTargetThreads();
    } else if (option === 'this script') {
        util.stopThisScript();
    }
}

vm.runtime._primitives.control_start_as_clone = function (args, util) {
    var cloneTarget = util.target;
    var newClone = cloneTarget.makeClone();
    if (newClone) {
        this.runtime.targets.push(newClone);
    }
}

vm.runtime._primitives.control_create_clone_of = function (args, util) {
    var cloneTarget = this.runtime.getSpriteTargetByName(args.CLONE_OPTION);
    var newClone = cloneTarget.makeClone();
    if (newClone) {
        this.runtime.targets.push(newClone);
    }
}

vm.runtime._primitives.control_delete_this_clone = function (args, util) {
    if (util.target.isOriginal) return;
    this.runtime.disposeTarget(util.target);
    this.runtime.stopForTarget(util.target);
}

// SENSING VM FUNCTIONS
vm.runtime._primitives.sensing_touchingobject = function (args, util) {
    var requestedObject = args.TOUCHINGOBJECTMENU;
    if (requestedObject === '_mouse_') {
        var mouseX = util.ioQuery('mouse', 'getX');
        var mouseY = util.ioQuery('mouse', 'getY');
        return util.target.isTouchingPoint(mouseX, mouseY);
    } else if (requestedObject === '_edge_') {
        return util.target.isTouchingEdge();
    }
    return util.target.isTouchingSprite(requestedObject);
}

vm.runtime._primitives.sensing_touchingcolor = function (args, util) {
    var color = Cast.toRgbColorList(args.COLOR);
    return util.target.isTouchingColor(color);
}

vm.runtime._primitives.sensing_coloristouchingcolor = function (args, util) {
    var maskColor = Cast.toRgbColorList(args.COLOR);
    var targetColor = Cast.toRgbColorList(args.COLOR2);
    return util.target.colorIsTouchingColor(targetColor, maskColor);
}

vm.runtime._primitives.sensing_distanceto = function (args, util) {
    if (util.target.isStage) return 10000;

    var targetX = 0;
    var targetY = 0;
    if (args.DISTANCETOMENU === '_mouse_') {
        targetX = util.ioQuery('mouse', 'getX');
        targetY = util.ioQuery('mouse', 'getY');
    } else {
        var distTarget = this.runtime.getSpriteTargetByName(args.DISTANCETOMENU);
        if (!distTarget) return 10000;
        targetX = distTarget.x;
        targetY = distTarget.y;
    }

    var dx = util.target.x - targetX;
    var dy = util.target.y - targetY;
    return Math.sqrt(dx * dx + dy * dy);
}

vm.runtime._primitives.sensing_keypressed = function (args, util) {
    return util.ioQuery('keyboard', 'getKeyIsDown', [args.KEY_OPTION]);
}

vm.runtime._primitives.sensing_mousedown = function (args, util) {
    return util.ioQuery('mouse', 'getIsDown');
}

vm.runtime._primitives.sensing_mousex = function (args, util) {
    return util.ioQuery('mouse', 'getX');
}

vm.runtime._primitives.sensing_mousey = function (args, util) {
    return util.ioQuery('mouse', 'getY');
}

vm.runtime._primitives.sensing_loudness = function (args, util) {
    if (typeof this.runtime.audioEngine === 'undefined') return -1;
    return this.runtime.audioEngine.getLoudness();
}

vm.runtime._primitives.sensing_timer = function (args, util) {
    return util.ioQuery('clock', 'projectTimer');
}

vm.runtime._primitives.sensing_resettimer = function (args, util) {
    util.ioQuery('clock', 'resetProjectTimer');
}

vm.runtime._primitives.sensing_of = function (args, util) {
    var attrTarget = void 0;

    if (args.OBJECT === '_stage_') {
        attrTarget = this.runtime.getTargetForStage();
    } else {
        attrTarget = this.runtime.getSpriteTargetByName(args.OBJECT);
    }

    // Generic attributes
    if (attrTarget.isStage) {
        switch (args.PROPERTY) {
            // Scratch 1.4 support
            case 'background #':
                return attrTarget.currentCostume + 1;

            case 'backdrop #':
                return attrTarget.currentCostume + 1;
            case 'backdrop name':
                return attrTarget.sprite.costumes[attrTarget.currentCostume].name;
            case 'volume':
                return; // @todo: Keep this in mind for sound blocks!
        }
    } else {
        switch (args.PROPERTY) {
            case 'x position':
                return attrTarget.x;
            case 'y position':
                return attrTarget.y;
            case 'direction':
                return attrTarget.direction;
            case 'costume #':
                return attrTarget.currentCostume + 1;
            case 'costume name':
                return attrTarget.sprite.costumes[attrTarget.currentCostume].name;
            case 'size':
                return attrTarget.size;
            case 'volume':
                return; // @todo: above, keep in mind for sound blocks..
        }
    }

    // Variables
    var varName = args.PROPERTY;
    if (attrTarget.variables.hasOwnProperty(varName)) {
        return attrTarget.variables[varName].value;
    }

    // Otherwise, 0
    return 0;
}

vm.runtime._primitives.sensing_current = function (args, util) {
    var menuOption = Cast.toString(args.CURRENTMENU).toLowerCase();
    var date = new Date();
    switch (menuOption) {
        case 'year':
            return date.getFullYear();
        case 'month':
            return date.getMonth() + 1; // getMonth is zero-based
        case 'date':
            return date.getDate();
        case 'dayofweek':
            return date.getDay() + 1; // getDay is zero-based, Sun=0
        case 'hour':
            return date.getHours();
        case 'minute':
            return date.getMinutes();
        case 'second':
            return date.getSeconds();
    }
    return 0;
}

vm.runtime._primitives.sensing_dayssince2000 = function (args, util) {
    var msPerDay = 24 * 60 * 60 * 1000;
    var start = new Date(2000, 0, 1); // Months are 0-indexed.
    var today = new Date();
    var dstAdjust = today.getTimezoneOffset() - start.getTimezoneOffset();
    var mSecsSinceStart = today.valueOf() - start.valueOf();
    mSecsSinceStart += (today.getTimezoneOffset() - dstAdjust) * 60 * 1000;
    return mSecsSinceStart / msPerDay;
}

// OPERATORS VM FUNCTIONS
vm.runtime._primitives.operator_add = function (args, util) {
    return Cast.toNumber(args.NUM1) + Cast.toNumber(args.NUM2);
}

vm.runtime._primitives.operator_subtract = function (args, util) {
    return Cast.toNumber(args.NUM1) - Cast.toNumber(args.NUM2);
}

vm.runtime._primitives.operator_multiply = function (args, util) {
    return Cast.toNumber(args.NUM1) * Cast.toNumber(args.NUM2);
}

vm.runtime._primitives.operator_divide = function (args, util) {
    return Cast.toNumber(args.NUM1) / Cast.toNumber(args.NUM2);
}

vm.runtime._primitives.operator_random = function (args, util) {
    const nFrom = Cast.toNumber(args.FROM);
    const nTo = Cast.toNumber(args.TO);
    const low = nFrom <= nTo ? nFrom : nTo;
    const high = nFrom <= nTo ? nTo : nFrom;
    if (low === high) return low;
    // If both arguments are ints, truncate the result to an int.
    if (Cast.isInt(args.FROM) && Cast.isInt(args.TO)) {
        return low + Math.floor(Math.random() * ((high + 1) - low));
    }
    return (Math.random() * (high - low)) + low;
}

vm.runtime._primitives.operator_lt = function (args, util) {
    return Cast.compare(args.OPERAND1, args.OPERAND2) < 0;
}

vm.runtime._primitives.operator_equals = function (args, util) {
    return Cast.compare(args.OPERAND1, args.OPERAND2) === 0;
}

vm.runtime._primitives.operator_gt = function (args, util) {
    return Cast.compare(args.OPERAND1, args.OPERAND2) > 0;
}

vm.runtime._primitives.operator_and = function (args, util) {
    return Cast.toBoolean(args.OPERAND1) && Cast.toBoolean(args.OPERAND2);
}

vm.runtime._primitives.operator_or = function (args, util) {
    return Cast.toBoolean(args.OPERAND1) || Cast.toBoolean(args.OPERAND2);
}

vm.runtime._primitives.operator_not = function (args, util) {
    return !Cast.toBoolean(args.OPERAND);
}

vm.runtime._primitives.operator_join = function (args, util) {
    return Cast.toString(args.STRING1) + Cast.toString(args.STRING2);
}

vm.runtime._primitives.operator_letter_of = function (args, util) {
    const index = Cast.toNumber(args.LETTER) - 1;
    const str = Cast.toString(args.STRING);
    // Out of bounds?
    if (index < 0 || index >= str.length) {
        return '';
    }
    return str.charAt(index);
}

vm.runtime._primitives.operator_length = function (args, util) {
    return Cast.toString(args.STRING).length;
}

vm.runtime._primitives.operator_mod = function (args, util) {
    const n = Cast.toNumber(args.NUM1);
    const modulus = Cast.toNumber(args.NUM2);
    let result = n % modulus;
    // Scratch mod is kept positive.
    if (result / modulus < 0) result += modulus;
    return result;
}

vm.runtime._primitives.operator_round = function (args, util) {
    return Math.round(Cast.toNumber(args.NUM));
}

vm.runtime._primitives.operator_mathop = function (args, util) {
    const operator = Cast.toString(args.OPERATOR).toLowerCase();
    const n = Cast.toNumber(args.NUM);
    switch (operator) {
    case 'abs': return Math.abs(n);
    case 'floor': return Math.floor(n);
    case 'ceiling': return Math.ceil(n);
    case 'sqrt': return Math.sqrt(n);
    case 'sin': return parseFloat(Math.sin((Math.PI * n) / 180).toFixed(10));
    case 'cos': return parseFloat(Math.cos((Math.PI * n) / 180).toFixed(10));
    case 'tan': return MathUtil.tan(n);
    case 'asin': return (Math.asin(n) * 180) / Math.PI;
    case 'acos': return (Math.acos(n) * 180) / Math.PI;
    case 'atan': return (Math.atan(n) * 180) / Math.PI;
    case 'ln': return Math.log(n);
    case 'log': return Math.log(n) / Math.LN10;
    case 'e ^': return Math.exp(n);
    case '10 ^': return Math.pow(10, n);
    }
    return 0;
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
let newBlockDOM_setinstrumentto = (new DOMParser).parseFromString(NEW_BLOCK_STRING_setinstrumentto, 'text/xml')
let newBlockDOM_changeeffectby = (new DOMParser).parseFromString(NEW_BLOCK_STRING_changeeffectby, 'text/xml')
let newBlockDOM_seteffectto = (new DOMParser).parseFromString(NEW_BLOCK_STRING_seteffectto, 'text/xml')
let newBlockDOM_cleareffects = (new DOMParser).parseFromString(NEW_BLOCK_STRING_cleareffects, 'text/xml')
let newBlockDOM_changevolumeby = (new DOMParser).parseFromString(NEW_BLOCK_STRING_changevolumeby, 'text/xml')
let newBlockDOM_setvolumeto = (new DOMParser).parseFromString(NEW_BLOCK_STRING_setvolumeto, 'text/xml')
let newBlockDOM_volume = (new DOMParser).parseFromString(NEW_BLOCK_STRING_volume, 'text/xml')
let newBlockDOM_changetempoby = (new DOMParser).parseFromString(NEW_BLOCK_STRING_changetempoby, 'text/xml')
let newBlockDOM_settempotobpm = (new DOMParser).parseFromString(NEW_BLOCK_STRING_settempotobpm, 'text/xml')
let newBlockDOM_tempo = (new DOMParser).parseFromString(NEW_BLOCK_STRING_tempo, 'text/xml')
let newBlockDOM_clear = (new DOMParser).parseFromString(NEW_BLOCK_STRING_clear, 'text/xml')
let newBlockDOM_stamp = (new DOMParser).parseFromString(NEW_BLOCK_STRING_stamp, 'text/xml')
let newBlockDOM_pendown = (new DOMParser).parseFromString(NEW_BLOCK_STRING_pendown, 'text/xml')
let newBlockDOM_penup = (new DOMParser).parseFromString(NEW_BLOCK_STRING_penup, 'text/xml')
let newBlockDOM_setpencolortocolor = (new DOMParser).parseFromString(NEW_BLOCK_STRING_setpencolortocolor, 'text/xml')
let newBlockDOM_changepencolorby = (new DOMParser).parseFromString(NEW_BLOCK_STRING_changepencolorby, 'text/xml')
let newBlockDOM_setpencolortonum = (new DOMParser).parseFromString(NEW_BLOCK_STRING_setpencolortonum, 'text/xml')
let newBlockDOM_changepenshadeby = (new DOMParser).parseFromString(NEW_BLOCK_STRING_changepenshadeby, 'text/xml')
let newBlockDOM_setpenshadeto = (new DOMParser).parseFromString(NEW_BLOCK_STRING_setpenshadeto, 'text/xml')
let newBlockDOM_changepensizeby = (new DOMParser).parseFromString(NEW_BLOCK_STRING_changepensizeby, 'text/xml')
let newBlockDOM_setpensizeto = (new DOMParser).parseFromString(NEW_BLOCK_STRING_setpensizeto, 'text/xml')
let newBlockDOM_sphere = (new DOMParser).parseFromString(NEW_BLOCK_STRING_sphere, 'text/xml')
let newBlockDOM_box = (new DOMParser).parseFromString(NEW_BLOCK_STRING_box, 'text/xml')
let newBlockDOM_arc = (new DOMParser).parseFromString(NEW_BLOCK_STRING_arc, 'text/xml')
let newBlockDOM_cylinder = (new DOMParser).parseFromString(NEW_BLOCK_STRING_cylinder, 'text/xml')
let newBlockDOM_wait = (new DOMParser).parseFromString(NEW_BLOCK_STRING_wait, 'text/xml')
let newBlockDOM_repeat = (new DOMParser).parseFromString(NEW_BLOCK_STRING_repeat, 'text/xml')
let newBlockDOM_forever = (new DOMParser).parseFromString(NEW_BLOCK_STRING_forever, 'text/xml')
let newBlockDOM_if = (new DOMParser).parseFromString(NEW_BLOCK_STRING_if, 'text/xml')
let newBlockDOM_if_else = (new DOMParser).parseFromString(NEW_BLOCK_STRING_if_else, 'text/xml')
let newBlockDOM_wait_until = (new DOMParser).parseFromString(NEW_BLOCK_STRING_wait_until, 'text/xml')
let newBlockDOM_repeat_until = (new DOMParser).parseFromString(NEW_BLOCK_STRING_repeat_until, 'text/xml')
let newBlockDOM_stop = (new DOMParser).parseFromString(NEW_BLOCK_STRING_stop, 'text/xml')
let newBlockDOM_start_as_clone = (new DOMParser).parseFromString(NEW_BLOCK_STRING_start_as_clone, 'text/xml')
let newBlockDOM_create_clone_of = (new DOMParser).parseFromString(NEW_BLOCK_STRING_create_clone_of, 'text/xml')
let newBlockDOM_delete_this_clone = (new DOMParser).parseFromString(NEW_BLOCK_STRING_delete_this_clone, 'text/xml')
let newBlockDOM_touchingobject = (new DOMParser).parseFromString(NEW_BLOCK_STRING_touchingobject, 'text/xml')
let newBlockDOM_touchingcolor = (new DOMParser).parseFromString(NEW_BLOCK_STRING_touchingcolor, 'text/xml')
let newBlockDOM_coloristouchingcolor = (new DOMParser).parseFromString(NEW_BLOCK_STRING_coloristouchingcolor, 'text/xml')
let newBlockDOM_distanceto = (new DOMParser).parseFromString(NEW_BLOCK_STRING_distanceto, 'text/xml')
let newBlockDOM_keypressed = (new DOMParser).parseFromString(NEW_BLOCK_STRING_keypressed, 'text/xml')
let newBlockDOM_mousedown = (new DOMParser).parseFromString(NEW_BLOCK_STRING_mousedown, 'text/xml')
let newBlockDOM_mousex = (new DOMParser).parseFromString(NEW_BLOCK_STRING_mousex, 'text/xml')
let newBlockDOM_mousey = (new DOMParser).parseFromString(NEW_BLOCK_STRING_mousey, 'text/xml')
let newBlockDOM_loudness = (new DOMParser).parseFromString(NEW_BLOCK_STRING_loudness, 'text/xml')
let newBlockDOM_timer = (new DOMParser).parseFromString(NEW_BLOCK_STRING_timer, 'text/xml')
let newBlockDOM_resettimer = (new DOMParser).parseFromString(NEW_BLOCK_STRING_resettimer, 'text/xml')
let newBlockDOM_of = (new DOMParser).parseFromString(NEW_BLOCK_STRING_of, 'text/xml')
let newBlockDOM_current = (new DOMParser).parseFromString(NEW_BLOCK_STRING_current, 'text/xml')
let newBlockDOM_dayssince2000 = (new DOMParser).parseFromString(NEW_BLOCK_STRING_dayssince2000, 'text/xml')
let newBlockDOM_add = (new DOMParser).parseFromString(NEW_BLOCK_STRING_add, 'text/xml')
let newBlockDOM_subtract = (new DOMParser).parseFromString(NEW_BLOCK_STRING_subtract, 'text/xml')
let newBlockDOM_multiply = (new DOMParser).parseFromString(NEW_BLOCK_STRING_multiply, 'text/xml')
let newBlockDOM_divide = (new DOMParser).parseFromString(NEW_BLOCK_STRING_divide, 'text/xml')
let newBlockDOM_random = (new DOMParser).parseFromString(NEW_BLOCK_STRING_random, 'text/xml')
let newBlockDOM_lt = (new DOMParser).parseFromString(NEW_BLOCK_STRING_lt, 'text/xml')
let newBlockDOM_equals = (new DOMParser).parseFromString(NEW_BLOCK_STRING_equals, 'text/xml')
let newBlockDOM_gt = (new DOMParser).parseFromString(NEW_BLOCK_STRING_gt, 'text/xml')
let newBlockDOM_and = (new DOMParser).parseFromString(NEW_BLOCK_STRING_and, 'text/xml')
let newBlockDOM_or = (new DOMParser).parseFromString(NEW_BLOCK_STRING_or, 'text/xml')
let newBlockDOM_not = (new DOMParser).parseFromString(NEW_BLOCK_STRING_not, 'text/xml')
let newBlockDOM_join = (new DOMParser).parseFromString(NEW_BLOCK_STRING_join, 'text/xml')
let newBlockDOM_letter_of = (new DOMParser).parseFromString(NEW_BLOCK_STRING_letter_of, 'text/xml')
let newBlockDOM_length = (new DOMParser).parseFromString(NEW_BLOCK_STRING_length, 'text/xml')
let newBlockDOM_mod = (new DOMParser).parseFromString(NEW_BLOCK_STRING_mod, 'text/xml')
let newBlockDOM_round = (new DOMParser).parseFromString(NEW_BLOCK_STRING_round, 'text/xml')
let newBlockDOM_mathop = (new DOMParser).parseFromString(NEW_BLOCK_STRING_mathop, 'text/xml')

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
toolboxDOM.getElementsByName('sound')[0].appendChild(newBlockDOM_setinstrumentto.children[0])
toolboxDOM.getElementsByName('sound')[0].appendChild(newBlockDOM_changeeffectby.children[0])
toolboxDOM.getElementsByName('sound')[0].appendChild(newBlockDOM_seteffectto.children[0])
toolboxDOM.getElementsByName('sound')[0].appendChild(newBlockDOM_cleareffects.children[0])
toolboxDOM.getElementsByName('sound')[0].appendChild(newBlockDOM_changevolumeby.children[0])
toolboxDOM.getElementsByName('sound')[0].appendChild(newBlockDOM_setvolumeto.children[0])
toolboxDOM.getElementsByName('sound')[0].appendChild(newBlockDOM_volume.children[0])
toolboxDOM.getElementsByName('sound')[0].appendChild(newBlockDOM_changetempoby.children[0])
toolboxDOM.getElementsByName('sound')[0].appendChild(newBlockDOM_settempotobpm.children[0])
toolboxDOM.getElementsByName('sound')[0].appendChild(newBlockDOM_tempo.children[0])
toolboxDOM.getElementsByName('pen')[0].appendChild(newBlockDOM_clear.children[0])
toolboxDOM.getElementsByName('pen')[0].appendChild(newBlockDOM_stamp.children[0])
toolboxDOM.getElementsByName('pen')[0].appendChild(newBlockDOM_pendown.children[0])
toolboxDOM.getElementsByName('pen')[0].appendChild(newBlockDOM_penup.children[0])
toolboxDOM.getElementsByName('pen')[0].appendChild(newBlockDOM_setpencolortocolor.children[0])
toolboxDOM.getElementsByName('pen')[0].appendChild(newBlockDOM_changepencolorby.children[0])
toolboxDOM.getElementsByName('pen')[0].appendChild(newBlockDOM_setpencolortonum.children[0])
toolboxDOM.getElementsByName('pen')[0].appendChild(newBlockDOM_changepenshadeby.children[0])
toolboxDOM.getElementsByName('pen')[0].appendChild(newBlockDOM_setpenshadeto.children[0])
toolboxDOM.getElementsByName('pen')[0].appendChild(newBlockDOM_changepensizeby.children[0])
toolboxDOM.getElementsByName('pen')[0].appendChild(newBlockDOM_setpensizeto.children[0])
toolboxDOM.getElementsByName('pen')[0].appendChild(newBlockDOM_sphere.children[0])
toolboxDOM.getElementsByName('pen')[0].appendChild(newBlockDOM_box.children[0])
toolboxDOM.getElementsByName('pen')[0].appendChild(newBlockDOM_arc.children[0])
toolboxDOM.getElementsByName('pen')[0].appendChild(newBlockDOM_cylinder.children[0])
toolboxDOM.getElementsByName('control')[0].appendChild(newBlockDOM_wait.children[0])
toolboxDOM.getElementsByName('control')[0].appendChild(newBlockDOM_repeat.children[0])
toolboxDOM.getElementsByName('control')[0].appendChild(newBlockDOM_forever.children[0])
toolboxDOM.getElementsByName('control')[0].appendChild(newBlockDOM_if.children[0])
toolboxDOM.getElementsByName('control')[0].appendChild(newBlockDOM_if_else.children[0])
toolboxDOM.getElementsByName('control')[0].appendChild(newBlockDOM_wait_until.children[0])
toolboxDOM.getElementsByName('control')[0].appendChild(newBlockDOM_repeat_until.children[0])
toolboxDOM.getElementsByName('control')[0].appendChild(newBlockDOM_stop.children[0])
toolboxDOM.getElementsByName('control')[0].appendChild(newBlockDOM_start_as_clone.children[0])
toolboxDOM.getElementsByName('control')[0].appendChild(newBlockDOM_create_clone_of.children[0])
toolboxDOM.getElementsByName('control')[0].appendChild(newBlockDOM_delete_this_clone.children[0])
toolboxDOM.getElementsByName('sensing')[0].appendChild(newBlockDOM_touchingobject.children[0])
toolboxDOM.getElementsByName('sensing')[0].appendChild(newBlockDOM_touchingcolor.children[0])
toolboxDOM.getElementsByName('sensing')[0].appendChild(newBlockDOM_coloristouchingcolor.children[0])
toolboxDOM.getElementsByName('sensing')[0].appendChild(newBlockDOM_distanceto.children[0])
toolboxDOM.getElementsByName('sensing')[0].appendChild(newBlockDOM_keypressed.children[0])
toolboxDOM.getElementsByName('sensing')[0].appendChild(newBlockDOM_mousedown.children[0])
toolboxDOM.getElementsByName('sensing')[0].appendChild(newBlockDOM_mousex.children[0])
toolboxDOM.getElementsByName('sensing')[0].appendChild(newBlockDOM_mousey.children[0])
toolboxDOM.getElementsByName('sensing')[0].appendChild(newBlockDOM_loudness.children[0])
toolboxDOM.getElementsByName('sensing')[0].appendChild(newBlockDOM_timer.children[0])
toolboxDOM.getElementsByName('sensing')[0].appendChild(newBlockDOM_resettimer.children[0])
toolboxDOM.getElementsByName('sensing')[0].appendChild(newBlockDOM_of.children[0])
toolboxDOM.getElementsByName('sensing')[0].appendChild(newBlockDOM_current.children[0])
toolboxDOM.getElementsByName('sensing')[0].appendChild(newBlockDOM_dayssince2000.children[0])
toolboxDOM.getElementsByName('operator')[0].appendChild(newBlockDOM_add.children[0])
toolboxDOM.getElementsByName('operator')[0].appendChild(newBlockDOM_subtract.children[0])
toolboxDOM.getElementsByName('operator')[0].appendChild(newBlockDOM_multiply.children[0])
toolboxDOM.getElementsByName('operator')[0].appendChild(newBlockDOM_divide.children[0])
toolboxDOM.getElementsByName('operator')[0].appendChild(newBlockDOM_random.children[0])
toolboxDOM.getElementsByName('operator')[0].appendChild(newBlockDOM_lt.children[0])
toolboxDOM.getElementsByName('operator')[0].appendChild(newBlockDOM_equals.children[0])
toolboxDOM.getElementsByName('operator')[0].appendChild(newBlockDOM_gt.children[0])
toolboxDOM.getElementsByName('operator')[0].appendChild(newBlockDOM_and.children[0])
toolboxDOM.getElementsByName('operator')[0].appendChild(newBlockDOM_or.children[0])
toolboxDOM.getElementsByName('operator')[0].appendChild(newBlockDOM_not.children[0])
toolboxDOM.getElementsByName('operator')[0].appendChild(newBlockDOM_join.children[0])
toolboxDOM.getElementsByName('operator')[0].appendChild(newBlockDOM_letter_of.children[0])
toolboxDOM.getElementsByName('operator')[0].appendChild(newBlockDOM_length.children[0])
toolboxDOM.getElementsByName('operator')[0].appendChild(newBlockDOM_mod.children[0])
toolboxDOM.getElementsByName('operator')[0].appendChild(newBlockDOM_round.children[0])
toolboxDOM.getElementsByName('operator')[0].appendChild(newBlockDOM_mathop.children[0])

let toolboxXML = (new XMLSerializer).serializeToString(toolboxDOM)
Blockly.getMainWorkspace().updateToolbox(toolboxXML)