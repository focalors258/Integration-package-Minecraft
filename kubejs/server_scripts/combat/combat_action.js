let rollTime = {}


let parryTime = {}

let immuneTime = {}


let kictHurtNumber={}//后摇累计

let kictHurtCool={}


//let combatUseList = {}//正在使用的武器  可恢复韧性

NetworkEvents.dataReceived("dodge1", event => {

  let entity = event.entity

  rollTime[entity.id] = Date.now() + 1 * 600


})


//格挡判定
let parryDecide = (entity) => {

  parryTime[entity.id] = Date.now() + 1 * 1000

//  immuneTime[entity.id] = Date.now() + 1 * 400
  
  
}



let pushUseCombatServer = (player, itemid, nbt) => {



  pushUseCombat(player, Item.of(itemid, nbt))

  player.sendData("combat_cost", {
    id: itemid,
    nbt: nbt,
  })//同步服务端武器到列表

}



NetworkEvents.dataReceived('combat_cost', event => {//客户端玩家age会在切换维度后清零

  let player = event.entity


  
  pushUseCombat(player, Item.of(event.data.getString("id"), event.data.get("nbt")))


})


let getWeaponSpeed = (player, id) => {

  /**@type {Internal.WeaponStack} */
  let stack = player.getWeaponStack(id)
//  tell(id)
  //  
  



//tell(stack)

  
  if (stack&&stack.data.contains("healSpeed")) {

    let speed = stack.data.getFloat("healSpeed")

    return speed
  } else {

    let attspeed = -2.4

       let speed =1
    
       let item=player.getItemBySlot($EquipmentSlot.MAINHAND)
    
  //  if (sameWeaponList[item.id]) item = Item.of(sameWeaponList[item.id], item.nbt)
    if (stack) {
      attspeed = getNbtAttribute(player.getWeaponStack(item.id).nbt)

    speed = 0.5 + Math.max(3, 4 + attspeed)

      stack.data.putFloat("healSpeed", speed)
    }


    return speed

  }

}


let hurtPlayerToughness = (player, damage) => {//减少玩家韧性


  player.hurtToughness(damage)

  let id = player.getItemBySlot($EquipmentSlot.MAINHAND).id
  /**@type {Internal.WeaponStack} */
  let stack = player.getWeaponStack(id)

  player.setToughnessCool(3000 / getWeaponSpeed(player, id), id)

}



let addGiddiness = (time,player) => {


player.sendData("addGiddiness",{time:time})

}

let addSmashEffect= (time,player) => {


player.sendData("addSmashEffect",{time:time})

}



NativeEvents.onEvent("com.integration_package_core.event.Event.ToughnessEvent$SmashEvent", e => {


  
  let intensity=5
  
  if (e.entity.areData("boss") || e.entity.areData("elite")) {
  
  
  intensity+=40
  
  let players=example(e,e.entity,"minecraft:player",30)
  
  
  if (players) {
    players.forEach(p => {
    
    addGiddiness(intensity,p)
    
    addSmashEffect(10 ,p)
    }
    
    
    )
  
  
  }

}



})


//let a=0


