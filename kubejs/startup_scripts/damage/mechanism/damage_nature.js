// @ts-nocheck
//let potion =Java.loadClass('net.minecraft.world.effect.MobEffectInstance')//导包 导入药水效果


//let damageType = Java.loadClass('net.minecraft.world.damagesource.DamageSource')

/*
ForgeEvents.onEvent('net.minecraftforge.event.entity.player.CriticalHitEvent',event=>{

global.crit(event)

})
*/



//ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingHurtEvent',event=>{





//event.source.actual

//let damage = getHealth()

//event.setAmount(0.1*damage)


//while(event.entity.nbt["Attributes"][i]["Name"]!="minecraft:generic.max_health"&&event.entity.nbt["Attributes"][i]){i++} //遍历得出生命值的索引   

//on_fire
//if(!event.entity.nbt["Attributes"][i]){return}//找不到时  停止

/*
let getActualIndex = (project) => {//返回攻击者的项目索引

  let i=0

  if(!source.actual.nbt["Attributes"][i]){return}
  
  while(source.actual.nbt["Attributes"][i]["Name"]!=project){
  
    i++

    if(!source.actual.nbt["Attributes"][i]){return}
  
  }

return i
}
*/


let Nature = (event) => {//无敌时间似乎会因为更高的伤害而被打断   应将环境伤害类型加入元素伤害 这样即可无需再次判断效果



  let entity = event.entity //给entity加上前缀event

  let source = event.source

  /**@type {Internal.LivingEntity} */
  let player = event.entity                //强转类型

  if (source.actual) return  //排除有攻击者的情况




  if ((event.source.type().msgId() == "inWall" || event.source.type().msgId() == "fall") && entity.isPlayer()) {//摔落伤害


    let health = player.getAttributes().getValue("minecraft:generic.max_health")




    let tounghness =natureResistance(player)// player.getAttributes().getValue("minecraft:generic.armor_toughness")

    event.setAmount((health + 10) * event.amount / 30 * tounghness /1.5)//修改造成伤害 降低摔落伤害


  }else if (source.type().msgId() == "lava" && entity.isPlayer()) {//玩家受伤

    stickTime(event)//添加附着冷却时间

    let intensity = 0


    if (!event.entity.getEffect("kubejs:fire") && entity.getRootData().getInt('sickTime1') % 4 == 0) {//javascripts的变量定义在if中为临时变量 只在if中生效

      event.entity.addEffect(new $potion("kubejs:fire", 40, 0, false, false))//给予效果

    } else if (event.entity.getEffect("kubejs:fire")) {//最大层数

      intensity = event.entity.getEffect("kubejs:fire").getAmplifier() + 1//加强效果

      event.entity.addEffect(new $potion("kubejs:fire", 40, Math.min(intensity, 20), false, false))

    }



    let health = player.getAttributes().getValue("minecraft:generic.max_health")

    let armor = player.getAttributes().getValue("minecraft:generic.armor")

    let tounghness = spellResistance(player,"irons_spellbooks:fire_magic_resist")//player.getAttributes().getValue("minecraft:generic.armor_toughness")

    event.setAmount(event.amount * (health + 10) / 30 * tounghness * ((20 + armor) / 20) * 200 / (200 + armor))//((20 + armor) / 20)为排除盔甲影响


//tell("  伤害"+event.amount)

  }

  if (( source.type().msgId() == "onFire") && entity.isPlayer()) {//玩家受伤  

    //onfire无视盔甲



    if (event.entity.getEffect("kubejs:fire")) {//javascripts的变量定义在if中为临时变量 只在if中生效

      let intensity = event.entity.getEffect("kubejs:fire").getAmplifier()//效果

      let time = event.entity.getEffect("kubejs:fire").getDuration()

      event.entity.addEffect(new $potion("kubejs:fire", time + 20, intensity, false, false))


    }



    let health = player.getAttributes().getValue("minecraft:generic.max_health")

    let armor = player.getAttributes().getValue("minecraft:generic.armor")
    let tounghness =spellResistance(player,"irons_spellbooks:fire_magic_resist")// player.getAttributes().getValue("minecraft:generic.armor_toughness")
    event.setAmount(0.8*event.amount * (health + 10) / 30 * tounghness * 200 / (200 + armor))


  }

  if ((source.type().msgId() == "hotFloor" ||source.type().msgId() == "inFire" )&& entity.isPlayer()) {//玩家受伤  //不受盔甲影响

    stickTime(event)//添加附着冷却时间//

    let intensity = 0


    if (!event.entity.getEffect("kubejs:fire") && entity.getRootData().getInt('sickTime1') % 4 == 0) {//javascripts的变量定义在if中为临时变量 只在if中生效


      event.entity.addEffect(new $potion("kubejs:fire", 40, 0, false, false))//给予效果


    } else if (event.entity.getEffect("kubejs:fire")) {//最大层数

      intensity = event.entity.getEffect("kubejs:fire").getAmplifier() + 1//加强效果

      event.entity.addEffect(new $potion("kubejs:fire", 40, Math.min(intensity, 10), false, false))

    }


    let health = player.getAttributes().getValue("minecraft:generic.max_health")

    let armor = player.getAttributes().getValue("minecraft:generic.armor")
    let tounghness = spellResistance(player,"irons_spellbooks:fire_magic_resist")//player.getAttributes().getValue("minecraft:generic.armor_toughness")
    event.setAmount(1.2*event.amount * (health + 10) / 30 * tounghness * 200 / (200 + armor))


  }


  if ((source.type().msgId() == "fallingBlock" || source.type().msgId() == "anvil") && entity.isPlayer()) {//玩家受伤  受盔甲影响






    let health = player.getAttributes().getValue("minecraft:generic.max_health")

    let armor = player.getAttributes().getValue("minecraft:generic.armor")

    let tounghness =natureResistance(player) //player.getAttributes().getValue("minecraft:generic.armor_toughness")

    event.setAmount(event.amount * (health + 10) / 30 * tounghness * (20 + armor) / 20 * 200 / (200 + armor))


  }

  if (source.type().msgId() == "freeze" && entity.isPlayer()) {

    let intensity = 0


    if (!event.entity.getEffect("kubejs:ice")) {//javascripts的变量定义在if中为临时变量 只在if中生效


      event.entity.addEffect(new $potion("kubejs:ice", 400, 0, false, false))//给予效果


    } else if (event.entity.getEffect("kubejs:ice")) {//最大层数

      intensity = event.entity.getEffect("kubejs:ice").getAmplifier() + 1//加强效果

      event.entity.addEffect(new $potion("kubejs:ice", 400, Math.min(intensity, 10), false, false))

    }

    let health = player.getAttributes().getValue("minecraft:generic.max_health")

    let armor = player.getAttributes().getValue("minecraft:generic.armor")

    let tounghness = spellResistance(player,"irons_spellbooks:ice_magic_resist")//player.getAttributes().getValue("minecraft:generic.armor_toughness")

    event.setAmount(event.amount * (health + 10) / 30 *tounghness * (20 + armor) / 20 * 200 / (200 + armor))



  }





  if ((source.type().msgId() == "starve" || source.type().msgId() == "drown") && entity.isPlayer()) {//玩家受伤  不受盔甲影响


    let health = player.getAttributes().getValue("minecraft:generic.max_health")

    let armor = player.getAttributes().getValue("minecraft:generic.armor")

    let tounghness = 1//player.getAttributes().getValue("minecraft:generic.armor_toughness")

    event.setAmount(event.amount * (health + 10) / 30 * tounghness) * 200 / (200 + armor)//修改造成伤害

  }


let level=getData(event.entity, 'int', 'level')


  if ((source.type().msgId() == "dryout" || source.type().msgId() == "fallingBlock" || source.type().msgId() == "drown" || source.type().msgId() == "anvil") && !entity.isPlayer()) {//针对怪物的环境伤害 未设定



    // let i = getEntityIndex("minecraft:generic.max_health", event)

    /*
    if(!event.entity.nbt["Attributes"][i]){return}
    
    while(event.entity.nbt["Attributes"][i]["Name"]!="minecraft:generic.max_health"){
    
      i++
       if(!event.entity.nbt["Attributes"][i]){return}
    
    } //遍历得出生命值的索引   
    
      */

    // let health = event.entity.nbt["Attributes"][i]["Base"]//部分实体无最大生命值 用命令修改后才存在event.entity.nbt["Attributes"][i]["Modifiers"]


    if (event.entity.nbt['ForgeData']['LEVEL']) { }


      let armor = player.getAttributes().getValue('minecraft:generic.armor')

      // let multiple = 1 + event.entity.nbt["Attributes"][i]["Modifiers"][0]["Amount"]//          有可能为null

      //let level = event.entity.nbt['ForgeData']['LEVEL']
      // let realityMultiple = Math.pow(1.065, Math.log(multiple) / Math.log(1.09))



      let base = 0

      if (level > 120) {

        base = Math.pow(1.06, 119) * (1 + 0.1 * (level - 120))

      } else {

        base = Math.pow(1.06, level - 1)

      }




      event.setAmount(base * event.amount * 20 / (20 + armor))//修改造成伤害

   

  }

  if ((source.type().msgId() == "freeze" && !entity.isPlayer())) {//冰冻伤害

    if (event.entity.nbt['ForgeData']['LEVEL']) {  }



      // stickTime(event)//添加附着冷却时间

      /*
        let i = getEntityIndex("minecraft:generic.max_health", event)
      
        let health = event.entity.nbt["Attributes"][i]["Base"]//部分实体无最大生命值 用命令修改后才存在
      
      
        if (event.entity.nbt["Attributes"][i]["Modifiers"]) {//修饰项
      
          let multiple = 1 + event.entity.nbt["Attributes"][i]["Modifiers"][0]["Amount"]//          有可能为null
      
      
          let realityMultiple = Math.pow(1.06, Math.log(multiple) / Math.log(1.09))
      
      
          let intensity = 0
      }
      */



      // let multiple = 1 + event.entity.nbt["Attributes"][i]["Modifiers"][0]["Amount"]//          有可能为null

     // let level = event.entity.nbt['ForgeData']['LEVEL']
      // let realityMultiple = Math.pow(1.065, Math.log(multiple) / Math.log(1.09))

      let base = 0

      if (level > 120) {

        base = Math.pow(1.04, 119) * (1 + 0.08 * (level - 120))

      } else {

        base = Math.pow(1.04, level - 1)

      }

      let intensity
      //修改造成伤害
      if (entity.block === 'minecraft:powder_snow') {//bug=> 实体只有脚部接触才会判断

        if (!event.entity.getEffect("kubejs:ice")) {//javascripts的变量定义在if中为临时变量 只在if中生效

          event.entity.addEffect(new $potion("kubejs:ice", 400, 0, false, false))//给予效果

        } else {//最大层数

          intensity = event.entity.getEffect("kubejs:ice").getAmplifier() + 1//加强效果

          event.entity.addEffect(new $potion("kubejs:ice", 400, Math.min(intensity, 10), false, false))
        }
      }

      event.setAmount(base * event.amount)


  


    // event.setAmount(realityMultiple * event.amount)//修改造成伤害



  }



  if ((source.type().msgId() == "lava" && !entity.isPlayer())) {//燃烧伤害
    /*
      let i = getEntityIndex("minecraft:generic.max_health", event)
      let health = event.entity.nbt["Attributes"][i]["Base"]//部分实体无最大生命值 用命令修改后才存在  获取到nan生命值的实体是否会报错?  undefined
      if (event.entity.nbt["Attributes"][i]["Modifiers"]) {//修饰项
        let multiple = 1 + event.entity.nbt["Attributes"][i]["Modifiers"][0]["Amount"]//          有可能为null
        let realityMultiple = Math.pow(1.06, Math.log(multiple) / Math.log(1.09))
        */
    if (event.entity.nbt['ForgeData']['LEVEL']) { }

      stickTime(event)//添加附着冷却时间

      let intensity = 0


      if (!event.entity.getEffect("kubejs:fire") && entity.getRootData().getInt('sickTime1') % 4 == 0) {//javascripts的变量定义在if中为临时变量 只在if中生效


        event.entity.addEffect(new $potion("kubejs:fire", 40, 0, false, false))//给予效果




      } else if (event.entity.getEffect("kubejs:fire")) {//最大层数

        intensity = event.entity.getEffect("kubejs:fire").getAmplifier() + 1//加强效果

        event.entity.addEffect(new $potion("kubejs:fire", 40, Math.min(intensity, 20), false, false))


      }

      let raise = 1 + 0.1 * intensity                     //Math.pow(1.1,intensity)

      // let multiple = 1 + event.entity.nbt["Attributes"][i]["Modifiers"][0]["Amount"]//          有可能为null

     // let level = event.entity.nbt['ForgeData']['LEVEL']
      // let realityMultiple = Math.pow(1.065, Math.log(multiple) / Math.log(1.09))

      let armor = player.getAttributes().getValue('minecraft:generic.armor')



      let base = 0

      if (level > 120) {

        base = Math.pow(1.04, 119) * (1 + 0.08 * (level - 120))//略微降低

      } else {

        base = Math.pow(1.04, level - 1)

      }





      event.setAmount(base * event.amount * raise * (armor + 20) / 20)//修改造成伤害







   



  }



  if (((source.type().msgId() == "hotFloor" || source.type().msgId() == "inFire" )&& !entity.isPlayer())) {//燃烧伤害

    if (event.entity.nbt['ForgeData']['LEVEL']) { }
      stickTime(event)//添加附着冷却时间


      //let i = getEntityIndex("minecraft:generic.max_health", event)

      /*
        if(!event.entity.nbt["Attributes"][i]){return}//排除无此项者
        
        while(event.entity.nbt["Attributes"][i]["Name"]!="minecraft:generic.max_health"){
        
          i++
           if(!event.entity.nbt["Attributes"][i]){return}
        
        } //遍历得出生命值的索引   
        */


      //let health = event.entity.nbt["Attributes"][i]["Base"]//部分实体无最大生命值 用命令修改后才存在

      /*
        if (event.entity.nbt["Attributes"][i]["Modifiers"]) {//修饰项
      
          let multiple = 1 + event.entity.nbt["Attributes"][i]["Modifiers"][0]["Amount"]//          有可能为null
      
      
          let realityMultiple = Math.pow(1.06, Math.log(multiple) / Math.log(1.09))
      
       }
      */
      let intensity = 0


      if (!event.entity.getEffect("kubejs:fire") && entity.getRootData().getInt('sickTime1') % 4 == 0) {//javascripts的变量定义在if中为临时变量 只在if中生效


        event.entity.addEffect(new $potion("kubejs:fire", 40, 0, false, false))//给予效果


        //event.entity.runCommandSilent(`effect give ${event.entity.id} minecraft:poison 1 0`)//无法执行
        //event.entity.runCommandSilent(`effect give ${event.entity.id} minecraft:poison 1 ${intensity}`)

      } else if (event.entity.getEffect("kubejs:fire")) {//最大层数

        intensity = event.entity.getEffect("kubejs:fire").getAmplifier() + 1//加强效果

        event.entity.addEffect(new $potion("kubejs:fire", 40, Math.min(intensity, 10), false, false))


      }



      // let multiple = 1 + event.entity.nbt["Attributes"][i]["Modifiers"][0]["Amount"]//          有可能为null

    //  let level = event.entity.nbt['ForgeData']['LEVEL']
      // let realityMultiple = Math.pow(1.065, Math.log(multiple) / Math.log(1.09))




      let base = 0

      if (level > 120) {

        base = Math.pow(1.04, 119) * (1 + 0.08 * (level - 120))

      } else {

        base = Math.pow(1.04, level - 1)

      }

      let raise = 1 + 0.1 * intensity                     //Math.pow(1.1,intensity)


      event.setAmount(1.2*base * event.amount * raise)//修改造成伤害
   

    //event.entity.getEffect("minecraft:poison").getAmplifier()
  }

  if ((source.type().msgId() == "onFire") && !entity.isPlayer()) {//火焰持续伤害


    if (event.entity.nbt['ForgeData']['LEVEL']) { }


      //stickTime(event)//添加附着冷却时间
      /*
          let i = getEntityIndex("minecraft:generic.max_health", event)//<----------
          let health = event.entity.nbt["Attributes"][i]["Base"]//部分实体无最大生命值 用命令修改后才存在  报错undefined
          if (event.entity.nbt["Attributes"][i]["Modifiers"]) {
            let multiple = 1 + event.entity.nbt["Attributes"][i]["Modifiers"][0]["Amount"]//          有可能为null
            let realityMultiple = Math.pow(1.06, Math.log(multiple) / Math.log(1.09)
            event.setAmount(realityMultiple * event.amount)//修改造成伤害
        }
      */

      if (event.entity.getEffect("kubejs:fire")) {//javascripts的变量定义在if中为临时变量 只在if中生效

        let intensity = event.entity.getEffect("kubejs:fire").getAmplifier()//效果

        let time = event.entity.getEffect("kubejs:fire").getDuration()

        event.entity.addEffect(new $potion("kubejs:fire", time + 20, intensity, false, false))//燃烧时保留火附着

      } else {
        //event.entity.addEffect(new potion('kubejs:fire', 20, 0, false, false))  //添加效果

      }

     // let level = event.entity.nbt['ForgeData']['LEVEL']


      let base = 0

      if (level > 120) {

        base = Math.pow(1.04, 119) * (1 + 0.08 * (level - 120))

      } else {

        base = Math.pow(1.04, level - 1)

      }




      event.setAmount(0.8*base * event.amount)//修改造成伤害


   

  }
  if ((event.source.type().msgId() == "inWall" || event.source.type().msgId() == "fall") && !entity.isPlayer()) {//摔落伤害


    // let i = getEntityIndex("minecraft:generic.max_health", event)


    //if (!event.entity.nbt["Attributes"][i]) { return }

    /*
    while(event.entity.nbt["Attributes"][i]["Name"]!="minecraft:generic.max_health"){
    
      i++
       if(!event.entity.nbt["Attributes"][i]){return}
    
    } //遍历得出生命值的索引   
    */
    if (event.entity.nbt['ForgeData']['LEVEL']) { }


      //let health = event.entity.nbt["Attributes"][i]["Base"]//部分实体无最大生命值 用命令修改后才存在
      //entity.getAttributes().getValue("minecraft:generic.max_health")
      /*
          if (event.entity.nbt["Attributes"][i]["Modifiers"]) {
      
            let multiple = 1 + event.entity.nbt["Attributes"][i]["Modifiers"][0]["Amount"]//生命值倍数          有可能为null
      
      
            let realityMultiple = Math.pow(1.07, Math.log(multiple) / Math.log(1.074))
       }
      */

      let percentage = event.amount / 60//百分比伤害  略微降低 1/120
      let health = player.getAttributes().getValue('minecraft:generic.max_health')
      let armor = player.getAttributes().getValue('minecraft:generic.armor')


      if (percentage > 0.4) { percentage = 0.6 * percentage / (percentage + 0.2) }//伤害衰减  逼近0.6


      event.setAmount(health * percentage * 20 / (20 + armor))//修改造成伤害




   
  }



  /*
  if ((event.source.type == "mob" 
    || event.source.type == "thorns" 
    || event.source.type == "witherSkull" 
    || event.source.type == "arrow" 
    || event.source.type == "clay_golem" 
    || event.source.type == "explosion.player") 
    && !entity.isPlayer()
    &&event.source.actual) {//怪物伤害加成  普通




    if (event.source.actual.nbt['ForgeData']['LEVEL']) {



      let level = event.source.actual.nbt['ForgeData']['LEVEL']

      let attack = 0

      if (level > 110) {

        attack = Math.pow(1.06, 109) * (1 + 0.1 * (level - 110))

      } else {

        attack = Math.pow(1.06, level - 1)

      }




      event.setAmount(event.amount * attack)







    }



  }


  if ((event.source.type == "generic" 
    || event.source.type == "indirectMagic" 
    || event.source.type == "sonic_boom" 
    || event.source.type == "magic") 
    && !entity.isPlayer()
    &&event.source.actual) {//怪物伤害加成  无视护甲




    if (event.source.actual.nbt['ForgeData']['LEVEL']) {



      let level = event.source.actual.nbt['ForgeData']['LEVEL']


      event.setAmount(event.amount * (1 + level * 0.1))

    }






  }
*/


}
