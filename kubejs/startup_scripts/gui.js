



//* aparam {Interna2. LivingDeathEvent} eventevent {global. LivingDeathEventlet { entity, S 0 u r C e }eventtet {×， Y, Z, tevet }entityCurios.isPresent(pIayer: entity, item:&& $ForgeHooks.onLivingUseTotem(arge: entity,argl.· source,arg2: curios.getltem(player: entity,lmain handlarg3:entity.setHeaIth(arge: 1 ）entity · removeAIIEffects( ）《 yuushya ： horaisan—kaguya 《）item:] yuushya ),duration: 999 ， amplifier: 19 ）entity.potionEffects.add(mobEffect: ' regeneration'Ctient.gameRenderer.dispIayItemActivation(arge: 'yuushya:horaisan—kaguyal)Ctient.particIeEngine.createTrackingEmitter(arge: entity, argl: $ParticIeTypes.TOTEM_OF_UNDYING, arg2: 39 ）IeveI.pIaySound(argO: nuII, argl: ×， arg2: y, arg3: Z, arg4: 《 item.totem.uselarg5 ： entity.soundSource, arg6: 1 ，event.setCanceted(argO: true)arg7: 1 ）
//let screen=Java. loadClass( "net.minecraft.client.gui.screens.Screen")

//let screen=Java. loadClass('Menu')


//NativeEvents.onEvent('highest',false)
//let screen1=Java. loadClass('lectern')



//ForgeEvents.onEvent('net.minecraftforge.client.event.ScreenEvent$Init$Post', e => {//初始化
//
//
//
//    Client.player.tell(e.screen instanceof LecternGui)//.match(/\[object (.*?)\]/)[1])
//
//    //Client.mouseHandlerObject.prototype.toString.call()
//
//
//
//
//})
//
//let a=0


//ForgeEvents.onEvent(, e => {


//tell(456)


//})

ForgeEvents.onEvent("net.minecraftforge.event.entity.player.PlayerEvent$HarvestCheck", e => {


//tell(456)


})
ForgeEvents.onEvent("net.minecraftforge.client.event.InputEvent$InteractionKeyMappingTriggered", e => {

//e.bt.putBoolean('dodge', true)
//tell(567)


})


ForgeEvents.onEvent('net.minecraftforge.client.event.ScreenEvent$MouseDragged$Post', e => {

//a+=e.dragX
   

    
})
ForgeEvents.onEvent('net.minecraftforge.client.event.ScreenEvent$Render$Post', e => { })

//ForgeEvents.onEvent('net.minecraftforge.client.event.InputEvent$', e => {//关闭界面时触发Input
//
//tell(e.getKeyMapping().getName())
//
//})

//鼠标滚轮
ForgeEvents.onEvent('net.minecraftforge.client.event.InputEvent$MouseScrollingEvent', e => {//关闭界面时触发Input

//Client.player.tell(e.getScrollDelta())

})

ForgeEvents.onEvent('net.minecraftforge.client.event.ScreenEvent$MouseScrolled$Post', e => {//打开界面时才触发Screen

//Client.player.tell(e.getScrollDelta())

})
//鼠标3键点击事件
ForgeEvents.onEvent('net.minecraftforge.client.event.ScreenEvent$MouseButtonPressed', e => {//打开界面时才触发Screen



//Client.player.tell(e.button)

})
//鼠标按键释放
ForgeEvents.onEvent('net.minecraftforge.client.event.ScreenEvent$MouseButtonReleased', e => {//打开界面时才触发Screen



//Client.player.tell(e.button)

})



//鼠标滚轮
ForgeEvents.onEvent('net.minecraftforge.client.event.ScreenEvent$MouseScrolled', e => {//打开界面时才触发

//Client.player.tell(e.getScrollDelta())


})

ForgeEvents.onEvent('net.minecraftforge.client.event.ScreenEvent$Render$Post', e => {//渲染


    //Client.setScreen()

    // e.screen.removed()//resize(Client,-200,0)Component_
    //e.screen.renderTooltip(e.poseStack,,304,405)
    if (e.screen instanceof $LecternClass) {
    
    
   
    
    
    }
    

})

//let DPF=1

ForgeEvents.onEvent('net.minecraftforge.client.event.RenderLevelStageEvent', e => {


 //  DPF = Client.paused ? 0 : 90 / Math.pow(Client.fps, 1)


//tell(DPF)




})
ForgeEvents.onEvent('net.minecraftforge.client.event.EntityRenderersEvent$AddLayers', e => {


 //  DPF = Client.paused ? 0 : 90 / Math.pow(Client.fps, 1)


//tell(DPF)

    
    
//tell(e.getRenderer('player').getLayers().get(0))


})
//ForgeEvents.onEvent('net.minecraftforge.client.event.ScreenEvent$CharacterTyped', e => {

//e.setResult('default')


//})MouseButtonPressed
ForgeEvents.onEvent('net.minecraftforge.client.event.InputEvent$MouseButton$Post', e => {




})



ForgeEvents.onEvent('net.minecraftforge.client.event.ScreenEvent$Opening', e => {





})
ForgeEvents.onEvent('net.minecraftforge.client.event.RenderLevelStageEvent', e => {


e.poseStack


})


//ForgeEvents.onEvent('net.minecraftforge.client.event.RenderGuiEvent$Post', event => {//gui事件
//
//    Client.gui.bossOverlay.reset()//删除原版boss条  注意 直接写在事件外时  只会执行一次
//
//    /**@param {Internal.RenderGuiEvent$Post} event*/
//
//    //const {guiGraphics}=event
    //event.getPoseStack().scale(5,5,5)
    //console.log(event.getWindow().setWidth(873))
    //Client.gui.//setTitle({font:'gdrgtrt'})

    //  event.getWindow().setTitle('原神_启动')//窗口标题修改

    //event.getWindow().setIcon()
    //console.log()

    //  let a=Java.loadClass("net.minecraftforge.client.event.ViewportEvent")
    //let a=Java.loadClass( "net.minecraft.client.renderer.LightTexture")

    //let f=  new Matrix4f()

    //Client.levelRenderer.renderLevel(event.poseStack,10,10,true,Client.gameRenderer.mainCamera,Client.gameRenderer,new a(Client.gameRenderer,Client),f.convertToJOML())
    //Client.player.facing.conve
//
//})
//
////let gui = Java.loadClass("net.minecraft.client.gui.components.Widget")
//
////let gui = Java.loadClass("net.minecraft.client.gui.components.Button")
//
//ForgeEvents.onEvent('net.minecraftforge.client.event.ScreenEvent$Init$Post', event => {
//
//    // event.screen.addRenderableOnly(gui.render(,))
//    /*
//        event.screen.addRenderableWidget(
//            gui
//                .builder(Text.of("a").font("kubejs:botton"), () =>
//                    Client.player.sendData( "open crafting",
//                        
//                        {}))
//                .bounds(event.screen.guiLeft + event.screen.getXsize()
//                    - 80，screen.guiTop + 60，
//                    20，20)
//                .build())
//    */
//
//
//
//

















ForgeEvents.onEvent('net.minecraftforge.client.event.CustomizeGuiOverlayEvent', event => {


    //event.getWindow().setIcon()

    /**@param {Internal.RenderGuiEvent$Post} event*/

    //const {guiGraphics}=event


})




