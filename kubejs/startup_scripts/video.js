
let screenShaking = (player,time, intensity, type) => {
    if (type == 'main') {


        player.sendData('video', {//给所有玩家客户端的实体添加仅做标签判定的nbt(传入的为服务端)
            value: intensity,//
            name: 'intensity',
        })//振动强度
        player.sendData('video', {//给所有玩家客户端的实体添加仅做标签判定的nbt(传入的为服务端)
            value: time,//
            name: 'time',
        })//振动时间


    } else if (type == 'sub') {

        // shaking1_time = time + Date.now() / 50
        //物理伤害
        player.sendData('video', {//给所有玩家客户端的实体添加仅做标签判定的nbt(传入的为服务端)
            value: intensity,//
            name: 'intensity1',
        })//振动强度
        player.sendData('video', {//给所有玩家客户端的实体添加仅做标签判定的nbt(传入的为服务端)
            value: time,//
            name: 'time1',
        })//振动时间

    }
    //  shaking_intensity = intensity



}

//event.
//

//Client.playergetEffect("kubejs:water").getAmplifier()entity.getRootData().contains('screen_shaking') //Client.gameRenderer.displayItemActivation(item)
//let screen_shaking = null
/*
NetworkEvents.dataReceived('screen_shaking', event => {//只能写在clientt

    //screen_shaking = event.data.get('time')
    // console.log(screen_shaking)

})
*/



