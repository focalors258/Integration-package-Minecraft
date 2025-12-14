NetworkEvents.dataReceived('divineHeal', event => {//效果更新时与添加护盾均使用此事件接收

    //let value = event.data.getDouble('value')//数值  注意获取类型

    //let name = event.data.getString('name')//项目名称

   let id = event.data.getInt('entity')//实体id


  // let entity

  // if (uuid) {
  //    
  // }



    let entity = event.level.getEntity(id)//global.entity[uuid]//getUuidEntity(uuid)
    
    //Client.player.tell(entity)
    
    if (entity) {
        
        event.player.playSound('kubejs:starrail_heal', 0.2, 1)
        
        for (let i = 0; i < 2; i++) {
            let a = new Particle('kubejs:textures/entity/heal.png', 17, 17, 0, 0, 17, 17)

            a.setPos([
                entity.x + 1 * (2 * Math.random() - 1),
                entity.y + 1 * (2 * Math.random() - 1) + 2,
                entity.z + 1 * (2 * Math.random() - 1)
            ])

            a.vec[1] = 0.5

            a.time=50
        }
    }


})