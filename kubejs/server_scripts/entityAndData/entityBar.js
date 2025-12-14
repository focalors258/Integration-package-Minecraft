let entityBarSync1 = (event) => {


   event.level.getEntities().forEach(e => {

      entityBarSync(e)
   })

}

let entityBarSync = (e) => {

//Utils.server.scheduleInTicks(2, () => {})
      let type = 0

      if (e.getRootData().getBoolean('boss')) {
         type = 2
      } else if (e.getRootData().getBoolean('elite')) {
         type = 1
      }

      e.level.getPlayers().sendData('entityBar', { type: type, entity: e.getId() ,level:e.getRootData().getInt('level')})//玩家等级

   //tell(type)

}







