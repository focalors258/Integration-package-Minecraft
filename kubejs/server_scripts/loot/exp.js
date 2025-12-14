
let entityExp = (event) => {

  //event.server.tell(event.entity)
 //tell(event.entity.getExperienceReward())
  if (event.source &&
    event.source.actual &&
    event.source.actual.isPlayer() &&
   ! event.entity.areData("host")&&
   !event.entity.areData("camp_entity")&&
    !event.entity.getRootData().contains('goal') &&
    !event.entity.getRootData().contains('projectile')) {//部分僵尸无法触发死亡事件
    //   /** @type {do} */

    // @ts-ignore 
    let entity = event.entity
    
    let player = event.source.player
    
    let playerName = player.name.getString()

   //tell(getData(entity,$Int,'level'))

      
    if (getData(entity,$Int,'level') ) {

      let level = getData(entity,$Int,'level')

     
      let exp = Math.floor(Math.pow((1 + level * 0.1), 0.9) * event.entity.getExperienceReward())
//tell("add")
      
      setPlayerLevel(player,exp+getPlayerLevel(player))
      //event.server.runCommandSilent(`puffish_skills experience add ${playerName} combat ${exp}`)//给与经验

     // event.server.runCommandSilent(`title ${playerName} actionbar {"text": "\u00a76战斗经验\u00a7a+${exp}"}`)//显示 改成动画
    }



   







  }


}