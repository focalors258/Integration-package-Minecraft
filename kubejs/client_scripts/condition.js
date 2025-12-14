
let $ShulkerBoxBlockEntity = Java.loadClass('net.minecraft.world.level.block.entity.ShulkerBoxBlockEntity')

let $Axis = Java.loadClass('com.mojang.math.Axis')

let $Vector3d = Java.loadClass("org.joml.Vector3d")
let $Vector3f = Java.loadClass("org.joml.Vector3f")
let $TagUtils = Java.loadClass("com.integration_package_core.tool.TagUtils")
let $OBB = Java.loadClass("com.integration_package_core.tool.collide.OBB")
let $ShaderManager = Java.loadClass("com.integration_package_core.render.ShaderManager")


let $Storyboard = Java.loadClass("com.integration_package_core.animation.Storyboard")

let $Effect = Java.loadClass("com.integration_package_core.tool.Effect")

let $Config = Java.loadClass("com.integration_package_core.Config")


let $LevelSubtitle = Java.loadClass("com.integration_package_core.optimize.LevelSubtitle")

let $Player = Java.loadClass('net.minecraft.world.entity.player.Player')

let $Vec3 = Java.loadClass('net.minecraft.world.phys.Vec3')

let $ArrList = Java.loadClass('java.util.ArrayList')

let $SortMap = Java.loadClass('com.integration_package_core.tool.SortMap')

let $Input = Java.loadClass("net.minecraft.client.player.Input")

let $TreeMap = Java.loadClass('java.util.TreeMap')

let $Circle$EnumRingBehavior = Java.loadClass("net.miauczel.legendary_monsters.Particle.custom.Circle$EnumRingBehavior")

let $AttributeModifier = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier')

let $InteractionHand = Java.loadClass('net.minecraft.world.InteractionHand')
let $Circle$RingData = Java.loadClass("net.miauczel.legendary_monsters.Particle.custom.Circle$RingData")
const $Menu = Java.loadClass('net.minecraft.world.SimpleMenuProvider')
let $KeyMapping = Java.loadClass('net.minecraft.client.KeyMapping')

let $KeyConflictContext = Java.loadClass('net.minecraftforge.client.settings.KeyConflictContext')
let $keyType = Java.loadClass('com.mojang.blaze3d.platform.InputConstants$Type')
let $GLFW = Java.loadClass('org.lwjgl.glfw.GLFW')

let $Font = Java.loadClass('net.minecraft.client.gui.Font')
let $TooltipRenderUtil = Java.loadClass('net.minecraft.client.gui.screens.inventory.tooltip.TooltipRenderUtil')

let $Keybind = Java.loadClass('com.integration_package_core.tool.KeyBinds')

let $CombatRollKeybind = Java.loadClass("net.combatroll.client.Keybindings")



//net.minecraftforge.client.settings
//priority:10845630   
var imports = Java.loadClass

let $BufferUploader = Java.loadClass("com.mojang.blaze3d.vertex.BufferUploader")

let $Slot = Java.loadClass('net.minecraft.world.inventory.Slot')

let $PlayerAnimationEntity = Java.loadClass("com.integration_package_core.animation.PlayerAnimationEntity")

let $EquipmentSlot = Java.loadClass('net.minecraft.world.entity.EquipmentSlot')


let $RenderSystem = Java.loadClass('com.mojang.blaze3d.systems.RenderSystem')

let $Minecraft = Java.loadClass('net.minecraft.client.Minecraft')

let $Tooltip = Java.loadClass('net.minecraft.client.gui.components.Tooltip')
//背包ui类
const $InventoryClass = Java.loadClass('net.minecraft.client.gui.screens.inventory.InventoryScreen')
//讲台ui类
const $LecternClass = Java.loadClass('net.minecraft.client.gui.screens.inventory.LecternScreen')
//潜影盒
const $ShulkerBoxClass = Java.loadClass('net.minecraft.client.gui.screens.inventory.ShulkerBoxScreen')

const $LecternMenuClass = Java.loadClass('net.minecraft.world.inventory.LecternMenu')
//玩家背包容器
const $Inventory = Java.loadClass("net.minecraft.world.entity.player.Inventory")

let Vec3 = Java.loadClass('net.minecraft.world.phys.Vec3')

let $Render = Java.loadClass('com.integration_package_core.tool.Render')

