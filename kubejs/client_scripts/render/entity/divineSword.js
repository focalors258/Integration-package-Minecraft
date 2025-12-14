






NetworkEvents.dataReceived('divine_sword', event => {//ender_gravity仅接收att标签检测该实体是否执行该动画

    let uuid = event.data.getString('entity')

    let name = event.data.getString('name')

    //let value = event.data.getInt('value') 该实体无需数值

 //   let entitys = event.level.entities
    //entity.getRootData().putInt
    //event.server.tell('cnm'+value)
    //console.log(uuid + '  ' + value)

//Client.player.tell('播放声音')

    if (name == 'sound1') {//给范围内玩家播放声音
        event.player.playSound('irons_spellbooks:spell.divine_smite.windup',1000,1)
       // event.player.playSound('irons_spellbooks:entity.lightning_strike.strike', 100, 1)
        // event.player.playSound('iceandfire:dragon_flight', 40, 1000)//音乐epic_bullet

    } else if (name == 'sound2') {//给范围内玩家播放声音
        event.player.playSound('irons_spellbooks:entity.citadel_keeper.sword_impact',1,1)
        event.player.playSound('aquamirae:item.terrible_sword', 1, 1)
        event.player.playSound('kubejs:epic_bullet', 0.1, 0.01)

    }

})