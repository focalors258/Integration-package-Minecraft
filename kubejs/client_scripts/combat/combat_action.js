

//let combatUseList = []


let mainWeapon
//NetworkEvents.dataReceived('toughness_sync', e => {//客户端玩家age会在切换维度后清零
//
//  e.player.setDataList("toughness", e.data.get("toughness"))
//
//
//})


NetworkEvents.dataReceived('attack_sound', event => {//客户端玩家age会在切换维度后清零
  Client.player.playSound("minecraft:entity.player.attack.strong", 8, 1)
})


NetworkEvents.dataReceived('combat_cost', event => {//客户端玩家age会在切换维度后清零

  let player = event.entity

  pushUseCombat(player, Item.of(event.data.getString("id"), event.data.get("nbt")))

})



let pushUseCombat = (player, item) => {//计算正在使用的武器cost  超过最大值时删除最先使用的武器
  // if(!player.getDataList("combat_use"))player.setDataList("combat_use", []

  // tell(player.getWeaponData())
  //  tell(item)
  
 // tell(item.id)
 // tell(sameWeaponList[item.id])
  
  //if (sameWeaponList[item.id]) item = Item.of(sameWeaponList[item.id], item.nbt)


  if (item.hasTag("kubejs:combat_weapon") == false) return



  if (Client.player.getWeaponList().contains(item.id)) return





  let nCost = 0

  let reserveList = new $ArrList()

  let noReserveList = new $SortMap()

  let repeat = false

  player.getWeaponList().forEach((itemid) => {


    if (itemid == item.id) repeat = true

    // tell("client")
    // tell(player.getToughness(itemid))
    // tell(player.getMaxToughness(itemid))


    //cost+= weaponList[itemid]["cost"]
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
    // if (nCost player.getAttributeValue("kubejs:cost")) { }

    for (let j = 0; j < noReserveList.size(); j++) {

      nCost += noReserveList.getValue(j)

      if (nCost <= player.getAttributeValue("kubejs:cost")) {

        reserveList.add(noReserveList.getKey(j))

      } else {
        break
      }

    }

    let weaponData = weaponList[item.id]

    player.addWeaponData(item.nbt, item.id)//

    player.setWeaponList(reserveList)//

    for (let j = 0; j < weaponData["skill" + j] || j < 4; j++) {

      // tell(weaponData["skill" + 1])
      if (weaponData["skill" + j]) {

        if (weaponData["skill" + j]["type"]) {

          let releaseType = weaponData["skill" + j]["type"]

          //    tell(releaseType["time"])



          if (releaseType["time"]) player.getWeaponStack(item.id).data.putInt("skill" + j + "_cool", 0)




          if (releaseType["save"]) player.getWeaponStack(item.id).data.putInt("skill" + j + "_mana", releaseType["save"])
        }//初始化技能等级


      }
    }




    // tell(reserveList)
  } else {

    //  player.pushWeapon(item)
    //tell(567546)

  }


}

let getWeaponSpeed = (player, id) => {

  /**@type {Internal.WeaponStack} */
  let stack = player.getWeaponStack(id)

  if (stack.data.contains("healSpeed")) {

    let speed = stack.data.getFloat("healSpeed")

    return speed
  } else {

    let attspeed = -2.4
    
    let item=player.getItemBySlot($EquipmentSlot.MAINHAND)
    
   // if (sameWeaponList[item.id]) item = Item.of(sameWeaponList[item.id], item.nbt)
    if (player.getWeaponStack(item.id)) { 
    if (stack) attspeed = getNbtAttribute(player.getWeaponStack(item.id).nbt)

    let speed = 0.5 + Math.max(3, 4 + attspeed)

    stack.data.putFloat("healSpeed", speed)


    return speed
    }
    return 0
    
    
    
  }

}


let pushUseCombatClient = (player, itemid, nbt) => {



  pushUseCombat(player, Item.of(itemid, nbt))



  player.sendData("combat_cost", {
    id: itemid,
    nbt: nbt,
  })//同步服务端武器到列表

}


/*
let resetPlayerToughness = (player) => {

  player.getRootData().remove("toughness")//删除韧性数据数据
 }



let getWeaponMaxToughness = (player,item) => {

  let value = player.getAttributeValue("integration_package_core:max_toughness") -
    player.getItemBySlot($EquipmentSlot.MAINHAND)
    .getAttributeValue($EquipmentSlot.MAINHAND, "integration_package_core:max_toughness")

    value += item.getAttributeValue($EquipmentSlot.MAINHAND,"integration_package_core:max_toughness")
 
   
  return value

}

let getWeaponNbtMaxToughness = (player, nbt) => {

    let value = player.getAttributeValue("integration_package_core:max_toughness") -
    player.getItemBySlot($EquipmentSlot.MAINHAND)
    .getAttributeValue($EquipmentSlot.MAINHAND, "integration_package_core:max_toughness")

    value += getNbtAttribute(nbt, "integration_package_core:max_toughness")
  
  return value
}


let initPlayerToughnessList = (player, item) => {

  if (!player.areData("toughness")) {
    player.setDataList("toughness", {})
    //注意  {}  <-CompoundTag  []  <-ListTag
  }

  let toughness_map = player.getDataList("toughness")[item.id]
  let value = getWeaponMaxToughness(player, item)
  
 // tell(value)
  if (!toughness_map) {
    toughness_map = {
      value: value,
      recover: true,//是否已恢复
      time: 0,//恢复时间
    }

  }
  
//    tell(toughness_map)
//tell(player.getDataList("toughness"))
  
  $TagUtils.put(item.id, player.getDataList("toughness"), toughness_map)

  player.sendData("toughness_sync", { toughness: player.getDataList("toughness"),id:item.id  })//同步
}

let getPlayerToughness= (player) => {

  let item = player.getItemBySlot($EquipmentSlot.MAINHAND)
  if (!player.areData("toughness") || !player.getDataList("toughness")[item.id]) return 0



  return player.getDataList("toughness")[item.id]["value"]

}

let setPlayerToughness11111111 = (player, toughness) => {

  let item = player.getItemBySlot($EquipmentSlot.MAINHAND)
  if (!player.areData("toughness") || !player.getDataList("toughness")[item.id]) return 0



  if (toughness > 0 && player.getDataList("toughness")[item.id]["recover"]) {
    setPlayerToughnessBase(player, toughness)
  } else if (toughness <= 0) {

    setPlayerToughnessBase(player, 0)
    player.getDataList("toughness")[item.id]["recover"] = false
    player.getDataList("toughness")[item.id]["time"] = Utils.server.tickCount + 200//10秒后恢复
  }

}

let setPlayerToughnessBase111111 = (player, toughness) => {

  let item = player.getItemBySlot($EquipmentSlot.MAINHAND)
  if (!player.areData("toughness") || !player.getDataList("toughness")[item.id]) return 0

  player.sendData("toughness_sync", { toughness: player.getDataList("toughness") })//同步



  player.getDataList("toughness")[item.id]["value"] = toughness

}

let hurtPlayerToughness1111111111 = (source, player, toughness) => {

  let a = player.getAttribute($Attributes.ARMOR_TOUGHNESS);
  if (a != null) {
    toughness = (toughness * (30 / (a.getValue() + 30)));
  }

  setPlayerToughness(player, getPlayerToughness(player) - toughness)

}
*/