NativeEvents.onEvent("net.minecraftforge.event.entity.living.LivingAttackEvent", event => {//会在客户端运行

  //tell(a)
//  tell(4)
 // a=Date.now()*10
  
  /**@type {Internal.LivingEntity} */
  let entity = event.entity

  entityBarSync  (entity) 
  if(!entity.server) return
  // tell(rollTime[entity.id]+"  "+Date.now()  )
  // tell(event.source)

  let actual = event.source.actual

  
  //tell()
  
  //tell(entity.getToughness())
  let damage = event.amount
  // tell(entity.getToughness())
  //    let toughness_cut = getAttributeValue(Client.player.getItemBySlot($EquipmentSlot.MAINHAND), global.attributes.toughness_cut)

  
 //tell(event.amount+event.source.type().msgId()+Math.random())
 // tell(entity.getMaxToughness())
  
  if (actual instanceof Player) {//攻击时自动加入列表

 //addGiddiness(15, actual)
 //  actual.sendData("playerHurt",{fly:true,time:6,pos:{x:entity.x,y:entity.y,z:entity.z}})
 // playerHurtColl (actual, entity, 1, 1) 
//parryEffect(event,actual,entity,0.5,damage * 0.5,20,0.03)
    // entity.addRigid(40)
   // tell(kictHurtCool[actual.id] - Utils.server.tickCount + "cnm" + kictHurtNumber[actual.id])
    
 // tell("aaaaaaaaaaaa"+(kictHurtNumber[actual.id] == undefined || kictHurtNumber[actual.id] >= 10)+"aaaaaaaaaaaa")
//   if (kictHurtNumber[actual.id] == undefined || kictHurtNumber[actual.id] >= 10) {
//  // tell(345)
//     kictHurtCool[actual.id] = 0
//     kictHurtNumber[actual.id] = 0
//         
//     
//   }
    
   
    let item = actual.getItemBySlot($EquipmentSlot.MAINHAND)
    //actual.setToughnessBase(actual.getToughness(item.id)-3, item.id)
    //tell( actual.inventory.selected)
   // pushUseCombatServer(actual, item.id, item.nbt)


//addGiddiness(5,actual)
//playerHurtColl(actual,entity , 1, 10)
  }


  if (actual && entity instanceof Player) {
    
    
       //    event.setCanceled(true)
    
    let player = entity
    let item = player.getItemBySlot($EquipmentSlot.MAINHAND)

let ae=player.animationEntity
    let toughness_cut = getAttributeValue(item, global.attributes.toughness_cut)

    let parry = getAttributeValue(item, global.attributes.parry)
  
    
    //let stable = getAttributeValue(entity.getItemBySlot($EquipmentSlot.MAINHAND), global.attributes.stable)
    if (!rollTime[player.id]&&rollTime[player.id]!=0) {rollTime[player.id] =  0}

    if (!parryTime[player.id]&&parryTime[player.id]!=0 ) { parryTime[player.id] = 0  }

 if (!immuneTime[player.id]&&immuneTime[player.id]!=0 ) { immuneTime[player.id] = 0  }
  
    
    let rtime = rollTime[player.id] - Date.now()

    let ptime = parryTime[player.id] - Date.now()

    
    let itime=immuneTime[player.id] - Date.now()
 //tell(player.animationEntity.isStageCool())
   


    if (rtime > 0) {//检测闪避
      
 if (player.getAttributeValue("kubejs:dodge_gain") > 0)
      player.sendData('dodge', {})

      

      event.setCanceled(true)
    } else  {//此处写韧性计算

   // player.sendData("playerHurt",{fly:true,time:20,pos:{x:actual.x,y:actual.y,z:actual.z}}) 
tell("time"+ptime)
      if (ptime > (900 - 0.5 * parry)&&itime>0) {
tell(1)

        if (parryEffect(event, player, actual, 0, damage * 0.1, 50, 0.15)) {
          addSmashEffect(15, player)
          
          addGiddiness(7, player)
          
          immuneTime[player.id]=Date.now()+4000//破韧冷却  可以通过技能树降低
          
        }
        
      } else if (ptime > (750 - 0.5 * parry)) {
    tell(2)

        if (parryEffect(event, player, actual, 0.2, damage * 0.3, 30, 0.07)) {
       
          addGiddiness(10, player)
          addSmashEffect(7, player)
        
        }
        
      } else if (ptime > (600 - 0.5 * parry)) {
        tell(3)
        if( parryEffect(event,player,actual,0.5,damage * 0.5,20,0.03))

         addGiddiness(10,player)
         //tell(4)
        
      } else if (ptime > 300 - 0.5 * parry) {
       tell(4)
      parryEffect(event,player,actual,0.8,damage ,0,0.008)
        

      } else if (
        !ae.isStageCool() &&
        ae.getSnow() &&
        ae.typeName != "hurt" &&
        ae.typeName != "hurt_fly") {
       // tell(3)
      parryEffect(event,player,actual,1,damage ,0,0.005)
        
tell(5)
      } else {
     // tell(hurtNumber[player.id] )if(itime<0)
      
        if (kictHurtNumber[player.id] == undefined || kictHurtNumber[player.id] >= 10) {
     
          kictHurtNumber[player.id] = 0
          kictHurtCool[player.id] = 0
        }



        if (kictHurtCool[player.id] - Utils.server.tickCount < 0) {
          
          
          if (actual.areData("boss")) {
            if (Math.random() > 0.2) {
              playerHurtKict(player, actual, 3, 15)
            }
            
          } else if (actual.areData("elite")) {
            
          //  tell(54)
            
            if (Math.random() > 0.3) {
              
              
              playerHurtKict(player, actual, 2, 15)
            }
            //tell(43)
            
          } else {
            if(Math.random()>0.5){
            playerHurtKict(player, actual, 1, 10) 
            }
            
          }
         kictHurtCool[player.id] =Utils.server.tickCount+5
        }
      
      
      }


    }
  }




})


