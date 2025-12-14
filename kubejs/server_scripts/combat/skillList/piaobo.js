skillList["piaobo"] = {
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


                    if (animationTime(entity, 0, 5)) swordSeek(entity, player, 8, 1.5, 8, 8, 0.2, 0.2)//索敌

                    //   let nbt=player.getItemInHand($InteractionHand.MAIN_HAND).getNbt()
                    //  player.setMove(new Vec3(0, 0, 0))
                    // tell(345)

                    if (entity.stage == 0 && animationTime(entity, 5, 5)) {

                        swordAttack(entity, player, 2, 3, 0, 0.3, null)



                    } else if (entity.stage == 1 && animationTime(entity, 4, 4)) {

                        swordAttack(entity, player, 2, 4, 0, 0.06, null)


                    } else if (entity.stage == 2 && animationTime(entity, 0, 10) && entity.age % 4 == 0) {

                        swordAttack(entity, player, 2, 1.2, 0, 0.2, null)


                    } else if (entity.stage == 3) {

                        if (animationTime(entity, 12, 12)) {
                            swordAttack(entity, player, 2, 4, 0, 0.6, null)
                        } else if (animationTime(entity, 0, 6) && entity.age % 4 == 0) {

                            swordAttack(entity, player, 2, 1, 0, 0.6, null)

                        }

                    } else if (entity.stage == 4) {
                        if (animationTime(entity, 8, 12) && entity.age % 3 == 0) {
                            swordAttack(entity, player, 2, 2, 0, 0.6, null)
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
                        aoeAttack(entity, player, 3, 8, 0, 0.5, null)
                    }
                    return true
                } else if (entity.typeName == "press_skill_1_bang") {
                    if (animationTime(entity, 2, 2)) {

                        swordSeek(entity, player, 15, 0, 15, 15, 0.5, 0.5)
                        swordAttack(entity, player, 3, 8, 0, 0.5, null)

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


            if (entity.getSnow() && entity.typeName == "press_skill_2") {

                //


                if (animationTime(entity, 0, 0)) swordSeek(entity, player, 8, 1.5, 8, 8, 0.2, 0.2)//索敌

                //   let nbt=player.getItemInHand($InteractionHand.MAIN_HAND).getNbt()
                //  player.setMove(new Vec3(0, 0, 0))
                // tell(345)


                if (entity.stage == 0 && animationTime(entity, 0, 10) && entity.age % 4 == 0) {

                    swordAttack(entity, player, 2, 3, 2, 0.3, ReactionTypes.air)

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


                if (entity.stage == 0) {
                    if (entity.age % 2 == 0 && animationTime(entity, 0, 5)) swordAttack(entity, player, 4, 3, 3, 0.3, ReactionTypes.air)

                    if (animationTime(entity, 1, 1)) swordSeek(entity, player, 15, 0, 15, 15, 0.5, 2.5)


                } else if (entity.stage == 1) {


                    if (animationTime(entity, 1, 1)) swordSeek(entity, player, 15, 0, 15, 15, 0.5, 12)


                    if (animationTime(entity, 17, 17)) aoeAttack(entity, player, 4, 7, 2, 0.3, ReactionTypes.air)


                    if (animationTime(entity, 1, 7)) {
                        
                        swordSeek(entity, player, 15, 0, 15, 15, 0.5, 0.2)
                        combatMoveY(entity, 0.5)

                    }


                    if (animationTime(entity, 7, 19)) {
                        combatYRot(entity)
                        combatMoveY(entity, -5)
                        swordSeek(entity, player, 15, 0, 15, 15, 0.5, 0.2)
                    }
                    if (animationTime(entity, 20, 30)) combatMoveY(entity, -10)

                }





                return true
            }


            return false



        }


    }









}