//界面状态
let 副本目录缓存 = 0//当前选项  区别于鼠标位置所选
let copy_click = 0//点击反馈
let copy_roll = 0//目录滚动
let copy = false//是否打开

let copy_click1 = 0

//窗口ui信息显示
let 副本_精英模式 = false//是否有精英模式

let 副本_选项数量 = 10//选项数量

let 副本_名称 = '副本'

let 副本背景 = 'aaa'

let 副本_描述 = ''//描述

let 玩家_副本_星级 = [2, 1, 2, 1, 3, 2, 3, 2, 5, 1, 3, 2, 1, 1, 2]//星级 不同难度分开记录 长久保存

let 星级_条件 = {}//仅在副本启用时生效

let 副本_星级解锁 = [2, 1, 2, 1, 3, 2, 3, 2, 5, 1, 3, 2, 1, 1, 2]

let 副本_boss等级 = [2, 1, 2, 1, 3, 2, 3, 2, 5, 1, 3, 2, 1, 1, 2]

let 副本_解锁等级 = [2, 1, 2, 1, 3, 2, 3, 2, 5, 1, 3, 2, 1, 1, 2]

let 挑战时间 = [2, 1, 2, 1, 3, 2, 3, 2, 5, 1, 3, 2, 1, 1, 2]

let 副本_战利品 = {}
//主页动画ui信息显示
//let 副本_cooling_time1=0

let 副本_condition = 0

let 副本_time = 0

let 副本_max_time = 0

let copy_rangeUpdate = 0//副本范围更新间隔

//实体缓存
let copy_entity

//let 副本_最低等级 = 40//最低等级
//
//let 副本_等级增长 = 4//等级增长deviation

//let 副本_等级偏差 = 0//允许的等级偏差

//let copy_projects_txt = []

Animation.copyBeginsAnimation = 0
Animation.copyLoseAnimation = 0
Animation.copyWinAnimation = 0

//let RenderJSRenderGuiEvent= Java.loadClass('com.chen1335.renderjs.client.events.renderEvent.RenderJSRenderGuiEvent') 

let 难度目录// = new Rool(0, 0, 50, 180, 副本_选项数量, 0, 101, 'tytyyr')//目录对象

let 战利品目录//=new  Rool(375, 265, 50, 180, 副本_选项数量, 0, 101, 'tytyyr','horizontal')

