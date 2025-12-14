skillList["cataclysm:the_incinerator"] = {
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


                    if (animationTime(entity, 0, 10)) swordSeek(entity, player, 8, 1.5, 8, 8, 0.2, 0.2)//索敌

                    //   let nbt=player.getItemInHand($InteractionHand.MAIN_HAND).getNbt()
                    //  player.setMove(new Vec3(0, 0, 0))
                    // tell(345)



                    if (entity.stage == 0 && animationTime(entity, 5, 5)) {

                        swordAttack(entity, player, 3, 3, 0, 0.3, ReactionTypes.air)



                    } else if (entity.stage == 1 && animationTime(entity, 4, 20) && entity.age % 4 == 0) {

                        swordAttack(entity, player, 3, 1, 0, 0.06, null)


                    } else if (entity.stage == 2 && (animationTime(entity, 7, 7) || animationTime(entity, 17, 17))) {

                        swordAttack(entity, player, 3, 2, 0, 0.2, null)


                    } else if (entity.stage == 3 && animationTime(entity, 22, 22)) {

                        swordAttack(entity, player, 3, 8, 0, 0.6, null)
                        //  screenShaking(3,3,"sub")

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

                    if (entity.stage == 0 && animationTime(entity, 0, 15)) {

                        if (animationTime(entity, 0, 10)) {
                            player.setMove(new Vec3(0, 0, 0))
                        } else {
                            player.setMove(new Vec3(0, -2, 0))
                        }


                        // player.setMove(new Vec3(0, 0, 0))
                    } else if (entity.stage == 1) {

                        player.setMove(new Vec3(0, -2, 0))
                    }
                    if (entity.animation == "air_att3" && animationTime(entity, 1, 1)) {
                        aoeAttack(entity, player, 3, 8, 0, 0.5, null)
                    }
                    return true
                } else if (entity.typeName == "press_skill_1_bang") {
                    if (entity.stage == 0 && animationTime(entity, 2, 2)) {

                        swordSeek(entity, player, 15, 0, 15, 15, 0.5, 2.5)
                        swordAttack(entity, player, 8, 8, 0, 0.5, null)

                    } else if (entity.stage == 1 && animationTime(entity, 2, 2)) {

                        swordSeek(entity, player, 15, 0, 15, 15, 0.5, 2.5)
                        swordAttack(entity, player, 8, 8, 1, 0.5, null)

                    } else if (entity.stage == 2 && (animationTime(entity, 10, 10) || animationTime(entity, 2, 5))) {

                        swordSeek(entity, player, 15, 0, 15, 15, 0.5, 2.5)
                        swordAttack(entity, player, 8, 8, 1, 0.5, ReactionTypes.lightning)

                    }

                    if (entity.stage == 2 && animationTime(entity, 19, 20)) {
                        swordAttack(entity, player, 8, 8, 0, 0.5, ReactionTypes.lightning)
                    }
                    if (entity.stage == 2 && animationTime(entity, 29, 30)) {
                        swordAttack(entity, player, 8, 18, 2, 0.5, ReactionTypes.lightning)
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


                if (entity.stage !== 0 && animationTime(entity, 0, 10)) swordSeek(entity, player, 8, 1.5, 8, 8, 0.2, 0.2)//索敌

                //   let nbt=player.getItemInHand($InteractionHand.MAIN_HAND).getNbt()
                //  player.setMove(new Vec3(0, 0, 0))
                // tell(345)


                if (entity.stage == 0 && animationTime(entity, 10, 10)) {

                    swordAttack(entity, player, 6, 6, 2, 0.3, ReactionTypes.fire)



                } else if (entity.stage == 1 && animationTime(entity, 4, 8) && entity.age % 3 == 0) {

                    swordAttack(entity, player, 6, 3, 1, 0.06, ReactionTypes.fire)


                } else if (entity.stage == 2 && animationTime(entity, 10, 10)) {

                    aoeAttack(entity, player, 6, 12, 1, 0.2, ReactionTypes.fire)


                } else if (entity.stage == 3 && animationTime(entity, 13, 15)) {

                    aoeAttack(entity, player, 6, 8, 1, 0.6, ReactionTypes.fire)
                    //  screenShaking(3,3,"sub")

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


            if (entity.getSnow() && entity.typeName == "press_skill_3_move") {


                if (entity.stage < 8 && entity.stage > 0 && animationTime(entity, 5, 5)) {

                    swordAttack(entity, player, 6, 3, 3, 0.3, ReactionTypes.fire)
                } else if (entity.stage == 8) {
                    if (animationTime(entity, 35, 40)) swordAttack(entity, player, 6, 3, 2, 0.3, ReactionTypes.fire)

                    if (animationTime(entity, 45, 45)) swordAttack(entity, player, 6, 30, 2, 0.3, ReactionTypes.fire)
                }





                return true
            }


            return false



        }


    }









}