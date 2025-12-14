
//type:
//renderJSTexture 图片
//renderJSText 文字 两种渲染模式  hud 始终渲染在界面图层下   screen 渲染在界面图层上
//text 只在未打开渲染在界面时渲染
//注意:如果type输入错误 则需关闭存档刷新
//RenderJSEvents.

//let gui = Java.loadClass("net.minecraft.client.gui.components.Widget")
  //  /**@param {Internal.RenderGuiEvent$Post} event*/
//let gui = Java.loadClass("net.minecraft.client.gui.components.Button")
 //.match(/\[object (.*?)\]/)[1])

    //Client.mouseHandlerObject.prototype.toString.call()
//Client.player.tell(event.screen instanceof LecternGui)
let abc=Java.loadClass('net.minecraft.client.renderer.MultiBufferSource$BufferSource')

let BufferSource = Java.loadClass('net.minecraft.client.renderer.MultiBufferSource$BufferSource')

let renderBuffer= Java.loadClass('net.minecraft.client.renderer.RenderBuffers')

let $EntityRenderer=Java.loadClass('net.minecraft.client.renderer.entity.EntityRenderer')

//Entity interaction 实体渲染事件??


ClientEvents.paintScreen(event => {//字幕

    let player=Client.player
   // subtitle()
})
RenderJSEvents.onLivingPostRender(e => {

if (e.entity.type == "minecraft:villager") { }
  // e.poseStack.translate(0,1,0)
  

})
RenderJSEvent.entityPre(event => {

 RenderJSRenderSystem.setShaderColor(1,1,1,1)
    //callRender(event)
   let entity = event.entity
    if (entity.type == "kubejs:gravity_circle") {
       

       $Render.bindCamera(event.poseStack)
       
        RenderJSRenderSystem.setShaderColor(2.15*1.9, 1.2*1.9, 3*1.9, 0.4)//修改颜色后需重置
        
    }else if (entity.type == "kubejs:attract_circle") {
       
        RenderJSRenderSystem.setShaderColor(5,5,5, 0.36)//修改颜色后需重置
        
    }else if (entity.type == "kubejs:fairy_bullet") {
   
        callRender1(event)
        //RenderJSRenderSystem.setShaderColor(2.15, 1.2, 3, 4)//修改颜色后需重置
        
    } else if (isFairy(entity) && entity.areData("client_host") && entity.areData("client_heal")) {//回复
        callHeal(event)
        
        
callRender2(event)
    // //攻击

        
        
    } else if (isFairy(entity) && entity.areData("client_host") && entity.areData("client_type")) {
    
    //    
        callRender3(event)
        
        
    } else if (event.entity.type == "kubejs:magic_crystal"||entity.type == "kubejs:split_crystal") {

    RenderJSRenderSystem.setShaderColor(3.1, 2.1, 8.1, 1.2)
    } else {
    
 RenderJSRenderSystem.setShaderColor(1,1,1,1)
  }
//tell(entity.type )
    if (entity.type == "minecraft:item") {
    
    
    }
  
  
  
  
  //   tell(Client.player.input.left)
  
  
  
  
  
  
  
  
  
  
// if (event.entity.type == "kubejs:fairy_bullet") {
//
//     
//  RenderJSRenderSystem.setShaderColor(3,2,3,1)
//  } else {
//      RenderJSRenderSystem.setShaderColor(1, 1, 1, 1)//修改颜色后需重置
//
//  }



})
RenderJSEvent.entityPost(event => {//注意 渲染的图片会遮挡其他实体

let {entity,guiGraphic,poseStack,multiBufferSource}=event
 //RenderJSRenderSystem.setShaderColor(1, 1, 1, 1)//修改颜色后需重置
    if(!Client.player)return


  
  
    entityRenderInit(event)
 //     $RenderSystem.enableBlend()
 // $RenderSystem.enableDepthTest()
 //      tell(3)
 //  RenderJSRenderSystem.setShaderColor(1,1,10,0.001)//每次渲染都需重置
   
 
 //entityBar(event, entity, guiGraphic)
 
//RenderSystem.enableBlend()
    absorptionRender(event, entity, guiGraphic)
    
addFieldRender(event,entity,guiGraphic)

  //RenderJSRenderSystem.enableBlendJS()

//  let guiGraphics= new $Render($Minecraft.getInstance(),event.poseStack,$Minecraft.getInstance().renderBuffers().bufferSource())
//    
//    guiGraphics.renderArmor(Client.player,event.poseStack,$EquipmentSlot .CHEST)
   enderEyeRender (event,entity,guiGraphic)
 
    // event.poseStack.translate(0,  5, 0)
   // tell(副本_condition[recent_copy.stringUuid])
 
  // tell(entity)

    copyIconRender(event, guiGraphic, entity)
    

  
    
  
  
  
  
  
    
})

