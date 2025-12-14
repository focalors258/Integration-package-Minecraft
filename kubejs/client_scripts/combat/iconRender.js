
let skillButton = 'kubejs:gui/skill_buttom.png'

let skillButton1 = 'kubejs:gui/combat/skill_buttom.png'


// t.setMainTraceResource("integration_package_core:textures/animation_entity/trail.png")

//let skillButton1 = "integration_package_core:textures/animation_entity/trail.png"






let skillRender = (event, width, height) => {
  $RenderSystem.enableBlend()
  $RenderSystem.enableDepthTest()
  //Client.player.getData()
  let a = 0

  let item = Client.player.getItemBySlot($EquipmentSlot.MAINHAND)

  //  if (sameWeaponList[item.id]) item = Item.of(sameWeaponList[item.id], item.nbt)

  //tell(item)

  let weaponStack = Client.player.getWeaponStack(item.id)


  // if (more_skill_data.time != 0) a++
  // renderTextrue(event, skillButton1, 0, 0, 0, 1, -2, -2, 540, 540, 0, 0, 540, 540)//带能量条
  //tell(weaponStack)
  if (weaponList[item.id] && weaponStack) {



    for (let i = 0; i <= MaxSkill; i++) {




      if (!skillKeyList["skill" + (i + 1)]) continue

      let width1 = 2 * width - 28 * (a + 2)

      let height1 = 2 * height - 25

      let skillName = "skill" + (i + 1)

      let data = weaponList[item.id][skillName]


      if (data) {

        if (data["type"]) {

          if (data["type"]["save"]) {

            //  let time = weaponStack.getData().getInt(skillName + "_cool") - Dates.tickCount

            //  if (time > 0) { }

            //   let mana = time / data["type"]["time"]
            let mana = weaponStack.data.getInt(skillName + "_mana") / data["type"]["save"]

            mana = Math.min(1, Math.max(0, mana))

            if (data["type"]["color"]) {
              let color = data["type"]["color"]
                RenderJSRenderSystem.setShaderColor(color[0], color[1], color[2], 2)
            } else {

              RenderJSRenderSystem.setShaderColor(1, 1, 1, 1)
            }


            event.poseStack.pushPose()
            event.translate(width1 - 1.15-0.5, height1 - 1.2-0.5, 1)
            event.scale(0.6, 0.6)

            renderCircle(event, mana, skillButton1, 540, 540, 31, 6, 165+6, 87, 37)
           // renderTextrue(event, skillButton1, -21.5, -21.5, 0, 1, 0, 0, 540, 540, 165, 87, 43, 43)

            event.poseStack.popPose()

            if (mana == 1 && !(!data["type"]["time"] || (data["type"]["time"] && weaponStack.getData().getInt(skillName + "_cool") - Dates.tickCount > 0))) {
              let tick = $Mth.lerp(Client.getPartialTick(), Client.player.age - 1, Client.player.age) % 20

              let scale = 1.5 * Math.pow(tick, 0.4) / 20 + 0.42


              event.poseStack.pushPose()


              event.translate((width1 + 9.25), (height1 + 9.25), -1)
              event.scale(scale, scale)

              if (data["type"]["color"]) {
                let color = data["type"]["color"]
                RenderJSRenderSystem.setShaderColor(color[0], color[1], color[2], (25 - tick) / 20)
              } else {

                RenderJSRenderSystem.setShaderColor(1, 1, 1, 1)
              }
              renderTextrue(event, skillButton1, -21.5, -21.5, 0, 1, 0, 0, 540, 540, 207, 80, 43, 43)


              event.poseStack.popPose()
            }//带能量条
            RenderJSRenderSystem.setShaderColor(1, 1, 1, 1)
            event.poseStack.pushPose()
            //event.translate(-0.5, 0, 0)
            renderTextrue(event, skillButton1, width1, height1, 0, 0.6, -2, -2, 540, 540, 166, 9, 35, 35)//带能量条
            event.poseStack.popPose()
          } else {
            event.poseStack.pushPose()
            renderTextrue(event, skillButton1, width1, height1, 0, 0.6, 0, 0, 540, 540, 207, 11, 31, 31)
            event.poseStack.popPose()
          }

          if (data["type"]["last"]) {

            let time = weaponStack.getData().getInt(skillName + "_last_time") - Dates.tickCount
            if (data["type"]["last"]["time"] && time > 0 && weaponStack.getData().getBoolean(skillName + "_last")) {

              let move = time / data["type"]["last"]["time"]



              RenderJSRenderSystem.setShaderColor(5, 5, 5, 1)
              coolSkillBarRender(event, data, width1, height1, move)
              RenderJSRenderSystem.setShaderColor(1, 1, 1, 1)

              coolSkillTimeRender(event, width1, height1, time)


            }


          }




          if (data["type"]["time"]) {

            let time = weaponStack.getData().getInt(skillName + "_cool") - Dates.tickCount
            // tell(item.id)
            if (time > 0) {

              let move = time / data["type"]["time"]


              //  event.poseStack.pushPose()
              //  if (data["type"]["save"]) {
              //    event.translate(0, (height1 + 35 * 0.6) * (1 - move) - 1, 10)
              //    event.scale(1, move)
              //    renderTextrue(event, skillButton1, width1, height1, 0, 0.6, -2, 0, 540, 540, 166, 47, 35, 35)//冷却//带能量条

              //  } else {
              //    event.translate(0, (height1 + 31 * 0.6) * (1 - move), 10)
              //    event.scale(1, move)
              //    renderTextrue(event, skillButton1, width1, height1, 0, 0.6, 0, 0, 540, 540, 207, 42, 31, 31)//冷却
              //  }
              //  event.poseStack.popPose()
              coolSkillBarRender(event, data, width1, height1, move)


              coolSkillTimeRender(event, width1, height1, time)

            }

          }
          //注意 技能键1.key.displayName.get() ==技能键1.key.getDisplayName().getString()
          //tell(技能键1.key.getDisplayName().getString())

        } else {

          renderTextrue(event, skillButton1, width1, height1, 0, 0.6, 0, 0, 540, 540, 207, 11, 31, 31)

        }

        if (skillKeyList["skill" + (i + 1)] instanceof $KeyMapping) {
          renderSkillKey(event, width1 - 1, height1 - 1, skillKeyList["skill" + (i + 1)])//按钮
        }
        a++


      }





    }
  }

  if (more_skill_data.time != 0) {

    renderSkillKey(event, 2 * width - 28 * (a + 2) - 1, 2 * height - 26, 功能键)

    renderTextrue(event, skillButton1, 2 * width - 28 * (a + 2), 2 * height - 25, 0, 0.6, 0, 0, 540, 540, 207, 11, 31, 31)
  }



  skillButtonRender(event, item, height)
  // renderTextrue(event, skillButton1, 49 + 12, 2 * height - 13 - i * 20, 0, 1, 0, 0, 540, 540, 37, 72, 58 * value, 4)
  // renderTextrue(event, skillButton1, 36 + 12, 2 * height - 20 - i * 20, 0, 1, 0, 0, 540, 540, 24, 53, 72, 17)
  // $Render.of(event.poseStack).guiGraphics.renderItem(Item.of(item), 50, (2 * height - 20 - i * 20))

}


