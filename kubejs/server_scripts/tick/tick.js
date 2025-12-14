

//global.event={}

PlayerEvents.tick(event => {

//tell(event.player.getItemBySlot($EquipmentSlot.MAINHAND).hashCode())

//   event.player.getItemBySlot($EquipmentSlot.MAINHAND).getNbt().putBoolean("load", true)
  
let player=event.player

 // tell(player.animationEntity.maxStage)
   //  if (!rollTime[player.id]) rollTime[player.id] = 0
    
   //  if (!parryTime[player.id]) parryTime[player.id] = 0
   // tell(player.getWeaponStack().data)
//console.log( player.getDataList("toughness"))
 //   let rtime = rollTime[player.id] - Date.now()
  //tell( combatUseList[player.id])
  
  //tell(player.weaponList)
  weaponTick(player)
  
player.sendData("serverTick",{tickCount:Utils.server.tickCount})//客户端tick
//  let data=player.getDataList("toughness")

  let WeaponStack = getWeaponStack(player)
  if (WeaponStack) {
    
  
    
  let data=WeaponStack.getData()
  
  //   tell(data.getFloat("skill2_mana"))
    
   // 
  data.putFloat("skill2_mana", data.getFloat("skill2_mana") + 0.5)//调试
  getWeaponStack(player).updateData()
  }
 // if()
  
  
  //event.level.getEntities().forEach(element => {
////tell(element.nbt["ForgeData"])
//
//
////tell(element.setDataValue("host", 554))
////setData(element,$Int,"host",554)
//
  //       
  //     //  (element)
  //   });
  let target = hitResult(player.level, player,1, entity => { return true})

 // tell(target)
  
  player.level.getEntitiesWithin(AABB.of(player.x - 10, player.y - 10, player.z - 10, player.x + 10, player.y + 10, player.z + 10)).forEach(entity => {
    if (entity.type == 'kubejs:combat_area_repeat') {
      
      
     // tell(entity.nbt["ForgeData"]["camp"])
    }
  })
  
    //if(event.server.tickTimes%100==0){event.server.tell(event.server.tickTimes)}
    //
        speedWeaken(event, player)//占领速度衰减

        enderMoveTick(event, player)//设置速度

       entitySpwan(event,player)//实体生成

     //   updateTarget(players)
    
        copyRangeUpdate(player)
     
  if (event.server.tickCount % 20 == 0) {//段位保护
    
    
   
    
    
    
  if (areData(player, 'danLocking')) {
  
   let data= getData(player, $List, 'danLocking')
    
    if (data.time <= Date.now()) {
   
    player.getRootData().remove('danLocking')
    
      player.sendData('danLocking',{data:{remove:true}})
      
      
      
    }
  
  } else {
  
  
  player.sendData('danLocking',{data:{remove:true}})
  
  
  
  }
  }
  
// 
//   if (areData(player, 'danLocking')) {
//
//       let data = getData(Client.player, $List, 'danLocking')
//
//
//       tell(data.time - Date.now())
//
//
//   }
  
  let main = event.player
  
  //setDan(players,100)
  
  
  //tell(main.getAttributeValue('kubejs:max_dan'))
  
//event.level.getEntitiesWithin(AABB.of(
//                              main.x - 10,
//                              main.y - 10,
//                              main.z - 10,
//                              main.x + 10,
//                              main.y + 10,
//  main.z + 10)).forEach(entity => {
// // tell(entity.type)
//    //  entity.moveTo(0,0,0)
//
//
//    if (entity.type == 'kubejs:fairy_bullet') {
//
//       
//    
//  
//    
//    }
//  
//  
//  })
  
  
    
})
BlockEntityEvents.tick(e => {
return
   let dgr=Java.loadClass("net.minecraft.world.level.block.entity.FurnaceBlockEntity")
                
                e.level.setBlockEntity(new $BlockEntity(new $blockPos(342,-60,-702), e.level.getBlockState(new $blockPos(342,-60,-702))))
              
tell(  e.level.getBlockEntity(new $blockPos(342,-60,-702)))
  
  if(e.blockEntity instanceof $BlockEntity){
  
  tell(34)
  
  tell(e.blockEntity.getPersistentData())
  

  }
  if(e.blockEntity instanceof Java.loadClass("net.minecraft.world.level.block.entity.FurnaceBlockEntity")          ){
  
 // tell(34)
 // 
 // tell(e.blockEntity.getPersistentData())
  //Client.player.setPos(e.getPos())

  }
})


