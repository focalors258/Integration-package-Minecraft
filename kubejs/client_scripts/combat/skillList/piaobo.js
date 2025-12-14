skillList["piaobo"] = {
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

                    if (animationTime(entity, 0, 15)) {

                        //   
                        entity.setMainTrace(true);
                    } else {

                        entity.mainTraceList.removeIf(aa => { return true });
                        entity.setMainTrace(false);
                    }

                    if (entity.stage == 0) {


                    } else if (entity.stage == 1 && animationTime(entity, 4, 4)) {

                        Client.player.playSound("bettercombat:claymore_swing", 6, 4)


                    } else if (entity.stage == 2 && animationTime(entity, 3, 10) && entity.age % 3 == 0) {

                        Client.player.playSound("bettercombat:claymore_swing", 6, 3)
                    } else if (entity.stage == 3 && animationTime(entity, 10, 10)) {

                        Client.player.playSound("bettercombat:claymore_slam", 6, 4)
                        screenShaking(3, 3, "sub")

                        //  screenShaking

                    } else if (entity.stage == 4 && animationTime(entity, 8, 8)) {

                        Client.player.playSound("bettercombat:claymore_slam", 9, 4)

                        screenShaking(3, 3, "sub")
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
                t.setAnimationResource("kubejs:animations/animation_entity/piaobo.json")
                //if(weaponList[player.getMainHandItem().id])
                t.setMainTraceResource("kubejs:textures/animation_entity/air_trail.png")

                t.setOffsetTrace(false)
                // 
                //  t.setAnimationResource("kubejs:animations/animation_entity/base.json")
                player.setDataInt("cache_skill_0", t.stage)//缓存
                // t.setNextStage(3)
                t.setEndLink(false)
                t.setMTraceR1(0.5)
                t.setMTraceR2(2)
                t.setMaxTrace(20)
                t.setMaxStage(5);
                t.setEndLink(true)
                t.setMainTrace(true)
                //t.yRot=-40;
                if (t.stage == 0) {
                    t.setAnimation("att1");

                    //  t.setAnimation("dodge1");
                    Client.player.playSound("bettercombat:claymore_swing", 3, 4)

                    t.setStageCool(15);//15
                    t.setTime(100);

                } else if (t.stage == 1) {

                    t.setAnimation("att2");

                    //   t.setAnimation("dodge2");

                    t.setStageCool(15);//20
                    t.setTime(105);
                } else if (t.stage == 2) {
                    t.setAnimation("att3");
                    t.setStageCool(15);//25
                    t.setTime(100);
                } else if (t.stage == 3) {
                    t.setAnimation("att4.5");
                    t.setStageCool(20);//40
                    t.setTime(100);
                } else if (t.stage == 4) {
                    t.setAnimation("att5");
                    t.setStageCool(20);//40
                    t.setTime(100);
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

                    if (entity.animation == "bang_att1" && animationTime(entity, 8, 8)) {


                        Client.player.playSound("bettercombat:claymore_slam", 6, 1)


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
                t.setAnimationResource("kubejs:animations/animation_entity/piaobo.json")
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

                t.setAnimationResource("kubejs:animations/animation_entity/piaobo.json")
                t.setTypeName("press_skill_1_bang")
                t.setMaxStage(2);
                t.setMainTrace(true)
                if (t.stage == 0) {
                    t.setMTraceR2(1.5)
                    t.setTime(155);
                    t.setStageCool(20);
                    t.setAnimation("bang_att1");
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
            e.setAnimationResource("kubejs:animations/animation_entity/piaobo.json")
            t.setMainTraceResource("kubejs:textures/animation_entity/air_trail.png")
            e.setTypeName("press_skill_2")
            if (t.target && t.target.distanceToEntity(t.player) < 6 && $Config.TRACE_ATT_TARGET_TYPE.get()) {
                t.setYRots(getHorizontal(-t.target.x + Client.player.x, -t.target.z + Client.player.z))
            }

            t.setMainRender(true)
            t.setEndLink(false)
            t.setMTraceR1(0)
            t.setMTraceR2(1.5)
            t.setMaxTrace(20)
            t.setMaxStage(1);
            t.setEndLink(false)
            t.setMainTrace(true)
            t.setOffsetTrace(false)
            if (e.stage == 0) {

                t.setAnimation("skill2.5");
                t.setStageCool(15);//15
                t.setTime(60);

            } else if (e.stage == 1) {

                t.setAnimation("skill2");
                t.setStageCool(15);//15
                t.setTime(60);

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
                if (entity.typeName == "press_skill_2") {
                    //tell(entity.stage)

                    if (animationTime(entity, 20, 995)) {

                     //   entity.setMainRender(false)
                        entity.setMainTrace(false)
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
            e.setAnimationResource("kubejs:animations/animation_entity/piaobo.json")
            t.setMainTraceResource("kubejs:textures/animation_entity/air_trail.png")
            e.setTypeName("press_skill_3")
            // if (t.target && t.target.distanceToEntity(t.player) < 6) {
            //     t.setYRots(getHorizontal(-t.target.x + Client.player.x, -t.target.z + Client.player.z))
            // }
            t.setMainRender(true)
            t.mainTraceList.removeIf(aa => { return true })
            t.setEndLink(false)
            t.setMTraceR1(0)
            t.setMTraceR2(1.5)
            t.setMaxTrace(20)
            t.setMaxStage(2);
            t.setEndLink(false)
            t.setMainTrace(true)
            //  tell(e.stage)
            //  if()
            //  banMove()

             t.setNextStage("press_skill_3", t.stage + 1, 80)//设置在技能持续时间结束后删除阶段保存
            //  tell(t.maxTrace)
            if (e.stage == 0) {
                addStageCool(120)

                t.setAnimation("skill1");
                t.setStageCool(20);//15
                t.setTime(140);
            } else if (e.stage == 1) {
                addStageCool(120)

                t.setAnimation("skill3");
                t.setStageCool(20);//15
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

                    if (animationTime(entity, 30, 995)) {

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
