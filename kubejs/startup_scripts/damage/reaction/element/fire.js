

/*
let FireEffect = (event) => {


    let entity = event.entity

    let source = event.source





    if (onIce(event)) {//=========================================================

        let intensity = event.entity.getEffect("kubejs:ice").getAmplifier()  //元素量

        let time = event.entity.getEffect("kubejs:ice").getDuration()





        entity.addEffect(new potion('kubejs:water', time, intensity, false, false))//<---注意  赋予水属性后 如不在后面的if判断中不加else  则还会判断一次



        entity.removeEffect('kubejs:ice')

        event.setAmount(event.amount * (1.5 + 0.025 * intensity))

    } else if (onWater(event)) {//=================================================


        let intensity = event.entity.getEffect("kubejs:water").getAmplifier()  //元素量

        let time = event.entity.getEffect("kubejs:water").getDuration()


        if (intensity > 9) {//蒸发  产生高温水汽 (仅对受反应的实体添加nbt)


            let att = 0

            if (isPlayer(event)) {//攻击者为玩家

                att = Damage(event, 'reaction1') * (1 + intensity * 0.1)

               // entity.getRootData().putString('actual',source.actual.uuid)//测试

            } else {//攻击者为实体
                // let i = getActualIndex('minecraft:generic.attack_damage', event)  //获取攻击者伤害
                // let multiple = 1 + event.source.actual.nbt["Attributes"][i]["Modifiers"][0]["Amount"]
                att = 0.5 * (1 + intensity * 0.1) * actualAtt(event)
            }

            entity.getRootData().putInt('steamAtt', att)


           entity.addEffect(new potion('kubejs:steam', 100, 0, false, false))//<========无法执行
            //entity.addEffect(new potion('kubejs:water', time, intensity, false, false))

        }
 


        entity.removeEffect('kubejs:water')

        if (intensity - 4 >= 0) {
            entity.addEffect(new potion('kubejs:water', time, Math.max(intensity - 4, 0), false, false))
        }

        event.setAmount(event.amount * (0.8 - 0.015 * intensity))

        //=============================================
    } else if (onLightning(event)) {

        let intensity = event.entity.getEffect("kubejs:lightning").getAmplifier()  //元素量

        let time = event.entity.getEffect("kubejs:lightning").getDuration()

        entity.removeEffect('kubejs:lightning')

        if (intensity - 5 >= 0) {
            entity.addEffect(new potion('kubejs:lightning', time, Math.max(intensity - 5, 0), false, false))
        }


    } else if (!onLightning(event) && !onIce(event) && !onPosion(event) && !onWater(event)) {//无反应 仅附着 应设定不同类型法术附着量不同

        if (onFire(event)) {

            let intensity = entity.getEffect('kubejs:fire').getAmplifier() + isFire(event)//元素量//应区分不同法术

            entity.addEffect(new potion('kubejs:fire', 200, Math.min(intensity, 20))) //<==设置最大附着量 可通过解锁获得更高

        } else {
            entity.addEffect(new potion('kubejs:fire', 200, 0))
        }
    }



}
*/

