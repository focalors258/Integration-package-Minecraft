const RenderJSEventList = {}

RenderJSEventList.endScreen = []

RenderJSEventList.entityPost = []

RenderJSEventList.entityPre = []

const Animation = {}



//priority:1080   
const RenderJSEvent = {}
//<-优先加载外部变量


let overlay = 0//叠加层

let oldMouseY = Client.mouseHandler.mouseY / Client.window.guiScale

let oldMouseX = Client.mouseHandler.mouseX / Client.window.guiScale

//在tick更新
let MouseX = 0//Client.mouseHandler.mouseX / Client.window.guiScale
let MouseY = 0//Client.mouseHandler.mouseY / Client.window.guiScale


//let absoluteMouseX = MouseX / Client.window.width
//let absoluteMouseY = MouseY / Client.window.height
//

let MouseMoveX = 0
let MouseMoveY = 0

let guiMultipleX2 = Client.window.width / 2560

let guiMultipleY2 = Client.window.height / 1500

let guiMultipleX = Client.window.guiScaledWidth / 640

let guiMultipleY = Client.window.guiScaledHeight / 375

//   Client.player.tell(Client.window.guiScaledWidth+'   '+Client.window.guiScaledHeight)
let screenId = 0

let levelRenderTick = 0

let RenderTick = 0

let DPF = 1
//注意 渲染位置会因为缩放提高而减小  如 当前缩放 4  屏幕高度 1500 渲染位置超过375时  就已经超过屏幕渲染范围

let mouseScroll_notUpdate = 0//鼠标滚轮right



let newVirtualButton = (x, y, width, height) => {

    if (MouseX > x && MouseX < (x + width) && MouseY > y && MouseY < (y + height)) return true


    return false

}




/**0-未滚动 1-上方向 -1-下方向 */
let getMouseScroll = () => {

    let mouseScroll = mouseScroll_notUpdate

    mouseScroll_notUpdate = 0

    return mouseScroll
}

let mouseTiming = [0, 0, 0]

let mouseLeftLast = false

let mouseRightLast = false

let mouseMiddleLast = false

let mouseLeftEnd = false

let mouseRightEnd = false


let mouseLeftPost = false
/*
= () => {

if (mouseLeftPost_notUpdate) {

    mouseLeftPost_notUpdate = false

    return true
}

return false
}
*/



let mouseRightPost = false
/*= () => {

if (mouseRightPost_notUpdate) {

    mouseRightPost_notUpdate = false

    return true
}

return false
}*/

//let mouseMiddlePost_notUpdate = false

let mouseMiddlePost = false
/*= () => {

if (mouseMiddlePost_notUpdate) {

    mouseMiddlePost_notUpdate = false

    return true
}

return false
}
*/

NativeEvents.onEvent('net.minecraftforge.client.event.ScreenEvent$MouseScrolled', event => {//界面关闭时触发
    // tell(mouseScroll_notUpdate)
    //
    switch (event.getScrollDelta()) {//传鼠标滚轮

        case -1: {
            mouseScroll_notUpdate = -1
            break
        }
        case 1: {
            mouseScroll_notUpdate = 1
            break
        }

    }

    let rool = RoolList[Client.player.containerMenu.containerId]
    if (rool) {

        getKeyAndValue(rool).forEach(([id, roll], i) => {

            roll.sliceScrol(event.getScrollDelta())

        })

    }




    //Client.player.tell(mouseScroll)
})


//net.minecraftforge.client.event.InputEvent$MouseButton$Post

NativeEvents.onEvent('net.minecraftforge.client.event.ScreenEvent$MouseButtonPressed', event => {

    // Client.player.tell(1)
    switch (event.button) {//传鼠标按键  按下

        case 0: {

            mouseLeftLast = true
            break
        }
        case 1: {
            mouseRightLast = true
            break
        }
        case 2: {
            mouseMiddleLast = true
            break
        }
    }



})






//NativeEvents.onEvent('net.minecraftforge.client.event.ScreenEvent$MouseButtonPressed$Pre', event => {
//
//
//})


//界面鼠标检测
//'net.minecraftforge.client.event.InputEvent$MouseButton$Post'//全局鼠标检测
NativeEvents.onEvent('net.minecraftforge.client.event.ScreenEvent$MouseButtonPressed$Post', event => {//界面鼠标检测

    if (Client.player) {
        let rool = RoolList[Client.player.containerMenu.containerId]
        if (rool && event.button == 0) {

            getKeyAndValue(rool).forEach(([id, roll], i) => {

                roll.oldMouse()

            })

        }
    }

    // 
    switch (event.button) {//传鼠标按键  按下

        case 0: {
            mouseLeftPost = true
            break
        }
        case 1: {
            mouseRightPost = true
            break
        }
        case 2: {
            mouseMiddlePost = true
            break
        }



    }


})