RenderJSEvents.onGuiPreRender(event=>{//先渲染

  // let $abc=Java.loadClass('net.minecraft.world.entity.monster.Slime')

  //   $EntityRenderer.getTextureLocation(new $abc('slime',Client.level))
    if(!Client.player)return

      timeVelocityTick()
//if(Client.partialTick<0.1)Client.player.tick()
 
// barLogic(event)//boss显示
   
   

 combatAreaGui(event)//据点实体


    
  // 
    var width = (event.window.guiScaledWidth / 2) //x轴缩放中心
    
    var height = event.window.guiScaledHeight / 2 //y轴缩放中心
    
  
  copy_time(event, width, height)
  
 
 danPoint(event,width)
  
   skillAddEffect  (event,width,height)
  
  skillRender(event,width, height)
  

 
  
  
  
 //   let a= {
 //            name: 副本_名称,
 //            rule: {
 //               time: {  default: true, present: 0 ,value:[500]},
 //               be_att: {  default: true, present: 0 ,value:[10]},
 //               reaction: { default: false, present: 1 ,value:['冰冻',10]}
 //            }
 //        }
 //  setData(Client.player,$List,'aaa',['如若脱氧核糖以后也如同个人规划','豆腐干豆腐干合同发给他的房间很难与人体',3])
 // 
 // Client.player.tell(  getData(Client.player,$List,'aaa'))
    
     
   // areData(Client.player,'load')
   // 
   // setData(Client.player, $Boolean, 'load', true)
    
 //  let a = {
 //      name: 345,
 //      rule: 34534
 //  }
 //  
 //  Client.player.tell(a[Object.keys(a)[0]])
    
   //   event.poseStack.pushPose()
   // event.poseStack.scale(1, 1, 0)
   // event.poseStack.translate(64, 37, 2000)
   // event.drawShadowString('x:' + MouseX + 'y:' + MouseY, 0, 0, 255, 255, 255, 205)
   // event.poseStack.popPose()
    
    
   
    
//let a=Java.loadClass('net.minecraft.client')
    //Client.player.tell(String('->'+time))

    
})


RenderJSEvents.onGuiPostRender(event => {//后渲染
    
      RenderJSRenderSystem.enableBlendJS()//启用透明  允许之下的图片渲染透明颜色  本已经成功透明渲染的语句不能在其之中
    if(!Client.player)return
    
       renderFPS(event)
   
    
  
      let guiGraphics= new $Render($Minecraft.getInstance(),event.poseStack,$Minecraft.getInstance().renderBuffers().bufferSource())
    
    
    //guiGraphics.blit(背景,0,1500, 0,1000,0, 2000, 1000, 0, 0, 1, 1)
    
    
    
      event.poseStack.pushPose()
      
    event.translate(0,0,200)//和聊天栏渲染同级  需要提高z轴优先渲染
//
    //event.poseStack.scale(guiMultipleX,guiMultipleY , 0)
    
    

   
    
    CopyUi(event,guiGraphics)
   
  danUi(event,guiGraphics)

    
  
  event.poseStack.pushPose()
    event.poseStack.scale(1, 1, 0)
    event.poseStack.translate(64, 37, 1000)
    event.drawShadowString(('x:' + MouseX + 'y:' + MouseY), 0, 0, 255, 255, 255, 205)
    event.poseStack.popPose()
 
    //newVirtualButton
    
   
//event.drawShadowString(Client.font.plainSubstrByWidth('23423543563456345',30,false), 0, 50, 255, 255, 255, 205)
    
     //renderText(event,'我抄是你的木,我抄是你的木,我抄是你的木,我抄是你的木,我抄是你的木,我抄是你的木',1,1,50,50,0,8)
   // RenderJSRenderSystem.enableDepthTestJS()
 // getImageManager('kubejs:gui/copy/burning_arena.png').height
//RenderJSRenderSystem.setPositionTexShader()
    //event.drawTexture('kubejs:gui/copy.png', 0,  50 + 20, 512, 512, 0, 0, 176, 25,)
    
 
    
    
    
    event.poseStack.popPose()   
    
    
 
})


//ViewportEvent.ComputeFov


NativeEvents.onEvent("net.minecraftforge.client.event.ViewportEvent$ComputeFov", event => {

    if (FOVTimeEnd > Date.now()) {
    
        
event.setFOV(Math.min(170,event.getFOV() + (Math.min(FOV,$Mth.lerp((FOVTimeEnd-Date.now())/FOVTime,0,FOV) )/ 100)))
  //  tell(Math.max(170,event.getFOV() + ($Mth.lerp((FOVTimeEnd-Date.now())/FOVTime,100,0) / 100)))
    
   // tell($Mth.lerp((FOVTimeEnd-Date.now())/FOVTime,0,FOV))
}





})



