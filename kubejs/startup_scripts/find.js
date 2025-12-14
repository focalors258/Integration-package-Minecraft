




//EntityEvents.drops



//无实体时不会执行
ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingChangeTargetEvent', event => {//目标获取事件
    //     global.livingChangeTargetEvent(event)

    //event.entityevent.entity.getMobType()==MobType.UNDEAD
    
     /**@type {Internal.LivingEntity} */
    let entity = event.entity

    /**@type {Internal.Entity} */
    let entity1 = entity

    /**@type {Internal.Mob} */
    let entity2 = entity


    //最大侦察进度max_find
    //侦察范围 find_range
    if (entity.isLiving() && entity.isMonster() && areData(entity, 'find')) {//已进行筛选

        let findRange = entity.getAttributes().getValue('kubejs:find_range')//getData(entity, 'int', 'find_range')//侦察范围

        let player = entity.level.getNearestPlayer(entity1, findRange)

        // let vertical1 = entity.XRot//getRootData().getDouble('xRot')
        // let horizontal1 = entity.YRot//getRootData().getDouble('yRot')
        //部分实体存在bug
        //event.setNewTarget(null)
        // Client.player.tell(find)entity.isMonster() && areData(entity, 'find') && areData(entity, 'max_find') &&
        //  Client.player.tell("目标" + entity2.getTarget().getName().getString())

        if (player) {//只有怪物类型

            /**@type {Internal.LivingEntity} */
            let player1 = player




            let vertical = Math.abs(getVertical(
                entity.x - player.x,
                entity.y - player.y,
                entity.z - player.z) - entity.xRot)

            let horizontal = Math.abs(correctHorizontal(getHorizontal(
                entity.x - player.x,
                entity.z - player.z) - entity.yRot))



            let find = getData(entity, 'int', 'find')//nbt

            let maxFind = entity.getAttributes().getValue('kubejs:max_find')//属性                        getData(entity, 'int', 'max_find')



            entity.level.getPlayers().sendData('entity_bar', {//发给客户端
                name: 'find_bar',
                entity: entity.getId(),
                find: find,
            })





            if (find < maxFind && !(entity.getEffect('minecraft:darkness'))) {//只有在未被发现时才能解除 

                let speed = player.isShiftKeyDown() ? 1 : 3

                if (entity.rayTrace(findRange).entity &&
                    entity.rayTrace(findRange).entity.stringUuid == player.stringUuid) {//瞬间发现

                    setData(entity, 'int', 'find', Math.min(maxFind, find + 5 + speed))

                    forFind(player, entity)

                } else if (vertical < 45 && horizontal < 45) {//缓慢发现

                    setData(entity, 'int', 'find', Math.min(maxFind, find + 2 * speed))

                    forFind(player, entity)
                } else if ((vertical < 70 && horizontal < 70) && entity.age % 4 == 0) {

                    setData(entity, 'int', 'find', Math.min(maxFind, find + 2 * speed))

                    forFind(player, entity)
                } else if (true) {

                    setData(entity, 'int', 'find', Math.max(0, find + 2 * speed - 4))

                    setData(entity, 'boolean', 'find_add', false)//此标签用于tick判断是否在增加中
                    //Client.player.tell('减少')
                }//缓慢解除
            } else if (entity.getEffect('minecraft:darkness')) {//或者敌人被致盲

                setData(entity, 'int', 'find', Math.max(0, find - 2))
                // Client.player.tell(getData(entity, 'int', 'find'))
            }

            if ((find >= maxFind&& !(player.getEffect("minecraft:invisibility")))) {//不能是隐身效果
                //Client.player.tell('已发现')

                event.setNewTarget(player1)

                let entitys = exampleData(event, entity, 'find', findRange / 2)

                if (entitys) entitys.forEach(entitys => {
                    if (entity != entitys&&!entity.getEffect('minecraft:darkness')) {//需在此排除  不然黑暗效果无法减少find值

                        let find = getData(entitys, 'int', 'find')

                        let maxFind = entitys.getAttributes().getValue('kubejs:max_find')//getData(entity, 'int', 'max_find')

                        setData(entitys, 'int', 'find', Math.min(maxFind, find + 5))
                    }
                })

            } else {
                //Client.player.tell('未发现')
                if (entity2.getTarget() && entity2.getTarget().isPlayer()) {
                    // event.setCanceled(true)
                    event.setNewTarget(null)//应使用

                    //Client.player.tell('删除目标')
                }
            }

        } else {//瞬间解除
            //Client.player.tell('重置发现值')
            setData(entity, 'int', 'find', 0)

        }

        // event.setNewTarget(0)

        //event.setCanceled(true)//设置true会锁定当前目标
        //entity2.setTarget(player1)

        // Client.player.tell('    竖   '+vertical+'    横   '+horizontal)

        //  console.log(vertical+'       '+horizontal)

        //event.setCanceled(true)//设置true会锁定当前目标
        //event.setCanceled(true)//设置true会锁定当前目标

        //entity2.setTarget(null)//不能使用                 未达到被发现的值时 目标不能为玩家


    }
})


let forFind = (player, entity) => {

    player.sendData('entity_bar', {//发给客户端
        name: 'sound',
        entity: 0
    })

    //Client.player.tell(4565456)

    setData(entity, 'boolean', 'find_add', true)
}