NativeEvents.onEvent('net.minecraftforge.client.event.ScreenEvent$MouseButtonReleased$Post',  /**@param {Internal.ScreenEvent$MouseButtonReleased$Post} event*/event => {

    MouseMoveX = 0

    MouseMoveY = 0


    //tell(345)
    switch (event.button) {//传鼠标按键  松开


        case 0: {
            mouseLeftLast = false
            mouseLeftPost = false
            mouseLeftEnd = true
            break
        }
        case 1: {
            mouseRightLast = false
            mouseRightPost = false
            mouseRightEnd = true
            break
        }
        case 2: {
            mouseMiddleLast = false
            mouseMiddlePost = false
            break
        }


    }

    mouseTiming = [0, 0, 0]

})

NativeEvents.onEvent('net.minecraftforge.client.event.ScreenEvent$MouseDragged$Pre', e => {

    if (Client.player) {
        MouseMoveX += e.dragX


        MouseMoveY += e.dragY

        let rools = RoolList[Client.player.containerMenu.containerId]
        if (rools) {

            // getKeyAndValue(rool).forEach(([id,   /**@param {Rool} roll */roll], i) => { })

            for (let id in rools) {
                let rool = rools[id]

                if (rool.direction == "vertical") {

                    rool.sliceMouse(e.dragY)

                } else if (rool.direction == "horizontal") {

                    rool.sliceMouse(e.dragX)
                }

            }


        }
    }
    // tell( e.dragY)

})



RenderJSEvent.entityPost = function (event) {

    RenderJSEventList.entityPost.push(event)


}

RenderJSEvent.entityPre = function (event) {

    RenderJSEventList.entityPre.push(event)

}


RenderJSEvent.endScreen = function (screenId, event) {//第一次执行后  后面添加的事件会使该方法再次执行


    if (screenId) {

        RenderJSEventList.endScreen[screenId] = []

        RenderJSEventList.endScreen[screenId].push(event)
    }

}


//
NativeEvents.onEvent('net.minecraftforge.client.event.ScreenEvent$Closing',/**@param {Internal.ScreenEvent$Closing} event  */event => {
    //注意 打开物品栏时也会导致触发 该时机无法获取到id
    //界面关闭时触发


    // Client.tell('->' + String(event.screen))



    //Client.player.tell('结束')
    //Client.player.tell(String(event.screen instanceof LecternClass)+'结束')&& Client.player.containerMenu.containerId == 101
    if (event.screen instanceof $LecternClass) {//重置动画帧

        overlay = 0//叠加层

        //在此处添加新界面



        for (let id in RenderJSEventList.endScreen) {//自定义事件

            if (id == String(screenId)) {

                RenderJSEventList.endScreen[id].forEach(e => e({ event: event }))

            }
        }

    }

})
//NativeEvents.onEvent('net.minecraftforge.client.event.ScreenEvent$Render$Pre', /**@param {Internal.ScreenEvent$Render$Pre} event  */event => {
//    if (event.screen instanceof $LecternClass && Client.player.containerMenu.containerId > 100) {//所有自定义ui均此修改
//        //该版本无法渲染  
//        event.setCanceled(true)//阻止渲染
//    }



//})//渲染  重复执行


NativeEvents.onEvent('net.minecraftforge.client.event.ScreenEvent$Render$Pre', /**@param {Internal.ScreenEvent$Render$Pre} event  */event => {//渲染  重复执行

    dataUpdate()


    //    tell(event.screen)

    if (event.screen instanceof $LecternClass && Client.player.containerMenu.containerId > 100) {//所有自定义ui均此修改
        //该版本无法渲染  
        event.setCanceled(true)//阻止渲染

        if (overlay < 15) overlay++//叠加层


        let rool = RoolList[Client.player.containerMenu.containerId]
        if (rool) {
            //tell(getKeyAndValue(rool))
            getKeyAndValue(rool).forEach(([id, roll], i) => {

                roll.tick()
                //  tell(roll.slidePos+"  "+id)

            })

        }

    }
    if (event.screen instanceof $InventoryClass) {

        // event.setCanceled(true)//阻止渲染

        //event.screen.addSlot(new $Slot(new $inventory(Client.player),0,36,50))

    }


    //Client.player.tell( Client.player.containerMenu.containerId)
    //   if (event.screen instanceof $LecternClass && Client.player.containerMenu.containerId == 101) { }//在此修改渲染方位时  会导致初始化事件重复执行
    //该版本无法渲染  

    // event.screen.render(event.poseStack,456,45,45)



    //  Client.player.tell(copy_click)



    // event.screen.render(event.poseStack,456,45,45)




})

