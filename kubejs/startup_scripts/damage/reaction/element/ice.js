

/*
let IceEffect = (event) => {//(2号为自然法术专用)




    let entity = event.entity

    let source = event.source


    if (onWater(event)) {

        let intensity = event.entity.getEffect("kubejs:water").getAmplifier()  //元素量

        let time = event.entity.getEffect("kubejs:water").getDuration()

        entity.removeEffect('kubejs:water')


        if (!event.entity.getEffect("mowziesmobs:frozen")) {
            entity.addEffect(new potion('mowziesmobs:frozen', 20 * (intensity * 0.4 + 2), 0, false, false)) //mow更多boss的冻结效果
        }

    } else if(onEnder(event)){
        let intensity = event.entity.getEffect("kubejs:ender").getAmplifier()  //元素量

        let time = event.entity.getEffect("kubejs:ender").getDuration()


        if (intensity - 5 >= 0) {
            entity.addEffect(new potion('kubejs:ender', time, Math.max(intensity - 5, 0), false, false))
        }

    }else if (!onEnder(event)&&!onLightning(event) && !onFire(event) && !onPosion(event) && !onWater(event)) {//无反应 仅附着 应设定不同类型法术附着量不同

        // event.server.tell('5')

        if (onIce(event)) {
            //event.server.tell('5')
            let intensity = entity.getEffect('kubejs:ice').getAmplifier() + 1//+ isIce(event)//元素量//应区分不同法术

            entity.addEffect(new potion('kubejs:ice', 200, Math.min(intensity, 20))) //<==设置最大附着量 可通过解锁获得更高
            //event.server.tell('5')
        } else {
            entity.addEffect(new potion('kubejs:ice', 200, 0))
        }

    }



}
*/