let $Component = Java.loadClass('net.minecraft.network.chat.Component')

let $puffishExperience = Java.loadClass("net.puffish.skillsmod.impl.ExperienceImpl")

const damageType = Java.loadClass('net.minecraft.world.damagesource.DamageTypes')

let $potion = Java.loadClass('net.minecraft.world.effect.MobEffectInstance')

let $block = Java.loadClass('net.minecraft.core.BlockPos')

let $uuid = Java.loadClass("java.util.UUID")

let $Util = Java.loadClass("net.minecraft.Util")

let $Button = Java.loadClass('net.minecraft.client.gui.components.Button')

let $Container = Java.loadClass('net.minecraft.world.Container')//

let $ContainerData = Java.loadClass("net.minecraft.world.inventory.ContainerData")



let $NativeImage = Java.loadClass('com.mojang.blaze3d.platform.NativeImage')
//let $LivingRender = Java.loadClass('net.minecraftforge.client.event.RenderLivingEvent')//com.mojang.blaze3d.systems

//注意 先渲染的透明图层如果在后渲染的图层之上  会完全遮挡后渲染的图层
//let $LivingRender = Java.loadClass('net.minecraftforge.client.event.RenderLivingEvent$Post')//com.mojang.blaze3d.systems
let $GeoRender$Post = Java.loadClass('software.bernie.geckolib.event.GeoRenderEvent$Entity$Post')

let $LivingRender$Post = Java.loadClass('net.minecraftforge.client.event.RenderLivingEvent$Post')//com.mojang.blaze3d.systems

let $GeoRender$Pre = Java.loadClass('software.bernie.geckolib.event.GeoRenderEvent$Entity$Pre')

let $LivingRender$Pre = Java.loadClass('net.minecraftforge.client.event.RenderLivingEvent$Pre')//com.mojang.blaze3d.systems





let $Mth = Java.loadClass('net.minecraft.util.Mth')
//com.mojang.blaze3d.systems
//

//let $Axis=Java.loadClass('com.mojang.math.Axis')


let fps = Math.max(Client.fps, 5)//注意 不能是常数  会导致未刷新时不会再变化 不能定义在此处


const PI = 3.1415926

const $Int = 'int'

const $String = 'string'

const $Boolean = 'boolean'

const $List = 'list'

//priority:1080  
let areData = (entity, any) => {

  return entity.getRootData().contains(any)

}



//priority:1080  
let getData = (entity, type, any) => {//修改nbt三件套

  if (!entity) return false
  //if (entity.persistentData.contains(any)) {
  //
  //    if (type == 'int') {
  //      return entity.persistentData.getInt(any)
  //    } else if (type == 'boolean') {
  //      return entity.persistentData.getBoolean(any)
  //    } else if (type == 'string') {
  //      return entity.persistentData.getString(any)
  //    } else if (type == 'double') {
  //      return entity.persistentData.getDouble(any)
  //    } else {//可存对象 数组
  //      return entity.persistentData.get(any).copy()//创建新的对象  而不是原来的对象
  //    }
  //  
  //} else

  if (areData(entity, any)) {

    if (type == 'int') {
      return entity.getRootData().getInt(any)
    } else if (type == 'boolean') {
      return entity.getRootData().getBoolean(any)
    } else if (type == 'string') {
      return entity.getRootData().getString(any)
    } else if (type == 'double') {
      return entity.getRootData().getDouble(any)
    } else {//可存对象 数组
      return entity.getRootData().get(any).copy()//创建新的对象  而不是原来的对象
    }

  }


  return 0


}
//priority:1080  
let setData = (entity, type, any, value) => {//修改nbt三件套

  if (entity) {

    if (type == 'int') {
      //console.log(entity+'  '+any+'  '+value)
      return entity.getRootData().putInt(any, value)
    } else if (type == 'boolean') {
      return entity.getRootData().putBoolean(any, value)
    } else if (type == 'string') {
      return entity.getRootData().putString(any, value)
    } else if (type == 'double') {
      return entity.getRootData().putDouble(any, value)
    } else {
      return entity.getRootData().put(any, value)
    }
  }

}

let getIntData = (entity, any) => {//修改nbt三件套



  if (areData(entity, any)) {

    return entity.getRootData().getInt(any)
  } else if (entity.persistentData.areData(any)) {

    return entity.persistentData.getInt(any)

  } else {
    return 0

  }
}