RenderJSEvents.onLevelRender(event => {
    $OBB.snow=false
   // event.stage
 //   Client.player.tell(Client.window.guiScaledWidth+'   '+Client.window.guiScaledHeight)
        if(!Client.player)return
 //Client.player.tell(renderTick)

   let player=Client.player 
    
let e=event
//注意  通过移动速度返回的vec3d的对象可调用的x y z为方法 不是变量

    //bufferSource = e.bufferSource
    //e.poseStack.pushTransformation()
    //levelRenderTick++
   //Client.player.tell( bufferSource)
    
  
  
  
  
if(event.stage==RenderJSLevelRenderStage.AFTER_ENTITIES&&false){   
 
  
  let entity=player.animationEntity.target
  

  let r = $Render.of(event.poseStack)
    let obb=   $OBB.of(0,0,0,0,0,0)
  obb.pos = player.position().toVector3f()
    obb.pos.y+=1
        obb.deflect=new $Vector3f(0,0,-(4-0.4))
    obb.pose = new $Vector3f(1, 1.2, 4)

  if (false) {
    obb.rotate.rotateY((-getHorizontal(entity.x - player.x, entity.z - player.z) / 180 * PI));
  } else {
  
     obb.rotate.rotateY((-player.yRotO/ 180+1 )* PI)
  }
// let obb=  $OBB.ofEntity(Client.player)
//    
//  obb.pose=new $Vector3f(1.5, 4,4);
//    
//  //  obb.pose.x = 1
//    //= 
// obb.deflect = new $Vector3f(0, 0, 4);
// obb.rotate.rotateY(0 / 180 * PI)
  
  let aaa=false
  
  let entitys= player
        .level
        .getEntitiesWithin(AABB.of(
           player.x - 40,
           player.y - 40,
           player.z - 40,
           player.x + 40,
           player.y + 40,
           player.z + 40))
  
  entitys.forEach(e => {
    if(e!=player){
    let obb1 = $OBB.ofEntity(e)
    
    
   //  obb1.pose=new $Vector3f(1, 2,2);

 //obb1.deflect = new $Vector3f(0, 0, 2);
 obb1.rotate.rotateY(0 / 180 * PI)
    
     RenderJSRenderSystem.setShaderColor(1, 1, 1, 1);
    if ( obb1.collide(obb)) {
      
      //tell(56)
      RenderJSRenderSystem.setShaderColor(1, 0.5, 1, 1);
     // aaa = true
    }
    
      if (obb.collide(obb1)) {
      
      aaa = true
      }
      
      
      
      
      
 obb1 .postVertex().forEach(e => {
  event.poseStack.pushPose()
  $Render.levelPoseStack(event.poseStack,e.x,e.y,e.z)
  $Render.bindCamera(event.poseStack)
  
      event.getPoseStack().scale(0.5, 0.5, 0.5);
                RenderJSRenderSystem.setShaderColor(5, 5, 5, 5);
              // if (aaa) RenderJSRenderSystem.setShaderColor(10, 0.5, 0.5, 1);
        r.guiGraphics.blit(
               "kubejs:textures/animation_entity/aogu/guang1.png",
                -1,  // X坐标
                -1,                  // Y坐标
                0,            // 纹理UV X
                0,                // 纹理UV Y
                2,             // 宽度
                2,                  // 高度
                2, 2);
   
    event.poseStack.popPose()
 })
    
    
    }
    
     RenderJSRenderSystem.setShaderColor(1, 1, 1, 1);
   obb.postVertex( ).forEach(e => {
  event.poseStack.pushPose()
  $Render.levelPoseStack(event.poseStack,e.x,e.y,e.z)
  $Render.bindCamera(event.poseStack)
  
      event.getPoseStack().scale(0.05, 0.05, 0.05);
                  if (aaa) RenderJSRenderSystem.setShaderColor(10, 0.5, 0.5, 1);
            
        r.guiGraphics.blit(
                r.texture,
                -1,  // X坐标
                -1,                  // Y坐标
                0,            // 纹理UV X
                0,                // 纹理UV Y
                2,             // 宽度
                2,                  // 高度
                2, 2);
   
    event.poseStack.popPose()
    })
    
    //
    
    
  
  })
  
      /*
  obb.postVertex().forEach(e => {
    
  //  tell(e.x)
  event.poseStack.pushPose()
  $Render.levelPoseStack(event.poseStack,e.x,e.y,e.z)
  $Render.bindCamera(event.poseStack)
  
      event.getPoseStack().scale(0.05, 0.05, 0.05);
                    ;
             //  if (aaa) RenderJSRenderSystem.setShaderColor(10, 0.5, 0.5, 1);
        r.guiGraphics.blit(
                r.texture,
                -1,  // X坐标
                -1,                  // Y坐标
                0,            // 纹理UV X
                0,                // 纹理UV Y
                2,             // 宽度
                2,                  // 高度
                2, 2);
   
    event.poseStack.popPose()
  })
  */
  }
//
  


  
  //   Client.levelRenderer.prepareCullFrustum(pMatrixStack, camera.getPosition(), this.getProjectionMatrix(Math.max(d0, (double)this.minecraft.options.fov().get().intValue())));

    
    giddinessRender(event)
    
    
   particleRender(event)//粒子渲染

  subtitle(e)
  
 // RenderJSRenderSystem.setShaderColor(3, 0.3, 2, 10)
  
  
  
 })

  
NativeEvents.onEvent('net.minecraftforge.client.event.RenderLevelStageEvent', e => {





})





//AnimationJS.playerRenderer(e => {
//
//
////e.render()
//
//
//
//
//
//})





