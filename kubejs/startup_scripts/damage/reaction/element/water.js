
let WaterEffect3 = (event, entity) => {//融化专用  无增幅

    //  let entity = event.entity

    let source = event.source

    let reaction = isWater(event)

    if (onDivine(entity)) {


        let intensity = entity.getEffect("kubejs:divine").getAmplifier()  //元素量

        let time = entity.getEffect("kubejs:divine").getDuration()


        reactionEffectAndEvent(event, source.actual, 45, 166, 45, '治愈', reaction)

        ReactionEffect('kubejs:divine', time, intensity, entity, 3)


    } else if (onFire2(source.actual)) {//为攻击者的  蒸发


        let intensityActual = source.actual.getEffect(onFire2(source.actual)).getAmplifier()  //元素量
        let timeActual = source.actual.getEffect(onFire2(source.actual)).getDuration()

        if (intensityActual >= 9) {

            reactionEffectAndEvent(event, source.actual, 213, 232, 232, '蒸发', reaction)

            let att = 0

            if (entity.isPlayer()) {//受击者为玩家isPlayer(event)

                att = DamageValue2(entity, 'reaction1') * (1 + (intensityActual - 9) * 0.1) * 0.5

                // entity.getRootData().putString('actual',source.actual.uuid)

            } else {

                att = entityAtt2(entity) * (1 + (intensityActual - 9) * 0.1) * 0.5
            }

            //console.log(att)

            source.actual.getRootData().putInt('steamAtt', att)

            source.actual.addEffect(new $potion('kubejs:steam', 150, 0, false, false))

            //攻击者使用冰元素 攻击火附着的实体 使攻击者产生融化而附着水元素   如果攻击者有其他效果  着进行反应
        } else {

            reactionEffectAndEvent(event, source.actual, 213, 232, 232, '中和', reaction)

        }



        source.actual.removeEffect('kubejs:fire')

        if (intensityActual - 6 >= 0) {
            source.actual.addEffect(new $potion('kubejs:fire', timeActual, Math.max(intensityActual - 6, 0), false, false))
        }

    } else if (onIce2(source.actual)) {

        //  冻结
        let intensityActual = source.actual.getEffect(onIce2(source.actual)).getAmplifier()  //元素量
        let timeActual = source.actual.getEffect(onIce2(source.actual)).getDuration()

        reactionEffectAndEvent(event, source.actual, 118, 230, 255, '冰冻', reaction)

        if (!source.actual.getEffect("mowziesmobs:frozen")) {
            source.actual.addEffect(new $potion('mowziesmobs:frozen', 20 * (intensityActual * 0.4 + 2), 0, false, false)) //mow更多boss的冻结效果
        }

        source.actual.removeEffect('kubejs:water')
        /*
        if (intensityActual - 5 >= 0) {
            source.actual.addEffect(new potion('kubejs:ice', timeActual, Math.max(intensityActual -5, 0), false, false))
        }
*/
    } else if (onLightning2(source.actual)) {   //  感电


        let intensityActual = source.actual.getEffect(onLightning2(source.actual)).getAmplifier()  //元素量
        let timeActual = source.actual.getEffect(onLightning2(source.actual)).getDuration()

        let att = 0

        let armor = entity.getAttributes().getValue('minecraft:generic.armor')

        if (entity.isPlayer()) {

            att = DamageValue2(entity, 'reaction1') * (1 + (intensity) * 0.1)    //source.actual.getAttributes().getValue('puffish_skills:player.melee_damage') * source.actual.getAttributes().getValue('minecraft:generic.attack_damage')

        } else {

            att = entityAtt2(entity) * 0.3

        }

        att = att * (1 + 0.1 * intensity) * 20 / (20 + armor)

        entity.invulnerableTime = 0

        entity.addEffect(new $potion('minecraft:slowness', 10, 255, false, false))

        if (intensity > 9) {

            reactionEffectAndEvent(event, entity, 246, 222, 33, '电击II', reaction)
            //   //是否修改受克制方

            //   let a = Client.particleEngine.createParticle('irons_spellbooks:electricity', entity.x, entity.y + 2.5, entity.z, 0, 0, 0)

            //   a.scale(5)

            let entitys = exampleOfLive(event, source.actual, 6, 5)

            if (entitys) {

                entitys.forEach(entitys => {

                    if (entitys == entity) {

                        entitys.attack(Math.pow(att, 0.7))
                    } else {
                        entitys.attack(att)
                    }
                    let distance = Math.floor(entity.distanceToEntity(entitys)) + 1
                    //  console.log(distance)
                    let xGap = source.actual.x - entitys.x
                    let yGap = source.actual.y - entitys.y
                    let zGap = source.actual.z - entitys.z

                    for (let i = 0; i <= distance; i++) {

                        let b = i / distance

                        let a = Client.particleEngine.createParticle('irons_spellbooks:electricity',
                            source.actual.x - (b * xGap), source.actual.y + 1.5 - (b * yGap), source.actual.z - (b * zGap), 0, 0, 0)

                        a.scale(3)
                    }
                })
            }
        } else {

            reactionEffectAndEvent(event, entity, 246, 222, 33, '电击I', reaction)

            source.actual.attack(att)//是否修改受克制方

            let a = Client.particleEngine.createParticle('irons_spellbooks:electricity', source.actual.x, source.actual.y + 2.5, source.actual.z, 0, 0, 0)

            a.scale(5)

        }

        //source.actual.attack(entity, att)

        //  let a = Client.particleEngine.createParticle('irons_spellbooks:electricity', entity.x, entity.y + 2.5, entity.z, 0, 0, 0)

        //  a.scale(5)
        source.actual.removeEffect('kubejs:lightning')

        if (intensityActual - 4 >= 0) {
            source.actual.addEffect(new $potion('kubejs:lightning', timeActual, Math.max(intensityActual - 4, 0), false, false))
        }

    } else {



        if (onWater2(entity)) {


            let intensity //= entity.getEffect('kubejs:lightning').getAmplifier() + isLightning(event)//元素量//应区分不同法术

            let max = source.actual.getAttributes().getValue('kubejs:max_water') - 1

            if (reaction) {

                intensity = entity.getEffect('kubejs:water').getAmplifier() + reaction

            } else {
                intensity = entity.getEffect('kubejs:water').getAmplifier()
            }

            entity.addEffect(new $potion('kubejs:water', 200, Math.min(intensity, max), false, false)) //<==设置最大附着量 可通过解锁获得更高

        } else {
            entity.addEffect(new $potion('kubejs:water', 200, isWater(event) - 1, false, false))
        }

        // source.actual.addEffect(new potion('kubejs:water', 1, 1, false, false))//<---注意  赋予水属性后 如不在后面的if判断中不加else  则还会判断一次
    }







}













