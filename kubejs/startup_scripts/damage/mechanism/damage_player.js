

let AttModify = (event, entity, source, type, amount) => {

  if (source.player) {
    let speed = Math.max(4 - source.player.getAttributes().getValue('minecraft:generic.attack_speed'), 0)
    //tell(436)
    screenShaking(source.player, 5 + speed, 0.25 + speed / 30, "sub")
  }
  // tell(DamageValue(event, 'attack'))
  // amount *= DamageValue2(source.actual, 'attack')//重新计算puff的伤害<=====??????

  //tell(DamageValue(event, 'attack'))

  //物理伤害
  // source.player.sendData('video', {//给所有玩家客户端的实体添加仅做标签判定的nbt(传入的为服务端)
  //   value: 0.25 + speed / 30,//
  //   name: 'intensity1',
  // })//振动强度
  // source.player.sendData('video', {//给所有玩家客户端的实体添加仅做标签判定的nbt(传入的为服务端)
  //   value: 5 + speed,//
  //   name: 'time1',
  // })//振动时间


  // event.setAmount(event.amount * DamageValue(event, 'spell'))//entityResistance(entity)*  魔法攻击无需计算物理抗性
  entity.invulnerableTime = 0
  entity.attack(newSource(source.actual, newDamageType("kubejs", type)), Number(amount))
  event.setCanceled(true)






}

let hostImmune = (entity, attacker, event) => {



  if (entity && attacker && entity.areData("host") && entity.getDataString("host") == attacker.stringUuid) {

    event.amount = 0

    event.setCanceled(true)


  }










}


