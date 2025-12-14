

//entitys 受击者 entity 本实体
let divineSwordAtt = (health, entitys, entity, percentage, player) => {


    if (health < percentage) {


        entitys.invulnerableTime = 0
        //entity.setCritical(true)

        if (player) {
            entitys.attack(newSource(player, newDamageType('kubejs', 'fire_1')), health * entitys.getMaxHealth())
            //entitys.attack(damageType.MOB_ATTACK(player), entityResistance(entitys) * health * entitys.getMaxHealth())//造成物理伤害
        } else {
            entitys.attack(health * entitys.getMaxHealth())
        }
        //entitys.attack(health * entitys.getMaxHealth())

        entitys.setCrit(true)

        reactionEffectAndEvent(11, entitys, 150, 0, 0, '处决')


    } else {

        //  entitys.attack(getData(entity, 'int', 'att'))
    }

}
//注册有朝向实体流程
//autolevel添加黑名单
//在服务端事件取消伤害
//碰撞箱竖向设置为0
//不可移动



StartupEvents.registry('entity_type', event => {

    event.create('divine_sword', 'entityjs:geckolib_projectile')//entityjs:geckolib_projectile
        // .immuneTo()//可接受的方块
        //.canSpawnFarFromPlayer(true)
        //.clientTrackingRange(20)//实体追踪范围
        .mobCategory('misc')//实体分类
        .setRenderType("translucent")//实体呈现类型
        .sized(1, 0)//碰撞箱大小  注意  宽度不能为0
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



        .addAnimationController('exampleController', 1, event => {//动画控制

            //console.log('是否存在camp   ' + areData(event.entity, 'camp'))
            if (event.entity.age <= 40) {
                event.thenPlayAndHold('animation.model.move')
            } else {
                event.thenLoop('animation.model.stop')

                //event.thenLoop('animation.model.move')


            }
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

            //time  存在时间
            //beHit_divine受攻击者
            //boss 首领
            //elite 精英怪
            //strong_attack 是否造成真实伤害
            //host 主人
            //let a= 



            entity.deltaMovement = new Vec3(0, 0, 0)

            if (entity.age % 5 == 0) {

                if (!entity.getRootData().contains("time")) {
                    entity.getRootData().putInt('time', 6000)
                }
                if (!entity.getRootData().contains("att")) {
                    entity.getRootData().putInt('att', 10)
                }
                if (!entity.getRootData().contains("kill_att")) {
                    entity.getRootData().putInt('kill_att', 1)
                }
                if (!entity.getRootData().contains("strong_attack")) {//是否处决
                    entity.getRootData().putBoolean('strong_attack', false)
                }

                /**@type {Internal.LivingEntity} */
                let player

                if (entity.getRootData().contains("host")) {//获取召唤者

                    player = entity.level.getEntity(entity.getRootData().getString('host'))
                }


                if (!entity.getRootData().contains("load1")) {//朝向

                    entity.yRotO = 180 * ((2 * Math.random()) - 1)

                    entity.getRootData().putBoolean('load1', true)
                }

                let players = example(event, entity, 'minecraft:player', 20)
                if (players) {
                    if (entity.age == 5) {



                        //entity.YRot = 180 * ((2 * Math.random()) - 1)

                        players.forEach(player => {
                            player.sendData('divine_sword', {
                                name: 'sound1'
                            })
                        })

                    } else if (entity.age == 30) {

                        players.forEach(player => {
                            player.sendData('divine_sword', {
                                name: 'sound2'
                            })
                        })

                    }

                }
                //Client.player.playSound('irons_spellbooks:entity.lightning_strike.strike', 1000, 1)

                //entity 该实体
                //entitys[0] 受击实体

                // Client.player.tell(player)


                if (entity.age == 30) {
                    let entitys = exampleData(event, entity, 'beHit_divine', 4)//受击者
                    if (entitys[0]) {
                        entitys[0].invulnerableTime = 0

                        //


                        if (player) {
                            attack(player, entitys[0], ReactionTypes.fire, getData(entity, 'double', 'att'), 3)
                            //entitys[0].attack(newSource(player, newDamageType('kubejs', 'fire_1')), getData(entity, 'double', 'att'))//attack(damageType.mobAttack(player), entityResistance(entitys[0]) * getData(entity, 'int', 'att'))//造成物理伤害
                        } else {
                            entitys[0].attack(getData(entity, 'double', 'att'))
                        }




                        entitys[0].getRootData().remove('beHit_divine')

                    }

                    if (players) {
                        players.forEach(player => {
                            ScreenJitter(player, 1.3, 15)//屏幕振动

                        })
                    }
                }


                if (entity.age == 35) {
                    let entitys = exampleData(event, entity, 'beHit_divine', 4)//受击者

                    if (entitys[0] && getData(entity, 'int', 'strong_attack')) {


                        let health = entitys[0].getHealth() / entitys[0].getMaxHealth()

                        let kill = getData(entity, 'int', 'kill_att')

                        if (areData(entitys[0], 'boss')) {

                            divineSwordAtt(health, entitys[0], entity, 0.05 * kill, player)//百分比伤害

                        } else if (areData(entitys[0], 'elite')) {

                            divineSwordAtt(health, entitys[0], entity, 0.1 * kill, player)

                        } else {

                            divineSwordAtt(health, entitys[0], entity, 0.15 * kill, player)
                        }

                    }

                }



                if (entity.age > getData(entity, 'int', 'time')) {//存在时间大于time删除
                    entity.remove('discarded')
                }

            }














        })

})