let coolSkillTimeRender = (event, width1, height1, time) => {

  let tick = "" + Math.floor(time / 2) / 10
  event.poseStack.pushPose()
  event.translate(0, 0, 10)
  renderText(event, tick, 0.75, 0.75, width1 + 5, height1 + 7, getColor(215, 215, 215, 255), 100)//时间
  event.poseStack.popPose()

}



let coolSkillBarRender = (event, data, width1, height1, move) => {

  event.poseStack.pushPose()
  if (data["type"]["save"]) {
    event.translate(0, (height1 + 35 * 0.6) * (1 - move) - 1, 10)
    event.scale(1, move)
    renderTextrue(event, skillButton1, width1, height1, 0, 0.6, -2, 0, 540, 540, 166, 47, 35, 35)//冷却//带能量条

  } else {
    event.translate(0, (height1 + 31 * 0.6) * (1 - move), 10)
    event.scale(1, move)
    renderTextrue(event, skillButton1, width1, height1, 0, 0.6, 0, 0, 540, 540, 207, 42, 31, 31)//冷却
  }
  event.poseStack.popPose()

}




let renderSkillKey = (event, width1, height1, key) => {

  if (key.key.value == 0) {

    renderTextrue(event, skillButton1, width1, height1, 0, 0.75, 9, -14, 540, 540, 258, 11, 9, 12)

  } else if (key.key.value == 1) {

    renderTextrue(event, skillButton1, width1, height1, 0, 0.75, 9, -14, 540, 540, 274, 11, 9, 12)

  } else if (key.key.value == 2) {

    renderTextrue(event, skillButton1, width1, height1, 0, 0.75, 9, -14, 540, 540, 290, 11, 9, 12)

  } else {

    let keyName = key.key.getDisplayName().getString()

    renderTextrue(event, skillButton1, width1, height1, 0, 0.75, 7, -14, 540, 540, 290, 27, 13, 12)

    renderText(event, keyName, 0.75, 0.75, width1 + 9 - 0.1 * Client.font.width(keyName), height1 - 9, getColor(215, 215, 215, 255), 15)

  }




}







