






/*

let playerTarget={}

NetworkEvents.dataReceived('target_2', event => {

    let uuid=event.data.getString('uuid')
    
    
    if (uuid == '0') {
    
    playerTarget[event.player.stringUuid] =undefined
    
    } else {
    
    playerTarget[event.player.stringUuid] = event.level.getEntity(uuid)
    
    }
    

    //getTarget(event.player)

})

let updateTarget = (player) => {

    player.sendData('target_1', {})

    // for (let i = 0; i < 99999999;i++){}

}
*/