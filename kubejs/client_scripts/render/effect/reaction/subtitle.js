
const subtitleList = {}

function Subtitle(rgba, x, y, z, title, crit) {

    if (Client.paused) return

    this.pos = [0, 0, 0]//坐标

    // this.vec = [0, 0, 0]//速度


    this.scale = 3
    if (crit) { this.scale = 12 }
    this.tick = 0

    this.uuid = $uuid.randomUUID()
    this.crit = crit
    this.title = title

    this.rgba = rgba

    this.r = (rgba >> 16) & 255

    this.g = (rgba >> 8) & 255

    this.b = (rgba) & 255

    this.time = 100

    this.pos[0] = x
    this.pos[1] = y
    this.pos[2] = z

    this.x = 0

    this.y = 0

    // this.vec[0] = 0
    // this.vec[1] = 0
    // this.vec[2] = 0

    //  this.setPos = function (x, y, z) {
    //      this.pos[0] = x

    //      this.pos[1] = y

    //      this.pos[2] = z

    //      return this
    //  }

    //  this.setVec = function (x, y, z) {
    //      this.vec[0] = x

    //      this.vec[1] = y

    //      this.vec[2] = z

    //      return this
    //  }

    //  this.setPos = function (pos) {

    //      this.pos = pos

    //      return this
    //  }

    //  this.setVec = function (vec) {

    //      this.vec = vec

    //      return this
    //  }



    subtitleList[this.uuid] = this

}


global.reactionSnow = {}//定义数组

global.reactionSnow.time = {}//需注意  如果global在多人游戏中为全局变量  则需更换

global.reactionSnow.content = {}//内容

global.reactionSnow.sort = {}//索引

global.reactionSnow.color = {}//索引

global.reactionSnow.gloe = {}//目标

NetworkEvents.dataReceived('reaction_snow', event => {
    
    

    
    
    
    
    

    let player = event.player

    let word = event.data.getString('word')


    let crit = event.data.getInt('crit') 

    //颜色
    let r = event.data.getInt('r')/255
    let g = event.data.getInt('g')/255
    let b = event.data.getInt('b')/255

    //横向
    //  let h = event.data.getInt('h')
    //竖向
    // let v = event.data.getInt('v')

    let x = event.data.getInt('x')+Math.random()-0.5

    let y = event.data.getInt('y')

    let z = event.data.getInt('z')
    
    
    
    $LevelSubtitle.text(word,new $Vector3f(x+0.5,y,z+0.5),r,g,b,event.data.getInt('crit') )
    
    
    
    
    
    
    
    
return
    let distanceX = player.x - x
    let distanceY = player.y - y
    let distanceZ = player.z - z

    //
    //   let vertical = getVertical(distanceX, distanceY, distanceZ) - v//竖
    //
    //   let horizontal = getHorizontal(distanceX, distanceZ) - h//横
    //
    //
    //   if (horizontal > 180) {
    //
    //       horizontal -= 360
    //
    //   } else if (horizontal < -180) {
    //
    //       horizontal += 360
    //
    //   }
    //

    //
    //    setData(event.player, 'string', 'reaction_snow', word)
    //
    //    setData(event.player, 'int', 'reaction_vertical', vertical * 2)
    //
    //    setData(event.player, 'int', 'reaction_horizontal', 2*horizontal * (90 - Math.abs(vertical)) / 90)
    //tell(crit)
    // setData(event.player, 'int', 'reaction_color', getColor(r, g, b, 255))
   new Subtitle(getColor(r, g, b, 255), x + 0.5, y + 1, z + 0.5, word, crit)

    // let a=  Java.loadClass('com.hamusuke.damageindicatorreborn.client.indicator.renderer.IndicatorRenderer')
    //   
    //   let fthtf= Java.loadClass("com.hamusuke.damageindicatorreborn.client.DamageIndicatorRebornClient")
    //   
    //   
    // fthtf.renderers.add(new a(x+0.5, y+1, z+0.5,word,"in_fire_damage",true,5))  


    //Client.player.tell('   玩家   ' + h + '   差距   ' + getHorizontal(distanceX, distanceZ)+ '   偏移   ' +horizontal)

})