//  /**@type {net.minecraft.network.chat.Component} */
  //  let a='456456456'
  //  
    //let component=Java.loadClass('net.minecraft.network.chat.Component')
    
   // e.guiGraphics.drawString(Client.font,a,player.x,player.y,player.z)
   // 
   // e.guiGraphics.drawString(Client.font,Component.of('234324'),player.x,player.y,player.z)
   // 
   // e.guiGraphics.drawString(Client.font,component.of('234324'),player.x,player.y,player.z)
   // 
     
   // 
   // 


  
    //e.guiGraphics.fill(player.x,player.y,player.z,player.xx,player.y,player.z)



 //let quantity = 0
    // let entitys=[] Client.partialTick
    
    //Client.player.tell(Client.player.containerMenu. )
  // Client.player.tell(mouseLeftPost)
 // Client. player.level.getEntities().forEach(entity => {  })//注意  在同{}内的语句下句出错会影响上句

    //  RenderJSRenderSystem

     // event.drawShadowString('Lv.' + (10 + 1), 0, 0, 255, 255, 55, 255)
   
      
      //addFieldRender(event,entity)//注意 参数顺序不能改动


      //absorptionRender(event, entity)

     // entityBar(event,entity,quantity)

        
            //event.poseStack.pushPose()
            //e.poseStack.scale((health), 1, 1)
            //e.poseStack.translate(-(length - 1) * 0.5 / health, 1, -0.02)//渲染在世界时为绝对坐标  渲染在实体时为相对坐标
            //event.drawTexture('kubejs:gui/bossbar.png', 0, 0, 256, 256, pos + 2, 224, length, 3)//粉

 
//


 //for (let entity in global.entity) {
 //
 //
 //    
 //    

 //}//forEach(entity => {  })



   
//event.poseStack




// event.poseStack.pushPose()//额外创建一个poseStack  之后对其的修改不影响全局

    //event.poseStack.scale(1, 1, 1)




//event.drawTexture('kubejs:gui/bossbar.png', 2,   1,256,256, 2, 6 , 178, 3,)

//event.drawString('243243',46,43,0)

  //  RenderJSGUI.blitJS(consumer.poseStack, (width + 2) / oldHealth, height + 1, 2, 6 + barType, 178, 3)//白



    //event.poseStack.popPose()//删除这个额外的poseStack


//ClientEvents.loggedIn(event => { })

   // Client.gameRenderer.render(60,60,true)

//Client.player.tell(Client.isKeyDown(87))

  //let direction=Java.  loadClass( "net.coderbot.iris.vendored.joml.Quaternionf")
//global.entityBar={}

//RenderJSEvents.AddGuiRender(event => {//gui废弃
//
//
//return
//event.addRender(consumer=>{
//
////Client.player.level.clientSide
///**@type {Internal.Entity} */
//let player=Client.player
//
////Items.IRON_AXE.
//
//   //let a=Java.loadClass("net.minecraft.client.renderer.MultiBufferSource")
//
//  //Client.entityRenderDispatcher.render(player,0,0,0,10,10,consumer.poseStack,a,5)
//
//
////  Client.itemRenderer.render('minecraft:stone_axe','head',false,consumer.poseStack,a,1,1,Client.modelManager.getModel('minecraft:item/stone_axe.png'))
//
//
////EntityJSEvents.addGoals('2',event=>{
////
////event.getEntity().goalSelector.addGoal(4,)
////
////})
////
//
//})
//
//
  

   




//event.packLight(player.level,new blockPos(entity.x, entity.y + entity.eyeHeight + 1, entity.z))
//event.rotationDegreesX(40)
//event.rotationDegreesY(40)
//event.poseStack.

//Client.entityRenderDispatcher.cameraOrientation()

//event.rotationDegreesX(10)//rotateX(0)
//event.rotationDegreesY(10)//poseStack.rotateY(0)
//event.rotationDegreesZ(10)//poseStack.rotateZ(0)    e.poseStack.translate(-(length - 1) / 2 / entityBar_move[index], 1, -0.01)


    //Client.player.tell(Client.player.age)


//entity1.eyeHeight
 //e.poseStack.translate(e.camera.position.x,e.camera.position.y,e.camera.position.z)
//if(){}
//console.log()
//Client.player.tell(new Vec3f(5,5,5).rotation(5))
//Client.player.tell(Client.entityRenderDispatcher.cameraOrientation())


//let scale=Java. loadClass( "net.liopyu.liolib.cache.object.BakedGeoModel")
//
//let aaa=Java. loadClass("net.liopyu.entityjs.util.ContextUtils$ScaleModelRenderContextNL")
//
//let bbb=Java. loadClass( "net.liopyu.liolib.loading.json.raw.ModelProperties")
//
//let ccc=Java. loadClass( "net.liopyu.liolib.core.animatable.model.CoreGeoBone")
//
//let ggg=Java. loadClass( "net.liopyu.entityjs.util.ContextUtils$PreRenderContext")//net.liopyu.entityjs.util.ContextUtils$PreRenderContext
//
//let yyy=Java. loadClass( "net.liopyu.liolib.renderer.GeoRenderer")
//
//
//
//
//let t=new ggg(,)
//t.bakedModel
//

