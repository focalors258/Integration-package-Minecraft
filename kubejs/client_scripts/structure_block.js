NetworkEvents.dataReceived('structure_block', e => {

let pos=e.data.get('pos')

    e.level.getBlock(pos[0],pos[1],pos[2]).setEntityData(e.data.getCompound('data'))



//tell(e.data.getCompound('data'))






})