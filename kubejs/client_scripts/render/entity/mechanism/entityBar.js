NetworkEvents.dataReceived('entityBar', e => {

    let type = e.data.getInt('type')
    let id = e.data.getInt('entity')
    let level = e.data.getInt('level')

    let entity = e.level.getEntity(id)

    if (entity) {
        if (type == 1) {
            entity.setDataBoolean('elite', true)
        } else if (type == 2) {
            entity.setDataBoolean('boss', true)
        }

        entity.setDataInt('level', level)

    }

})









