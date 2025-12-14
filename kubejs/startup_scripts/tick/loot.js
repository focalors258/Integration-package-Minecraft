ForgeEvents.onEvent("com.integration_package_core.event.Event.LootDropEvent", e => {
    //tell(e.getLootTable().getLootTableId())
    if (e.entity) {

        let entity = e.entity

        if (e.entity.areData("host")||e.entity.areData("camp_entity")) {

            e.setCanceled(true)

        }

        goldLoot(entity)


    }







})