//onEvent()


ForgeEvents.onEvent('net.minecraftforge.event.TickEvent', event => {


    //event.getListenerList().register()


    //console.log(5)











})


ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingExperienceDropEvent', e => {

    //tell(e.setCanceled(true))


})

ForgeEvents.onEvent("net.mehvahdjukaar.moonlight.api.events.forge.DropItemOnDeathEvent", e => {

    //tell(45646)
    //
    //e.setCanceled(true)





})




ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingEvent$LivingTickEvent', e => {


    //tell(e.entity)
    if (!e.entity.isPlayer()) {

        let entity = e.entity
        /**@type {Internal.LivingEntity} */
        let player = entity.level.getPlayers()[0]

        spwanEntityRetrieve(e, e.entity)

        callEntity(entity)
        
        villageEcology(entity)
        
        //注意  getDataBoolean方法性能消耗极大
        if (player&&player.getDataBoolean("stop") && !e.getEntity().isPlayer()) {

            e.setCanceled(true)

        }

     
        // e.setCanceled(true)
    }

})