let IceEffect2 = (entitys, event) => {

    /**@type {Internal.LivingEntity} */
    let entity = entitys

    let source = event.source

    let actual = event.source.actual

    let reaction = isIce(event)

    if (onFire2(entity)) {//=========================================================融化  给与水附着

        let intensity = entity.getEffect("kubejs:fire").getAmplifier()  //元素量

        let reactionTheMagic = source.actual.getAttributes().getValue('kubejs:reaction_magic')

        let time = entity.getEffect("kubejs:fire").getDuration()

        reactionEffectAndEvent(event, source.actual, 29, 255, 255, '融化', reaction)

        WaterEffect3(event, entity)//仅削减其他附着
        //给与攻击者附着

        if (intensity >= 14) {//融化
            if (entity.level.getBlockState(new $blockPos(source.actual.x, source.actual.y, source.actual.z)).block.id == 'minecraft:air') {//该位置为空气时
                entity.level.getBlock(new $blockPos(source.actual.x, source.actual.y, source.actual.z)).set('water')  //<=======


                let data = Utils.server.getPersistentData()
                if (!data.contains("timingBlockHandle")) {
                    $TagUtils.putCompound("timingBlockHandle", Utils.server.getPersistentData(), {})
                }

                /**@type {Internal.CompoundTag} */
                let tag = data.get("timingBlockHandle")
                if (tag.size() < 32) $TagUtils.put(String($uuid.randomUUID()),
                    data.get("timingBlockHandle"), { pos: [entity.x, entity.y, entity.z], time: Utils.server.tickCount + 10 })


            }
        }


        // sendSubtitle(event, entity, 40, 155, 240, '融化')



        event.setAmount(event.amount * (1.5 + 0.025 * intensity) * (1 + reactionTheMagic))

        ReactionEffect('kubejs:fire', time, intensity, entity, 2)



    } else if (onCall(entity)) {

        let intensity = entity.getEffect("kubejs:call").getAmplifier()  //元素量

        let time = entity.getEffect("kubejs:call").getDuration()

        let max = entity.getAttributeValue("kubejs:call_summon")
        let health = entity.getAttributeValue("generic.max_health")

        let armor = entity.getAttributeValue("generic.armor")



        //tell(actuals.size())

        let att = DamageValue2(entity, "reaction1") * ((intensity - 9) * 0.05 + 1) * 0.6
        let add = 0.9 + actual.getAttributeValue("kubejs:ice_call") * 0.1
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
            summoner.setDataValue("type", "ice")
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




        let intensity = entity.getEffect("kubejs:divine").getAmplifier()  //元素量

        let time = entity.getEffect("kubejs:divine").getDuration()

        /**@type {Internal.LivingEntity} */
        let actual = source.actual

        if (intensity >= 4) {


            let armor = actual.getAttributes().getValue("minecraft:generic.armor")//根据防御力获得护盾



            if (actual.isPlayer()) {//玩家使用防御力计算护盾
                actual.addEffect(new $potion('kubejs:absorption', 600, DamageValue2(actual, 'reaction3') * (armor * intensity / 30), false, false)) //攻击冷却

            } else {//怪物使用等级倍率和防御力计算(armor * intensity / 30)
                //Client.player.tell(entityHealth(source.actual))
                actual.addEffect(new $potion('kubejs:absorption', 600, entityHealth(actual) * (armor * intensity / 30), false, false)) //攻击冷却

            }


        }
        reactionEffectAndEvent(event, actual, 149, 189, 214, '守护', reaction)

        ReactionEffect('kubejs:divine', time, intensity, entity, 5)

    } else if (onEnder(event)) {
        let intensity = event.entity.getEffect("kubejs:ender").getAmplifier()  //元素量

        let time = event.entity.getEffect("kubejs:ender").getDuration()

        reactionEffectAndEvent(event, entity, 97, 47, 232, '凝固', reaction)


        if (intensity >= 4) {

            if (!example(event, entity, 'kubejs:ender_eye', 10)) {//此处原为a
                let summoner = entity.level.createEntity('kubejs:ender_eye')

                summoner.setX(entity.x)
                summoner.setY(entity.y + 3.5)
                summoner.setZ(entity.z)

                entity.level.addFreshEntity(summoner)

                summoner.getRootData().putInt(time, 250 + 25 * intensity)
                // event.level.runCommandSilent(`/execute as ${id} at ${id} run summon aether:hammer_projectile ~ ~3 ~`)
            }
        }




        ReactionEffect('kubejs:ender', time, intensity, entity, 5)

    } else if (onWater2(entity)) {

        let intensity = entity.getEffect("kubejs:water").getAmplifier()  //元素量

        let time = entity.getEffect("kubejs:water").getDuration()

        reactionEffectAndEvent(event, entity, 118, 230, 255, '冰冻', reaction)


        if (!entity.getEffect("mowziesmobs:frozen")) {
            entity.addEffect(new $potion('mowziesmobs:frozen', 20 * (intensity * 0.4 + 2), 0, false, false)) //mow更多boss的冻结效果
        }


        entity.removeEffect('kubejs:water')//冻结反应不保留水  直接消耗全部


        /*
                entity.removeEffect('kubejs:ice')
        
                if (intensity - 5 >= 0) {
                    entity.addEffect(new potion('kubejs:ice', time, Math.max(intensity - 5, 0), false, false))
                }
        */

    } else if (onLightning2(entity)) {//减抗

        let intensity = entity.getEffect("kubejs:lightning").getAmplifier()  //元素量

        let time = entity.getEffect("kubejs:lightning").getDuration()


        reactionEffectAndEvent(event, entity, 17, 84, 134, '导电', reaction)

        // entity.modifyAttribute('kubejs:nature_resistance', 'guifttvgxdjhkjh', -intensity * 0.005 - 0.15)

        if (intensity >= 14) {
            //entity.addEffect(new potion('kubejs:resistMinus', time, intensity, false, false))
            entity.addEffect(new $potion('kubejs:spellResistMinus', 20 * 10, intensity, false, false))
        } else {
            entity.addEffect(new $potion('kubejs:resistMinus', 20 * 10, intensity, false, false))
        }
        //.modifyAttribute('minecraft:generic.attack_damage', '4tyrt6yrey64et', -0.01, 'multiply_base')
        //event.setAmount(event.amount * (1.5 + 0.025 * intensity))



        ReactionEffect('kubejs:lightning', time, intensity, entity, 10)


    } else {//无反应 仅附着 应设定不同类型法术附着量不同==>自然法术专用 && !onPosion(event) 



        if (onIce2(entity)) {

            let max = source.actual.getAttributes().getValue('kubejs:max_ice') - 1
            let intensity

            if (reaction) {

                intensity = entity.getEffect('kubejs:ice').getAmplifier() + reaction

            } else {
                intensity = entity.getEffect('kubejs:ice').getAmplifier() + 1
            }//元素量//应区分不同法术if (!onLightning2(entity) && !onFire2(entity) && !onWater2(entity))


            entity.addEffect(new $potion('kubejs:ice', 200, Math.min(intensity, max), false, false)) //<==设置最大附着量 可通过解锁获得更高


        } else {


            entity.addEffect(new $potion('kubejs:ice', 200, isIce(event), false, false))


        }

    }














}









