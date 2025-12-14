
//let abcd = Java.loadClass("java.util.function.Predicate")entity => entity.isAlive())

//let type = Java.loadClass("net.minecraft.world.level.entity.EntityTypeTest")
/*

  type  ,
        ,entitys => entitys.isLiving(),


*/

let addField_move1 = 0


let addFieldRender = (event, entity,guiGraphic) => {

 // let player = Client.player

 // if (event.stage != RenderJSLevelRenderStage.AFTER_SOLID_BLOCKS) return
//RenderJSRenderSystem.enableBlendJS()

  //RenderJSRenderSystem.enableDepthTestJS()

  
  //RenderJSRenderSystem.setShaderColorJS(1,1,1,0)
 //RenderJSRenderSystem. setPositionTexShader()
  //if (event.stage != RenderJSLevelRenderStage.AFTER_TRIPWIRE_BLOCKS) return

  let player = Client.player
  
  if(entity.type=='kubejs:add_field'){

  let move=getData(entity,'int','move')
  
  move=move?move:0
  
    if(Client.level.time%2==0){
    
    if (!entity.getRootData().contains("move")||move>600) {//持续时间
        entity.getRootData().putInt('move', 0)
    } else {
      if(Client.level.time%2==0){}
      entity.getRootData().putInt('move', getData(entity, 'int', 'move') + 2*DPF)
      
    }
  
  }
  
  
 // let angle=(new Vec3f(0,1,0)).rotationTo(-PI*getHorizontal2(player.x-entity.x,player.z-entity.z)/180)
  
  // let angle=(new Vec3f(0,1,0)).rotationTo(player.x-entity.x,player.z-entity.z)
 let a= Client.entityRenderDispatcher.cameraOrientation()
   // new Quaternionf()

    
  event.poseStack.pushPose()//创建新的AFTER_TRIPWIRE_BLOCKS
  
     $RenderSystem.enableBlend()
 $RenderSystem.enableDepthTest()
 // event.transformerCamera(event.poseStack, event.camera)//将对象传入new  direction(1,1,1,1(new  direction(1,1,1,1))
 // event.poseStack.translate(entity.x, entity.y + entity.eyeHeight , entity.z)//渲染在世界时为绝对坐标  渲染在实体时为相对坐标
  
 //Client.player.tell(1)
  //let j=
  event.poseStack.mulPose(a ) //方向())j.rotateXYZ(0,1,0)Client.entityRenderDispatcher.cameraOrientation()
  
  event.poseStack.scale(0.1, 0.1, 0.1)//大小
  
  event.poseStack.mulPose(RotationAxis.ZP.deg(180))
    
  //  event.poseStack.mulPose(RotationAxis.YP.deg(0))
  //event.rotationDegreesZ(180)//旋转角度
  if(player.distanceToEntity(entity)>0.01){
     
  
  event.poseStack.pushPose()
    event.poseStack.translate(-13.5, -80 + 10 * Math.sin(PI * move / 150), 5)//再次设置位置为在之前的基础上修改位置
 
    guiGraphic.blit('kubejs:textures/entity/add_field.png', 0, 0, 96, 53, 25, 73, 128, 196,)//剑
    
    //注意 图片横竖与绘图软件相反
  event.poseStack.popPose()
  
  
  
  
    
  
  event.poseStack.pushPose()
  event.poseStack.scale(2, 2, 2)//大小
  event.poseStack.translate(-32, -34, 0)//再次设置位置为在之前的基础上修改位置
  guiGraphic.blit('kubejs:textures/entity/add_field.png', 0, 0, 0, 128, 67, 39, 128, 196)//光
  event.poseStack.popPose()
  
 
  }
  
  event.poseStack.popPose()
  
  
  
  
  if(Math.random()>0.96&&!(Client.paused)){//必须是非暂停状态
  let a = new Particle('kubejs:textures/entity/add_field.png', 128, 196, 3, 3, 20, 27 )//
  
  a.pos[0] = entity.x+4*(2*Math.random()-1)
  
  a.pos[1] = entity.y+2*(2*Math.random()-1)+2
  a.pos[2] = entity.z+4*(2*Math.random()-1)
  
  // a.vec[0] = 0Object.keys(particleList).length==0
  
  a.vec[1] = 0.5
  
  //  a.vec[2] = 0
  
  a.obstruction = 0.0001
  
  a.time = 500
  }
  
  
  
  
  if(entity.age<90){//动画
  
  //addField_move1=addField_move1>60*PI?0:addField_move1+1
  //event.poseStack.pushPose()
  //event.transformerCamera(event.poseStack, event.camera)
  //event.poseStack.translate(entity.x, entity.y + entity.eyeHeight , entity.z)//再次设置位置为在之前的基础上修改位置
  //
  ////Client.player.tell(entity.age)
  //event.poseStack.mulPose(angle)
  //event.poseStack.scale(0.1, 0.1, 0.1)
  //event.rotationDegreesZ(Math.sin(PI*move/120)*30+185)
  //
  ////event.poseStack.rotateZRadians(140)//rotationDegreesZ(3)
  //
  //event.poseStack.translate(12.5,-50,-2)
  //event.drawTexture('kubejs:textures/entity/add_field.png', 0, 0, 196, 128, 50, 93, 44, 34)//注意 图片横竖与绘图软件相反
  //event.popPose()
  
    addRender2(event, guiGraphic, a, entity.x,
      entity.y + entity.eyeHeight,
      entity.z,
      Math.sin(PI * move / 120) * 30 + 185,
      0.1,
      12.5,
      -50,
      -2,
      'kubejs:textures/entity/add_field.png',
      128,
      196,
      50,
      93,
      44,
      34)
  
  
    
  addRender2(event, guiGraphic, a,entity.x, entity.y + entity.eyeHeight , entity.z,-(Math.sin(PI*move/120)*30+185),0.1,-56.5,-50,-2,'kubejs:textures/entity/add_field.png',  128, 196, 0, 92, 44, 34)
  
  
  
  
  
  //event.poseStack.pushPose()
  //event.transformerCamera(event.poseStack, event.camera)
  //
  //event.poseStack.translate(entity.x, entity.y + entity.eyeHeight , entity.z)//再次设置位置为在之前的基础上修改位置
  //event.poseStack.mulPose(angle)
  //
  //event.poseStack.scale(0.1, 0.1, 0.1)
  //event.rotationDegreesZ(-(Math.sin(PI*move/120)*30+185))
  //
  //
  //event.poseStack.translate(-56.5,-50,-2)
  //event.drawTexture('kubejs:textures/entity/add_field.png', 0, 0, 196, 128, 0, 92, 44, 34)//注意 图片横竖与绘图软件相反
  //event.popPose()
  }
  
  
  
  
  
  }
  

  // let entitys = player.level.getEntities().

  //   Client.player.tell(entitys)


  //Object.create()

  //let a=(new Internal.AllOfPredicate('78657'))




}









NetworkEvents.dataReceived('add_field', event => {



  let value //= event.data.getDouble('value')//数值  注意获取类型

  let name = event.data.getString('name')//项目名称

 // let uuid = event.data.get('entity')//实体id

  let player = event.player

  let entitys = event.level.entities


  //let entity = event.level.getEntity(uuid)//getUuidEntity(uuid)




  if (name == 'sound' && find_sound == 0) {//发现音效

    //let a= new Internal.SoundSource()

  //  player.level.playLocalSound(entity.x, entity.y, entity.z, 'kubejs:starrail_mimi', 'hostile', 0.02, 1, true)
    event.player.playSound('kubejs:starrail_mimi', 0.06, 1)
    //Client.player.tell(34)
    // find_sound = 400

  }



})













