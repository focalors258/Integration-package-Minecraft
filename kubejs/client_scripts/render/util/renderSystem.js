
//   return Client.player.xRot>0?Math.abs( Math.sin(yaw )*90):-Math.abs(Math.sin(yaw )*90);

const DefaultVertexFormat = Java.loadClass('com.mojang.blaze3d.vertex.DefaultVertexFormat')
const VertexConsumer = Java.loadClass('com.mojang.blaze3d.vertex.VertexConsumer')
let RenderStateShard$TextureStateShard = Java.loadClass('net.minecraft.client.renderer.RenderStateShard$TextureStateShard')
let RenderStateShard = Java.loadClass('net.minecraft.client.renderer.RenderStateShard')
let RenderType = Java.loadClass('net.minecraft.client.renderer.RenderType')
let VertexFormat = Java.loadClass('com.mojang.blaze3d.vertex.VertexFormat')
let RenderType$CompositeState = Java.loadClass('net.minecraft.client.renderer.RenderType$CompositeState')
let OverlayTexture = Java.loadClass('net.minecraft.client.renderer.texture.OverlayTexture')
let ResourceLocations = Java.loadClass('net.minecraft.resources.ResourceLocation')
//   return Client.player.xRot>0?Math.abs( Math.sin(yaw )*90):-Math.abs(Math.sin(yaw )*90);

let FOV = 100


let FOVTime = 0

let FOVTimeEnd = 0


let setMoveFOV = (VALUE, TIME) => {

    FOVTimeEnd = Date.now() + TIME

    FOVTime = TIME
    FOV = VALUE



}


function getBrightRender(ResourceLocation) {

    let renderTextureState = new RenderStateShard$TextureStateShard(ResourceLocation, false, false)

    //RenderType.create(new SheetedDecalTextureGenerator(pBuffer.getBuffer(RenderType.glintDirect()), pMatrixEntry.pose(), pMatrixEntry.normal(), 0.0078125F), pBuffer.getBuffer(pRenderType))



    return RenderType.create(
        'aaa',
        DefaultVertexFormat.NEW_ENTITY,//<-着色器  特定着色器对顶点参数有要求
        VertexFormat.Mode.QUADS,
        256,
        false,
        true,
        RenderType$CompositeState
            .builder()
            .setTextureState(renderTextureState)
            .setShaderState(RenderStateShard.RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER)
            .setTransparencyState(RenderStateShard.NO_TRANSPARENCY)
            .setCullState(RenderStateShard.NO_CULL)
            .setLightmapState(RenderStateShard.LIGHTMAP)
            .setOverlayState(RenderStateShard.OVERLAY)
            .createCompositeState(false)
    )

}





/**
 * @param {PoseStack} poseStack 
 */