let getBooleanData = (entity, any) => {//修改nbt三件套

  if (areData(entity, any)) {
    return entity.getRootData().getBoolean(any)
  } else if (entity.persistentData.areData(any)) {
    return entity.persistentData.getBoolean(any)
  } else {
    return false
  }
}


let setBooleanData = (entity, any, value) => {


  return entity.getRootData().putBoolean(any, value)

}



let setIntData = (entity, any, value) => {


  return entity.getRootData().putInt(any, value)

}





let isPlayer = (event) => {
  if (!event.source) {
    return false
  }
  if (event.source.actual &&
    event.entity.isLiving() &&
    event.source.actual.isPlayer()
  ) {
    return true
  }
  return false
}



let isLightning = (event) => {//攻击类型 is
  if (event.source.type === "irons_spellbooks.ascension") {
    return 3
  } else if (event.source.type === "irons_spellbooks.thunderstorm") {//根据类型返回附着层数
    return 1
  } else if (event.source.type === "irons_spellbooks.ball_lightning") {
    return 1
  } else if (event.source.type === "irons_spellbooks.chain_lightning") {
    return 2
  } else if (event.source.type === "irons_spellbooks.electrocute") {
    return 1
  } else if (event.source.type === "irons_spellbooks.shockwave") {
    return 2
  } else if (event.source.type === "irons_spellbooks.lightning_lance") {
    return 2
  } else if (event.source.type === "irons_spellbooks.chain_lightning") {
    return 1
  } else if (event.source.type === "irons_spellbooks.lightning_bolt") {
    return 3
  }


  return 0
}

/*
let isLightning = (event) => {
  if (event.source.type === "irons_spellbooks.ascension"
    || event.source.type === "irons_spellbooks.thunderstorm"
    || event.source.type === "irons_spellbooks.ball_lightning"
    || event.source.type === "irons_spellbooks.chain_lightning"
    || event.source.type === "irons_spellbooks.electrocute"
    || event.source.type === "irons_spellbooks.shockwave"
    || event.source.type === "irons_spellbooks.lightning_lance"
    || event.source.type === "irons_spellbooks.chain_lightning"
    || event.source.type === "irons_spellbooks.lightning_bolt"

  ) { return true }
  return false
}
*/

let isPoison = (event) => {
  if (event.source.type == "irons_spellbooks.stomp"
    || event.source.type == "irons_spellbooks.poison_cloud"//中毒    伤害频率过高
    || event.source.type == "irons_spellbooks.poison_breath"//
    || event.source.type == "irons_spellbooks.poison_splash"//
    || event.source.type == "irons_spellbooks.firefly_swarm"//萤火虫
    || event.source.type == "irons_spellbooks.poison_arrow"//毒箭
    //|| event.source.type == "magic"
  ) { return 1 }
  return 0
}




let isFire = (event) => {




  if (event.source.type == "irons_spellbooks.fireball") {
    return 3
  } else if (event.source.type == "irons_spellbooks.burning_dash") {//根据类型返回附着层数
    return 1
  } else if (event.source.type == "irons_spellbooks.blaze_storm") {
    return 1
  } else if (event.source.type == "irons_spellbooks.firebolt") {
    return 1
  } else if (event.source.type == "irons_spellbooks.fire_breath") {
    return 1
  } else if (event.source.type == "irons_spellbooks.magma_bomb") {
    return 2
  } else if (event.source.type == "irons_spellbooks.blaze_storm") {
    return 1
  } else if (event.source.type == "irons_spellbooks.scorch") {
    return 2
  } else if (event.source.type == "irons_spellbooks.flaming_strike") {
    return 2
  }


  /*
    if (event.source.type == "irons_spellbooks.fireball"
      || event.source.type == "irons_spellbooks.burning_dash"
      || event.source.type == "irons_spellbooks.blaze_storm"
      || event.source.type == "irons_spellbooks.firebolt"
      || event.source.type == "irons_spellbooks.fire_breath"
      || event.source.type == "irons_spellbooks.magma_bomb"
      || event.source.type == "irons_spellbooks.blaze_storm"
      || event.source.type == "irons_spellbooks.scorch"
    ) { return true }
  */

  return 0


}


