NativeEvents.onEvent('com.integration_package_core.event.Event.ItemTransferEvent', e => {

  if (e.player.server) return

  /**@type {Internal.ItemStack} */
  let item = e.itemStack
  let modifiers = item.getAttributeModifiers($EquipmentSlot.MAINHAND)


  //tell(e.player)


  if (!item.nbt) {
    item.setNbt({})
  }
  if (e.itemStack.hasTag('kubejs:combat_weapon')) {
    if (!item.nbt.contains("load")) {

      // item.nbttoughness_cut
      //添加自定义属性后 原版属性会失效weaponList[item.id]["stable"]
      item.addAttributeModifier("integration_package_core:max_toughness", new $AttributeModifier($uuid.fromString('6a102453cb4-d735-4cb7-8ab2-3d36a44e')
        , 'kubejs_combat', weaponList[item.id]["max_toughness"], "addition"), $EquipmentSlot.MAINHAND)
      item.addAttributeModifier("kubejs:stable", new $AttributeModifier($uuid.fromString('6a102453cb4-d735-4cb7-8ab2-3d386a44e')
        , 'kubejs_combat', weaponList[item.id]["stable"], "addition"), $EquipmentSlot.MAINHAND)
      item.addAttributeModifier("kubejs:toughness_cut", new $AttributeModifier($uuid.fromString('6a102453cb4-d735-4cb7-8ab2-3d673a44e')
        , 'kubejs_combat', weaponList[item.id]["toughness_cut"], "addition"), $EquipmentSlot.MAINHAND)

      item.addAttributeModifier("kubejs:parry", new $AttributeModifier($uuid.fromString('6a102453cb4-d735-4cb7-8ab2-3d673a44e')
        , 'kubejs_combat', weaponList[item.id]["parry"], "addition"), $EquipmentSlot.MAINHAND)

      //tell(e.)

      item.getItem().getAttributeModifiers($EquipmentSlot.MAINHAND, item).forEach((modifier, attribute) => {//添加原属性
        item.addAttributeModifier(modifier, attribute, $EquipmentSlot.MAINHAND)
      })


      for (let i = 1; i <= MaxSkill; i++) {
        if (weaponList[item.id]["skill" + i]) {//初始化等级
          item.nbt.putInt("skill" + i + "_level", 0)
        }
      }
      item.nbt.putInt("skill0_level", 0)

      item.nbt.putInt("cost", weaponList[item.id]["cost"])
      item.nbt.putBoolean("load", true)
      //tell(item.nbt.contains("load"))global.attributes.stable.get()
    }

    pushUseCombatClient(e.player, item.id, item.nbt)


    //  initPlayerToughnessList(e.player, item)

    // pushUseCombatClient(e.player, item.id, item.nbt, getWeaponMaxToughness(e.player, item))//添加武器到列表


  }
  //tell(global.attributes.stable.get())
  //  item.getAttributeModifiers($EquipmentSlot.MAINHAND).get(global.attributes.stable.get()).map((modifier) => tell(modifier.getAmount()))

})