////priority:1080  
function GuiGraphicJS(poseStack) {

    /**@type {Internal.MultiBufferSource$BufferSource} */
    this.multiBufferSource = Client.getBufferBuilders().bufferSource()

    this.poseStack = poseStack


    this.blit1 = function (ResourceLocation, x, y, z, textureX, textureY, Width, Height, TextureWidth, TextureHeight) {

        this.poseStack.pushPose()
        //使渲染的顶点为图片比例
        let x1 = x
        let x2 = x + Width
        let y1 = y
        let y2 = y + Height

        //截取图片的起点和终点为百分比
        let u1 = textureX / TextureWidth
        let u2 = (textureX + Width) / TextureWidth
        let v1 = textureY / TextureHeight
        let v2 = textureY + Height / TextureHeight

        let pose = poseStack.last().pose()

        let normal = poseStack.last().normal()
        //.overlayCoords(OverlayTexture.NO_OVERLAY).uv2(p_229039_12_).normal(p_229039_2_, (float) p_229039_9_, (float) p_229039_11_, (float) p_229039_10_)
        //  this.multiBufferSource.getBuffer()

        //  $Minecraft.getInstance().getb

        //this.multiBufferSource.getBuffer(getBrightRender(ResourceLocation)).vertex(pose, x1, y1, z).  uv(u1, v1).color(255, 255, 255, 255).overlayCoords(OverlayTexture.NO_OVERLAY).uv2(240).normal(normal,1,1,0).endVertex()
        // this.multiBufferSource.getBuffer(getBrightRender(ResourceLocation)).vertex(pose, x1, y2, z). uv(u1, v2).color(255, 255, 255, 255).overlayCoords(OverlayTexture.NO_OVERLAY).uv2(240).normal(normal,1,1,0).endVertex()
        // this.multiBufferSource.getBuffer(getBrightRender(ResourceLocation)).vertex(pose, x2, y2, z).uv(u2, v2).color(255, 255, 255, 255).overlayCoords(OverlayTexture.NO_OVERLAY).uv2(240).normal(normal,1,1,0).endVertex()
        // this.multiBufferSource.getBuffer(getBrightRender(ResourceLocation)).vertex(pose, x2, y1, z). uv(u2, v1).color(255, 255, 255, 255).overlayCoords(OverlayTexture.NO_OVERLAY).uv2(240).normal(normal,1,1,0).endVertex()
        Client.player.tell(u1 + '   ' + x2 + '   ' + y1 + '   ' + y2)

        this.poseStack.popPose()

    }







    // , , (pVOffset + 0.0F) / (float)pTextureHeight, (pVOffset + (float)pVHeight) / (float)pTextureHeight
}//'kubejs:textures/entity/add_field.png'




/**
 * @param {*} event 
 * @param {String} txt 
 * @param {number} scaleX 
 * @param {number} scaleY 
 * @param {number} x 
 * @param {number} y 
 * @param {number} color 
   单行宽度  填0为不限宽度
 * @param {number} width 
 */
function renderText(event, txt, scaleX, scaleY, x, y, color, width) {



    let zoomWidth = Client.font.width(String(txt)) * scaleY  //缩放宽度

    txt = String(txt)

    event.poseStack.pushPose()
    event.poseStack.scale(scaleX, scaleY, 0)


    if (zoomWidth > width && width != 0) {//过长时换行



        let proportion = width / zoomWidth

        event.poseStack.scale(proportion, proportion, 0)

        event.drawShadowString(txt, x / scaleX / proportion, y / scaleY / proportion, color)


    } else {

        event.drawShadowString(txt, x / scaleX, y / scaleY, color)

    }

    event.poseStack.popPose()


    RenderJSRenderSystem.enableBlendJS()


}



/**
 * @param {*} event 
 * @param {String} txt 
 * @param {number} scaleX 
 * @param {number} scaleY 
 * @param {number} x 
 * @param {number} y 
 * @param {number} color 
   单行宽度  填0为不限宽度
 * @param {number} width 
 */
function renderMultText(event, txt, scaleX, scaleY, x, y, color, width) {

    let zoomWidth = Client.font.width(String(txt)) * scaleY  //缩放宽度

    txt = String(txt)

    event.poseStack.pushPose()
    event.poseStack.scale(scaleX, scaleY, 0)
    //event.translate(0, 0, 99)      //   if( Client.font.width(String(txt)) * scaleY <width) break

    if (zoomWidth > width && width != 0) {//过长时换行

        for (let i = 0; (zoomWidth - width * i) >= 0; i++) {

            let newTxt = String(Client.font.plainSubstrByWidth(txt, width))

            if (newTxt.indexOf('\n') > 0) {

                newTxt = String(newTxt.substring(0, newTxt.indexOf('\n')))

                zoomWidth += width
            }

            event.drawShadowString(newTxt, x / scaleX, y / scaleY + i * 10, color)

            txt = txt.slice(newTxt.length)//注意  mc自定义的字符串类型不可直接用legnht 需加括号

            // Client.player.tell(txt)   =Client.font.plainSubstrByWidth(txt,7+(zoomWidth-width*(i+1)),true)

        }

    } else {

        event.drawShadowString(txt, x / scaleX, y / scaleY, color)

    }

    event.poseStack.popPose()


    RenderJSRenderSystem.enableBlendJS()//启用透明  允许之下的图片渲染透明颜色  本已经成功透明渲染的语句不能在其之中

}

