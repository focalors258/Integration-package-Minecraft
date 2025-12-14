let effectUpdate = (entitys, event) => {//效果更新





    if (entitys.isLiving() && event.server.tickCount % 40 == 0) {//改为护盾效果单独更新
        // Client.player.tell(111) 

        if (entitys.nbt['ActiveEffects']) {


            event.level.getPlayers().sendData('nbt', {
                name: 'update',
                entity: entitys.getId(),
                value: entitys.nbt['ActiveEffects']//get('ActiveEffects')////[

            })

            //  sendEntity(event.level.getPlayers(), entitys, 'nbt', {
            //      value: entitys.nbt['ActiveEffects'],
            //      name: 'update',
            //  })


        } else {//无效果时删除
            //效果nbt被删除无法更新实体当前效果  只能在nbt更新前使用该方法 


            //   sendEntity(event.level.getPlayers(), entitys, 'nbt', {
            //       value: 0,
            //       name: 'remove',
            //   })

            event.level.getPlayers().sendData('nbt', {
                name: 'remove',
                entity: entitys.getId(),
                value: entitys.nbt['ActiveEffects']//get('ActiveEffects')////[

            })


            // event.level.getPlayers().sendData('nbt', {
            //     name: 'remove',
            //     entity: entitys.stringUuid,
            //     value: 0//get('ActiveEffects')////[

            // })

        }

    }//













}