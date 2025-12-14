


let SummonerOperate = (event, entitys) => {//注意  只要具有类的变量就可激活注释

     if (entitys.isLiving() && entitys.getRootData().contains('goal')) {


          /**@type {Internal.Mob} */
          let entity = entitys


          //event.server.tell(entity.getTarget().getHealth()==0)

          if (!entity.getTarget() || entity.getTarget().getHealth() == 0) {//无目标时


               entity.goalSelector.removeAllGoals()

               let health = entitys.getAttributes().getValue('minecraft:generic.max_health')
               //entity.kill()//无法实现entity.getTarget().isLiving())
               entitys.attack(health / 7)

               global.goalEntity[entity.getRootData().getString('goal')] = null//目标死亡  清除


               //event.server.tell('12345')
          } else {
               let goal = global.goalEntity[entity.getRootData().getString('goal')]//根据召唤物身上的id从global获取受击者对象
              // event.server.tell(entity.getTarget())

               if (entity.getTarget() != goal) {
                    entity.setTarget(goal)//当目标不为goal 时  设置为goal
               }
               //entity.goalSelector.removeAllGoals()

               //entity.targetSelector.addGoal(0,)


          }





     }



}