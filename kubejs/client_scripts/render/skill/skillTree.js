NetworkEvents.dataReceived('playerLevel_animation', e => {

  let data = { old: e.data.getInt('old'), new: e.data.getInt('new'), level: e.data.getInt('level'), oldLevel: e.data.getInt('oldLevel') }

  new guiAnimation('playerLevel_animation', 60, data)







})



let 技能升级图标 = 'kubejs:gui/skill_effect.png'




let skillAddEffect = (event, width, height) => {



  if (presentAnimation && presentAnimation.name == "playerLevel_animation") {

    let PuffishLevel = new $puffishExperience('puffish_skills:combat')
    //let 声望升级图标=
    // let 技能升级图标 = 'kubejs:gui/skill_effect.png'

    if (!(Client && Client.player)) return

    let tick = presentAnimation.tick

    let oTick = presentAnimation.oTick

    let animationData = presentAnimation.data

    //= getDanStage(animationData.new)

    let 当前 = animationData.new

    let c = Math.min(40, 60 - tick)

    let a = (Math.min(2, Math.pow(100 - tick, 0.95) * 0.02 + 1))

    let b = Mth.lerp(Client.partialTick, Math.min(8, Math.pow(100 - oTick, 0.7) * 0.5), Math.min(8, Math.pow(100 - tick, 0.7) * 0.5))

    let 平滑变化 = Mth.lerp(c / 40, animationData.old, animationData.new)


    //= getDanStage(平滑变化)//用差值获取变化值

    let oldLevel = animationData.oldLevel

    let level = animationData.level

    // let oldLevel =Math.floor( Mth.lerp(c / 40, oldLevel, level))
    event.pushPose()

    event.poseStack.translate(width, 2 * height - 50, 0)
    event.scale(0.6, 0.6)
    //event.rotationDegreesZ(-90 )
    event.pushPose()

    event.poseStack.mulPose($Axis.ZP.rotationDegrees(45))


    renderTextrue(event, 技能升级图标, 0, 0, 0, 0.35 * a, -25, -25, 1500, 1000, 0, 0, 50, 50)//框
    //改每级总经验数
    let dan1 = getPlayerLevelTotal(level) - PuffishLevel.getRequired(level)//data[3]+Math.floor(data[2])*data[1]//<--------------

    let dan2 = getPlayerLevelTotal(level) - 1//data[3] + Math.floor(Math.ceil(data[2])) * data[1]

    let oldDan1 = getPlayerLevelTotal(oldLevel) - PuffishLevel.getRequired(oldLevel)//<--------------

    let oldDan2 = getPlayerLevelTotal(oldLevel) - 1//<--------------

    let oldData = [PuffishLevel.getRequired(oldLevel), 0, 0]//<--------------

    let data = [PuffishLevel.getRequired(level), 0, 0]

    let differ = Math.max(PuffishLevel.getRequired(level), dan2 - dan1)//有可能为0

    let oldDiffer = Math.max(PuffishLevel.getRequired(oldLevel), oldDan2 - oldDan1)

    // tell(dan2)

    event.scale(0.35 * a, 0.35 * a)
    if (animationData.new >= animationData.old) {



      if (differ != 0 && oldDiffer != 0) {

        // tell(oldLevel)

        renderDanBarAdd2(data, oldData, event, 4 * (平滑变化 - oldDan1) / oldDiffer, 4 * Math.max(0, 当前 - dan1) / differ, 技能升级图标)
        event.poseStack.mulPose($Axis.ZP.rotationDegrees(90))
        renderDanBarAdd2(data, oldData, event, 4 * Math.max(0, 平滑变化 - oldDan1 - 0.25 * oldDiffer) / oldDiffer, 4 * Math.max(0, 当前 - dan1 - 0.25 * differ) / differ, 技能升级图标)
        event.poseStack.mulPose($Axis.ZP.rotationDegrees(90))
        renderDanBarAdd2(data, oldData, event, 4 * Math.max(0, 平滑变化 - oldDan1 - 0.5 * oldDiffer) / oldDiffer, 4 * Math.max(0, 当前 - dan1 - 0.5 * differ) / differ, 技能升级图标)
        event.poseStack.mulPose($Axis.ZP.rotationDegrees(90))
        renderDanBarAdd2(data, oldData, event, 4 * Math.max(0, 平滑变化 - oldDan1 - 0.75 * oldDiffer) / oldDiffer, 4 * Math.max(0, 当前 - dan1 - 0.75 * differ) / differ, 技能升级图标)

        if (4 * Math.max(0, 平滑变化 - oldDan1 - 0.75 * oldDiffer) / oldDiffer >= 1) animationData.oldLevel++//半自动更新变化等级


      }
      //tell(4*(当前-0.75*dan1)/(dan2 - dan1))
      //  tell(4*平滑变化 +'   '+dan2 +'   '+dan3 +'   '+dan4 )



    } else {


      if (differ != 0 && oldDiffer != 0) {

        // tell(平滑变化
        renderDanBarReduce2(data, oldData, event, 4 * (平滑变化 - oldDan1) / oldDiffer, 4 * Math.max(0, 当前 - dan1) / differ, 技能升级图标)
        event.poseStack.mulPose($Axis.ZP.rotationDegrees(90))
        renderDanBarReduce2(data, oldData, event, 4 * Math.max(0, 平滑变化 - oldDan1 - 0.25 * oldDiffer) / oldDiffer, 4 * Math.max(0, 当前 - dan1 - 0.25 * differ) / differ, 技能升级图标)
        event.poseStack.mulPose($Axis.ZP.rotationDegrees(90))
        renderDanBarReduce2(data, oldData, event, 4 * Math.max(0, 平滑变化 - oldDan1 - 0.5 * oldDiffer) / oldDiffer, 4 * Math.max(0, 当前 - dan1 - 0.5 * differ) / differ, 技能升级图标)
        event.poseStack.mulPose($Axis.ZP.rotationDegrees(90))
        renderDanBarReduce2(data, oldData, event, 4 * Math.max(0, 平滑变化 - oldDan1 - 0.75 * oldDiffer) / oldDiffer, 4 * Math.max(0, 当前 - dan1 - 0.75 * differ) / differ, 技能升级图标)

        if (4 * (平滑变化 - oldDan1) / oldDiffer <= 0) animationData.oldLevel--

      }
      //renderDanBarReduce2()

    }



    event.popPose()

    let txt = Math.floor(animationData.oldLevel)
    //tell(Client.font.width(txt))
    event.poseStack.pushPose()
    event.translate(-2, -5, 0)
    // event.poseStack.scale(((tick - 40) / 8) + 2, ((tick - 40) / 8) + 2, 0)

    renderMultText(event, txt, 1.7, 1.7, - 0.5 * Client.font.width(String("" + txt + "")), 0, getColor(64, 0, 237, 255), 0)
    event.translate(-1, -1, 0)
    renderMultText(event, txt, 1.7, 1.7, -  0.5 * Client.font.width(String("" + txt + "")), 0, getColor(149, 0, 237, 255), 0)
    event.poseStack.popPose()




    //   renderText(event,,1.7,1.7,- Client.font.width(animationData.oldLevel),0,getColor(255,255,255,255),0)

    //    // renderTextrue(event, 声望界面图标, 0.7, 0, 0, 1.2, -14, -19, 400, 400, 28 * (data[0] - 1) + 1, 64, 27, 33)//段位图标
    //   
    //   }
    //   let danLevel = (Math.min(5, Math.floor(data[2])))

    // tell(b)

    //  if (animationData.new <= 6999) {
    //    
    //    event.pushPose()
    //    event.poseStack.translate(-0.5,13,0)
    //    event.scale(1.2,1.2)
    //    event.drawTexture(声望界面图标, -6.5, -6.5, 400, 400, 133, 128, 25, 25)//图标
    //  event.scale(0.5,0.5)
    //   event.drawTexture(声望界面图标, -9, -8, 400, 400, 22 * danLevel + 1, 129, 21, 17)//图标
    //   event.popPose() 
    //  }

    renderTextrue(event, 技能升级图标, 0, 0, 0, 0.4, -755 + 50 * b, -36, 1500, 1000, 0, 61, 303, 73)//图标

    renderTextrue(event, 技能升级图标, 0, 0, 0, 0.4, 452 - 50 * b, -36, 1500, 1000, 324, 61, 303, 73)//图标
    event.poseStack.popPose()
    //if (animationData.new <= 6999)

    // tell(animationData.old+' '+animationData.new)





    // Utils.server







  }









}