let playerHurtKict = (player, actual, hurt, time) => {
  
 
  kictHurtNumber[player.id] += hurt
  
//  tell(player)
  
//tell("["+kictHurtNumber[player.id])
  if (kictHurtNumber[player.id] >= 10) {
         player.sendData("playerHurt",{fly:true,time:time,pos:{x:actual.x,y:actual.y,z:actual.z}}) 
    
  //  tell("fly")

   } else {
      // tell("ylf")
    player.sendData("playerHurt", { fly: false, time: time, pos: { x: actual.x, y: actual.y, z: actual.z } }) 
   }

}





let parryEffect = (event,player,actual,reduceDamage,reduceToughness,cool,hurtToughness) => {//格挡特效

  parryTime[player.id] = 0
  
 if (reduceDamage>0) {
      player.setDataFloat("setAmount", reduceDamage)
    } else {
 event.setCanceled(true)
  
  }
  
 hurtPlayerToughness(player, reduceToughness)
//tell(player.getToughness())
  if (player.getToughness() == 0) {
    
    playerHurtKict  (player, actual, 3, 15)
    
    return false
  //player.sendData("playerHurt",{fly:true,time:20,pos:{x:actual.x,y:actual.y,z:actual.z}}) 
  }
   
  if (cool > 0){ actual.addRigid(cool)}
  
  
if(!actual.areData("boss")){hurtToughness*=1.5}
  
  
  //tell(player.level.getPlayers())
  
 actual.setToughness(actual.getToughness() - actual.getMaxToughness()*hurtToughness)
  player.level.getPlayers().forEach(p1 => {
    $NetworkManager.send(p1, "damageEventBar", c => {
      if (event.source.actual!= null) {
        c.putInt("att", player.getId());
      }
      c.putInt("hurt", actual.getId());
      c.putFloat("maxHealth", actual.getMaxHealth());
      c.putFloat("value", event.getAmount());
    });
  })

return true

}


let $NetworkManager=Java.loadClass("com.integration_package_core.util.Network.NetworkManager")
//一端判定后  发送给另一端  判定

