

let KeyJsEventList = {}

KeyJsEventList.pre = []

let KeyJsEvent = {}
//let open_dan=global.keyBinds.open_dan 

KeyJsEvent.pre = function (event) {
  KeyJsEventList.pre.push(event)
}
/*
左键技能 press_right_skill_0
右键技能 press_left_skill_0
功能键press_skill_5
技能键press_right_skill_1~4
 */

//KeyBindEvents.register(e => {
//
//keybind.keyList.put('open_dan',new $KeyMapping('key.kubejs.open.dan.ui', $KeyConflictContext.IN_GAME, $keyType.KEYSYM, $GLFW.GLFW_KEY_L, 'kubejs.additional.content')
//
//)
//})

let 打开声望界面 = $Keybind.open_dan

let 闪避键 = $CombatRollKeybind.roll

let 重击键 = Client.options.keyUse
let 攻击键 = Client.options.keyAttack
let 功能键 = $Keybind.skill_1
let 技能键1 = $Keybind.skill_2
let 技能键2 = $Keybind.skill_3
let 技能键3 = $Keybind.skill_4
let left = true
let right = true
let down = true
let up = true
let skillKeyList = { skill1: 技能键1, skill2: 技能键2, skill3: 技能键3, skill4: 技能键3, skill5: 技能键3 }




//Client.options.keyAttack.setDown(false)
//tell(keybind.open_dan.getKey().getValue())


//tell(event.getKey())
// event.

KeyJsEvent.pre(event => {

  let key = Client.options

  // tell(key.keyLeft.getKey().getValue() )

  if (isMove(event.key)) {

//tell(34)
    Client.player.sendData("combatMoveData", {
      a: key.keyLeft.isDown(),
      d: key.keyRight.isDown(),
      s: key.keyDown.isDown(),
      w: key.keyUp.isDown(),
     type: $Config.TRACE_ATT_TARGET_TYPE.get()
    })


  }

  if (event.action == 0) return
  if (打开声望界面.getKey().getValue() == event.key) Client.player.sendData('openDan')

  if (功能键.getKey().getValue() == event.key) more_skill()


  //if (skill_2.getKey().getValue() == event.key) press_skill_2()

  let item = Client.player.getItemInHand($InteractionHand.MAIN_HAND)

  //默认这三个键会取消攻击
  //   !key.keySprint.isDown()
  // !key.keyJump.isDown() 
  // !key.keyShift.isDown()

  //let typeName = Client.player.animationEntity.typeName

  let ae = Client.player.animationEntity

  let weapon = Client.player.getWeaponStack(getPlayerWeapon().id)

  
  if(!ae) return
  //tell(up)
  
  if (!Client.player.animationEntity.snow) {
    //tell(Client.player.animationEntity.snow)
    
    allowMove()
  }



  //tell(hurtSilentTime - Client.player.age)

  if (hurtSilentTime - Dates.tickCount< 0) {//沉默时间


    // tell(技能键1.getKey().getDisplayName().getString())

  //  tell(item.hasTag('kubejs:combat_weapon'))
    

    if (item.hasTag('kubejs:combat_weapon')) {


      if (
        key.keyUse.getKey().getValue() == event.key ||
        key.keyAttack.getKey().getValue() == event.key ||
        技能键1.getKey().getValue() == event.key ||
        技能键2.getKey().getValue() == event.key ||
        技能键3.getKey().getValue() == event.key
      ) pushUseCombatClient(Client.player, item.id, item.nbt)//发送使用武器数据

      if (!Client.player.getWeaponList().contains(item.id)) return
      // tell(typeName+"a")
      right_skill_0_mechanism(event)//先后顺序导致在一个攻击状态下时释放其他状态的技能会让动画停止

      left_skill_0_mechanism(event)
      // tell(typeName+"c")

      skill_mechanism(event, weapon, "skill1")
      skill_mechanism(event, weapon, "skill2")
      skill_mechanism(event, weapon, "skill3")
      //tell(typeName+"d")
    }

    if (Client.player.animationEntity.snow) {//处理动画何时停止

      // tell(typeName+"e")

      if (ae.typeName == "press_skill_1_air" ||
        ae.typeName == "press_skill_2_air") {//下落
        //tell(34)
        stopAirAtt(event, key, rightMouseCool)

      } else if (

        ae.typeName == "press_skill_1_bang" ||//重击
        ae.typeName == "press_skill_3" ||
        ae.typeName == "press_skill_2" ||
        ae.typeName == "press_skill_1" ||
        ae.typeName == "press_skill_0"//普通攻击
      ) {

        stopAtt(event, key, leftMouseCool)

      } else if (ae.typeName == "hurt") {


        Client.player.stopAnimation(false)

        allowMove()//受击结束后恢复移动

      } else if (
        ae.typeName == "press_skill_3_move") {

        stopMoveAtt(event, key, leftMouseCool)
      }

    }

    middle_skill_0_mechanism(event)




    // tell(Client.player.getMove().x)
    //  tell(event.scanCode + "   " +
    //    event.action + "   " +
    //    event.modifiers)
  } else {

    event.setCanceled(true)

    banMove()

  }

})



NativeEvents.onEvent('com.integration_package_core.event.Event.KeyClickEvent', event => {

  let item = Client.player.getItemInHand($InteractionHand.MAIN_HAND)
  let key = Client.options
  if (item.hasTag('kubejs:combat_weapon')) {

    if (key.keyAttack.getKey().getValue() == event.key) {


    }

  }

})



//  tell(Client.options.keyAttack.isDown())
//ForgeEvents.onEvent('net.minecraftforge.client.event.InputEvent$MouseButton', e => {})
NativeEvents.onEvent('net.minecraftforge.client.event.InputEvent$Key', event => {//键盘

  if (Client.level == null || Client.screen != null || Client.isPaused()) return
  let newEvent = {}
  newEvent.key = event.getKey()
  newEvent.scanCode = event.getScanCode()
  newEvent.action = event.getAction()
  newEvent.modifiers = event.getModifiers()
  newEvent.setResetAction = {}//resetAction => event.setResetAction(resetAction)
  newEvent.setCanceled = canceled => { } //event.setCanceled(canceled)
  KeyJsEventList.pre.forEach(e => e(newEvent))





})

NativeEvents.onEvent('net.minecraftforge.client.event.InputEvent$MouseButton', event => {//鼠标
  //
  if (Client.level == null || Client.screen != null || Client.isPaused()) return
  //   tell(Client.options.keyAttack.isDown())
  let newEvent = {}
  newEvent.key = event.getButton()
  // newEvent.scanCode = event.getScanCode()
  newEvent.action = event.getAction()
  newEvent.modifiers = event.getModifiers()
  newEvent.setResetAction = resetAction => resetAction
  newEvent.setCanceled = canceled => event.setCanceled(canceled)
  KeyJsEventList.pre.forEach(e => e(newEvent))
  //   if (Client.options.keyAttack.isDown()) {

  //   }
  //
  // Client.options.keyAttack.setDown(false)

  //
  // if (skill_2.getKey().getValue() == event.getButton()) press_skill_2()
  //
  // if (open_dan.getKey().getValue() == event.getButton()) Client.player.sendData('openDan')
  //
  // if (skill_1.getKey().getValue() == event.getButton()) press_skill_1()
})

NativeEvents.onEvent("net.minecraftforge.client.event.RegisterKeyMappingsEvent", e => {

  //keybind.keyList.put("skill_1", new  $KeyMapping('key.kubejs.skill.1', $KeyConflictContext.IN_GAME, $keyType.KEYSYM, $GLFW.GLFW_KEY_L, 'kubejs.additional.content'))





})