let WaterEffect2 = (entitys, event) => {//未完善

    let entity = entitys

    let attacker = event.source.actual

    let source = event.source

    let reaction = isWater(event)

    let reactionTheMagic = source.actual.getAttributes().getValue('kubejs:reaction_magic')

    if (onDivine(entity)) {


        let intensity = entity.getEffect("kubejs:divine").getAmplifier()  //元素量

        let time = entity.getEffect("kubejs:divine").getDuration()


        reactionEffectAndEvent(event, attacker, 45, 166, 45, '治愈', reaction)

        ReactionEffect('kubejs:divine', time, intensity, entity, 3)


    } else if (onFire2(entitys)) {//为攻击受击者的  蒸发


        let intensityActual = entitys.getEffect("kubejs:fire").getAmplifier()  //元素量
        let timeActual = entitys.getEffect("kubejs:fire").getDuration()

        if (intensityActual >= 9) {

            reactionEffectAndEvent(event, entitys, 213, 232, 232, '蒸发', reaction)

            let att = 0

            if (attacker.isPlayer()) {//受击者为玩家isPlayer(event)

                att = DamageValue2(attacker, 'reaction1') * (1 + (intensityActual - 9) * 0.05) * 0.5

                // source.getRootData().putString('actual',entitys.uuid)

            } else {

                att = entityAtt2(attacker) * (1 + (intensityActual - 9) * 0.05) * 0.5
            }

            //console.log(att)

            entitys.getRootData().putInt('steamAtt', att)

            entitys.addEffect(new $potion('kubejs:steam', 150, 0, false, false))

            //攻击者使用冰元素 攻击火附着的实体 使攻击者产生融化而附着水元素   如果攻击者有其他效果  着进行反应
        } else {

            reactionEffectAndEvent(event, entitys, 213, 232, 232, '中和', reaction)

        }
        //tell( reactionTheMagic)
        event.setAmount(event.amount * Math.max(0.1, 0.8 - 0.015 * intensityActual) * (1 + reactionTheMagic))

        entitys.removeEffect('kubejs:fire')

        if (intensityActual - 6 >= 0) {
            entitys.addEffect(new $potion('kubejs:fire', timeActual, Math.max(intensityActual - 6, 0), false, false))
        }

    } else if (onIce2(entitys)) {//攻击者冻结

        //  冻结
        let intensityActual = entitys.getEffect(onIce2(entitys)).getAmplifier()  //元素量
        let timeActual = entitys.getEffect(onIce2(entitys)).getDuration()

        reactionEffectAndEvent(event, entitys, 118, 230, 255, '冰冻', reaction)

        if (!attacker.getEffect("mowziesmobs:frozen")) {
            attacker.addEffect(new $potion('mowziesmobs:frozen', 20 * (intensityActual * 0.4 + 2), 0, false, false)) //mow更多boss的冻结效果
        }

        entitys.removeEffect('kubejs:ice')

        if (intensityActual - 5 >= 0) {
            entitys.addEffect(new $potion('kubejs:ice', timeActual, Math.max(intensityActual - 2, 0), false, false))
        }

    } else if (onCall(entity)) {

        let intensity = entity.getEffect("kubejs:call").getAmplifier()  //元素量

        let time = entity.getEffect("kubejs:call").getDuration()

        let max = entity.getAttributeValue("kubejs:call_summon")
        let health = entity.getAttributeValue("generic.max_health")

        let armor = entity.getAttributeValue("generic.armor")

        let actual = source.actual

        //tell(actuals.size())

        let att = DamageValue2(entity, "reaction1") * ((intensity - 9) * 0.05 + 1) * 0.6
        let add = 0.9 + actual.getAttributeValue("kubejs:water_call") * 0.1
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

            summoner.setDataValue("att", att)
            summoner.setDataValue("type", "water")
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


    } else if (onLightning2(entitys)) {   //  感电


        let intensityActual = entitys.getEffect(onLightning2(entitys)).getAmplifier()  //元素量
        let timeActual = entitys.getEffect(onLightning2(entitys)).getDuration()

        let att = 0

        let armor = attacker.getAttributes().getValue('minecraft:generic.armor')

        if (entity.isPlayer()) {

            att = DamageValue2(entity, 'reaction1') * (1 + (intensity) * 0.1)    //entitys.getAttributes().getValue('puffish_skills:player.melee_damage') * entitys.getAttributes().getValue('minecraft:generic.attack_damage')

        } else {

            att = entityAtt2(entity) * 0.3

        }

        att = att * (1 + 0.1 * intensityActual) * 20 / (20 + armor)

        attacker.invulnerableTime = 0

        attacker.addEffect(new $potion('minecraft:slowness', 10, 255, false, false))

        if (intensityActual > 9) {

            reactionEffectAndEvent(event, attacker, 246, 222, 33, '电击II', reaction)
            //   //是否修改受克制方

            //   let a = Client.particleEngine.createParticle('irons_spellbooks:electricity', entity.x, entity.y + 2.5, entity.z, 0, 0, 0)

            //   a.scale(5)

            let entitys = exampleOfLive(event, attacker, 6, 5)

            if (entitys) {

                entitys.forEach(entitys => {

                    if (entitys == entity) {

                        entitys.attack(Math.pow(att, 0.7))
                    } else {
                        entitys.attack(att)
                    }
                    let distance = Math.floor(attacker.distanceToEntity(entitys)) + 1
                    //  console.log(distance)
                    let xGap = entitys.x - entitys.x
                    let yGap = entitys.y - entitys.y
                    let zGap = entitys.z - entitys.z

                    for (let i = 0; i <= distance; i++) {

                        let b = i / distance

                        let a = Client.particleEngine.createParticle('irons_spellbooks:electricity',
                            entitys.x - (b * xGap), entitys.y + 1.5 - (b * yGap), entitys.z - (b * zGap), 0, 0, 0)

                        a.scale(3)
                    }
                })
            }
        } else {

            reactionEffectAndEvent(event, entity, 246, 222, 33, '电击I', reaction)

            entitys.attack(att)//是否修改受克制方

            let a = Client.particleEngine.createParticle('irons_spellbooks:electricity', entitys.x, entitys.y + 2.5, entitys.z, 0, 0, 0)

            a.scale(5)

        }

        //  entitys.attack(entity, att)

        //  let a = Client.particleEngine.createParticle('irons_spellbooks:electricity', entity.x, entity.y + 2.5, entity.z, 0, 0, 0)

        //  a.scale(5)
        entitys.removeEffect('kubejs:lightning')

        if (intensityActual - 4 >= 0) {
            entitys.addEffect(new $potion('kubejs:lightning', timeActual, Math.max(intensityActual - 4, 0), false, false))
        }

    } else if (!onFire2(entity) && !onIce2(entity) && !onLightning2(entity)) {//无反应 仅附着 应设定不同类型法术附着量不同&& !onPosion2(event)

        //event.server.tell(event.source.type)
        let max = source.actual.getAttributes().getValue('kubejs:max_water') - 1
        if (onWater2(entity)) {

            let intensity = entity.getEffect('kubejs:water').getAmplifier() + reaction//元素量//应区分不同法术

            entity.addEffect(new $potion('kubejs:water', 200, Math.min(intensity, max), false, false)) //<==设置最大附着量 可通过解锁获得更高

        } else {
            entity.addEffect(new $potion('kubejs:water', 200, reaction - 1, false, false))
        }

    }


}









