


//Camera


NativeEvents.onEvent("net.minecraftforge.client.event.ViewportEvent$ComputeCameraAngles", e => {


    if (Client.player.getAnimationEntity()) {


        //    let a=Client.player.getAnimationEntity().age
        //    
        //e.getCamera().setPosition(new Vec3(Client.player.x+10+a/10,Client.player.y+5,Client.player.z))
        //
        //

    }





})


NativeEvents.onEvent('net.minecraftforge.event.entity.living.LivingEvent$LivingTickEvent', e => {



    //if(e.entity.age%2==0){
    //e.setCanceled(true)
    //}

})



ClientEvents.loggedIn(event => {//登录事件


    //  combat_area_rangeUpdate = 0
    //  console.log("5675464363465475474567546")
    // tell(454)
    //   resetPlayerToughness(Client.player)
    //删除韧性数据数据  注意  客户端玩家数据会长久保存  
    //注意   在tick持续输出该数据时  无法删除
})




NativeEvents.onEvent("net.minecraftforge.client.event.MovementInputUpdateEvent", e => {

    if (left == false && e.input.leftImpulse == -1) {//移动
        e.input.leftImpulse = 0
    }
    if (right == false && e.input.leftImpulse == 1)
        e.input.leftImpulse = 0

    if (up == false && e.input.forwardImpulse == -1)
        e.input.forwardImpulse = 0

    if (down == false && e.input.forwardImpulse == 1)
        e.input.forwardImpulse = 0

    // e.input.forwardImpulse = 0
    //e.input.left=left
    //e.input.right=right
    //e.input.down=down
    //e.input.up=up

    //e.setCanceled(true)


})

NetworkEvents.dataReceived("serverTick", e => {


    Dates.tickCount = e.getData().getInt("tickCount")


    //tell(e.getData().getInt("tickCount"))


})

const Dates = {}

Dates.tickCount = 0


let speedUpTick = Date.now()
let speedUpTickSpace=0
let aaa=0
NativeEvents.onEvent("net.minecraftforge.event.TickEvent$RenderTickEvent", e => {

    if (speedUpTick < Date.now()&&speedUpTickSpace) {
        
        Client.player.tick()
        
        speedUpTick+=speedUpTickSpace//每次使用要更新speedUpTick为当前时间
        tell(speedUpTickSpace)
       
        
        aaa++
        
    }
//tell(speedUpTickSpace)
// aaa = 0
})