//getMouseScroll())
//console.log(event.screen)
//Client.player.tell(Client.player.containerMenu.containerId)
// e.screen.removed()//resize(Client,-200,0)Component_
//e.screen.renderTooltip(e.poseStack,,304,405)
// ($Minecraft.getInstance().options.discreteMouseScroll().get() ? Math.sign(offset) : offset) * $Minecraft.getInstance().options.mouseWheelSensitivity().get();
// tell(mouseScroll_notUpdate)



// tell( $Minecraft.getInstance().options.discreteMouseScroll().get())


//NativeEvents.onEvent('net.minecraftforge.client.event.ScreenEvent$Init$Post',  /**@param {    Internal.ScreenEvent$Init$Post} event  */event => {//初始化  打开时执行一次
//
//    if (event.screen instanceof $LecternClass && Client.player.containerMenu.containerId == 101) {//在此修改渲染方位时  会导致初始化事件重复执行
//
//        //copy = true
//
//
//    }
//    //在此处添加新界面
//})
//


NativeEvents.onEvent('net.minecraftforge.client.event.ScreenEvent$Opening',  /**@param {    Internal.ScreenEvent$Init$Post} event  */event => {//打开时触发

    //Client.player.tell(event.screen.m_142416_)
    /*
      this.addRenderableWidget(Button.builder(this.yesButton, (p_169249_) -> {
         this.callback.accept(true);
      }).bounds(this.width / 2 - 50 - 105, pY, 100, 20).build());
      
      */
    // @ts-ignore

    // new ContainerData()

    // $Minecraft.getInstance().player.sendData



    // tell(event.screen)
    /*
      event.screen.addRenderableWidget(Button.builder('45646', e => {
       Client.setScreen(new LecternClass(new LecternMenuClass(102), new inventory(Client.player), '6786745'))
        //YUEFEI = true
      }).bounds(100, 200, 100, 20).build())
        */
    if (event.screen instanceof $InventoryClass) {

        //Client.player.tell(35)

    }



    //Util.getPlatform().openUri('https://fanyi.sogou.com/text?keyword=getPlatform&transfrom=auto&transto=zh-CHS&model=general');

    if (event.screen instanceof $LecternClass) {

        screenId = Client.player.containerMenu.containerId






        //
        // Client.gui.chat.clearMessages(true)
    }
})





NativeEvents.onEvent('net.minecraftforge.client.event.ScreenEvent$Init$Pre',  /**@param {    Internal.ScreenEvent$Init$Pre} event  */event => {//按键在此初始化

    //在此修改渲染方位时  会导致初始化事件重复执行

    if (event.screen instanceof $LecternClass && Client.player.containerMenu.containerId >= 101) {//取消按键


        event.setCanceled(true)


    }




})



NativeEvents.onEvent('net.minecraftforge.client.event.RenderGuiEvent$Post', event => {//gui事件

    Client.gui.bossOverlay.reset()//删除原版boss条  注意 直接写在事件外时  只会执行一次


})



let dataUpdate = () => {


    fps = Math.max(Client.fps, 5)//在此处更新
    // MouseX = Client.mouseHandler.mouseX / Client.window.guiScale
    // MouseY = Client.mouseHandler.mouseY / Client.window.guiScale
    guiMultipleX = Client.window.guiScaledWidth / 640
    guiMultipleY = Client.window.guiScaledHeight / 375

    guiMultipleX2 = Client.window.width / 2560
    guiMultipleY2 = Client.window.height / 1500

    MouseX = Client.mouseHandler.mouseX / Client.window.guiScale
    MouseY = Client.mouseHandler.mouseY / Client.window.guiScale

    mouseLeftEnd = false
    mouseRightEnd = false

    if (mouseLeftLast && mouseTiming[0] <= 1) {
        mouseTiming[0]++
        if (mouseTiming[0] == 1) {
            mouseLeftPost = false
        }
    }

    if (mouseRightLast && mouseTiming[1] <= 1) {
        mouseTiming[1]++
        if (mouseTiming[1] == 1) {
            mouseRightPost = false
        }
    }

    if (mouseMiddleLast && mouseTiming[2] <= 1) {
        mouseTiming[2]++
        if (mouseTiming[2] == 1) {
            mouseMiddlePost = false
        }
    }

}
let shaking_time = 0