let isEnder = (event) => {//未完善
  if (event.source.type == "irons_spellbooks.magic_arrow") {
    return 3
  } else if (event.source.type == "irons_spellbooks.magic_missile") {//根据类型返回附着层数event.source.type == "irons_spellbooks.fireball"    || 
    return 1
  } else if (event.source.type == "irons_spellbooks.starfall") {
    return 1
  } else if (event.source.type == "irons_spellbooks.echoing_strikes") {
    return 1
  } else if (event.source.type == "irons_spellbooks.dragon_breath") {
    return 1
  } else if (event.source.type == "irons_spellbooks.echoing_strikes") {
    return 2
  } else if (event.source.type == "irons_spellbooks.black_hole") {
    return 1
  }
  return 0
}


/*
let isIce = (event) => {
  if (event.source.type == "irons_spellbooks.frost_step"
    || event.source.type == "irons_spellbooks.cone_of_cold"
    || event.source.type == "irons_spellbooks.ice_block"
    || event.source.type == "irons_spellbooks.icicle"
    || event.source.type == "irons_spellbooks.summon_polar_bear"
    || event.source.type == "irons_spellbooks.ray_of_frost"
    || event.source.type == "irons_spellbooks.frostwave"
    || event.source.type == "irons_spellbooks."
  ) { return true }
  return false
}
*/
let isIce = (event) => {//未完善

  /*
  if (event.source.type == "irons_spellbooks.frost_step"
    || event.source.type == "irons_spellbooks.cone_of_cold"
    || event.source.type == "irons_spellbooks.ice_block"
    || event.source.type == "irons_spellbooks.icicle"
    || event.source.type == "irons_spellbooks.summon_polar_bear"
    || event.source.type == "irons_spellbooks.ray_of_frost"
    || event.source.type == "irons_spellbooks.frostwave"
    || event.source.type == "irons_spellbooks."
  ) { return true }
*/

  if (event.source.type == "irons_spellbooks.frost_step") {
    return 3
  } else if (event.source.type == "irons_spellbooks.cone_of_cold") {//根据类型返回附着层数event.source.type == "irons_spellbooks.fireball"    || 
    return 1
  } else if (event.source.type == "irons_spellbooks.ice_block") {
    return 1
  } else if (event.source.type == "irons_spellbooks.icicle") {
    return 1
  } else if (event.source.type == "irons_spellbooks.summon_polar_bear") {
    return 1
  } else if (event.source.type == "irons_spellbooks.ray_of_frost") {
    return 2
  } else if (event.source.type == "irons_spellbooks.frostwave") {
    return 1
  }



  return 0
}
let onLightning = (event) => {//on  判断效果
  if (event.entity.getEffect("kubejs:lightning")) {

    return true//event.entity.getEffect("kubejs:lightning").getAmplifier()
  }

  return false

}

let onFire = (event) => {
  if (event.entity.getEffect("kubejs:fire")) {

    return true//event.entity.getEffect("kubejs:fire").getAmplifier()
  }

  return false

}

let onIce = (event) => {
  if (event.entity.getEffect("kubejs:ice")) {

    return true//event.entity.getEffect("kubejs:ice").getAmplifier()
  }

  return false

}


let onPosion = (event) => {
  if (event.entity.getEffect("minecraft:poison")) {

    return true//event.entity.getEffect("kubejs:posion").getAmplifier()
  }

  return false

}

let onWater = (event) => {

  if (event.entity.getEffect("kubejs:water")) {

    return true//event.entity.getEffect("kubejs:water").getAmplifier()
  }

  return false

}

let onEnder = (event) => {


  if (event.entity.getEffect("kubejs:ender")) {

    return "kubejs:ender"//event.entity.getEffect("kubejs:water").getAmplifier()
  }

  return false


}


let onLightning2 = (entity) => {//on  判断效果//实体专用
  if (entity.getEffect("kubejs:lightning")) {

    return "kubejs:lightning"//event.entity.getEffect("kubejs:lightning").getAmplifier()
  }

  return false

}

let onFire2 = (entity) => {
  if (entity.getEffect("kubejs:fire")) {

    return "kubejs:fire"//event.entity.getEffect("kubejs:fire").getAmplifier()
  }

  return false

}

let onIce2 = (entity) => {
  if (entity.getEffect("kubejs:ice")) {

    return "kubejs:ice"//event.entity.getEffect("kubejs:ice").getAmplifier()
  }

  return false

}


