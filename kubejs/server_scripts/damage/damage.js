
Java.loadClass('net.minecraft.world.entity.projectile.Arrow')

//global.goalEntity = {}


let c = Java.loadClass("net.minecraftforge.client.event.ViewportEvent")

let biome = Java.loadClass('net.minecraft.world.level.biome.BiomeSource')






EntityEvents.death(event => {//显示获得经验


  entityExp(event)//获取经验 并同步客户端

  campEntityDie(event)//阵营实体

  copyKillBoss(event.entity)

lootAdd(event,event.player)
})


//EntityJSEvents.addGoalSelectors()


//EntityJSEvents.addGoals('illager_additions:shogun', event => {



//event.removeGoal(''

//console.log(3422)

//console.log(event.entity)

//Client.player.tell(event.entity)


//ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingHurtEvent', event => {
//
//
//Client.player.tell(event.amount)
//
//
//
//})

//})
EntityEvents.death(event => {


  let source = event.source



  /**@type {Internal.Entity} */
  let player = source.player
  /**@type {Internal.LivingEntity} */
  let entity = event.entity
  /**@type {Internal.ServerLevel} */
  let level = event.level


// let killData = new $LootParams$Builder(level)
//   .withParameter($LootContextParams.THIS_ENTITY, entity)
//   .withParameter($LootContextParams.ORIGIN, entity.pos)
//   .withParameter($LootContextParams.DAMAGE_SOURCE, event.source)
//   .withOptionalParameter($LootContextParams.KILLER_ENTITY,  event.source.actual)
//   .withOptionalParameter(
//     $LootContextParams.DIRECT_KILLER_ENTITY, event.source.actual);
  //tell(event.server.lootData.getLootTable(event.entity.getLootTable()).getRandomItems(killData.create($LootContextParamSets.ENTITY)))




  //tell(entity.)






})

ItemEvents.dropped(e => {


  tell(e.item)


})



ServerEvents.entityLootTables(e => {


  tell('634524')



})

