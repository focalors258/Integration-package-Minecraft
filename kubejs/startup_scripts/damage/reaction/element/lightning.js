//// @ts-nocheck
/*
let cnmlgb = (entity, event) => {

    let source = event.source
    console.log(source.actual)
    //sendSubtitle(event, entity, 246, 58, 21, '引爆')//actual爆炸
    entity.invulnerableTime = 0
    source.actual.level
        .createExplosion(entity.x, entity.y, entity.z)
        .strength(1)//value?value:Math.min(5, intensity * 1 / 5)
        .damagesTerrain(false)
        .causesFire(false)
        .exploder(source.actual)
        .explode()
    //
}
*/


let LightningEffect2 = (entitys, event) => {

    //  /**@type {Internal.LivingEntity} */
    let entity = entitys

    let source = event.source

    let actual = event.source.actual

    let reaction = isLightning(event)

//tell(34)


    if (onFire2(entity)) {//超载==========================================================================

        let intensity = entity.getEffect("kubejs:fire").getAmplifier()  //元素量

        let time = entity.getEffect("kubejs:fire").getDuration()

        if (intensity >= 9) {

            reactionEffectAndEvent(event, entity, 246, 58, 21, '引爆', reaction)//actual爆炸


            let value = DamageValue2(source.actual, 'reaction3')
 //tell(value)
            entity.invulnerableTime = 0
           // console.log(source.actual)
//tell()
            source.actual.level
                .createExplosion(entity.x, entity.y, entity.z)
               
                .strength(Math.min(5,intensity * value / 25))//value?value:
                //.damagesTerrain(false)
                .causesFire(false)
                .exploder(source.actual)
                .explode()


        } else {

            reactionEffectAndEvent(event, entity, 246, 58, 21, '点火')
            if (entity.level.getBlockState(new $blockPos(entity.x, entity.y, entity.z)).block.id == 'minecraft:air') {//该位置为空气时
                entity.level.getBlock(new $blockPos(entity.x, entity.y, entity.z)).set('fire')  //<=======
            }
        }




        ReactionEffect('kubejs:fire', time, intensity, entity, 7)


    } else if (onDivine(entity)) {


        let intensity = entity.getEffect("kubejs:divine").getAmplifier()  //元素量

        let time = entity.getEffect("kubejs:divine").getDuration()

        //event.server.tell('3452')

        let oldSummoner = example(event, source.actual, 'kubejs:add_field', 15)[0]//注意 为数组

        if (intensity >= 14 && !oldSummoner) {
            let summoner = source.actual.level.createEntity('kubejs:add_field')

            summoner.setX(source.actual.x)
            summoner.setY(source.actual.y)
            summoner.setZ(source.actual.z)

            source.actual.level.addFreshEntity(summoner)

            setData(summoner, 'int', 'att', (1 + 0.1 * (intensity - 19)))

            setData(summoner, 'int', 'time', 400 * (1 + 0.1 * (intensity - 19)))

            if (!(entity.isPlayer())) setData(source.actual, 'boolean', 'goal', false)//设置阵营

            reactionEffectAndEvent(event, source.actual, 232, 184, 26, '赐福', reaction)

            ReactionEffect('kubejs:divine', time, intensity, entity, 15)
            //  source.actual.addEffect(new potion('kubejs:divine_sword_cool', 200, 0, false, false)) //攻击冷却
        } else if (oldSummoner && intensity >= 10) {

            setData(oldSummoner, 'int', 'time', 80 + getData(oldSummoner, 'int', 'time'))
            reactionEffectAndEvent(event, source.actual, 221, 221, 221, '延长存在时间', reaction)

            ReactionEffect('kubejs:divine', time, intensity, entity, 5)
        }

        ReactionEffect('kubejs:divine', time, intensity, entity, 5)


    } else if (onWater2(entity)) {//===================================================================

        let intensity = entity.getEffect("kubejs:water").getAmplifier()  //元素量

        let time = entity.getEffect("kubejs:water").getDuration()

        let att = 0

        let armor = entity.getAttributes().getValue('minecraft:generic.armor')

        if (source.actual.isPlayer()) {

            att = DamageValue2(source.actual, 'reaction1')    //source.actual.getAttributes().getValue('puffish_skills:player.melee_damage') * source.actual.getAttributes().getValue('minecraft:generic.attack_damage')

        } else {

            att = entityAtt2(source.actual) * 0.3

        }

        att = att * 20 / (20 + armor) / 3

        entity.invulnerableTime = 0

        entity.addEffect(new $potion('minecraft:slowness', 10, 255, false, false))

        if (intensity > 9) {

            reactionEffectAndEvent(event, entity, 246, 222, 33, '电击II', reaction)
            //   //是否修改受克制方
            //   let a = Client.particleEngine.createParticle('irons_spellbooks:electricity', entity.x, entity.y + 2.5, entity.z, 0, 0, 0)
            //   a.scale(5)
            let entitys = exampleOfLive(event, entity, 6, 5)

            if (entitys) {

                entitys.forEach(entitys => {

                    if (entitys == source.actual) {

                        entitys.attack(Math.pow(att, 0.7))//自己受攻击

                    } else {
                        entitys.attack(att)
                    }

                    let distance = Math.floor(entity.distanceToEntity(entitys)) + 1
                    //  console.log(distance)
                    let xGap = entity.x - entitys.x
                    let yGap = entity.y - entitys.y
                    let zGap = entity.z - entitys.z

                    for (let i = 0; i <= distance; i++) {

                        let b = i / distance

                        let a = Client.particleEngine.createParticle('irons_spellbooks:electricity',
                            entity.x - (b * xGap), entity.y + 1.5 - (b * yGap), entity.z - (b * zGap), 0, 0, 0)

                        a.scale(3)
                    }
                })
            }

        } else {

            reactionEffectAndEvent(event, entity, 246, 222, 33, '电击I', reaction)

            entity.attack(att)//是否修改受克制方

            let a = Client.particleEngine.createParticle('irons_spellbooks:electricity', entity.x, entity.y + 2.5, entity.z, 0, 0, 0)

            a.scale(5)

        }




        ReactionEffect('kubejs:water', time, intensity, entity, 4)

        //===================================================================================irons_spellbooks:acid_bubble
    } else if (onIce2(entity)) {

        let intensity = entity.getEffect("kubejs:ice").getAmplifier()  //元素量

        let time = entity.getEffect("kubejs:ice").getDuration()

        reactionEffectAndEvent(event, source.actual, 17, 84, 134, '导电', reaction)
        //source.actual.modifyAttribute('kubejs:nature_resistance', 'guifttvgxdjhkjh', -intensity * 0.005 - 0.15)

        if (intensity >= 14) {
            //entity.addEffect(new potion('kubejs:resistMinus', time, intensity, false, false))
            source.actual.addEffect(new $potion('kubejs:spellResistMinus', 10 * 20, intensity, false, false))
        } else {
            source.actual.addEffect(new $potion('kubejs:resistMinus', 10 * 20, intensity, false, false))
        }


        ReactionEffect('kubejs:ice', time, intensity, entity, 10)


    } else if (onEnder2(entity)) {//推进
        let intensity = entity.getEffect("kubejs:ender").getAmplifier()  //元素量
        let time = entity.getEffect("kubejs:ender").getDuration()
        let att = DamageValue2(entity, "reaction3") * ((intensity - 9) * 0.05 + 1) 


        if (intensity > 14 && !example(event, source.actual, 'kubejs:gravity_circle', 10)) {
            let summoner = addEntity(actual.level, actual.x, actual.y+3, actual.z, "kubejs:gravity_circle")

            summoner.setDataValue("att", att*1.2 )

            ReactionEffect('kubejs:ender', time, intensity, entity, 8)

            reactionEffectAndEvent(event, actual, 17, 84, 134, '推进', reaction)

        } else {

            let entitys = exampleData(event, actual, "load", 5)
            
               let summoner = addEntity(actual.level, actual.x, actual.y, actual.z, "kubejs:attract_circle")

            if (entitys) {
                entitys.forEach(entity => {

                    entity.deltaMovement = new Vec3(0.3 * (actual.x - entity.x), 0.3 * (actual.y - entity.y), 0.3 * (actual.z - entity.z))
                })
            }

            ReactionEffect('kubejs:ender', time, intensity, entity, 6)


            reactionEffectAndEvent(event, actual, 17, 84, 134, '吸引', reaction)



        }


    } else if (onCall(entity)) {

        let intensity = entity.getEffect("kubejs:call").getAmplifier()  //元素量

        let time = entity.getEffect("kubejs:call").getDuration()

          let max = entity.getAttributeValue("kubejs:call_summon")
        let health = entity.getAttributeValue("generic.max_health")

        let armor = entity.getAttributeValue("generic.armor")

//tell(54)

        //tell(actuals.size())

        let att = DamageValue2(entity, "reaction1") * ((intensity - 9) * 0.05 + 1) * 0.6
   let add = 0.9 + actual.getAttributeValue("kubejs:lightning_call") * 0.1
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
            summoner.setDataValue("type", "lightning")
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


    } else {//无反应 仅附着 应设定不同类型法术附着量不同&& !onPosion2(event)

        //event.server.tell(event.source.type)if (!onFire2(entity) && !onIce2(entity) && !onWater2(entity) && !onEnder2(entity))

        if (onLightning2(entity)) {


            let intensity //= entity.getEffect('kubejs:lightning').getAmplifier() + isLightning(event)//元素量//应区分不同法术

            let max = source.actual.getAttributes().getValue('kubejs:max_lightning') - 1

            if (reaction) {

                intensity = entity.getEffect('kubejs:lightning').getAmplifier() + reaction

            } else {
                intensity = entity.getEffect('kubejs:lightning').getAmplifier() + 1
            }

            entity.addEffect(new $potion('kubejs:lightning', 200, Math.min(intensity, max), false, false)) //<==设置最大附着量 可通过解锁获得更高

        } else {
            entity.addEffect(new $potion('kubejs:lightning', 200, isLightning(event) - 1, false, false))
        }

    }



























}





