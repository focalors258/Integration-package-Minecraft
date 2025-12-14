StartupEvents.registry('entity_type', event => {

    event.create('fairy_bullet', "entityjs:geckolib_projectile")
        // .immuneTo()//可接受的方块
        //.canSpawnFarFromPlayer(true)
        //.clientTrackingRange(20)//实体追踪范围
        .setRenderType("translucent")//实体呈现类型

        .sized(0.2, 0.2)//碰撞箱大小
        .modelSize(3, 3)//模型比例
        .updateInterval(1)//tick更新速率
        .repositionEntityAfterLoad(true)//加载后重新定位
        .isPushable(false)//是否可移动
        .fireImmune(true)//是否免疫火
        .saves(true)//应序列化其数据
        .setSummonable(true)//是否可召唤
        // .setSwimSound("minecraft:entity.generic.swim")//游泳声音
        //.setSwimSplashSound("minecraft:entity.generic.splash")//游泳飞溅声音
        // .dampensVibrations(entity => {

        //     return entity.isNoGravity();//无重力时无振动
        // })
        .mobCategory('projectile')
        .render(e => {

            //      e.poseStack


            //e.poseStack.mulPose($Axis.XN.rotationDegrees(Mth.lerp(Client.partialTick, -e.entity.xRotO, -e.entity.)));
            //e.poseStack.mulPose($Axis.YN.rotationDegrees(Mth.lerp(Client.partialTick, -e.entity.yRotO, -e.entity.getYRots())));








        })



        .addAnimationController('exampleController', 1, event => {//动画控制

            //  event.thenLoop('animation.model.rotate');

            //event.thenLoop('rotate');

            // event.thenPlayAndHold('');
            return true;
        })
        //  .onHitEntity(e => {

        //      //entity.result
        //      //   tell(e.result.entity)
        //      //   tell(e.entity)

        //  })

        .tick(entity => {//注意 非活实体双端并未同步坐标

            if (!entity.getRootData()) return

            if (entity.age > 60) {
                entity.remove("discarded")
            }
            //entity.entityData.set()
            //entity.deltaMovement = new Vec3(0, 0, 0)//向量
            entity.setNoGravity(true)


            let type = entity.getDataString("type")


            if (entity.areData("host") && entity.server) {

                let host = entity.level.getEntity(entity.getDataString("host"))

                let att = entity.getDataDouble("att")
                //  tell(234424)
                let vec3 = entity.deltaMovement
                // tell(23443)
                //   tell(vec3.x)

                //    let d0 = Math.sqrt(vec3.x() * vec3.x() + vec3.z() * vec3.z())
                //tell(6)

                //tell(7)(Mth.atan2(vec3.x(), vec3.z())

                entity.setDataValue("xRot", getVertical(vec3.x(), vec3.y(), vec3.z()))
                //  tell(8)
                entity.setDataValue("yRot", getHorizontal2(vec3.x(), vec3.z()))
                //tell(9)
                let xRot = entity.getDataDouble("xRot")
                //tell(10)
                let yRot = entity.getDataDouble("yRot")
                //tell(11)
                let color = entity.getDataList("color")

                //tell(12)




                playerSend(entity, "fairy_bullet", { xRot: xRot, yRot: yRot, entity: entity.id, color: color, type: type })

                if (entity.areData("target") && host) {
                    let target = hitResult(entity.level, entity, 0.1, entity => {

                        //  tell(target)
                        if (entity.isLiving() && entity != host && !isFairy(entity)

                        ) return true

                        return false
                    })//entity.level.getEntity(entity.getDataString("target"))

                    // tell(target)
                    //  let target1 = $ProjectileUtil.getEntityHitResult(entity.level, entity, entity.position(), entity.position().add(vec3), e => { return true }).getEntity()

                    //  let entityhitresult = entity.findHitEntity(vec32, vec33);

                    if (target) {
                        if (type != "ender") {
                            if (host.isPlayer()) {
                                attack(host, target, type + "_damage", att, 1)
                            } else if (type == "ender_damage") {
                                
                                attack(host, target, "ender_damage", att, 1)

                            } else {
                                attack(host, target, type + "_damage", att, 1)
                            }
                            entity.remove("discarded")

                        } else {//推进

                            target.deltaMovement = vec3.scale(att)

                            //entity.remove("discarded")


                        }
                    }

                }




                //   entity.(AABB.of(entity.x - 3, entity.y - 1, entity.z - 3, entity.x + 3, entity.y + 3, entity.z + 3))
                //entity1.getBoundingBox()




                //   if (type == "fairy") {
                //
                //   }









            }


            //  entity.level.getPlayers().tell('->' + type)
            if (type == "ender" && !entity.server) {

                // entity.level.getPlayers().tell('->' + "5463354")
                let xRot = entity.getDataDouble("xRot")
                //tell(10)
                let yRot = entity.getDataDouble("yRot")

                let color = entity.getDataList("color")



                //  entity.level.getPlayers().tell(color)
                if (color && entity.age % 5 == 0) {

                    let an = Client.particleEngine.createParticle(
                        new $Circle$RingData(xRot * PI / 180, yRot * PI / 180, 20,
                            1, 0.15, 1, 1, 30, false, $Circle$EnumRingBehavior.SHRINK),
                        entity.x, entity.y, entity.z, 0, 0, 0)//粒子
                    let an1 = Client.particleEngine.createParticle(
                        new $Circle$RingData(xRot * PI / 180, (yRot + 180) * PI / 180, 20,
                            1, 0.15, 1, 1, 30, false, $Circle$EnumRingBehavior.SHRINK),
                        entity.x, entity.y, entity.z, 0, 0, 0)//粒子
                }
            }

            //entity.deltaMovement = new Vec3(0, 0, 0)//向量











        })


})