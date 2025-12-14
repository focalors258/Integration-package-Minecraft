


skillList["cataclysm:the_incinerator"] = {
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

                    //tell(5 + entity.age)

                    if (animationTime(entity, 5, 30)) {

                        //   
                        entity.setMainTrace(true);
                    } else {
                        entity.setMainTrace(false);
                    }
                    if (entity.stage == 0) {




                    } else if (entity.stage == 1 && animationTime(entity, 0, 10) && entity.age % 4 == 0) {

                        Client.player.playSound("bettercombat:claymore_swing", 6, Math.random())


                    } else if (entity.stage == 2 && animationTime(entity, 10, 10)) {
                        Client.player.playSound("bettercombat:claymore_slam", 6, 1)
                    } else if (entity.stage == 3 && animationTime(entity, 22, 23)) {


                        screenShaking(3, 3, "sub")

                    } else if (entity.stage == 3 && animationTime(entity, 13, 14)) {

                        Client.player.playSound("bettercombat:anchor_slam", 9, 0)


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
              //  if (t.target && t.target.distanceToEntity(t.player) < 6 && $Config.TRACE_ATT_TARGET_TYPE.get()) {
              //      t.setYRots(getHorizontal(-t.target.x + Client.player.x, -t.target.z + Client.player.z))
              //  }
                
                combatYRot(t)
                
                
                t.setAnimationResource("kubejs:animations/animation_entity/aogu.json")
                t.setMainTraceResource("integration_package_core:textures/animation_entity/trail.png")

                t.setOffsetTrace(false)
                // 
                //  t.setAnimationResource("kubejs:animations/animation_entity/base.json")
                player.setDataInt("cache_skill_0", t.stage)//缓存
                // t.setNextStage(3)
                t.setEndLink(false)
                t.setMTraceR1(0)
                t.setMTraceR2(3)
                t.setMaxTrace(20)
                t.setMaxStage(4);
                t.setEndLink(true)
                t.setMainTrace(true)
                //t.yRot=-40;
                if (t.stage == 0) {
                    t.setAnimation("att1");

                    //  t.setAnimation("dodge1");
                    Client.player.playSound("bettercombat:claymore_swing", 3, 0.4)

                    t.setStageCool(15);//15
                    t.setTime(150);
                    //setData(player, 'double', 'shaking_intensity', 0.2)
                    //setData(player, 'int', 'shaking_time', 10)
                } else if (t.stage == 1) {

                    t.setAnimation("att2");

                    //   t.setAnimation("dodge2");

                    t.setStageCool(20);//20
                    t.setTime(155);
                } else if (t.stage == 2) {
                    t.setAnimation("att3");
                    t.setStageCool(25);//25
                    t.setTime(140);
                } else if (t.stage == 3) {
                    t.setAnimation("att4");
                    t.setStageCool(40);//40
                    t.setTime(160);
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





                    //  tell(entity.animation)
                    if ((entity.animation == "air_att1" && animationTime(entity, 20, 99999) || entity.animation == "air_att2") &&
                        entity.player.blockStateOn.isAir() && entity.stage == 0) {
                        entity.setPlayType(1)
                        entity.setStage(entity.stage + 1)

                        entity.setAnimation("air_att2")
                        entity.setTime(99999)
                    } else if (!entity.player.blockStateOn.isAir() &&
                        entity.animation != "air_att3" &&
                        (entity.animation == "air_att2" || entity.animation == "air_att1")) {//注意   结束动画后tick还有延迟

                        //  tell("nmsl")
                        entity.setStage(entity.stage + 1)
                        entity.setAnimation("air_att3")
                        entity.setTime(120)
                        screenShaking(5, 4, "sub")
                        //entity.setTypeName("")
                        //  tell( Client.player.animationEntity.stage)
                    }

                    return true
                } else if (entity.typeName == "press_skill_1_bang") {

                    //  tell(entity.animation)

                    if (entity.animation == "bang_att2" && animationTime(entity, 14, 14)) {
                        entity.setStage(entity.stage + 1)
                        entity.setAnimation("bang_att1")
                        entity.setTime(120)
                        entity.setMTraceR2(5)
                        entity.setStageCool(20);

                        //screenShaking(5, 4, "sub")
                    }
                    if (entity.player.getWeaponStack().data.getBoolean("aogu_skill_bang") &&
                        entity.animation == "bang_att1" && animationTime(entity, 14, 14)) {

                        entity.setMainTraceResource("kubejs:textures/animation_entity/purple_trail.png")
                        entity.setStageCool(35);
                        entity.setStage(entity.stage + 1)
                        entity.setAnimation("bang_att3")
                        entity.setTime(120)
                        entity.setMTraceR2(5)
                        entity.player.getWeaponStack().data.putBoolean("aogu_skill_bang", false)
                        entity.player.getWeaponStack().updateData()
                    }

                    return true
                }

                return false

            }
            return false

        },
        "animation": t1 => {

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

            t.setMainTraceResource("integration_package_core:textures/animation_entity/trail.png")

            //  tell(643686734)
            if (player.blockStateOn.isAir() && drop) {//下落攻击


                t.setOffsetTrace(false)
                t.setAnimationResource("kubejs:animations/animation_entity/aogu.json")
                t.setTypeName("press_skill_1_air")

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

                t.setAnimationResource("kubejs:animations/animation_entity/aogu.json")
                t.setTypeName("press_skill_1_bang")
                t.setMaxStage(2);
                t.setMainTrace(true)
                if (t.stage == 0) {
                    t.setMTraceR2(3)
                    t.setTime(155);
                    t.setStageCool(20);
                    t.setAnimation("bang_att2");
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
            e.setAnimationResource("kubejs:animations/animation_entity/aogu.json")
            t.setMainTraceResource("kubejs:textures/animation_entity/red_trail.png")
            e.setTypeName("press_skill_2_air")
          //  if (t.target && t.target.distanceToEntity(t.player) < 6 && $Config.TRACE_ATT_TARGET_TYPE.get()) {
          //      t.setYRots(getHorizontal(-t.target.x + Client.player.x, -t.target.z + Client.player.z))
          //  }

            combatYRot(t)
            
            
            t.setMainRender(true)
            t.setEndLink(false)
            t.setMTraceR1(0)
            t.setMTraceR2(3)
            t.setMaxTrace(20)
            t.setMaxStage(4);
            t.setEndLink(false)
            t.setMainTrace(true)
            t.setOffsetTrace(false)
            if (e.stage == 0) {

                t.setAnimation("skill1");
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


                setMoveFOV(3600, 600)

                new $Effect("level", 30, (render, effect) => {
                    if (render.stage !== RenderJSLevelRenderStage.AFTER_ENTITIES) return
                    /**@type {Internal.Render} */
                    let renders = render
                    renders.poseStack().pushPose()

                    //    tell( x+"  "+y+"  "+z)
                    /**@type {Internal.Entity} */
                    let entity = player

                    let t = effect.getTime()


                    let gui = renders.guiGraphics
                    $Render.levelPoseStack(renders.poseStack(), entity)
                    $Render.bindCamera(renders.poseStack())
                    // RenderJSRenderSystem.setShaderColor(5, 5, 5, 5);
                    //  RenderJSRenderSystem.enableColorLogicOp()
                    RenderJSRenderSystem.enableBlendJS()

                    //   Client.font.drawInBatch("534", 0, 0,getColor(255,255,255,255), false, render.poseStack().last().pose(), Client.renderBuffers().bufferSource(), $Font.DisplayMode.NORMAL, 0, 15728880);
                    renders.poseStack().translate(0, 1, 0)
                    let scale = 0.0025 * Math.pow(20 * t, 0.5) / 4.472 + 0.0005
                    renders.poseStack().pushPose()
                    renders.poseStack().scale(0.004, 0.004, 0.004)
                    RenderJSRenderSystem.setShaderColor(3, 3, 3, 3 - 3 * t);
                    gui.blit(
                        "kubejs:textures/animation_entity/aogu/taiyang.png",
                        -512,  // X坐标
                        -512,                  // Y坐标
                        0,            // 纹理UV X
                        0,                // 纹理UV Y
                        1024,             // 宽度
                        1024,                  // 高度
                        1024, 1024);
                    renders.poseStack().popPose()


                    renders.poseStack().scale(scale, scale, scale)
                    gui.blit(
                        "kubejs:textures/animation_entity/aogu/guang1.png",
                        -1024,  // X坐标
                        -1024,                  // Y坐标
                        0,            // 纹理UV X
                        0,                // 纹理UV Y
                        2048,             // 宽度
                        2048,                  // 高度
                        2048, 2048);
                    renders.poseStack().popPose()

                })

                t.setAnimation("skill3");
                t.setStageCool(15);//15
                t.setTime(60);

            } else if (e.stage == 3) {
                getWeaponStack().data.putBoolean('aogu_skill_bang', true)
                getWeaponStack().updateData()
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

            //if (t.target && t.target.distanceToEntity(t.player) < 6) {
            //    t.setYRots(getHorizontal(-t.target.x + Client.player.x, -t.target.z + Client.player.z))
            //} else {
            // t.setYRots(player.yRotO)
            //}
            combatYRot(t)
            if (entity.snow && player) {

                // player.startFallFlying()
                closeGravity(player)

                //entity.setMaxTrace(32)
                if (entity.typeName == "press_skill_2_air") {
                    //tell(entity.stage)
                    if (entity.stage == 0) {
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
                        t.setMTraceR1(-0.1)
                        t.setMTraceR2(0.1)
                        entity.setOffsetTrace(true)
                        t.setOTraceR1(-0.1)
                        t.setOTraceR2(0.1)

                        //  if (animationTime(entity, 2, 2)) //combatMoveX(entity, 0.2)
                        entity.setMainRender(false)
                        entity.setMainTrace(true)
                    } else if (entity.stage == 2) {
                        entity.setOffsetTrace(false)
                        t.setOffsetRender(false)
                        t.setMTraceR1(0)
                        t.setMTraceR2(3)
                        if (animationTime(entity, 0, 8)) combatMoveY(entity, 0.3)
                        entity.setMainRender(false)
                        entity.setMainTrace(false)

                    } else if (entity.stage == 3) {



                        entity.setMainRender(true)


                        if (animationTime(entity, 2, 2)) {

                            entity.setMainTrace(true)



                        } else if (animationTime(entity, 15, 15)) {

                            entity.setMainTrace(false)
                        }
                        if (animationTime(entity, 10, 25)) player.setMove(player.getMove().add(0, -2, 0))

                        if (animationTime(entity, 15, 15)) screenShaking(5, 4, "sub")


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
            e.setAnimationResource("kubejs:animations/animation_entity/aogu.json")
            t.setMainTraceResource("kubejs:textures/animation_entity/red_trail.png")
            e.setTypeName("press_skill_3_move")
            // if (t.target && t.target.distanceToEntity(t.player) < 6) {
            //     t.setYRots(getHorizontal(-t.target.x + Client.player.x, -t.target.z + Client.player.z))
            // }
            
            combatYRot(t)
            
            t.setMainRender(true)
            t.mainTraceList.removeIf(aa => { return true })
            t.setEndLink(false)
            t.setMTraceR1(0)
            t.setMTraceR2(3)
            t.setMaxTrace(20)
            t.setMaxStage(9);
            t.setEndLink(false)
            t.setMainTrace(true)
            //  tell(e.stage)
            //  if()
            banMove()

            t.setNextStage("press_skill_3_move", t.stage + 1, 500)//设置在技能持续时间结束后删除阶段保存
            //  tell(t.maxTrace)
            if (e.stage == 0) {
                addStageCool(120)
                let s = new $Storyboard(30, true)
                s.startPos = new $Vector3f(-3, 1, 0)
                s.setXMove((t) => { return Math.pow(16 * t, 0.5) / 4 })
                t.addStoryboard(s)
                s.setXRot(-15)
                t.setYRots(player.yRotO + 180)
                t.setAnimation("end_skill1");
                t.setStageCool(80);//15
                t.setTime(500);
            } else if (e.stage == 1) {

                t.setYRots(player.yRotO)
                t.setAnimation("end_skill_att1");
                t.setStageCool(10);//15
                t.setTime(500);
            } else if (e.stage == 2) {

                t.setAnimation("end_skill_att2");
                t.setStageCool(10);//15
                t.setTime(500);
            } else if (e.stage == 3) {

                t.setAnimation("end_skill_att1");
                t.setStageCool(10);//15
                t.setTime(500);
            } else if (e.stage == 4) {

                t.setAnimation("end_skill_att2");
                t.setStageCool(10);//15
                t.setTime(500);
            } else if (e.stage == 5) {

                t.setAnimation("end_skill_att1");
                t.setStageCool(10);//15
                t.setTime(500);
            } else if (e.stage == 6) {

                t.setAnimation("end_skill_att2");
                t.setStageCool(10);//15
                t.setTime(500);
            } else if (e.stage == 7) {

                t.setAnimation("end_skill_att1");
                t.setStageCool(10);//15
                t.setTime(500);
            } else if (e.stage == 8) {

                let s = new $Storyboard(60, true)
                s.reviseSpeed = 0.1
                s.reviseType = 1
                s.startPos = new $Vector3f(-1.4, 1, 0)
                s.setXMove((t) => {
                    if (t < 0.4) {
                        return -Math.pow(t * 40, 0.5) / 2

                    }
                    return -2 
                })
                s.setZMove((t) => {
                    // tell(t)
                    if (t > 0.6) return -2
                    return 0
                    //  if (t > 0.3) {
                    //      return -0.6
                    //  }
                    //  return 0
                })

                addStageCool(120)
                t.setYRots(player.yRotO + 180)
                t.addStoryboard(s)
                t.setMTraceR2(6)
                t.setMaxTrace(80)
                t.setAnimation("end_skill2");
                t.setStageCool(120);//15
                t.setTime(120);
                t.setNextStage("press_skill_3_move", 0)
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
                if (entity.typeName == "press_skill_3_move") {
                    // tell(entity.isStageCool() + "64646")

                    //     if (!entity.nextStage.containsKey("press_skill_3_move")) {  }

                    //  tell(getLastSkillTime(player,"cataclysm:the_incinerator","skill2"))

                    //  if (entity.stage == 1) {

                    //      tell(entity.stage)

                    //   entity.setNextStage("press_skill_3_move", entity.stage + 1, getLastSkillTime(player, "cataclysm:the_incinerator", "skill2"))//设置在技能持续时间结束后删除阶段保存
                    //  } else {
                    //        entity.setNextStage("press_skill_3_move", entity.stage, 40)
                    //  }



                    if (entity.isStageCool()) {

                        allowMove()
                    }

                    if (((entity.animation == "end_skill1" ||
                        entity.animation == "end_skill_att2" ||
                        entity.animation == "end_skill_att1" ||
                        entity.animation == "press_skill_3_move"
                    ) &&
                        animationTime(entity, 130, 99999)) ||
                        entity.animation == "end_skill_move" ||
                        entity.animation == "end_skill_pause" ||
                        (isMoving() && entity.isStageCool())) {



                        entity.setPlayType(0)
                        if (player.isMoving()) {
                            t.setAnimation("end_skill_move");

                            let speed = player.getMove()

                            let y = getHorizontal(-100 * speed.x(), -100 * speed.z())
                            //  let yo = t.getDataFloat("yRot_skill")

                            if (Math.abs(speed.x()) > 0 && Math.abs(speed.y()) > 0) {

                                t.setYRots(y)
                            }

                            //t.setTime(999999);
                        } else {
                            t.setEndLink(true)
                            t.setAnimation("end_skill_pause");
                        }
                        player.addDeltaMovement(new $Vec3(-0.2 * player.getMove().x(), 0, -0.2 * player.getMove().z()))
                        closeGravity(player)
                    }

                    //   tell(animationTime(0, 10))

                    if ((entity.animation == "end_skill_att2" ||
                        entity.animation == "end_skill_att1") && animationTime(entity, 0, 5)) {
                        //  tell(46)
                        combatMoveX(entity, 0.08)
                        //   combatMoveZ(entity, 0.02)
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

