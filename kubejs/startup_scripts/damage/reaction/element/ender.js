
let launchBullet = (add, entity, x, z) => {


    let summoner = addEntity(entity.level, entity.x, entity.y, entity.z, "kubejs:fairy_bullet")

    //    let distance = target.distanceToEntity(summoner)
    summoner.deltaMovement = new Vec3(x, 0, z)
    // let add = entity.getAttributeValue("irons_spellbooks:summon_damage")
    //     console.log("summon_damage " + add)
    summoner.setDataValue("att", 0.2 * add * DamageValue2(entity, "reaction2"))

    summoner.setDataValue("type", "ender_damage")
    summoner.setDataValue("host", entity.stringUuid)
    summoner.setDataValue("target", entity.stringUuid)
    //    setData(entity, $List, "124576464", {s:[0.5, 0.5, 0.5, 1]})

    summoner.setDataList("color", [2.15, 1.2, 3, 4])

}



let enderEffect = (entitys, event) => {

    let reaction = isEnder(event)

    let source = event.source

    let entity = entitys

    if (onFire2(entity)) {
        let intensity = entity.getEffect("kubejs:fire").getAmplifier()  //元素量

        let time = entity.getEffect("kubejs:fire").getDuration()

        if (intensity >= 4) {//10格内不能有该实体


            if (!example(event, source.actual, 'kubejs:ender_gravity', 10)) {//此处原为a
                let summoner = entity.level.createEntity('kubejs:ender_gravity')

                summoner.setX(source.actual.x)
                summoner.setY(source.actual.y)
                summoner.setZ(source.actual.z)

                entity.level.addFreshEntity(summoner)

                summoner.getRootData().putInt('time', 300)//250 + 25 * intensity

                summoner.getRootData().putInt('gravity_height', Math.min(intensity - 9, 20))//跳跃高度设置
                //event.server.tell('1')
                if (entity.isPlayer() && intensity >= 14) {//玩家召唤

                    reactionEffectAndEvent(event, source.actual, 180, 29, 145, '末影喷涌', reaction)

                    setBooleanData(summoner, 'goal', true)//阵营为玩家

                    setIntData(summoner, 'att', ((intensity - 14) * 0.1 + 1) * 3 * DamageValue2(entity, 'reaction2'))//给服务端实体添加nbt

                } else if (intensity >= 14) {

                    reactionEffectAndEvent(event, source.actual, 180, 29, 145, '末影喷涌', reaction)

                    setBooleanData(summoner, 'goal', false)

                    setIntData(summoner, 'att', ((intensity - 14) * 0.1 + 1) * 3 * entityAtt(event))

                } else {

                    reactionEffectAndEvent(event, source.actual, 180, 29, 145, '末影抬升', reaction)
                }

            } else {

                //延长存在时间
            }
        }
        ReactionEffect('kubejs:fire', time, intensity, entity, 5)

    } else if (onIce2(entity)) {
        //生成末影之眼

        let intensity = event.entity.getEffect("kubejs:ice").getAmplifier()  //元素量

        let time = event.entity.getEffect("kubejs:ice").getDuration()


        reactionEffectAndEvent(event, entity, 97, 47, 232, '凝固', reaction)

        let a = true
        if (intensity > 4) {
            let entits = source
                .actual
                .level
                .getEntitiesWithin(AABB.of(
                    source.actual.x - 10,
                    source.actual.y - 10,
                    source.actual.z - 10,
                    source.actual.x + 10,
                    source.actual.y + 10,
                    source.actual.z + 10))


            for (let i = 0; a && entits[i]; i++) {


                if (entits[i].type == "kubejs:ender_eye") a = false


            }

            if (!example(event, source.actual, 'kubejs:ender_eye', 10)) {
                let summoner = entity.level.createEntity('kubejs:ender_eye')

                summoner.setX(source.actual.x)
                summoner.setY(source.actual.y + 1.5)
                summoner.setZ(source.actual.z)

                entity.level.addFreshEntity(summoner)

                summoner.getRootData().putInt('time', 250 + 25 * intensity)
                //event.level.runCommandSilent(`/execute as ${id} at ${id} run summon aether:hammer_projectile ~ ~3 ~`)
            } else {

                //延长存在时间
            }
            //event.server.tell('34452')
        }

        ReactionEffect('kubejs:ice', time, intensity, entity, 5)
        // let intensity = effectModify(event, entity, 'kubejs:ice', 5)

    } else if (onWater2(entity)) {

        // let intensity = effectModify(event, entity, 'kubejs:water', 10)
        let intensity = event.entity.getEffect("kubejs:water").getAmplifier()  //元素量

        let time = event.entity.getEffect("kubejs:water").getDuration()


        //particleDeliver(source.actual, event)

        if (intensity < 14) {

            reactionEffectAndEvent(event, entity, 123, 30, 187, '传送I', reaction)

            particleDeliver(entity, event)
            randomTp(source.actual, event, 10)
            particleDeliver(entity, event)

        } else {//传送附近所有生物

            let length = 0

            reactionEffectAndEvent(event, entity, 123, 30, 187, '传送II', reaction)

            let entitys = source//返回数组
                .actual
                .level
                .getEntitiesWithin(AABB.of(
                    source.actual.x - 3,
                    source.actual.y - 1,
                    source.actual.z - 3,
                    source.actual.x + 3,
                    source.actual.y + 3,
                    source.actual.z + 3))//[1]

            //  for (; entitys[length]; length++) { }

            for (let i = length - 1; i > length - 4 && entitys[i]; i--) {
                //  particleDeliver(entity, event)
                randomTp(entitys[i], event, 10)
                //   particleDeliver(entity, event)
            }


        }


        // particleDeliver(source.actual, event)


        ReactionEffect('kubejs:water', time, intensity, entity, 3)


    } else if (onLightning2(entity)) {

        let intensity = entity.getEffect("kubejs:lightning").getAmplifier()  //元素量
        let time = entity.getEffect("kubejs:lightning").getDuration()
        let att = DamageValue2(entity, "reaction3") * ((intensity - 9) * 0.05 + 1)

        let actual = entity

        if (intensity > 14 && !example(event, source.actual, 'kubejs:gravity_circle', 10)) {
            let summoner = addEntity(actual.level, actual.x, actual.y + 3, actual.z, "kubejs:gravity_circle")

            summoner.setDataValue("att", att * 1.2)

            ReactionEffect('kubejs:lightning', time, intensity, source.actual, 8)

            reactionEffectAndEvent(event, actual, 17, 84, 134, '推进', reaction)

        } else {

            let entitys = exampleData(event, actual, "load", 5)

            let summoner = addEntity(actual.level, actual.x, actual.y, actual.z, "kubejs:attract_circle")

            if (entitys) {
                entitys.forEach(entity => {

                    entity.deltaMovement = new Vec3(0.3 * (actual.x - entity.x), 0.3 * (actual.y - entity.y), 0.3 * (actual.z - entity.z))
                })
            }

            ReactionEffect('kubejs:lightning', time, intensity, source.actual, 6)

            reactionEffectAndEvent(event, actual, 17, 84, 134, '吸引', reaction)
        }

    } else if (onCall(entity)) {

        let intensity = entity.getEffect("kubejs:call").getAmplifier()  //元素量

        let time = entity.getEffect("kubejs:call").getDuration()

        let max = entity.getAttributeValue("kubejs:call_summon")
        let health = entity.getAttributeValue("generic.max_health")

        let armor = entity.getAttributeValue("generic.armor")

        let actual = source.actual

        //tell(actuals.size())

        let att = DamageValue2(entity, "reaction3") * ((intensity - 9) * 0.05 + 1)
        let add = 0.9 + actual.getAttributeValue("kubejs:ender_call") * 0.1
        att *= add
        let health1 = entity.isPlayer() ? 0.5 * health : 12

        let entitys1 = getFairy(entity)

        if ((!entitys1 || entitys1.size() < max) && intensity >= 10) {

            let summoner = addEntity(actual.level, actual.x, actual.y, actual.z, "terramity:pink_fairy", e => {

                if (entity.isPlayer()) e.getRootData().putBoolean('load', true)//禁止等级初始化

            })

            //  summoner.getRootData().putBoolean('load', true)//禁止等级初始化

            actual.level.addFreshEntity(summoner)

            summoner.setDataValue("host", entity.stringUuid)
            //tell(summoner.getDataInt("level"))
            summoner.setMaxHealth(health1)

            summoner.setHealth(summoner.getMaxHealth())

            summoner.setDataValue("att", att * 1.2)
            summoner.setDataValue("type", "ender")
            summoner.setDataValue("time", 1200)

            //tell(summoner.getDataInt("time"))
            summoner.setAttributeBaseValue("generic.armor", 0.8 * armor)
            ReactionEffect('kubejs:call', time, intensity, entity, 6)

            reactionEffectAndEvent(event, actual, 17, 84, 134, '召唤', reaction)

        } else {



            /**@type {Internal.LivingEntity} */
            let entity1 = entitys1[0]

            if (entity1) {
                entity1.heal(0.1 * entity1.getMaxHealth() * ((intensity) * 0.1 + 1))

                entity1.setDataValue("time", 1200 + entity1.age)//重置时间


                reactionEffectAndEvent(event, entity1, 17, 84, 134, '治愈', reaction)
            }
            ReactionEffect('kubejs:call', time, intensity, entity, 3)



        }


    } else if (onDivine(entity)) {

        let intensity = event.entity.getEffect("kubejs:divine").getAmplifier()  //元素量
        let time = event.entity.getEffect("kubejs:divine").getDuration()


        let add = intensity * 0.05 + 1



        if (intensity > 3) launchBullet(add, entity, 2 * Math.cos(entity.yRotO / 180 * PI), 2 * Math.sin(entity.yRotO / 180 * PI))
        if (intensity > 4) launchBullet(add, entity, 2 * Math.cos((entity.yRotO + 90) / 180 * PI), 2 * Math.sin((entity.yRotO + 90) / 180 * PI))
        if (intensity > 5) launchBullet(add, entity, 2 * Math.cos((entity.yRotO + 180) / 180 * PI), 2 * Math.sin((entity.yRotO + 180) / 180 * PI))
        if (intensity > 6) launchBullet(add, entity, 2 * Math.cos((entity.yRotO + 270) / 180 * PI), 2 * Math.sin((entity.yRotO + 270) / 180 * PI))

        if (intensity > 7) launchBullet(add, entity, 2 * Math.cos((entity.yRotO + 45) / 180 * PI), 2 * Math.sin((entity.yRotO + 45) / 180 * PI))
        if (intensity > 8) launchBullet(add, entity, 2 * Math.cos((entity.yRotO + -45) / 180 * PI), 2 * Math.sin((entity.yRotO + -45) / 180 * PI))
        if (intensity > 9) launchBullet(add, entity, 2 * Math.cos((entity.yRotO + 135) / 180 * PI), 2 * Math.sin((entity.yRotO + 135) / 180 * PI))
        if (intensity > 10) launchBullet(add, entity, 2 * Math.cos((entity.yRotO - 135) / 180 * PI), 2 * Math.sin((entity.yRotO - 135) / 180 * PI))



        if (entity.isPlayer() && entity.getAttributeValue("kubejs:ender_divine2")) {
            entity.sendData("timeStagnate", {
                time: 2000 + 2000 * entity.getAttributeValue("kubejs:ender_divine2"),
                intensity: 2
            })
        }

        reactionEffectAndEvent(event, entity, 17, 84, 134, '逸散', reaction)

        //生成可以爆炸的末影之眼if (!onFire2(entity) && !onLightning2(entity) && !onIce2(entity) && !onPosion2(entity) && !onWater2(entity)) 
        ReactionEffect('kubejs:divine', time, intensity, entity, 3)

    } else {//无反应 仅附着 应设定不同类型法术附着量不同

        if (onEnder2(entity)) {

            let intensity //元素量//应区分不同法术

            let max = source.actual.getAttributes().getValue('kubejs:max_ender') - 1
            if (reaction) {

                intensity = entity.getEffect('kubejs:ender').getAmplifier() + reaction

            } else {
                intensity = entity.getEffect('kubejs:ender').getAmplifier() + 1
            }//元素量


            entity.addEffect(new $potion('kubejs:ender', 200, Math.min(intensity, max), false, false)) //<==设置最大附着量 可通过解锁获得更高

        } else {
            entity.addEffect(new $potion('kubejs:ender', 200, reaction - 1, false, false))
        }
    }




}


