let puffishSync = (player) => {






 let PuffishLevel = new $puffishExperience('puffish_skills:combat')
   
   /**@type {Internal.ServerPlayer} */
   
   let serPlayer = player
   
    player.sendData('puffish_expLevel', { value: PuffishLevel.getLevel(serPlayer) })//玩家等级
 







}