let FireEffect345654745634 = (entitys, event) => {//无增幅 扩散专用


    let entity = entitys

    let source = event.source

    let reactionTheMagic = source.actual.getAttributes().getValue('kubejs:reaction_magic')

    let reaction = isFire(event)

    if (onEnder2(entity)) {
        //console.log('引力场')
        //此处为引力场
        let intensity = entity.getEffect("kubejs:ender").getAmplifier()  //元素量

        let time = entity.getEffect("kubejs:ender").getDuration()



        if (intensity >= 4) {//10格内不能有该实体

            if (!example(event, entity, 'kubejs:ender_gravity', 10)) {//此处原为a
                let summoner = entity.level.createEntity('kubejs:ender_gravity')

                summoner.setX(entity.x)
                summoner.setY(entity.y)
                summoner.setZ(entity.z)

                entity.level.addFreshEntity(summoner)

                summoner.getRootData().putInt('time', 300)//250 + 25 * intensity

                summoner.getRootData().putInt('gravity_height', Math.min(intensity - 9, 20))//跳跃高度设置

                if (source.actual.isPlayer() && intensity >= 14) {//玩家召唤

                    reactionEffectAndEvent(event, entity, 180, 29, 145, '末影喷涌', reaction)

                    setBooleanData(summoner, 'goal', true)//阵营为玩家

                    setIntData(summoner, 'att', ((intensity - 14) * 0.1 + 1) * 3 * DamageValue2(source.actual, 'reaction2'))//给服务端实体添加nbt


                    //Client.player.tell(DamageValue2(source.actual, 'reaction2'))

                } else if (intensity >= 14) {

                    reactionEffectAndEvent(event, entity, 180, 29, 145, '末影喷涌', reaction)

                    setBooleanData(summoner, 'goal', false)

                    setIntData(summoner, 'att', ((intensity - 14) * 0.1 + 1) * 3 * actualAtt(event))

                } else {

                    reactionEffectAndEvent(event, entity, 180, 29, 145, '末影抬升', reaction)


                }


                //event.level.runCommandSilent(`/execute as ${id} at ${id} run summon aether:hammer_projectile ~ ~3 ~`)
            } else {

                //延长存在时间
            }
            // event.server.tell('34452')
        }



        ReactionEffect('kubejs:ender', time, intensity, entity, 10)

    } else if (onIce2(entity)) {//=========================================================
        console.log('融化')
        let intensity = entity.getEffect("kubejs:ice").getAmplifier()  //元素量

        let time = entity.getEffect("kubejs:ice").getDuration()

        //console.log('融化1')
        if (intensity >= 14) {



            // console.log('融化2'+'   '+entity.class)
            // console.log('融化2'+'   '+entity.level)
            if (entity.level.getBlockState(new $blockPos(entity.x, entity.y, entity.z)).block.id == 'minecraft:air') {//该位置为空气时
                // console.log('融化3')
                entity.level.getBlock(new $blockPos(entity.x, entity.y, entity.z)).set('water')  //<=======
            }
        }
        // console.log('融化3.5')
        reactionEffectAndEvent(event, source.actual, 29, 255, 255, '融化', reaction)
        // console.log('融化4')

        entity.removeEffect('kubejs:ice')
        // console.log('融化5')
        entity.addEffect(new $potion('kubejs:water', time, intensity, false, false))

        //  console.log('融化6')

        // event.setAmount(event.amount * (1.5 + 0.025 * intensity) * (1 + reactionTheMagic))
        //console.log('融化7')
    } else if (onLightning2(entity)) {
        // console.log('爆炸')
        let intensity = event.entity.getEffect("kubejs:lightning").getAmplifier()  //元素量

        let time = event.entity.getEffect("kubejs:lightning").getDuration()


        if (intensity >= 9) {
            //  console.log('爆炸1')

            let value = DamageValue2(entity, 'reaction3')

            entity.level
                .createExplosion(source.actual.x, source.actual.y, source.actual.z)//攻击者爆炸DamageValue2(entity, 'reaction3')
                .strength(Math.min(5, intensity * value / 5))//Math.min(5,intensity *  / 5)
                //.damagesTerrain(false)
                .causesFire(false)
                .exploder(entity)
                .explode()
            //  console.log('爆炸2')
            source.actual.invulnerableTime = 0//重置无敌时间

            reactionEffectAndEvent(event, source.actual, 246, 58, 21, '引爆', reaction)


        } else {

            reactionEffectAndEvent(event, source.actual, 246, 58, 21, '点火', reaction)

            if (entity.level.getBlockState(new $blockPos(source.actual.x, source.actual.y, source.actual.z)).block.id == 'minecraft:air') {//该位置为空气时
                entity.level.getBlock(new $blockPos(source.actual.x, source.actual.y, source.actual.z)).set('fire')  //<=======
            }

        }


        ReactionEffect('kubejs:lightning', time, intensity, entity, 7)

    } else if (onWater2(entity)) {//=================================================if (!onEnder2(entity) && !onLightning2(entity) && !onIce2(entity) && !onWater2(entity)) 
        //  console.log('蒸发')
        let intensity = entity.getEffect("kubejs:water").getAmplifier()  //元素量

        let time = entity.getEffect("kubejs:water").getDuration()
        //  console.log('蒸发1')

        reactionEffectAndEvent(event, entity, 213, 232, 232, '蒸发', reaction)

        if (intensity >= 9) {

            let att = 0

            if (source.actual.isPlayer()) {//攻击者为玩家trueisPlayer(event)
                //      console.log('蒸发2')
                att = DamageValue2(source.actual, 'reaction1') * (1 + (intensity - 9) * 0.1) * 0.5//持续伤害数值

                entity.getRootData().putString('actual', source.actual.uuid)

            } else {
                //     console.log('蒸发3')
                att = actualAtt(event) * (1 + (intensity - 9) * 0.1) * 0.5
            }
            //   console.log('蒸发4')
            entity.getRootData().putInt('steamAtt', att)

            entity.getRootData().putString('steamSource', source.actual.stringUuid)

            entity.addEffect(new $potion('kubejs:steam', 150, 0, false, false))
            //    console.log('蒸发5')
        }
        //  console.log('蒸发6')
        //event.setAmount(event.amount * (0.8 - 0.015 * intensity) * (1 + reactionTheMagic))



        ReactionEffect('kubejs:water', time, intensity, entity, 4)

        //=============================================
    } else if (onCall(entity)) {

        let intensity = entity.getEffect("kubejs:call").getAmplifier()  //元素量

        let time = entity.getEffect("kubejs:call").getDuration()

        let max = 2
        let health = entity.getAttributeValue("generic.max_health")

        let armor = entity.getAttributeValue("generic.armor")

        let actual = source.actual

        //tell(actuals.size())

        let att = DamageValue2(entity, "reaction1") * ((intensity - 9) * 0.05 + 1) * 0.6

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
            summoner.setDataValue("type", "fire")
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


    } else {//无反应 仅附着 应设定不同类型法术附着量不同 && !onPosion2(entity) 
        //   console.log('无')
        if (onFire2(entity)) {

            let max = source.actual.getAttributes().getValue('kubejs:max_fire') - 1
            let intensity

            if (reaction) {

                intensity = entity.getEffect('kubejs:fire').getAmplifier() + reaction

            } else {
                intensity = entity.getEffect('kubejs:fire').getAmplifier() + 1
            }//元素量//应区分不同法术


            entity.addEffect(new $potion('kubejs:fire', 200, Math.min(intensity, max), false, false)) //<==设置最大附着量 可通过解锁获得更高

        } else {
            entity.addEffect(new $potion('kubejs:fire', 200, reaction - 1, false, false))
        }
    }




























}



