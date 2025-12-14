




ForgeEvents.onEvent('net.minecraftforge.event.entity.living.MobEffectEvent$Added', event => {
  //Client.player.tell(String(event.getListenerList().getListeners(0) ))
  //Client.player.tell(  event.getEffectInstance().getEffect().displayName)
  let effect = event.getEffectInstance()

  let amplifier = effect.getAmplifier()

  let entity = event.entity

  absorptionBegin(entity,effect,event,amplifier)
  //Client.player.tell( oldAmplifier )


})



ForgeEvents.onEvent('net.minecraftforge.event.entity.living.MobEffectEvent$Expired', event => {

  //Client.player.tell(event.getSound())
  // Client.player.tell(event.getEffectInstance().getDescriptionId())
let entity=event.entity

  let effect = event.getEffectInstance()

  //Client.player.tell('end')
  
  absorptionEnd(effect,entity)


})