//combatUseList[玩家][[武器,最大韧性]]
let pushUseCombat = (player, item) => {//计算正在使用的武器cost  超过最大值时删除最先使用的武器
  // if(!player.getDataList("combat_use"))player.setDataList("combat_use", []

  //tell(player.getWeaponData())
 //if (sameWeaponList[item.id]) item = Item.of(sameWeaponList[item.id], item.nbt)

  
  if (item.hasTag("kubejs:combat_weapon") == false) return

   if(player.getWeaponList().contains(item.id)) return
  
  
    //tell(item)
  let nCost = 0

  let reserveList = new $ArrList()

  let noReserveList = new $SortMap()

  let repeat = false

  player.getWeaponList().forEach((itemid) => {

    if (itemid == item.id) repeat = true

    //cost+= weaponList[itemid]["cost"]
    // tell("server")
    // tell(player.getToughness(itemid) )
    // tell(player.getMaxToughness(itemid))

    if (player.getToughness(itemid) == player.getMaxToughness(itemid)) {

      noReserveList.put(itemid, weaponList[itemid]["cost"])
    } else {
      reserveList.add(itemid)
      nCost += weaponList[itemid]["cost"]


    }

  })

  if (repeat) return


  nCost += weaponList[item.id]["cost"]

  if (nCost <= player.getAttributeValue("kubejs:cost")) {

    reserveList.add(item.id)

    for (let j = 0; j < noReserveList.size(); j++) {

      nCost += noReserveList.getValue(j)

      if (nCost <= player.getAttributeValue("kubejs:cost")) {

        reserveList.add(noReserveList.getKey(j))

      } else {
        break
      }

    }
 let weaponData = weaponList[item.id]
    player.addWeaponData(item.nbt, item.id)
       player.setWeaponList(reserveList)
    
    for (let j = 0; j < weaponData["skill" + j]||j<4; j++) {
      if (weaponData["skill" + j]) {

        if (weaponData["skill" + j]["type"]) {
          
          let releaseType = weaponData["skill" + j]["type"]
          
          if (releaseType["time"]) player.getWeaponStack(item.id).data.putInt("skill" + j + "_cool", 0)

          if (releaseType["save"]) player.getWeaponStack(item.id).data.putInt("skill" + j + "_mana", releaseType["save"])
        }//初始化技能等级


      }
    }


 

    //tell(reserveList)
  } else {

    //  player.pushWeapon(item)


  }



}


let weaponTick = (player) => {


  if (player.age%4==0&&   !player.getWeaponList().isEmpty()) {

   // let a=[]
    

    
    
   player.getWeaponList().forEach(item => {
 /**@type {Internal.WeaponStack} */
     let stack=player.getWeaponData().get(item)
     
    //   tell(stack.toughnessTime+"  "+ Utils.server.tickCount)
     if (!stack.toughnessRecover && stack.toughnessTime <= player.age) {
      
       player.setToughness(player.getMaxToughness(item), item)
       
       stack.setToughnessRecover(true)
       
     }
     

    player. setToughness(player.getToughness(item)+(getWeaponSpeed(player, item))*0.01, item)
  
})

    
    
//tell("server"+a)


  }













}













    //    actual.getWeaponList().forEach((item) => {
    //let a= actual.getWeaponData().get(item)
    //  tell(item)
    //tell(  a)
    //  
    //})


    //actual.getSlot()
    //  pushUseCombatServer(
    //    actual,
    //    item.id,
    //    item.nbt,
    //    getWeaponMaxToughness(actual, item))
    //
    //  initPlayerToughnessList(actual, item)


/* {

     let data = [itemid, nbt, cache]
     let includes = includesArrList(combatUseList[player.id], data)//检查武器种类是否已存在
     // tell(includes)
     // !combatUseList[player.id].includes([itemid, max_toughness])
     if (!includes) {

       if (weaponList[itemid]) combatUseList[player.id].push(data)

       let count = 0
       for (let i = combatUseList[player.id].length - 1; i >= 0; i--) {
         let item = combatUseList[player.id][i];
         if (weaponList[item[0]]) {

           count += weaponList[item[0]]["cost"]
           //tell(weaponList[item[0]]["cost"])

           if (count >= player.getAttributeValue("kubejs:cost")) {

             combatUseList[player.id].splice(0, i + 1)

             break
           }
         }
       }
       // tell(combatUseList[player.id])
       // tell(count+"----")
     }
   }
   */


//主要处理伤害计算 前发生