let FireEffect2 = (entitys, event) => {

    /**@type {Internal.LivingEntity}  */
    let entity = entitys

    let source = event.source

    let reactionTheMagic = source.actual.getAttributes().getValue('kubejs:reaction_magic')

    let reaction = isFire(event)

    if (onDivine(entity)) {//最大可超过20



        let intensity = entity.getEffect("kubejs:divine").getAmplifier()  //元素量

        let time = entity.getEffect("kubejs:divine").getDuration()

        //event.server.tell('3452')
        if (intensity >= 14 && !(entity.getEffect('kubejs:divine_sword_cool'))) {
            let summoner = source.actual.level.createEntity('kubejs:divine_sword')

            summoner.setX(source.actual.x)
            summoner.setY(source.actual.y)
            summoner.setZ(source.actual.z)

            source.actual.level.addFreshEntity(summoner)

            setData(summoner, 'double', 'att', (1 + 0.05 * (intensity - 14)) * DamageValue2(entity, 'reaction2') * 5)

            setData(source.actual, 'boolean', 'beHit_divine', true)//指定攻击
            setData(summoner, 'int', 'time', 100)
            setData(summoner, 'string', 'host', entity.stringUuid)

            reactionEffectAndEvent(event, source.actual, 255, 250, 133, '神圣冲击', reaction)


            entity.addEffect(new $potion('kubejs:divine_sword_cool', 200, 0, false, false)) //攻击冷却if (!onEnder2(entity) && !onLightning2(entity) && !onIce2(entity) && !onWater2(entity)) 
        }

        ReactionEffect('kubejs:divine', time, intensity, entity, 8)

    } else if (onEnder2(entity)) {
        //console.log('引力场')
        //此处为引力场
        let intensity = entity.getEffect("kubejs:ender").getAmplifier()  //元素量

        let time = entity.getEffect("kubejs:ender").getDuration()



        if (intensity >= 4) {//10格内不能有该实体

            if (!example(event, entity, 'kubejs:ender_gravity', 10)) {//此处原为a
                let summoner = entity.level.createEntity('kubejs:ender_gravity')

                summoner.setX(entity.x)
                summoner.setY(entity.y)
                summoner.setZ(entity.z)

                entity.level.addFreshEntity(summoner)

                summoner.getRootData().putInt('time', 300)//250 + 25 * intensity

                summoner.getRootData().putInt('gravity_height', Math.min(intensity - 9, 20))//跳跃高度设置

                if (source.actual.isPlayer() && intensity >= 14) {//玩家召唤

                    reactionEffectAndEvent(event, entity, 180, 29, 145, '末影喷涌', reaction)

                    setBooleanData(summoner, 'goal', true)//阵营为玩家

                    setIntData(summoner, 'att', ((intensity - 14) * 0.1 + 1) * 2.5 * DamageValue2(source.actual, 'reaction2'))//给服务端实体添加nbt


                    //Client.player.tell(DamageValue2(source.actual, 'reaction2'))

                } else if (intensity >= 14) {

                    reactionEffectAndEvent(event, entity, 180, 29, 145, '末影喷涌', reaction)

                    setBooleanData(summoner, 'goal', false)

                    setIntData(summoner, 'att', ((intensity - 14) * 0.1 + 1) * 2.5 * actualAtt(event))

                } else {

                    reactionEffectAndEvent(event, entity, 180, 29, 145, '末影抬升', reaction)


                }


                //event.level.runCommandSilent(`/execute as ${id} at ${id} run summon aether:hammer_projectile ~ ~3 ~`)
            } else {

                //延长存在时间
            }
            // event.server.tell('34452')
        }



        ReactionEffect('kubejs:ender', time, intensity, entity, 10)

    } else if (onIce2(entity)) {//=========================================================
        // console.log('融化')
        let intensity = entity.getEffect("kubejs:ice").getAmplifier()  //元素量

        let time = entity.getEffect("kubejs:ice").getDuration()

        //console.log('融化1')
        if (intensity >= 14) {



            // console.log('融化2'+'   '+entity.class)
            // console.log('融化2'+'   '+entity.level)
            if (entity.level.getBlockState(new $blockPos(entity.x, entity.y, entity.z)).block.id == 'minecraft:air') {//该位置为空气时
                // console.log('融化3')

                entity.level.getBlock(new $blockPos(entity.x, entity.y, entity.z)).set('water')  //<=======

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
        // console.log('融化3.5')
        reactionEffectAndEvent(event, source.actual, 29, 255, 255, '融化', reaction)
        // console.log('融化4')

        entity.removeEffect('kubejs:ice')
        // console.log('融化5')
        entity.addEffect(new $potion('kubejs:water', time, intensity, false, false))

        //  console.log('融化6')

        event.setAmount(event.amount * (1.5 + 0.025 * intensity) * (1 + reactionTheMagic))
        //console.log('融化7')
    } else if (onLightning2(entity)) {
        // console.log('爆炸')
        let intensity = event.entity.getEffect("kubejs:lightning").getAmplifier()  //元素量

        let time = event.entity.getEffect("kubejs:lightning").getDuration()


        if (intensity >= 9) {
            //  console.log('爆炸1')

            let value = DamageValue2(entity, 'reaction3')

            entity.level
                .createExplosion(source.actual.x, source.actual.y, source.actual.z)//攻击者爆炸DamageValue2(entity, 'reaction3')
                .strength(Math.min(5, intensity * value / 25))//Math.min(5,intensity *  / 5)
                .causesFire(false)
                .exploder(entity)
                .explode()
            //  console.log('爆炸2')
            source.actual.invulnerableTime = 0//重置无敌时间

            reactionEffectAndEvent(event, source.actual, 246, 58, 21, '引爆', reaction)


        } else {

            reactionEffectAndEvent(event, source.actual, 246, 58, 21, '点火', reaction)

            if (entity.level.getBlockState(new $blockPos(source.actual.x, source.actual.y, source.actual.z)).block.id == 'minecraft:air') {//该位置为空气时
                entity.level.getBlock(new $blockPos(source.actual.x, source.actual.y, source.actual.z)).set('fire')  //<=======
            }

        }


        ReactionEffect('kubejs:lightning', time, intensity, entity, 7)

    } else if (onWater2(entity)) {//=================================================
        //  console.log('蒸发')
        let intensity = entity.getEffect("kubejs:water").getAmplifier()  //元素量

        let time = entity.getEffect("kubejs:water").getDuration()
        //  console.log('蒸发1')

        reactionEffectAndEvent(event, entity, 213, 232, 232, '蒸发', reaction)

        if (intensity >= 9) {

            let att = 0

            if (source.actual.isPlayer()) {//攻击者为玩家trueisPlayer(event)
                //      console.log('蒸发2')
                att = DamageValue2(source.actual, 'reaction1') * (1 + (intensity - 9) * 0.05) * 0.5//持续伤害数值

                entity.getRootData().putString('actual', source.actual.uuid)

            } else {
                //     console.log('蒸发3')
                att = actualAtt(event) * (1 + (intensity - 9) * 0.05) * 0.5
            }
            
          //  tell(3453+att )
            //   console.log('蒸发4')
            entity.getRootData().putInt('steamAtt', att)

            entity.getRootData().putString('steamSource', source.actual.stringUuid)

            entity.addEffect(new $potion('kubejs:steam', 150, 0, false, false))
            //    console.log('蒸发5')
        }
        //  console.log('蒸发6')
        event.setAmount(event.amount * (0.8 - 0.015 * intensity) * (1 + reactionTheMagic))



        ReactionEffect('kubejs:water', time, intensity, entity, 4)

        //=============================================
    } else if (onCall(entity)) {

        let intensity = entity.getEffect("kubejs:call").getAmplifier()  //元素量

        let entit = entity

        let health = entity.getAttributeValue("generic.max_health")

        let armor = entity.getAttributeValue("generic.armor")

        let max = entity.getAttributeValue("kubejs:call_summon")

        let actual = source.actual

        let time = entity.getEffect("kubejs:call").getDuration()
        //tell(entitys.size())

        let att = DamageValue2(entit, "reaction1") * ((intensity - 9) * 0.05 + 1)
        let add = 0.9 + actual.getAttributeValue("kubejs:fire_call") * 0.1
        att *= add
        let Fairy = getFairy(entit)

        let health1 = entit.isPlayer() ? 0.5 * health : 12


        if ((!Fairy || Fairy.size() < max) && intensity >= 10) {

            let summoner = addEntity(actual.level, actual.x, actual.y, actual.z, "terramity:pink_fairy", entity => {

                if (entit.isPlayer()) entity.getRootData().putBoolean('load', true)//禁止等级初始化

            })


            actual.level.addFreshEntity(summoner)

            summoner.setDataValue("host", entity.stringUuid)
            summoner.setMaxHealth(health1)
            summoner.setHealth(summoner.getMaxHealth())
            summoner.setDataValue("att", att)
            summoner.setDataValue("type", "fire")
            summoner.setDataValue("time", 1200)

            //tell(summoner.getDataInt("time"))
            summoner.setAttributeBaseValue("generic.armor", 0.8 * armor)

            ReactionEffect('kubejs:fire', time, intensity, actual, 6)

            reactionEffectAndEvent(event, actual, 17, 84, 134, '召唤', reaction)

        } else if (Fairy) {

            /**@type {Internal.LivingEntity} */
            let entity1 = Fairy[0]


            if (entity1) {
                entity1.heal(0.1 * entity1.getMaxHealth() * ((intensity) * 0.1 + 1))

                entity1.setDataValue("time", 1200 + entity1.age)//重置时间
                tell(3)
                reactionEffectAndEvent(event, entity1, 17, 84, 134, '治愈', reaction)
            }
            ReactionEffect('kubejs:call', time, intensity, entity, 3)



        }


    } else {//无反应 仅附着 应设定不同类型法术附着量不同 && !onPosion2(entity) 
        //   console.log('无')
        if (onFire2(entity)) {

            let max = source.actual.getAttributes().getValue('kubejs:max_fire') - 1
            let intensity

            if (reaction) {

                intensity = entity.getEffect('kubejs:fire').getAmplifier() + reaction

            } else {
                intensity = entity.getEffect('kubejs:fire').getAmplifier() + 1
            }//元素量//应区分不同法术


            entity.addEffect(new $potion('kubejs:fire', 200, Math.min(intensity, max), false, false)) //<==设置最大附着量 可通过解锁获得更高

        } else {
            entity.addEffect(new $potion('kubejs:fire', 200, reaction - 1, false, false))
        }
    }




























}