///**@type {Internal.GeoBone} */
//let bone=ccc
//
//let ddd=new bbb( true,
//    false,
//    false,
//    true,
//    false,
//    true,
//    false,
//    false,
//    true,
//    false,
//    "myModelIdentifier",
//    true,
//    64,
//    64,
//    1.8,
//    [0, 0, 0],
//    0.6,)
//
///**@type {Internal.Entity} */
//let player2=player
//
//new scalebone.getChildBones()

  //let a=new aaa(5,3,event.poseStack,player2,new Internal.BakedGeoModel(bone,ddd),true,1,4,3)//new scale(,,1,1,event.poseStack,event.getBufferSource(),1)



//console.log(a)


/*
             consumer.guiGraphics.blit(
                new ResourceLocation("kubejs:gui/bossbar2.png"),//资源路径
                 10,10,//渲染左上角的坐标
                 8,//深度/优先级
                 8,8,//材质裁剪开始位置
                 32,32,//显示大小
                 32,32//设置材质大小
             )
         */

/*
 Painter.paint({
        te643566sst: {
            type: "text",
            text: "minec4346353565rafg",
 
            layer: 'hud',
 
            step: "belowAll",
            x: 80,
            y: 50,
            //color: RenderJSGUI.rgbaColor(206, 206, 206, 205),
            //scale: 1
        }
    })
 
*/// Client.player.tell('生命值' + getData(player, 'double', 'bossBar' + 1 + '_value')) //console.log('生命值'+getData(player,'double','bossBar' + i+1 + '_value'))
                   // console.log('生命值' + bossBarEnd[i])
                       // Client.player.tell('生命值' + bossBarEnd[i])
                  
               // Client.player.tell('结束 '+bossBarEnd.length)
               
//  Painter.paint()

    //console.log(areData(player, 'camp_snow'))
    //RenderJSRenderSystem._setShaderTexture(4,6)

    //RenderJSRenderSystem.drawElements()

    // RenderJSGUI.drawJS(consumer.poseStack, Client.font, '45646345', 4, 5, 6)

    //  inter例子
    /*
          
        */
    /*
        event.addRender(consumer => {
            
            
                    let player = Client.player
            
                    if (areData(player, 'reaction_move')) {
            
                        var width = (consumer.window.guiScaledWidth / 2)  //x轴缩放中心
            
                        var height = consumer.window.guiScaledHeight / 2  //y轴缩放中心
            
                        let move = getData(player, 'int', 'reaction_move') - 1
            
                        //敌人数量
                        RenderJSGUI.drawJS(consumer.poseStack, Client.font, '666', width , height, RenderJSGUI.rgbaColor(0, 0, 0, 255 ))
            
                       // RenderJSGuiComponent.blit()
            
            
                        if (move > 0) {
            
                            setData(player, 'int', 'reaction_move', move)
                        } else {
            
                            player.getRootData().remove('reaction_move')
                        }
                    }
            // RenderJSRenderSystem.disableDepthTestJS()
    
            //Painter.guiScreenDraw()
            Painter.paint({
                te34st: {
                    type: "renderJSText",
                    text: "minecraftt346365355extures/ite",
                    //type:
                    //renderJSTexture 图片
                    //renderJSText 文字 两种渲染模式  gui 始终渲染在界面图层下   screen 渲染在界面图层上
                    //text 只在未打开渲染在界面时渲染
                    //注意:如果type输入错误 则需关闭存档刷新
                    layer: "gui",
                    //optional
                    step: "aboveAll",
                    x: 30,
                    y: 90,
                    //optional
                    //  z: 0,
                    //optional
                    // rotation: 10,
                    //optional
                    //color: 0,
                    //rotationCenter: {  x: 8,  y: 8,  },
                    //optional
                    //scale: {x: 1,   y: 8,  },
                    //optional
                    //  uOffset: 10,
                    //optional
                    // voffset: 10,
                    //optional
                    // uWidth: 16,
                    //optional
                    //  vHeight: 16,
                }
            })//Pa
    
    
    
    
    
    
    
        })
    
     */
