PlayerEvents.loggedIn(event => {


  // event.server.tell('原神启动')

  
   
   let player = event.player
   
    
   initDanLocking(player)
   
  
   entityBarSync1(event)
   
   puffishSync(player)
   
   //initClientToughness(player)
   
  resetPlayerToughness(player)
 
  
  
//  
//  event.server.getEntities().forEach(entity => {
//
//     //   if (entity) {
//     //      event.player.sendData('nbt', {//无法使用客户端玩家进行发送
//     //         entity: entity.getId(),
//     //         nbt: entity.nbt
//     //      })
//     //   }
//
//  })
//  /*
      

   
  // */


  


   //let a = new puffishExperience('puffish_skills:combat')

   //event.player.sendData('puffish_expLevel', { value: a.getLevel(event.player) })//同步客户端数据






})