let CopyUi = (event, guiGraphics) => {


  //tell(RoolList[Client.player.containerMenu.containerId][ 'tytyyr']===rool)

  //tell(rool.click())
  // rool.slice()
  //tell(rool.slidePos)
  // Client.player.tell(puffish_expLevel)

  // RenderJSRenderSystem.enableBlendJS()//启用透明  允许之下的图片渲染透明颜色  本已经成功透明渲染的语句不能在其之中  注意 当语句之下使用了文字渲染 则文字渲染下的图片渲染将不再透明
  RenderJSRenderSystem.enableBlendJS()//启用透明  允许之下的图片渲染透明颜色  本已经成功透明渲染的语句不能在其之中

  if (Client.screen instanceof $LecternClass && Client.player.containerMenu.containerId == 101 && 难度目录 && 战利品目录) {
    // RenderJSRenderSystem.setShaderColor(1,1,1,1)

    难度目录.rollBefore = 副本目录缓存

    //tell(战利品目录)

    if (copy_click1 < 60) copy_click1 += DPF * ((60 - copy_click1) / 30)//动画

    if (60 - copy_click1 < 0.2) copy_click1 = 60


    if (难度目录.rollBefore >= -1) {
      if (copy_click < 60) copy_click += DPF * ((60 - copy_click) / 30)//动画

      if (60 - copy_click < 0.2) copy_click = 60
    }

    let width = Client.window.guiScaledWidth

    let height = Client.window.guiScaledHeight//缩放后屏幕大小

    let selective = Math.floor((MouseY - copy_roll - 20 + 12.5) / 50) //鼠标当前位置选择的项目


    let scale = 1.3 + 0.2 * Math.cos(copy_click / 60)


    //event.poseStack.pushPose()
    //  event.translate(0, 0, 500)//先设置位置再调尺寸
    //
    //vent.fill(0, 0, 500, 500, 10, 10, 10, overlay * 1)//叠加层
    //   event.poseStack.popPose()
    //   


    event.poseStack.pushPose()
    event.scale(width / 640, height / 375)//图片拉伸覆盖

    event.translate(322, 166, 0)//先设置位置再调尺寸

    // event.scale(0.4, 0.4)
    event.scale(0.2 * scale, 0.2 * scale)

    //  event.translate(-1212, -606, -1)

    event.drawTexture(副本背景, -1280, -670, 2560, 1500, 0, 0, 2560, 1500)//图片
    event.poseStack.popPose()

    //Client.player.tell(getImageDimensions(背景))
    event.fill(0, 0, 5000, 5000, 10, 10, 10, overlay * 7)//叠加层


    //translucent

    //tell(getMouseScroll())


    event.poseStack.pushPose()

    event.poseStack.translate(0, 难度目录.slidePos, 0)//整体滑动

    // tell(难度目录.slidePos)
    RenderJSRenderSystem.enableBlendJS()
    for (let i = 0; i < 副本_选项数量; i++) {

      event.poseStack.pushPose()
      //event.translate(0, 0, 0)

      if (副本_精英模式 && i == 副本_选项数量 - 1) {

        event.drawTexture('kubejs:gui/copy.png', 0, i * 50 + 20, 512, 512, 176, 73, 176, 25)

      } else {

        event.drawTexture('kubejs:gui/copy.png', 0, i * 50 + 20, 512, 512, 0, 0, 176, 25)

      }


      event.poseStack.popPose()



    }

    let 当前可选最大难度 = -1//puffish_expLevel //- 副本_最低等级) / 副本_等级增长//难度等级解锁

    while (副本_解锁等级[当前可选最大难度 + 1] < puffish_expLevel//条件1

    ) {
      当前可选最大难度++
    }
    // tell(当前可选最大难度)
    /*
  &&
      (
        true // starIsUnlock(当前可选最大难度)
        
        */
    //条件2
    if (当前可选最大难度 < 0) 难度目录.rollBefore = -1

    if (!starIsUnlock(难度目录.rollBefore - 1)) 难度目录.rollBefore = 0//缓存的当前选项 星级不足时  自动更新
    //0与false需严格判断
    if (难度目录.flag() !== null && 难度目录.rollMouse <= 当前可选最大难度 && starIsUnlock(难度目录.rollMouse - 1)) {//选项大于等于1时由等级以上一个难度达成3星解锁

      if (难度目录.click()) {//鼠标点击

        Client.player.playSound('minecraft:ui.button.click')

        难度目录.rollBefore = 难度目录.rollMouse

        副本目录缓存 = 难度目录.rollBefore//缓存目录

        copy_click1 = 0
      }
      RenderJSRenderSystem.enableBlendJS()//启用透明  允许之下的图片渲染透明颜色  本已经成功透明渲染的语句不能在其之中

      event.poseStack.pushPose()
      event.translate(0, 0, 0)
      event.drawTexture('kubejs:gui/copy.png', 0, (难度目录.rollMouse) * 50 + 20, 512, 512, 176, 0, 175, 25)//触摸反馈
      event.poseStack.popPose()
      //  Client.player.tell(难度)
    }//选择难度逻辑

    //Client.player.tell(Number('副本_名称'))
    //Client.player.tell(副本_最低等级)

    event.poseStack.pushPose()
    //event.translate(0, 0, -50)
    if (难度目录.rollBefore >= 0 && 难度目录.rollBefore < 副本_选项数量) {

      if (副本_精英模式 && 难度目录.rollBefore == 副本_选项数量 - 1) {//精英难度

        event.drawTexture('kubejs:gui/copy.png', 0, 难度目录.rollBefore * 50 - 5 + 20, 512, 512, 180, 32, 180 * copy_click1 / 60, 35)//当前选项

      } else {

        event.drawTexture('kubejs:gui/copy.png', 0, 难度目录.rollBefore * 50 - 5 + 20, 512, 512, 0, 32, 180 * copy_click1 / 60, 35)//当前选项
      }

    }

    event.poseStack.popPose()



    //(0>=  copy_select || 副本_星级[copy_select - 1] == 2) ===>当未达成成3星挑战但是最低难度时 解锁



    for (let i = 0; i < 副本_选项数量; i++) {



      let color = 205

      if (难度目录.rollBefore == i) color = 255


      event.poseStack.pushPose()
      event.poseStack.scale(1.8, 1.8, 0)
      //event.translate(0, 0, 99)
      event.drawShadowString('难度' + (i + 1), 17 / 1.8, (i * 50 + 27) / 1.8, color, color, color, 205)
      event.poseStack.popPose()

      if (当前可选最大难度 >= i && starIsUnlock(i - 1)) {//玩家等级+5/20大于该项目时 渲染已解锁的样式Math.floor(副本_最低等级 + 副本_等级增长 * i)


        renderMultText(event, ('推荐等级' + 副本_解锁等级[i] + '挑战'), 1, 1, 95, (i * 50 + 32), Color.rgba(color, color, color, 205).getRgbJS(), 0)
      } else {
        event.poseStack.pushPose()
        event.drawTexture('kubejs:gui/copy.png', 70, i * 50 + 19, 512, 512, 0, 80, 20, 28)//锁
        event.poseStack.popPose()
        event.poseStack.pushPose()
        event.poseStack.scale(0.9, 0.9, 0)
        if (当前可选最大难度 >= i) {
          event.drawShadowString(('上一难度需获得' + 副本_星级解锁[i] + '星'), 95 / 0.9, (i * 50 + 32) / 0.9, color, color, color, 205)

        } else {
          event.drawShadowString(('等级达到' + 副本_解锁等级[i] + '级解锁'), 95 / 0.9, (i * 50 + 32) / 0.9, color, color, color, 205)

        }
        event.poseStack.popPose()


      }

    }
    //Client.player.tell(玩家_副本_星级)

    let star = 玩家_副本_星级[难度目录.rollBefore]//当前选项星级

    star = star ? star : 0

    event.poseStack.popPose()



    if (难度目录.rollBefore >= 0 && 难度目录.rollBefore < 副本_选项数量) {
      RenderJSRenderSystem.enableBlendJS()
      event.poseStack.pushPose()

      let excursionX = 2 * (60 - copy_click)
      event.poseStack.translate(excursionX, 0, 0)



      event.drawTexture('kubejs:gui/copy.png', width - 304 * 1, 9, 512, 512, 0, 127, 304, 335)//主界面

      event.poseStack.pushPose()
      event.poseStack.translate(width - 267 * 1, 9, 0)

      if (玩家_副本_星级[难度目录.rollBefore] > 0) event.drawTexture('kubejs:gui/copy.png', 0, 46, 512, 512, 25, 80, 36, 36)////星

      if (玩家_副本_星级[难度目录.rollBefore] > 1) event.drawTexture('kubejs:gui/copy.png', 27, 46, 512, 512, 25, 80, 36, 36)////星

      if (玩家_副本_星级[难度目录.rollBefore] > 2) event.drawTexture('kubejs:gui/copy.png', 54, 46, 512, 512, 25, 80, 36, 36)//星

      renderMultText(event, '挑战奖励', 0.8, 0.8, 4, 242, Color.rgba(205, 205, 205, 205).getRgbJS(), 99)
      event.poseStack.popPose()


      renderMultText(event, 副本_名称, 2, 2, (width - 262 * 1), (18), Color.rgba(245, 245, 245, 205).getRgbJS(), 0)//副本名称


      renderMultText(event, '挑战', 1.5, 1.5, (width - 225 * 1), (322), Color.rgba(205, 205, 205, 205).getRgbJS(), 0)

      renderMultText(event, '领域讨伐', 1.5, 1.5, (width - 85 * 1), (322), Color.rgba(200, 121, 121, 205).getRgbJS(), 0)

      let 时间 = ""

      if (挑战时间[难度目录.rollBefore] > 0) {
        时间 = "  |  限时:" + 挑战时间[难度目录.rollBefore] + "秒"
      }

      renderMultText(event, '等级:' + 副本_boss等级[难度目录.rollBefore] + 时间, 1, 1, (width - 262 * 1), (39), Color.rgba(245, 245, 245, 205).getRgbJS(), 99)//生成的boss等级




      if (newVirtualButton(width - 278 * 1, 311, 133, 36) && copy_click >= 30) {//生成boss按钮  注意  快速打开可能会直接触发


        if (mouseLeftEnd) {//鼠标点击

          Client.player.playSound('minecraft:ui.button.click')

          Client.player.closeMenu()//关闭

          Client.player.sendData('copy', {
            condition: 1,//状态
            difficulty: 难度目录.rollBefore,//难度
            uuid: copy_entity.stringUuid
          })

        }

        event.poseStack.pushPose()
        event.translate(width - 278 * 1, 308, 0)
        event.drawTexture('kubejs:gui/copy.png', 0, 0, 512, 512, 26, 466, 132, 36)//触摸反馈
        event.poseStack.popPose()

      }


      //event.renderGuiItem( Item.of("acacia_fence_gate"),战利品目录.x,战利品目录.y)
      //tell(副本_战利品.item[1])
      event.poseStack.pushPose()

      //event.translate(width-640, 0, 0)
      event.poseStack.pushPose()
      event.translate(width - 640 * 1, 0, 100)//修改遮挡区域
      //RoolList[101]['tytyyrar'].setPos(width-265,战利品目录.y)
      战利品目录.x = width - 265 * 1//更新目录属性

      //  let itemStack = Item.of(item.id, 1, item.tag)


      event.fill(300, 250, 375, 300, 10, 10, 10, 1)//隐藏溢出的物品左

      event.fill(625, 250, 640, 300, 10, 10, 10, 1)//隐藏溢出的物品右
      //event.drawTexture('kubejs:gui/copy.png', 战利品目录.x, 战利品目录.y, 512, 512, 304, 363, 60, 60)
      event.poseStack.popPose()


      let j = 0//j 实际渲染的物品数量  i 物品排序



      for (let i = 0; 副本_战利品.item[i]; i++) {

        let excursionX1 = width - 265 * 1 + 35 * j + 战利品目录.slidePos//由目录提供坐标  不用在重新定位
        //   if (i == 0) {
        // tell( (excursionX1)+"   "+(width - 295))
        //   }
        //tell(String(!副本_战利品.unlock[i] )) || 
        // tell(副本_战利品.unlock[i])

        //renderMultText(event, excursionX1, 1, 1, (width - 260), (10+10*j), getColor(205, 205, 205, 205), 180)

        //解锁的物品
        //if () continue//未定义时通过副本_战利品.unlock[i]!=undefined||
        //  tell(难度目录.rollBefore + "  " + 副本_战利品.unlock[i])
        if (副本_战利品.unlock[i] == undefined || (副本_战利品.unlock[i][0] <= 难度目录.rollBefore && 副本_战利品.unlock[i][1] >= 难度目录.rollBefore)) {


          // tell(副本_战利品.unlock[i][0] > 难度目录.rollBefore )
          j++//实际索引


          if (excursionX1 < width - 325 * 1 || excursionX1 > width) continue//隐藏溢出的//隐藏溢出的物品
          //tell(excursionX1)



          let item = 副本_战利品.item[i]

          event.poseStack.pushPose()
          // tell()
          event.translate(excursionX1, 0, 0)


          event.drawTexture('kubejs:gui/copy.png', 0, 战利品目录.y - 4, 512, 512, 171, 466, 35, 35)//物品底片

          if (副本_战利品.repeat[i] > 0) {

            event.poseStack.pushPose()
            event.translate(0, 0, 50)

            if (玩家_副本_星级[难度目录.rollBefore] >= 副本_战利品.repeat[i]) {
              event.drawTexture('kubejs:gui/copy.png', 25, 战利品目录.y - 4, 512, 512, 214, 466, 10, 10)//星级
            } else {
              event.drawTexture('kubejs:gui/copy.png', 25, 战利品目录.y - 4, 512, 512, 227, 466, 10, 10)//星级
            }
            event.translate(0, 0, 5)
            renderText(event, "x" + 副本_战利品.repeat[i], 0.8, 0.8, 28, 战利品目录.y + 1, Color.rgba(255, 144, 0, 150).getRgbJS(), 9)//生成的boss等级

            event.poseStack.popPose()



          }




          let itemStack = Item.of(item.id, 1, item.tag)

          event.scale(1.5, 1.5, 0)
          event.translate(0, 0, 2000)
          event.renderGuiItem(itemStack, (0 + 6) / 1.5, (战利品目录.y + 3) / 1.5)//物品
          event.poseStack.popPose()

          let rollBefore = 战利品目录.flag()
          //tell(rollBefore)
          if (rollBefore == j - 1) {
            event.poseStack.pushPose()
            event.translate(0, 0, 200)
            guiGraphics.renderTooltip(Client.font, itemStack, MouseX, MouseY)//无法加入posestack
            event.poseStack.popPose()
          }



        }


      }
      //  tell(战利品目录.count)
      战利品目录.count = j//随时更新

      //tell(战利品目录.count)


      event.poseStack.popPose()



      // new $Tooltip('3545435', '2342436')

      //renderMultText(event, "介绍", 0.8, 0.8, (width - 262), (102), getColor(205, 205, 205, 205), 180)

      renderMultText(event, '介绍', 0.8, 0.8, (width - 262 * 1), 93, Color.rgba(205, 205, 205, 205).getRgbJS(), 99)

      renderMultText(event, 副本_描述, 1, 1, (width - 265 * 1), (105), getColor(205, 205, 205, 205), 240)




      event.poseStack.popPose()

    }
    // event.pushPose()
    //Client.player.tell(MouseX)
    // //event.translate(0, 0, -50)   
    // event.drawTexture('kubejs:gui/copy.png', 85, 50 + 19, 512, 512, 0, 80, 20, 28)//
    // event.popPose()


    // ["renderTooltip(net.minecraft.client.gui.Font,net.minecraft.world.item.ItemStack,int,int)"]
    // guiGraphics["renderOutline(int,int,int,int,int)"]+"   "+ guiGraphics["drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)"](Client.font,'5345',100,100,0,true)
    // guiGraphics["blit(net.minecraft.resources.ResourceLocation,int,int,int,int,int,int)"]
    //  guiGraphics.renderTooltip(Client.font, $Component.literal("456456"),50,50)
    // guiGraphics.renderTooltip(Client.font, $Component.literal("456456"), MouseX, MouseY)







  } else {

  }
}