LevelEvents.tick(event => {

    //event.server.tickTimes


      let data = Utils.server.getPersistentData()
  
waterTime(data,event)
  
  
    //event.server.tell('3')
 // 

    //entity.level.getEntitiesWithin(AABB.of(entity.x - 3, entity.y - 1, entity.z - 3, entity.x + 3, entity.y + 3, entity.z + 3)).forEach(players => {


    //event.level.getEntitiesWithin(AABB.ofBlock('').forEach(element => {}))
    // @ts-ignore
    event.level.getEntities().forEach(entitys => {//获取所有实体
        
//entitys.setPos(new Vec3(0, 0, 0))  //向量
    
    //  tell(entitys.type)
//tell(aaa)
      
  initial2( entitys)
        

        InWater(entitys)//实体进入方块


       // barData(event, entitys)//boss血条显示控制

      //  SummonerOperate(event, entitys)//召唤物目标控制

        resetFind(entitys,event)//重置发现值


     //   spwanEntityRetrieve(event,entitys)//实体回收

//entitys.attack(newSource(entitys, newDamageType("kubejs", "fire")), Number(5))

        // effectUpdate(entitys,event)//效果更新

   

       // barRenovate(entitys,event)

    })

    // @ts-ignore
    event.level.getPlayers().forEach(players => {//获取所有玩家 移动到玩家事件

        // global.event.ender=event.level.playSound(null,players.x,players.z,players.y,'minecraft:entity.enderman.teleport','music',100,100)
        //players.setPitch(200)
       

      //players
      //    .level
      //    .getEntitiesWithin(AABB.of(players.x - 128, players.y - 128, players.z - 128, players.x + 128, players.y + 128, players.z + 128))
      //    .forEach(entitys => {


      //    }
      //        // player.move(moveType.PLAYER, new Vec3(entity.x - player.x, entity.y - player.y, entity.z - player.z))
      //    )


       // barSnow(event, players)待重置

        


//event.server.tell()

    })















})
  // let data = player.getDataList("toughness")[item[0]]
      
      //value  当前韧性值
      //recover  是否正在恢复
      //time  恢复时间
      
      //item[0] 物品id
      //item[1] 物品nbt
      //item[2] 最大韧性值
    //  let max_toughness=item[2]
//tell(data.recover)
 // if (data) {}
   /*
                if (!global.bossIndex[players.getRootData().getString('barSnow')]) {
                   
                } else { entity = global.bossIndex[players.getRootData().getString('barSnow')] }
             */
                // event.server.scheduleInTicks(100, e => {//获取在玩家范围内的实体 // })
                /*
                  if (entitys.type == 'kubejs:ender_gravity') {
                      entitys.triggerAnimation('exampleController', 'animation.model.att')
  
                  }
  */

            //  if (false) {//!entitys.isPlayer()

            //      players
            //          .level
            //          .getEntitiesWithin(AABB.of(players.x - 128, players.y - 128, players.z - 128, players.x + 128, players.y + 128, players.z + 128))
            //          .forEach(entitys => {

            //              if (!entitys.isPlayer()) {
            //                  entitys.y = -50

            //                  setIntData(entitys, 'efesfws', 34532)


            //              }
            //          })

            //  }
                // /**@type {Internal.Entity} */



                //else if( players.paint{example_rectangle{}})
                //entitys.kill()
//global.barSnow = {}
/*


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
                remove: false,
                moveX:10
            }









*/

