// if (event.stage != RenderJSLevelRenderStage.AFTER_TRIPWIRE_BLOCKS) return

    
    /*===================================================
    
    
    if (event.renderTick == tick) {
    
    
    y+=event.player.getDeltaMovement().y()/Client.fps
    
        x += event.player.getDeltaMovement().x() / Client.fps
        
        z+=event.player.getDeltaMovement().z()/Client.fps
    } else {
    
   y= Client.player.y
    
        
        x = Client.player.x

        z = Client.player.z
        
        
    tick=event.renderTick 
    }
    
    
    
    
    *///===============================================Client.entityRenderDispatcher.
    
    
    
    
    
     
    //  Client.player.tell((event.player.getDeltaMovement()))event.player.getDeltaMovement().x()  //缩放宽度
    /*
  
    
   // let a=new Vec3(1,1,1)
    
     //
    event.poseStack.pushPose()
     event.transformerCamera(event.poseStack, event.camera)
 event.poseStack.translate(x,y,z)//再次设置位置为在之前的基础上修改位置
event.drawTexture('kubejs:textures/entity/add_field.png', 0, 0, 196, 128, 96, 53, 25, 73)//注意 图片横竖与绘图软件相反
event.popPose()
  */
   // if(event.renderTick)
    //summationfps++
    //return
 //Client.player.tell(Client.getPartialTick())
    //event.player.paint
    //console.log(Client.getPartialTick())
    // event.entity
    // z: 999,
    //color: RenderJSGUI.rgbaColor(206, 206, 206, 205),
    //scale: 1
    //for()
    //Painter.getObject('*')
    // let txt = {}
    // let aaa = {}
    //  txt.type = "renderJSText"
    //  txt.text = "minec433525425346547568657546456345345465rafg"
    //  txt.layer = "gui"
    //  txt.step = "aboveAll"
    //  txt.x = 60
    //  txt.y = 30
    //
    //  let txtt = { type: 'renderJSText', text: 'minecrafg', layer: 'hud', step: 'aboveAll', x: 60.0, y: 30.0 }
    //let txt =
    // Painter.paint({ txt: { type: 'renderJSText', text: 'minec433525425346547568657546456345345465rafg', layer: 'hud', step: 'aboveAll', x: 60.0, y: 90.0 } })
    // Painter.paint({ txrt: txtt })

    //console.log(global.reactionSnow)
    /*
if (!(Client && Client.player)){}
   let player = Client.player

   let quantity = 0

   let entitys = []//待遍历

   player.level.getEntities().forEach(entity => {

       if (areData(entity, 'boss') && player.distanceToEntity(entity) <= 128) {



           entitys[quantity] = entity
           quantity++

       }
   })

   let move = 0

   if (entitys.length) {
       if (areData(player, 'bossBar_move')) {//动画 只有一个

           move = Math.min(getData(player, 'int', 'bossBar_move') + 1, 30)

           setData(player, 'int', 'bossBar_move', move)

       } else {
           setData(player, 'int', 'bossBar_move', 0)
       }

   } else {
       if (areData(player, 'bossBar_move')) {

           move = Math.max(getData(player, 'int', 'bossBar_move') - 1, 0)

           setData(player, 'int', 'bossBar_move', move)

       }

   }

   //  Client.player.tell(move)
   // console.log(entitys.length)
   if (move > 0) {
       if (quantity == 1 && entitys[0]) {

        
           let entity = entitys[0]




           //new Date().getTime())%1000==0&&

           let presentHealth = entity.getHealth()

           let maxHealth = entity.getMaxHealth()

           let oldHealth = barData(player, entity, '1')//entity.getRootData().getDouble('bossBar')

           let health = presentHealth / maxHealth

         // Client.player.tell(oldHealth)

           if (health <= oldHealth) {//扣血/静态 

               Painter.paint({

                   bossBar1: {//基底

                       type: 'renderJSTexture',
                       layer: 'hud',
                       step: 'aboveAll',
                       x: 200,
                       y: 120,//
                       z:0,
                     w:182,
                     h:19,
                    uWidth: 182,
                    vHeight: 5,
                    uOffset:0,
                    vOffset:0,
                      rotation:0,
                      rotationCenter:{x:8,y:8},
                       scale: {x:3,y:3},
                       texture: 'kubejs:gui/bossbar.png',//90.9-181.8 * (health / maxHealth-oldHealth)/2+2*(90.9* health / maxHealth - 90.9)
                       remove: false
                   },
                  //bossBar2: {//白
                  //    type: 'renderJSTexture','minecraft:textures/item/apple.png',//
                  //    x: (presentHealth / maxHealth + oldHealth - 1) * 89,//90.9* health / maxHealth//((90.9* health / maxHealth - 90.9)+181.8* health / maxHealth)/2
                  //    y: 120.875,
                  //    uWidth: 100,
                  //    vHeight: 6,
                  //    texture: 'kubejs:gui/bossbar1.png',
                  //    remove: false
                  //},
                  //bossBar3: {//红
                  //    type: 'renderJSTexture',
                  //    x: (89 * presentHealth / maxHealth - 89),
                  //    y: 120.875,//
                  //    uWidth: 100,
                  //    vHeight: 6,
                  //    texture: 'kubejs:gui/bossbar1.png',//90.9-181.8 * (health / maxHealth-oldHealth)/2+2*(90.9* health / maxHealth - 90.9)
                  //    remove: false
                  //},
               })

           } else {//回复



               Painter.paint({

                   bossBar11: {//基底
                       type: 'renderJSTexture',
                       x: 100,
                       y: 120,//
                       uWidth: 100,
                       vHeight: 6,
                       uOffset:120,
                       vOffset:6,
                       // alignX: 'center',
                       // alignY: 'top',
                       // w: 182,
                       // h: 5,
                       //draw: 'always',
                       // scale: 0.5,
                       texture: 'kubejs:gui/bossbar1.png',//90.9-181.8 * (health / maxHealth-oldHealth)/2+2*(90.9* health / maxHealth - 90.9)
                       remove: false
                   },
                   bossBar21: {//绿
                       type: 'renderJSTexture',
                       x: (89),
                       y: 120.875,//
                       uWidth: 100,
                       vHeight: 6,
                       // alignX: 'center',
                       // alignY: 'top',
                       // w: 178 * presentHealth / maxHealth,
                       // h: 3,
                       //draw: 'always',
                       // scale: 0.5,
                       texture: 'kubejs:gui/bossbar4.png',//90.9-181.8 * (health / maxHealth-oldHealth)/2+2*(90.9* health / maxHealth - 90.9)
                       remove: false
                   },
                   bossBar31: {//红
                       type: 'renderJSTexture',
                       x: (89),//(presentHealth / maxHealth + oldHealth - 1) * 89,//90.9* health / maxHealth//((90.9* health / maxHealth - 90.9)+181.8* health / maxHealth)/2
                       y: 120.875,
                       uWidth: 100,
                       vHeight: 6,
                       // alignX: 'center',
                       // alignY: 'top',
                       // w: 178 * oldHealth,//178 * (-presentHealth / maxHealth + oldHealth),
                       // h: 3,
                       //draw: 'always',
                       // scale: 0.5,
                       //color: '#00FF00',
                       texture: 'kubejs:gui/bossbar2.png',
                       remove: false
                   },
               })
           }
           //} 
          // player.getRootData().putString('barSnow1', entity.uuid)//存储boss的uuid






















       } else if (quantity == 2 && entitys[0] && entitys[1]) {



       }


   }


   for (let i = 0; false; i++) {



       let subtitle = {}


       subtitle[i] = { type: 'renderJSText', text: 'minecrafg', layer: 'hud', step: 'aboveAll', x: 60 * i, y: 30.0, remove: false }


       Painter.paint(subtitle)


   }

*/

 //  event.mulPose(new Quaternionf())

    /*
     event.poseStack.pushPose()
        e.transformerCamera(e.poseStack, e.camera)
        
          event.translate(0,0,0)
        e.poseStack.mulPose(Client.entityRenderDispatcher.cameraOrientation())
        e.rotationDegreesZ(180)//旋转角度
        //event.poseStack.scale(a.scale, a.scale, 0)
      
        //event.drawString(a.title, Client.font.width(String(a.title)), 0, a.rgba)
        
       //  event.drawString('a.ti4563tle', -0.5* Client.font.width(String('a.ti4563tle')), 0, 255,255,244,255)
         
        event.poseStack.popPose()
*/
    
 //  Client.font.drawInBatch('45654',10,56,5656,true,event.poseStack.last().pose(),Client.bufferBuilders,)
     //  e.transformerCamera(e.poseStack, e.camera)
     //  e.poseStack.mulPose(Client.entityRenderDispatcher.cameraOrientation())
     //  e.rotationDegreesZ(180)//旋转角度
