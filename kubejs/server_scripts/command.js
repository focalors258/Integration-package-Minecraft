
ServerEvents.command(e => {




    if (e.input == 'kubejs reload startup_scripts') {



       e.server.runCommand(`kebejs reload client_scripts`)

         e.server.runCommand(`kebejs reload server_scripts`)
        


        e.server.tell('已全部重载')
    }


})


ServerEvents.commandRegistry(e => {






})