RenderJSEvent.endScreen(101, e => {//界面关闭事件



  copy_click = 0//副本动画

  copy_click1 = 0//副本动画

  // copy = false//副本界面

})

let recent_copy//最近的副本

NetworkEvents.dataReceived('copy_data', event => {//随时需更新的信息显示

  recent_copy = event.level.getEntity(event.data.getInt('entity'))

  //副本_cooling_time1 = event.data.getInt('cooling_time1')
  //tell(event.data.getInt('condition'))

  let condition = event.data.getInt('condition')

  setData(recent_copy, $Int, "condition", condition)//传给starup的动画使用

  副本_condition = condition// getData(recent_copy,$Int,"condition")

  //副本_condition[recent_copy.stringUuid] = event.data.getInt('condition')//分开统计

  副本_time = event.data.getInt('time')

  副本_max_time = event.data.getInt('max_time')

  星级_条件 = event.data.get('star_user_rule')

  copy_rangeUpdate = 20

  //Client.player.tell(String(星级_条件))

})

NetworkEvents.dataReceived('copyBeginsAnimation', e => {//动画播放


  Animation.copyBeginsAnimation = 150
  //Client.player.tell( 456345)


})

NetworkEvents.dataReceived('copyWinAnimation', e => {//动画播放


  Animation.copyWinAnimation = 120



})

