StartupEvents.registry('entity_type', event => {

    event.create('gravity_circle', "entityjs:geckolib_projectile")
        // .immuneTo()//可接受的方块
        //.canSpawnFarFromPlayer(true)
        //.clientTrackingRange(20)//实体追踪范围
        .setRenderType("translucent")//实体呈现类型

        .sized(1, 1)//碰撞箱大小
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
        .addAnimationController('exampleController', 1, event => {//动画控制

            //  event.thenLoop('animation.model.rotate');

            event.thenLoop('animation.model.move');

            // event.thenPlayAndHold('');
            return true;
        })
        .tick(entity => {//注意 非活实体双端并未同步坐标

            if (entity.age > 600) {
                entity.remove("discarded")
            }

            entity.deltaMovement = new Vec3(0, 0, 0)




            let att = entity.getDataDouble("att")

            if (!entity.server) return


            let target = entity.level.getEntitiesWithin(AABB.of(
                entity.x - 2, entity.y - 2, entity.z - 2,
                entity.x + 2, entity.y + 2, entity.z + 2)).filter(entity => {
                    return entity.isLiving()
                })
            
            target.forEach(entity => {
                /**@type {Internal.LivingEntity} */
                let target=entity
                
                if (target && !target.getEffect("kubejs:gravity_cold")) {

                    target.addEffect(new $potion('kubejs:gravity_cold', 3, 0, false, false))

                    if (target instanceof $Player) {


                        // tell(target.getMove())
                        //
                        // tell(att)

                        target.setMove(target.getMove().scale(att))

                    } else {

                        let x = target.deltaMovement.x()
                        let y = target.deltaMovement.y()
                        let z = target.deltaMovement.z()

                        target.deltaMovement = new Vec3(x * att, y * att, z * att)

                    }
                }

            })
        })






})