/**
 * @param {GuiGraphics} guiGraphic 
 * @param {String} txt 
 * @param {number} scaleX 
 * @param {number} scaleY 
 * @param {number} x 
 * @param {number} y 
 * @param {number} color 
   单行宽度  填0为不限宽度
 * @param {number} width 
 */
function renderMultText1(guiGraphic, txt, scaleX, scaleY, x, y, color, width) {

    let zoomWidth = Client.font.width(String(txt)) * scaleY  //缩放宽度

    txt = String(txt)

    guiGraphic.pose().pushPose()
    guiGraphic.pose().scale(scaleX, scaleY, 0)
    //event.translate(0, 0, 99)      //   if( Client.font.width(String(txt)) * scaleY <width) break

    if (zoomWidth > width && width != 0) {//过长时换行

        for (let i = 0; (zoomWidth - width * i) >= 0; i++) {

            let newTxt = String(Client.font.plainSubstrByWidth(txt, width))

            //newTxt.


            let a = newTxt.indexOf('\n')


            if (newTxt.indexOf('\n') > 0) {

                newTxt = String(newTxt.substring(0, newTxt.indexOf('\n') + 1))

                zoomWidth += width

            }

            // tell(i+'  '+a +newTxt)  
            //tell(newTxt)
            //guiGraphic.drawShadowString(newTxt, x / scaleX, y / scaleY + i * 10, color)
            guiGraphic["drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)"](
                Client.font,
                newTxt,
                x / scaleX,
                y / scaleY + i * 10,
                color,
                false)



            txt = txt.slice(newTxt.length)//注意  mc自定义的字符串类型不可直接用legnht 需加括号

            // Client.player.tell(txt)   =Client.font.plainSubstrByWidth(txt,7+(zoomWidth-width*(i+1)),true)

        }

    } else {
        guiGraphic["drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)"](
            Client.font,
            txt,
            x / scaleX,
            y / scaleY,
            color,
            false)
        //    guiGraphic.drawShadowString(txt, x / scaleX, y / scaleY, color)

    }

    guiGraphic.pose().popPose()


    RenderJSRenderSystem.enableBlendJS()//启用透明  允许之下的图片渲染透明颜色  本已经成功透明渲染的语句不能在其之中

}






function renderTextrue(event, path, x, y, z, scale, pivotX, pivotY, textureWidth, textureHeight, x1, y1, x2, y2) {




    RenderJSRenderSystem.enableBlendJS()

    event.poseStack.pushPose()


    event.translate(x, y, z)

    event.scale(scale, scale)
    //tell(path+"   "+pivotX+"   "+pivotY+"   "+textureWidth+"   "+ textureHeight+"   "+x1+"   "+ y1+"   "+ x2+"   "+y2)

    //  tell(4)
    event.drawTexture(path, pivotX, pivotY, textureWidth, textureHeight, x1, y1, x2, y2)
    event.poseStack.popPose()


}



function renderTextrue2(event, angle, x1, y1, z1, rotation, scale, x2, y2, z2, path, textureWidth, textureHeight, uOffset, vOffset, uWidth, vHeight) {

    RenderJSRenderSystem.enableBlendJS()

    event.poseStack.pushPose()
    event.transformerCamera(event.poseStack, event.camera)

    event.poseStack.translate(x1, y1, z1)//再次设置位置为在之前的基础上修改位置
    event.poseStack.mulPose(angle)

    event.poseStack.scale(scale, scale, scale)
    event.rotationDegreesZ(rotation)


    event.poseStack.translate(x2, y2, z2)
    event.drawTexture(path, 0, 0, textureWidth, textureHeight, uOffset, vOffset, uWidth, vHeight)//注意 图片横竖与绘图软件相反
    event.poseStack.popPose()


}

