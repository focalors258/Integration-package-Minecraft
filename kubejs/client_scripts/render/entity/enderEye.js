NetworkEvents.dataReceived("ender_eye", e => {//使用者同步数据

    let id = e.getData().getInt("entity")

    more_skill_data.time = 20


    more_skill_data.use = "ender_eye"

    let player = Client.player

    let entity = e.level.getEntity(id)

    useEnderEye = entity


    if (entity) {
        more_skill_data.data = {
            id: id
        }

    }

})
NetworkEvents.dataReceived("use_enderEye", e => {//旁观者同步数据

    let entity = e.level.getEntity(e.getData().getInt("entity"))

    let player = e.level.getPlayerByUUID(e.getData().getString("player"))



    setData(player, $Int, "enderEye_entity", e.getData().getInt("entity"))

})

NetworkEvents.dataReceived("remove_enderEye", e => {//旁观者同步数据

    let entity = e.level.getEntity(e.getData().getInt("entity"))

    let player = e.level.getPlayerByUUID(e.getData().getString("player"))



     player.getRootData().remove("enderEye_entity")

})



let targetEnderEyePos//目标末影之眼位置


let useEnderEye

let enderEyeRender = (event, entity, guiGraphic) => {

    //"integration_package_core:player_animation_entity"
    // tell()
   
    //&& areData(event.entity.player, "enderEye_entity")
    if (event.entity instanceof $PlayerAnimationEntity) {



        if (event.entity.player && areData(event.entity.player, "enderEye_entity")) {

            let player = event.entity

            let entity = player.level.getEntity(getData(event.entity.player, $Int, "enderEye_entity"))

            event.poseStack.pushPose()//创建新的AFTER_TRIPWIRE_BLOCKS

            $RenderSystem.enableBlend()
            $RenderSystem.enableDepthTest()

            //获取主手坐标
            let x = event.entity.mainHand.m30()
            let y = event.entity.mainHand.m31() - 0.2
            let z = event.entity.mainHand.m32()
            let pos = new $Vector3d(x, y, z)
            // tell(pos)
            pos.rotateY(PI * (1 - event.entity.getYRots() / 180))

            //  let pos1=new $Vector3d(pos.x, pos.y, pos.z)

            //   pos1.rotateX(PI*(1-event.entity.getXRots()/180))

            //  pos.rotateX(PI * (event.entity.xRot / 180))

            // tell(PI * event.entity.yRot / 180)

            // tell(pos)

            //  pos.rotateX(event.entity.xRot)

           event.poseStack.mulPose($Axis.XN.rotationDegrees(Mth.lerp(Client.partialTick, -event.entity.xRotO, -event.entity.getXRots())));
            event.poseStack.mulPose($Axis.YN.rotationDegrees(Mth.lerp(Client.partialTick, -event.entity.yRotO, -event.entity.getYRots())));

//tell(event.entity.getYRots())


            let targetEnderEyePos = [
                entity.x - Mth.lerp(Client.partialTick, player.player.xOld, player.player.x),
                entity.y - Mth.lerp(Client.partialTick, player.player.yOld, player.player.y),
                entity.z - Mth.lerp(Client.partialTick, player.player.zOld, player.player.z)]

            //$Render.of(event.poseStack).renderLaser([0, 1, 0], [5, 5, 5], 0.02, 0)


            let r = $Render.of(event.poseStack)

            r.setTexture("kubejs:textures/entity/ender_eye.png")
            r.setTextureUV(0, 1, 24, 25, 50, 50)

            // $Render.of(event.poseStack).renderLaser([0, 1, 0], [-5, 5, 5], 0.02, 0)

            r.renderLaser([pos.x, pos.y, pos.z,], targetEnderEyePos, 0.02, PI / 2)
            r.renderLaser([pos.x, pos.y, pos.z,], targetEnderEyePos, 0.02, 0)
            //  tell(523423423)
            event.poseStack.popPose()//创建新的AFTER_TRIPWIRE_BLOCKS

        }

    }

    if (event.entity.type == 'kubejs:ender_eye') {

        event.poseStack.pushPose()//创建新的AFTER_TRIPWIRE_BLOCKS

        $RenderSystem.enableBlend()
        $RenderSystem.enableDepthTest()

        let a = Client.entityRenderDispatcher.cameraOrientation()
        event.poseStack.mulPose(a)

        event.poseStack.mulPose(setQuaternionfZ(180))//


        //event.poseStack.mulPose(setQuaternionfY(45))
        //$Render.of().guiGraphics.fill(-0.2, 0.2, 3.2, 2.8, 0)

        // guiGraphic.fill(
        event.poseStack.scale(0.05, 0.05, 1)

        RenderJSRenderSystem.setShaderColor(1, 1, 1.1, useEnderEye == entity ? 5 : 1.5)//每次渲染都需重置

        //guiGraphic.hLine(0, 10, 2, 0)

        if (useEnderEye == entity) {
            event.poseStack.pushPose()
            event.poseStack.scale(1.5, 1.5, 1)
            guiGraphic.blit('kubejs:textures/entity/ender_eye.png', -9, -9, 0, 0, 18, 18, 50, 50,)
            event.poseStack.popPose()
        } else {

            guiGraphic.blit('kubejs:textures/entity/ender_eye.png', -9, -9, 0, 0, 18, 18, 50, 50,)


        }



        event.poseStack.translate(0, 0, 0.1)

        RenderJSRenderSystem.setShaderColor(1, 1, 1, 1)//每次渲染都需重置
        guiGraphic.blit('kubejs:textures/entity/ender_eye.png', -7, -7, 24, 0, 14, 14, 50, 50,)//


        //  event.poseStack.mulPose(setQuaternionfY(getRoll(a.w(), a.x(), a.y(), a.z())))
        //    event.poseStack.mulPose(setQuaternionfZ(getRoll(a.w(), a.x(), a.y(), a.z())))

        // event.poseStack.scale(1, 500, 1)
        // guiGraphic.blit('kubejs:textures/entity/ender_eye.png', 0, 0, 4, 1, 1, 1, 50, 50,)
        //       




        event.poseStack.popPose()//创建新的AFTER_TRIPWIRE_BLOCKS

    }













}



let sendEnder_eyeMove = () => {//按下按键后

    // tell(skill_1.data.x+"   "+skill_1.data.y+"   "+skill_1.data.z)

    Client.player.sendData("ender_eye", { uuid: Client.player.level.getEntity(more_skill_data.data.id).getStringUuid() })



}