let PlayerDamage = (event) => {

  let type = event.source.getType()

  let entity = event.entity //给entity加上前缀event

  let source = event.source


  let attackRatio =//当伤害类型为铁魔法自带时  攻击时造成的数值为倍率  并有暴击计算  否则为持续伤害
    source.type().msgId() == 'fire_magic'
      || source.type().msgId() == 'holy_magic'
      || source.type().msgId() == 'ice_magic'
      || source.type().msgId() == 'lightning_magic'
      || source.type().msgId() == 'nature_magic'
      || source.type().msgId() == 'ender_magic'
      || source.type().msgId() == 'fire_magic'
      || source.type().msgId() == 'fire_magic' ? DamageValue(event, 'spell') : 1

  if (
    // isPlayer(event) &&
    type != "poison" &&
    type != "lightning" &&
    type != "ender" &&
    type != "call" &&
    type != "water" &&
    type != "divine" &&
    type != "fire" &&
    type != "ice"
  ) {//防递归

    // if(event.player.getInventory().getStackInSlot(0).getId()){}


    let speed = 0

    if (source.player) {
      speed = Math.max(4 - source.player.getAttributes().getValue('minecraft:generic.attack_speed'), 0)

      /**@type {Internal.ItemStack} */
      let equipment = getEquipment(source.actual, $EquipmentSlot.MAINHAND)

      if (equipment) {//稳定值
        let att = equipment.getAttributeModifiers($EquipmentSlot.MAINHAND).get(global.attributes.stable.get())

        // tell(att)
        let stable = 0
        if (!att.isEmpty()) {
          att.map((modifier) => {
            stable += modifier.getAmount()
          })
          let n = Math.random() + 0.5
          // if (n < 0) {
          //   n = 0.5 * n
          // }
          //tell(stable)
          event.setAmount(event.amount * ((((100 - stable) / 100) * n) + 1))
        }

      }


    }
    //  if (item.hasTag('forge:swords') || item.hasTag('forge:weapons') || item.hasTag('forge:tools')) {//获取武器速度来决定振动

    // speed = -(item.getItem().getAttributes('minecraft:generic.attack_speed').get(0).getAmount())
    //tell(isWater(event))









    // Client.player.tell(isPoison(event))

    let 首次攻击结算 = true



    if (typeof (isFire(event)) == "number") {//雷        使用attack方法时造成伤害时   似乎会自动减去原来的伤害

      AttModify(event, entity, source, "fire", event.amount * attackRatio)

    } else if (typeof (isDivine(event)) == "number") {//雷        使用attack方法时造成伤害时   似乎会自动减去原来的伤害 魔法伤害默认不受护甲 盔甲韧性影响

      if (event.source.type == "irons_spellbooks.divine_smite") {//排除再次乘以武器攻击力
        event.setAmount(event.amount * attackRatio /
          source.player.getAttributes().getValue("minecraft:generic.attack_damage")
        )//武器攻击力
      } else {
        event.setAmount(event.amount * attackRatio)//entityResistance(entity)*  魔法攻击无需计算物理抗性
      }
      // entity.invulnerableTime = 0
      // entity.attack(newSource(source.actual, newDamageType("kubejs", "divine")), Number(event.amount))
      // event.setCanceled(true)



      AttModify(event, entity, source, "divine", event.amount * attackRatio)

    } else if (typeof (isEnder(event)) == "number") {//雷        使用attack方法时造成伤害时   似乎会自动减去原来的伤害



      AttModify(event, entity, source, "ender", event.amount * attackRatio)

    } else if (typeof (isIce(event)) == "number") {//雷        使用attack方法时造成伤害时   似乎会自动减去原来的伤害


      AttModify(event, entity, source, "ice", event.amount * attackRatio)
    } else if (typeof (isPoison(event)) == "number") {//雷        使用attack方法时造成伤害时   似乎会自动减去原来的伤害


      AttModify(event, entity, source, "posion", event.amount * attackRatio)

    } else if (typeof (isLightning(event)) == "number") {//雷        使用attack方法时造成伤害时   似乎会自动减去原来的伤害


      AttModify(event, entity, source, "lightning", event.amount * attackRatio)

    } else if (typeof (isWater(event)) == "number") {//雷        使用attack方法时造成伤害时   似乎会自动减去原来的伤害

      AttModify(event, entity, source, "water", event.amount * attackRatio)

    } else if (typeof (isCall(event)) == "number") {//雷        使用attack方法时造成伤害时   似乎会自动减去原来的伤害

      AttModify(event, entity, source, "call", event.amount * attackRatio)

    } else if (source.type().msgId() == "player") {//玩家近战伤害 似乎会将其他伤害也判断为玩家&& isPlayer(event)&& isPlayer(event)

      event.setAmount((event.amount) * DamageValue(event, 'attack'))//重新计算puff的伤害<===== 性质 原版补充
      screenShaking(source.player, 5 + speed, 0.25 + speed / 30, "sub")
    } else if (source.type().msgId() == "explosion.player") {//爆炸伤害
      //玩家造成
      event.setAmount(event.amount * DamageValue(event, 'explosion'))
      entity.hurtToughness(event.amount * 0.1)
      setCrit(event.entity, 2)//暴击效果

      //注意 为攻击倍率
    } else if (source.type().msgId() == "arrow") {//重新计算远程的伤害&& isPlayer(event) 性质 原版补充
      screenShaking(source.player, 5 + speed, 0.25 + speed / 30, "sub")
      event.setAmount(event.amount * DamageValue(event, 'attack'))
    } else {
      首次攻击结算 = false
    }
    //tell(首次攻击结算)





    // Client.player.tell(source.type().msgId())
  }

}
let customizeDamage = (event, entity, type) => {//自定义伤害(自然伤害 区别于原版的无伤害来源)废弃
  //废弃铁魔法自带的元素抗性
  let crit = getCrit(entity)
  //tell(crit)





  if (!(type == 'magic'
    || type == 'freeze'
    || type == 'onFire'
    || type == 'dragonBreath'
    || type == 'fall'
    || type == 'drown'
    || type == 'lightningBolt'
    || type == 'lightning'
    || type == 'water'
    || type == 'ender'
    || type == 'divine'
    || type == 'posion'
    || type == 'fire'
    || type == 'ice'
  )) {//除了元素伤害其他伤害均受抗性影响

    //event.setAmount(physicsResistance(entity) * event.amount)
  }
  //tell(type)
  // tell(event.amount+"伤害值")
  if (type == 'lightning' || type == 'lightningBolt') {


    event.setAmount(resistance(entity, "kubejs:lightning_resistance") * event.amount)

    showText(event, entity, 112, 46, 185, (Math.floor(event.amount * 10) / 10).toString(), crit)

  } else if (type == 'ender' || type == 'dragonBreath') {



    event.setAmount(resistance(entity, "kubejs:ender_resistance") * event.amount)

    showText(event, entity, 255, 80, 255, (Math.floor(event.amount * 10) / 10).toString(), crit)


  } else if (type == 'water' || type == 'drown') {



    event.setAmount(resistance(entity, "kubejs:water_resistance") * event.amount)

    showText(event, entity, 47, 122, 220, (Math.floor(event.amount * 10) / 10).toString(), crit)


  } else if (type == 'fire' || type == 'onFire' || type == 'inFire' || type == 'lava') {



    event.setAmount(resistance(entity, "kubejs:fire_resistance") * event.amount)

    showText(event, entity, 255, 150, 0, (Math.floor(event.amount * 10) / 10).toString(), crit)


  } else if (type == 'divine') {


    event.setAmount(resistance(entity, "kubejs:divine_resistance") * event.amount)

    showText(event, entity, 255, 236, 110, (Math.floor(event.amount * 10) / 10).toString(), crit)


  } else if (type == 'call') {
    //tell(6)

    event.setAmount(resistance(entity, "kubejs:call_resistance") * event.amount)

    showText(event, entity, 95 * 1.2, 108 * 1.2, 125 * 1.5, (Math.floor(event.amount * 10) / 10).toString(), crit)


  } else if (type == 'posion' || type == 'magic') {


    event.setAmount(resistance(entity, "kubejs:divine_resistance") * event.amount)

    showText(event, entity, 0, 255, 160, (Math.floor(event.amount * 10) / 10).toString(), crit)


  } else if (type == 'ice' || type == 'freeze') {


    event.setAmount(resistance(entity, "kubejs:divine_resistance") * event.amount)

    showText(event, entity, 0, 255, 255, (Math.floor(event.amount * 10) / 10).toString(), crit)


  } else if (type == 'fall' || type == 'inWall') {


    event.setAmount(resistance(entity, "kubejs:divine_resistance") * event.amount)

    showText(event, entity, 255, 255, 0, (Math.floor(event.amount * 10) / 10).toString(), crit)


  } else {
    event.setAmount(physicsResistance(entity) * event.amount)

    showText(event, entity, 255, 255, 255, (Math.floor(event.amount * 10) / 10).toString(), crit)

  }
  return

  //let type = event.source.type().msgId()
  //
  //let knockback = 1//event.entity.getAttributes().getValue('minecraft:generic.armor_toughness')
  //
  //let armor = event.entity.getAttributes().getValue('minecraft:generic.armor')//护甲
  //
  ////注意 原版雷电受盔甲影响DROWN
  //if (
  //  type == 'magic'
  //  || type == 'freeze'
  //  || type == 'onFire'
  //  || type == 'dragonBreath'
  //  || type == 'fall'
  //  || type == 'drown'
  //
  //) {
  //
  //  event.setAmount(event.amount * (20 / (20 + armor)) * ((250 - knockback) / 250))
  //}
  //
  //if (type == '') {
  //
  //
  //
  //}else if(type == 'freeze'){}
  //else if(type == 'onFire'){}
  //else if(type == 'dragonBreath'){}
  //else if(type == 'fall'){}
  //else if(type == 'drown'){}
  //


  //<----------添加自定义的元素抗性

  // water_resistance
  //ender_resistance
  // ice_resistance
  // fire_resistance
  // natrue_resistanc
  //divine_resistanc



  //Client.player.tell(type)
}










