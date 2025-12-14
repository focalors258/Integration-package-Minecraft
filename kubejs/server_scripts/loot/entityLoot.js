ServerEvents.entityLootTables(e => {


  //tell(e.type)















})


let lootAdd = (event, player) => {

  if (!player) return

  let entity = event.entity

  let level = event.level

  getMobLoot(entity, event.source).forEach(item => {//根据等级增加掉落物

    let add = Math.min(8, Math.pow((getData(entity, $Int, 'level') - 1) * 0.04, 1))

    let dan = getDan(player)//获取段位提高其他奖励




    if (add < 1 && add - Math.random() >= 0) {
      // tell(add)
      addItemEntity(level, entity.x, entity.y, entity.z, item)

    } else {

      item.count *= (1 + add)

      addItemEntity(level, entity.x, entity.y, entity.z, item)

    }


    //tell(item)

  })




















}