let onPosion2 = (entity) => {
  if (entity.getEffect("minecraft:poison")) {

    return true//event.entity.getEffect("kubejs:posion").getAmplifier()
  }

  return false

}

let onWater2 = (entity) => {

  if (entity.getEffect("kubejs:water")) {

    return "kubejs:water"//event.entity.getEffect("kubejs:water").getAmplifier()
  }

  return false

}


let onEnder2 = (entity) => {


  if (entity.getEffect("kubejs:ender")) {

    return "kubejs:ender"//event.entity.getEffect("kubejs:water").getAmplifier()
  }

  return false


}



let stickTime = (event) => {//火附着无敌帧



  if (!event.entity.getRootData().contains('sickTime1')) {//contains 检测是否有该项目  putInt创建或修改项目  getint获取项目

    event.entity.getRootData().putInt('sickTime1', 0)

  } else {


    let l = 0



    if (event.entity.getRootData().getInt('sickTime1') < 99) {
      l = event.entity.getRootData().getInt('sickTime1') + 1
    }


    event.entity.getRootData().putInt('sickTime1', l)


  }



}

let stickTime2 = (entity) => {//蒸气附着无敌帧 给受伤者



  if (!entity.getRootData().contains('sickTime2')) {//contains 检测是否有该项目  putInt创建或修改项目  getint获取项目

    entity.getRootData().putInt('sickTime2', 0)

  } else {

    let l = 0

    if (entity.getRootData().getInt('sickTime2') < 99) {
      l = entity.getRootData().getInt('sickTime2') + 1
    }

    entity.getRootData().putInt('sickTime2', l)


  }



}





let getEntityIndex = (project, event) => {//返回受伤者的项目索引  //注 村民没有此项

  let i = 0

  if (!event.entity.nbt["Attributes"][i]) {
    return
  }

  while (event.entity.nbt["Attributes"][i]["Name"] != project) {

    i++

    if (!event.entity.nbt["Attributes"][i]) { return }

  }



  if (!(event.entity.nbt["Attributes"][i]["Base"] >= 0) || !event.entity.nbt["Attributes"][i]["Modifiers"]) return





  return i
}


let actualAtt = (event) => {

  let att = 0
  if (event.source.actual.nbt['ForgeData']['LEVEL']) {

    let level = event.source.actual.nbt['ForgeData']['LEVEL']

    if (level > 110) {
      att = Math.pow(1.06, 109) * (1 + 0.1 * (level - 110))
    } else {
      att = Math.pow(1.06, level - 1)
    }
  }

  return att
}






let entityAtt = (event) => {//只能用受击者对象


  let att = 0
  if (event.entity.nbt['ForgeData']['LEVEL']) {

    let level = event.entity.nbt['ForgeData']['LEVEL']

    if (level > 110) {
      att = Math.pow(1.06, 109) * (1 + 0.1 * (level - 110))
    } else {
      att = Math.pow(1.06, level - 1)
    }
  }

  return att



}



let entityAtt2 = (entity) => {//等级加成


  let att = 0
  if (entity.nbt['ForgeData']['LEVEL']) {

    let level = entity.nbt['ForgeData']['LEVEL']

    if (level > 110) {
      att = Math.pow(1.0535, 109) * (1 + 0.1 * (level - 110))
    } else {
      att = Math.pow(1.0535, level - 1)
    }
  }

  return att



}


let entityHealth = (entity) => {


  let health = 0
  if (entity.nbt['ForgeData']['LEVEL']) {

    let level = entity.nbt['ForgeData']['LEVEL']

    if (level > 110) {
      health = Math.pow(1.06, 109) * (1 + 0.1 * (level - 110))
    } else {
      health = Math.pow(1.06, level - 1)
    }
  }

  return health



}



let physicsResistance = (entity) => {//普通攻击抗性计算 注意  附加伤害也要加上抗性physics_resistance


  let resistance = entity.getAttributes().getValue('kubejs:physics_resistance')

  if (resistance < 0.5) return 1 - resistance

  return 1 - (0.8 * resistance / (resistance + 0.3))



}


