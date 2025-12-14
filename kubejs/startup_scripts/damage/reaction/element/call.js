let callEntity = (entity) => {//实体tick

    //  if (entity.type == "kubejs:fairy_bullet") {
    //      
    //      let color = entity.getDataList("color")
    //      
    //       let xRot = entity.getDataDouble("xRot")
    //              //tell(10)
    //              let yRot = entity.getDataDouble("yRot")
    //
    //      tell(xRot)
    //              if (color) {
    //                  let an = Client.particleEngine.createParticle(
    //                      new $Circle$RingData(xRot * PI / 180, yRot * PI / 180, 20,
    //                          color[0], color[1], color[2], color[3], 30, false, $Circle$EnumRingBehavior.GROW),
    //                      entity.x, entity.y, entity.z, 0, 0, 0)//粒子
    //              }
    //      
    //      
    //     
    //  }




    if (entity.areData("host") && entity instanceof $Mob && entity.server) {//entity.type == "terramity:green_fairy" 
        entity.xpReward = 0//无经验
        if (isFairy(entity)) {
            //tell(entity)
            /**@type {Internal.LivingEntity} */
            // @ts-ignore
            let player = entity.level.getEntity(entity.getDataString("host"))//注意  tick事件中使用了该键值host  则在其他事件中不能再使用  否则会异步

            let type = entity.getDataString("type")

            if (player) {
                if (entity.areData("heal")) {
                    entity.level.getPlayers().sendData("heal_fairy", { entity: entity.id, player: player.id, heal: true })
                } else if (entity.areData("att")) {

                    if (type == "lightning") {
                        entity.setDataList("color", [2.15, 1.2, 3, 2])
                    } else if (type == "fire") {
                        entity.setDataList("color", [2, 1, 0.62, 2])
                    } else if (type == "water") {
                        entity.setDataList("color", [0.43, 1, 1.88, 2])
                    } else if (type == "ice") {
                        entity.setDataList("color", [1, 1.04, 1.18, 2])
                    } else if (type == "ender") {
                        entity.setDataList("color", [1 * 1.2, 0.4 * 1.2, 1.6 * 1.2, 2])
                    }






                    entity.level.getPlayers().sendData("att_fairy", {//同步仙灵
                        entity: entity.id, player: player.id, type: type, color: entity.getDataList("color")
                    })
                }

                let speed = entity.verticalCollision ? 1 : 9

                // tell(speed)

                // @ts-ignore
                if (player.distanceToEntitySqr(entity) < 900) {

                    entity.goalSelector.removeAllGoals(a => {
                        return true
                    })


                    if ((entity.areData("att") && player.distanceToEntitySqr(entity) > 64) ||
                        (entity.areData("heal") && player.distanceToEntitySqr(entity) > 16)

                    ) {
                        entity.getNavigation().moveTo(player.x, player.y + 2, player.z, speed)
                    } else {

                        entity.getNavigation().moveTo(entity.x, entity.y, entity.z, speed)
                    }

                    //entity.target = player
                    // tell(player)

                }

                if (entity.areData("heal") && player && player.distanceToEntitySqr(entity) < 16 && player.age % 20 == 0) {
                    //tell(entity.getDataDouble("heal"))
                    player.heal(entity.getDataDouble("heal"))

                } else if (entity.areData("att") && player && player.age % 40 == 0) {
                    let entitys = player
                        .level
                        .getEntitiesWithin(AABB.of(
                            player.x - 10,
                            player.y - 10,
                            player.z - 10,
                            player.x + 10,
                            player.y + 10,
                            player.z + 10))
                    entitys.removeIf(e => {

                        if ((player.isPlayer() && e.isPlayer()) ||
                            (!player.isPlayer() && !e.isPlayer()) ||
                            (!e.isLiving() || e.stringUuid == player.stringUuid || isFairy(e))
                        ) return true

                        return false

                    })

                    let target = entitys[0]
                    if (target) {

                        entity.getNavigation().moveTo(target.x, target.y + 3, target.z, 1)
                        /**@type {Internal.LivingEntity} */
                        let summoner = addEntity(entity.level, entity.x, entity.y, entity.z, "kubejs:fairy_bullet")

                        let distance = target.distanceToEntity(summoner)

                        summoner.deltaMovement = new Vec3(1 * (target.x - summoner.x) / distance, 1 * (target.y - summoner.y + target.eyeHeight / 2) / distance, 1 * (target.z - summoner.z) / distance)
                        let add = player.getAttributeValue("irons_spellbooks:summon_damage")
                        console.log("summon_damage " + add)
                        summoner.setDataValue("att", 1.2 * entity.getDataDouble("att") * (1 + add))

                        summoner.setDataValue("type", entity.getDataString("type"))
                        summoner.setDataValue("host", player.stringUuid)
                        summoner.setDataValue("target", target.stringUuid)
                        //    setData(entity, $List, "124576464", {s:[0.5, 0.5, 0.5, 1]})

                        if (type == "lightning") {
                            summoner.setDataList("color", [2.15, 1.2, 3, 4])
                        } else if (type == "fire") {
                            summoner.setDataList("color", [2, 1, 0.62, 4])
                        } else if (type == "water") {
                            summoner.setDataList("color", [0.43, 1, 1.88, 4])
                        } else if (type == "ice") {
                            summoner.setDataList("color", [1 * 1.2, 1.04 * 1.2, 1.58 * 1.2, 4])
                        } else if (type == "ender") {
                            summoner.setDataList("color", [1 * 1.2, 0.4 * 1.2, 1.6 * 1.2, 4])
                        }




                        // tell( "56343"+ summoner.getDataList("678657433"))

                        //  summoner.setdata

                    }


                }

            }

            //   tell(entity.getDataDouble("heal"))




            if (!player || player.distanceToEntitySqr(entity) > 900 ||
                entity.areData("time") && entity.getDataInt("time") < entity.age) {

                entity.remove("discarded")

            }





        }


    }

















}

