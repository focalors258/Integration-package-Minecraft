let rollTime = 0


let timeVelocity = 20

let timeVelocityLast = 0

let silentTime = 0


NetworkEvents.dataReceived('byHurt', data => {



    Client.player.playAnimations(2, 0, e => {//重复播放的动画
    
    
    
    })





})














NetworkEvents.dataReceived('dodge', data => {

    // tell(435)
    //作为技能树解锁
    
    
    if (Client.player.getAttributeValue("kubejs:dodge_gain") > 1)
    setJavaInt(Client.player.getRollManager(), "availableRolls", getJavaInt(Client.player.getRollManager(), "availableRolls") + 1)

    timeVelocityLast = Date.now() + 600

    timeVelocity = 5


    Client.player.getAnimationEntity().setStageCool(0)


    let entity = Client.player.animationEntity
    let ae = entity

    Client.player.playAnimations(2, 0, e => {//重复播放的动画

        e.setTypeName("dodge")
        e.setMainRender(false)
        e.setMainTrace(false)
        e.setAnimationResource("kubejs:animations/animation_entity/base.json")
        if (!(e.animation == "dodge1" || e.animation == "dodge2") || animationTime(12, 99999)) {

            e.setTime(30)//多数导致动作变成air以及停滞是由于重复设置时间导致的
            e.setEndLink(false)
            let i = 3
            let ran=Math.random() 
            if (Math.random() > 0.5) { i = 1 }
            else if (Math.random() > 0.75){i=2}
            
            e.setAnimation("dodge" + i);
            e.setStageCool(4) //= 10
            e.setMaxStage(1)
            
            if (Client.player.areData("cache_skill_0")) {//缓存
            
             e.setNextStage("press_skill_0",Client.player.getDataInt("cache_skill_0"))
            
            }
           
                //  tell(e.nextStage+"A")
            Client.player.setMove(Client.player.getMove().scale(2))

            return true
        }

        return false
    })
})

let middle_skill_0_mechanism = (event) => {

    let player = Client.player
    if (闪避键.getKey().getValue() == event.key &&
        Client.player.getRollManager().isRollAvailable(Client.player) &&//翻滚模组
        !Client.player.blockStateOn.isAir()) {//加入被击退时无效

        rollTime = Date.now() + 25 * 40
 
        Client.player.sendData('dodge1', {
            time: rollTime
        })

        Client.player.stopAnimation(false)//取消当前动作
    }
    
    if (player.animationEntity.snow) {
        if (player.animationEntity.typeName == "dodge" &&
            player.isMoving()
        ) {//翻滚中移动停止翻滚) {
            
            if (animationTime(player.animationEntity, 7, 9999)||isCancelPostDelay(event.key)) {
            
                player.stopAnimation(false)
            } else {
            
                banMove()
            }
        }

    }
}


let timeVelocityTick = () => {

    // tell(timeVelocityLast)
    if (Date.now() < timeVelocityLast) {
        //
        setTimeVelocity(timeVelocity)

    } else {
    speedUpTickSpace=0
    }

}


 //tell(e.animation)
        //  if(e.time>30) e.setAnimation("dodge1")

    //entity.setAnimationResource("kubejs:animations/animation_entity/base.json")
    //entity.stageCool=15
    //    entity.setTime(30)
    //entity.setSnow(true)
    //    entity.setAnimationResource("kubejs:animations/animation_entity/base.json")
    //     entity.setAnimation("dodge1");
    //      entity.setAnimation("dodge2");
    //  Client.player.playAnimation(2, 60, true, "dodge1")
    // entity.setTickCount(entity.timeEnd - entity.time)
    //   tell( (ae.stageCool < ae.time - (ae.getTimeEnd() - ae.tickCount)))

        // tell(e.stageCool)

        //    if (e.stageCool < 1) {
        //        
        //        e.setStageCool(15)
        //        
        //        if (e.animation != "dodge1") {
        //          
        //        } else {
        //            e.setAnimation("dodge2");
        //        }

        //    }