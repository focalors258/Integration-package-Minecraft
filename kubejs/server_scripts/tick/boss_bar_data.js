





let barCool = (event, entity) => {//写在受伤事件

    return
     
    entity.level.getPlayers().sendData('level', { entity: entity.getId(), level: getData(entity, 'int', 'level') })//更新等级

    if (areData(entity, 'boss')) {//刷新客户端boss

 //event.server.tell(entity)

        entity.level.getPlayers().sendData('boss_bar', {//更新标签
            name: 'boss',
            entity: entity.getId(),
            value: true,
        })
        
        entity.level.getPlayers().sendData('boss_bar', {//更新变化条冷却
            name: 'bossBar_stop',
            entity: entity.getId(),
            value: 20,
        })


    } else if (areData(entity, 'elite')) {

        entity.level.getPlayers().sendData('entity_bar', {//更新标签
            name: 'elite',
            entity: entity.getId(),
            value: true,
        })


        entity.level.getPlayers().sendData('entity_bar', {//更新变化条冷却
            name: 'entityBar_stop',
            entity: entity.getId(),
            value: 20,
        })
    } else {

        entity.level.getPlayers().sendData('entity_bar', {//更新标签
            name: 'entityBar_stop',
            entity: entity.getId(),
            value: 20,
        })


        entity.level.getPlayers().sendData('entity_bar', {//更新变化条冷却
            name: 'entity',
            entity: entity.getId(),
            value: true,
        })



    }

}


let barRenovate = (entitys, event) => {//

return

    if (areData(entitys, 'boss') && event.server.tickCount % (20 * 20) == 0) {//刷新客户端boss

        event.level.getPlayers().sendData('boss_bar', {
            name: 'boss',
            entity: entitys.getId(),
            value: true,
        })

    }



}