NetworkEvents.dataReceived('copyLoseAnimation', e => {//动画播放


  Animation.copyLoseAnimation = 120



})




NetworkEvents.dataReceived('copy_open', event => {//每次打开界面更新一次信息


  //无需选定实体

  副本背景 = event.data.getString('background')
  //tell(event.data.get('time'))
  挑战时间 = event.data.get('time')

  副本_描述 = event.data.getString('describe')//描述

  副本_选项数量 = event.data.getInt('projects')//选项数量  注意获取类型

  副本_名称 = event.data.getString('name')//项目名称


  玩家_副本_星级 = event.data.get('star')

  //Client.player.tell(玩家_副本_星级)
  副本_boss等级 = event.data.get('boss_level')//生成出来的等级

  副本_解锁等级 = event.data.get('unlock_level')

  副本_精英模式 = event.data.getBoolean('elite')

  副本_星级解锁 = event.data.get('unlock_star')

  副本_战利品 = event.data.get('tool')

  难度目录 = new Roll(0, 0, 50, 180, 副本_选项数量, 0, 101, 'tytyyr', 'vertical', true)

  战利品目录 = new Roll(Client.window.guiScaledWidth - 265 * 1, 265, 35, 35, 副本_战利品.item.length, 250, 101, 'tytyyrar', 'horizontal', false)

  //战利品目录11=new Rool(0, 0, 50, 180, 副本_战利品.item.length, 0, 101, 'tyty456yrar','horizontal')

  copy_entity = event.level.getEntity(event.data.getInt('entity'))//用于对实体进行选中操作

  //Client.player.tell('->'+event.data.get('star'))


})

