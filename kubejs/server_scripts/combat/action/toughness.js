
NetworkEvents.dataReceived('toughness_sync', e => {//客户端玩家age会在切换维度后清零

  e.player.setDataList("toughness", e.data.get("toughness"))

  //pushUseCombat(e.player, e.data.getString("id"))
})

let resetPlayerToughness = (player) => {

  player.getRootData().remove("toughness")//删除韧性数据数据
}



let getWeaponMaxToughness = (player, item) => {

  //tell(player)

  let value = player.getAttributeValue("integration_package_core:max_toughness") -
    player.getItemBySlot($EquipmentSlot.MAINHAND)
      .getAttributeValue($EquipmentSlot.MAINHAND, "integration_package_core:max_toughness")

  value += item.getAttributeValue($EquipmentSlot.MAINHAND, "integration_package_core:max_toughness")

  return value

}


let getWeaponNbtMaxToughness = (player, nbt) => {

  let value = player.getAttributeValue("integration_package_core:max_toughness") -
    player.getItemBySlot($EquipmentSlot.MAINHAND)
      .getAttributeValue($EquipmentSlot.MAINHAND, "integration_package_core:max_toughness")

  value += getNbtAttribute(nbt, "integration_package_core:max_toughness")

  return value
}



let initClientToughness = (player) => {
  player.sendData("toughness_sync", { toughness: player.getDataList("toughness"), tick: Utils.server.tickCount })//同步

}


let initPlayerToughnessList = (player, item) => {//初始化玩家韧性列表  注意 该物品不一定在主手

  if (!player.areData("toughness")) {
    player.setDataList("toughness", {})
    //注意  {}  <-CompoundTag  []  <-ListTag
  }

  let toughness_map = player.getDataList("toughness")[item.id]

  let value = getWeaponMaxToughness(player, item)

  if (!toughness_map) {
    toughness_map = {
      value: value,
      recover: true,//是否已恢复
      time: 0,//恢复时间
    }
  }

  $TagUtils.put(item.id, player.getDataList("toughness"), toughness_map)

  // tell(player.getDataList("toughness"))

  player.sendData("toughness_sync", { toughness: player.getDataList("toughness"), id: item.id, tick: Utils.server.tickCount })//同步

  //pushUseCombat(player, item.id)


}


//let pushUseCombatServer = (player, itemid, nbt, cache) => {
//
//  pushUseCombat(player, itemid, nbt, cache)
//
//
//  player.sendData("combat_snow", {
//    id: itemid,
//    nbt: nbt,
//    cache: cache
//  })//同步服务端武器到列表
//
//}



//NetworkEvents.dataReceived("combat_cost", event => {
//
//  let player = event.entity
//
//  pushUseCombat(player,
//    event.data.getString("id"),
//    event.data.get("nbt"),
//    event.data.getFloat("cache"),
//  )
//
//})
let getPlayerToughness235324 = (player) => {

  let item = player.getItemBySlot($EquipmentSlot.MAINHAND)
  if (!player.areData("toughness") || !player.getDataList("toughness")[item.id]) return



  return player.getDataList("toughness")[item.id]["value"]

}

let setPlayerToughness345345 = (player, toughness, itemid, nbt) => {

  if (!player.areData("toughness") || !player.getDataList("toughness")[itemid]) return

  let maxToughness = getWeaponNbtMaxToughness(player, nbt)

  let data = player.getDataList("toughness")[itemid]

  if (toughness < maxToughness) {
    data["recover"] = false

    data["time"] = Utils.server.tickCount + 400 / Math.max(0.5, 4 + getNbtAttribute(nbt, "minecraft:generic.attack_speed"))//计算恢复速度

  } else {
    data["recover"] = true
  }
  setPlayerToughnessBase35345345(player, Math.min(maxToughness, Math.max(0, toughness)),itemid)

}

let setPlayerToughnessBase35345345 = (player, toughness,itemid) => {

//  let item = player.getItemBySlot($EquipmentSlot.MAINHAND)
  if (!player.areData("toughness") || !player.getDataList("toughness")[itemid]) return 0

  player.getDataList("toughness")[itemid]["value"] = toughness

  player.sendData("toughness_sync", { toughness: player.getDataList("toughness"), tick: Utils.server.tickCount })//同步

}

let hurtPlayerToughness466345 = (source, player, toughness) => {
  let item = player.getItemBySlot($EquipmentSlot.MAINHAND)
  let a = player.getAttribute($Attributes.ARMOR_TOUGHNESS);
  if (a != null) {
    toughness = (toughness * (30 / (a.getValue() + 30)));
  }

  setPlayerToughness(player,
    getPlayerToughness(player) - toughness, item.id, item.nbt)
}



