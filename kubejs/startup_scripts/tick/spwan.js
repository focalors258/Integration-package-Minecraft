let spwanEntityRetrieve = (event, entitys) => {

    if (entitys.age % (20 * 20) == 0) {


        if (areData(entitys, 'KJSspwan') && entitys.age > 200) {

            let isKill = true

            entitys.level.getPlayers().forEach(players => {


                if (entitys.distanceToEntity(players) < 96) {//优化
                    isKill = false
                }


            })

            if (isKill) {
                /// event.server.tell('回收' + entitys.name.toString())

                // entitys.level.getEntitiesWithin(AABB.of(copy_entity.x - 30, copy_entity.y - 30, copy_entity.z - 30, copy_entity.x + 30, copy_entity.y + 30, copy_entity.z + 30)).forEach(entity => {
                entitys.remove('discarded')

            }

        }
    }
}