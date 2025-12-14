
let 声望界面窗口 = 'kubejs:gui/dan/dan_window.png'

let 声望界面背景 = 'kubejs:gui/dan/dan_background.png'

let 声望界面图标 = 'kubejs:gui/dan/dan_icon.png'

let 声望升级图标 = 'kubejs:gui/dan/dan_effect.png'

let danName = ['原木', '岩石', '白铁', '黄金', '钻石', '合金', '终末', '创造者']

let danLevels = ['I', 'II', 'III', 'IV', 'V', 'VI',]

let dan_move1 = 0

let dan_move2 = 1

let o未更新声望 = 0

let 未更新声望 = 0//getDan(Client.player)

let 未更新声望变化速度 = 0

let 声望

//let a = 0

NetworkEvents.dataReceived('danLocking', e => {

    let data = e.data.get('data')

    // tell(data)


    // tell(areData(Client.player, 'danLocking'))
    //tell(data['kill'])
    if (data['remove']) {
        // tell(646)
        e.player.getRootData().remove('danLocking')

    } else {


        setData(e.player, $List, 'danLocking', data)

    }

    //tell(areData(Client.player, 'danLocking'))
})

NetworkEvents.dataReceived('dan_animation', e => {

    let data = { old: e.data.getInt('old'), new: e.data.getInt('new') }

    new guiAnimation('dan_animation', 60, data)







})
let criticalDecide = (value1, value2, number) => {



    if (
        (value1 < number && value2 >= number) ||
        (value1 >= number && value2 < number)

    ) { return true }

    return false


}
let isUpgradeDan = (oldDan, dan) => {

    if (criticalDecide(oldDan, dan, 500)) {

        return true

    } else if (criticalDecide(oldDan, dan, 1200)) {

        return true

    } else if (criticalDecide(oldDan, dan, 2000)) {
        return true

    } else if (criticalDecide(oldDan, dan, 3000)) {
        return true
    } else if (criticalDecide(oldDan, dan, 4200)) {
        return true
    } else if (criticalDecide(oldDan, dan, 5500)) {
        return true

    } else if (criticalDecide(oldDan, dan, 7000)) {

        return true
    }

    return false
}




let getDanStage = (声望) => {//返回0为声望不合法



    if (声望 < 500 && 声望 >= 0) {
        return [1, 125, 声望 / 125, 0]
    } else if (声望 < 1200 && 声望 >= 500) {

        return [2, 140, (声望 - 500) / 140, 500]
    } else if (声望 < 2000 && 声望 >= 1200) {

        return [3, 160, (声望 - 1200) / 160, 1200]
    } else if (声望 < 3000 && 声望 >= 2000) {

        return [4, 200, (声望 - 2000) / 200, 2000]
    } else if (声望 < 4200 && 声望 >= 3000) {

        return [5, 200, (声望 - 3000) / 200, 3000]
    } else if (声望 < 5500 && 声望 >= 4200) {

        return [6, 260, (声望 - 4200) / 260, 4200]
    } else if (声望 < 7000 && 声望 >= 5500) {

        return [7, 250, (声望 - 5500) / 250, 5500]
    } else if (声望 >= 7000) {
        return [8, 1, (声望 - 7000), 7000]
    }
    return [0, 0, 0, 0]

}

let getStageGrade = (声望) => {//获取一个段位的分级(I II III)






}

let renderDanBarAdd = (data, oldData, event, 平滑变化) => {

    // tell(oldData[1])

    if (oldData[1] == 1) return

    if (data[0] == oldData[0] && Math.floor(data[2]) == Math.floor(oldData[2])) {

        event.drawTexture(声望界面图标, -60, -3, 400, 400, 0, 111, 120 * ((声望 - data[3]) % data[1] / data[1]), 6)//绿条图标


    } else {

        event.drawTexture(声望界面图标, -60, -3, 400, 400, 0, 111, 120, 6)//绿条图标

    }

    event.drawTexture(声望界面图标, -60, -3, 400, 400, 0, 120, 120 * ((平滑变化 - oldData[3]) % oldData[1] / oldData[1]), 6)//蓝条图标


}

