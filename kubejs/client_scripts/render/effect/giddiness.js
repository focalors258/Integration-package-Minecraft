



NetworkEvents.dataReceived('timeStagnate', e => {

    let t = e.data.getInt("time")
    let l = e.data.getFloat("intensity")

    addTimeStagnate(t, l)
    speedUpTick=Date.now()
    speedUpTickSpace = 1000 / (20 - l)//100//Math.pow(50*l,0.8)
    

    
  //  tell(speedUpTickSpace)
    
})

//addTimeStagnate(999999,2)


NetworkEvents.dataReceived('addSmashEffect', e => {


   addTimeStagnate(e.data.getInt("time"), 0)
  //tell(giddinessTime)
    if (e.data.getInt("time") > 15) {
        setMoveFOV(1600, 200)//广角效果
        FOVTimeEnd = Date.now() + 500
    }




})





NetworkEvents.dataReceived('addGiddiness', e => {


    $ShaderManager.addEffect("giddiness", "integration_package_core:shaders/post/giddiness.json")


    giddinessTime = Dates.tickCount + e.data.getInt("time")
//tell(e.data.getInt("time"))
  
})

let giddinessTime = 0

let giddinessRender = (event) => {//模糊效果




    if (event.stage == RenderJSLevelRenderStage.AFTER_LEVEL) {

        $ShaderManager.renderEffect("giddiness", 0, 0, p => {
            // tell($Mth.lerp(Client.player.age-1,Client.player.age,event.getPartialTick()))

            p.getGlValue("Radius1").set(0);
            p.getGlValue("Radius2").set(0.3);     // float用float值(float) mc.player.tickCount%30/30
            p.getGlValue("Amount").set(Math.min(100, 5 * Math.max(0, giddinessTime - $Mth.lerp(event.getPartialTick(), Dates.tickCount - 1, Dates.tickCount))));


        })


    }




}























