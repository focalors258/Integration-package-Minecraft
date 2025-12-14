let $uuid = Java.loadClass("java.util.UUID")
//注意  $表示调用类文件中的内部类
let Vec3 = Java.loadClass('net.minecraft.world.phys.Vec3')
let $KeyMapping = Java.loadClass('net.minecraft.client.KeyMapping')

let $KeyConflictContext = Java.loadClass('net.minecraftforge.client.settings.KeyConflictContext')
let $keyType = Java.loadClass('com.mojang.blaze3d.platform.InputConstants$Type')
let $GLFW = Java.loadClass('org.lwjgl.glfw.GLFW')
let ItemAttribute = Java.loadClass('com.integration_package_core.items.ItemAttribute')

let $ProjectileUtil = Java.loadClass('net.minecraft.world.entity.projectile.ProjectileUtil')

let $Player = Java.loadClass('net.minecraft.world.entity.player.Player')

let $AttributeModifier = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier')

let $BlockEntity =
  Java.loadClass('com.integration_package_core.entity.BlockEntity')





let $TagUtils = Java.loadClass("com.integration_package_core.tool.TagUtils")
//
let $AbstractGolem = Java.loadClass("net.minecraft.world.entity.animal.AbstractGolem")

let $Attributes = Java.loadClass('net.minecraft.world.entity.ai.attributes.Attributes')

let $ImmutableMultimap$Builder = Java.loadClass('com.google.common.collect.ImmutableMultimap$Builder')

let $TreeMap = Java.loadClass('java.util.TreeMap')

let $SortMap = Java.loadClass('com.integration_package_core.tool.SortMap')


let $AnimationEntity = Java.loadClass('com.integration_package_core.animation.PlayerAnimationEntity')

let $MoveTowardsTargetGoal = Java.loadClass("net.minecraft.world.entity.ai.goal.MoveTowardsTargetGoal")
//MoveTowardsRestrictionGoal

let $MoveTowardsRestrictionGoal = Java.loadClass("net.minecraft.world.entity.ai.goal.MoveTowardsRestrictionGoal")


let $TemptGoal = Java.loadClass("net.minecraft.world.entity.ai.goal.TemptGoal")

//net.minecraft.world.entity.ai.goal

let $Circle$EnumRingBehavior = Java.loadClass("net.miauczel.legendary_monsters.Particle.custom.Circle$EnumRingBehavior")

let $Mob = Java.loadClass('net.minecraft.world.entity.Mob')

let $PathfinderMob = Java.loadClass('net.minecraft.world.entity.PathfinderMob')


let $Circle$RingData = Java.loadClass("net.miauczel.legendary_monsters.Particle.custom.Circle$RingData")

//主手
let $InteractionHand = Java.loadClass('net.minecraft.world.InteractionHand')

//背包ui类
const $InventoryClass = Java.loadClass('net.minecraft.client.gui.screens.inventory.InventoryScreen')
//讲台ui类
const $LecternClass = Java.loadClass('net.minecraft.client.gui.screens.inventory.LecternScreen')

let $puffishExperience = Java.loadClass("net.puffish.skillsmod.impl.ExperienceImpl")

let $SpellBook = Java.loadClass('io.redspace.ironsspellbooks.item.SpellBook')

let $MagicData = Java.loadClass('io.redspace.ironsspellbooks.api.magic.MagicData')
//io.redspace.ironsspellbooks.api.magic.MagicData

let $SpellSelectionManager = Java.loadClass('io.redspace.ironsspellbooks.api.magic.SpellSelectionManager')

let $CuriosApi = Java.loadClass('top.theillusivec4.curios.api.CuriosApi')

const damageType = Java.loadClass('net.minecraft.world.damagesource.DamageTypes')

let $potion = Java.loadClass('net.minecraft.world.effect.MobEffectInstance')

let $block = Java.loadClass('net.minecraft.core.BlockPos')

let $MobType = Java.loadClass("net.minecraft.world.entity.MobType")//实体分支类型"top.theillusivec4.curios.api.CuriosApi

let $blockPos = Java.loadClass('net.minecraft.core.BlockPos')//方块坐标


let $EquipmentSlot = Java.loadClass('net.minecraft.world.entity.EquipmentSlot')

//let blockState= Java.loadClass('block')

let $ScaleType = Java.loadClass('virtuoel.pehkui.api.ScaleType')

let $ScaleData = Java.loadClass('virtuoel.pehkui.api.ScaleData')

let $ScaleData1 = Java.loadClass('virtuoel.pehkui.api.ScaleModifier')

let $Entity = Java.loadClass('net.minecraft.world.entity.Entity')

let $Villager = Java.loadClass('net.minecraft.world.entity.npc.Villager')



let $EntityType = Java.loadClass('net.minecraft.world.entity.EntityType')
let ItemEntity = Java.loadClass('net.minecraft.world.entity.item.ItemEntity')


const PI = 3.1415926

const $Int = 'int'

const $String = 'string'

const $Boolean = 'boolean'

const $List = 'list'


var imports = Java.loadClass