let renderDanBarReduce = (data, oldData, event, 平滑变化) => {
    if (oldData[1] == 1) return

    //  tell(oldData[1])
    event.drawTexture(声望界面图标, -60, -3, 400, 400, 0, 111, 120 * ((平滑变化 - oldData[3]) % oldData[1] / oldData[1]), 6)//绿条图标

    if (data[0] == oldData[0] && Math.floor(data[2]) == Math.floor(oldData[2])) {

        event.drawTexture(声望界面图标, -60, -3, 400, 400, 0, 120, 120 * ((声望 - data[3]) % data[1] / data[1]), 6)//蓝条图标


    } else {
        //tell(345257)
        //  event.drawTexture(声望界面图标, -60, -3, 400, 400, 0, 111, 120, 6)//绿条图标

    }








}


let renderDanBarAdd2 = (data, oldData, event, 平滑变化, 声望,textrue) => {

    // tell(oldData[1])

    if (oldData[1] == 1) return
    event.pushPose()

    event.poseStack.translate(0.5, 0.5, 0)

    if (data[0] == oldData[0] && Math.floor(data[2]) == Math.floor(oldData[2])) {

        event.drawTexture(textrue, -24, -24, 1500, 1000, 55, 0, 41 * Math.min(1, 声望), 6)//绿条图标


    } else {

        event.drawTexture(textrue, -24, -24, 1500, 1000, 55, 0, 41, 6)//绿条图标

    }

    event.drawTexture(textrue, -24, -24, 1500, 1000, 109, 0, 41 * Math.min(1, 平滑变化), 6)//蓝条图标
    event.popPose()


}

let renderDanBarReduce2 = (data, oldData, event, 平滑变化, 声望,textrue) => {


    if (oldData[1] == 1) return
    event.pushPose()

    event.poseStack.translate(0.5, 0.5, 0)

    event.drawTexture(textrue, -24, -24, 1500, 1000, 55, 0, 41 * Math.min(1, 平滑变化), 6)//绿条图标

    if (data[0] == oldData[0] && Math.floor(data[2]) == Math.floor(oldData[2])) {

        event.drawTexture(textrue, -24, -24, 1500, 1000, 109, 0, 41 * Math.min(1, 声望), 6)//蓝条图标


    } else {
        //tell(345257)
        //  event.drawTexture(声望界面图标, -60, -3, 400, 400, 0, 111, 120, 6)//绿条图标

    }

    event.popPose()






}




