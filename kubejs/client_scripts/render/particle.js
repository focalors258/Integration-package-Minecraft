




const particleList = {}

function Particle(path, textureWidth, textureHeight, uOffset, vOffset, uWidth, vHeight) {

    if (Client.paused) return

    this.pos = [0, 0, 0]//坐标

    this.oPos = [0, 0, 0]//坐标

    this.path = path//路径

    this.textureWidth = textureWidth
    this.textureHeight = textureHeight
    this.uOffset = uOffset
    this.vOffset = vOffset
    this.uWidth = uWidth
    this.vHeight = vHeight
    this.vec = [0, 0, 0]//速度



    this.tick = 0

    this.uuid = $uuid.randomUUID()


    this.obstruction = 0//阻力

    this.time = 100000

    // this.pos[0] = 0
    // this.pos[1] = 0
    // this.pos[2] = 0
    //
    // this.oPos[0] = 0
    // this.oPos[1] = 0
    // this.oPos[2] = 0

    // tell(this.pos)


    //  this.vec[0] = 0
    //  this.vec[1] = 0
    //  this.vec[2] = 0

    this.setPos = (x, y, z) => {
        this.pos[0] = x

        this.pos[1] = y

        this.pos[2] = z


        return this
    }

    this.setPos1 = (pos) => {
        this.pos[0] = pos[0]

        this.pos[1] = pos[1]

        this.pos[2] = pos[2]


        return this
    }

    this.setOPos1 = (pos) => {
        this.oPos[0] = pos[0]

        this.oPos[1] = pos[1]

        this.oPos[2] = pos[2]


        return this
    }


    this.setVec = (x, y, z) => {
        this.vec[0] = x

        this.vec[1] = y

        this.vec[2] = z

        return this
    }



    this.setVec1 = (vec) => {

        this.vec = vec

        return this
    }



    particleList[this.uuid] = this

}
let ParticleTick = () => {



  for (let uuid in particleList) {//Date.now()
     let a = particleList[uuid]
    
        if (!(Client.paused)) {

            a.time--

            a.setOPos1(a.pos)
            
        

           a.setPos1([a.pos[0] + (a.vec[0] / 100), a.pos[1] + (a.vec[1] / 100), a.pos[2] + (a.vec[2] / 100)])


            //Client.player.tell((            a.time))

            let obstruction = 1 - a.obstruction

            a.vec[0] = a.vec[0] *=obstruction
            a.vec[1] = a.vec[1] *=obstruction
            a.vec[2] = a.vec[2] *= obstruction
            
            a.vec[1] *=obstruction
            


            if (a.time <= 0 || Object.keys(particleList).length > 100) {
                delete particleList[uuid]

            }
        }


    }






















}

NetworkEvents.dataReceived('particle', event => {

    // Client.player.tell('++++++')
    // let a = new Particle('kubejs:textures/entity/add_field.png', 196, 128, 3, 3, 20, 11)

    // a.pos[0] = event.player.x+2*Math.random()

    // a.pos[1] = event.player.y+2*Math.random()
    // a.pos[2] = event.player.z+2*Math.random()

    //// a.vec[0] = 0

    // a.vec[1] = 0.2

    ///  a.vec[2] = 0

    // a.obstruction = 0.0001

    // a.time = 108000


})


let particleRender = (event) => {
    // event.drawString(particleList,  110, 200, 255, 255, 255, 255)









    for (let uuid in particleList) {//Date.now()



        //AFTER_SOLID_BLOCKS 不透明
        if (event.stage != RenderJSLevelRenderStage.AFTER_TRIPWIRE_BLOCKS) return

        let a = particleList[uuid]

        //Painter.paint({text:{
        //    type: 'renderJSText',
        //    text: Object.keys(particleList).length+'  vec  ' +a.vec[1]+'  y  ' +a.pos[1]+'  time  ' +a.time,
        //    layer: 'hud',
        //    step: 'aboveAll',
        //    x:  130,
        //    y: 100,
        //    scale: 1.5,
        //    color: RenderJSGUI.rgbaColor(255, 255, 255, 255).toString(),//color.toString()
        //    remove: false}})

        let x = Mth.lerp(Client.partialTick, a.oPos[0], a.pos[0])
        let y = Mth.lerp(Client.partialTick, a.oPos[1], a.pos[1])
        let z = Mth.lerp(Client.partialTick, a.oPos[2], a.pos[2])
        //  tell(a.pos[0])
        renderTextrue2(
            event,
            Client.entityRenderDispatcher.cameraOrientation(),
            x,
            y,
            z,
            180
            , 0.02,
            0,
            0,
            0,
            a.path,
            a.textureWidth,
            a.textureHeight,
            a.uOffset,
            a.vOffset,
            a.uWidth,
            a.vHeight,
        )
        
        
//       RenderJSRenderSystem.setShaderColor(1,200,1,10)
//  $Render.of(event.poseStack).renderLaser([0, 0, -1,], [1,1,1], 0.2, 0)
//RenderJSRenderSystem.setShaderColor(1,1,1,1)
        // a.tick=Client.player.age

    }
























}
