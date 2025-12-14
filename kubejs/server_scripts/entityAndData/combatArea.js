



let combatModify=(entity)=>{


 if (entity.type == "kubejs:combat_area_repeat" || entity.type == "kubejs:combat_area_common") {//旗帜编辑器
        entity.getRootData().putInt('r', 25)

        entity.getRootData().putDouble('max_camp', 1000)//默认最大占领值(包含正负)

        entity.getRootData().putInt('max_quantity', 18)

        entity.getRootData().putInt('camp_level', -6)

        entity.getRootData().putDouble('camp', -1000)//初始占领值

        entity.getRootData().putString('enemy_sample', 'house_10')//此处添加了默认的实体集合  可在生成时自定义

        entity.getRootData().putInt('generate_speed', 2)

        tell('已修改:'+getData(entity,$String,'enemy_sample'))

    }





}






let combatNoSpawne = (event,entity) => {//排除实体  防止生成时被攻击




        getRadiusEntity(entity, "kubejs:combat_area_common", 48).forEach(e => {//据点附近禁止刷怪

            if (e) {

                if (entity.isMonster() && getData(e, 'double', 'camp') > 0 && getData(e, 'int', 'r') > e.distanceToEntity(entity)) {

                    event.cancel(0)

                }
            }
        })



}






let campEntityDie = (event) => {//阵营内实体死亡事件 增加速度

    let entity = event.entity

    let source = event.source

    let player = source.actual


    if ((entity.isMonster()||areData(entity, 'camp_entity')) && isPlayer(event)) {

        let add = areData(entity, 'elite') ? 1.5 : 1

        add = areData(entity, 'boss') ? 3 : add

        if(entity.areData('weighting')){
            add += entity.getRootData().getInt('weighting')/1.5
        }
        
        
        if (!(player.getRootData().contains("occupy_speed"))) {
            player.getRootData().putDouble('occupy_speed', 1)//初始占领速度
           // event.server.tell('=1')
        } else {

            //event.server.tell('++' + add)
            setData(player, 'double', 'occupy_speed', Math.min(getData(player, 'double', 'occupy_speed') + add, 50))//增加占领速度
        }
       // event.server.tell(getData(player, 'double', 'occupy_speed'))
    }


}







let speedWeaken = (event, player) => {//占领速度衰减  写在tick  和占领条动画

//if(event.)

    if (event.server.tickCount%200==0&&player.getRootData().contains("occupy_speed")) {

        let occupy_speed = getData(player, 'double', 'occupy_speed')
//event.server.tell(occupy_speed)
        if (occupy_speed != 1) {//去掉此条件 使随时更新

            occupy_speed *= 0.95
//tell(occupy_speed)
            if (occupy_speed < 1.01) {

                setData(player, 'double', 'occupy_speed', 1)
                
                player.sendData('occupy_speed', {
                   // name: 'occupy_speed',
                   // entity: 0,
                    value: 1,
                })   
               // event.server.tell('sfsegsgs')
            } else {
                setData(player, 'double', 'occupy_speed', occupy_speed)//
               // event.server.tell('fdgsetgs')
                player.sendData('occupy_speed', {
                   // name: 'occupy_speed',
                  //  entity: 0,
                    value: occupy_speed,
                })//将占领速度传客户端

            }
        }

    }

    //event.server.tell(getData(player, 'double', 'occupy_speed'))




    if (false) {//player.getRootData().contains("camp_move")

        let bar_move = getData(player, 'int', 'camp_move')

       event.server.tell(bar_move)

        if (bar_move > 0) {

            let entity
            let r = 128
            player.level.getEntities().forEach(entitys => {

                let distance = entitys.distanceToEntity(player)

                if (entitys.type == 'kubejs:combat_area' && distance <= r) {

                    entity = entitys//获取最近的据点实体

                    r = distance
                }
            })
             
            if (entity) {
                if (areData(entity, 'r')) {

                    let r1 = getData(entity, 'int', 'r')//获取据点半径大小
                   
                    if (!example(event, player, 'kubejs:combat_area', r1+16)) {
                         
                        campMoveChange(player, bar_move)
                    }
                }
            } else {
                campMoveChange(player, bar_move)
            }

        }

    }
}



let campMoveChange = (player, bar_move) => {//占领条减少动画

    return
    
    if (bar_move > 0) {

        bar_move = Math.max(bar_move - 1, 0)

        player.sendData('combat_area', {
            value: bar_move,
            name: 'camp_move',
            entity: 0,

        })
        setData(player, 'int', 'camp_move', bar_move)
    }
    /*
        if (areData(player, 'camp_move')) {
    
            let bar_move = getData(player, 'int', 'camp_move')
    
            
    
        } 
        */
    /*
    else {
        player.sendData('combat_area', {
            value: 0,
            name: 'camp_move',
            entity: 0,

        })
        setData(player, 'int', 'camp_move', 0)
    }
*/



}