let resistance = (entity, Attributes) => {//普通攻击抗性计算 注意  附加伤害也要加上抗性physics_resistance


  let resistance = entity.getAttributes().getValue(Attributes)

  //tell(resistance)

  if (resistance < 0.5) return 1 - resistance

  return 1 - (0.8 * resistance / (resistance + 0.3))



}


let natureResistance = (entity) => {//普通攻击抗性计算 注意  附加伤害也要加上抗性physics_resistance


  let resistance = entity.getAttributes().getValue('kubejs:nature_resistance')

  if (resistance < 0.5) return 1 - resistance

  return 1 - (0.8 * resistance / (resistance + 0.3))



}


let effectModify = (event, entity, effect, amount) => {//效果刷新

  let intensity = entity.getEffect(effect).getAmplifier()  //元素量

  let time = entity.getEffect(effect).getDuration()

  entity.removeEffect(effect)


  if (intensity - amount >= 0) {
    entity.addEffect(new $potion(effect, time, Math.max(intensity - amount, 0), false, false))
  }


  return intensity
}

let example = (event, main, entity, r) => {//检测main周围的实体是否存在   使用实体注册名检测

  //event.server.tell('4')

  let findEntitys = []

  // event.server.tell('5')


  let entitys = main
    .level
    .getEntitiesWithin(AABB.of(
      main.x - r,
      main.y - r,
      main.z - r,
      main.x + r,
      main.y + r,
      main.z + r))


  let i = 0, j = 0
  for (; entitys[i]; i++) {

    if (entitys[i].type === entity) {
      findEntitys[j] = entitys[i]
      j++

    }


  }


  if (j == 0) { return false }

  return findEntitys

}


let entitySpwanCount = (main, tag, r) => {

  let count = 0

  let entitys = main
    .level
    .getEntitiesWithin(AABB.of(
      main.x - r,
      main.y - 2 * r,
      main.z - r,
      main.x + r,
      main.y + 2 * r,
      main.z + r))

  entitys.forEach(e => {



    if (e.getRootData().contains(tag)) {

      if (e.getRootData().contains("elite")) {

        count += 6

      } else {

        count++

      }

    }
  })

  return count

}


let exampleData = (event, main, tag, r) => {//检测main周围的实体是否存在

  //event.server.tell('4')

  let findEntitys = []

  //


  let entitys = main
    .level
    .getEntitiesWithin(AABB.of(
      main.x - r,
      main.y - r,
      main.z - r,
      main.x + r,
      main.y + r,
      main.z + r))


  let i = 0, j = 0
  for (; entitys[i]; i++) {//只限制寻找6个实体
    //console.log(j)
    if (entitys[i].getRootData().contains(tag)) {
      findEntitys[j] = entitys[i]
      j++
      // event.server.tell(entitys[i])
    }


  }


  if (j == 0) return false

  return findEntitys

}


let exampleData2 = (event, main, tag1, tag2, r) => {//检测main周围的实体是否存在 双标签

  //event.server.tell('4')

  let findEntitys = []

  //


  let entitys = main
    .level
    .getEntitiesWithin(AABB.of(
      main.x - r,
      main.y - r,
      main.z - r,
      main.x + r,
      main.y + r,
      main.z + r))


  let i = 0, j = 0
  for (; entitys[i]; i++) {//只限制寻找6个实体

    if (entitys[i].getRootData().contains(tag1) && entitys[i].getRootData().contains(tag2)) {
      findEntitys[j] = entitys[i]
      j++
      // event.server.tell(entitys[i])
    }


  }


  if (j == 0) return false

  return findEntitys

}

//let count=0

let getUuidEntity = (uuid) => {

  let entity = null
  let entitys = Client.level.entities

  //  console.log(count++)

  for (let i = 0; entitys[i]; i++) {

    let entityUuid = entitys[i].stringUuid.toString()

    if (entityUuid == uuid) {

      entity = entitys[i]
      break
    }
  }

  return entity
}



let getVertical = (x, y, z) => {

  let distance = Math.hypot(Math.hypot(x, y), z)

  let vertical = 180 * (Math.asin(y / distance) / PI) //根据受击者与该实体连线的倾斜角度得出最终该实体移动的方向

  return vertical
}