let callEffect = (entity, event) => {


    //  let entity = entitys



    let source = event.source

    let reaction = isCall(event)
    /**@type {Internal.LivingEntity} */
    let actual = source.actual
    let max = actual.getAttributeValue("kubejs:call_summon")
    let health = actual.getAttributeValue("generic.max_health")

    let armor = actual.getAttributeValue("generic.armor")


    let entitys = getFairy(actual)


    if (onDivine(entity)) {
        let intensity = entity.getEffect("kubejs:divine").getAmplifier()  //元素量
        let time = entity.getEffect("kubejs:divine").getDuration()
        //tell(entitys.size())
        //      let heal = actual.isPlayer() ? (1 * DamageValue2(actual, "reaction3") * 0.8) * ((intensity - 9) * 0.05 + 1) : actual.getDataInt("level")

        let heal = actual.isPlayer() ? (1 * DamageValue2(actual, "reaction3") * 0.8) : DamageValue2(actual, "reaction1")
        heal *= ((intensity - 9) * 0.05 + 1)

        let add = 0.9 + actual.getAttributeValue("kubejs:call_divine") * 0.1

        let health1 = actual.isPlayer() ? 0.5 * health : 12
        if ((!entitys || entitys.size() < max) && intensity >= 10) {

            let summoner = addEntity(entity.level, entity.x, entity.y, entity.z, "terramity:green_fairy", entity => {

                if (actual.isPlayer()) entity.getRootData().putBoolean('load', true)//禁止等级初始化

            })

            // if (actual.isPlayer()) //entity.level.createEntity('terramity:green_fairy')

            entity.level.addFreshEntity(summoner)
            summoner.setDataValue("host", source.actual.stringUuid)

            summoner.setMaxHealth(health1)
            summoner.setHealth(summoner.getMaxHealth())

            summoner.setDataValue("heal", heal * add)
            summoner.setDataValue("time", 1200)
            summoner.setAttributeBaseValue("generic.armor", 0.8 * armor)

            ReactionEffect('kubejs:divine', time, intensity, entity, 6)

            reactionEffectAndEvent(event, entity, 17, 84, 134, '召唤', reaction)


        } else if (entitys) {
            /**@type {Internal.LivingEntity} */
            let entity1 = entitys[0]

            if (entity1) {
                entity1.heal(0.1 * entity1.getMaxHealth() * ((intensity) * 0.1 + 1))
                reactionEffectAndEvent(event, entity1, 17, 84, 134, '治愈', reaction)
                entity1.setDataValue("time", 1200 + entity1.age)//重置时间
            }



            ReactionEffect('kubejs:divine', time, intensity, entity, 3)

        }


    } else if (onFire2(entity)) {

        let intensity = entity.getEffect("kubejs:fire").getAmplifier()  //元素量

        let time = entity.getEffect("kubejs:fire").getDuration()
        //tell(entitys.size())

        let att = DamageValue2(actual, "reaction1") * ((intensity - 9) * 0.05 + 1)
        let add = 0.9 + actual.getAttributeValue("kubejs:call_fire") * 0.1
        att *= add
        let health1 = actual.isPlayer() ? 0.5 * health : 12


        if ((!entitys || entitys.size() < max) && intensity >= 10) {

            let summoner = addEntity(entity.level, entity.x, entity.y, entity.z, "terramity:pink_fairy", entity => {

                if (actual.isPlayer()) entity.getRootData().putBoolean('load', true)//禁止等级初始化

            })


            entity.level.addFreshEntity(summoner)

            summoner.setDataValue("host", source.actual.stringUuid)





            summoner.setMaxHealth(health1)
            summoner.setHealth(summoner.getMaxHealth())
            summoner.setDataValue("att", att)
            summoner.setDataValue("type", "fire")
            summoner.setDataValue("time", 1200)

            //tell(summoner.getDataInt("time"))
            summoner.setAttributeBaseValue("generic.armor", 0.8 * armor)

            ReactionEffect('kubejs:fire', time, intensity, entity, 6)

            reactionEffectAndEvent(event, entity, 17, 84, 134, '召唤', reaction)

        } else if (entitys) {

            /**@type {Internal.LivingEntity} */
            let entity1 = entitys[0]


            if (entity1) {
                entity1.heal(0.1 * entity1.getMaxHealth() * ((intensity) * 0.1 + 1))

                entity1.setDataValue("time", 1200 + entity1.age)//重置时间

                reactionEffectAndEvent(event, entity1, 17, 84, 134, '治愈', reaction)
            }
            ReactionEffect('kubejs:fire', time, intensity, entity, 3)



        }


    } else if (onWater2(entity)) {

        let intensity = entity.getEffect("kubejs:water").getAmplifier()  //元素量
        let time = entity.getEffect("kubejs:water").getDuration()
        //tell(entitys.size())
        let att = DamageValue2(actual, "reaction1") * ((intensity - 9) * 0.05 + 1)

        let add = 0.9 + actual.getAttributeValue("kubejs:call_water") * 0.1
        att *= add
        let health1 = actual.isPlayer() ? 0.5 * health : 12
        if ((!entitys || entitys.size() < max) && intensity >= 10) {
            let summoner = addEntity(entity.level, entity.x, entity.y, entity.z, "terramity:blue_fairy", entity => {
                if (actual.isPlayer()) entity.getRootData().putBoolean('load', true)//禁止等级初始化
            })

            entity.level.addFreshEntity(summoner)
            summoner.setDataValue("host", source.actual.stringUuid)
            summoner.setMaxHealth(health1)
            summoner.setHealth(summoner.getMaxHealth())
            summoner.setDataValue("att", att)
            summoner.setDataValue("type", "water")
            summoner.setDataValue("time", 1200)
            //tell(summoner.getDataInt("time"))
            summoner.setAttributeBaseValue("generic.armor", 0.8 * armor)

            ReactionEffect('kubejs:water', time, intensity, entity, 6)

            reactionEffectAndEvent(event, entity, 17, 84, 134, '召唤', reaction)
        } else if (entitys) {

            /**@type {Internal.LivingEntity} */
            let entity1 = entitys[0]

            if (entity1) {
                entity1.heal(0.1 * entity1.getMaxHealth() * ((intensity) * 0.1 + 1))

                entity1.setDataValue("time", 1200 + entity1.age)//重置时间

                reactionEffectAndEvent(event, entity1, 17, 84, 134, '治愈', reaction)
            }
            ReactionEffect('kubejs:water', time, intensity, entity, 3)



        }


    } else if (onEnder2(entity)) {

        let intensity = entity.getEffect("kubejs:ender").getAmplifier()  //元素量

        let time = entity.getEffect("kubejs:ender").getDuration()
        //tell(entitys.size())

        let att = DamageValue2(actual, "reaction3") * ((intensity - 9) * 0.05 + 1) * 0.6
        let add = 0.9 + actual.getAttributeValue("kubejs:call_ender") * 0.1
        att *= add
        let health1 = actual.isPlayer() ? 0.5 * health : 12


        if ((!entitys || entitys.size() < max) && intensity >= 10) {

            let summoner = addEntity(entity.level, entity.x, entity.y, entity.z, "terramity:pink_fairy", entity => {

                if (actual.isPlayer()) entity.getRootData().putBoolean('load', true)//禁止等级初始化

            })


            entity.level.addFreshEntity(summoner)

            summoner.setDataValue("host", source.actual.stringUuid)

            summoner.setMaxHealth(health1)
            summoner.setHealth(summoner.getMaxHealth())
            summoner.setDataValue("att", att)
            summoner.setDataValue("type", "ender")
            summoner.setDataValue("time", 1200)

            //tell(summoner.getDataInt("time"))
            summoner.setAttributeBaseValue("generic.armor", 0.8 * armor)
            ReactionEffect('kubejs:ender', time, intensity, entity, 6)

            reactionEffectAndEvent(event, entity, 17, 84, 134, '召唤', reaction)

        } else if (entitys) {

            /**@type {Internal.LivingEntity} */
            let entity1 = entitys[0]

            if (entity1) {
                entity1.heal(0.1 * entity1.getMaxHealth() * ((intensity) * 0.1 + 1))

                entity1.setDataValue("time", 1200 + entity1.age)//重置时间


                reactionEffectAndEvent(event, entity1, 17, 84, 134, '治愈', reaction)
            }
            ReactionEffect('kubejs:ender', time, intensity, entity, 3)



        }


    } else if (onIce2(entity)) {

        let intensity = entity.getEffect("kubejs:ice").getAmplifier()  //元素量

        let time = entity.getEffect("kubejs:ice").getDuration()
        //tell(entitys.size())

        let att = DamageValue2(actual, "reaction1") * ((intensity - 9) * 0.05 + 1)
        let add = 0.9 + actual.getAttributeValue("kubejs:call_ice") * 0.1
        att *= add
        let health1 = actual.isPlayer() ? 0.5 * health : 12


        if ((!entitys || entitys.size() < max) && intensity >= 10) {

            let summoner = addEntity(entity.level, entity.x, entity.y, entity.z, "terramity:blue_fairy", entity => {

                if (actual.isPlayer()) entity.getRootData().putBoolean('load', true)//禁止等级初始化

            })

            //     if (actual.isPlayer()) summoner.getRootData().putBoolean('load', true)//禁止等级初始化

            entity.level.addFreshEntity(summoner)

            summoner.setDataValue("host", source.actual.stringUuid)

            summoner.setMaxHealth(health1)
            summoner.setHealth(summoner.getMaxHealth())
            summoner.setDataValue("att", att)
            summoner.setDataValue("type", "ice")
            summoner.setDataValue("time", 1200)

            //tell(summoner.getDataInt("time"))
            summoner.setAttributeBaseValue("generic.armor", 0.8 * armor)
            ReactionEffect('kubejs:ice', time, intensity, entity, 6)

            reactionEffectAndEvent(event, entity, 17, 84, 134, '召唤', reaction)

        } else if (entitys) {

            /**@type {Internal.LivingEntity} */
            let entity1 = entitys[0]

            if (entity1) {
                entity1.heal(0.1 * entity1.getMaxHealth() * ((intensity) * 0.1 + 1))

                entity1.setDataValue("time", 1200 + entity1.age)//重置时间

                reactionEffectAndEvent(event, entity1, 17, 84, 134, '治愈', reaction)
            }

            ReactionEffect('kubejs:ice', time, intensity, entity, 3)




        }


    } else if (onLightning2(entity)) {

        let intensity = entity.getEffect("kubejs:lightning").getAmplifier()  //元素量
        let time = entity.getEffect("kubejs:lightning").getDuration()
        //tell(entitys.size())
        let att = DamageValue2(actual, "reaction1") * ((intensity - 9) * 0.05 + 1)
        
          let add =0.9+ actual.getAttributeValue("kubejs:call_lightning")*0.1
        att*=add
        
        let health1 = actual.isPlayer() ? 0.5 * health : 12
        if ((!entitys || entitys.size() < max) && intensity >= 10) {
            let summoner = addEntity(entity.level, entity.x, entity.y, entity.z, "terramity:green_fairy", entity => {
                if (actual.isPlayer()) entity.getRootData().putBoolean('load', true)//禁止等级初始化
            })
            // summoner.getRootData().putBoolean('load', true)//禁止等级初始化
            entity.level.addFreshEntity(summoner)
            summoner.setDataValue("host", source.actual.stringUuid)

            summoner.setMaxHealth(health1)
            summoner.setHealth(summoner.getMaxHealth())
            summoner.setDataValue("att", att)
            summoner.setDataValue("type", "lightning")
            summoner.setDataValue("time", 1200)

            //tell(summoner.getDataInt("time"))
            summoner.setAttributeBaseValue("generic.armor", 0.8 * armor)
            ReactionEffect('kubejs:lightning', time, intensity, entity, 6)
            reactionEffectAndEvent(event, entity, 17, 84, 134, '召唤', reaction)

        } else if (entitys) {

            /**@type {Internal.LivingEntity} */
            let entity1 = entitys[0]

            if (entity1) {
                entity1.heal(0.1 * entity1.getMaxHealth() * ((intensity) * 0.1 + 1))

                entity1.setDataValue("time", 1200 + entity1.age)//重置时间

                reactionEffectAndEvent(event, entity1, 17, 84, 134, '治愈', reaction)
            }

            ReactionEffect('kubejs:lightning', time, intensity, entity, 3)




        }


    } else {


        if (onCall(entity)) {


            let intensity //= entity.getEffect('kubejs:lightning').getAmplifier() + isLightning(event)//元素量//应区分不同法术

            let max = source.actual.getAttributes().getValue('kubejs:max_call') - 1

            if (reaction) {

                intensity = entity.getEffect('kubejs:call').getAmplifier() + reaction

            } else {
                intensity = entity.getEffect('kubejs:call').getAmplifier() + 1
            }

            entity.addEffect(new $potion('kubejs:call', 200, Math.min(intensity, max), false, false)) //<==设置最大附着量 可通过解锁获得更高

        } else {
            entity.addEffect(new $potion('kubejs:call', 200, isCall(event) - 1, false, false))
        }








    }






















    //tell() new $TemptGoal(entity, 1.25, Ingredient.of(Item.of("stone")), false)
    // entity.targetSelector.addGoal(0, new $MoveTowardsTargetGoal(entity, 1, 300))
    //entity.goalSelector.addGoal(0, new $TemptGoal(entity, 1.25, Ingredient.of(Item.of("stone")), false))






}