let subtitle = (event) => {

    let player = Client.player

    let data = player.getRootData()

    //
    //  if (!data.contains("reaction_index")) {
    //      data.putInt('reaction_index', 0)
    //  }
    //
    //  if (!data.contains("reaction_Initial")) {
    //      data.putInt('reaction_Initial', 0)
    //  }
    //
    //  let index = getData(player, 'int', 'reaction_index')//当前索引
    //
    //  let Initial = getData(player, 'int', 'reaction_Initial')//起始索引
    //

    let e = event

    for (let uuid in subtitleList) {//Date.now()

        //RenderLevelStageEvent.Stage.AFTER_WEATHER 

        //AFTER_SOLID_BLOCKS 不透明AFTER_PARTICLES
        if (event.stage != RenderJSLevelRenderStage.AFTER_PARTICLES) return

        let a = subtitleList[uuid]

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


        let distance = Client.player.distanceToSqr(new Vec3(a.pos[0], a.pos[1], a.pos[2]))

        let scale = Math.pow(0.05 * distance, 0.3) + 0.1

        // if (a.crit) { scale *= 1.5 }

        //tell(scale)

        event.poseStack.pushPose()

        e.transformerCamera(e.poseStack, e.camera)
        // $RenderSystem.depthMask(false);

        //  $RenderSystem.disableDepthTest();
Client.partialTick

        event.translate(a.pos[0], a.pos[1], a.pos[2])
       //   e.poseStack.mulPose($Axis.YP.rotationDegrees(camera.getYRot()));
       // e.poseStack.mulPose($Axis.XP.rotationDegrees(camera.getXRot()));
       e.poseStack.mulPose(Client.entityRenderDispatcher.cameraOrientation())
        event.translate(0, scale-2, -0.5 * scale -0.5)
        e.rotationDegreesZ(180)//旋转角度
       event.poseStack.scale(scale * a.scale / 50, scale * a.scale / 50, 0)
        event.poseStack.pushPose()
     //   event.translate(0, a.y+scale-5, 0)
        event.drawString(a.title, -0.5 * Client.font.width(String(a.title)), 0, a.rgba)
        //$RenderSystem.enableDepthTest();
        event.poseStack.popPose()
        //event.drawString('a.ti4563tle', 0, 0, 255,255,244,255)

        event.poseStack.popPose()




        if (!(Client.paused)) {


            let rgba = Number(a.rgba) //Color.rgba(255, 255, 255, 255 * Math.sin(PI * time / 200))

            //   Client.player.tell(rgba)
            let r = (rgba >> 16) & 255

            let g = (rgba >> 8) & 255

            let b = (rgba) & 255

            let endR = a.r
            let endG = a.g
            let endB = a.b

            let time = a.time

            r = Math.max(0, r - 0.1 * Math.cos(PI * time / 200) * (r - endR))//(r > 128) ? Math.min(r + 2, 255) : Math.min(r + 4, 255)

            g = Math.max(0, g - 0.1 * Math.cos(PI * time / 200) * (g - endG))//(g > 128) ? Math.min(g + 2, 255) : Math.min(g + 4, 255)

            b = Math.max(0, b - 0.1 * Math.cos(PI * time / 200) * (b - endB))//(b > 128) ? Math.min(b + 2, 255) : Math.min(b + 4, 255)


            //  Client.player.tell(r + '  ' + b + '  ' + g)

            a.rgba = getColor(
                r,
                g,
                b,
                255 * (time < 70 ? Math.sin((PI * time / 70) / 2) : 1)//透明度渐变
            ).toString()

            //Client.player.tell( scale)

            // if(a.crit){a.scale--}
            let c = 1

            if (a.crit) c = 5

            if (time >= 0) {
                if (time > 95) {
                    a.scale -= c * 0.04 * DPF
                    //a.x -= 2 * (String(a.title).length) / fps//偏移
                } else if (time > 70) {
                    // a.x += 0.6 * (String(a.title).length) / fps
                    a.scale -= c * 0.08 * DPF
                } else {
                    a.y += -50 * ((75 - time) / 100) / fps
                }

            }

            a.time = time - DPF//生命周期也需加入fps影响


            if (a.time <= 0 || Object.keys(particleList).length > 100) {
                delete subtitleList[uuid]

            }



        }

    }
    return
    if (!(global.reactionSnow.sort['index'])) {
        global.reactionSnow.sort['index'] = 0

    }
    if (!(global.reactionSnow.sort['Initial'])) {//初始化

        global.reactionSnow.sort['Initial'] = 0
    }

    let index = global.reactionSnow.sort['index']//当前索引

    let initial = global.reactionSnow.sort['Initial']//首位索引

    var width = Client.window.guiScaledWidth / 2 + 40 * (2 * Math.random() - 1)
    var height = Client.window.guiScaledHeight / 2 + 40 * (2 * Math.random() - 1)

    if (data.contains('reaction_snow')) {//添加

        if (index - initial < 50) {//最大数量
            let word = data.getString('reaction_snow')//注意  返回的并不是真正的字符串

            let v = data.getInt('reaction_vertical')

            let h = data.getInt('reaction_horizontal')


            let color = data.getInt('reaction_color')


            data.remove('reaction_snow')


            global.reactionSnow.time[index] = 100//动画时间

            // Client.player.tell('竖   ' + v)
            //Client.player.tell(String(word).length)

            global.reactionSnow.content[index] = {
                type: 'renderJSText',
                text: word,
                layer: 'hud',
                step: 'aboveAll',
                x: width + 2 * h - 30,
                y: height + 1.5 * v,
                scale: 1.5,
                color: getColor(255, 255, 255, 255).toString(),//color.toString()
                remove: false
            }

            global.reactionSnow.color[index] = {
                r: (color >> 16) & 255,

                g: (color >> 8) & 255,

                b: (color) & 255
            }//color.toString()//颜色缓存
            //内容

            //setData(player, 'int', 'reaction_index', index + 1)//当前索引增加

            global.reactionSnow.sort['index'] = index + 1

            // console.log('index' + index)
        }
    }

    for (let i = initial; i < index; i++) {//动画遍历

        //console.log('i  ' + i + '    ' + global.reactionSnow.time[i])
        let fps = (80 / Math.max(Client.fps, 5))


        let time = global.reactionSnow.time[i] -= fps
        //global.reactionSnow.time[i]
        let word = global.reactionSnow.content[i].word


        //player.tell(global.reactionSnow.time[i]) 0.4 * (1+(2 - String(word).length))0.4 * (2 - String(word).length)

        if (time >= 0) {
            if (time > 95) {
                global.reactionSnow.content[i].scale += 0.1 * fps
                global.reactionSnow.content[i].x -= 0.2 * (String(word).length) * fps//偏移
            } else if (time > 70) {
                global.reactionSnow.content[i].x += 0.06 * (String(word).length) * fps
                global.reactionSnow.content[i].scale -= 0.03 * fps
            } else {
                global.reactionSnow.content[i].y -= ((75 - time) / 100) * fps
            }


            let rgba = Number(global.reactionSnow.content[i].color) //Color.rgba(255, 255, 255, 255 * Math.sin(PI * time / 200))

            //   Client.player.tell(rgba)
            let r = (rgba >> 16) & 255

            let g = (rgba >> 8) & 255

            let b = (rgba) & 255

            let endR = global.reactionSnow.color[i].r
            let endG = global.reactionSnow.color[i].g
            let endB = global.reactionSnow.color[i].b


            r = Math.max(0, r - 0.1 * Math.cos(PI * time / 200) * (r - endR))//(r > 128) ? Math.min(r + 2, 255) : Math.min(r + 4, 255)

            g = Math.max(0, g - 0.1 * Math.cos(PI * time / 200) * (g - endG))//(g > 128) ? Math.min(g + 2, 255) : Math.min(g + 4, 255)

            b = Math.max(0, b - 0.1 * Math.cos(PI * time / 200) * (b - endB))//(b > 128) ? Math.min(b + 2, 255) : Math.min(b + 4, 255)


            //  Client.player.tell(r + '  ' + b + '  ' + g)

            global.reactionSnow.content[i].color = getColor(
                r,
                g,
                b,
                255 * (time < 70 ? Math.sin((PI * time / 70) / 2) : 1)//透明度渐变
            ).toString()//注意要转成字符串<<<<<< 不能有小数

            //(155 << 24) | (255 << 16) | (255 << 8) | 255 

            //Client.player.tell(' ll'+global.reactionSnow.content[i].color)
        }

        if ((global.reactionSnow.time[i]) <= 0) {//删除
            //Client.player.tell('删除')
            global.reactionSnow.content[i].remove = true

            Painter.paint(global.reactionSnow.content)

            global.reactionSnow.time[i] = undefined//因存入paint的格式有限制  所以只能分开存储

            global.reactionSnow.content[i] = undefined

            // console.log('删除')

            // setData(player, 'int', 'reaction_Initial', i + 1)//起始索引增加
            global.reactionSnow.sort['Initial'] = initial + 1

        }

    }

    Painter.paint(global.reactionSnow.content)


}



