let danPoint = (event,width) => {


  if (presentAnimation&&presentAnimation.name=="dan_animation") {
        
      if (!(Client && Client.player)) return
     
     let tick = presentAnimation.tick
     
     let oTick = presentAnimation.oTick
     
     let animationData = presentAnimation.data
     
     let data = getDanStage(animationData.new)
     
     
     
    let c=Math.min(40,60-tick)
     
     let a = (Math.min(2, Math.pow(100 - tick, 0.95) * 0.02 + 1))
     
     let b= Mth.lerp(Client.partialTick,Math.min(8, Math.pow(100 - oTick, 0.7) * 0.5),Math.min(8, Math.pow(100 - tick, 0.7) * 0.5))
     
     let 平滑变化 = Mth.lerp(c / 40, animationData.old, animationData.new)
     
     let oldData = getDanStage(平滑变化)//用差值获取变化值
     
     let 当前=animationData.new
     
     event.poseStack.translate(width,50,0)
     
     //event.rotationDegreesZ(-90 )
    event.pushPose()
     
    event.poseStack.mulPose($Axis.ZP.rotationDegrees(45))
     
    
     renderTextrue(event, 声望升级图标, 0, 0, 0, 0.35 * a, -25, -25, 1500, 1000, 0, 0, 50, 50)//框
  
         let dan1=data[3]+Math.floor(data[2])*data[1]
       
       let dan2 = data[3] + Math.floor(Math.ceil(data[2])) * data[1]
       
        let oldDan1=oldData[3]+Math.floor(oldData[2])*oldData[1]
       
       let oldDan2 = oldData[3] + Math.floor(Math.ceil(oldData[2])) * oldData[1]
       
       
       let differ=Math.max(data[1],dan2 - dan1)//有可能为0
      
     let oldDiffer = Math.max(oldData[1], oldDan2 - oldDan1)
     
     
     
     event.scale(0.35 * a,0.35 * a)
     if (animationData.new >= animationData.old) {
       
  
       
       if (differ!=0&&oldDiffer!=0) {
        
        // tell(平滑变化)
      
       renderDanBarAdd2(data,oldData,event,4*(平滑变化-oldDan1)/oldDiffer,4*Math.max(0,当前-dan1)/differ,声望升级图标)
        event.poseStack.mulPose($Axis.ZP.rotationDegrees(90))
        renderDanBarAdd2(data,oldData,event,4*Math.max(0,平滑变化-oldDan1-0.25*oldDiffer)/oldDiffer,4*Math.max(0,当前-dan1-0.25*differ)/differ,声望升级图标)
        event.poseStack.mulPose($Axis.ZP.rotationDegrees(90))
        renderDanBarAdd2(data,oldData,event,4*Math.max(0,平滑变化-oldDan1-0.5*oldDiffer)/oldDiffer,4*Math.max(0,当前-dan1-0.5*differ)/differ,声望升级图标)
        event.poseStack.mulPose($Axis.ZP.rotationDegrees(90))
        renderDanBarAdd2(data,oldData,event,4*Math.max(0,平滑变化-oldDan1-0.75*oldDiffer)/oldDiffer,4*Math.max(0,当前-dan1-0.75*differ)/differ,声望升级图标)
       }
       //tell(4*(当前-0.75*dan1)/(dan2 - dan1))
     //  tell(4*平滑变化 +'   '+dan2 +'   '+dan3 +'   '+dan4 )
    
     
     
     } else {
     
        
       if (differ!=0&&oldDiffer!=0) {
        
        // tell(平滑变化
       renderDanBarReduce2(data,oldData,event,4*(平滑变化-oldDan1)/oldDiffer,4*Math.max(0,当前-dan1)/differ,声望升级图标)
        event.poseStack.mulPose($Axis.ZP.rotationDegrees(90))
        renderDanBarReduce2(data,oldData,event,4*Math.max(0,平滑变化-oldDan1-0.25*oldDiffer)/oldDiffer,4*Math.max(0,当前-dan1-0.25*differ)/differ,声望升级图标)
        event.poseStack.mulPose($Axis.ZP.rotationDegrees(90))
        renderDanBarReduce2(data,oldData,event,4*Math.max(0,平滑变化-oldDan1-0.5*oldDiffer)/oldDiffer,4*Math.max(0,当前-dan1-0.5*differ)/differ,声望升级图标)
        event.poseStack.mulPose($Axis.ZP.rotationDegrees(90))
        renderDanBarReduce2(data,oldData,event,4*Math.max(0,平滑变化-oldDan1-0.75*oldDiffer)/oldDiffer,4*Math.max(0,当前-dan1-0.75*differ)/differ,声望升级图标)
       }
     //renderDanBarReduce2()
     
     }
     
     
     
     event.popPose() 
     
     
       RenderJSRenderSystem.enableBlendJS()//启用透明  允许之下的图片渲染透明颜色  本已经成功透明渲染的语句不能在其之中
     if (isUpgradeDan(animationData.old, animationData.new)) {
     
        $RenderSystem.setShaderColor(1, 1, 1,(10*b-40)/40 )
       renderTextrue(event, 声望界面图标, 0.7, 0, 0, 1.2*(2*(8-b)+1), -14, -19, 400, 400, 28 * (data[0] - 1) + 1, 64, 27, 33)//段位图标
          $RenderSystem.setShaderColor(1, 1, 1, 1)
     
       
     } else {
     

       renderTextrue(event, 声望界面图标, 0.7, 0, 0, 1.2, -14, -19, 400, 400, 28 * (data[0] - 1) + 1, 64, 27, 33)//段位图标
     
     }
     let danLevel = (Math.min(5, Math.floor(data[2])))
     
 // tell(b)

     if (animationData.new <= 6999) {
       
       event.pushPose()
       event.poseStack.translate(-0.5,13,0)
       event.scale(1.2,1.2)
       event.drawTexture(声望界面图标, -6.5, -6.5, 400, 400, 133, 128, 25, 25)//图标
     event.scale(0.5,0.5)
      event.drawTexture(声望界面图标, -9, -8, 400, 400, 22 * danLevel + 1, 129, 21, 17)//图标
      event.popPose() 
     }
     
      renderTextrue(event,声望升级图标,0,0,0,  0.4 ,-755+50*b, -36, 1500, 1000, 0, 61, 303, 73)//图标
     
     renderTextrue(event,声望升级图标,0,0,0,  0.4 ,452-50*b, -36, 1500, 1000, 324, 61, 303, 73)//图标
     
            //if (animationData.new <= 6999)
     
    // tell(animationData.old+' '+animationData.new)
     
  
     
     
     
    // Utils.server
     
     
     
     
     
     
     
    }












}