let deliver = (entity, event, chance) => {//末影传送


    //传送



    let random = Math.random();
    //if (){}



    if (random <= chance) {

        particleDeliver(entity, event)

        let quantity = 0, quantity2 = 0

        for (let x = -10; x <= 10; x++) {

            for (let y = -10; y <= 10; y++) {

                for (let z = -10; z <= 10; z++) {
                    //x y z为偏移点
                    if (entity.block.offset(x, y - 1, z).getId() != 'minecraft:void_air' && entity.block.offset(x, y - 1, z).getId() != 'minecraft:cave_air' && entity.block.offset(x, y - 1, z).getId() != 'minecraft:air' && (entity.block.offset(x, y, z).getId() == 'minecraft:air' || entity.block.offset(x, y, z).getId() == 'minecraft:cave_air')) {

                        quantity++
                    }

                }
            }
        }
        if (quantity != 0) {

            quantity = Math.floor(Math.random() * quantity)

            x: for (let x = -10; x <= 10; x++) {
                for (let y = -10; y <= 10; y++) {
                    for (let z = -10; z <= 10; z++) {
                        if (entity.block.offset(x, y - 1, z).getId() != 'minecraft:void_air' && entity.block.offset(x, y - 1, z).getId() != 'minecraft:cave_air' && entity.block.offset(x, y - 1, z).getId() != 'minecraft:air' && (entity.block.offset(x, y, z).getId() == 'minecraft:air' || entity.block.offset(x, y, z).getId() == 'minecraft:cave_air')) {

                            if (quantity2 == quantity) {

                                entity.setX(entity.x + x)
                                entity.setY(entity.y + y)
                                entity.setZ(entity.z + z)
                                break x
                            }
                            quantity2++

                        }
                    }
                }
            }
        }

        particleDeliver(entity, event)
        //Client.particleEngine.createParticle('', entity.x , entity.y,  entity.z, 0, 100, 0)//粒子
        //let sound =Java.loadClass('net.minecraft.client.resources.sounds.SoundInstance')



        //Client.level.playSound(null,entity.x,entity.z,entity.y,'minecraft:entity.enderman.teleport','music',100,100)

        // global.event.ender

    }
































}













