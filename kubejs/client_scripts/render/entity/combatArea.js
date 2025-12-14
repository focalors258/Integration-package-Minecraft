

let combat_area_rangeUpdate = 0

let combat_area_entity = null

NetworkEvents.dataReceived('occupy_speed', event => {

    let value = event.data.getDouble('value')//数值
    //
    setData(event.player, 'double', 'occupy_speed', value)//旧写法 更新占领速度

})


NetworkEvents.dataReceived('combat_area', event => {
    // tell(234)

    //Client.gameRenderer.displayItemActivation('')

    //let value = event.data.getDouble('value')//数值

    //let name = event.data.getString('name')//项目名称

    let id = event.data.getInt('entity')//实体id

    //  let player = event.player

    let entity = event.level.getEntity(id)// getUuidEntity(uuid)
//tell(entity)
    // if (name == 'occupy_speed') {//修改客户端玩家占领百分比值  <-将有特殊要求的项目名称的传输写在此处

    //     setData(player, 'double', 'occupy_speed', value)//旧写法 更新占领速度

    // } else {//修改客户端实体
    if (true) {
        combat_area_rangeUpdate = getTime()+1500

        if (entity) {
            combat_area_entity = entity//更新当前实体

            setData(entity, 'double', 'camp', event.data.getDouble('camp'))

            setData(entity, 'double', 'max_camp', event.data.getDouble('max_camp'))

            // tell( event.data.getDouble('max_camp'))

            setData(entity, 'boolean', 'done', event.data.getBoolean('done'))

            //setData(entity, 'boolean', 'repeat', event.data.getBoolean('repeat'))
            setData(entity, 'int', 'r', event.data.getInt('r'))

            setData(entity, 'int', 'entity_number', event.data.getInt('entity_number'))

            //if (name == 'camp' || name == 'max_camp') {//double
            //
            //} else if (name == 'done' || name == 'repeat') {//boolean
            //
            //    let value = event.data.getBoolean('value')//数值
            //
            //    
            //
            //} else if (name == 'r' || name == 'entity_number') {//int
            //
            //    
            //    
            //    let value = event.data.getInt('value')//数值
            //
            //    setData(entity, 'int', name, value)
            //}
        }
    }
    //tell(234)
    //console.log( '1'+)
    //console.log('2' + areData(player, 'camp_snow'))


})



NetworkEvents.dataReceived('combat_animation', event => {


    new guiAnimation('combat_animation', 60, event.data.getString('data'))





})



