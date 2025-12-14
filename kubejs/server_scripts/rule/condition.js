//无法调用不同文件夹中的方法

//const LecternMenuClass = Java.loadClass('net.minecraft.world.inventory.LecternMenu')
var imports = Java.loadClass

const $inventory = Java.loadClass("net.minecraft.world.entity.player.Inventory")
let $Vector3d = Java.loadClass("org.joml.Vector3d")
//新建菜单
const $Menu = Java.loadClass('net.minecraft.world.SimpleMenuProvider')
let $EquipmentSlot = Java.loadClass('net.minecraft.world.entity.EquipmentSlot')
/*
示例
new Menu((i, playerInventory,player) => {
   
    return new *菜单构造类*(101)//
    
  },*字符串*)

 */
let $BlockEntity = Java.loadClass('com.integration_package_core.entity.BlockEntity')


let $Player = Java.loadClass('net.minecraft.world.entity.player.Player')

let $OBB = Java.loadClass("com.integration_package_core.tool.collide.OBB")

let $Vector3f = Java.loadClass("org.joml.Vector3f")

let $TreeMap = Java.loadClass('java.util.TreeMap')

let $SortMap = Java.loadClass('com.integration_package_core.tool.SortMap')

let $ArrList = Java.loadClass('java.util.ArrayList')

let $CompoundTag = Java.loadClass('net.minecraft.nbt.CompoundTag')

let $Vec3 = Java.loadClass('net.minecraft.world.phys.Vec3')

let $Attributes = Java.loadClass('net.minecraft.world.entity.ai.attributes.Attributes')
let $InteractionHand = Java.loadClass('net.minecraft.world.InteractionHand')
let $LootContextParamSets = Java.loadClass('net.minecraft.world.level.storage.loot.parameters.LootContextParamSets')

let $LootParams$Builder = Java.loadClass('net.minecraft.world.level.storage.loot.LootParams$Builder')

let $LootContextParams = Java.loadClass('net.minecraft.world.level.storage.loot.parameters.LootContextParams')

let $PlayerAnimationEntity = Java.loadClass("com.integration_package_core.animation.PlayerAnimationEntity")

let $TagUtils = Java.loadClass("com.integration_package_core.tool.TagUtils")

let $TargetingConditions = Java.loadClass('net.minecraft.world.entity.ai.targeting.TargetingConditions')

let ItemEntity = Java.loadClass('net.minecraft.world.entity.item.ItemEntity')

let Vec3 = Java.loadClass('net.minecraft.world.phys.Vec3')

//背包ui类
const $InventoryClass = Java.loadClass('net.minecraft.client.gui.screens.inventory.InventoryScreen')
//讲台ui类
const $LecternClass = Java.loadClass('net.minecraft.client.gui.screens.inventory.LecternScreen')
//讲台类 用于构造  参数为菜单id
let $LecternMenu = Java.loadClass('net.minecraft.world.inventory.LecternMenu')

let $AnvilMenu = Java.loadClass('net.minecraft.world.inventory.AnvilMenu')

//let $CustomizeMenu= Java.loadClass('com.entity_bar.gui.CustomizeMenu') //com.pan.entity_bar.cilent.gui


//
let $WeaponfusionMenu = Java.loadClass('com.github.L_Ender.cataclysm.inventory.WeaponfusionMenu')

let $Slot = Java.loadClass('net.minecraft.world.inventory.Slot')

let $SimpleContainer = Java.loadClass('net.minecraft.world.SimpleContainer')

const $Inventory = Java.loadClass("net.minecraft.world.entity.player.Inventory")
//获取puffish经验类对象
let $puffishExperience = Java.loadClass("net.puffish.skillsmod.impl.ExperienceImpl")

const LecternGui11111 = Java.loadClass('net.minecraft.client.gui.screens.inventory.AbstractContainerScreen')

let $AttributeModifier = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier')

let $uuid = Java.loadClass('java.util.UUID')