//event.drawShadowString('Lv.' + (10 + 1), 0, 0, 255, 255, 55, 255)
// event.drawString('a.ti4563tle', 0, 0, 255,255,255,255)
//  event.fill(0,0,50,50,255,255,255,255)无法使用
   //let font=Java.loadClass('net.minecraft.client.gui.Font')
       // event.guiGraphicJS.blit1('kubejs:textures/entity/add_field.png', 0, 0, 0,0, 128, 67, 39, 128, 196)//光
 
//getBrightRender('kubejs:textures/entity/add_field.png')
    
    //RenderJSRenderSystem.enableBlendJS()new ResourceLocations('kubejs','textures/entity/add_field.png')
    
 
    /*
   RenderType$CompositeState
            .builder()
        .setTextureState(new RenderStateShard$TextureStateShard(new ResourceLocations('kubejs', 'textures/entity/add_field.png'), false, false))
        .setShaderState(RenderStateShard.RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER)
     .setTransparencyState(RenderStateShard.NO_TRANSPARENCY)
     .setCullState(RenderStateShard.NO_CULL)
        .setLightmapState(RenderStateShard.LIGHTMAP)
       .setOverlayState(RenderStateShard.OVERLAY)
        .createCompositeState(false)
    
    
      Client.player.tell( new RenderStateShard$TextureStateShard( new ResourceLocations('kubejs','textures/entity/add_field.png'), false, false))
  
    
    

         
           
           
         
         
           
    */
   
          
    
    //event.scale(100,100)
//RenderJSRenderSystem.setShaderColor(1,1,1,0.5)
    //event.drawTexture('kubejs:gui/colour/10-10-10.png', 0, 0, 16, 16, 0, 0, 16, 16)//触摸反馈
   
   //event.drawTexture(,)"D:\游戏\Minecraft\.minecraft\versions\1.20.1-47.3.20(kubejs测试)\kubejs\assets\kubejs\colour\10-10-10.png"

 
 //  Client.player.tell( (Client.font.width(',')))
