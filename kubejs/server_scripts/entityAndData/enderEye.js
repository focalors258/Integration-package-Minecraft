let enderMoveTick = (event, players) => {

    if (players.getRootData().contains('enderMove')) {
        // /**@type {Internal.LivingEntity} */    players.getRootData().contains('enderMove')
        let data = players.getRootData().get('enderMove')

        let distance = data.distance//players.getRootData().getInt('distance')

        let tick = data.tick


        let x = data.x//players.getRootData().getInt('enderX')
        let y = data.y//players.getRootData().getInt('enderY')
        let z = data.z//players.getRootData().getInt('enderZ')

        let stringUuid = data.entity



        players.hurtMarked = true

        //tell(x+"    "+tick+"    "+z)

        // tell(distance)

        players.getRootData().put('enderMove', {
            entity: stringUuid,
            x: x,
            y: y,
            z: z,
            distance: distance,
            tick: tick + 1
        })


        if (tick >= distance + 20 || tick > 100) {

            players.deltaMovement = new Vec3(0.1, 0.1, 0.1)
            // tell(players.getAnimationEntity().getAnimation())
            players.getRootData().remove('enderMove')

            players.playAnimation("hook_end", 20, e => { //2,2false,
                if (e instanceof $PlayerAnimationEntity) {
                    e.setMainTrace(false)
                    //e.setAnimation("hook_end")
                    //  e.setAnimation("hook_end")
                    //  e.setMaxStage(1)
                    e.setEndLink(true)
                    
                    //  e.xRot = getVertical(x, y, z) - 20
                 e.setXRots(e.XRots*0.5)
                  //  e.setXRots( getHorizontal(x, z))
                    e.setYRots(180 + getHorizontal(x, z))
                }
            })


            //删除渲染标记
            players.level.getPlayers().sendData("remove_enderEye", { player: players.stringUuid, entity: players.level.getEntity(stringUuid).getId() })



        } else {
            //添加渲染标记
            players.level.getPlayers().sendData("use_enderEye", { player: players.stringUuid, entity: players.level.getEntity(stringUuid).getId() })



            if (tick > 20) {
                players.deltaMovement = new Vec3(x / distance, y / distance, z / distance)
            } else {
                players.deltaMovement = new Vec3(0, 0, 0)
            }

            //  tell(players.getAnimationEntity().getTime())
            //  
            //  tell(distance + 40)
            //   tell(players.getAnimationEntity().getAnimation())
            //禁止强制修改未播放完的动画
            //  if (players.getAnimationEntity().getAnimation() != "hook_lock") { }
            players.playAnimation("hook_lock", distance + 40, e => {//注意  这里是重复执行的  需要用多段的方法防止重复,2, 2, distance + 40, false, "hook_lock",/////

                if (e instanceof $PlayerAnimationEntity) {
                    // e.setAnimation("hook_lock")
                    // e.setTime(distance + 40)
                    //   e.setMaxStage(1)
                    
                   e.setAnimationResource("integration_package_core:animations/animation_entity/main.animation.json")
                    e.setMainTrace(false)
                    e.setXRots(getVertical(x, y, z) - 20)
                    e.setYRots(180 + getHorizontal(x, z))
                }
            })


            players.addEffect(new $potion('minecraft:speed', 0, 10, false, false))


        }

        players.addEffect(new $potion('minecraft:slow_falling', 40, 100, false, false))
        // players.addEffect(new $potion('minecraft:invisibility', 20, 0, false, false))

    }








}

NetworkEvents.dataReceived("ender_eye", e => {

    let data = e.getData()

    let player = e.player


    let entity = e.level.getEntity(data.getString("uuid"))


    player.getRootData().put('enderMove', {
        entity: data.getString("uuid"),
        x: entity.x - player.x,
        y: entity.y - player.y,
        z: entity.z - player.z,
        distance: Math.pow(
            player.distanceToEntity(entity), 1),
        tick: 0
    })



    //tell(entity.x-player.x+"    "+
    //entity.y-player.y+"    "+
    //entity.z-player.z+"    "+)
















})



//^移动时  \/视角朝向时

//enderMoveGui(event, players)




// players.getRootData().remove('enderX')
// players.getRootData().remove('enderY')
// players.getRootData().remove('enderZ')
// players.getRootData().remove('distance')
//  for (let i = 0; i < 80; i++) {
//      let a = Client.particleEngine.createParticle('portal',
//          players.x + 0.2 * (2 * Math.random() - 1),
//          players.y + 0.5 + 0.2 * (2 * Math.random() - 1),
//          players.z + 0.2 * (2 * Math.random() - 1), 0, 0, 0)//粒子

//      a.scale(3)
//  }



let enderMoveGui = (event, players) => {

    return

    if (visual(event, players, "kubejs:ender_eye")) {//"minecraft:iron_golem"

        // event.server.tell('43')

        players.paint({

            right_png: {
                type: 'rectangle',
                x: 12,
                y: 0,
                alignX: 'center',
                alignY: 'center',
                w: 12,
                h: 12,
                //draw: 'always',

                scale: 0.5,
                texture: 'kubejs:gui/right.png',
                remove: false
            }

            ,
            right_txt: {
                type: 'text',
                x: 43,
                y: 1,
                alignX: 'center',
                alignY: 'center',
                w: 20,
                h: 20,
                //mouseX:100,
                //color: color(35,634,24,2),
                //Draw: 'always',
                scale: 0.8,
                text: '右键可到达此处',
                shadow: true,
                remove: false
            }


        })
        //event.server.tell('43')
        players.getRootData().putBoolean('showEnderMove', true)

    } else if (players.getRootData().contains('showEnderMove')) {

        players.paint({

            right_png: {
                remove: true
            }
            ,
            right_txt: {
                remove: true
            }


        })
        players.getRootData().remove('showEnderMove')
    }






}