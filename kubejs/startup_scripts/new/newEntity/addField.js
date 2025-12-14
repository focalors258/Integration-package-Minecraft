StartupEvents.registry('entity_type', event => {//注意颜色渲染透明度有限制范围

    event.create('add_field', "entityjs:geckolib_projectile")
        // .immuneTo()//可接受的方块
        //.canSpawnFarFromPlayer(true)
        //.clientTrackingRange(20)//实体追踪范围
        .mobCategory('misc')//实体分类
        .setRenderType("translucent")//实体呈现类型
        .sized(1, 1)//碰撞箱大小
        .modelSize(1, 1)//模型比例
        .updateInterval(3)//tick更新速率
        .repositionEntityAfterLoad(true)//加载后重新定位
        .isPushable(false)//是否可移动
        .fireImmune(true)//是否免疫火
        .saves(true)//应序列化其数据
        .setSummonable(true)//是否可召唤
        // .setSwimSound("minecraft:entity.generic.swim")//游泳声音
        //.setSwimSplashSound("minecraft:entity.generic.splash")//游泳飞溅声音

        .mobCategory('projectile')


//handler: (event: Internal.PaintScreenEventJS) => void
        .addAnimationController('exampleController', 1, event => {//动画控制

            //console.log('是否存在camp   ' + areData(event.entity, 'camp'))

            // event.thenPlayAndHold('animation.model.move')

          
            
            event.thenLoop('animation.model.change')

            // 
            //event.thenLoop('rotate'); // event.thenPlayAndHold('');
            return true;
        })
        .scaleModelForRender(context => {//模型修改
            // Define logic to render the entity without changing core logic such as hitbox rendering
            let { entity, widthScale, heightScale, poseStack, model, isReRender, partialTick, packedLight, packedOverlay } = context
            //实体、宽度比例、高度比例、姿态堆栈、模型、重新渲染、部分刻度、打包光、打包场景
            //poseStack.scale(0.7, 0.7, 0.7)

        })

        .tick(entity1 => {//客户端服务端同时执行

            /**@type {Internal.Entity}*/
            let entity = entity1

            entity.deltaMovement = new Vec3(0, 0, 0)

            if (!entity.getRootData().contains("time")) {//持续时间
                entity.getRootData().putInt('time', 6000)
            }
            if (!entity.getRootData().contains("att")) {//增幅效果 以x/100为单位
                entity.getRootData().putInt('att', 0)
            }
            if (!entity.getRootData().contains("goal")) {//是否为玩家阵营
                entity.getRootData().putBoolean('goal', true)
            }


            if (entity.age % 10 == 0) {


                let players = example(event, entity, 'minecraft:player', 8)

                let att = getData(entity, 'int', 'att')

                if (players && (entity.age % 200 == 0 || entity.age == 10)) players.forEach(player => {
                    player.sendData('add_field', {//发给客户端entity.level.getPlayers()
                        name: 'sound',
                        entity: entity.getId()
                    })
                })

                if (entity.server) {//对于属性修改注意区分服务端客户端
                    if (getData(entity, 'boolean', 'goal')) {

                        let players = example(event, entity, 'minecraft:player', 5)

                        // @ts-ignore
                        entity.level.getPlayers().forEach(/**@param {Internal.LivingEntity} player*/player => {

                            player.removeAttribute('kubejs:crit_rate', entity.stringUuid,)

                            player.removeAttribute('minecraft:generic.movement_speed', entity.stringUuid,)

                            player.removeAttribute('minecraft:generic.attack_damage', entity.stringUuid)

                        })
                        //Client.player.tell('删除')


                        if (players) players.forEach(  /**@param {Internal.LivingEntity} player*/player => {


                            player.modifyAttribute('minecraft:generic.attack_damage', entity.stringUuid, 0.2 + att / 50, 'multiply_base')

                            player.modifyAttribute('kubejs:crit_rate', entity.stringUuid, 0.1 + att / 100, 'addition')

                            player.modifyAttribute('minecraft:generic.movement_speed', entity.stringUuid, 0.02 + att / 500, 'addition')

                        })
                      //  Client.player.tell('添加')

                    } else {


                        entity.level.getEntities().forEach(player => {
                            if (areData(entity, 'load')) {
                                player.removeAttribute('minecraft:generic.attack_damage', entity.stringUuid)
                                player.removeAttribute('minecraft:generic.movement_speed', entity.stringUuid,)
                            }
                        })

                        let entitys = exampleData(event, entity, 'load', 5)//怪物

                        //  let att = getData(entity, 'int', 'att')

                        if (entitys) entitys.forEach(  /**@param {Internal.LivingEntity} player*/player => {


                            player.modifyAttribute('minecraft:generic.attack_damage', entity.stringUuid, 0.2 + att / 50, 'multiply_base')

                            // player.modifyAttribute('kubejs:crit_rate', entity.stringUuid, 0.1 + att / 100, 'addition')

                            player.modifyAttribute('minecraft:generic.movement_speed', entity.stringUuid, 0.02 + att / 500, 'addition')

                        })

                    }
                }

            }




            //time  存在时间
            //beHit_divine受攻击者
            //boss 首领
            //elite 精英怪
            //strong_attack 是否造成真实伤害
















            if (entity.age > getData(entity, 'int', 'time')) {//存在时间大于time删除
                entity.remove('discarded')
            }

        })


})