//  }

//console.log(source.player.getAttributes().getValue("minecraft:generic.attack_speed"))

//  source.actual.setAttributeBaseValue('kubejs:shaking_intensity', 0.15+speed/5 + 0.001 * Math.random())//设置攻击振动

// source.actual.setAttributeBaseValue('kubejs:screen_shaking', 10 +speed+ 0.001 * Math.random())//时间  需改成time

//console.log(event.amount)  
/*
      let i=getEntityIndex("minecraft:generic.max_health")
    
     
      let health =event.entity.nbt["Attributes"][i]["Base"]//部分实体无最大生命值 用命令修改后才存在
      //entity.getAttributes().getValue("minecraft:generic.max_health")
     
     if(event.entity.nbt["Attributes"][i]["Modifiers"]){
     
     let multiple=1 + event.entity.nbt["Attributes"][i]["Modifiers"][0]["Amount"]//生命值倍数          有可能为null
     
     
     let realityMultiple= Math.pow(1.07,Math.log(multiple)/Math.log(1.077))
    
     let percentage = event.amount/120//百分比伤害  略微降低 1/120
    
    
     if(percentage>0.4){percentage=0.6*percentage/(percentage+0.2)}//伤害衰减  逼近0.6
     
     
     event.setAmount(health*percentage*realityMultiple)//修改造成伤害
    
    自然爆炸无法检测
     }
    */

