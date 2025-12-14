//效果等级过大退出后会重置为1


//let e = null

StartupEvents.registry('entity_type', event => {

    event.create('ender_gravity', "entityjs:geckolib_projectile")
        // .immuneTo()//可接受的方块
        //.canSpawnFarFromPlayer(true)
        //.clientTrackingRange(20)//实体追踪范围
        .mobCategory('misc')//实体分类
        .setRenderType("translucent")//实体呈现类型
        .sized(1, 0.5)//碰撞箱大小
        .modelSize(1, 1)//模型比例
        .updateInterval(1)//tick更新速率
        .repositionEntityAfterLoad(true)//加载后重新定位
        .isPushable(false)//是否可移动
        .fireImmune(true)//是否免疫火
        .saves(true)//应序列化其数据
        .setSummonable(true)//是否可召唤
        // .setSwimSound("minecraft:entity.generic.swim")//游泳声音
        //.setSwimSplashSound("minecraft:entity.generic.splash")//游泳飞溅声音

        .mobCategory('projectile')


        .addAnimationController('exampleController', 1, event => {//动画控制  返回的实体为客户端实体

            let entity = event.entity

            if (entity.age < 5 || entity.getRootData().getInt('att_time') > 15) {//应修改默认动画

                event.thenLoop('animation.model.out')

            } else if (entity.getRootData().getInt('att_time') < 15 && entity.getRootData().getInt('att_time') > 0) {//会攻击

                event.thenLoop('animation.model.att')

            } else {//不会攻击
                event.thenLoop('animation.model.move')

            }
            /*
                        let entitys = entity.level.getEntitiesWithin(AABB.of(entity.x-0.1, entity.y-0.1, entity.z-0.1, entity.x+0.1, entity.y+0.1, entity.z+0.1))
            
                        let i = 0
            
                        for (; entitys[i]; i++) {
            
                            if (entitys[i].type == 'kubejs:ender_gravity') break
            
                        }
                        console.log(entitys[i])
            
                        if (entitys[i]) {
            
                            console.log(getIntData(entitys[i], 'att') + '   456433464767434')
            
                          
                        }
            */

            /*
                        if (!e) return
            
                        if (e.getRootData().contains('att')) {
                            event.thenLoop('animation.model.att')
            
                          // console.log('att')
                        } else {
            
                            // console.log('move')
                            event.thenLoop('animation.model.move')
                        }
                            */
            //event.thenLoop('rotate');
            //console.log(getIntData(e, 'att') + '   456433464767434')
            // event.thenPlayAndHold('');

            return true;
        })
        .scaleModelForRender(context => {//模型修改
            // Define logic to render the entity without changing core logic such as hitbox rendering
            let { entity, widthScale, heightScale, poseStack, model, isReRender, partialTick, packedLight, packedOverlay } = context
            //实体、宽度比例、高度比例、姿态堆栈、模型、重新渲染、部分刻度、打包光、打包场景
            if (entity.age < 5) {//隐藏生成时
                poseStack.scale(0, 0, 0)
            }
        })
        .tick(entity => {//每个tick会同时返回实体在客户端和服务端的对象!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            //有必要时应该拆分客户端和服务端对象
            /*
                      使用的getRootData() 需统一
                      
                      gravity_height 抬升高度
                      time 存在时间
                      att 攻击伤害
                      att_timr 攻击时机
                      goal 目标阵营(真 玩家    假 怪物) 
                      
                      */


            //console.log(entity+'++'+areData(entity, 'att'))
            // console.log(entity + '  ' + entity.y)

            // if (!(entity.server )) return
            if (!entity.getRootData().contains("goal")) {//是否为玩家阵营
                entity.getRootData().putBoolean('goal', true)
            }

            if (!areData(entity, 'att_time') && areData(entity, 'att')) {//攻击时机初始化(有攻击力属性时)  att为从服务端获取  此处补给客户端


                setIntData(entity, 'att_time', 30)//当返回对象为客户端时 由客户端事件给与的att使att_time得以附给客户端对象 动画控制器则可以检测到att_time

                //console.log(entity.server.players+'  '+entity.server)//注意 双线tick中 位于客户端的无法获取服务端玩家

                if (entity.server && entity.server.players) {//排除客户端实体
                    //获取客户端玩家
                    entity.server.players.sendData('ender_gravity', {//给所有玩家客户端的实体添加仅做标签判定的nbt(传入的为服务端)
                        entity: entity.getId(),
                        name: 'att'//做判定
                        //
                    })
                }
            }
            //console.log(areData(entity, 'att_time'))

            entity.deltaMovement = new Vec3(0, 0, 0)//固定位置 客户端也需设置 不然位置会变化

            let height = 0
            if (entity.getRootData().contains("gravity_height")) {//重力抬升高度
                height = entity.getRootData().getInt('gravity_height')
            }
            // entity.deltaMovement = new Vec3(0, 0, 0)

            let attTime = 0
            if (entity.getRootData().contains('att_time') && entity.getRootData().contains('att')) {//areData(entity, 'att_time') && areData(entity, 'att')

                attTime = entity.getRootData().getInt('att_time') - 1//攻击时机   启动事件的nbt标签方法可控制客户端事件中的实体nbt标签?
                if (attTime >= 0) entity.getRootData().putInt('att_time', attTime)
            }
            //  setIntData(entity, 'att_time', attTime)
            //  entity.getRootData().remove('att_time')
            // console.log(getIntData(entity, 'att_time') + '  ' + getIntData(entity, 'att'))//getIntData(entity, 'att_time')

            entity.level.getEntitiesWithin(AABB.of(entity.x - 2.5, entity.y - 0.5, entity.z - 2.5, entity.x + 2.5, entity.y + 1, entity.z + 2.5))
                .forEach(entitys => {

                    if ((entitys != entity) && entitys.isLiving()) {


                        if (entity.getRootData().contains('att_time') && entity.getRootData().contains('att') && attTime > 0) {

                            if (attTime == 15) {//此时攻击  //console.log('cnm')

                                entity.level.getEntitiesWithin(AABB.of(entity.x - 10, entity.y - 10, entity.z - 10, entity.x + 10, entity.y + 10, entity.z + 10))
                                    .forEach(entitys => {

                                        if (entitys.isPlayer()) {//屏幕振动
                                            //entitys.setAttributeBaseValue('kubejs:shaking_intensity', 1.3 + 0.01 * Math.random())//设置攻击振动
                                            //entitys.setAttributeBaseValue('kubejs:screen_shaking', 15 + 0.1 * Math.random())
                                            ScreenJitter(entitys, 1.3, 15)

                                            entitys.sendData('ender_gravity', {//给所有玩家客户端的实体添加仅做标签判定的nbt
                                                entity: entity.getId(),
                                                name: 'sound'//播放攻击声音
                                                //
                                            })


                                            //Client.player.playSound('iceandfire:dragon_flight',40,1000)//音乐
                                        }
                                    })



                                if (getBooleanData(entity, 'goal')) {//攻击非玩家

                                    if (entitys.isLiving() && !entitys.isPlayer()) attack(entity, entitys, ReactionTypes.fire, getIntData(entity, 'att'), 1)
                                    //entitys.attack(getIntData(entity, 'att'))//getIntData(entity, 'att')

                                } else {
                                    if (entitys.isPlayer()) attack(entity, entitys, ReactionTypes.fire, getIntData(entity, 'att'), 1)// entitys.attack(getIntData(entity, 'att'))//
                                }
                            }
                        } else {
                            // entitys.deltaMovement = new Vec3(0, 2, 0)
                            if (entity.age % 4 == 0) {
                                entitys.addEffect(new $potion('kubejs:fall_immune', 5 * (10 + height), 0, false, false))//摔落免疫

                                entitys.addEffect(new $potion('minecraft:jump_boost', 5, Math.min(20,8 + 0.5*height), false, false))
                            }

                            /*
                                                        let x = entity.x - entitys.x  //entity1 被攻击者  entity 实体
                                                        let y = entity.y - entitys.y
                                                        let z = entity.z - entitys.z
                                        
                                                        let distance = Math.hypot(Math.hypot(x, y), z)
                            
                                                        if ((!(entitys.getBlockStateOn().getBlock().getId() == 'minecraft:air'))
                                                            && (entitys.getEffect("minecraft:jump_boost").getAmplifier() == (10 + height))
                                                       && distance>2.5 ) {
                            
                                                            entitys.removeEffect('minecraft:jump_boost')//获取脚底方块  不为空气时清除效果
                                                        }
                            */
                        }
                    }
                })

            let time = 0
            if (entity.getRootData().contains("time")) {//持续时间  可以用age替代

                time = entity.getRootData().getInt('time')
                // entity.getRootData().putInt('time', --time)

                if (entity.age > time) { entity.kill() }
            }

            //  if (entity.age % 100 != 0) return
            // console.log('ticked every 100 ticks')
        })


})