let ReactionEffect = (effect, time, intensity, entity, value) => {//通用

//tell(345)

    if (entity.isLiving()) {

        entity.removeEffect(effect)

        if (intensity - value >= 0) {
            entity.addEffect(new $potion(effect, time, Math.max(intensity - value, 0), false, false))
        }
    }
}


let ReactionDamage = (event, entity) => {//效果必须写在stack

    // let entity = event.entity

    //entity.invulnerableTime = 10

    //console.log(source.actual)
    //规定  效果等级从0~19  而不是 1~20

//tell(isFire(event))
    
    
    if (event.source.type == "explosion.player") return
    //注意 造成爆炸伤害的攻击者对象再给召唤爆炸的方法使用会导致崩溃!!!!!!!!
    //注意 造成爆炸伤害的攻击者对象再给召唤爆炸的方法使用会导致崩溃!!!!!!!!
    //注意 造成爆炸伤害的攻击者对象再给召唤爆炸的方法使用会导致崩溃!!!!!!!!

   // tell(isLightning(event) )
    
    if (isLightning(event) ) {//在条件处加上怪物类型

        LightningEffect2(entity, event)
        //console.log('light')


    } else if (isFire(event) ) {
//tell(6)
        FireEffect2(entity, event)

        //console.log('fire')

    } else if (isIce(event) ) {

        IceEffect2(entity, event)

        // console.log('ice')

    } else if (isEnder(event) ) {
        // console.log('ender')

        enderEffect(entity, event)


    } else if (isPoison(event) ) {

        //console.log('poison')
        PoisonEffect(event)



    } else if (isDivine(event)) {

        //console.log('isDivine')
        divineEffect(entity, event)

    } else if (isWater(event) ) {

        WaterEffect2(entity, event)

    }else if (isCall(event) ) {

        callEffect(entity, event)

    }




    //entity.invulnerableTime = 10


    if (onEnder2(entity)) {//末影法术特性

        //  particleDeliver(entity, event)

        if (Math.random() > 0.97) {

            particleDeliver(entity, event)
            randomTp(entity, event, 10)
            particleDeliver(entity, event)
        }

        //particleDeliver(entity, event)
    }



}




