ClientEvents.tick(event => {


    //tell(Client.window.guiScaledWidth)

    //tell(Client.timer)
    let item = event.player.getItemInHand($InteractionHand.MAIN_HAND)
    // if (!item.isEmpty()) { 
    // item.addAttributeModifier("generic.armor", new $AttributeModifier($uuid.fromString('6a102453cb4-d735-4cb7-8ab2-3d3a44e')
    //        , 'kubejs_combat', 10, "addition"), $EquipmentSlot.MAINHAND)
    // }
    //  tell(Client.getUpswingTicks())
    //console.log(1)
    let player = Client.player
 //  tell( player.animationEntity.target)
   // tell(player.animationEntity.nextStage.get("press_skill_3_move"))
//tell(player.animationEntity.animation)
    //tell(player.weaponList)
    // tell(player.weaponList)
    // tell(player.weaponList)
    //tell(player.animationEntity.animation)
    //    tell(player.getAnimationEntity().getAnimation())
    //tell(combatUseList)
    // let aa=[]
    //  Client.gameRenderer.mainCamera.getLeftVector().normalize()
    //tell(5)
  
    skillTick(player)
    
    for (let i=0; i < 10; i++){
    
       
    }

    
    //Client.player.tick()
    ""
    
    
//tell(getKeyAndValue(weaponList["spartanfire:lightning_dragon_bone_rapier"]))
 //    tell(player.animationEntity.nextStage+"h")

//tell(player.animationEntity.offsetTrace)spartanfire:fire_dragonsteel_rapier
    //     let WeaponStack = player.getWeaponStack()
    // if (WeaponStack) {
    //   
    // 
    //   
    // let data=WeaponStack.getData()
    // 
    //     tell(data.getInt("skill1_mana"))
    //   
    //   
    ///  data.putInt("skill1_mana", data.getInt("skill1_mana") + 5)//调试
    // player.getWeaponStack().updateData()
    // }
    // 
    // combatUseList.forEach((item) => { aa.push(item[0]) })
    // if (player.age % 4 == 0 ) { 
    // tell("client"+aa)
    // }
    //player.getAbilities().setWalkingSpeed(0.0000001)
    //tell(player.animationEntity.getAnimatableInstanceCache().getManagerForId(player.animationEntity.getId()).get)
    //tell(player.animationEntity.age)
    //tell(setJavaInt(Client.player.getRollManager(), "availableRolls",0))

    //tell(Client.player.getRollManager().isRolling())
    //player.deltaMovement=new Vec3(0,4,0)
    // tell(player.getAnimationEntity().getAnimation())
    ///   //注意  深园维度非活实体tick不会更新
    // tell(player.getAnimationEntity().age)
    ///
    //tell(player.level.dimension.getNamespace())
    //tell (    )


    //event.level.getEntities().forEach(element => {


    //    if (element.isLiving()) {
    //        //tell(element.getToughness())
    //    }


    //});

    //   tell(player.age)
    //  tell( Client.player.animationEntity)

    //   let entity = player
    //    Client.gameRenderer.mainCamera.setPosition(new Vec3(10,2,0))
    //tell (  Client.player.getRollManager().isRolling())
    //Client.cameraEntity.setPos(new Vec3(0,-,0))

    // tell( player.getAnimationEntity())
    //   player.getAnimationEntity().remove('discarded')
    //let availableRolls=Client.player.getRollManager().getClass().getDeclaredField("availableRolls")
    // 
    //     availableRolls.setAccessible(true);
    //
    //        availableRolls.set(target, value);




    DPF = Client.paused ? 0 : 90 / Math.pow(Client.fps, 1)




    //  Client.player.tell(Client.entityRenderDispatcher.cameraOrientation())
    //let a=(new Vec3f(10,10,1003)).rotation(1.5)

    // Client.player.tell(mouseLeft)
    // Client.player.tell()

    //RangeUpdate(players)//更新周围是否有副本
    //t a = new Particle('kubejs:textures/entity/heal.png', 17, 17, 0, 0, 17, 17)

    // a.setPos(Client.player.x,Client.player.y,Client.player.z)
    //     a.setVec(10,5,5)
    // a.obstruction=0.06

    //        event.level.getEntities().forEach(element => {
    //tell(element.nbt["ForgeData"])
    //
    //
    //tell(element.setDataValue("hos33t", 554))
    //         
    //       //  (element)
    //     });



    RangeUpdate(event.player)


    ParticleTick()


    //tell(Client.player.areData(Client.player,"ModelLoad"))

let aaa=Java.loadClass("com.integration_package_core.optimize.EntityBar")
    //an.r=20
    //an.setColor(5,1,2)
    //an.scale(5)
    //    
    findSoundCool(event.player)

    //Math.min(Math.max(0.1, 0.1*(声望 - 未更新声望)), 2)

    //Client.partialTick
    //$Minecraft.getInstance().gameRenderer.loadEffect(new ResourceLocation('minecraft','shaders/post/spider'))
    danTick()

//tell(aaa.level.size())
    guiAnimationTick()

    //tell(player.areData("ModelLoad"))
    //       let PuffishLevel = new $puffishExperience('puffish_skills:combat')

    //  
    // // setDan(attacker, getDan(attacker) + 20)
    //  
    //  tell( PuffishLevel.getRequired(100))




    //event.success()!areData(player, 'player_load')
    if (false) {




        let id = player.name

        event.level.runCommandSilent(`/kubejs reload client_scripts`)

        console.log(player)

        setData(player, 'boolean', 'player_load', true)
    }

    //
    //
    //   let rgba = RenderJSGUI.rgbaColor(154, 55, 234, 23)
    //
    //
    //
    //   /**@type {number_} */
    //   let a = RenderJSGUI.rgbaColor(
    //
    //       (rgba) & 255,
    //       (rgba >> 16) & 255,
    //       (rgba >> 8) & 255,
    //       255)//RenderJSGUI.rgbaColor(255, 255, 255, 1)
    //
    //
    //
    //  // Client.player.tell('cnm' +((rgba >> 24) & 255) + 'cnm' + ((rgba >> 16) & 255) + ' cnm ' + ((rgba >> 8) & 255) +' cnm '+ ((rgba) & 255))
    //
    //   //console.log(1)
    /*((15 << 24) | (255 << 16) | (255 << 8) | 255).toString()
    let r = 128
    let entity//待遍历
    player.level.getEntities().forEach(entitys => {
 
        if (entitys.type == 'kubejs:combat_area' && player.distanceToEntity(entitys) <= r) {
 
            let camp_r = getData(entitys, 'int', 'r')
 
            if (example(event, entitys, 'minecraft:player', camp_r + 16)) {
 
                entity = entitys
            }
        }
    })
 
    let bar2 = 0//占领条动画//camp_snow 
 
    let bar1 = areData(player, 'camp_snow') ? getData(player, 'double', 'camp_snow') : 0//占领条进度//camp_move
 
    if (entity) {
        console.log(1)
        if (areData(entity, 'camp') && areData(entity, 'max_camp') && areData(player, 'camp_move')) {
 
            bar1 = getData(entity, 'double', 'camp') / getData(entity, 'double', 'max_camp')
 
            bar2 = Math.min(getData(player, 'int', 'camp_move') + 1, 10)
 
            setData(player, 'double', 'camp_snow', bar1)//占领条进度  //仅存在客户端
 
            setData(player, 'int', 'camp_move', bar2)//占领条动画//仅存在客户端
        } else {
 
            setData(player, 'int', 'camp_move', 0)
        }
    } else {
 
        if (areData(player, 'camp_move')) {
            console.log(2)
 
            bar2 = Math.max(getData(player, 'int', 'camp_move') - 1, 0)
 
            setData(player, 'int', 'camp_move', bar2)//占领条动画
        } else {
 
            setData(player, 'int', 'camp_move', 0)
        }
    }
 
 */




























    //
})

/*
ForgeEvents.onEvent('net.minecraftforge.event.TickEvent',event=>{//客户端无法使用该事件


    //event.getListenerList().register()
    
    
    //console.log(5)
    
    
    console.log(1)
    
    
    
    
    
    
    
    
    })
*/





