
let divineHeal = (event, entity) => {//写在受伤事件 废弃

    let actual = event.source.actual


    if (isDivine(event) && onWater2(entity)) {//治愈

        //console.log('isDivine')

        let intensity = entity.getEffect("kubejs:water").getAmplifier()  //元素量

        let time = entity.getEffect("kubejs:water").getDuration()

        if (intensity >= 4) {

            entity.setHealth(entity.getHealth() + DamageValue2(entity, 'reaction3') * event.amount * intensity / 15)

        }

    } else if (isWater(event) && onDivine(entity)) {


        let intensity = entity.getEffect("kubejs:water").getAmplifier()  //元素量

        let time = entity.getEffect("kubejs:water").getDuration()

        if (intensity >= 4) {

            actual.setHealth(actual.getHealth() + DamageValue2(actual, 'reaction3') * event.amount * intensity / 15)

        }

    }


}

let goldLoot = (entity) => {



    if (onDivine(entity)) {


        addItemEntity(entity.level, entity.x, entity.y, entity.z, Item.of("gold_nugget"))



    }



}


let divineEffect = (entitys, event) => {
    //神圣
    //护盾 治愈  利好受击者
    //领域 攻击 利好攻击者



    let source = event.source

    let entity = entitys

    let reaction = isDivine(event)

    if (onWater2(entity)) {


        let intensity = entity.getEffect("kubejs:water").getAmplifier()  //元素量

        let time = entity.getEffect("kubejs:water").getDuration()



        let player = reactionEffectAndEvent(event, entity, 45, 166, 45, '治愈', reaction)
        /*
                if (player) {
        
                    //global.entity[entity.stringUuid]=entity
                    player.forEach(player => {
                        player.sendData('divineHeal', { entity: entity.stringUuid })//
                    })
        
                    // sendEntity(player,entity,'divineHeal',{})
                }
        */

        let summoner = entity.level.createEntity('kubejs:cure_bullet')

        summoner.setX(source.actual.x)
        summoner.setY(source.actual.y)
        summoner.setZ(source.actual.z)

        entity.level.addFreshEntity(summoner)

        setData(summoner, 'int', 'heal', DamageValue2(entity, 'reaction3') * event.amount * intensity / 15)

        setData(summoner, 'string', 'goal', entity.stringUuid)

     //   global.goalEntity[entity.stringUuid] = entity



        ReactionEffect('kubejs:water', time, intensity, entity, 3)


    } else if (onFire2(entity)) {//最大可超过20



        let intensity = entity.getEffect("kubejs:fire").getAmplifier()  //元素量

        let time = entity.getEffect("kubejs:fire").getDuration()

        //event.server.tell('3452')
        if (intensity >= 14 && !(source.actual.getEffect('kubejs:divine_sword_cool'))) {
            let summoner = entity.level.createEntity('kubejs:divine_sword')

            summoner.setX(entity.x)
            summoner.setY(entity.y)
            summoner.setZ(entity.z)

            entity.level.addFreshEntity(summoner)
          // tell(intensity)
          // tell((1 + 0.05 * (intensity - 14)) * 5)
          // tell(DamageValue2(source.actual, 'reaction2'))
          // tell((1 + 0.05 * (intensity - 14)) * DamageValue2(source.actual, 'reaction2') * 5)
            setData(summoner, 'double', 'att', (1 + 0.05 * (intensity - 14)) * DamageValue2(source.actual, 'reaction2') * 5)

            setData(entity, 'boolean', 'beHit_divine', true)
            setData(summoner, 'int', 'time', 100)
            setData(summoner, 'string', 'host', source.actual.stringUuid)

            reactionEffectAndEvent(event, entity, 255, 250, 133, '神圣冲击', reaction)


            //  source.actual.addEffect(new potion())


            source.actual.addEffect(new $potion('kubejs:divine_sword_cool', 200, 0, false, false)) //攻击冷却
        }

        ReactionEffect('kubejs:fire', time, intensity, entity, 8)

    } else if (onIce2(entity)) {

        let intensity = entity.getEffect("kubejs:ice").getAmplifier()  //元素量

        let time = entity.getEffect("kubejs:ice").getDuration()


        if (intensity >= 6) {

            /**@type {Internal.LivingEntity} */
            let actual = source.actual

            let armor = entity.getAttributes().getValue("minecraft:generic.armor")//根据防御力获得护盾



            if (entity.isPlayer()) {//玩家使用防御力计算护盾
                entity.addEffect(new $potion('kubejs:absorption', 600, DamageValue2(entity, 'reaction3') * (armor * intensity / 30), false, false)) //攻击冷却

            } else {//怪物使用等级倍率和防御力计算(armor * intensity / 30)
                //Client.player.tell(entityHealth(source.actual))
                entity.addEffect(new $potion('kubejs:absorption', 600, entityHealth(entity) * (armor * intensity / 30), false, false)) //攻击冷却

            }


        }
        reactionEffectAndEvent(event, entity, 149, 189, 214, '守护', reaction)
        //Client.player.tell(intensity)
        ReactionEffect('kubejs:ice', time, intensity, entity, 5)

    } else if (onLightning2(entity)) {


        let intensity = entity.getEffect("kubejs:lightning").getAmplifier()  //元素量

        let time = entity.getEffect("kubejs:lightning").getDuration()

        //event.server.tell('3452')

        let oldSummoner = example(event, entity, 'kubejs:add_field', 15)[0]//注意 为数组

        if (intensity >= 19 && !oldSummoner) {
            let summoner = entity.level.createEntity('kubejs:add_field')

            summoner.setX(entity.x)
            summoner.setY(entity.y)
            summoner.setZ(entity.z)

            entity.level.addFreshEntity(summoner)

            setData(summoner, 'int', 'att', (1 + 0.1 * (intensity - 19)))

            setData(summoner, 'int', 'time', 400 * (1 + 0.1 * (intensity - 19)))

            if (!(source.actual.isPlayer())) setData(entity, 'boolean', 'goal', false)//设置阵营

            reactionEffectAndEvent(event, entity, 232, 184, 26, '赐福', reaction)


            //  source.actual.addEffect(new potion('kubejs:divine_sword_cool', 200, 0, false, false)) //攻击冷却
        } else if (oldSummoner && intensity >= 10) {

            setData(oldSummoner, 'int', 'time', 80 + getData(oldSummoner, 'int', 'time'))
            reactionEffectAndEvent(event, entity, 221, 221, 221, '延长存在时间', reaction)

        }

        ReactionEffect('kubejs:lightning', time, intensity, entity, 15)


    } else if (onCall(entity)) {

        let intensity = entity.getEffect("kubejs:call").getAmplifier()  //元素量

        let time = entity.getEffect("kubejs:call").getDuration()

        let max = entity.getAttributeValue("kubejs:call_summon")
        let health = entity.getAttributeValue("generic.max_health")

        let armor = entity.getAttributeValue("generic.armor")

        let actual = source.actual

        //tell(actuals.size())


        let heal = actual.isPlayer() ? (1 * DamageValue2(actual, "reaction3") * 0.8) : DamageValue2(actual, "reaction1")
        heal *= ((intensity - 9) * 0.05 + 1)

        let add = 0.9 + actual.getAttributeValue("kubejs:divine_call") * 0.1
        heal *= add

        let health1 = entity.isPlayer() ? 0.5 * health : 12

        let entitys1 = getFairy(entity)

        if ((!entitys1 || entitys1.size() < max) && intensity >= 10) {

            let summoner = addEntity(actual.level, actual.x, actual.y, actual.z, "terramity:green_fairy", e => {

                if (entity.isPlayer()) e.getRootData().putBoolean('load', true)//禁止等级初始化

            })

            //  summoner.getRootData().putBoolean('load', true)//禁止等级初始化

            actual.level.addFreshEntity(summoner)

            summoner.setDataValue("host", entity.stringUuid)
            //tell(summoner.getDataInt("level"))
            summoner.setMaxHealth(health1)

            summoner.setHealth(summoner.getMaxHealth())
            summoner.setDataValue("heal", heal)


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


    }else if (onEnder2(entity)) {

        let intensity = event.entity.getEffect("kubejs:ender").getAmplifier()  //元素量
        let time = event.entity.getEffect("kubejs:ender").getDuration()

        let entity=source.actual

        let add = intensity * 0.05 + 1



        if (intensity > 3) launchBullet(add, entity, 2 * Math.cos(entity.yRotO / 180 * PI), 2 * Math.sin(entity.yRotO / 180 * PI))
        if (intensity > 4) launchBullet(add, entity, 2 * Math.cos((entity.yRotO + 90) / 180 * PI), 2 * Math.sin((entity.yRotO + 90) / 180 * PI))
        if (intensity > 5) launchBullet(add, entity, 2 * Math.cos((entity.yRotO + 180) / 180 * PI), 2 * Math.sin((entity.yRotO + 180) / 180 * PI))
        if (intensity > 6) launchBullet(add, entity, 2 * Math.cos((entity.yRotO + 270) / 180 * PI), 2 * Math.sin((entity.yRotO + 270) / 180 * PI))

        if (intensity > 7) launchBullet(add, entity, 2 * Math.cos((entity.yRotO + 45) / 180 * PI), 2 * Math.sin((entity.yRotO + 45) / 180 * PI))
        if (intensity > 8) launchBullet(add, entity, 2 * Math.cos((entity.yRotO + -45) / 180 * PI), 2 * Math.sin((entity.yRotO + -45) / 180 * PI))
        if (intensity > 9) launchBullet(add, entity, 2 * Math.cos((entity.yRotO + 135) / 180 * PI), 2 * Math.sin((entity.yRotO + 135) / 180 * PI))
        if (intensity > 10) launchBullet(add, entity, 2 * Math.cos((entity.yRotO - 135) / 180 * PI), 2 * Math.sin((entity.yRotO - 135) / 180 * PI))



        if (false&&entity.isPlayer() && entity.getAttributeValue("kubejs:divine_ender2")) {
            entity.sendData("timeStagnate", {
                time: 2000 + 2000 * entity.getAttributeValue("kubejs:divine_ender2"),
                intensity: 2
            })
        }

        reactionEffectAndEvent(event, entity, 17, 84, 134, '逸散', reaction)

        //生成可以爆炸的末影之眼if (!onFire2(entity) && !onLightning2(entity) && !onIce2(entity) && !onPosion2(entity) && !onWater2(entity)) 
        ReactionEffect('kubejs:divine', time, intensity, entity, 3)

    } else {



        if (onDivine(entity)) {

            let intensity //元素量//应区分不同法术

            let max = source.actual.getAttributes().getValue('kubejs:max_divine') - 1
            if (reaction) {

                intensity = entity.getEffect('kubejs:divine').getAmplifier() + reaction

            } else {
                intensity = entity.getEffect('kubejs:divine').getAmplifier() + 1
            }//元素量


            entity.addEffect(new $potion('kubejs:divine', 200, Math.min(intensity, max), false, false)) //<==设置最大附着量 可通过解锁获得更高

        } else {
            entity.addEffect(new $potion('kubejs:divine', 200, reaction - 1, false, false))
        }
    }





















}


