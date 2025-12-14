NetworkEvents.dataReceived('puffish_expLevel', event => {//更新客户端技能树等级

    puffish_expLevel = event.data.getInt('value')

    setData(event.player,$Int,'puffish_expLevel',event.data.getInt('value'))
    
    
})


let puffish_expLevel = 0



NetworkEvents.dataReceived('level', event => {//更新客户端技能树等级


    let id = event.data.getInt('entity')

    let entity = event.level.getEntity(id)
    if (entity) {
        entity.getRootData().putInt('level', event.data.getInt('level'))
    }
})

NetworkEvents.dataReceived('nbt', event => {//更新客户端nbt


    let id = event.data.getInt('entity')

    let entity = event.level.getEntity(id)

    //  let nbt=event.data.get('nbt')
    //entity.getRootData().putInt('level', event.data.getInt('level'))

    //entity.nbt=nbt

 //   Client.player.tell(entity)


})