let danUi = (event, g) => {

    //RenderJSRenderSystem.enableBlendJS()//启用透明  允许之下的图片渲染透明颜色  本已经成功透明渲染的语句不能在其之中

    //tell(areData(Client.player, 'danLocking'))



    if (Client.player && Client.screen instanceof $LecternClass && Client.player.containerMenu.containerId == 102) {

        声望 = getDan(Client.player)

        if (typeof 未更新声望 != 'number') {

            未更新声望 = getDan(Client.player)

        }


        if (dan_move1 < 60) dan_move1 += DPF * ((60 - dan_move1) / 30)//动画

        if (60 - dan_move1 < 0.2) dan_move1 = 60

        if (dan_move1 >= 30 && dan_move2 < 60) dan_move2 += (DPF * (1 + dan_move2 * 0.02)) ///* (0.2+0.02*dan_move2)//((60 - dan_move2) / 20)

        if (60 - dan_move2 < 0.02) dan_move2 = 60


        let width = Client.window.guiScaledWidth

        let height = Client.window.guiScaledHeight//缩放后屏幕大小

        let selective = Math.floor((MouseY - copy_roll - 20 + 12.5) / 50) //鼠标当前位置选择的项目


        // let scale = 1.3 + 0.2 * Math.cos(copy_click / 60)
        event.fill(0, 0, 5000, 5000, 10, 10, 10, overlay * 7)//叠加层

        //event.poseStack.pushPose()
        //  event.translate(0, 0, 500)//先设置位置再调尺寸
        //
        //vent.fill(0, 0, 500, 500, 10, 10, 10, overlay * 1)//叠加层
        //   event.poseStack.popPose()
        //   

        //tell(width)
        event.poseStack.pushPose()
        //event.scale(width / 640, height / 375)//图片拉伸覆盖

        //   event.translate(322, 166, 0)//先设置位置再调尺寸

        // event.scale(0.4, 0.4)
        event.scale(1, 1)

        //  event.translate(-1212, -606, -1)

        event.drawTexture(声望界面窗口, 10, 10, 320, 194, 0, 0, 50, 50)//图片左上

        event.drawTexture(声望界面窗口, width - 50 - 10, height - 50 - 10, 320, 194, 320 - 50, 194 - 50, 50, 50)//图片//右下

        event.drawTexture(声望界面窗口, 10, height - 50 - 10, 320, 194, 0, 194 - 50, 50, 50)//图片左下

        event.drawTexture(声望界面窗口, width - 50 - 10, 10, 320, 194, 320 - 50, 0, 50, 50)//图片右上


        event.poseStack.pushPose()
        event.translate(60, 10, 0)
        event.scale((width - 120) / 220, 1)
        event.drawTexture(声望界面窗口, 0, 0, 320, 194, 50, 0, 320 - 100, 50)//图片上
        event.poseStack.popPose()

        event.poseStack.pushPose()
        event.translate(60, height - 60, 0)
        event.scale((width - 120) / 220, 1)
        event.drawTexture(声望界面窗口, 0, 0, 320, 194, 50, 194 - 50, 320 - 100, 50)//图片下
        event.poseStack.popPose()

        event.poseStack.pushPose()
        event.translate(10, 60, 0)
        event.scale(1, (height - 120) / 94)
        event.drawTexture(声望界面窗口, 0, 0, 320, 194, 0, 50, 50, 94)//图片左
        event.poseStack.popPose()


        event.poseStack.pushPose()
        event.translate(width - 60, 60, 0)
        event.scale(1, (height - 120) / 94)
        event.drawTexture(声望界面窗口, 0, 0, 320, 194, 320 - 50, 50, 50, 94)//图片
        event.poseStack.popPose()


        event.poseStack.pushPose()
        event.translate(19, 56, 0)
        event.scale((width - 37) / 1024, (height - 56 - 18) / 473)
        event.drawTexture(声望界面背景, 0, 0, 1024, 473, 0, 0, 1024, 473)//图片左上







        event.poseStack.popPose()

        //   tell(Math.ceil(2 / 3))


        let data = getDanStage(声望)

        let oldData = getDanStage(未更新声望)

        let 旗帜样式 = 0

        if (data[2] > 3) {

            旗帜样式 = 1

        }

        event.poseStack.pushPose()
        event.translate((width / 2), 56, 10)
        event.scale(3 * width / 640, 3 * height / 375)
        event.drawTexture(声望界面图标, -20, 5, 400, 400, 40 * 旗帜样式 + 80 * Math.floor(data[0] / 3) + 1, 1, 39, 62 * dan_move1 / 60)//旗帜

        let b = Math.abs(dan_move2 - 60)

        RenderJSRenderSystem.enableBlendJS()//启用透明  允许之下的图片渲染透明颜色  本已经成功透明渲染的语句不能在其之中

        //event.drawTexture(声望界面图标, -12.5, -12.5, 400, 400, 133, 128, 25, 25)//图标

        event.translate(0, 37, 0)
        event.scale(b / 20 + 1, b / 20 + 1)
        $RenderSystem.setShaderColor(1, 1, 1, dan_move2 / 60)
        //event.rotationDegreesZ(345)
        event.drawTexture(声望界面图标, -14, -19, 400, 400, 28 * (data[0] - 1) + 1, 64, 27, 33)//段位图标
        $RenderSystem.setShaderColor(1, 1, 1, 1)
        //event.poseStack.mulPose(new Quaternionf(1,1,0,1))

        //  event.drawTexture(声望界面图标, -14, -19, 400, 400, 28 * (data[0] - 1) + 1, 64, 27, 33)//图标


        event.poseStack.popPose()
        //  tell(dan_move2)

        event.poseStack.pushPose()
        event.translate((width / 2) - 0.3, 56, 15)
        event.scale(2.4 * width / 640, 2.4 * height / 375)

        //  a+=0.8
        event.translate(0, 76, 0)
       // event.rotationDegreesZ(90 * dan_move1 / 60)
        event.scale(1.25, 1.25)

        if (声望 <= 6999) event.drawTexture(声望界面图标, -6.5, -6.5, 400, 400, 133, 128, 25, 25)//图标
      //  event.rotationDegreesZ(-90 * dan_move1 / 60)

        event.scale(0.45, 0.45)
        event.translate(0.1, 0, 10)

        let danLevel = (Math.min(5, Math.floor(data[2])))

        if (声望 <= 6999) event.drawTexture(声望界面图标, -11, -8, 400, 400, 22 * danLevel + 1, 129, 21, 17)//图标

        //event.translate(0, 20, 0)





        event.translate(0, 22, 0)
        event.drawTexture(声望界面图标, -62, -5, 400, 400, 0, 98, 124, 10)//框图标
        // tell(未更新声望)

        let 平滑变化 = Mth.lerp(Client.partialTick, o未更新声望, 未更新声望)

        //tell( Math.floor(oldData[2]))

        if (未更新声望 <= 声望) {
            renderDanBarAdd(data, oldData, event, 平滑变化)
        } else {

            // tell(455365463)

            renderDanBarReduce(data, oldData, event, 平滑变化)
        }
        //∞
        let txt

        if (未更新声望 > 7000) {
            txt = Math.floor(平滑变化) + '/∞'
        } else {

            txt = Math.floor(平滑变化) + '/' + (oldData[3] + oldData[1] * Math.floor(Math.ceil(oldData[2])))
        }

        let Xscale = 1.35 * width / 640

        let Yscale = 1.35 * height / 375

        renderText(event, txt, 0.75, 0.75, -0.5 * Client.font.width(txt) + 5, -2.5, getColor(255, 201, 108, 255), 0)//分数

        if (areData(Client.player, 'danLocking')) {

            let data = getData(Client.player, $List, 'danLocking')

            let time = getTimeFormat((data.time - Date.now()) / 1000)

            renderTextrue(event, 声望界面图标, -59, -12, 0, 1, -6.5, -6.5, 400, 400, 0, 149, 40, 28)//锁


            // event.drawTexture(声望界面图标, )//图标
            renderText(event, time, 0.7, 0.7, -0.5 * Client.font.width(time) - 42, -10, getColor(200, 200, 200, 255), 0)
            //   tell(Yscale)
            // tell(Xscale)

            if (newVirtualButton(width / 2 - 65 * Xscale, height / 2 + 55, 35 * Xscale, 18 * Yscale)) {//y轴无缩放?

                let guiGraphics1 = new GuiGraphics(Client, $Minecraft.getInstance().renderBuffers().bufferSource())

                $TooltipRenderUtil.renderTooltipBackground(guiGraphics1, MouseX, MouseY + 10, 50, 9, 4000, getColor(15, 15, 15, 150), getColor(10, 10, 10, 155), getColor(150, 150, 150, 255), getColor(250, 250, 250, 255),)

                guiGraphics1.pose().translate(0, 0, 4000)

                guiGraphics1["drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)"](
                    Client.font,
                    '声望等级\n保护',
                    Math.floor(MouseX),
                    Math.floor(MouseY) + 10,
                    getColor(200, 200, 200, 255),
                    false)




                //  tell(6325435)

            }



        }

        if (newVirtualButton(width / 2 - 35 * Xscale, height / 2 - 55 * Yscale, 70 * Xscale, 110 * Yscale)) {//y轴无缩放?

            let guiGraphics1 = new GuiGraphics(Client, $Minecraft.getInstance().renderBuffers().bufferSource())

            $TooltipRenderUtil.renderTooltipBackground(guiGraphics1, MouseX, MouseY + 10, 100, 50, 4000, getColor(15, 15, 15, 150), getColor(10, 10, 10, 155), getColor(150, 150, 150, 255), getColor(250, 250, 250, 255),)

            guiGraphics1.pose().translate(0, 0, 4000)

            renderMultText1(guiGraphics1, '声望级别---' + danName[data[0] - 1] + danLevels[danLevel] + '\n怪物等级提高---' + Math.floor(声望 / 70) + '级\n战利品掉落率提高---' + Math.min(800, (Math.floor(声望 / 70) ) * 4) + '%\n声望上限---' + Client.player.getAttributeValue('kubejs:max_dan') + '分', 1, 1, Math.floor(MouseX), Math.floor(MouseY) + 10, getColor(200, 200, 200, 255), 120)

            //  guiGraphics1["drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)"](
            //      Client.font,
            //      '当前段位等级',
            //      Math.floor(MouseX),
            //      Math.floor(MouseY) + 10,
            //      getColor(200, 200, 200, 255),
            //      false)
            //  tell(6325435)

        }


        //tell()
        //Mth.rotLerp(partialTick, livingEntity.yBodyRotO, livingEntity.yBodyRot);
        event.poseStack.popPose()







        event.poseStack.popPose()




        //tell(getDan(Client.player))














    }














}

