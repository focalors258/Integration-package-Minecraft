NetworkEvents.dataReceived('absorption', event => {//效果更新时与添加护盾均使用此事件接收

  let value = event.data.getDouble('value')//数值  注意获取类型

  let name = event.data.getString('name')//项目名称

  let id = event.data.getInt('entity')//实体id


  let entity

  if (id) {
    entity =event.level.getEntity(id)////event.level.getEntity(Object(uuid))
  }

  if (entity) {

    if (name == 'set') {//注意区分effect与该玩法 该值(AbsorptionAmount)不与effect强绑定

      let nbt = entity.getNbt()

      nbt['AbsorptionAmount'] = value

      entity.setNbt(nbt)

    } else if (name == 'begin') {//动画 和效果相关if (name == 'sound') 

      absorptionChange[entity.stringUuid] = 60
      
      setData(entity,'boolean','absorption_render',true)//渲染
      

      
    }else if (name == 'end') {//动画 和效果相关if (name == 'sound') 

     setData(entity,'boolean','absorption_render',false)

     // Client.player.tell('end')
      
    }

  } else if (name == 'sound') {

    event.player.playSound('kubejs:starrail_activity', 0.2, 1)

  }



})

//


let absorptionChange = {}//动画




let absorptionRender = (event, entity,guiGraphic) => {





//RenderJSRenderSystem.enableBlendJS()



 // if (event.stage != RenderJSLevelRenderStage.AFTER_TRIPWIRE_BLOCKS) 

  let player = Client.player

  //removeEffect('kubejs:absorption')
  // Client.player.tell( entity.hasEffect("kubejs:absorption"))&& entity.hasEffect("kubejs:absorption") && entity.getEffect("kubejs:absorption").getDuration() > 0
  //Client.player.tell(entity)&&entity.getEffect("kubejs:absorption")
  if (entity.isLiving()  &&getData(entity,'boolean','absorption_render')&& !entity.isPlayer()) {

  //  Client.player.tell(entity.getEffect("kubejs:absorption").getAmplifier())
    //entity.removeAllEffects()
    event.poseStack.pushPose()//创建新的AFTER_TRIPWIRE_BLOCKS
    
     $RenderSystem.enableBlend()
 $RenderSystem.enableDepthTest()
    $RenderSystem.disableCull()
    
    event.poseStack.translate(0,  0.7 * entity.eyeHeight, 0)
    
    event.poseStack.mulPose(Client.entityRenderDispatcher.cameraOrientation()) 
    
    event.poseStack.translate(0,  0, -0.2 * entity.eyeHeight)
  //  event.transformerCamera(event.poseStack, event.camera)//将对象传入new  direction(1,1,1,1(new  direction(1,1,1,1))
     //改坐标//渲染在世界时为绝对坐标  渲染在实体时为相对坐标
     //方向())j.rotateXYZ(0,1,0)Client.entityRenderDispatcher.cameraOrientation()
  event.poseStack.mulPose(RotationAxis.ZP.deg(180))
    //Client.player.tell(a)
    //let j=

    if (absorptionChange[entity.stringUuid] && absorptionChange[entity.stringUuid] > 0) {

      let change = (absorptionChange[entity.stringUuid]) / 30 + 1

      event.poseStack.scale(change * 0.2 * entity.eyeHeight / 5, change * 0.2 * entity.eyeHeight / 5, change * 0.2 * entity.eyeHeight / 5)//大小

      absorptionChange[entity.stringUuid] -= (4 - change)

    } else {

      event.poseStack.scale(0.2 * entity.eyeHeight / 5, 0.2 * entity.eyeHeight / 5, 0.2 * entity.eyeHeight / 5)//大小
    }


    event.poseStack.rotationDegreesZ(180)//旋转角度


    event.poseStack.pushPose()
    //event.poseStack.translate(-18.5, -17, -15)//改枢轴点  再次设置位置为在之前的基础上修改位置
    guiGraphic.blit('kubejs:textures/entity/absorption.png', -18.5, -17, 0, 0, 36, 36, 36, 36)//注意 图片横竖与绘图软件相反
    event.poseStack.popPose()


    event.poseStack.popPose()




  }















}