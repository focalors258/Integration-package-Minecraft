// @ts-nocheck
let particleDeliver=(entity,event)=>{

    for (let i = 0; i < 40; i++) {

        let a = Client.particleEngine.createParticle('portal',
           entity.x + 2 * Math.random() - 1,
           entity.y + 0.5 + 2 * Math.random() - 1,
           entity.z + 2 * Math.random() - 1, 0, 0, 0)//粒子

        a.scale(3)
    }


}



/*
StartupEvents.postInit(event=>{


//let a =Java.loadClass('tera')

})
*/