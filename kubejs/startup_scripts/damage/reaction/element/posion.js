let PoisonEffect = (event) => {//使用毒伤害攻击


    let entity = event.entity

    let source = event.source


    let intensity //元素量

    let time   // event.entity.getEffect("minecraft:poison").getDuration()

    let effectName


    // let reactionTheMagic = source.actual.getAttributes().getValue('kubejs:reaction_magic')
    let att = 0


    if (onFire2(entity) || onIce2(entity) || onLightning2(entity) || onWater2(entity)) {//有自然附着
        reactionEffectAndEvent(event, entity, 30, 128, 47, '溅射', 1)//有可能会
        if (source.actual.isPlayer()) {

            att = DamageValue(event, 'reaction1') * 0.3

        } else {

            att = entityAtt2(source.actual) * 0.3

        }

        // sendSubtitle(event, entity, 29, 255, 255, '融化')
        // sendSubtitle(event, entity, 29, 25, 255, '融化')
        //console.log(4634543634)





 


    entity.level.getEntitiesWithin(AABB.of(
        entity.x - 4,
        entity.y - 1,
        entity.z - 4,
        entity.x + 4,
        entity.y + 3.5,
        entity.z + 4)).forEach(entitys => {


            //entitys.attack(source.actual)
            if ( entitys != source.actual) {

                if (entitys.isLiving()) {

                    entitys.invulnerableTime = 0

                    if (onFire2(entity)) {

                        //FireEffect3(entitys, event)//无增幅 扩散专用
                        //effectName = 'kubejs:fire'
                        attack(source.actual, entitys, ReactionTypes.fire, att, 1)

                      

                        intensity = event.entity.getEffect("kubejs:fire").getAmplifier()
                        time = event.entity.getEffect("kubejs:fire").getDuration()

                        ReactionEffect('kubejs:fire', time, intensity, entity, 1)
                    } else if (onIce2(entity)) {

                        // IceEffect3(entitys, event)//无增幅 扩散专用
                        //intensity = event.entity.getEffect("kubejs:ice").getAmplifier()
                        //effectName = 'kubejs:ice'
                        attack(source.actual, entitys, ReactionTypes.ice, att, 1)


                        intensity = event.entity.getEffect("kubejs:ice").getAmplifier()
                        time = event.entity.getEffect("kubejs:ice").getDuration()

                        ReactionEffect('kubejs:ice', time, intensity, entity, 1)


                    } else if (onLightning2(entity)) {

                        // LightningEffect2(entitys, event)
                        //intensity = event.entity.getEffect("kubejs:lightning").getAmplifier()
                        //effectName = 'kubejs:lightning'
                        attack(source.actual, entitys, ReactionTypes.lightning, att, 1)

                        intensity = event.entity.getEffect("kubejs:lightning").getAmplifier()
                        time = event.entity.getEffect("kubejs:lightning").getDuration()

                        ReactionEffect('kubejs:lightning', time, intensity, entity, 1)

                    } else if (onWater2(entity)) {

                        // WaterEffect3(entitys, event)
                        //intensity = event.entity.getEffect("kubejs:water").getAmplifier()
                        //effectName = 'kubejs:water'
                        attack(source.actual, entitys, ReactionTypes.water, att, 1)

                        intensity = event.entity.getEffect("kubejs:water").getAmplifier()
                        time = event.entity.getEffect("kubejs:water").getDuration()

                        ReactionEffect('kubejs:water', time, intensity, entity, 1)

                    }




                } else {



                    //对于主受击者  减少其附着
                }






            }










        })


   } else {



    }





























}