let skillButtonRender = (event, mainhandItem, height) => {



  let i = 1

  if (mainWeapon != mainhandItem.id) {

    weaponListAnimation = Date.now() + 200

    mainWeapon = mainhandItem.id
  }

  if (!mainhandItem.hasTag("kubejs:combat_weapon")) i = 0
  let player = Client.player
  let l = player.getWeaponList().size()
  player.getWeaponList().forEach((item) => {

    // if (mainhandItem.hasTag("kubejs:combat_weapon")) {}getDataList("toughness")[item[0]].value / item[2]

    let max = player.getMaxToughness(item)

    if (max == 0) max = 1

    let value = player.getToughness(item) / max

    let tick = (weaponListAnimation - Date.now())

    let heal = (player.getWeaponStack(item).getToughnessTime() - player.age) / (3000 / getWeaponSpeed(player, item))

    if (heal < 0) heal = 0
    heal = 1 - heal
    //  tell(heal)

    if (mainhandItem.id == item) {

      event.poseStack.pushPose()
      if (tick > 0) {
        event.poseStack.translate(0, -tick * 0.3, 0)
      }
      //main = true

      event.poseStack.pushPose()

      if (tick > 0) event.poseStack.scale(1 - 0.5 * (tick / 200), 1, 1)
      renderTextrue(event, skillButton1, 36, 2 * height - 15, 0, 1, 0, 0, 540, 540, 36, 11, 116, 6)//条框
      renderTextrue(event, skillButton1, 37, 2 * height - 14, 0, 1, 0, 0, 540, 540, 37, 27, 114 * ((heal) * (1 - value) + value), 4)//恢复
      renderTextrue(event, skillButton1, 37, 2 * height - 14, 0, 1, 0, 0, 540, 540, 37, 20, 114 * value, 4)//当前
      event.poseStack.popPose()


      renderTextrue(event, skillButton1, 20, 2 * height - 32, 0, 1, 0, 0, 540, 540, 0, 0, 33, 27)//武器框

      event.poseStack.pushPose()
      event.poseStack.scale(1.2, 1.2, 1)
      $Render.of(event.poseStack).guiGraphics.renderItem(Item.of(item), 30 / 1.2, (2 * height - 27) / 1.2)
      event.poseStack.popPose()
      event.poseStack.popPose()
    } else {

      event.poseStack.pushPose()
      if (weaponListAnimation > Date.now()) {
        event.poseStack.translate(0, (weaponListAnimation - Date.now()) * 0.06, 0)
      }

      renderTextrue(event, skillButton1, 36, 2 * height - 15 - i * 30, 0, 1, 0, 0, 540, 540, 36, 11 + 48, 60, 6)//条框

      renderTextrue(event, skillButton1, 37, 2 * height - 14 - i * 30, 0, 1, 0, 0, 540, 540, 37, 75, 58 * ((heal) * (1 - value) + value), 4)//恢复
      renderTextrue(event, skillButton1, 37, 2 * height - 14 - i * 30, 0, 1, 0, 0, 540, 540, 37, 68, 58 * value, 4)//当前

      renderTextrue(event, skillButton1, 20, 2 * height - 32 - i * 30, 0, 1, 0, 0, 540, 540, 0, 0 + 48, 33, 27)//武器框

      event.poseStack.pushPose()
      event.poseStack.scale(1.2, 1.2, 1)
      $Render.of(event.poseStack).guiGraphics.renderItem(Item.of(item), 30 / 1.2, (2 * height - 27 - i * 30) / 1.2)
      event.poseStack.popPose()
      event.poseStack.popPose()

      i++
    }




  })
















}













