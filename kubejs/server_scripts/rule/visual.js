let visual = (event, player, entity) => {//视角判断

    let entitys = example(event, player, entity, 20)//"aether:hammer_projectile"

    let retrueEntity = 0

    let distance = 0
  /**@type {Internal.LivingEntity} */
    player=player
    /*
        let differX = Math.abs(entity1.x - entity2.x)
        let differY = Math.abs(entity1.y - entity2.y) /// differX
        let differZ = Math.abs(entity1.z - entity2.z)/// differX
    
        distance = Math.pow(
            (entity1.x - entity2.x) * (entity1.x - entity2.x)
            + (entity1.y - entity2.y) * (entity1.y - entity2.y)
            + (entity1.z - entity2.z) * (entity1.z - entity2.z), 0.5)
    
        //   event.server.tell(differX + '  ' + differY + '  ' + differZ)
        let vertical = PI * entity1.XRot / 180  //竖向角度
        let horizontal = PI * entity1.YRot / 180 //横向角度
        //   event.server.tell(entitys)
        let vecX = Math.abs(Math.cos(vertical) * Math.sin(horizontal) * distance)
        let vecZ = Math.abs(Math.cos(vertical) * Math.cos(horizontal) * distance) // vecX
        let vecY = Math.abs(Math.sin(vertical) * distance) // vecX
        if (Math.abs(differX - vecX) < 1 && Math.abs(differY - vecY) < 1 && Math.abs(differZ - vecZ) < 1) {

           return true
        }
    
    return false
    */

    if (entitys) {


        entitys.forEach(entitys => {

            let differX = player.x - entitys.x
            let differY = player.y - entitys.y+1 /// differX
            let differZ = player.z - entitys.z/// differX

            distance =entitys.distanceToEntity(player)//距离
            
            
            /* Math.pow(
                (player.x - entitys.x) * (player.x - entitys.x)
                + (player.y - entitys.y) * (player.y - entitys.y)
                + (player.z - entitys.z) * (player.z - entitys.z), 0.5)*/

            //   event.server.tell(differX + '  ' + differY + '  ' + differZ)

            let vertical = PI * player.xRotO / 180  //竖向角度

            let horizontal = PI * player.yRotO / 180 //横向角度

            //   
            let vecX = Math.cos(vertical) * Math.sin(horizontal) * distance
            let vecZ = -Math.cos(vertical) * Math.cos(horizontal) * distance // vecX
            let vecY = Math.sin(vertical) * distance // vecX

  //tell(Math.abs(differX - vecX) )
           // event.server.tell(vecX + '  ' + vecY + '  ' + vecZ)
            //event.server.tell(Math.abs(differY - vecY) + '  ' + Math.abs(differZ -vecZ) )
            //event.server.tell('14645345436')
            if (Math.abs(differX - vecX) < 10 && Math.abs(differY - vecY) < 10 && Math.abs(differZ - vecZ) < 10) {
                
   

                retrueEntity = entitys

                //event.server.tell(entitys)

            }
//event.server.tell(entitys)
        })
    }

    return retrueEntity == 0 ? false : retrueEntity


















}