let $MobType = Java.loadClass("net.minecraft.world.entity.MobType")//实体分支类型

const damageType = Java.loadClass('net.minecraft.world.damagesource.DamageTypes')

let $potion = Java.loadClass('net.minecraft.world.effect.MobEffectInstance')//效果实例

let $blockPos = Java.loadClass('net.minecraft.core.BlockPos')//方块坐标

let $block = Java.loadClass('net.minecraft.world.level.block.state.BlockState')//方块实例

let $moveType = Java.loadClass('net.minecraft.world.entity.MoverType')

const PI = 3.1415926
//let particles = Java.loadClass('net.minecraft.core.particles.ParticleOptions')
const $Int = 'int'

const $String = 'string'

const $Boolean = 'boolean'

const $List = 'list'





let areData = (entity, any) => {

  return entity.getRootData().contains(any)

}

let getData = (entity, type, any) => {//修改nbt三件套

  if (!entity) return false



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

let setData = (entity, type, any, value) => {//修改nbt三件套

  if (entity) {

    if (type == 'int' && !Number.isNaN(value)) {
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





let setBooleanData = (entity, any, boolean) => {


  return entity.getRootData().putBoolean(any, boolean)

}



let setIntData = (entity, any, value) => {


  return entity.getRootData().putInt(any, value)

}



let getEntityIndex = (project, event) => {//返回受伤者的项目索引  //注 村民没有此项   此方法不可用于获取玩家

  let entity = event.entity

  let i = 0



  if (!entity.nbt["Attributes"][i]) return

  while (entity.nbt["Attributes"][i]["Name"] != project) {

    i++

    if (!entity.nbt["Attributes"][i]) { return }

  }




  if (!(event.entity.nbt["Attributes"][i]["Base"] >= 0) || !event.entity.nbt["Attributes"][i]["Modifiers"]) return


  return i

}

let getActualIndex = (project, event) => {//返回攻击者的项目索引  //注 村民没有此项  此方法不可用于获取玩家

  let actual = event.source.actual

  let i = 0



  if (!actual.nbt["Attributes"][i]) return

  while (actual.nbt["Attributes"][i]["Name"] != project) {

    i++

    if (!actual.nbt["Attributes"][i]) { return }

  }


  if (!(event.entity.nbt["Attributes"][i]["Base"] >= 0) || !event.entity.nbt["Attributes"][i]["Modifiers"]) return



  return i

}




let isPlayer = (event) => {//该方法判定的是攻击者是否为玩家

  //注意 当上一个调用的方法返回为空时  此时用做if判断不会报错  但用于调用下一个方法时会报错
  if (!event.source) {
    return false
  }

  if (event.source.actual && event.entity.isLiving() && event.source.actual.isPlayer()) {//不检测村民
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
  //else if(isPoison(event)){ return 1}


  return false
}

let isPoison = (event) => {
  if (event.source.type == "irons_spellbooks.stomp"
    || event.source.type == "irons_spellbooks.poison_cloud"//中毒    伤害频率过高
    || event.source.type == "irons_spellbooks.poison_breath"//
    || event.source.type == "irons_spellbooks.poison_splash"//
    || event.source.type == "irons_spellbooks.firefly_swarm"//萤火虫
    || event.source.type == "irons_spellbooks.poison_arrow"//毒箭
    //|| event.source.type == "irons_spellbooks.poison_breath"
  ) { return true }
  return false
}


let isFire = (event) => {

  if (event.source.type == "irons_spellbooks.fireball") {
    return 3
  } else if (event.source.type == "irons_spellbooks.burning_dash") {//根据类型返回附着层数event.source.type == "irons_spellbooks.fireball"    || 
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
  }//else if(isPoison(event)){    return 1}




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

  return false


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
  return false
}


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

    return "kubejs:fire"//event.entity.getEffect("kubejs:lightning").getAmplifier()
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


    let l = event.entity.getRootData().getInt('sickTime1') + 1

    event.entity.getRootData().putInt('sickTime1', l)


  }

  return event.entity.getRootData().getInt('sickTime1') % 20 == 0

}


let stickTime2 = (entity) => {//火附着无敌帧 实体专用



  if (!entity.getRootData().contains('sickTime2')) {//contains 检测是否有该项目  putInt创建或修改项目  getint获取项目

    entity.getRootData().putInt('sickTime2', 0)

  } else {


    let l = entity.getRootData().getInt('sickTime2') + 1

    entity.getRootData().putInt('sickTime2', l)


  }



}





let actualAtt = (event) => {//只能用攻击者对象

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



/*
let actualAtt2=(entity)=>{

  let att=0
    if (entity.nbt['ForgeData']['LEVEL']) {
  
      let level = entity.nbt['ForgeData']['LEVEL']
  
      if (level > 110) {
        att = Math.pow(1.06, 109) * (1 + 0.1 * (level - 110))
      } else {
        att = Math.pow(1.06, level - 1)
      }
    }
  
    return att
  }
  */


let entityAtt2 = (entity) => {//可传攻击者对象


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


let exampleData = (event, main, tag, r) => {//检测main周围的实体是否存在  使用标签检测

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

let randomTp = (event, entity, r) => {//传送
  /*
    for (let i = 0; i < 10; i++) {
      let x = r * (2 * Math.random() - 1) //+ entity.x;
      //if (){}//
      let y = r * (2 * Math.random() - 1) //+ entity.y;
  //
      let z = r * (2 * Math.random() - 1) //+ entity.z;
  
      if (entity.block.offset(x, y - 1, z).getId() != 'minecraft:void_air' &&
        entity.block.offset(x, y - 1, z).getId() != 'minecraft:cave_air' &&
        entity.block.offset(x, y - 1, z).getId() != 'minecraft:air' &&
        (entity.block.offset(x, y, z).getId() == 'minecraft:air' || entity.block.offset(x, y, z).getId() == 'minecraft:cave_air') &&
        (entity.block.offset(x, y + 1, z).getId() == 'minecraft:air' || entity.block.offset(x, y + 1, z).getId() == 'minecraft:cave_air')) {
  
        entity.x += x
        entity.y += y
        entity.z += z
  
      }
    }
  
    */
  //传送
  for (let j = 0; j < 2; j++) {
    let x = Math.floor(r * (2 * Math.random() - 1)) //+ entity.x;
    //if (){}//

    let z = Math.floor(r * (2 * Math.random() - 1)) //+ entity.z;


    for (let i = -r; i < r; i++) {

      let y = i//Math.floor(r * (2 * Math.random() - 1)) //+ entity.y;

      // console.log(x + '  ' + y + '  ' + z + '  ' + entity.block.offset(x, y - 1, z).getId())


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
let entitySpwanCount = (main, tag, r) => {

  let count = 0

  let entitys = main
    .level
    .getEntitiesWithin(AABB.of(
      main.x - r,
      main.y - r,
      main.z - r,
      main.x + r,
      main.y + r,
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

let randomPos = (event, entity, r) => {//传送

  //传送
  for (let j = 0; j < 2; j++) {//检索两次

    let a = Math.random() > 0.5 ? 1 : -1;

    let b = Math.random() > 0.5 ? 1 : -1;

    let x = a * Math.floor((r - 20) * Math.random() + 20) //+ entity.x:Math.floor((r - 20) * Math.random() + 20) //+ entity.x;
    //if (){}//

    let z = b * Math.floor((r - 20) * Math.random() + 20)    //+ entity.z;


    for (let i = 0; i < 10; i++) {

      let y = 24 * (2 * Math.random() - 1)//Math.floor(r * (2 * Math.random() - 1)) //+ entity.y;

      // console.log(x + '  ' + y + '  ' + z + '  ' + entity.block.offset(x, y - 1, z).getId())
      //offset为相对位置

      if ((entity.block.offset(x, y - 1, z).getId() != 'minecraft:void_air' &&
        entity.block.offset(x, y - 1, z).getId() != 'minecraft:cave_air' &&
        entity.block.offset(x, y - 1, z).getId() != 'minecraft:air' &&
        (entity.block.offset(x, y, z).getId() == 'minecraft:air' || entity.block.offset(x, y, z).getId() == 'minecraft:cave_air') &&
        (entity.block.offset(x, y + 1, z).getId() == 'minecraft:air' || entity.block.offset(x, y + 1, z).getId() == 'minecraft:cave_air')) ||
        (entity.block.offset(x, y, z).getId() == 'minecraft:water')) {

        //   tell(entity.block.offset(x, y, z).getId() )


        return [entity.x + x, entity.y + y + 0.2, entity.z + z]
      }
    }

    return false

    //传送
  }

}

let randomPosInWater = (event, entity, r) => {//传送

  //传送
  for (let j = 0; j < 2; j++) {//检索两次
    let x = Math.floor(r * (2 * Math.random() - 1)) //+ entity.x;
    //if (){}//

    let z = Math.floor(r * (2 * Math.random() - 1)) //+ entity.z;


    for (let i = 0; i < 10; i++) {

      let y = 32 * (2 * Math.random() - 1)//Math.floor(r * (2 * Math.random() - 1)) //+ entity.y;

      // console.log(x + '  ' + y + '  ' + z + '  ' + entity.block.offset(x, y - 1, z).getId())


      if ((entity.block.offset(x, y, z).getId() == 'minecraft:water')) {

        //Client.player.setX(entity.x + x)
        //Client.player.setY(entity.y + y)
        //Client.player.setZ(entity.z + z)

        return [entity.x + x, entity.y + y, entity.z + z]
      }
    }

    return false
    //传送entity.x

  }

}


let randomTp1111 = (entity, event, chance, r) => {//传送


  //传送

  if (r > 1) {
    console.log('1  ' + r)

    randomTp(entity, chance, --r) //不应该是 r-1 而是 --r  因为r-1递归到最终仍是使用传入的数计算  重叠了更多次
  }
  console.log('2  ' + r)
  let random = Math.random();
  //if (){}
  r = 1


  if (random <= chance) {

    //particleDeliver(entity, event)

    let quantity = 0, quantity2 = 0

    for (let x = -r; x <= r; x++) {

      for (let y = -r; y <= r; y++) {

        for (let z = -r; z <= r; z++) {

          if (entity.block.offset(x, y - 1, z).getId() != 'minecraft:void_air' &&
            entity.block.offset(x, y - 1, z).getId() != 'minecraft:cave_air' &&
            entity.block.offset(x, y - 1, z).getId() != 'minecraft:air' &&
            (entity.block.offset(x, y, z).getId() == 'minecraft:air' || entity.block.offset(x, y, z).getId() == 'minecraft:cave_air') &&
            (entity.block.offset(x, y + 1, z).getId() == 'minecraft:air' || entity.block.offset(x, y + 1, z).getId() == 'minecraft:cave_air')) {
            quantity++
          }

        }
      }
    }
    if (quantity != 0) {

      quantity = Math.floor(Math.random() * quantity)

      x: for (let x = -r; x <= r; x++) {
        for (let y = -r; y <= r; y++) {
          for (let z = -r; z <= r; z++) {
            if (entity.block.offset(x, y - 1, z).getId() != 'minecraft:void_air' &&
              entity.block.offset(x, y - 1, z).getId() != 'minecraft:cave_air' &&
              entity.block.offset(x, y - 1, z).getId() != 'minecraft:air' &&
              (entity.block.offset(x, y, z).getId() == 'minecraft:air' || entity.block.offset(x, y, z).getId() == 'minecraft:cave_air') &&
              (entity.block.offset(x, y + 1, z).getId() == 'minecraft:air' || entity.block.offset(x, y + 1, z).getId() == 'minecraft:cave_air')) {

              if (quantity2 == quantity) {

                entity.setX(entity.x + x)
                entity.setY(entity.y + y)
                entity.setZ(entity.z + z)
                break x
              }
              quantity2++
            }
          }
        }
      }
    }

    //particleDeliver(entity, event)
    //Client.particleEngine.createParticle('', entity.x , entity.y,  entity.z, 0, 100, 0)//粒子
    //let sound =Java.loadClass('net.minecraft.client.resources.sounds.SoundInstance')



    //Client.level.playSound(null,entity.x,entity.z,entity.y,'minecraft:entity.enderman.teleport','music',100,100)

    // global.event.ender

  }
}



let reactionEffectAndEvent = (event, entity, r, g, b, title, reactionValue) => {//给该实体周围的玩家显示字幕





  let newEvent = { data: event, reaction: title, entity: entity, reactionValue: reactionValue }

  DamageEventList.reaction.forEach(e => e(newEvent))//监听反应事件



  let players = example(event, entity, 'minecraft:player', 30)

  if (players) {

    players.forEach(player => {

      player.sendData('reaction_snow', {

        x: entity.x + 2 * Math.random() - 1,
        y: entity.y + 0.2 * Math.random(),
        z: entity.z + 2 * Math.random() - 1,
        r: r,
        g: g,
        b: b,
        h: player.YRot,
        v: player.XRot,
        word: title,

      })
    })
  }

  return players

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




let playerEyeline = (level, player, radius) => {




  /**@type {Internal.Entity} */
  let player1 = player


  /**@type {Internal.Predicate<Internal.Entity>} */
  let Predicate = entity => { return true }   //方法参数



  let eyePosition = player.getEyePosition(1)//眼睛坐标

  let lookVector = player.getViewVector(1)//眼睛视线向量



  let d0 = Math.pow(2, 63) - 1;
  let entity = null;


  let entitys = level.getEntities(player1, AABB.of(player1.x - radius, player1.y - radius, player1.z - radius, player1.x + radius, player1.y + radius, player1.z + radius,), Predicate)



  let oldEntity//原版视线指向的实体

  if (player.rayTrace().type == 'BLOCK') {

    oldEntity = player.rayTrace().block

  } else if (player.rayTrace().type == 'ENETITY') {

    oldEntity = player.rayTrace().entity

  }




  for (let i in entitys) {



    let entity1 = entitys[i]



    let axisalignedbb = entity1.getBoundingBox();//碰撞箱
    if (axisalignedbb.getSize() < 0.3) {
      axisalignedbb = axisalignedbb.inflate(0.3);
    }
    if (axisalignedbb.contains(eyePosition)) {//当玩家在眼睛坐标在实体之中时//eyePosition1.distanceToSqr(optionalVec);
      entity = entity1;
      d0 = 0;
      break;
    }



    if (clip(axisalignedbb, eyePosition, lookVector)) {

      let d1 = player.distanceToEntity(entity1)
      if (!oldEntity ||
        player.distanceToSqr(oldEntity.getPos()) > player.distanceToSqr(entity1.getPos())) {


        if (d1 < d0 && entity1.type != "minecraft:marker") {//取最小  排除标记实体
          entity = entity1;
          d0 = d1;
        }
      }

    }
  }
  //entity.setNbt(null)
  // tell()

  return entity

}





let getRadiusEntity = (entity, type, r) => {


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





let tell = (text) => {
  if (Utils.server) {
    Utils.server.tell('->' + text)

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


let addItemEntity = (level, x, y, z, itemStack) => {


  let a = new ItemEntity(level, x, y, z, itemStack)

  level.addFreshEntity(a)


}


let getRamdomArtifacts = (artifacts, rarity) => {//获取随机古遗物

  let artifactsList = ["head", "necklecy", "necklace", "body", "belt"]

  tell(Math.floor(Math.random() * 5))
  return "l2artifacts:" + artifacts + "_" + artifactsList[Math.floor(Math.random() * 5)] + "_" + rarity



}


let openMenu = (player, id) => {

  /**@type {Internal.MenuProvider} */
  let menu = new $Menu((i, playerInventory, player) => {

    //   /**@type {Internal.CustomizeMenu} */

    let menuType = new $LecternMenu(id)//101=>副本界面

    // []
    // menuType.addSlots(new $Slot(new $SimpleContainer(Item.of("advancednetherite:netherite_diamond_block")),2,100,100))

    return menuType

  }, '46756')


  player.openMenu(menu)



}





//
//et sendEntity = (player, entity,projectnName, content) => {
//
//
// content.uuid = entity.stringUuid
//
//// global.entity[entity.stringUuid] = entity
// if (player[0]) {
//
// player.forEach(player => {
//   player.sendData(projectnName, content)
//
// })
//
// else {
//
//player.sendData(projectnName, content)
//
//
//
//
//
//
//

let setDanaaaaaaa = (entity, dan) => {

  return

  /**@type {Internal.LivingEntity} */
  let a = entity

  if (a.isPlayer()) {
    /**@type {Player} */
    let player = a

    //tell(a.getAttributeBaseValue('kubejs:max_dan'))

    if (dan > a.getAttributeValue('kubejs:max_dan')) {
      //tell(234)
      player.sendData("dan_animation", { old: getDan(player), new: a.getAttributeValue('kubejs:max_dan') })

      a.setAttributeBaseValue('kubejs:dan', a.getAttributeValue('kubejs:max_dan'))

    } else {
      player.sendData("dan_animation", { old: getDan(player), new: Math.max(dan, 0) })

      a.setAttributeBaseValue('kubejs:dan', Math.max(dan, 0))

      //tell(a.getAttributeValue('kubejs:dan'))
    }
  }
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

    if (!areData(player, 'danLocking')) {

      lockingDan(oldDan, dan, player)

    }


  }



}



let getDan = (entity) => {

  return entity.getAttributeValue('kubejs:dan')

}



// event.server.tell(axisalignedbbArray[0]<axisalignedbbArray[3])



//  let eyePosition1 = new Vec3(eyePosition.x(), eyePosition.y(), eyePosition.z(),)
//
//  let optionalVec = new Vec3(optional.get().x(), optional.get().y(), optional.get().z(),)


//  let optional = axisalignedbb.clip(eyePosition, endVector);

//event.server.tell(optional) 
//  optional.get()

//optional.isPresent()


let getMobLoot = (entity, source) => {



  let killData = new $LootParams$Builder(entity.level)
    .withParameter($LootContextParams.THIS_ENTITY, entity)
    .withParameter($LootContextParams.ORIGIN, entity.pos)
    .withParameter($LootContextParams.DAMAGE_SOURCE, source)
    .withOptionalParameter($LootContextParams.KILLER_ENTITY, source.actual)
    .withOptionalParameter(
      $LootContextParams.DIRECT_KILLER_ENTITY, source.actual);



  return entity.server.lootData.getLootTable(entity.getLootTable()).getRandomItems(killData.create($LootContextParamSets.ENTITY))


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

//priority:10845630 
let getKeyAndValue = (target) => {

  // let KV=[Object.entries(target)]
  // @ts-ignore
  return Object.entries(target)




}


let attacks = (obb, actual, damageType, damageValue, tougheningValue, reactionValue) => {

  /**@type {Player} */
  let player = actual
  // tell(obb.postAABB())

  //AABB.of(
  //         player.x - 32,
  //         player.y - 32,
  //         player.z - 32,
  //         player.x + 32,
  //         player.y + 32,
  //         player.z + 32)


  player.level.getEntitiesWithin(AABB.of(
    player.x - 32,
    player.y - 32,
    player.z - 32,
    player.x + 32,
    player.y + 32,
    player.z + 32)).forEach(e => {
      let obb1 = $OBB.ofEntity(e)

      // tell(e.name+"  "+obb1.collide(obb))

      if (e.isLiving() && obb1.collide(obb) && e != actual) {
        player.sendData('attack_sound', {})
        e.hurtToughness(tougheningValue)

        attack(actual, e, damageType, damageValue*DamageValue2(player,"attack",e) , reactionValue)
      }

    })

}




let attack = (actual, entity, type, amount, reaction) => {

  setReactionValue(entity, reaction)

  entity.invulnerableTime = 0

  // tell(amount)

  //tell("entity  "+entity+"type  "+type+"  amount  "+amount)
  //entity.attack(newSource(actual, newDamageType("kubejs", type)), Number(amount))
  if (type) {
    entity.attack(newSource(actual, newDamageType("kubejs", type)), Number(amount))//注意不能在不设定伤害类型时使用entity.attack  会导致计算重复(player allow mob等伤害已修改)
  } else {
    entity.attack(newSource(actual, newDamageType("kubejs", "air")), Number(amount))
  }

}
let attack1 = ( entity, type, amount, reaction) => {

  setReactionValue(entity, reaction)

  entity.invulnerableTime = 0

  // tell(amount)

  //tell("entity  "+entity+"type  "+type+"  amount  "+amount)
  //entity.attack(newSource(actual, newDamageType("kubejs", type)), Number(amount))
  if (type) {
    entity.attack(newSource1(entity, newDamageType("kubejs", type)), Number(amount))
  } else {
    entity.attack(newSource1(entity, newDamageType("kubejs", "air")), Number(amount))
  }

}


let setReactionValue = (entity, a) => {
  //tell(a)
  return setData(entity, $Int, 'reaction', a)



}

let getReactionValue = (entity) => {

  return getData(entity, $Int, 'reaction')

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

  if ((x < 0.5 && z < 0.5) && (x > -0.5 && z > -0.5)) {//排除距离过小的情况
    horizontal = 0
    //Client.player.tell(x+'  '+z)
    //console.log(Math.atan2(0, 0))
  }


  //console.log(Math.atan2(0, 0))

  return horizontal
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
  air: "air"
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
  air: "air"
}

const ReactionType = [

  "fire_damage",
  "lightning_damage",
  "divine_damage",
  "ice_damage",
  "water_damage",
  "posion_damage",
  "call_damage",
  "ender_damage",
  null
]

let setCrit = (entity, a) => {

  return setData(entity, $Int, 'crit', a)


}



let newDamageType = (modId, name) => {

  /**@type {ResourceKey<damageType>} */
  let type = ResourceKey.create(Registries.DAMAGE_TYPE, new ResourceLocation(modId, name))

  return type


}


let newSource = (entity, damageType) => {

  return entity.damageSources().source(damageType, entity)

}
let newSource1 = (entity, damageType) => {

  return entity.damageSources().source(damageType)

}

let animationTime = (entity, stack, end) => {

  return entity.timeEnd <= ((entity.time - stack) + entity.age) && entity.timeEnd >= ((entity.time - end) + entity.age)
}

const Registries = Java.loadClass('net.minecraft.core.registries.Registries')



let ResourceKey = Java.loadClass('net.minecraft.resources.ResourceKey')


let set = (clasz, name, value) => {


  let availableRolls = clasz.getClass().getDeclaredField(name)

  availableRolls.setAccessible(true);

  availableRolls.set(clasz, value);


}


let getAttributeValue = (item, attributeName) => {

  let attribute = item.getAttributeModifiers($EquipmentSlot.MAINHAND).get(attributeName.get())

  let value = 0
  attribute.map((modifier) => {
    value += modifier.getAmount()
  })

  return value

}

//b 检查数组是否包含指定首项的数组
let includesArrList = (arrA, arrB) => {

  let value = false

  arrA.forEach(a => {

    if (arrB[0] == a[0]) {

      value = true
    }
  })

  return value
}

//b 检查数组是否包含指定首项的数组
let includesTag = (arrA, arrB) => {

  let value = false
  tell(arrA)
  arrA.forEach(a => {

    if (arrB[0] == a.get(0)) {

      value = true
    }
  })

  return value
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