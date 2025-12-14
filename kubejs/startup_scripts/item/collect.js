



ForgeEvents.onEvent("net.minecraftforge.event.entity.player.EntityItemPickupEvent", e => {


//tell(e.getItem().remove("discarded"))


    if (e.getItem().type == "kubejs:exp") {
    
    
    
    
    
    e.getItem().remove("discarded")
    
    }


})