let danTick = () => {


    if (
        Client.screen instanceof $LecternClass
        && Client.player.containerMenu.containerId == 102
    ) {
        if (typeof 未更新声望 == 'number') {

            if (未更新声望 < 声望) {
                if (未更新声望变化速度 == 0 || 未更新声望变化速度 < Math.abs(声望 - 未更新声望)) 未更新声望变化速度 = Math.max(100, Math.abs(声望 - 未更新声望))
                //tell('+')
                o未更新声望 = 未更新声望

                未更新声望 = 未更新声望 + Math.min((未更新声望变化速度 * 0.01), 声望 - 未更新声望)

            } else if (未更新声望 > 声望) {
                if (未更新声望变化速度 == 0 || 未更新声望变化速度 < Math.abs(声望 - 未更新声望)) 未更新声望变化速度 = Math.max(100, Math.abs(声望 - 未更新声望))
                //tell('-')
                o未更新声望 = 未更新声望

                未更新声望 = 未更新声望 - Math.min((未更新声望变化速度 * 0.01), -声望 + 未更新声望)

            } else {
                o未更新声望 = 未更新声望

                未更新声望变化速度 = 0

            }

        } else {
            // tell(6345)
            未更新声望 = getDan(Client.player)

        }


    }








}


RenderJSEvent.endScreen(102, e => {


    dan_move1 = 0

    dan_move2 = 1

})
