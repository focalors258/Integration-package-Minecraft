
let rightMouseCool = 0

let directionCance = [false, false, false, false]//在方向键被允许按下后更新方向键状态


let right_skill_0_mechanism = (event) => {

  let key = Client.options
  //tell(key.keySprint.isDown())
  if (key.keyAttack.getKey().getValue() == event.key &&
    !key.keySprint.isDown() &&
    !key.keyJump.isDown() &&
    !key.keyShift.isDown()
  ) {



    let item = Client.player.getItemInHand($InteractionHand.MAIN_HAND)

    rightMouseCool = Date.now() / 50 + 25
    //  tell(mouseCool)

    if (sameWeaponList[item.id]) {

      press_skill_right(sameWeaponList[item.id], event)

    } else {

      press_skill_right(item.getId(), event)

    }



    event.setCanceled(true)

  }
  // tell(Client.player.animationEntity.typeName)


  //if (
  //  Client.player.animationEntity.typeName == "press_skill_1_air" && Client.player.animationEntity.stage == 2 &&
  //  (
  //    //  key.keyJump.getKey().getValue() == event.key ||
  //
  //    (key.keyJump.getKey().getValue() == event.key ||
  //      event.key == key.keyShift.getKey().getValue() ||
  //      event.key == key.keySprint.getKey().getValue()
  //    )
  //  )
  //) {//直接停止
  //  Client.player.stopAnimation(true)
  //  Client.player.animationEntity.setSnow(false)
  //  Client.player.mainTick(null)
  // skill_end()
  //  // tell( Client.player.animationEntity.isEnd())
  //}

  //tell( Client.player.animationEntity.typeName)
  // if (
  //   Client.player.animationEntity.typeName == "press_skill_0" &&
  //   (
  //    (
  //      (event.key == key.keyLeft.getKey().getValue() ||
  //        event.key == key.keyRight.getKey().getValue() ||
  //        event.key == key.keyDown.getKey().getValue() ||
  //        event.key == key.keyUp.getKey().getValue()
  //      )
  //    )
  //   )
  //
  // ) { }//攻击冷却后停止

  //  
  /*
      if ((Client.player.animationEntity.isStageCool() || Client.player.animationEntity.isEnd()) && (Date.now() / 50) > rightMouseCool) {
        //
        skill_end()
      } else {
        //if(key.keyLeft.isDown() )directionCance[0] = true 
        //if(key.keyRight.isDown())directionCance[1] =  true
        //if(key.keyDown.isDown() )directionCance[2] = true 
        //if(key.keyUp.isDown()  )directionCance[3] =  true 
        //tell(directionCance[3])
        //  event.setCanceled(true)
        // event.setResetAction(true)
        key.keyLeft.setDown(false)
        key.keyRight.setDown(false)
        key.keyDown.setDown(false)
        key.keyUp.setDown(false)
  
      }
  
  
      if (
        (
          //  key.keyJump.getKey().getValue() == event.key ||
  
          (key.keyJump.getKey().getValue() == event.key ||
            event.key == key.keyShift.getKey().getValue() ||
            event.key == key.keySprint.getKey().getValue()
          )
        )
      ) {//直接停止
        // event.setResetAction(false)
        //Client.player.animationEntity.setSnow(false)
        skill_end()
        // if (directionCance[0]) {
        //   key.keyLeft.setDown(true)
        //   directionCance[0] = false
        // }
        // if (directionCance[1]) {
        //   key.keyRight.setDown(true)
        //   directionCance[1] = false
        // }
        /// key.keyDown.setDown(directionCance[2])
        /// key.keyUp.setDown(directionCance[3])
        // if (directionCance[2]) {
        //   key.keyDown.setDown(true)
        //   directionCance[2] = false
        // }
        // if (directionCance[3]) {
        //   key.keyUp.setDown(true)
        //   directionCance[3] = false
        // }
  
        // key.keyLeft.setDown(true)
        //  key.keyRight.setDown(true)
        //  key.keyDown.setDown(true)
        //  key.keyUp.setDown(true)
  
  
        // tell( Client.player.animationEntity.isEnd())
      }
      */





















}