/*
let LightningEffect = (event) => {


    let entity = event.entity

    let source = event.source






    if (onFire(event)) {//超载==========================================================================

        let intensity = entity.getEffect("kubejs:fire").getAmplifier()  //元素量

        let time = entity.getEffect("kubejs:fire").getDuration()

        if (intensity >= 10) {


            entity.removeEffect('kubejs:fire')

            entity.addEffect(new potion('kubejs:fire', time, Math.max(intensity - 5, 0), false, false))//重置等级  //如何框选实体

            //给实体添加破甲

        } else {


            entity.removeEffect('kubejs:fire')

            if (intensity - 5 >= 0) {
                entity.addEffect(new potion('kubejs:fire', time, Math.max(intensity - 5, 0), false, false))
            }
        }



    } else if (onIce(event)) {//===================================================================

        let intensity = entity.getEffect("kubejs:ice").getAmplifier()  //元素量

        let time = entity.getEffect("kubejs:ice").getDuration()

        let att = 0

        let armor = source.actual.getAttributes().getValue('minecraft:generic.armor')

        if (entity.isPlayer()) {

            att = entity.getAttributes().getValue('puffish_skills:player.melee_damage') * entity.getAttributes().getValue('minecraft:generic.attack_damage')


        } else {

            att = entityAtt(event) * 0.3   //不应该使用entityAtt -> 为受伤者的伤害值

        }

        att = att * (1 + 0.1 * intensity) * 20 / (20 + armor)

        // event.server.tell(att)

        source.actual.attack(entity, att)

        entity.removeEffect('kubejs:ice')

        if (intensity - 4 >= 0) {
            entity.addEffect(new potion('kubejs:ice', time, Math.max(intensity - 4, 0), false, false))
        }




        //===================================================================================
    } else if (onWater(event)) {

        let intensity = entity.getEffect("kubejs:water").getAmplifier()  //元素量

        let time = entity.getEffect("kubejs:water").getDuration()












    } else if (!onFire(event) && !onIce(event) && !onPosion(event) && !onWater(event)) {//无反应 仅附着 应设定不同类型法术附着量不同

        //event.server.tell(event.source.type)

        if (onLightning(event)) {

            let intensity //= entity.getEffect('kubejs:lightning').getAmplifier() + isLightning(event)//元素量//应区分不同法术

            let max= source.actual.getAttributes().getValue('kubejs:maxLightning')-1

            if ( isLightning(event)) {

                intensity = entity.getEffect('kubejs:lightning').getAmplifier() +isLightning(event)

            } else {
                intensity = entity.getEffect('kubejs:lightning').getAmplifier() + 1
            }//元素量//应区分不同法术




            entity.addEffect(new potion('kubejs:lightning', 200, Math.min(intensity, max), false, false)) //<==设置最大附着量 可通过解锁获得更高

        } else {
            entity.addEffect(new potion('kubejs:lightning', 200, 0, false, false))
        }

    }



























}*/