/*
    if (copy) {
        
        if (copy_click < 59) copy_click += (60 - copy_click) / 30//动画
        
    
        let width = event.window.guiScaledWidth 
 
        let height = event.window.guiScaledHeight//缩放后屏幕大小
        
        
    //translucent
        
        if (getMouseScroll() != 0) {
            
            copy_roll+=getMouseScroll()*15
            
           // mouseScroll()=0
           
        }
        //copy_roll使用除以屏幕缩放后的值
        let exceed_roll = 0
        
        let windowDiffer = copy_projects * 50 - height
        
        if (windowDiffer < 0) {
            
         exceed_roll=copy_roll+((copy_projects * 50 - height)+320)//1420
         
        } else {
            
            exceed_roll = copy_roll + ((copy_projects * 50 - height) + 50)
            
        }
        
        
         event.pushPose()
        
        event.translate(0, copy_roll)
        
        
        if (copy_roll > 0) {
        
            copy_roll *= 0.95
            
          if ( copy_roll < 0.05) copy_roll=0//减少过小计算
            
    
        } else if (copy_roll!=0&&exceed_roll <0 ) {
        
            copy_roll -= (exceed_roll) * 0.05
           
              if ( exceed_roll > -0.05) copy_roll=-(exceed_roll-copy_roll)//减少过小计算
        
        }
        
      

        for (let i = 0; i < copy_projects; i++){
        
            event.pushPose()
         //event.translate(0, 0, 0)
            event.drawTexture('kubejs:gui/copy.png', 0, i * 50 + 20, 256, 256, 0, 0, 200, 25)
               event.popPose()
             
            

        }
        
      
         event.pushPose()
         //event.translate(0, 0, -50)   
        event.drawTexture('kubejs:gui/copy.png', 0, copy_select * 50 - 5 + 20, 256, 256, 0, 32, 200 * copy_click / 60, 35)
        event.popPose()
        
        for (let i = 0; i < copy_projects; i++) {//无法通过修改叠加层改变原语句渲染顺序?????
    
            event.pushPose()
            event.scale(2, 2, 0)
            //event.translate(0, 0, 99)
            event.drawShadowString('难度' + (i + 1), 80 / 2, (i * 50 + 26) / 2, 205, 205, 205, 205)
            event.popPose()
        }
        
        //Client.player.tell(mouseRight)
          //Client.player.tell(i * 50 + 20 + copy_roll)
          
          //Client.player.tell(MouseY)
          //
          //Client.player.tell(Client.window.guiScale)
       // event.fill(20,245,25,250,10,10,10,255)
       // if(){}
    
        let selective = Math.floor((MouseY - copy_roll - 20 + 12.5) / 50) //选择的项目
        
        if (0<=selective&&selective<copy_projects&& mouseLeft&&selective!=copy_select&&MouseX<180) {
        
       Client.player.playSound('minecraft:ui.button.click')
        copy_select=selective

        
        copy_click=0
        
    
        }
    
    event.popPose()
    
    } else {
    
      copy_click = 0//副本动画

    }
    */
    

//Client.player.tell()
//event.poseStack.pushPose()
//   // event.transformerCamera(event.poseStack, event.)
//    //event.poseStack.translate(x,y,z)//再次设置位置为在之前的基础上修改位置
//  event.guiGraphics.drawString(Client.font,'3453455',0,0,0)  //event.poseStack.scale(0.1,0.1,0.1)
////event.drawTexture('kubejs:textures/entity/add_field.png', 0, 0, 196, 128, 96, 53, 25, 73)//注意 图片横竖与绘图软件相反
//event.popPose()
//
         
//GuiGraphic.blit('kubejs:gui/bossbar.png', -( 2) / 2, 0, 256, 256, 0, 208,0 + 4, 5)
    
   
   // GuiGraphic.drawString('Lv.' + (level + 1), -length, 0, 255, 255, 255, 255)
    
   
    
    


  //RenderJSRenderSystem.enableBlendJS()
        
       // let move=Math.floor((20-copy_rangeUpdate)/4)
        
      // for (let i = 0; 星级_条件.rule[i]; i++){
      // 
      // 
      // 
      // 
      // }
        //event.poseStack.pushPose()
        //event.translate((2*width)-113,144)
        //event.scale(0.4, 0.4)
        //event.drawTexture('kubejs:gui/copy_run.png', 0,0, 512, 512, 0, 37, 278, 100)
        //event.poseStack.popPose()
        
//Client.player.tell(String(星级_条件))
    
    //Client.player.tell(copyBeginsAnimation)Math.floor(time/240)+':'+Math.floor(time/4%60)Math.floor(time/240)+':'+Math.floor(time/4%60)



 //event.poseStack.pushPose()
        //event.translate(width,45)
        //event.scale(0.4, 0.4)
        //event.drawTexture('kubejs:gui/copy_run.png', 0,0, 512, 512, 69, 0, 111, 27)
        //event.poseStack.popPose()
        // Object.getOwnPropertyNames(星级_条件.rule).
      //     filter(n => Object.getOwnPropertyDescriptor(星级_条件.rule, n).enumerable).map(k => {
      //         
      //        // [k, a[k]]
      //     
      //       Client.player.tell(k+'          '+a[k])
      //     
      //     
      //     })
       // Client.player.tell(   Object.entries(星级_条件.rule))
        /** 
        
           Object.entries( 星级_条件.rule).forEach((rule ,key)=> {
     
            
      //let txt=    starDescribe[rule.name](rule.value)
          
            
     //   renderText(event,)
            
            Client.player.tell(rule[0]+'          '+rule[1])
            
            
        index++
        })
        
        */
       // Object.getOwnPropertyNames(object).filter(n=>Object.getOwnPropertyDescriptor(object,n).enumerable).map(k=>[k,a[k]]
        