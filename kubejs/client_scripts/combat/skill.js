let more_skill = () => {

  if (more_skill_data.time > 0) {

    // tell(skill_1.time)

    if (more_skill_data.use == "ender_eye") {

      sendEnder_eyeMove()

    }



  }




}




let tartCycleEndTick = (entity, tart, Cycle, End) => {

  let player = entity.player
  if ((entity.animation == tart && animationTime(entity, 20, 99999) || entity.animation == Cycle) &&
    entity.player.blockStateOn.isAir() && entity.stage == 0) {
    entity.setPlayType(1)
    entity.setStage(entity.stage + 1)

    entity.setAnimation(Cycle)
    entity.setTime(99999)
  } else if (!entity.player.blockStateOn.isAir() &&
    entity.animation != End &&
    (entity.animation == Cycle || entity.animation == tart)) {//注意   结束动画后tick还有延迟

    //  tell("nmsl")
    Client.player.playSound("bettercombat:anchor_slam", 6, 0.001)


    entity.setStage(entity.stage + 1)
    entity.setAnimation(End)
    entity.setTime(120)
    screenShaking(5, 4, "sub")
    //entity.setTypeName("")
    //  tell( Client.player.animationEntity.stage)
  }

  if (entity.stage == 0 && animationTime(entity, 0, 15)) {

    if (animationTime(entity, 0, 10)) {
      player.setMove(new Vec3(0, 0, 0))
    } else {
      player.setMove(new Vec3(0, -2, 0))
    }

  } else if (entity.stage == 1) {

    player.setMove(new Vec3(0, -2, 0))
  }


}



let MaxSkill = 5



//priority:10845630
let skillList = {}




let more_skill_data = {
  // /**@type {Internal.KeyMapping}*/ key: keybind.skill_1,
  use: "",
  time: 0,
  data: {}
}//功能键


let mainTraceTime = (tiem) => {

let entity=Client.player.animationEntity
  
  if (animationTime(entity, 0, tiem)) {
    entity.setMainTrace(true);
  } else {
    entity.mainTraceList.removeIf(aa => { return true });
    entity.setMainTrace(false);
  }

}

let weaponListAnimation = 0


let press_skill_right = (weapon, event) => {



  if (!(skillList[weapon] && skillList[weapon]["right_skill0"])) {
    //tell(34)
    if (weaponList[weapon] && weaponList[weapon]["skill0"]
    ) {



      weapon = weaponList[weapon]["skill0"]["animation"]

    //  tell(weapon)

    }
  }



  //  tell(weaponList[weapon]["skill0"]["animation"])




  if (skillList[weapon] && skillList[weapon].right_skill0) {


    //  tell(Client.player.animationEntity.isStageCool())
    if (Client.player.animationEntity.isStageCool()) {

      //  tell(45)
      Client.player.sendData("press_right_skill0", { weapon: weapon })


      Client.player.playAnimation(true, skillList[weapon].right_skill0.animation);
      Client.player.mainTick(skillList[weapon].right_skill0.tick)

    }




  }

  //


}

let press_skill_left = (weapon, event) => {

  if (!(skillList[weapon] && skillList[weapon]["left_skill0"])) {
    //tell(34)
    if (weaponList[weapon] && weaponList[weapon]["skill0"]
    ) weapon = weaponList[weapon]["skill0"]["animation"]

  }



  if (skillList[weapon] && skillList[weapon].left_skill0) {
    if (Client.player.animationEntity.isStageCool()) {
      Client.player.sendData("press_left_skill0", { weapon: weapon })

      Client.player.playAnimation(true, skillList[weapon].left_skill0.animation);
      Client.player.mainTick(skillList[weapon].left_skill0.tick)
    }




  }

  //Client.player.sendData("press_skill_1", { weapon: weapon })


  // tell(  Client.player.animationEntity.stageCool)

}

let skill_end = () => {

  //Client.player.getAnimationEntity().setTypeName(null)
  Client.player.mainTick((t) => { return true })
  Client.player.sendData("press_skill_end", {})
  Client.player.stopAnimation(false)
  Client.player.animationEntity.setStageCool(0)



  allowMove()
}


let allowMove = () => {

  left = true
  right = true
  down = true
  up = true
}

let banMove = () => {

  left = false
  right = false
  down = false
  up = false

}
//是否加速取消后摇
let isCancelPostDelay = (key) => {

  let key1 = Client.options

  return key1.keyJump.getKey().getValue() == key ||
    key == key1.keyShift.getKey().getValue() ||
    key == key1.keySprint.getKey().getValue()

}

let isMove = (key) => {

  let key1 = Client.options

  return key == key1.keyLeft.getKey().getValue() ||
    key == key1.keyRight.getKey().getValue() ||
    key == key1.keyDown.getKey().getValue() ||
    key == key1.keyUp.getKey().getValue()

}

let stopMoveAtt = (event, key, MouseCool) => {//停止普通攻击

  if ((Client.player.animationEntity.isEnd())) {

    //if(   event.key == key.keyShift.getKey().getValue() )
    skill_end()

  }

  if (
    (
      (key.keyJump.getKey().getValue() == event.key ||
        event.key == key.keyShift.getKey().getValue() ||
        event.key == key.keySprint.getKey().getValue()
      )
    )
  ) {//直接停止

    skill_end()

  }

}


