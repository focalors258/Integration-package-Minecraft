skillList["lupa"] = {//高级长矛动作
    "right_skill0": {
        "tick": entity => {
            /**@type {Player} */
            let player = entity.player

            //  tell(entity.traceColor[3])

            //tell(Client.player.animationEntity.isStageCool())
            if (entity.getSnow() && entity.typeName == "press_skill_0") {

                if (player.blockStateOn.isAir()) {

                    //   player.stopAnimation(true)
                } else {
                    //  tell(entity.yRotO)
                    //     player.setMove(new Vec3(0, 0, 0))

                    // tell(animationTime(entity, 5, 30))

                    if (entity.stage == 0 && entity.age % 4 == 0 && animationTime(entity, 0, 12)) {

                        Client.player.playSound("bettercombat:claymore_slam", 7 + 2 * Math.random(), 0.5 * Math.random() + 1)

                        mainTraceTime(15)

                    } else if (entity.stage == 1 && animationTime(entity, 4, 4)) {

                        Client.player.playSound("bettercombat:claymore_slam", 9, 1 * Math.random() + 1)

                        mainTraceTime(25)
                    } else if (entity.stage == 2) {


                        if (animationTime(entity, 22, 22)) screenShaking(3, 3, "sub")

                        mainTraceTime(25)

                        if (entity.age % 4 == 0 && animationTime(entity, 0, 12)) Client.player.playSound("bettercombat:claymore_slam", 9, 1 * Math.random() + 1)
                    } else if (entity.stage == 3) {
                        mainTraceTime(25)

                        if (animationTime(entity, 0, 12) && entity.age % 4 == 0) {
                            Client.player.playSound("bettercombat:claymore_slam", 9, 1 * Math.random() + 1)
                        }


                        if (animationTime(entity, 22, 22)) screenShaking(3, 3, "sub")

                    } else if (entity.stage == 4 && entity.age % 4 == 0 && animationTime(entity, 0, 12)) {

                        mainTraceTime(25)
                        Client.player.playSound("bettercombat:claymore_slam", 9, 1 * Math.random() + 1)
                        //screenShaking(3, 3, "sub")
                    } else if (entity.stage == 5 && entity.age % 4 == 0) {
                        mainTraceTime(25)

                        //  screenShaking(3, 3, "sub")

                        if (animationTime(entity, 0, 12)) {
                            mainTraceTime(45)
                            Client.player.playSound("bettercombat:claymore_slam", 9, 1 * Math.random() + 1)
                        }

                        if (animationTime(entity, 18, 22)) Client.player.playSound("aether:item.accessory.equip_ice_pendant", 9, 2 * Math.random() + 1)

                        if (animationTime(entity, 12, 22)) screenShaking(3, 3, "sub")

                        if (animationTime(entity, 28, 32)) screenShaking(5, 5, "sub")
                    }




                    // tell(entity.stage)
                }

                return true

            } else {

                return false
                //  entity.setAnimation("air")

            }

        },
        "animation": t1 => {
            ///**@type {$PlayerAnimationEntity} */
            let t = t1//注意 需在每个动画文件里添加air(默认动作)  不然无法重置动画
            let player = Client.player


            t1.setMainRender(true)
            t.setXRots(0);
            //t.setYRots(player.yRotO);
            //
            // tell(t1.maxStage)
            //  tell(getHorizontal(-t.target.x + Client.player.x, -t.target.z + Client.player.z))
            if (!player.blockStateOn.isAir()) {
                //t.setSnow(true)
                //  tell(t.nextStage+"b")


                t.setTypeName("press_skill_0")
                //tell(t.typeName)
                if (t.target && t.target.distanceToEntity(t.player) < 6 && $Config.TRACE_ATT_TARGET_TYPE.get()) {
                    t.setYRots(getHorizontal(-t.target.x + Client.player.x, -t.target.z + Client.player.z))
                }
                t.setAnimationResource("kubejs:animations/animation_entity/lupa.json")
                //if(weaponList[player.getMainHandItem().id])
                t.setMainTraceResource("kubejs:textures/animation_entity/air_trail.png")

                t.setOffsetTrace(false)
                // 
                //  t.setAnimationResource("kubejs:animations/animation_entity/base.json")
                player.setDataInt("cache_skill_0", t.stage)//缓存
                // t.setNextStage(3)
                t.setEndLink(false)
                t.setMTraceR1(1.2)
                t.setMTraceR2(2.5)
                t.setMaxTrace(20)
                t.setMaxStage(6);
                t.setEndLink(true)
                t.setMainTrace(true)
                //t.yRot=-40;
                if (t.stage == 0) {
                    t.setAnimation("att1");

                    //  t.setAnimation("dodge1");
                    Client.player.playSound("bettercombat:claymore_swing", 3, 4)
                    t.setStageCool(15);//15
                    t.setTime(120);

                } else if (t.stage == 1) {

                    t.setAnimation("att2");
                    t.setStageCool(15);//20
                    t.setTime(125);
                } else if (t.stage == 2) {
                    t.setAnimation("att3");
                    t.setStageCool(25);//25
                    t.setTime(120);
                } else if (t.stage == 3) {
                    t.setAnimation("att4");
                    t.setStageCool(25);//40
                    t.setTime(120);
                } else if (t.stage == 4) {
                    t.setAnimation("att5");
                    t.setStageCool(20);//40
                    t.setTime(120);
                } else if (t.stage == 5) {
                    t.setAnimation("att6");
                    t.setStageCool(40);//40
                    t.setTime(120);
                }

                return true

            } else {

                //  tell('453435dfgfdgdg634')

                //tell(45)
                return false
                //  tell(t.time)
                // t.setSnow(false)
                // t.setTime(0)
            }


        }


    },
    "left_skill0": {
        "tick": entity => {

            if (entity.snow) {
                // tell(entity.animation)
                // 
                //tell(entity.typeName+"7865676")
                //tell(entity.stage  )
                entity.setMainRender(true)
                if (entity.typeName == "press_skill_1_air") {



                    tartCycleEndTick(entity, "air_att1", "air_att2", "air_att3")



                    return true
                } else if (entity.typeName == "press_skill_1_bang") {

                    //  tell(entity.animation)

                    if (entity.animation == "skill7") {
                        combatYRot(entity, 8)
                        if (animationTime(entity, 1, 1)) {
                            //  tell(46)


                            combatMoveX(entity, 5)
                        }
                        if (animationTime(entity, 8, 8)) Client.player.playSound("bettercombat:claymore_slam", 6, 1)


                        //entity.setStage(entity.stage + 1)
                        //entity.setAnimation("bang_att1")
                        //entity.setTime(120)
                        //entity.setMTraceR2(1.5)
                        //entity.setStageCool(20);

                        //screenShaking(5, 4, "sub")
                    }
                    //  if (entity.player.getWeaponStack().data.getBoolean("aogu_skill_bang") &&
                    //      entity.animation == "bang_att1" && animationTime(entity, 14, 14)) {

                    //      entity.setMainTraceResource("kubejs:textures/animation_entity/purple_trail.png")
                    //      entity.setStageCool(35);
                    //      entity.setStage(entity.stage + 1)
                    //      entity.setAnimation("bang_att3")
                    //      entity.setTime(120)
                    //      entity.setMTraceR2(5)
                    //      entity.player.getWeaponStack().data.putBoolean("aogu_skill_bang", false)
                    //      entity.player.getWeaponStack().updateData()
                    //  }

                    return true
                }

                return false

            }
            return false

        },
        "animation": (t1) => {

            ///**@type {$PlayerAnimationEntity} */
            let t = t1//注意 需在每个动画文件里添加air(默认动作)  不然无法重置动画
            let player = Client.player

            //t1.player.stopAnimation(false)

            let bs = player.level.getBlockStates(AABB.of(player.x, player.y - 2, player.z, player.x, player.y, player.z))

            let drop = true

            bs.forEach(state => {
                if (!state.isAir()) {
                    drop = false
                }
            })

            t.setMainTraceResource("kubejs:textures/animation_entity/air_trail.png")

            //  tell(643686734)
            if (player.blockStateOn.isAir() && drop) {//下落攻击


                t.setOffsetTrace(false)
                t.setAnimationResource("kubejs:animations/animation_entity/lupa.json")
                t.setTypeName("press_skill_1_air")
                Client.player.playSound("bettercombat:claymore_slam", 6, 1)
                // t.typeName="press_skill_1_air345"
                t1.setMainRender(true)
                t.setMTraceR1(0)

                // t.setMaxTrace(0)
                t.setMaxStage(3);
                t.setMainTrace(false)
                t.setAnimation("air_att1");
                t.setStageCool(15);//15
                t.setTime(155);

                return true
                //    tell(t.animation)
                // tell(player.level.getBlock(player.x, player.y - 2, player.z).blockState)
            } else if (!player.blockStateOn.isAir()) {//重击

                t.setAnimationResource("kubejs:animations/animation_entity/lupa.json")
                t.setTypeName("press_skill_1_bang")
                t.setMaxStage(2);
                t.setMainTrace(true)
                if (t.stage == 0) {//重复的动画只执行一次
                    t.setMTraceR1(1.2)
                    t.setMTraceR2(2.5)
                    t.setTime(155);
                    t.setStageCool(20);
                    t.setAnimation("skill7");




                }

                return true

            } else {

                return false

                //  t.setMaxStage(0);
                //  t.setSnow(false)
                //  t.setTime(0);
            }


        }



    },
    "skill1": {

        "animation": e => {

            let player = Client.player

            let t = e
            e.setAnimationResource("kubejs:animations/animation_entity/lupa.json")
            t.setMainTraceResource("kubejs:textures/animation_entity/air_trail.png")
            e.setTypeName("press_skill_2_air")
            if (t.target && t.target.distanceToEntity(t.player) < 6 && $Config.TRACE_ATT_TARGET_TYPE.get()) {
                t.setYRots(getHorizontal(-t.target.x + Client.player.x, -t.target.z + Client.player.z))
            }

            t.setMainRender(true)
            t.setEndLink(false)
            t.setMTraceR1(1.2)
            t.setMTraceR2(2.5)
            t.setMaxTrace(20)
            t.setMaxStage(4);
            t.setEndLink(false)
            t.setMainTrace(true)
            t.setOffsetTrace(false)
            if (e.stage == 0) {

                t.setAnimation("skill1");
                t.setStageCool(15);//15
                t.setTime(40);

            } else if (e.stage == 1) {

                t.setAnimation("skill2");
                t.setStageCool(15);//15
                t.setTime(50);

            } else if (e.stage == 2) {

                // let x = 0
                // let y = 0
                // let z = 0
                t.setAnimation("skill3");
                t.setStageCool(15);//15
                t.setTime(60);

            } else if (e.stage == 3) {
                // getWeaponStack().data.putBoolean('aogu_skill_bang', true)
                //getWeaponStack().updateData()
                t.setAnimation("skill4");
                t.setStageCool(15);//15
                t.setTime(60);

            }
            return true
        },
        "tick": entity => {


            //  entity.setOffsetRender(true)

            // entity.setOTraceR1(0)
            //  entity.setOTraceR1(3)



            /**@type {Player} */
            let player = entity.player
            let t = entity

            if (t.target && t.target.distanceToEntity(t.player) < 6) {
                t.setYRots(getHorizontal(-t.target.x + Client.player.x, -t.target.z + Client.player.z))
            }

            if (entity.snow && player) {

                // player.startFallFlying()
                closeGravity(player)

                //entity.setMaxTrace(32)
                if (entity.typeName == "press_skill_2_air") {








                    //tell(entity.stage)
                    if (entity.stage == 0) {

                        if (entity.age % 4 == 0 && animationTime(entity, 0, 12)) Client.player.playSound("bettercombat:claymore_slam", 7 + 2 * Math.random(), 0.5 * Math.random() + 1)
                        entity.setMainRender(true)
                        entity.setMainTrace(true)
                        if (animationTime(entity, 0, 5)) {
                            combatMoveX(entity, -0.004)
                        } else if (animationTime(entity, 10, 15)) {
                            combatMoveX(entity, 0.04)
                        }

                        if (animationTime(entity, 0, 5)) {

                            combatMoveY(entity, 0.3)
                            // player.setMove(player.getMove().add(0, 0.12, 0))
                        }
                    } else if (entity.stage == 1) {
                        if (animationTime(entity, 0, 5)) {
                            combatMoveX(entity, 0.04)
                            combatMoveY(entity, -0.3)
                            // player.setMove(player.getMove().add(0, 0.12, 0))
                        }
                        if (animationTime(entity, 15, 15)) screenShaking(5, 4, "sub")
                    } else if (entity.stage == 2) {
                        entity.setOffsetTrace(false)


                        if (animationTime(entity, 0, 8)) {
                            combatMoveX(entity, 0.04)

                            combatMoveY(entity, 0.3)
                        }

                    } else if (entity.stage == 3) {

                        entity.setMainRender(true)

                        if (animationTime(entity, 2, 2)) {
                            combatMoveX(entity, 0.04)
                            entity.setMainTrace(true)

                        } else if (animationTime(entity, 15, 15)) {
                            combatMoveX(entity, 0.04)
                            entity.setMainTrace(false)
                        }
                        if (animationTime(entity, 10, 25)) player.setMove(player.getMove().add(0, -2, 0))

                        if (animationTime(entity, 12, 12)) screenShaking(5, 4, "sub")


                    }






                    return true

                }


                return true

            }

            return true

        }


    },
    "skill2": {

        "animation": e => {

            let player = Client.player

            let t = e
            e.setAnimationResource("kubejs:animations/animation_entity/lupa.json")
            t.setMainTraceResource("kubejs:textures/animation_entity/air_trail.png")
            e.setTypeName("press_skill_3")
            // if (t.target && t.target.distanceToEntity(t.player) < 6) {
            //     t.setYRots(getHorizontal(-t.target.x + Client.player.x, -t.target.z + Client.player.z))
            // }
            t.setMainRender(true)
            t.mainTraceList.removeIf(aa => { return true })
            t.setEndLink(false)
            t.setMTraceR1(1.2)
            t.setMTraceR2(2.5)
            t.setMaxTrace(20)
            t.setMaxStage(1);
            t.setEndLink(false)
            t.setMainTrace(true)
            //  tell(e.stage)
            //  if()
            //  banMove()

            //  t.setNextStage("press_skill_3", t.stage + 1, 80)//设置在技能持续时间结束后删除阶段保存
            //  tell(t.maxTrace)
            if (e.stage == 0) {
                // addStageCool(120)

                t.setAnimation("skill8");
                t.setStageCool(50);//15
                t.setTime(140);
            }

            return true
        },
        "tick": entity => {


            /**@type {Player} */
            let player = entity.player
            let t = entity

            if (entity.snow && player) {
                if (entity.getStoryboard()) {

                    let s = entity.getStoryboard()


                    // tell(entity.getStoryboard().getX())
                    //  tell(Client.gameRenderer.getMainCamera().getPosition())
                    // tell(s.getMovePosition())
                    //  tell(s.x.apply(s.getTime()))

                    //    tell(entity.getStoryboard().x)
                }

                // player.startFallFlying()
                //  closeGravity(player)
                //entity.setMaxTrace(32)
                if (entity.typeName == "press_skill_3") {
                    if (entity.age % 4 == 0 && animationTime(entity, 0, 12)) Client.player.playSound("bettercombat:claymore_slam", 9, 1 * Math.random() + 1)

                    if (animationTime(entity, 50, 995)) {



                        if (animationTime(entity, 50, 50)) screenShaking(5, 4, "sub")
                        //  entity.setMainRender(false)
                        entity.setMainTrace(false)
                    }

                    //tell(entity.stage)


                    return true

                }


                return true

            }



            return true



        }








    }













}