//priority:19080  
let areData = (entity, any) => {

  return entity.getRootData().contains(any)

}
//priority:6080  
let getData = (entity, type, any) => {//修改nbt三件套

  if (!entity) return false

  //if (entity.persistentData.contains(any)) {
  //
  //  if (type == 'int') {
  //    return entity.persistentData.getInt(any)
  //  } else if (type == 'boolean') {
  //    return entity.persistentData.getBoolean(any)
  //  } else if (type == 'string') {
  //    return entity.persistentData.getString(any)
  //  } else if (type == 'double') {
  //    return entity.persistentData.getDouble(any)
  //  } else {//可存对象 数组
  //    return entity.persistentData.get(any).copy()//创建新的对象  而不是原来的对象
  //  }
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

let initData = (entity, type, any, value) => {

  if (areData(entity, any)) {

    return getData(entity, type, any)

  } else {



    return setData(entity, type, any, value)

  }
}

//priority:4080  
let setData = (entity, type, any, value) => {//修改nbt三件套

  if (entity) {

    if (type == 'int') {

      //  tell(value)

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
  return 0
}
let getBooleanData = (entity, any) => {//修改nbt三件套

  return entity.getRootData().getBoolean(any)
}
let getIntData = (entity, any) => {//修改nbt三件套



  if (areData(entity, any)) {

    return entity.getRootData().getInt(any)
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
  if (event.source.actual && event.entity.isLiving() && event.source.actual.isPlayer()) {
    return true
  }
  return false
}




let getSpellType = (player) => {//获取当前法术

  let type

  if (player) {
    let spellbook = getCuriosItem(player, "spellbook")

    if (player.getItemInHand($InteractionHand.MAIN_HAND).nbt && player.getItemInHand($InteractionHand.MAIN_HAND).nbt['ISB_Spells']) {

      type = player.getItemInHand($InteractionHand.MAIN_HAND).nbt['ISB_Spells']['data'][0]['id']


    } else if (spellbook && spellbook.nbt && spellbook.nbt['ISB_Spells']) {

      if (spellbook) {

        let a = new $SpellSelectionManager(player)

        type = spellbook.nbt['ISB_Spells']['data'][a.getSelectionIndex()]['id']

      }

    }
  }

  return type


}

let isLightning = (event) => {//雷   攻击类型 is

  let damageType = event.source.type().msgId()

  if (event.source.type().msgId() == 'lightning_magic') {
    let type = getSpellType(event.source.actual)
    if (type === "irons_spellbooks:ascension") {
      return 3
    } else if (type === "irons_spellbooks:thunderstorm") {//根据类型返回附着层数
      return 1
    } else if (type === "irons_spellbooks:ball_lightning") {
      return 1
    } else if (type === "irons_spellbooks:chain_lightning") {
      return 2
    } else if (type === "irons_spellbooks:electrocute") {
      return 1
    } else if (type === "irons_spellbooks:shockwave") {
      return 2
    } else if (type === "irons_spellbooks:lightning_lance") {
      return 2
    } else if (type === "irons_spellbooks:chain_lightning") {
      return 1
    } else if (type === "irons_spellbooks:lightning_bolt") {
      return 3
    }

  } else if (areData(event.source.actual, 'lightning_att')) {//怪物攻击

    if (areData(event.source.actual, 'boss')) {
      return 3
    } else if (areData(event.source.actual, 'elite')) {
      return 2
    }
    return 1
  } else if (damageType == "lightning_1") {
    return 1
  } else if (damageType == "lightning_2") {
    return 2
  } else if (damageType == "lightning_3") {
    return 3
  } else if (damageType == "lightning_4") {
    return 4
  } else if (damageType == "lightning_5") {
    return 5
  } else if (damageType === "lightning_damage") {


    return getReactionValue(event.entity)



  }
  //else if (event.source.actual.type === 'takesapillage:clay_golem') {//临时
  //  return 1
  //} else if (event.source.actual.type === 'minecraft:zombie') {//临时
  //  return 1
  //}



  return false
}
let isPoison = (event) => {//毒

  let damageType = event.source.type().msgId()

  if (event.source.type().msgId() == 'nature_magic') {
    //let entity=event.source.actual  tell(getCuriosItem(attacker,"spellbook"))
    let type = getSpellType(event.source.actual)



    if (type == "irons_spellbooks:stomp"
      || type == "irons_spellbooks:poison_cloud"//中毒    伤害频率过高
      || type == "irons_spellbooks:poison_breath"//
      || type == "irons_spellbooks:poison_splash"//
      || type == "irons_spellbooks:firefly_swarm"//萤火虫
      || type == "irons_spellbooks:poison_arrow"//毒箭
      || event.source.type().msgId() == "magic"
      || event.source.type().msgId() == ReactionTypes.posion
    ) {
      return 1
    }
    return 1

  } else if (damageType == "poison_cloud") {
    return 1
  } else if (areData(event.source.actual, 'poison_att')) {
    return 1
  } else if (damageType === "posion_damage") {

    return 1

  }
  return false
}




let isFire = (event) => {//火

  let damageType = event.source.type().msgId()

  if (event.source.type().msgId() == 'fire_magic') {

    //
    let type = getSpellType(event.source.actual)




    if (type == "irons_spellbooks:fireball") {
      return 3
    } else if (type == "irons_spellbooks:burning_dash") {//根据类型返回附着层数
      return 1
    } else if (type == "irons_spellbooks:blaze_storm") {

      return 1
    } else if (type == "irons_spellbooks:firebolt") {
      return 1
    } else if (type == "irons_spellbooks:fire_breath") {
      return 1
    } else if (type == "irons_spellbooks:magma_bomb") {
      return 2
    } else if (type == "irons_spellbooks:blaze_storm") {
      return 1
    } else if (type == "irons_spellbooks:scorch") {
      return 2
    } else if (type == "irons_spellbooks:flaming_strike") {
      return 2
    }

  } else if (areData(event.source.actual, 'fire_att')) {

    if (areData(event.source.actual, 'boss')) {
      return 3
    } else if (areData(event.source.actual, 'elite')) {
      return 2
    }
    return 1
  } else if (damageType == "fire_1") {//要用再注册
    return 1
  } else if (damageType == "fire_2") {
    return 2
  } else if (damageType == "fire_3") {
    return 3
  } else if (damageType == "fire_4") {
    return 4
  } else if (damageType == "fire_5") {
    return 5
  } else if (damageType === "fire_damage") {

    //tell(event.source.type().msgId())

    return getReactionValue(event.entity)



  }

  //else if (event.source.actual.type == "takesapillage:clay_golem") {//测试
  //  return 2
  //}


  /*
    if (event.source.type().msgId() == "irons_spellbooks.fireball"
      || event.source.type().msgId() == "irons_spellbooks.burning_dash"
      || event.source.type().msgId() == "irons_spellbooks.blaze_storm"
      || event.source.type().msgId() == "irons_spellbooks.firebolt"
      || event.source.type().msgId() == "irons_spellbooks.fire_breath"
      || event.source.type().msgId() == "irons_spellbooks.magma_bomb"
      || event.source.type().msgId() == "irons_spellbooks.blaze_storm"
      || event.source.type().msgId() == "irons_spellbooks.scorch"
    ) { return true }
  */

  return false


}


let isEnder = (event) => {//末影            未完善

  let damageType = event.source.type().msgId()
  if (event.source.type().msgId() == 'ender_magic') {
    let type = getSpellType(event.source.actual)
    if (type == "irons_spellbooks:magic_arrow") {
      return 3
    } else if (type == "irons_spellbooks:magic_missile") {//根据类型返回附着层数event.source.type().msgId() == "irons_spellbooks.fireball"    || 
      return 1
    } else if (type == "irons_spellbooks:starfall") {
      return 1
    } else if (type == "irons_spellbooks:echoing_strikes") {
      return 1
    } else if (type == "irons_spellbooks:dragon_breath") {
      return 1
    } else if (type == "irons_spellbooks:echoing_strikes") {
      return 2
    } else if (type == "irons_spellbooks:black_hole") {
      return 1
    }


  } else if (areData(event.source.actual, 'ender_att')) {

    if (areData(event.source.actual, 'boss')) {
      return 3
    } else if (areData(event.source.actual, 'elite')) {
      return 2
    }
    return 1
  } else if (damageType == "ender_1") {
    return 1
  } else if (damageType == "ender_2") {
    return 2
  } else if (damageType == "ender_3") {
    return 3
  } else if (damageType == "ender_4") {
    return 4
  } else if (damageType == "ender_5") {
    return 5
  } else if (damageType === "ender_damage") {


    return getReactionValue(event.entity)



  }

  return false//注意排除返回值为0

}

let isIce = (event) => {//冰            未完善

  let damageType = event.source.type().msgId()

  if (event.source.type().msgId() == 'ice_magic') {



    /*
    if (event.source.type().msgId() == "irons_spellbooks.frost_step"
      || event.source.type().msgId() == "irons_spellbooks.cone_of_cold"
      || event.source.type().msgId() == "irons_spellbooks.ice_block"
      || event.source.type().msgId() == "irons_spellbooks.icicle"
      || event.source.type().msgId() == "irons_spellbooks.summon_polar_bear"
      || event.source.type().msgId() == "irons_spellbooks.ray_of_frost"
      || event.source.type().msgId() == "irons_spellbooks.frostwave"
      || event.source.type().msgId() == "irons_spellbooks."
    ) { return true }
  */
    let type = getSpellType(event.source.actual)
    if (type == "irons_spellbooks:frost_step") {
      return 3
    } else if (type == "irons_spellbooks:cone_of_cold") {//根据类型返回附着层数event.source.type().msgId() == "irons_spellbooks.fireball"    || 
      return 1
    } else if (type == "irons_spellbooks:ice_block") {
      return 1
    } else if (type == "irons_spellbooks:icicle") {
      return 1
    } else if (type == "irons_spellbooks:summon_polar_bear") {
      return 1
    } else if (type == "irons_spellbooks:ray_of_frost") {
      return 2
    } else if (type == "irons_spellbooks:frostwave") {
      return 1
    }

  } else if (areData(event.source.actual, 'ice_att')) {

    if (areData(event.source.actual, 'boss')) {
      return 3
    } else if (areData(event.source.actual, 'elite')) {
      return 2
    }
    return 1
  } else if (damageType == "ice_1") {
    return 1
  } else if (damageType == "ice_2") {
    return 2
  } else if (damageType == "ice_3") {
    return 3
  } else if (damageType == "ice_4") {
    return 4
  } else if (damageType == "ice_5") {
    return 5
  } else if (damageType === "ice_damage") {


    return getReactionValue(event.entity)



  }

  return false
}


let isDivine = (event) => {//神圣
  let damageType = event.source.type().msgId()

  if (event.source.type().msgId() == 'holy_magic') {


    let type = getSpellType(event.source.actual)
    if (type == "irons_spellbooks:divine_smite") {
      return 2
    } else if (type == "irons_spellbooks:wisp") {//根据类型返回附着层数event.source.type().msgId() == "irons_spellbooks.fireball"    || 
      return 1
    } else if (type == "irons_spellbooks:guiding_bolt") {
      return 2
    }
  } else if (areData(event.source.actual, 'divine_att')) {

    if (areData(event.source.actual, 'boss')) {
      return 3
    } else if (areData(event.source.actual, 'elite')) {
      return 2
    }
    return 1
  } else if (damageType == "divine_1") {
    return 1
  } else if (damageType == "divine_2") {
    return 2
  } else if (damageType == "divine_3") {
    return 3
  } else if (damageType == "divine_4") {
    return 4
  } else if (damageType == "divine_5") {
    return 5
  } else if (damageType === "divine_damage") {


    return getReactionValue(event.entity)



  }

  return false

}



let isCall = (event) => {//唤魔


  let damageType = event.source.type().msgId()
  //tell(damageType)
  if (event.source.type().msgId() == 'evocation_magic') {

    let type = getSpellType(event.source.actual)

    if (type == "irons_spellbooks:gust") {
      return 3
    } else if (type == "irons_spellbooks:firecracker") {//根据类型返回附着层数event.source.type().msgId() == "irons_spellbooks.fireball"    || 
      return 1
    } else if (type == "irons_spellbooks:fang_strike") {
      return 1
    } else if (type == "irons_spellbooks:fang_ward") {
      return 3
    } else if (type == "irons_spellbooks:chain_creeper") {
      return 2
    } else if (type == "irons_spellbooks:arrow_volley") {
      return 1
    } else if (type == "irons_spellbooks:lob_creeper") {
      return 1
    }
  } else if (areData(event.source.actual, 'call_att')) {

    if (areData(event.source.actual, 'boss')) {
      return 3
    } else if (areData(event.source.actual, 'elite')) {
      return 2
    }
    return 1
  } else if (damageType === "flyIntoWall") {//风

    return 2

  } else if (damageType === "call_damage") {

    return getReactionValue(event.entity)

  }

  return false
}




let isWater = (event) => {//水

  let damageType = event.source.type().msgId()
  if (areData(event.source.actual, 'water_att')) {

    if (areData(event.source.actual, 'boss')) {
      return 3
    } else if (areData(event.source.actual, 'elite')) {
      return 2
    }
    return 1
  } else if (damageType === "water_damage") {

    return getReactionValue(event.entity)

  }
  return false
}
















/*
let isLightning = (event) => {areData(event.source.actual,'lightning_att')illager_additions:spearman
  if (event.source.type().msgId() === "irons_spellbooks.ascension"
    || event.source.type().msgId() === "irons_spellbooks.thunderstorm"
    || event.source.type().msgId() === "irons_spellbooks.ball_lightning"
    || event.source.type().msgId() === "irons_spellbooks.chain_lightning"
    || event.source.type().msgId() === "irons_spellbooks.electrocute"
    || event.source.type().msgId() === "irons_spellbooks.shockwave"
    || event.source.type().msgId() === "irons_spellbooks.lightning_lance"
    || event.source.type().msgId() === "irons_spellbooks.chain_lightning"
    || event.source.type().msgId() === "irons_spellbooks.lightning_bolt"

  ) { return true }
  return false
}
*/
/*
let isIce = (event) => {
  if (event.source.type().msgId() == "irons_spellbooks.frost_step"
    || event.source.type().msgId() == "irons_spellbooks.cone_of_cold"
    || event.source.type().msgId() == "irons_spellbooks.ice_block"
    || event.source.type().msgId() == "irons_spellbooks.icicle"
    || event.source.type().msgId() == "irons_spellbooks.summon_polar_bear"
    || event.source.type().msgId() == "irons_spellbooks.ray_of_frost"
    || event.source.type().msgId() == "irons_spellbooks.frostwave"
    || event.source.type().msgId() == "irons_spellbooks."
  ) { return true }
  return false
}
*/
let onDivine = (entity) => {


  if (entity.getEffect("kubejs:divine")) {

    return true//event.entity.getEffect("kubejs:lightning").getAmplifier()
  }

  return false
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
let onCall = (entity) => {
  if (entity.getEffect("kubejs:call")) {

    return "kubejs:call"//event.entity.getEffect("kubejs:fire").getAmplifier()
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
  if (areData(event.source.actual, "level")) {

    let level = getData(event.source.actual, $Int, "level")

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
  if (areData(event.entity, "level")) {

    let level = getData(event.entity, $Int, "level")

    if (level > 110) {
      att = Math.pow(1.06, 109) * (1 + 0.1 * (level - 110))
    } else {
      att = Math.pow(1.06, level - 1)
    }
  }

  return att



}



let entityAtt2 = (entity) => {


  let att = 0
  if (areData(entity, "level")) {

    let level = getData(entity, $Int, "level")

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


let natureResistance = (entity) => {//普通攻击抗性计算 注意  附加伤害也要加上抗性


  let resistance = entity.getAttributes().getValue('kubejs:nature_resistance')

  if (resistance < 0.5) return 1 - resistance

  return 1 - (0.8 * resistance / (resistance + 0.3))



}

let spellResistance = (entity, spell) => {//元素攻击抗性计算 注意  附加伤害也要加上抗性


  let resistance = entity.getAttributes().getValue(spell)

  if (resistance < 0.5) return 1 - resistance

  return 1 - (0.8 * resistance / (resistance + 0.3))



}

let effectModify = (event, entity, effect, amount) => {//修改效果等级

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

let exampleOfLive = (event, main, r, n) => {//检测main周围的实体是否存在 计算数量  使用实体注册名检测

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
  for (; entitys[i] && j < n; i++) {

    if (entitys[i].isLiving()) {
      findEntitys[j] = entitys[i]
      j++
    }
  }
  if (j == 0) { return false }

  return findEntitys

}

let entityCount = (event, main, r) => {//检测main周围的实体是否存在 计算数量  使用实体注册名检测

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

    if (entitys[i].isLiving()) {
      findEntitys[j] = entitys[i]
      j++
    }
  }
  if (j == 0) { return 0 }

  return findEntitys?.length

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
  for (; entitys[i]; i++) {//只限制寻找6个实体<-X

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

let randomTp = (entity, event, r) => {//随机传送


  for (let j = 0; j < 2; j++) {
    let x = Math.floor(r * (2 * Math.random() - 1)) //+ entity.x;
    //if (){}//

    let z = Math.floor(r * (2 * Math.random() - 1)) //+ entity.z;


    for (let i = -r; i < r; i++) {

      let y = i//Math.floor(r * (2 * Math.random() - 1)) //+ entity.y;

      //console.log(x+'  '+y+'  '+z+'  '+entity.block.offset(x, y - 1, z).getId())


      if (entity.block.offset(x, y - 1, z).getId() != 'minecraft:void_air' &&
        entity.block.offset(x, y - 1, z).getId() != 'minecraft:cave_air' &&
        entity.block.offset(x, y - 1, z).getId() != 'minecraft:air' &&
        (entity.block.offset(x, y, z).getId() == 'minecraft:air' || entity.block.offset(x, y, z).getId() == 'minecraft:cave_air') &&
        (entity.block.offset(x, y + 1, z).getId() == 'minecraft:air' || entity.block.offset(x, y + 1, z).getId() == 'minecraft:cave_air')) {

        entity.setX(entity.x + x)
        entity.setZ(entity.z + z)

        entity.setY(entity.y + y)
        //entity.x += x
        //entity.y += y
        //entity.z += z
        break
      }
    }
    //传送
  }
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


let reactionEffectAndEvent = (event, entity, r, g, b, title, reactionValue) => {//给该实体周围的玩家显示字幕

  let newEvent = { data: event, reaction: title, entity: entity, reactionValue: reactionValue }

  DamageEventList.reaction.forEach(e => e(newEvent))//监听反应事件



  showText(event, entity, r, g, b, title, false)


  // return players

}

let showText = (event, entity, r, g, b, title, crit) => {


  let players = example(event, entity, 'minecraft:player', 30)

  if (players) {

    players.forEach(player => {

      player.sendData('reaction_snow', {

        x: entity.x,
        y: entity.y + 0.2 * Math.random() + 1,
        z: entity.z,
        r: r,
        g: g,
        b: b,
        h: player.YRot,
        v: player.XRot,
        word: title,
        crit: crit
      })
    })
  }


}




let ScreenJitter = (player, intensity, time) => {//屏幕振动

  intensity *= 10

  player.sendData('video', {//给所有玩家客户端的实体添加仅做标签判定的nbt(传入的为服务端)
    value: intensity,//
    name: 'intensity',
  })//振动强度
  player.sendData('video', {//给所有玩家客户端的实体添加仅做标签判定的nbt(传入的为服务端)
    value: time,//
    name: 'time',
  })//振动时间

}

let ScreenJitter1 = (player, intensity, time) => {//屏幕振动




  player.sendData('video', {//给所有玩家客户端的实体添加仅做标签判定的nbt(传入的为服务端)
    value: intensity,//
    name: 'intensity1',
  })//振动强度
  player.sendData('video', {//给所有玩家客户端的实体添加仅做标签判定的nbt(传入的为服务端)
    value: time,//
    name: 'time1',
  })//振动时间





}








let setAbsorption = (entity, value) => {


  let nbt = entity.getNbt()

  nbt['AbsorptionAmount'] = value

  entity.setNbt(nbt)

  //  entity.nbt['AbsorptionAmount'] = 4356

  entity.level.getPlayers().sendData('absorption', {//无法使用客户端玩家进行发送
    entity: entity.getId(),
    value: entity.nbt['AbsorptionAmount'],
    name: 'set'
  })
}



let getAbsorption = (entity) => {


  if (entity.nbt['AbsorptionAmount']) {

    return entity.nbt['AbsorptionAmount']

  } else return 0


}


let sendEntity = (player, entity, projectnName, content) => {


  content.uuid = entity.stringUuid

  //global.entity[entity.stringUuid] = entity

  if (player[0]) {

    player.forEach(player => {
      player.sendData(projectnName, content)

    })

  } else {

    player.sendData(projectnName, content)

  }

  Client.player.tell(content)

}





let targetTrace = (entity, entity1) => {

  let vertical1 = entity.getRootData().getDouble('xRot')

  let horizontal1 = entity.getRootData().getDouble('yRot')

  let vertical = PI * vertical1 / 180  //竖向角度(使用此值替换原版角度)  entity.XRot/ 180  entity.YRot/ 180 /

  let horizontal = PI * horizontal1 / 180 //横向角度  //注意 vertical  horizontal 这里的单位为弧度

  let horizontal3 = 0

  let vertical3 = 0


  let x = entity.x - entity1.x  //entity1 被攻击者  entity 实体
  let y = entity.y - entity1.y
  let z = entity.z - entity1.z

  let distance = Math.hypot(Math.hypot(x, y), z)//这里没有distanceToEntity()方法

  if (distance < 1) {

    entity1.invulnerableTime = 0
    entity1.attack(20)

    //global.goalEntity[entity1.stringUuid] = null

    entity.remove('discarded')




  }

  let vecX = -Math.cos(vertical) * Math.sin(horizontal) / 5//向量 * distance

  let vecZ = Math.cos(vertical) * Math.cos(horizontal) / 5// vecX * distance 

  let vecY = -Math.sin(vertical) / 5// * distance // vecX 负号不可动




  let vertical2 = getVertical(x, y, z)//180 * (Math.asin(y / distance) / PI) //根据受击者与该实体连线的倾斜角度得出最终该实体移动的方向

  let horizontal2 = getHorizontal(x, z)//180 * (Math.atan2(x, z) / PI)//注意 vertical1 horizontal1  这里的单位为角度
  /*
                  if (horizontal2 > 0) {
                      horizontal2 = 180 - horizontal2//修复坐标系方向不同
                  } else if (horizontal2 < 0) {
                      horizontal2 = -horizontal2 - 180
                  }                                                                                        //Math.asin(x*x+) 180*(1-Math.abs(Math.atan2(differX, differZ)/PI))
  */


  if (Math.abs(vertical1 - vertical2) > 20) {//使vertical逐渐逼近并最终等于vertical1

    let add = Math.abs(vertical1 - vertical2) / (vertical1 - vertical2)

    if (vertical1 <= -90 && add > 0) {

      if (horizontal1 < 0) {
        horizontal3 = horizontal1 + 180
      } else if (horizontal1 > 0) {
        horizontal3 = horizontal1 - 180
      }

    } else if (vertical1 >= 90 && add < 0) {

      if (horizontal1 < 0) {
        horizontal3 = horizontal1 + 180
      } else if (horizontal1 > 0) {
        horizontal3 = horizontal1 - 180
      }

    } else {
      vertical3 = vertical1 - 20 * add
    }

  } else if (Math.abs(vertical1 - vertical2) < 20) {

    vertical3 = vertical1
  } else if (Math.abs(vertical1 - vertical2) > 0) {

  }

  let differHorizontal = horizontal1 - horizontal2//( horizontal1 - horizontal2)>180?horizontal1 - horizontal2:360-( horizontal1 - horizontal2) //差值

  if (Math.abs(differHorizontal) > 180 && !(horizontal1 < 0 && horizontal2 < 0) && !(horizontal1 > 0 && horizontal2 > 0)) {

    if (differHorizontal > 0) {
      differHorizontal = -(360 - differHorizontal)
    } else {
      differHorizontal = (360 - differHorizontal)
    }
  }

  if (Math.abs(differHorizontal) >= 20) {//使vertical逐渐逼近并最终等于vertical1

    let add = Math.abs(differHorizontal) / differHorizontal

    if (horizontal1 <= -180 && add > 0) {

      horizontal3 = 180

    } else if (horizontal1 >= 180 && add < 0) {

      horizontal3 = -180
    } else {
      horizontal3 = horizontal1 - 20 * add
    }

  } else if (Math.abs(differHorizontal) < 20) {//&& Math.abs(horizontal1 - horizontal2) > 0


    horizontal3 = horizontal2


  } else if (Math.abs(differHorizontal) == 0) {//&& Math.abs(horizontal1 - horizontal2) > 0

    //  vecX *= 5
    //  vecZ *= 5

  }


  return [vertical3, horizontal3]


}





let newSource = (entity, damageType) => {

  return entity.damageSources().source(damageType, entity)

}


let hitResult = (level, mainEntity, r, predicate) => {

  /**@type {Internal.Entity} */
  let player1 = mainEntity

  let position = mainEntity.pos//坐标

  let lookVector = mainEntity.deltaMovement//向量

  //tell(r)

  let d0 = Math.pow(2, 63) - 1;

  let entity = null;

  let aabb = mainEntity.getBoundingBox().expandTowards(mainEntity.getDeltaMovement()).inflate(r)


  let entitys = level.getEntities(player1, aabb, predicate)

  //AABB.of(player1.x - radius, player1.y - radius, player1.z - radius, player1.x + radius, player1.y + radius, player1.z + radius,)



  for (let i in entitys) {



    let entity1 = entitys[i]


    let axisalignedbb = entity1.getBoundingBox();//碰撞箱
    if (axisalignedbb.getSize() < 0.3) {
      axisalignedbb = axisalignedbb.inflate(0.3);
    }


    let d1 = mainEntity.distanceToEntity(entity1)

    if (d1 < d0 && entity1.type != "minecraft:marker") {//取最小  排除标记实体
      entity = entity1;
      d0 = d1;
    }



  }
  //entity.setNbt(null)
  // tell()

  return entity

}

let hitResultttgersefsefs = (level, mainEntity, predicate) => {




  /**@type {Internal.Entity} */
  let player1 = mainEntity


  // /**@type {Internal.Predicate<Internal.Entity>} */
  // let Predicate = entity => { return true }   //方法参数



  let position = mainEntity.pos//坐标

  let lookVector = mainEntity.deltaMovement//向量



  let d0 = Math.pow(2, 63) - 1;
  let entity = null;

  let aabb = mainEntity.getBoundingBox().expandTowards(mainEntity.getDeltaMovement()).inflate(1.0)


  let entitys = level.getEntities(player1, aabb, predicate)






  for (let i in entitys) {



    let entity1 = entitys[i]


    let axisalignedbb = entity1.getBoundingBox();//碰撞箱
    if (axisalignedbb.getSize() < 0.3) {
      axisalignedbb = axisalignedbb.inflate(0.3);
    }
    if (axisalignedbb.contains(position)) {//当玩家在眼睛坐标在实体之中时//eyePosition1.distanceToSqr(optionalVec);
      entity = entity1;
      d0 = 0;
      break;
    }



    if (clip(axisalignedbb, position, lookVector)) {

      let d1 = mainEntity.distanceToEntity(entity1)

      if (d1 < d0 && entity1.type != "minecraft:marker") {//取最小  排除标记实体
        entity = entity1;
        d0 = d1;
      }


    }
  }
  //entity.setNbt(null)
  // tell()

  return entity

}

let clip = (axisalignedbb, eyePosition, lookVector) => {




  let axisalignedbbArray =
    [axisalignedbb.maxX,
    axisalignedbb.maxY,
    axisalignedbb.maxZ,
    axisalignedbb.minX,
    axisalignedbb.minY,
    axisalignedbb.minZ,]


  let eyePositionArray = [eyePosition.x(), eyePosition.y(), eyePosition.z()]


  let lookVectorArray = [lookVector.x(), lookVector.y(), lookVector.z()]



  for (let i = 0; i < 6; i++) {

    let index = i > 2 ? i % 3 : i

    let index1 = i + 1 > 2 ? (i + 1) % 3 : i + 1

    let index2 = i + 2 > 2 ? (i + 2) % 3 : i + 2

    let p = (axisalignedbbArray[i] - eyePositionArray[index]) / lookVectorArray[index]//通过一个数轴获取参数

    let planeX = p * lookVectorArray[index1] + eyePositionArray[index1]//获取第二轴

    let planeY = p * lookVectorArray[index2] + eyePositionArray[index2]//获取第三轴

    if (
      planeX > axisalignedbbArray[index1 + 3] && planeX < axisalignedbbArray[index1]
      && planeY > axisalignedbbArray[index2 + 3] && planeY < axisalignedbbArray[index2]) {

      // exist = true
      return true
      // break

    }

  }

  return false



}

let getRadiusEntity = (entity, type, r) => {

  if (entity instanceof $Entity) { }
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

// entitys.remove(i)

//  Client.player.tell('-->'+entitys[i].type )

let getKeyAndValue = (target) => {

  // let KV=[Object.entries(target)]
  // @ts-ignore
  return Object.entries(target)




}



let tell = (text) => {
  if (Client.player) {
    Client.player.tell('->' + text)
  }

}




let copyRuleEvent = (player, event) => {


  let ruleList = getData(player, $List, 'star_user_rule')

  if (player && getData(player, $Int, 'copy_rangeUpdate') && ruleList) {


    getKeyAndValue(ruleList.rule).forEach(([type, rule], index) => {
      //+ player.getRootData()['star_rule'][type]['data']['present']

      event(type, rule)


    })

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


let getCuriosItem = (player, column) => {//获取饰品栏物品
  //注意  在做为参数的函数中retrue不会使外层的函数有返回值

  let item

  $CuriosApi.getCuriosHelper().getCuriosHandler(player).ifPresent(handler => {

    let stacks = handler.getCurios().get(column).getStacks()



    //tell(a)
    for (let i = 0; i < stacks.getSlots(); i++) {
      if (stacks.getStackInSlot(i)) {
        item = stacks.getStackInSlot(i)
      }
    }


    // tell(handler.getCurios().get(column).getStacks().getStackInSlot(0).nbt)

  })

  return item




}
let resistance = (entity, Attributes) => {//普通攻击抗性计算 注意  附加伤害也要加上抗性physics_resistance


  let resistance = entity.getAttributes().getValue(Attributes)

  //tell(resistance)

  if (resistance < 0.5) return 1 - resistance

  return 1 - (0.8 * resistance / (resistance + 0.3))



}


let getCrit = (entity) => {



  return getData(entity, $Int, 'crit')




}


let setCrit = (entity, a) => {

  return setData(entity, $Int, 'crit', a)


}

let setReactionValue = (entity, a) => {

  return setData(entity, $Int, 'reaction', a)

}

let getReactionValue = (entity) => {

  return getData(entity, $Int, 'reaction')

}




let addItemEntity = (level, x, y, z, itemStack) => {


  let a = new ItemEntity(level, x, y, z, itemStack)

  level.addFreshEntity(a)


}

let addEntity = (level, x, y, z, type, tag) => {


  let summoner = level.createEntity(type)

  summoner.setX(x)
  summoner.setY(y)
  summoner.setZ(z)

  if (tag) tag(summoner)

  level.addFreshEntity(summoner)

  return summoner
}





let lockingDan = (oldDan, dan, player) => {

  if (criticalDecide(oldDan, dan, 500)) {

    setData(player, $List, 'danLocking', { time: Date.now() + 1800000, dan: 500, remove: false });

  } else if (criticalDecide(oldDan, dan, 1200)) {

    setData(player, $List, 'danLocking', { time: Date.now() + 1800000, dan: 1200, remove: false });

  } else if (criticalDecide(oldDan, dan, 2000)) {
    setData(player, $List, 'danLocking', { time: Date.now() + 1800000, dan: 2000, remove: false });
  } else if (criticalDecide(oldDan, dan, 3000)) {
    setData(player, $List, 'danLocking', { time: Date.now() + 1800000, dan: 3000, remove: false });
  } else if (criticalDecide(oldDan, dan, 4200)) {
    setData(player, $List, 'danLocking', { time: Date.now() + 1800000, dan: 4200, remove: false });
  } else if (criticalDecide(oldDan, dan, 5500)) {
    setData(player, $List, 'danLocking', { time: Date.now() + 1800000, dan: 5500, remove: false });

  } else if (criticalDecide(oldDan, dan, 7000)) {

    setData(player, $List, 'danLocking', { time: Date.now() + 1800000, dan: 7000, remove: false });
  }

  if (areData(player, 'danLocking')) {//更新客户端

    player.sendData('danLocking', {

      data: getData(player, $List, 'danLocking')
    })
  }

}

let setDan = (entity, dan) => {
  /**@type {Internal.LivingEntity} */
  let a = entity

  dan = Math.floor(dan)

  if (a.isPlayer()) {
    /**@type {Player} */
    let player = a

    let oldDan = getDan(player)//initData(entity, 'double', 'oldDan', 0)

    dan = dan < 0 ? 0 : dan

    if (dan > a.getAttributeValue('kubejs:max_dan')) {

      dan = a.getAttributeValue('kubejs:max_dan')

      // player.sendData("dan_animation", { old: oldDan, new: a.getAttributeValue('kubejs:max_dan') })

      // a.setAttributeBaseValue('kubejs:dan', a.getAttributeValue('kubejs:max_dan'))

    } else {

      if (areData(player, 'danLocking')) {//段位锁定

        let data = getData(player, $List, 'danLocking')


        if (dan >= data.dan && oldDan < data.dan) dan = data.dan - 1

        if (oldDan >= data.dan && dan < data.dan) dan = data.dan

      }

    }

    player.sendData("dan_animation", { old: oldDan, new: dan })

    a.setAttributeBaseValue('kubejs:dan', dan)
    //tell(getData(player, $List, 'danLocking'))
    if (!areData(player, 'danLocking')) {

      lockingDan(oldDan, dan, player)


    }


  }



}

let getDan = (entity) => {

  return entity.getAttributeValue('kubejs:dan')

}

let criticalDecide = (value1, value2, number) => {



  if (
    (value1 < number && value2 >= number) ||
    (value1 >= number && value2 < number)

  ) { return true }

  return false


}


let setPlayerLevel = (player, amount) => {

  let PuffishLevel = new $puffishExperience('puffish_skills:combat')

  /**@type {Internal.ServerPlayer} */

  let serPlayer = player


  sendLevelAnimation(PuffishLevel, serPlayer, amount)

  //let oldLevel = PuffishLevel.getLevel(serPlayer)
  //
  //let old = getPlayerLevel(player)
  //
  //PuffishLevel.setTotal(serPlayer, amount)
  //
  //let level = PuffishLevel.getLevel(serPlayer)
  //
  //player.sendData("playerLevel_animation", { old: old, new: amount, level: level, oldLevel: oldLevel })
  //// PuffishLevel.getRequired


}

let sendLevelAnimation = (PuffishLevel, serPlayer, amount) => {


  let oldLevel = PuffishLevel.getLevel(serPlayer)

  let old = getPlayerLevel(serPlayer)

  PuffishLevel.setTotal(serPlayer, amount)

  let level = PuffishLevel.getLevel(serPlayer)

  serPlayer.sendData("playerLevel_animation", { old: old, new: amount, level: level, oldLevel: oldLevel })
  // PuffishLevel.getRequired




}

let getPlayerLevel = (player) => {

  let PuffishLevel = new $puffishExperience('puffish_skills:combat')

  /**@type {Internal.ServerPlayer} */

  let serPlayer = player


  return PuffishLevel.getTotal(serPlayer)

}








let setPlayerFireLevel = (player, amount) => {






}

let setPlayerEnderLevel = (player, amount) => {






}


let playerVisual = (player, entitys, slanting) => {


  let differX = player.x - entitys.x
  let differY = player.y - entitys.y + 1 /// differX
  let differZ = player.z - entitys.z/// differX

  let distance = entitys.distanceToEntity(player)//距离


  /* Math.pow(
      (player.x - entitys.x) * (player.x - entitys.x)
      + (player.y - entitys.y) * (player.y - entitys.y)
      + (player.z - entitys.z) * (player.z - entitys.z), 0.5)*/

  //   event.server.tell(differX + '  ' + differY + '  ' + differZ)

  let vertical = PI * player.xRotO / 180  //竖向角度

  let horizontal = PI * player.yRotO / 180 //横向角度

  //   
  let vecX = Math.cos(vertical) * Math.sin(horizontal) * distance
  let vecZ = -Math.cos(vertical) * Math.cos(horizontal) * distance // vecX
  let vecY = Math.sin(vertical) * distance // vecX

  //tell(Math.abs(differX - vecX) )
  // event.server.tell(vecX + '  ' + vecY + '  ' + vecZ)
  //event.server.tell(Math.abs(differY - vecY) + '  ' + Math.abs(differZ -vecZ) )
  //event.server.tell('14645345436')
  if (Math.abs(differX - vecX) < slanting && Math.abs(differY - vecY) < slanting && Math.abs(differZ - vecZ) < slanting) {



    return true

    //event.server.tell(entitys)

  }



  return false












}


const ReactionTypes = {

  fire: "fire_damage",
  lightning: "lightning_damage",
  divine: "divine_damage",
  ice: "ice_damage",
  water: "water_damage",
  posion: "posion_damage",
  call: "call_damage",
  ender: "ender_damage",
  air: "null"
}


//let attack = (actual, entity, type, amount, reaction) => {
//
//  setReactionValue(entity, reaction)
//
//  entity.invulnerableTime = 0
//  //tell("entity  "+entity+"type  "+type+"  amount  "+amount)
//  //entity.attack(newSource(actual, newDamageType("kubejs", type)), Number(amount))
//  entity.attack(newSource(actual, newDamageType("kubejs", type)), Number(amount))
//
//}

let playerSend = (entity, key, data) => {


  entity.level.getPlayers().sendData(key, data)


}

let isFairy = (entity) => {

  return (entity.type == "terramity:green_fairy" ||
    entity.type == "terramity:pink_fairy" ||
    entity.type == "terramity:blue_fairy")

}

let getFairy = (actual) => {


  let entitys = actual
    .level
    .getEntitiesWithin(AABB.of(
      actual.x - 30,
      actual.y - 30,
      actual.z - 30,
      actual.x + 30,
      actual.y + 30,
      actual.z + 30))

  entitys.removeIf(e => {

    if (isFairy(e) &&
      e.areData("host")) return false
    return true
  })


  return entitys
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

  //tell(horizontal)
  //console.log(Math.atan2(0, 0))

  return horizontal
}

let attack = (actual, entity, type, amount, reaction) => {

  setReactionValue(entity, reaction)

  entity.invulnerableTime = 0
  //tell("entity  "+entity+"type  "+type+"  amount  "+amount)
  //entity.attack(newSource(actual, newDamageType("kubejs", type)), Number(amount))
  if (type) {
    entity.attack(newSource(actual, newDamageType("kubejs", type)), Number(amount))
  } else {
    entity.attack(newSource(actual, damageType.PLAYER_ATTACK), Number(amount))
  }

}
const ReactionRootTypes = {

  fire: "fire",
  lightning: "lightning",
  divine: "divine",
  ice: "ice",
  water: "water",
  posion: "posion",
  call: "call",
  ender: "ender",
  air: "null"
}

let newSource1 = (entity, damageType) => {

  return entity.damageSources().source(damageType)

}
let attack1 = (entity, type, amount, reaction) => {

  setReactionValue(entity, reaction)

  entity.invulnerableTime = 0
  //tell("entity  "+entity+"type  "+type+"  amount  "+amount)
  //entity.attack(newSource(actual, newDamageType("kubejs", type)), Number(amount))
  if (type) {
    entity.attack(newSource1(entity, newDamageType("kubejs", type)), Number(amount))
  } else {
    entity.attack(newSource1(entity, damageType.PLAYER_ATTACK), Number(amount))
  }

}
let getEquipment = (player, equipment) => {

  return player.getItemBySlot(equipment)

}

let getAttributeValue = (item, attributeName) => {

  let attribute = item.getAttributeModifiers($EquipmentSlot.MAINHAND).get(attributeName.get())

  let value = 0
  attribute.map((modifier) => {
    value += modifier.getAmount()
  })

  return value

}


let ofReactionEffect = (entity) => {

  if (onDivine(entity)) {

    return entity.getEffect("kubejs:divine")

  } else if (onWater2(entity)) {

    return entity.getEffect("kubejs:water")


  } else if (onLightning2(entity)) {

    return entity.getEffect("kubejs:lightning")


  } else if (onFire2(entity)) {

    return entity.getEffect("kubejs:fire")


  } else if (onCall(entity)) {

    return entity.getEffect("kubejs:call")


  } else if (onIce2(entity)) {

    return entity.getEffect("kubejs:ice")

  } else if (onEnder2(entity)) {

    return entity.getEffect("kubejs:ender")
  }
















}




let animationTime = (entity, stack, end) => {


  return entity.timeEnd <= ((entity.time - stack) + entity.age) && entity.timeEnd >= ((entity.time - end) + entity.age)
}