let shaking1_time = 0

let shaking_intensity = 0

let screenShaking = (time, intensity, type) => {
    if (type == 'main') {
        shaking_time = time +  Date.now()/50
    } else if (type == 'sub') {
        shaking1_time = time +  Date.now()/50
    }
    shaking_intensity = intensity



}


NativeEvents.onEvent("net.minecraftforge.client.event.ViewportEvent$ComputeCameraAngles", event => {//似乎只能在straup生效


    //event.setRoll(90)

    /**@type {Internal.Player} */
    let entity = event.getCamera().getEntity()


    //entity.sendData('esrsras',)
    //tell(entity)
    //console.log(screen_shaking)


    let time = shaking_time// getData(entity, 'int', 'shaking_time')//entity.getAttributes().getValue('kubejs:screen_shaking')//通过属性传输数据需注意属性设置相同的值时会不刷新


    let time1 = shaking1_time//getData(entity, 'int', 'shaking1_time')
    //console.log(time)
    let intensity = shaking_intensity

    let tick = Date.now()/50
 
    if (entity.player) {
        if (time > tick) {

            // getData(entity,'double','shaking_intensity')//entity.getAttributes().getValue('kubejs:shaking_intensity')
            //let time = entity.getRootData().getInt('screen_shaking') - 1
            //  time--
            //console.log(time)
            event.setRoll((2 * Math.random() - 1) * (event.getRoll() + intensity * Math.cos((time - tick) * 4) * 3))
            event.setPitch((2 * Math.random() - 1) * (event.getPitch() + intensity * Math.cos((time - tick) * 3 + 2) * 3));//<---只能设置math.cos的倍数   不能在最外层设置倍数 否则会影响视角移动
            event.setYaw((2 * Math.random() - 1) * (event.getYaw() + intensity * Math.cos((time - tick) * 5 + 1) * 1.5));//getXXX获取的是原视角的数值  和摄像机视角区分

            // entity.setAttributeBaseValue('kubejs:screen_shaking', time)
            //setData(entity, 'int', 'shaking_time', time)


        } else if (time1 > tick) {

            //  let intensity1 = getData(entity,'double','shaking1_intensity')
            //let time = entity.getRootData().getInt('screen_shaking') - 1
            //   time1--
            //console.log(time)intensity1*Math.sin(time1/intensity1*PI/2) 
            // event.setRoll(1   * (event.getRoll() + Math.cos(time * 4) * 3))//旋转

            //   tell(intensity)
            //   
            //   tell((2*Math.random()-1)*intensity* Math.sin((time1-tick)/1*PI/2) )
            //     tell(1 * (event.getPitch() +(2*Math.random()-1)*intensity* Math.sin((time1-tick)/1*PI/2) ))

            event.setPitch(1 * (event.getPitch() + (2 * Math.random() - 1) * intensity * Math.sin((time1 - tick) / intensity * PI / 2)));//<---只能设置math.cos的倍数   不能在最外层设置倍数 否则会影响视角移动
            //event.setYaw(1   * (event.getYaw() +Math.cos(time * 5 + 1) * 1.5));//getXXX获取的是原视角的数值  和摄像机视角区分

            // entity.setAttributeBaseValue('kubejs:screen_shaking', time)
            // setData(entity, 'int', 'shaking1_time', time1-tick)
        }

    }






})


NetworkEvents.dataReceived('video', event => {//屏幕振动

  if (true) {


    let value = event.data.getDouble('value')//数值

    let name = event.data.getString('name')//项目名称

    //  let uuid = event.data.getString('entity')//实体id

    let player = event.player

    // let entitys = event.level.entities
    if (name == 'time') {//修改客户端玩家占领百分比值  <-将有特殊要求的项目名称的传输写在此处

      shaking1_time = value + Date.now() / 50

      //   setData(player, 'int', 'shaking_time', value)

    } else if (name == 'intensity') {//无需实体id
      shaking_intensity = value
      //setData(player, 'double', 'shaking_intensity', value)

    } else if (name == 'time1') {//修改客户端玩家占领百分比值  <-将有特殊要求的项目名称的传输写在此处
      shaking1_time = value + Date.now() / 50
      //setData(player, 'int', 'shaking1_time', value)
//tell(346)
    } else if (name == 'intensity1') {//无需实体id
        shaking_intensity = value
        
     //   tell(value)
        
      //setData(player, 'double', 'shaking1_intensity', value)

    }


  }

})