/*




  if (onEnder2(entity)) {//移动到水false


        let intensity = entity.getEffect("kubejs:ender").getAmplifier()  //元素量

        let time = entity.getEffect("kubejs:ender").getDuration()



        //particleDeliver(entity, event)
        if (intensity < 14) {

            deliver(entity, event, 1)


        } else {//传送附近所有生物

            let length = 0


            let entitys = entity
                .level
                .getEntitiesWithin(AABB.of(
                    entity.x - 3,
                    entity.y - 1,
                    entity.z - 3,
                    entity.x + 3,
                    entity.y + 3,
                    entity.z + 3))//[1]

            for (; entitys[length]; length++) { }

            for (let i = length - 1; i > length - 4 && entitys[i]; i--) {
                //particleDeliver(entitys[i], event)
                deliver(entitys[i], event, 1)

                //particleDeliver(entitys[i], event)
            }


        }
        //particleDeliver(entity, event)




        entity.removeEffect('kubejs:ender')

        if (intensity - 5 >= 0) {
            entity.addEffect(new potion('kubejs:ender', time, Math.max(intensity - 5, 0), false, false))
        }



    } else if (onFire2(entity)) {//==========================================================================

        let intensity = entity.getEffect("kubejs:fire").getAmplifier()  //元素量

        let time = entity.getEffect("kubejs:fire").getDuration()

        if (intensity >= 9) {//升华



            let att = 0

            if (isPlayer(event)) {//攻击者为玩家

                att = 0.5 * (1 + intensity * 0.1) * actualAtt(event)

            } else {//攻击者为实体

                att = DamageValue(event, 'reaction1') * (1 + intensity * 0.1)
            }

            entitys.getRootData().putInt('steamAtt', att)


            entitys.addEffect(new potion('kubejs:steam', 150, 0, false, false))



        }

        entity.removeEffect('kubejs:fire')

        if (intensity - 6 >= 0) {
            entity.addEffect(new potion('kubejs:fire', time, Math.max(intensity - 6, 0), false, false))

        }


        event.setAmount(event.amount * (0.8 - 0.015 * intensity))

    } else if (onIce2(entity)) {//===================================================================

        let intensity = entity.getEffect("kubejs:ice").getAmplifier()  //元素量

        let time = entity.getEffect("kubejs:ice").getDuration()









        //===================================================================================
    } else if (onLightning2(entity)) {

        let intensity = entity.getEffect("kubejs:lightning").getAmplifier()  //元素量

        let time = entity.getEffect("kubejs:lightning").getDuration()



        //===================================================================
        //===================================================================================


        let att = 0

        let armor = entitys.getAttributes().getValue('minecraft:generic.armor')

        if (entity.isPlayer()) {

            att = DamageValue('reaction1')//entity.getAttributes().getValue('puffish_skills:player.melee_damage') * entity.getAttributes().getValue('minecraft:generic.attack_damage')


        } else {

            att = entityAtt2(entity) * 0.3

        }

        att = att * (1 + 0.1 * intensity) * 20 / (20 + armor)

        entitys.invulnerableTime = 0

        source.actual.attack(entity, att)


        entity.removeEffect('kubejs:lightning')

        if (intensity - 4 >= 0) {
            entity.addEffect(new potion('kubejs:lightning', time, Math.max(intensity - 4, 0), false, false))
        }

        let a = Client.particleEngine.createParticle('irons_spellbooks:electricity', source.actual.x, source.actual.y + 2.5, source.actual.z, 0, 0, 0)

        a.scale(5)



    }


*/






//