let stopAtt = (event, key, MouseCool) => {//停止普通攻击

  if ((Client.player.animationEntity.isStageCool() || Client.player.animationEntity.isEnd()) && (Date.now() / 50) > MouseCool) {

    //if(   event.key == key.keyShift.getKey().getValue() )
    skill_end()

  } else {

    // key.keyLeft.setDown(false)
    // key.keyRight.setDown(false)
    // key.keyDown.setDown(false)
    // key.keyUp.setDown(false)


    left = false
    right = false
    down = false
    up = false
  }

  if (
    (
      (key.keyJump.getKey().getValue() == event.key ||
        event.key == key.keyShift.getKey().getValue() ||
        event.key == key.keySprint.getKey().getValue()
      )
    )
  ) {//直接停止

    skill_end()

  }

}

let isMoving = () => {

  let op = Client.options

  return op.keyUp.isDown() ||
    op.keyDown.isDown() ||
    op.keyLeft.isDown() ||
    op.keyRight.isDown()





}
let stopAirAtt = (event, key, MouseCool) => {//停止空中攻击



  if (key.keyJump.getKey().getValue() == event.key ||
    event.key == key.keyShift.getKey().getValue() ||
    event.key == key.keySprint.getKey().getValue() ||
    !Client.player.blockStateOn.isAir() &&
    (
      //  key.keyJump.getKey().getValue() == event.key ||

      (

        event.key == key.keyLeft.getKey().getValue() ||
        event.key == key.keyRight.getKey().getValue() ||
        event.key == key.keyDown.getKey().getValue() ||
        event.key == key.keyUp.getKey().getValue() ||
        event.key == key.keyAttack.getKey().getValue()

      )
    )
  ) {//直接停止

    skill_end()
  } else {

    let input = Client.player.input

    left = false
    right = false
    down = false
    up = false




    //key.keyLeft.setDown(false)
    //key.keyRight.setDown(false)
    //key.keyDown.setDown(false)
    //key.keyUp.setDown(false)
    if (event.key == key.keyAttack.getKey().getValue()) event.setCanceled(true)


  }





}
let combatMoveY = (entity, speed, isAdd) => {
  let player
  if (entity instanceof $Player) {

    player = entity

  } else {
    player = entity.player
  }

  //player.setMove(player.getMove().add(0, speed1, 0))
  let move = player.getMove()

  if (isAdd) {
    player.setMove(player.getMove().add(speed))
  } else {

    player.setMove(new $Vec3(move.x(), speed, move.z()))
  }
  //tell(player.getMove())

}



let combatMoveZ = (entity, speed1, isAdd, r) => {

  let player
  if (entity instanceof $Player) {

    player = entity

  } else {
    player = entity.player
  }
  let r1 = r ? r : 225

  let speed
  if (entity.target && !entity.target.isRemoved() && player.distanceToEntitySqr(entity.target) < r1) {

    speed = new $Vec3(speed1 * (-player.z + entity.target.z), 0, speed1 * (-player.x + entity.target.x))

  } else {
    // speed = new $Vec3(Math.sin(player.yRotO / 180 * PI), 0, Math.cos(player.yRotO / 180 * PI))
    speed = new $Vec3(Math.cos((player.yRotO + 90) / 180 * PI), 0, Math.sin((player.yRotO + 90) / 180 * PI))

  }


  speed = speed.normalize()

  speed = speed.scale(0.2 + Math.abs(speed1))

  if (isAdd) {
    player.setMove(player.getMove().add(speed))
  } else {

    player.setMove(speed)
  }
  //player.setMove(player.getMove().add(speed)) 


}


let combatMoveX = (entity, speed1, isAdd, r) => {
  let player
  if (entity instanceof $Player) {

    player = entity

  } else {
    player = entity.player
  }

  let r1 = r ? r : 225

  let speed

  let xx = 0

  let zz = 0


  if (entity.target && !entity.target.isRemoved() && player.distanceToEntitySqr(entity.target) < r1) {
    xx = -player.x + entity.target.x
    zz = -player.z + entity.target.z
    speed = new $Vec3(speed1 * (xx), 0, speed1 * (zz))




  } else {
    xx = Math.sin(player.yRotO / 180 * PI)
    zz = Math.cos(player.yRotO / 180 * PI)
    speed = new $Vec3(Math.cos((player.yRotO + 90) / 180 * PI), 0, Math.sin((player.yRotO + 90) / 180 * PI))

  }

  // if (speed.length() > 0.2) { }
  //  tell(speed)
  speed = speed.normalize()
  // tell(speed)
  speed = speed.scale(0.2 + Math.abs(speed1))
  //   tell(speed)

  //tell(speed.length())
  // tell(speed)

  // if (entity.target && player.distanceToEntitySqr(entity.target) < 0.5 && speed1 > 0) return//接近目标时停止移动

  // tell(  player.getMove())
  if (isAdd) {

    //  tell('v2')

    player.setMove(player.getMove().add(speed))
  } else {
    //tell(isAdd)
    let oSpeed = player.getMove()

    let y = Math.acos(xx / Math.sqrt(xx * xx + zz * zz))

    let v1 = oSpeed.yRot(y)

    let v2 = new $Vec3(0, 0, v1.z()).yRot(-y)

    player.setMove(new $Vec3(0, player.getMove().y(), 0).add(v2).add(speed))
  }

}



let combatYRot = (t, r) => {

  if (!r) r = 6


  if (t.target && t.target.distanceToEntity(t.player) < r) {
    t.setYRots(getHorizontal(-t.target.x + Client.player.x, -t.target.z + Client.player.z))
  } else {
    t.setYRots(t.player.yRotO)
  }


}


let animationTime = (entity, stack, end) => {


  return entity.timeEnd <= ((entity.time - stack) + entity.age) && entity.timeEnd >= ((entity.time - end) + entity.age)
}