let getTimeFormat = (time) => {

    let second = Math.max(Math.floor(time % 60), 0)//秒

    let minute = Math.max(Math.floor(time / 60), 0)//分





    return minute + ':' + (second / 10 < 1 ? '0' + second : second)

}

let addRender2 = (event, GuiGraphic, angle, x1, y1, z1, rotation, scale, x2, y2, z2, path, textureWidth, textureHeight, uOffset, vOffset, uWidth, vHeight) => {



    event.poseStack.pushPose()
    //  event.transformerCamera(event.poseStack, event.camera)

    event.poseStack.translate(x1, y1, z1)//再次设置位置为在之前的基础上修改位置
    event.poseStack.mulPose(angle)

    event.poseStack.mulPose(RotationAxis.ZP.deg(rotation))

    event.poseStack.scale(scale, scale, scale)
    //event.rotationDegreesZ(rotation)


    event.poseStack.translate(x2, y2, z2)
    GuiGraphic.blit(path, 0, 0, uOffset, vOffset, uWidth, vHeight, textureWidth, textureHeight)//注意 图片横竖与绘图软件相反
    event.poseStack.popPose()

}


//ForgeModEvents.onEvent('net.minecraftforge.client.event.RenderGuiEvent$Pre',event=>{})



//let tick=0
//
//
////注意 图片横竖与绘图软件相反
//
////let summationfps=0
//
//let y = {}
//
//let x = {}
//
//let z = {}



//let GuiGraphic=Java.loadClass('net.minecraft.client.gui.GuiGraphics')
//Internal.MultiBufferSource$BufferSource



//let barLink = {}

NativeEvents.onEvent($GeoRender$Post, event => {
    let { poseStack, entity, renderer, } = event//打开光影后不能再使用e.multiBufferSource
    let multiBufferSource = $Minecraft.getInstance().renderBuffers().bufferSource()//Client.getBufferBuilders().bufferSource()
    let newEvent = {}
    newEvent.poseStack = poseStack
    newEvent.entity = entity
    newEvent.renderer = renderer
    newEvent.multiBufferSource = multiBufferSource
    newEvent.guiGraphicJS = new GuiGraphicJS(poseStack)
    newEvent.guiGraphic = new GuiGraphics($Minecraft.getInstance(), poseStack, multiBufferSource)

    //  RenderJSRenderSystem.enableBlendJS()

    RenderJSEventList.entityPost.forEach(e => e(newEvent))

})



// Client.player.tell()

//如果加载优先级过高会在外部方法未加载的情况下调用并报错
NativeEvents.onEvent($LivingRender$Post, event => {//打开光影后不能再使用e.multiBufferSource
    //注意 moonlight模组会优化GuiGraphic的构造函数



    let { poseStack, entity, renderer, } = event//打开光影后不能再使用e.multiBufferSource

    let multiBufferSource = $Minecraft.getInstance().renderBuffers().bufferSource()//Client.getBufferBuilders().bufferSource()

    let newEvent = {}
    newEvent.poseStack = poseStack
    newEvent.entity = entity
    newEvent.renderer = renderer
    newEvent.multiBufferSource = multiBufferSource
    newEvent.guiGraphic = new GuiGraphics($Minecraft.getInstance(), poseStack, multiBufferSource)
    newEvent.guiGraphicJS = new GuiGraphicJS(poseStack)
    //   for (let id in RenderJSEventList.allEntityRender) {//自定义事件
    RenderJSEventList.entityPost.forEach(e => e(newEvent))
    event.poseStack.scale(3.5, 3.5, 3.5)
})

