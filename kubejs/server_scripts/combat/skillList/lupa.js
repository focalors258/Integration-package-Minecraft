skillList["lupa"] = {
    "right_skill0": {
        "tick": entity => {

            //    if () {   }
            //   entity.player.stopAnimation()
            //  entity.player.setMove(new Vec3(0, 0, 0))
            /**@type {Player} */
            let player = entity.player

            // tell(entity.stage )

            if (entity.getSnow() && entity.typeName == "press_skill_0") {

                //
                if (player.blockStateOn.isAir()) {

                    //player.stopAnimation(true)
                } else {


                    //  tell(player.getAttributeValue("generic.attack_damage"))
                    
                    let i=Math.floor(Math.random()*8)
                    
                    let type = ReactionTypes.air//ReactionType[i]
                    //tell(type)ReactionTypes.water//
                    
                    
                    
                    
                    
                    if (animationTime(entity, 0, 5)) swordSeek(entity, player, 8, 1.5, 8, 8, 0.2, 0.2)//索敌

                    //   let nbt=player.getItemInHand($InteractionHand.MAIN_HAND).getNbt()
                    //  player.setMove(new Vec3(0, 0, 0))
                    // tell(345)

                    if (entity.stage == 0 && animationTime(entity, 0, 10) && entity.age % 4 == 0) {
                        //tell( entity.age)
                        swordAttack(entity, player, 3, 1, 1, 0.3, type)

                    } else if (entity.stage == 1 && (animationTime(entity, 4, 4) || animationTime(entity, 6, 6))) {

                        swordAttack(entity, player, 3, 2, 1, 0.06, type)

                    } else if (entity.stage == 2) {

                        if (animationTime(entity, 0, 10) && entity.age % 4 == 0) swordAttack(entity, player, 3, 1.2, 1, 0.2, type)

                        if (animationTime(entity, 17, 17)) swordAttack(entity, player, 3, 2, 1, 0.2, type)


                    } else if (entity.stage == 3) {

                        if (animationTime(entity, 19, 19)) {
                            swordAttack(entity, player, 3, 4, 1, 0.6, type)
                        } else if (animationTime(entity, 0, 8) && entity.age % 4 == 0) {

                            swordAttack(entity, player, 3, 1, 1, 0.6, type)

                        }

                    } else if (entity.stage == 4) {
                        if (animationTime(entity, 0, 12) && entity.age % 3 == 0) {
                            swordAttack(entity, player, 3, 1.5, 1, 0.6, type)
                        }

                    } else if (entity.stage == 5) {
                        if (animationTime(entity, 0, 22) && entity.age % 4 == 0) {
                            aoeAttack(entity, player, 5, 1, 0, 0.6, type)
                        } else if (animationTime(entity, 28, 28)) aoeAttack(entity, player, 5, 8, 1, 0.6, type)

                    }
                }


                //  if (entity.age > 5 && entity.age < 25) {
                //      entity.setMainTrace(true);
                //  } else {
                //      entity.setMainTrace(false);
                //  }
                return true
            }


            return false

        }



    },
    "left_skill0": {
        "tick": entity => {

            /**@type {Player} */
            let player = entity.player

            //  tell(entity.maxStage+"cnm")




            if (entity.snow && player) {
                if (entity.typeName == "press_skill_1_air") {

                    //  if (entity.stage == 0  ) {
                    //      
                    //      if (animationTime(entity, 0, 10)) {
                    //       player.setMove(new Vec3(0, 0, 0))
                    //      } else { 
                    //      player.setMove(new Vec3(0, -2, 0))
                    //      }
                    //      
                    //      
                    //  } else if (entity.stage == 1) {

                    //      player.setMove(new Vec3(0, -2, 0))
                    //  }
                    if (entity.animation == "air_att3" && animationTime(entity, 1, 1)) {
                        aoeAttack(entity, player, 3, 4, 0, 0.5, null)
                    }
                    return true
                } else if (entity.typeName == "press_skill_1_bang") {

                    if (animationTime(entity, 2, 2)) swordSeek(entity, player, 15, 0, 15, 15, 0.5, 0.5)

                    if (animationTime(entity, 0, 15) && entity.age % 4 == 0) {


                        swordAttack(entity, player, 3, 4, 0, 0.5, null)

                    }


                    return true


                }

                return false


            }

            return false

        }


    },
    "skill1": {
        "tick": entity => {

            let player = entity.player

            //  if (animationTime(entity, 0, 10)) swordSeek(entity, player, 8, 1.5, 8, 8, 0.2, 0.2)//索敌


            if (entity.getSnow() && entity.typeName == "press_skill_2_air") {

                //


                if (animationTime(entity, 0, 0)) swordSeek(entity, player, 8, 1.5, 8, 8, 0.2, 0.2)//索敌

                //   let nbt=player.getItemInHand($InteractionHand.MAIN_HAND).getNbt()
                //  player.setMove(new Vec3(0, 0, 0))
                // tell(345)


                {


                    //  tell(player.getAttributeValue("generic.attack_damage"))


                    if (animationTime(entity, 0, 5)) swordSeek(entity, player, 8, 1.5, 8, 8, 0.2, 0.2)//索敌

                    //   let nbt=player.getItemInHand($InteractionHand.MAIN_HAND).getNbt()
                    //  player.setMove(new Vec3(0, 0, 0))
                    // tell(345)

                    if (entity.stage == 0 && animationTime(entity, 0, 10) && entity.age % 4 == 0) {
                        //tell( entity.age)
                        swordAttack(entity, player, 3, 1, 0, 0.3, null)

                    } else if (entity.stage == 1) {

                        if (animationTime(entity, 12, 12)) {
                            swordAttack(entity, player, 3, 4, 0, 0.6, null)
                        } else if (animationTime(entity, 0, 8) && entity.age % 4 == 0) {

                            swordAttack(entity, player, 3, 1, 0, 0.6, null)

                        }

                    } else if (entity.stage == 2) {

                        if (animationTime(entity, 0, 10) && entity.age % 4 == 0) swordAttack(entity, player, 3, 1.2, 0, 0.2, null)

                        if (animationTime(entity, 17, 17)) swordAttack(entity, player, 3, 2, 0, 0.2, null)


                    } else if (entity.stage == 3) {

                        if (animationTime(entity, 12, 12)) {
                            swordAttack(entity, player, 3, 4, 0, 0.6, null)
                        } else if (animationTime(entity, 0, 8) && entity.age % 4 == 0) {

                            swordAttack(entity, player, 3, 1, 0, 0.6, null)

                        }

                    }
                }
                //  if (entity.age > 5 && entity.age < 25) {
                //      entity.setMainTrace(true);
                //  } else {
                //      entity.setMainTrace(false);
                //  }
                return true
            }




            return true
        }

        //   return true

    },
    "skill2": {
        "tick": entity => {

            let player = entity.player

            //  if (animationTime(entity, 0, 10)) swordSeek(entity, player, 8, 1.5, 8, 8, 0.2, 0.2)//索敌


            if (entity.getSnow() && entity.typeName == "press_skill_3") {

                if (animationTime(entity, 0, 10) || animationTime(entity, 30, 45)) swordSeek(entity, player, 15, 1.5, 8, 8, 0.2, 0.2)//索敌

                if (animationTime(entity, 45, 45)) {

                    aoeAttack(entity, player, 4, 12, 0, 1.6, null)
                } else if (animationTime(entity, 0, 12) && entity.age % 4 == 0) {

                    swordAttack(entity, player, 3, 2, 0, 0.2, null)

                }





                return true
            }


            return false



        }


    }









}