let getHorizontal = (x, z) => {




  let horizontal = 180 * (Math.atan2(x, z) / PI)//注意 vertical1 horizontal1  这里的单位为角度

  if (horizontal > 0) {
    horizontal = 180 - horizontal//修复坐标系方向不同
  } else if (horizontal < 0) {
    horizontal = -horizontal - 180
  }

  if ((x < 0.000001 && z < 0.000001) && (x > -0.000001 && z > -0.000001)) {//排除距离过小的情况
    horizontal = 0
    //Client.player.tell(x+'  '+z)
    //console.log(Math.atan2(0, 0))
  }


  //console.log(Math.atan2(0, 0))

  return horizontal
}

let isFairy = (entity) => {

  return (entity.type == "terramity:green_fairy" ||
    entity.type == "terramity:pink_fairy" ||
    entity.type == "terramity:blue_fairy")





}
let getHorizontal2 = (x, z) => {




  let horizontal = 180 * (Math.atan2(x, z) / PI)//注意 vertical1 horizontal1  这里的单位为角度

  if (horizontal > 0) {
    horizontal = 180 - horizontal//修复坐标系方向不同
  } else if (horizontal < 0) {
    horizontal = -horizontal - 180
  }

  if ((x < 0.001 && z < 0.001) && (x > -0.001 && z > -0.001)) {//排除距离过小的情况
    horizontal = 0
    //Client.player.tell(x+'  '+z)
    //console.log(Math.atan2(0, 0))
  }


  //console.log(Math.atan2(0, 0))

  return horizontal
}


let correctHorizontal = (horizontal) => {


  if (horizontal > 180) {

    horizontal -= 360

  } else if (horizontal < -180) {

    horizontal += 360

  }

  return horizontal
}


//priority:1080   
let getColor = (r, g, b, a) => {

  return (((a & 0xFF) << 24) |
    ((r & 0xFF) << 16) |
    ((g & 0xFF) << 8) |
    ((b & 0xFF) << 0))

}



let getRadiusEntity = (entity, type, r) => {

  if (entity instanceof $Entity) {
    //entity.level.getEntitiesOfClass(b, AABB.of(entity.x-5,entity.y-5,entity.z-5,entity.x+5,entity.y+5,entity.z+5))
    let entitys = entity.level.getEntitiesWithin(AABB.of(
      entity.x - r,
      entity.y - r,
      entity.z - r,
      entity.x + r,
      entity.y + r,
      entity.z + r,
    ))
    // ||Client.player.tell(entitys)
    for (let i = 0; entitys[i]; i++) {

      if (entitys[i].type != type || entity.distanceToEntity(entitys[i]) > r) {


        entitys.remove(i)

        i--
      }

    }

    return entitys

  }
}


let getImageManager = (ResourceLocation) => {



  //return $NativeImage.read($Minecraft.getInstance().getResourceManager().getResource(ResourceLocation).get().open())


}

let getTextWidth = (txt) => {


  return Client.font.width(String(txt))

}

let getKeyAndValue = (target) => {

  // let KV=[Object.entries(target)]
  // @ts-ignore
  return Object.entries(target)




}



let getTargetValueByIndex = (target, i) => {



  return target[Object.keys(target)[i]]



}




let tell = (text) => {

  if (text !== null) {
    Client.player.tell('->' + text)
  } else {

    Client.player.tell('->')
  }

}


const dataTypes = {
  "[object Number]": "number",
  "[object String]": "string",
  "[object Boolean]": "boolean",
  "[object Undefined]": "undefined",
  "[object Null]": "null",
  "[object Symbol]": "symbol",
  "[object BigInt]": "bigint"
};
function getType(data) {
  return dataTypes[Object.prototype.toString.call(data)] || "other";
}




let setDan = (entity, dan) => {
  /**@type {Internal.LivingEntity} */
  let a = entity

  if (a.isPlayer()) {
    /**@type {Player} */
    let player = a



    if (dan > a.getAttributeValue('kubejs:max_dan')) {

      player.sendData("dan_animation", { old: getDan(player), new: a.getAttributeValue('kubejs:max_dan') })

      a.setAttributeBaseValue('kubejs:dan', a.getAttributeValue('kubejs:max_dan'))

    } else {
      player.sendData("dan_animation", { old: getDan(player), new: Math.max(dan, 0) })

      a.setAttributeBaseValue('kubejs:dan', Math.max(dan, 0))


    }
  }
}

