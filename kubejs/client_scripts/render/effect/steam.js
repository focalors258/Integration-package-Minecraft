NetworkEvents.dataReceived("steam_effect", e => {


    let pos = e.data.get("pos")


    let x = Math.random() * 6 - 3

    let y = Math.random() * 6 - 3

    let a = Client.particleEngine.createParticle('blue_skies:dust', pos[0] - x, pos[1] + 0.5, pos[2] - y, 0, 100, 0)//粒子
    //传给客户端
    a.scale(3)



})