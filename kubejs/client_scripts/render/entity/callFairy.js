NetworkEvents.dataReceived("heal_fairy", e => {


    let data = e.getData()


    //  let player = e.getLevel().getEntity(data.getInt("player"))

    let entity = e.level.getEntity(data.getInt("entity"))

    entity.setDataValue("client_host", data.getInt("player"))

    entity.setDataValue("client_heal", data.getInt("heal"))

})
NetworkEvents.dataReceived("att_fairy", e => {


    let data = e.getData()


    // let player = e.getLevel().getEntity(data.getInt("player"))

    let entity = e.level.getEntity(data.getInt("entity"))
    if (entity) {

        let type = data.getString("type")

        entity.setDataValue("client_host", data.getInt("player"))

        entity.setDataList("color", data.get("color"))

        entity.setDataValue("client_type", type)
    }
    //  if(type=="fire"){
    //      entity.setDataList("color", [])
    //  }else if(type=="ice"){
    //      entity.setDataList("client_type", "ice")
    //  }else if(type=="light"){
    //      entity.setDataList("client_type", "light")
    //  }



})



NetworkEvents.dataReceived("fairy_bullet", e => {

    let data = e.getData()
    //tell(5674)

    let entity = e.level.getEntity(data.getInt("entity"))
    if (entity) {
        entity.setDataValue("xRot", data.getDouble("xRot"))

        entity.setDataValue("yRot", data.getDouble("yRot"))

        entity.setDataValue("color", data.get("color"))

        entity.setDataValue("type", data.getString("type"))
    }
    // tell(data.get("color"))


})

let callRender1 = (event) => {

    let entity = event.entity


    //let color = entity.getDataList("color")


    event.poseStack.mulPose($Axis.YN.rotationDegrees(180 + entity.getDataDouble("yRot")))
    event.poseStack.mulPose($Axis.XN.rotationDegrees((entity.getDataDouble("xRot"))))
    if (entity.getDataString("type") == "ender") {
        event.poseStack.scale(0, 0, 0)
    } else {
        event.poseStack.scale(0.5, 0.5, 0.5)
    } //   tell(entity)

    /**@type {Internal.CompoundTag} */
    let color = entity.getDataList("color")
    if (color) {

        RenderJSRenderSystem.setShaderColor(color.getDouble("0"), color.getDouble("1"), color.getDouble("2"), color.getDouble("3"))//修改颜色后需重置
    }

}


let callRender2 = (event) => {
    event.poseStack.scale(1.7, 1.7, 1.7)//对实体渲染修改应在pre且不添加栈

    RenderJSRenderSystem.setShaderColor(1.5, 2, 1.5, 1.5)

}

let callHeal = (event) => {

 let entity = event.entity

     //event.poseStack.scale(1/1.7, 1/1.7, 1/1.7)//对实体渲染修改应在pre且不添加栈

    let player = entity.level.getEntity(entity.getDataInt("client_host"))
    if (player) {
        event.poseStack.pushPose()//创建新的AFTER_TRIPWIRE_BLOCKS

        $RenderSystem.enableBlend()
        $RenderSystem.enableDepthTest()

        let pos = new $Vector3d(0, 0.4, 0)


        let targetEnderEyePos = [
            Mth.lerp(Client.partialTick, player.xOld, player.x) - Mth.lerp(Client.partialTick, entity.xOld, entity.x),
            Mth.lerp(Client.partialTick, player.yOld + 1, player.y + 1) - Mth.lerp(Client.partialTick, entity.yOld, entity.y),
            Mth.lerp(Client.partialTick, player.zOld, player.z) - Mth.lerp(Client.partialTick, entity.zOld, entity.z)

        ]


        let r = $Render.of(event.poseStack)
        let d = Math.pow(Math.pow(targetEnderEyePos[0], 2) + Math.pow(targetEnderEyePos[1], 2) + Math.pow(targetEnderEyePos[2], 2), 0.5)

        let move = -4 * entity.age
        //tell(d)
        r.setTexture("kubejs:textures/entity/ribbon_squiggle.png")
        r.setTextureUV(move, d * (64) + move, 0, 16, 64, 16)


        if (d < 4) {

            RenderJSRenderSystem.setShaderColor(1, 1.9,10, 10)//修改颜色后需重置
            r.renderLaser([pos.x, pos.y, pos.z,], targetEnderEyePos, 0.2, PI / 2)
            r.renderLaser([pos.x, pos.y, pos.z,], targetEnderEyePos, 0.2, 0)
             //RenderJSRenderSystem.setShaderColor(1, 1 ,1,1)//修改颜色后需重置
            //  tell(523423423)
        }
        event.poseStack.popPose()//创建新的AFTER_TRIPWIRE_BLOCKS
    }
   




}


let callRender3 = (event) => {

    let entity = event.entity
    event.poseStack.scale(1.7, 1.7, 1.7)//对实体渲染修改应在pre且不添加栈
    /**@type {Internal.CompoundTag} */
    let color = entity.getDataList("color")
    if (color) {

        RenderJSRenderSystem.setShaderColor(color.getDouble("0"), color.getDouble("1"), color.getDouble("2"), color.getDouble("3"))//修改颜色后需重置
    }



}