let combatAreaGui = (event) => {



    //event.addRender(consumer => {})//框 

    if (!(Client && Client.player)) return

    let player = Client.player

    // let bar1 = areData(player, 'camp_snow') ? getData(player, 'double', 'camp_snow') : 0
    var width = (event.window.guiScaledWidth / 2)



    // let bar2 = getData(player, 'int', 'camp_move')
    let r = 128
    let entity = combat_area_entity//待遍历

    if (presentAnimation && presentAnimation.name == 'combat_animation') {

        let tick = Math.max(40, Mth.lerp(Client.partialTick, presentAnimation.oTick, presentAnimation.tick))
        //  event.poseStack.pushPose()
        //  event.scale(3,3)
        // //  Client.font.drawInBatch('占领成功', width/3,50/3, getColor(129,241,115,255), true,   event.poseStack.last().pose(), Client.getBufferBuilders().bufferSource(), $Font.DisplayMode.NORMAL, 0, 15728880, Client.font.isBidirectional());
        // //Client.font.renderText(,)
        //event.poseStack.popPose()

        let txt = '据点丢失'

        let color= getColor(198, 55, 55, 255)
        
        if (presentAnimation.data == 'win') {
           
            color = getColor(74, 155, 82, 255)
            
            txt = '占领成功'
        }

        event.poseStack.pushPose()
        event.translate(width, 40, 50)
        //tell
        event.poseStack.pushPose()
        event.poseStack.scale(-0.3 * ((tick - 40) / 8) + 0.7, 0.7, 0)
        event.drawTexture('kubejs:gui/campbar.png', -101, 0, 256, 256, 0, 126, 202, 17)
        event.poseStack.popPose()

        event.poseStack.pushPose()
        event.translate(0, -16, 0)
        event.poseStack.scale(((tick - 40) / 8) + 2, ((tick - 40) / 8) + 2, 0)
        
        renderMultText(event, txt, 1, 1, -0.5 * Client.font.width('占领成功'), 0, getColor(50, 50, 50, 255), 0)
        event.translate(-0.3, -0.3, 0)
        renderMultText(event, txt, 1, 1, -0.5 * Client.font.width('占领成功'), 0, color, 0)
        event.poseStack.popPose()


        event.poseStack.popPose()

    }











    //  player.level.getEntities().forEach(entitys => {
    //
    //      if ((entitys.type == 'kubejs:combat_area_repeat' || entitys.type == 'kubejs:combat_area') && player.distanceToEntity(entitys) <= r) {
    //
    //          let camp_r = getData(entitys, 'int', 'r')
    //
    //          if (example(event, entitys, 'minecraft:player', camp_r + 16)) {
    //
    //              entity = entitys
    //          }
    //      }
    //  })
    let bar2 = 0//占领条动画//camp_snow 

    let bar1 = areData(player, 'camp_snow') ? getData(player, 'double', 'camp_snow') : 0//占领条进度//camp_move

    let number = 0//怪物数量

    let h = 0

//tell(getTime())
    //  console.log(entity)
//tell(combat_area_rangeUpdate)
    if (entity && combat_area_rangeUpdate > getTime()) {
        if (areData(entity, 'camp') && areData(entity, 'max_camp') && areData(player, 'camp_move')) {

            bar1 = getData(entity, 'double', 'camp') / getData(entity, 'double', 'max_camp')

            bar2 = getData(player, 'int', 'camp_move')

            if (bar1 == 1) {//结束动画
                if (areData(player, 'occupy_end')) {

                    let bar3 = Math.max(getData(player, 'int', 'occupy_end') - 1, 0)

                    setData(player, 'int', 'occupy_end', bar3)

                    if (bar3 == 0) { bar2 = bar2 > 5 ? bar2 - 1 : bar2 }///使长度减短

                } else {
                    setData(player, 'int', 'occupy_end', 20)
                }

                bar2 = bar2 < 5 ? bar2 + 1 : bar2//使长度减短

            } else {


                if (areData(player, 'occupy_end')) {

                    let bar3 = Math.max(getData(player, 'int', 'occupy_end') + 1, 20)

                    setData(player, 'int', 'occupy_end', bar3)

                    if (bar3 == 0) { bar2 = bar2 > 5 ? bar2 - 1 : bar2 }///使长度减短

                }
                bar2 = Math.min(bar2 + 1, 30)//getData(player, 'int', 'camp_move') 

                player.getRootData().remove('occupy_end')
            }

            number = areData(entity, 'entity_number') ? getData(entity, 'int', 'entity_number') : 0

            setData(player, 'double', 'camp_snow', bar1)//占领条进度  //仅存在客户端

            setData(player, 'int', 'camp_move', bar2)//占领条动画//仅存在客户端

            setData(player, 'int', 'entity_number', number)

        } else {//无该条件时删除

            setData(player, 'int', 'camp_move', 0)
        }
    } else {

        if (areData(player, 'camp_move')) {
            //console.log(2)

            bar2 = Math.max(getData(player, 'int', 'camp_move') - 1, 0)

            setData(player, 'int', 'camp_move', bar2)//占领条动画
        } else {

            setData(player, 'int', 'camp_move', 0)
        }
    }

    if ((bar1 && bar2) || (bar1 == 0 && bar2)) {

        //  RenderJSRenderSystem.setShaderTextureJS(new ResourceLocation("kubejs:gui/campbar.png"))//设置资源位置,这里使用了原版的"textures/gui/icons.png"
        var width = (event.window.guiScaledWidth / 2) - 62 * bar2 / 30//x轴缩放中心

        var height = + 53//y轴缩放中心

        //  bar1 = Math.abs(bar1)
        if (bar1 >= 0) {

            if (areData(player, 'occupy_end')) {

                let bar3 = getData(player, 'int', 'occupy_end')

                // RenderJSGUI.blitJS(consumer.poseStack, width, height, 62 * (1 - bar2 / 30), 51, 124 * bar2 / 30, 16 + 9 * (bar3 / 20))
                event.drawTexture('kubejs:gui/campbar.png', width, height, 256, 256, 62 * (1 - bar2 / 30), 51, 124 * bar2 / 30, 16 + 9 * (bar3 / 20))


            } else {
                event.drawTexture('kubejs:gui/campbar.png', width, height, 256, 256, 62 * (1 - bar2 / 30), 51, 124 * bar2 / 30, 25)

                //  RenderJSGUI.blitJS(consumer.poseStack, width, height, 62 * (1 - bar2 / 30), 51, 124 * bar2 / 30, 25)
            }


            //在setShaderTextureJS里设置的材质中从(53,0)开始向右和向下截取9个像素
        } else {
            //Client.player.tell(124 * bar2 / 30)
            event.drawTexture('kubejs:gui/campbar.png', width, height, 256, 256, (62 * (1 - bar2 / 30)), 24, 124 * bar2 / 30, 25)

            //  RenderJSGUI.blitJS(consumer.poseStack, width, height, 62 * (1 - bar2 / 30), 24, 124 * bar2 / 30, 25)//在setShaderTextureJS里设置的材质中从(53,0)开始向右和向下截取9个像素

        }
        //RenderJSGUI.blitJS(consumer.poseStack, width, height, 0, 0, 124 * bar2 / 30, 36)//在setShaderTextureJS里设置的材质中从(53,0)开始向右和向下截取9个像素
    }




    // event.addRender(consumer => { })//占领速度


    // if (!(Client && Client.player)) return

    //  let player = Client.player

    //  let bar1 = areData(player, 'camp_snow') ? getData(player, 'double', 'camp_snow') : 0

    //  let bar2 = getData(player, 'int', 'camp_move')

    //let speed = Math.max(getData(player, 'double', 'occupy_speed'),20)
    //  RenderJSRenderSystem.setShaderTextureJS(new ResourceLocation("kubejs:gui/campbar.png"))


    //RenderJSRenderSystem.setShaderColorJS(1, 1, 1, 150)
    //  console.log(quantity + '    ' + speed)
    // if ((bar1 && bar2) || (bar1 == 0 && bar2)) {

    if (bar1 < 0 && bar2 > 20) {//为敌对时显示速度

        var width = (event.window.guiScaledWidth / 2) + 62 //x轴缩放中心

        var height = +56 - (20 * (1 - bar2 / 30))//y轴缩放中心
        //----------------------------------------------------------------------显示的最大速度\/
        let quantity = Math.min(Math.floor(4 * getData(player, 'double', 'occupy_speed') / 40), 3)


        event.drawTexture('kubejs:gui/campbar.png', width - 10 * quantity, height, 256, 256, 0, 85, 10 * quantity, 10)

        //  RenderJSGUI.blitJS(consumer.poseStack, width - 10 * quantity, height, 0, 85, 10 * quantity, 10)//在setShaderTextureJS里设置的材质中从(53,0)开始向右和向下截取9个像素
    }
    //  }






    //  event.addRender(consumer => { })//敌人数量

    // if (!(Client && Client.player)) return

    // let player = Client.player

    // let bar1 = areData(player, 'camp_snow') ? getData(player, 'double', 'camp_snow') : 0

    // let bar2 = getData(player, 'int', 'camp_move')//动画

    // let number = getData(player, 'int', 'entity_number')

    if ((bar1 && bar2) || (bar1 == 0 && bar2)) {


        var width = (event.window.guiScaledWidth / 2) - 60 //x轴缩放中心

        var height = + 55 - (20 * (1 - bar2 / 30))//y轴缩放中心

        //   RenderJSRenderSystem.setShaderTextureJS(new ResourceLocation("kubejs:gui/campbar.png"))

        if (bar1 < 0 && bar2 > 20) {//图标
            // RenderJSGUI.blitJS(consumer.poseStack, width, height, 0, 99, 10, 10)
            event.drawTexture('kubejs:gui/campbar.png', width, height, 256, 256, 0, 99, 10, 10)

            if (typeof number == "number") {//敌人数量
              
                // event.drawTexture('kubejs:gui/campbar.png',  width+12, height, 256, 256,0, 99, 10, 10)
                event.drawString(Math.floor(number)+"", width + 12, height + 2, 155, 155, 155, 255)
                // RenderJSGUI.drawJS(consumer.poseStack, Client.font, number, width + 12, height + 2, RenderJSGUI.rgbaColor(206, 206, 206, 255 * (1 - bar2 / 30)))
            }


        }//为敌对时显示数量


    }




    //event.addRender(consumer => { })//camp条
    //获取玩家需写在addRender内部   改方法相当于registry中创建实体使用的tick

    // consumer条
    // if (!(Client && Client.player)) return

    // let player = Client.player

    // let bar1 = areData(player, 'camp_snow') ? getData(player, 'double', 'camp_snow') : 0

    // let bar2 = getData(player, 'int', 'camp_move')

    //  let number = getData(player, 'int', 'entity_number')

    if (((bar1 && bar2) || (bar1 == 0 && bar2)) && (getData(player, 'int', 'occupy_end') == 20 || !areData(player, 'occupy_end'))) {//bar=0时会判断为false
        // console.log(bar2 + RenderJSGUI.rgbaColor(73, 73, 73, 255 * (1 - bar1)) + bar1)

        //RenderJSRenderSystem.setShaderColorJS(1, 1, 1, 1)//重置颜色kubejs:gui/bossbar2.png

        //  RenderJSRenderSystem.clearColor(0, 0, 0, 0)

        //RenderJSRenderSystem.setShaderTextureJS(new ResourceLocation("kubejs:gui/campbar.png"))//设置资源位置,这里使用了原版的"textures/gui/icons.png"

        //    RenderJSRenderSystem.setShaderTextureJS(new ResourceLocation("kubejs:gui/campbar.png"))//设置资源位置,这里使用了原版的"textures/gui/icons.png"
        var width = (event.window.guiScaledWidth / 2) - 60 * bar2 / 30//x轴缩放中心

        var height = + 69//y轴缩放中心


        if (bar1 <= 0) {
            bar1 = Math.abs(bar1)//红
            event.drawTexture('kubejs:gui/campbar.png', width, height, 256, 256, 0, 0, 120 * bar1 * bar2 / 30, 6)

            //RenderJSGUI.blitJS(consumer.poseStack, width, height, 0, 0, 120 * bar1 * bar2 / 30, 6)//在setShaderTextureJS里设置的材质中从(53,0)开始向右和向下截取9个像素
            //注意这里使用的横坐标为width
            //RenderJSGUI.drawJS(consumer.poseStack, Client.font, '进度:' + 100 * (1 - bar1) + '%', width - 70 * (1 - bar2 / 30), height - 10, RenderJSGUI.rgbaColor(73, 73, 73, 255 * (1 - bar2 / 30)))
        } else {
            bar1 = Math.abs(bar1)//绿

            event.drawTexture('kubejs:gui/campbar.png', width, height, 256, 256, 0, 12, 120 * bar1 * bar2 / 30, 6)

            // RenderJSGUI.blitJS(consumer.poseStack, width, height, 0, 12, 120 * bar1 * bar2 / 30, 6)//在setShaderTextureJS里设置的材质中从(53,0)开始向右和向下截取9个像素

            // RenderJSGUI.drawJS(consumer.poseStack, Client.font, '完整度:' + 100 * bar1 + '%', width - 70 * (1 - bar2 / 30), height - 10, RenderJSGUI.rgbaColor(73, 73, 73, 255 * (1 - bar2 / 30)))
        }
        // console.log(entitys)

    }




    //  event.addRender(consumer => {//逻辑
    //  })
    //  if (!(Client && Client.player)) return

    //   let player = Client.player







}







