let EntityDamage = (event) => {

  let entity = event.entity //给entity加上前缀event

  let source = event.source

  // /**@type {Internal.LivingEntity} */

  // /**@type {Internal.Player} */
  let player = event.entity






  if ((event.source.type().msgId() == "mob"
    || event.source.type().msgId() == "thorns"
    || event.source.type().msgId() == "witherSkull"
    || event.source.type().msgId() == "arrow"
    || event.source.type().msgId() == "clay_golem"
    || event.source.type().msgId() == "explosion.player"
    || event.source.type().msgId() == "fireball")
    && !isPlayer(event)
    && event.source.actual) {//怪物伤害加成  普通




    if (areData(event.source.actual, 'level')) {

      let level = getData(event.source.actual, $Int, 'level')

      // let level = event.source.actual.nbt['ForgeData']['LEVEL']

      let attack = 1

      if (event.source.actual.type != 'cataclysm:ignis' &&
        event.source.actual.type != 'eeeabsmobs:guling_sentinel' &&
        event.source.actual.type != 'eeeabsmobs:nameless_guardian'
      ) {
        if (level > 110) {

          attack = Math.pow(1.0535, 109) * (1 + 0.1 * (level - 110))

        } else {

          attack = Math.pow(1.0535, level - 1)

        }
      }

      let randomAtt = 0.9 + 0.2 * Math.random() //随机伤害


      event.setAmount(randomAtt * event.amount * attack)


      if (event.source.type == "explosion.player" && event.entity && event.entity.isPlayer()) {//怪物爆炸屏幕振动

        // player.setAttributeBaseValue('kubejs:shaking_intensity', 1 + 0.01 * Math.random())//设置攻击振动

        //player.setAttributeBaseValue('kubejs:screen_shaking', 20+0.1*Math.random())

        entity.sendData('video', {//给所有玩家客户端的实体添加仅做标签判定的nbt(传入的为服务端)
          value:1,//
          name: 'intensity',
        })//振动强度
        entity.sendData('video', {//给所有玩家客户端的实体添加仅做标签判定的nbt(传入的为服务端)
          value: 25,//
          name: 'time',
        })//振动时间

      }

    }



  }


  if ((event.source.type().msgId() == "generic"
    || event.source.type().msgId() == "indirectMagic"
    || event.source.type().msgId() == "sonic_boom"
    || event.source.type().msgId() == "magic")
    && !isPlayer(event)
    && event.source.actual) {//怪物伤害加成  无视护甲




    if (areData(event.source.actual, 'level')) {



      let level = getData(event.source.actual, $Int, 'level')//event.source.actual.nbt['ForgeData']['LEVEL']


      event.setAmount(event.amount * (1 + level * 0.1))

    }






  }


  if (event.entity.type === "false") {//村民伤害限制   置于造成环境伤害上方可优先执行设置伤害
    if (event.source.actual.isPlayer()) {
      event.setAmount(Math.pow(event.amount, 0.5))
    } else {

      event.setAmount(Math.pow(event.amount, 0.2))

    }




  }

  if (event.entity.type === "kubejs:magic_crystal") {//召唤物伤害限制   置于造成环境伤害上方可优先执行设置伤害


    event.setAmount(1)


    // event.add('kubejs:magic_crystal','minecraft:generic.max_health',5)


  }
}