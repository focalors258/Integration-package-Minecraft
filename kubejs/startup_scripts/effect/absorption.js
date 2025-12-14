let absorptionUpdate = (event, entity) => {//护盾更新

  let amplifier = Math.max(0, entity.nbt['AbsorptionAmount'] - event.amount)
//tell(entity.nbt['AbsorptionAmount'])
  entity.level.getPlayers().sendData('absorption', {//无法使用客户端玩家进行发送
    entity: entity.getId(),
    value: amplifier,
    name: 'set'
  })

  setData(entity, 'int', 'absorption_amplifier', amplifier)

  if (amplifier <= 0) {//如果存在效果时  护盾为0清除效果

    event.entity.getRootData().remove('absorption_amplifier')//缓存

    entity.removeEffect('kubejs:absorption')
    
    entity.level.getPlayers().sendData('absorption', {//无法使用客户端玩家进行发送
      entity: entity.getId(),
      name: 'end'
    })

  }





}


let absorptionBegin = (entity, effect, event, amplifier) => {//开始



  let oldAmplifier = getData(entity, 'int', 'absorption_amplifier')

  oldAmplifier = typeof oldAmplifier == 'number' ? oldAmplifier : -1

  if (effect.getDescriptionId() == 'effect.kubejs.absorption' && amplifier > oldAmplifier) {//护盾效果

    entity.level.getPlayers().sendData('absorption', {//音乐
       name: 'sound'
    })

    entity.level.getPlayers().sendData('absorption', {//无法使用客户端玩家进行发送
      entity: entity.getId(),
      name: 'begin'
    })

    setData(entity, 'int', 'absorption_amplifier', amplifier)//缓存  效果

    setAbsorption(event.entity, getAbsorption(event.entity) + amplifier - oldAmplifier)//不允许二次获取


  }





}


let absorptionEnd = (effect, entity) => {//结束




  if (effect.getDescriptionId() == 'effect.kubejs.absorption') {//护盾效果

    let amplifier = effect.getAmplifier()


     entity.level.getPlayers().sendData('absorption', {//无法使用客户端玩家进行发送
      entity: entity.getId(),
      name: 'end'
    })
    
    
    setAbsorption(entity, getAbsorption(entity) - (amplifier + 1))

    entity.getRootData().remove('absorption_amplifier')


  }



}









