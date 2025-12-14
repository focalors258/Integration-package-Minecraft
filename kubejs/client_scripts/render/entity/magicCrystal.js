NetworkEvents.dataReceived("magic_crystalExplosion", e => {

    let pos = e.data.get("pos")

   let color = e.data.get("color")

    let an = Client.particleEngine.createParticle(new $Circle$RingData(0, PI / 2, 20, color[0], color[1], color[2], color[3], 30, false, $Circle$EnumRingBehavior.GROW), pos[0],pos[1],pos[2], 0, 0, 0)//粒子















})