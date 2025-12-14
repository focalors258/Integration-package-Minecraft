






NetworkEvents.dataReceived('ender_gravity', event => {//ender_gravity仅接收att标签检测该实体是否执行该动画

    let id = event.data.getInt('entity')

    let name = event.data.getString('name')

    //let value = event.data.getInt('value') 该实体无需数值

    //  let entitys = event.level.entities
    //entity.getRootData().putInt
    //event.server.tell('cnm'+value)
    //console.log(uuid + '  ' + value)


    let entity = event.level.getEntity(id)//能直接通过uuid获取实体
    
    
    if (name == 'att') {//给所有玩家播放该实体动画



        if (entity) {
            entity.getRootData().putBoolean(name, true)//Math.floor(value)//仅作标签  无传递作用
            //给符合条件的实体att标签  此时在启动事件的实体tick事件中的返回对象交替为客户端时便可检测到此标签  便可通过有此标签为条件给客户端的实体添加att_time标签                               传递服务端实体同名的nbt标签可使客户端实体的nbt标签刷新(能获取到全部在其他端事件获得的nbt)?
            // console.log(entityUuid + '  ' + uuid)
            // console.log(value
        }
    } else if (name == 'sound') {//给范围内玩家播放声音

        event.player.playSound('iceandfire:dragon_flight', 40, 1000)//音乐
        //console.log(event.player)
    }

})
let endergGravityPlay = (entitys) => {



    /*
        //console.log((entitys.isLiving())+('89787856')+(entitys.type =='kubejs:ender_gravity'))
    
        if (entitys && entitys.type == 'kubejs:ender_gravity') {//endergravity
    
            //console.log((!areData(entitys, 'att_time') )+ (areData(entitys, 'att')))
    
            if (!areData(entitys, 'att_time') && areData(entitys, 'att')) {//攻击时机初始化(有攻击力属性时)
    
                //setIntData(entitys, 'att_time', 30)
    
            }
    
    
        }
    
        console.log(entitys.getRootData().contains('att_time'))
    
        if (entitys && entitys.getRootData().contains('att_time')) {
    
           let attTime = entitys.getRootData().getInt('att_time')
    
            console.log(attTime)
    
            //if (attTime >= 0) entitys.getRootData().putInt('att_time', attTime)
        }
    */




}