//主要处理信息更新
EntityEvents.hurt(event => {//伤害事件似乎只能存在一个 如果有多个仅执行一个   应把反应模块写伤害事件外  使用调用


  let source = event.source

  /**@type {Internal.LivingEntity} */
  let entity = event.entity
  /**@type {Internal.Entity} */
  let player = source.player


  //event.server.tell(  '伤害'+event.damage )
//event.exit()
  //entity.scriptType

  //event.entity.XRot
  //let item = source.player.getItemInHand('main_hand').nbt
//tell(player.level.dayTime()%24000<12000)
  //Reaction(event)


  if (entity.isLiving()) {


    //Reaction(event)
    if (source.actual) {
      attFind(source, entity)//目标
    }



    barCool(event, entity)//boss条



  }
  //tell(areData(entity, 'copy_host'))
  immune(event)//摔落免疫   服务端取消伤害为无反馈效果  启动事件取消伤害有效果

  notRetreat(entity)//免疫击退

  //et abc=undefined


  //
  let ui = Java.loadClass("net.minecraft.world.MenuProvider")
  let ui1 = Java.loadClass("net.minecraft.world.entity.player.Inventory")

  let ui2 = Java.loadClass('net.minecraft.world.inventory.LecternMenu')

  let ui3 = Java.loadClass("net.minecraft.world.inventory.MenuConstructor")


  //const ChestCavityScreenHandler = Java.loadClass("net.tigereye.chestcavity.ui.ChestCavityScreenHandler")

  let a = Java.loadClass('net.minecraft.world.entity.player.Player')

  let b = Java.loadClass('net.minecraft.world.entity.animal.Chicken')




  //event.server.tell(entity.level.getEntitiesOfClass(entity.level.createEntity(), AABB.of(entity.x-5,entity.y-5,entity.z-5,entity.x+5,entity.y+5,entity.z+5)) )

  // const SimpleMenuProvider = Java.loadClass('net.minecraft.world.SimpleMenuProvider')
  if (false) {


    /**@type {Internal.MenuProvider} */
    let menu = new $Menu((i, playerInventory, player) => {

      return new $LecternMenu(101)//new LecternGui(i, playerInventory, player)

    }, '46756')

    source.player.openMenu(menu)

    //打开界面时更新数据


    let a = new $puffishExperience('puffish_skills:combat')

    let bossName = '45656'

    let name = bossName

    let projects = 10

    //let star = []

    for (let i = 0; i < projects; i++) {

      // setData(event.source.player, 'int', name + '_star_' + i)//xxx_star_0  boss名称 star 难度
      player.getRootData().put('star_' + name, [34, 45, 452, 45])

    }


    return

    source.player.sendData('puffish_expLevel', { value: a.getLevel(event.source.player) })//玩家等级

    source.player.sendData('copy', {
      name: '烈焰竞技场',

      star: [1, 3, 2, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,],//player.getRootData().get('star_'+name),
      describe: 'retgsdgyertg',
      projects: projects,
      elite: true,
      boss_level: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,],
      unlock_level: [3, 3, 100, 300, 30, 3, 3, 3, 3, 3, 3, 30, 300, 3, 3, 3, 3, 3,],
    })


    // let abc = [0, 0, 50, 0]

    // player.getRootData().put('abc', abc)


    // event.server.tell('666  ' + player.getRootData().get('abc'))






  }

  //Text.translatable("Chest Cavity")
  //  ui(0, new ui1(source.player), source.player).clicked
  // let Identifier = Java.loadClass("java.util.IdentityHashMap")
  //source.player.openMenu(new ui(() => { new ui2(1) }),)


  //event.server.tell(event.level.data))







  /**@type {Internal.Entity}*/
  let entity1 = entity

  /**@type {Internal.Mob} */
  let entity2 = entity


  //let goal = Java.loadClass('target')

  //let $NearestAttackableTargetGoal = Java.loadClass("net.minecraft.world.entity.ai.goal.target.NearestAttackableTargetGoal")

  let $Zombie = Java.loadClass('net.minecraft.world.entity.monster.Zombie')
  let goal2 = Java.loadClass("net.minecraft.world.entity.ai.goal.Goal$Flag")
  let goal3 = Java.loadClass("net.minecraft.world.entity.ai.goal.Goal")
  // entity2.goalSelector.removeGoal()
  //event.cancel(-1)



  // entity2.targetSelector.addGoal(3,
  //   new $NearestAttackableTargetGoal(entity2, $Zombie, 10, true, false, null)
  // )

  if (source.type().msgId() == "player") {

    //event.source.player.setScreen(new LecternClass(new LecternMenuClass(101), new inventory(event.player), '6786745'))
  }

  //event.level.getPlayers().sendData('particle')




  //let a= new uuid(0,0)



  //entity.getNextEntityPos


  // entity.setPose(entity.getPose())
  // let entity1 = entityevent.entity.isMonster()
  //event.server.tell(uuid.randomUUID())


  //if(source.actual&&source.actual.type=='upgrade_aquatic:thrasher'){
  //
  //console.log(entity)
  //
  //}
  //entity.remove('discarded')

  //source.player.setPitch(50)
  //source.player.setYaw(40)

  //qqlet a =event.level.createEntity('')
  //let a=['dgdtrhfth','sgtfdrgret'].value().biomeCategory.toString()

  //event.server.tell(entity.block.biomeId )
  // event.server.tell( )

  //console.log(entity.level.getBiome(entity.block.pos).toString().match(/[\w\:]+(?=\])/))

  //let abc = Java.loadClass('net.minecraft.world.entity.ai.behavior.StartAttacking')entity.level.getBiome(entity.block.pos)


  //entity.level.

  // event.server.tell(source.type().msgId() )
  //entity.


  //entity.getUuid()


  //event.server.tell( entity.getBlockStateOn().getBlock().getId()=='minecraft:dirt')


  //event.server.tell(exampleData(event, entity, 'camp_entity',  64))

  //event.server.tell(areData(entity,'camp_entity')+'  ')

  // let distance = entity.distanceToEntity(entity1)

  //randomTp(entity,event,1,200)





  if (source.type().msgId() == 'genericKill' && entity.isPlayer()) {//创造玩家免疫伤害
    //event.ca
    event.cancel()

  }

  //event.server.tell( entity.block.offset(239, -61, -62))

  //entity.fall

  //event.entity.setX()getClassification(false).
  // event.server.tell(global.goalEntity[entity.getRootData().getString('isTrace')])



  //if (entity.getRootData().contains('steamAtt')) { }
  //判断是否有此标签

  //event.server.tell( entity.getRootData().getInt('steamAtt'))



  //entity.remove('discarded')

  // let crit = source.player.getAttributes().getValue('l2artifacts:crit_rate')+'  '+source.player.getAttributes().getValue('kubejs:crit_rate')

  //event.server.tell(crit)
  // /**@type {Internal.LivingEntity} */
  // let entitys=event.level.getPlayerByUUID(event.source.actual.uuid)

  // event.server.tell( event.level.players[0].x)

  //entitys.attack(7)
  //event.source.actual.playSound('entity.villager.hurt')

  //event.player.setx
  //event.server.tell(event.entity.monster)

  //event.server.tell(event.entity.getRootData().getDouble)

  //event.server.tell(event.entity.frame)

  //console.log(event.entity.type)
  //event.entity.getTags()

  //let pos =(new blockPos(2,6,6))
  //let a=new Vec3(1,0,0)

  //event.entity.move(moveType.PLAYER,a)

  //event.entity.distanceToEntity(event.player)
  //event.server.tell('5')
  //event.server.tell(event.entity.distanceToEntity(player))
  //if(entity.getRootData().getString('bossBar1', oldHealth-health)){}distance

  //entity.level.getEntitiesWithin(AABB.of(entity.x - 3, entity.y - 1, entity.z - 3, entity.x + 3, entity.y + 3, entity.z + 3)).forEach(players => {

  /*
  /** event.source.type
  *@param {Internal.ResourceKey <Internal,DamageType>} damageType
  *@param {Player} player
  *@returns
  
  let getOrSource =(damageType, player)=>{
  
  return player.damageSources().source(  damageType,  player)
  
  
  }
  
  
  event.entity.attack(getOrSource(damageType.LAVA,event.player),523)
  */
  // event.server.tell(event.source.type)



  //event.level.spawnParticles('big_smoke',false,event.entity.x,event.entity.y,event.entity.z,1,1,1,10,999)

  /*
  let x=Math.random()*2-1
  
  let z=Math.random()*2-1
  
  
  let a= Client.particleEngine.createParticle('blue_skies:dust',event.entity.x-x,event.entity.y,event.entity.z-z,0,1000,0)
  
  a.scale(4)
  
  a.move(x,0,y)
  */

  //event.level.playSound(null,entity.x,entity.y,entity.z,'minecraft:entity.enderman.teleport','ambient',100,100)

  //event.server.tell(event.entity.getRootData().getInt('sickTime2'))blue_skies:dust

  //event.server.tell(event.source.type)//event.level.entitiesevent.level.getPlayers()

  //event.server.tell(entity.level.getEntitiesWithin(AABB.of(entity.x - 3, entity.y - 1, entity.z - 3, entity.x + 3, entity.y + 3, entity.z + 3))[0])






  //let a=Java.loadClass('')



  //.addFreshEntity()(`/summon aether:blue_swet -183 -54 -47`)

  // event.source.player.paint[Symbol]



  //event.server.schedule( event.player,  callback=> {
  //let number = callback.time / 1000event.player.rayTrace(30).entity

  if (source.actual && source.actual.isPlayer()) {
    //  console.log(event.entity.type + ": " + event.entity.getName().getString())//显示怪物名字



    //event.server.tell(source.player.getItemInHand('main_hand').getItem().getAttributes('minecraft:generic.attack_speed').get(0).getAmount())

    // event.server.tell(source.player.getItemInHand('main_hand').hasTag('forge:swords')||source.player.getItemInHand('main_hand').hasTag('forge:weapons'))





    //if(source.player.getItemInHand('main_hand').isDamaged()){}
    // let blade  = event.level.createEntity("cataclysm:flame_strike").getAttributeModifiers('mainhand')
    ////blade.setowner(player)
    ////blade.setDamage(10)
    ////blade.copyPosition(player)
    //blade.setRadius(2000)
    //
    //
    //blade.setX(entity.x)
    //blade.setY(entity.y + 3.5)
    //blade.setZ(entity.z)
    // //半径
    //// 距离爆炸时间
    ///  blade.setDuration(20)
    // blade.spawn()



  }


  /*
    event.source.player.paint({//数组
      'rectangle': {//自定义命名
        'type': 'rectangle',
        'x': 100,
        'y': 0,
        //alignX: 'center',
        //alignY: 'center',
        'w': 60,
        'h': 40,
        // Draw: 'always',
        // texture: 'kubejs:image/remake/' + number + '.png'
      }
      ,
      right_: { type: 'rectangle', x: 12, y: 0, z: 23, alignX: 'center', alignY: 'center', w: 12, h: 12, moveX: -100 }
  
  
  
    })
  */


})


/*
  if (false) {//source.actual && source.actual.isPlayer()
    //  // @type {Internal.Mob} 
    let summoner = event.level.createEntity('minecraft:shulker_bullet')

    summoner.setX(entity.x)
    summoner.setY(entity.y + 3.5)
    summoner.setZ(entity.z)



    // let goal = summoner.getGoalSelector().

    // summoner.goalSelector.removeAllGoals()


    summoner.setTarget(entity)//设置攻击目标
    //new abc(,).

    //event.server.tell(summoner.getTarget())
    //summoner.setTarget(summoner.getTarget())

    //entity.goalSelector.removeAllGoals()

    global.goalEntity[entity.uuid] = entity

    let goal = summoner.goalSelector.getAvailableGoals()//.getGoal()
    //event.server.tell(summoner.goalSelector.getAvailableGoals().toString())
    //

    //summoner.targetSelector.addGoal(0,goal)



    event.level.addFreshEntity(summoner)




    summoner.getRootData().putString('goal', entity.stringUuid)
  }
*/