let getDan = (entity) => {

  //entity.setAttributeBaseValue('kubejs:dan', 99999)

  //  tell(entity.getAttributeBaseValue('kubejs:dan'))
  //  
  //    tell(entity.getAttributeValue('kubejs:dan'))
  //  

  return entity.getAttributeValue('kubejs:dan')

}

function getPlayerLevelTotal(n) {//获取该等级所需经验

  if (n > 105) {

    return 380253.7790 + (n - 105) * 25000


  }

  // 计算等比数列部分：20×1.07^level 的总和
  let geometricSum = (20 * (Math.pow(1.07, n + 1) - 1)) / (1.07 - 1);

  // 计算常数部分：80 的总和
  let constantSum = 80 * (n + 1);


  if (n > 20) constantSum--

  // 返回两部分的总和
  return constantSum + geometricSum;
}



//let attack = (actual, entity, type, amount, reactionValue) => {
//
//  setReactionValue(entity, reactionValue)
//  entity.attack(newSource(actual, newDamageType("kubejs", type)), Number(amount))
//
//
//}

let postPausedTime = Date.now()

let prePausedTime = Date.now()

let isPaused = false

let isContinue = true

let getTime = () => {//获取与暂停有关的时间轴

  if (!Client.paused) {

    if (isContinue) {//游戏已继续
      postPausedTime = Date.now()
      isPaused = true
      isContinue = false
    }

    return Date.now() - postPausedTime + prePausedTime

  } else {

    if (isPaused) {//游戏已暂停
      prePausedTime = Date.now() - postPausedTime + prePausedTime
      isContinue = true
      isPaused = false
    }

    return prePausedTime
  }



}

//设置时间流逝
let setTimeVelocity = (time) => {

  Client.timer.msPerTick = 1000 / time

}

let addTimeStagnate = (t ,l ) => {

  timeVelocityLast = Date.now() + t

  timeVelocity = Math.max(l,1)

}

let setJavaInt = (clasz, name, value) => {


  let a = clasz.getClass().getDeclaredField(name)

  a.setAccessible(true);

  a.setInt(clasz, Math.floor(value));

}
let getJavaInt = (clasz, name) => {
  let a = clasz.getClass().getDeclaredField(name)

  a.setAccessible(true);

  return a.getInt(clasz)

}


let getAttributeValue = (item, attributeName) => {

  let attribute = item.getAttributeModifiers($EquipmentSlot.MAINHAND).get(attributeName.get())

  let value = 0
  attribute.map((modifier) => {
    value += modifier.getAmount()
  })

  return value

}
let includesArrList = (arrA, arrB) => {

  let value = false

  arrA.forEach(a => {

    if (arrB[0] == a[0]) {

      value = true
    }
  })

  return value
}




let closeGravity = (player) => {


  if (player.getMove().y() < 0) {

    player.addDeltaMovement(new $Vec3(0, -player.getMove().y(), 0))

  }

}





function getNbtAttribute(tag1, attributeName) {
  let total = 0;

  /**@type {Internal.CompoundTag} */
  let tag = tag1
  // 检查标签是否存在且包含属性修饰符列表
  if (!tag || !tag.contains("AttributeModifiers", 9)) { // 9对应ListTag类型

    return total;
  }
  // 获取属性修饰符列表（10对应CompoundTag类型）
  let modifiersList = tag.getList("AttributeModifiers", 10);

  let UUID = $uuid.fromString('6a1b4-d735-4cb7-8ab2-3d34e')
  let oUUID = $uuid.fromString('6a13cb4-d735-4cb7-8ab2-3da44e')
  // 遍历列表中所有复合标签
  for (let i = 0; i < modifiersList.size(); i++) {

    let modifierTag = modifiersList.getCompound(i);

    // 检查是否包含属性名称字段
    if (!modifierTag.contains("AttributeName", 8)) { // 8对应StringTag类型

      continue;
    }
    // 匹配目标属性名称
    let currentAttrName = modifierTag.getString("AttributeName");
    if (currentAttrName !== attributeName) {
      continue;
    } else {
      UUID = modifierTag.getUUID("UUID")
    }

    // 提取修饰符数值并累加  排除相同uuid的属性
    if (modifierTag.contains("Amount", 6) && UUID.toString() != oUUID.toString()) { // 6对应DoubleTag类型
      oUUID = UUID
      total += modifierTag.getDouble("Amount");
    }
  }

  return total;
}