let IceEffect3356435235357675465464 = (entitys, event) => {//无增幅


    let entity = entitys

    let source = event.source

    let reaction = isIce(event)

    if (onFire2(entity)) {//=========================================================融化  给与水附着

        let intensity = entity.getEffect("kubejs:fire").getAmplifier()  //元素量

        let reactionTheMagic = source.actual.getAttributes().getValue('kubejs:reaction_magic')

        let time = entity.getEffect("kubejs:fire").getDuration()

        reactionEffectAndEvent(event, source.actual, 29, 255, 255, '融化', reaction)

        WaterEffect3(event, entity)//仅削减其他附着
        //给与攻击者附着

        if (intensity >= 14) {//融化
            if (entity.level.getBlockState(new $blockPos(source.actual.x, source.actual.y, source.actual.z)).block.id == 'minecraft:air') {//该位置为空气时
                entity.level.getBlock(new $blockPos(source.actual.x, source.actual.y, source.actual.z)).set('water')  //<=======
            }
        }


        // sendSubtitle(event, entity, 40, 155, 240, '融化')



        // event.setAmount(event.amount * (1.5 + 0.025 * intensity) * (1 + reactionTheMagic))

        ReactionEffect('kubejs:fire', time, intensity, entity, 2)



    } else if (onEnder(event)) {
        let intensity = event.entity.getEffect("kubejs:ender").getAmplifier()  //元素量

        let time = event.entity.getEffect("kubejs:ender").getDuration()

        reactionEffectAndEvent(event, entity, 97, 47, 232, '凝固', reaction)


        if (intensity >= 4) {

            if (!example(event, entity, 'kubejs:ender_eye', 10)) {//此处原为a
                let summoner = entity.level.createEntity('kubejs:ender_eye')

                summoner.setX(entity.x)
                summoner.setY(entity.y + 3.5)
                summoner.setZ(entity.z)

                entity.level.addFreshEntity(summoner)

                summoner.getRootData().putInt(time, 250 + 25 * intensity)
                // event.level.runCommandSilent(`/execute as ${id} at ${id} run summon aether:hammer_projectile ~ ~3 ~`)
            }
        }




        ReactionEffect('kubejs:ender', time, intensity, entity, 5)

    } else if (onWater2(entity)) {

        let intensity = entity.getEffect("kubejs:water").getAmplifier()  //元素量

        let time = entity.getEffect("kubejs:water").getDuration()

        reactionEffectAndEvent(event, entity, 118, 230, 255, '冰冻', reaction)


        if (!entity.getEffect("mowziesmobs:frozen")) {
            entity.addEffect(new $potion('mowziesmobs:frozen', 20 * (intensity * 0.4 + 2), 0, false, false)) //mow更多boss的冻结效果
        }


        entity.removeEffect('kubejs:water')//冻结反应不保留水  直接消耗全部


        /*
                entity.removeEffect('kubejs:ice')
        
                if (intensity - 5 >= 0) {
                    entity.addEffect(new potion('kubejs:ice', time, Math.max(intensity - 5, 0), false, false))
                }
        */

    } else if (onLightning2(entity)) {//减抗

        let intensity = entity.getEffect("kubejs:lightning").getAmplifier()  //元素量

        let time = entity.getEffect("kubejs:lightning").getDuration()


        reactionEffectAndEvent(event, entity, 17, 84, 134, '导电', reaction)

        // entity.modifyAttribute('kubejs:nature_resistance', 'guifttvgxdjhkjh', -intensity * 0.005 - 0.15)

        if (intensity >= 14) {
            //entity.addEffect(new potion('kubejs:resistMinus', time, intensity, false, false))
            entity.addEffect(new $potion('kubejs:spellResistMinus', 10, intensity, false, false))
        } else {
            entity.addEffect(new $potion('kubejs:resistMinus', 10, intensity, false, false))
        }
        //.modifyAttribute('minecraft:generic.attack_damage', '4tyrt6yrey64et', -0.01, 'multiply_base')
        //event.setAmount(event.amount * (1.5 + 0.025 * intensity))



        ReactionEffect('kubejs:lightning', time, intensity, entity, 10)


    } else {//无反应 仅附着 应设定不同类型法术附着量不同==>自然法术专用 && !onPosion(event) 



        if (onIce2(entity)) {

            let max = source.actual.getAttributes().getValue('kubejs:max_ice') - 1
            let intensity

            if (reaction) {

                intensity = entity.getEffect('kubejs:ice').getAmplifier() + reaction

            } else {
                intensity = entity.getEffect('kubejs:ice').getAmplifier() + 1
            }//元素量//应区分不同法术if (!onLightning2(entity) && !onFire2(entity) && !onWater2(entity)) 


            entity.addEffect(new $potion('kubejs:ice', 200, Math.min(intensity, max), false, false)) //<==设置最大附着量 可通过解锁获得更高


        } else {


            entity.addEffect(new $potion('kubejs:ice', 200, isIce(event), false, false))


        }

    }














}