let RangeUpdate = (player) => {

  if (player&&player.age % 5 == 0) {

    if (more_skill_data.time > 0 && !Client.paused) {
      more_skill_data.time = Math.max(0, more_skill_data.time - 10)
    } else {
    
useEnderEye=null
    
    }
    


    if (copy_rangeUpdate > 0 && !Client.paused) copy_rangeUpdate = Math.max(0, copy_rangeUpdate - 10)


   // if (combat_area_rangeUpdate > 0 && !Client.paused) combat_area_rangeUpdate = Math.max(0, combat_area_rangeUpdate - 10)
  }

}

NetworkEvents.dataReceived('acquire_star_sound', event => {


  $Minecraft.getInstance().player.playSound('minecraft:entity.experience_orb.pickup')


})//更新客户端挑战星级数


//setData(event.player,'int',,)客户端用外部变量取代pdata

const starDescribe = {}

starDescribe.time = function (data) {

  return '在' + data.value + '秒内完成' + getSpecific(data)

}

starDescribe.be_att = function (data) {

  let damage_type = ""

  if (data.contains('type')) damage_type = data.type
  /**@type {Internal.CompoundTag} */
  let a = data


  //tell(a.contains())

  return '受到的' + damage_type + '伤害次数不超过' + data.value + '次' + getSpecific(data)

}