NativeEvents.onEvent($GeoRender$Pre, event => {
    let { poseStack, entity, renderer, } = event//打开光影后不能再使用e.multiBufferSource
    let multiBufferSource = $Minecraft.getInstance().renderBuffers().bufferSource()//Client.getBufferBuilders().bufferSource()
    let newEvent = {}
    newEvent.poseStack = poseStack
    newEvent.entity = entity
    newEvent.renderer = renderer
    newEvent.multiBufferSource = multiBufferSource
    newEvent.guiGraphicJS = new GuiGraphicJS(poseStack)
    newEvent.guiGraphic = new GuiGraphics($Minecraft.getInstance(), poseStack, multiBufferSource)

    //  RenderJSRenderSystem.enableBlendJS()

    RenderJSEventList.entityPre.forEach(e => e(newEvent))

})



// Client.player.tell()

//如果加载优先级过高会在外部方法未加载的情况下调用并报错
NativeEvents.onEvent($LivingRender$Pre, event => {//打开光影后不能再使用e.multiBufferSource
    //注意 moonlight模组会优化GuiGraphic的构造函数



    let { poseStack, entity, renderer, } = event//打开光影后不能再使用e.multiBufferSource

    let multiBufferSource = $Minecraft.getInstance().renderBuffers().bufferSource()//Client.getBufferBuilders().bufferSource()

    let newEvent = {}
    newEvent.poseStack = poseStack
    newEvent.entity = entity
    newEvent.renderer = renderer
    newEvent.multiBufferSource = multiBufferSource
    newEvent.guiGraphic = new GuiGraphics($Minecraft.getInstance(), poseStack, multiBufferSource)
    newEvent.guiGraphicJS = new GuiGraphicJS(poseStack)
    //   for (let id in RenderJSEventList.allEntityRender) {//自定义事件
    RenderJSEventList.entityPre.forEach(e => e(newEvent))
    //event.poseStack.scale(3.5, 3.5, 3.5)
})









let spaceTick = 0

let partialTick = 0


let renderFPS = (event) => {//不可放在levelrender 频率不同


    spaceTick = RenderTick % Math.floor(20 / DPF)

    partialTick = spaceTick / Math.floor(20 / DPF)

    RenderTick += DPF

    //   Client.player.tell(spaceTick)




}

function getPitch(w, x, y, z) {

    const norm = Math.sqrt(w * w + x * x + y * y + z * z);
    w /= norm;
    x /= norm;
    y /= norm;
    z /= norm;

    return Math.asin(2 * (w * x - z * x));



}
function getRoll(w, x, y, z) {//获取mc竖轴
    // 归一化四元数
    const norm = Math.sqrt(w * w + x * x + y * y + z * z);
    w /= norm;
    x /= norm;
    y /= norm;
    z /= norm;

    // 计算Roll: arctan2(2(wx + yz), 1 - 2(x² + y²))
    const numerator = 2 * (w * x + y * z);
    const denominator = 1 - 2 * (x * x + y * y);
    return reviseRoll(Math.atan2(numerator, denominator));
}

function getYaw(w, x, y, z) {
    // 归一化四元数
    const norm = Math.sqrt(w * w + x * x + y * y + z * z);
    w /= norm;
    x /= norm;
    y /= norm;
    z /= norm;

    // 计算Yaw: arctan2(2(wz + xy), 1 - 2(y² + z²))
    const numerator = 2 * (w * z + x * y);
    const denominator = 1 - 2 * (y * y + z * z);
    return Math.atan2(numerator, denominator);
}


function setQuaternionfX(value) {//横轴

    return RotationAxis.YP.deg(value)
}
function setQuaternionfY(value) {//竖轴

    return RotationAxis.XP.deg(value)
}
function setQuaternionfZ(value) {//倾斜轴

    return RotationAxis.ZP.deg(value)

}

/**
 * 将Yaw角度转换为0-360度范围
 * @param {number} yaw - 偏航角（弧度）
 * @returns {number} 0-360度范围内的角度值
 */
