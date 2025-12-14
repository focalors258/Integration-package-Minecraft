
let leftMouseCool = 0











let left_skill_0_mechanism = (event) => {

  let key = Client.options

  let entity = Client.player.animationEntity

  if (Client.options.keyUse.getKey().getValue() == event.key &&
    !key.keySprint.isDown() &&
    !key.keyJump.isDown() &&
    !key.keyShift.isDown()
  ) {

    let item = Client.player.getItemInHand($InteractionHand.MAIN_HAND)


    leftMouseCool = Date.now() / 50 + 15

    // press_skill_1(item.item.getId(), event)
    
   
    
   if (sameWeaponList[item.id]) {
   
     press_skill_left(sameWeaponList[item.id], event)
    
    } else {
    
     press_skill_left(item.getId(), event)
    
    }

    event.setCanceled(true)
  }




















}