starDescribe.reaction = function (data) {


  return '触发' + data.value + '次' + data.type + '反应' + getSpecific(data)

}
starDescribe.att = function (data) {


  return '对敌人造成至少' + data.value + '次攻击' + getSpecific(data)

}



let getSpecific = (data) => {



  return '(' + data.present + '/' + data.value + ')'


}

let starIsUnlock = (i) => {

  //  if(i==1) tell( 玩家_副本_星级[i] )


  return i < 0 || 玩家_副本_星级[i] >= 副本_星级解锁[i + 1]

}


let copyIconRender = (event, guiGraphic, entity) => {


  if (recent_copy && entity.type == "kubejs:copy" && getData(entity, "int", "condition") == 0) {


    event.poseStack.pushPose()//创建新的AFTER_TRIPWIRE_BLOCKS

    $RenderSystem.enableBlend()
    $RenderSystem.enableDepthTest()

    let a = Client.entityRenderDispatcher.cameraOrientation()




    // Math.atan2(numerator, denominator);

    // a.rotationY( Math.sin(Math.acos(a.w()) )*PI)
    new Quaternionf()

    //tell (  )Math.max(-PI / 2, Math.min( PI / 2, pitch))getYawFromQuaternion(a.w(),a.x(),a.y(),a.z())
    //     tell(    /PI) event.  poseStack.last().pose()
    //  tell(    Math.asin(    a.w())*2/PIClient.entityRenderDispatcher.cameraOrientation() )new Quaternionf( a.x(), Math.sin(Math.acos(a.w()) ), a.z(),a.w())

    event.poseStack.mulPose(a)
    event.poseStack.mulPose(setQuaternionfZ(180))

    event.poseStack.mulPose(setQuaternionfY(getRoll(a.w(), a.x(), a.y(), a.z())))


    event.poseStack.translate(0, -4.2, 0)//再次设置位置为在之前的基础上修改位置a.y()

    // tell(reviseRoll(getRoll(a.w(),a.x(),a.y(),a.z()) ))

    event.poseStack.scale(0.0007, 0.0007, 0.0007)//大小

    // tell(Client.partialTick)

    //  tell(reviseRoll(getRoll(a.w(),a.x(),a.y(),a.z()) ))

    //event.poseStack.mulPose(RotationAxis.YP.deg(    Math.max(-PI / 2, Math.min( PI / 2, pitch))))

    //event.rotationDegreesZ(180)//旋转角


    event.poseStack.pushPose()

    //  let move=(RenderTick%30-15)/150+1
    //  RenderJSRenderSystem.setShaderColor(1,1,1,1)//每次渲染都需重置
    RenderJSRenderSystem.setShaderColor(1, 1, 1.1, 5)//每次渲染都需重置
    guiGraphic.blit('kubejs:textures/entity/copy_chartlet.png', -512, -256, 0, 0, 1024, 512, 1024, 512,)//剑
    RenderJSRenderSystem.setShaderColor(1, 1, 1, 1)//每次渲染都需重置
    // RenderJSRenderSystem.setShaderColor(1,1,1,0.3)//每次渲染都需重置



    // $BufferUploader.drawWithShader(multiBufferSource.end());
    //注意 图片横竖与绘图软件相反
    event.poseStack.popPose()
    event.poseStack.popPose()
  }









}
//   event.pushPose()
//   event.scale(1, 1, 0)
//   //event.translate(0, 0, 99)
//   event.drawShadowString(('推荐等级' + 副本_解锁等级[i] + '挑战'), 95 / 1, (i * 50 + 32) / 1, color, color, color, 205)
//   event.popPose()