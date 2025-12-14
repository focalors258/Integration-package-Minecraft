NetworkEvents.dataReceived('openDan', e => {



openMenu(e.player,102)



tell(34534534)



})



let initDanLocking = (player) => {

 if (areData(player, 'danLocking')) {

      player.sendData('danLocking', {

         data: getData(player, $List, 'danLocking')

      })


   }



}