function reviseRoll(yaw) {//修复roll以适配mc


    //tell(Client.player.xRot)
    // let degrees = toDegrees(yaw);
    // 转换为0-360度范围
    return Client.player.xRotO > 0 ?
        Math.abs(Math.asin(Math.sin(yaw)) / PI * 180)
        : -Math.abs(Math.asin(Math.sin(yaw)) / PI * 180);
}




/**
 * 将Roll角度转换为0-360度范围
 * @param {number} roll - 滚转角（弧度）
 * @returns {number} 0-360度范围内的角度值
 */
function normalizeRoll(roll) {
    // let degrees = toDegrees(roll);
    // 转换为0-360度范围
    return (roll + 360) % 360;
}





let entityRenderInit = (event) => {
    // 注意  渲染字体后就可使透明图片不在遮挡图层后实体  return Client.player.xRot > 0 ?  return Client.player.xRot > 0 ?  return Client.player.xRot > 0 ?
    // 注意  渲染字体后就可使透明图片不在遮挡图层后实体        Math.abs(Math.asin(Math.sin(yaw)) / PI * 180)        Math.abs(Math.asin(Math.sin(yaw)) / PI * 180)        Math.abs(Math.asin(Math.sin(yaw)) / PI * 180)
    // 注意  渲染字体后就可使透明图片不在遮挡图层后实体        : -Math.abs(Math.asin(Math.sin(yaw)) / PI * 180);        : -Math.abs(Math.asin(Math.sin(yaw)) / PI * 180);        : -Math.abs(Math.asin(Math.sin(yaw)) / PI * 180);
    // 注意  渲染字体后就可使透明图片不在遮挡图层后实体

    // 注意  渲染字体后就可使透明图片不在遮挡图层后实体

    event.poseStack.pushPose()
    event.guiGraphic["drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)"](
        Client.font,
        ' ',
        0,
        0,
        getColor(200, 200, 200, 255),
        false)
    event.poseStack.popPose()//清空



}



//渲染圈形条
let renderCircle = (event,value,tetxtrue,tetxtrueX,tetxtrueY,w,h,x,y,r) => {

RenderJSRenderSystem.enableBlend()

    let mana1 = Math.min(1, value * 4)

    let mana2 = Math.min(1, Math.max(0, value - 0.25) * 4)

    let mana3 = Math.min(1, Math.max(0, value - 0.5) * 4)

    let mana4 = Math.min(1, Math.max(0, value - 0.75) * 4)
    //event.translate(60, 60, 0)
    event.poseStack.pushPose()
     event.translate(h, 0, 0)
    renderTextrue(event, tetxtrue, 0, 0, 0, 1, 0, 0, tetxtrueX,tetxtrueY, x,y, w * mana1, h)//带能量条
    event.poseStack.popPose()
    event.poseStack.pushPose()
    event.translate(r, h, 0)
    event.poseStack.mulPose($Axis.ZP.rotationDegrees(90))
    renderTextrue(event, tetxtrue, 0, 0, 0, 1, 0, 0, tetxtrueX,tetxtrueY, x,y, w * mana2, h)//带能量条
    event.poseStack.popPose()

    event.poseStack.pushPose()
    event.translate(r-h, r, 0)
    event.poseStack.mulPose($Axis.ZP.rotationDegrees(180))
    renderTextrue(event, tetxtrue, 0, 0, 0, 1, 0, 0,tetxtrueX,tetxtrueY, x,y, w * mana3, h)//带能量条
    event.poseStack.popPose()


    event.poseStack.pushPose()
    event.translate(0, r-h, 0)
    event.poseStack.mulPose($Axis.ZP.rotationDegrees(270))
    renderTextrue(event, tetxtrue, 0, 0, 0, 1, 0, 0,tetxtrueX,tetxtrueY, x,y, w * mana4, h)//带能量条
    event.poseStack.popPose()













}








