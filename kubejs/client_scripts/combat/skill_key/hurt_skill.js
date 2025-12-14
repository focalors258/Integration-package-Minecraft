
let highStageCool = 0


let addStageCool = (t) => {

    highStageCool = t + Dates.tickCount

}






NetworkEvents.dataReceived("playerHurt", e => {

    let player = Client.player

    hurtSilentTime = 5 + Dates.tickCount


    if (highStageCool > Dates.tickCount) return



    //  FOV=1300
    //  
    //  FOVTime = Date.now() + 50


    player.animationEntity.setStageCool(0)
    // tell("abc]")

    let fly = e.data.getBoolean("fly")
    // tell(fly)
    let pos = e.data.getCompound("pos")

    let d = new $Vector3d(pos.getFloat("x"), 0, pos.getFloat("z"))
    //  tell(pos.getFloat("x"))

    //tell(pos.getFloat("z"))
    let d1 = new $Vector3d(player.x, 0, player.z) //Client.player.getPosition(1).subtract(d)

    d1.sub(d)


    d1.normalize()

    d1.mul(1.1)

    d1.y = 1.2


    //tell(fly)

    if (!fly) {
        // tell(Client.player.animationEntity.age)

        Client.player.playAnimation(true, e => {//重复播放的动画

            e.setYRots(getHorizontal(-pos.getFloat("x") + player.x, -pos.getFloat("z") + player.z))
            e.setStageCool(0)
            e.setMainTrace(false)
            e.setAnimationResource("kubejs:animations/animation_entity/base.json")
            e.setTypeName("hurt")
            e.setTime(20)
            e.setEndLink(false)
            e.setAnimation("hurt" + (Math.random() > 0.5 ? 1 : 2))
            return true
        })

        Client.player.mainTick(e => {//重复播放的动画

            if (player.isMoving() && e.typeName == "hurt" && animationTime(e, 10, 30)) {

                Client.player.stopAnimation(false)


                return true
            }
            return false
        })



    } else {
        //tell("fly--------------")
        Client.player.playAnimations(2, 2, e => {//重复播放的动画

            Client.player.setMove(new $Vec3(d1.x, d1.y, d1.z))
            e.setYRots(getHorizontal(-pos.getFloat("x") + player.x, -pos.getFloat("z") + player.z))
            e.setMainTrace(false)
            e.setAnimationResource("kubejs:animations/animation_entity/base.json")
            e.setTypeName("hurt_fly")
            e.setTime(35)
            e.setStageCool(40)
            e.setAnimation("heavy_hurt1")
            e.setEndLink(false)
            return true
        })

        Client.player.mainTick(e => {
            /**@type {Internal.PlayerAnimationEntity} */
            let entity = e


            if (entity.typeName == "hurt_fly") {

                if (entity.animation == "heavy_hurt1") {

                    banMove()

                    if (!Client.player.blockStateOn.isAir()) {

                        e.setAnimation("heavy_hurt3")
                        e.setTime(25)
                        e.setStageCool(25)

                        hurtSilentTime = 0

                    } else if (animationTime(entity, 28, 35)) {
                        entity.setPlayType(1)
                        e.setStageCool(99999)
                        e.setAnimation("heavy_hurt2")
                        e.setTime(99999)

                    }

                } else if (entity.animation == "heavy_hurt2") {

                    banMove()

                    hurtSilentTime = 10 + Dates.tickCount

                    if (!Client.player.blockStateOn.isAir()) {
                        e.setAnimation("heavy_hurt3")
                        e.setTime(25)
                        e.setStageCool(25)
                    }


                } else if (entity.animation == "heavy_hurt3") {

                    if (animationTime(entity, 5, 8)) {
                        //tell(46)
                        //   let speed = new $Vec3(Math.cos((entity.yRotO + 90) / 180 * PI), 0, Math.sin((entity.yRotO + 90) / 180 * PI))
                        player.setMove(new $Vec3(0.2 * d1.x, 0, 0.2 * d1.z))
                    }


                    if (animationTime(entity, 25, 30)) {
                        allowMove()

                        hurtSilentTime = 15 + Dates.tickCount
                    }

                }

                return true
            }

            return false


        })







    }

    //   tell(player.animationEntity.typeName)



})




let hurtSilentTime = 0