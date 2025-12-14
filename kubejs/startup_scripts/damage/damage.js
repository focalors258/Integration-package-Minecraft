//特别注意  部分模组实体调用level时 有几率会报错! Error when handling native event: java.lang.NultPointerException: Cannot invoke"Obiect.getClassO" because "obi" is null
//特别注意  部分模组实体调用level时 有几率会报错! Error when handling native event: java.lang.NultPointerException: Cannot invoke"Obiect.getClassO" because "obi" is null
//特别注意  部分模组实体调用level时 有几率会报错! Error when handling native event: java.lang.NultPointerException: Cannot invoke"Obiect.getClassO" because "obi" is null
//特别注意  部分模组实体调用level时 有几率会报错! Error when handling native event: java.lang.NultPointerException: Cannot invoke"Obiect.getClassO" because "obi" is null
//特别注意  部分模组实体调用level时 有几率会报错! Error when handling native event: java.lang.NultPointerException: Cannot invoke"Obiect.getClassO" because "obi" is null
//特别注意  部分模组实体调用level时 有几率会报错! Error when handling native event: java.lang.NultPointerException: Cannot invoke"Obiect.getClassO" because "obi" is null
//注意  大多数string nubone类型的返回值实际类型为Object
//注意  getEntity() 可以使用实体id获取实体  在服务端中需要用uuid获取  在客户端中需要用getId()
//





/*
ForgeEvents.onEvent('net.minecraftforge.event.entity.player.CriticalHitEvent',event=>{

global.crit(event)

})
*/

//let source = Java.loadClass()


/*
let is=(event)=>{
      if( event.source.type=="irons_spellbooks."
        ||event.source.type=="irons_spellbooks."
        ||event.source.type=="irons_spellbooks."
        ||event.source.type=="irons_spellbooks."
        ||event.source.type=="irons_spellbooks."
        ||event.source.type=="irons_spellbooks."
        ||event.source.type=="irons_spellbooks."
        ||event.source.type=="irons_spellbooks."
      ){return true}
      
      
      return false 
}
*/
//event.setNewTarget(null)//应使用
//entity2.setTarget(null)//不能使用         崩溃
//event.setCanceled(true)//设置true会锁定当前目标
//
//priority:1080   
const DamageEvent = {}
//priority:1080   
const DamageEventList = {}

DamageEventList.reaction = []

DamageEvent.reaction = function (event) {

  DamageEventList.reaction.push(event)

}


DamageEvent.reaction(event => {


  // 

  let player = event.data.source.player

  reaction_star_rule(player, event)








  let ruleList = getData(player, $List, 'star_user_rule')



  if (player && getData(player, $Int, 'copy_rangeUpdate') && ruleList) {


    getKeyAndValue(ruleList.rule).forEach(([type, rule], index) => {
      //+ player.getRootData()['star_rule'][type]['data']['present']

      if (type == 'reaction' && event.reaction == rule.data.type) {




      }

    })

  }










})


ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingDamageEvent', event => {//伤害事件




  let entity = event.entity //给entity加上前缀event

  let source = event.source



  if (!(entity.isLiving())) return//基本条件 实体是活的
  //Client.player.tell( String(event.amount))

  absorptionUpdate(event, entity)//更新客户端护盾

  let type = event.source.type().msgId()
  //tell(event.amount)

  if (event.source &&
    event.source.actual &&
    event.source.actual.isLiving() &&
    !areData(source.actual, 'projectile') &&
    !areData(entity, 'projectile')) {

    //tell(event.amount)

    if (source.actual.isPlayer()) {
      att_star_rule(source.player, event.entity)

    }
    // divineHeal(event, entity)//治



    //tell(entity)

  }

  customizeDamage(event, entity, type)





  //tell(3)







  if (entity.isPlayer()) {
    /**@type {Player} */
    let player = entity

    //  tell(player.getChestArmorItem().nbt['Damage'])

  }

  //entity.getRootData()

  //console.log(Client.player.nbt)


  setReactionValue(entity, 0)
  setCrit(entity, 0)

  //event.setCanceled(true)

})

ForgeEvents.onEvent('net.minecraftforge.event.entity.player.PlayerInteractEvent$LeftClickEmpty', e => [

  //Client.player.tell(e.getEntity())


])



ForgeEvents.onEvent('net.minecraftforge.event.entity.player.CriticalHitEvent', event => {


  event.setResult('deny')//取消原版暴击事件  自定义的不取消


})


//let $PriestEntity=Java.loadClass('io.redspace.ironsspellbooks.entity.mobs.wizards.priest.PriestEntity')
//'io.redspace.ironsspellbooks.entity.mobs.wizards.priest.PriestEntity'

ForgeEvents.onEvent("net.minecraftforge.event.entity.living.LivingAttackEvent", event => {

  if (event.source.type().msgId() == "inWall" || event.source.type().msgId() == "fall") {
    if (event.entity.getEffect("kubejs:fall_immune") || event.entity.type == "kubejs:magic_crystal") {


      event.setCanceled(true)




    } else if (event.entity.isPlayer()) {

      /**@type {Player} */
      let player = event.entity
     // tell()
      
      if (player.animationEntity.animation == "air_att2" ||
        player.animationEntity.animation == "air_att1" ||
        (player.animationEntity.animation == "air_att3" && animationTime(player.animationEntity, 0, 8))) event.setCanceled(true)

    }



  }











  //tell(event)
})



//主要处理伤害计算 前发生
ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingHurtEvent', event => {//受伤事件   同时受到环境伤害时空手攻击会丢失伤害


  // 
  //tell(event.entity.getDataString("type"))
  // return







  let source = event.source
  // console.log(isFire(event))
  // console.log(isLightning(event))
  // console.log(isCall(event))
  // console.log(isWater(event))
  // console.log(isDivine(event))
  // console.log(isEnder(event))
  // console.log(isPoison(event))
  //tell(source.type().msgId())
  let entity = event.entity

  /**@type {Internal.LivingEntity} */
  let attacker = event.source.actual
  /**@type {Player} */
  let player = event.source.actual

  //entity.attack

  /**@type {Internal.LivingEntity} */
  let entity1 = entity
  /**@type {Internal.Mob} */
  let entity2 = entity

  if (!(entity.isLiving())) return//基本条件 实体是活的

  Nature(event)//环境伤害  bug 敌人受伤时无法同时攻击  置于damage事件时不会影响特定生物受到的伤害 但导致伤害造成失败?

  //tell(getCrit(entity))


  if (event.source &&
    event.source.actual &&
    event.source.actual.isLiving() &&
    !areData(source.actual, 'projectile') &&
    !areData(entity, 'projectile')) {//event.source.actual.isLiving() 其他条件  攻击者为实体且为活物&&(source.actual.stringUuid!=entity.stringUuid)

    ReactionDamage(event, entity)
    //tell(source.type().msgId())
    EntityDamage(event)//实体伤害限制与实体等级加成

    PlayerDamage(event)//玩家伤害修改
    //console.log(event.amount + '    ' + source.type)
    //entity.attack(attacker.damageSources().fireball(damageType,entity),56)
    be_att_star_rule(entity, event)



  }
  //getDan(attacker)


  if (entity.areData("setAmount")) {//伤害倍数修改

    event.setAmount(event.amount * entity.getDataFloat("setAmount"))

    entity.setDataFloat("setAmount", 1)

  }

  // tell(event.amount)


  //event.entity.setCrit(true)//暴击效果

  magicCrystalReaction(event, entity, source)

  hostImmune(entity, attacker, event)


  // entity.level.getPlayers().sendData("magic_crystalExplosion", { pos: [entity.x, entity.y + 0.5, entity.z], color: [212, 232, 232, 10] })//鲜血

  // entity.level.getPlayers().sendData("magic_crystalExplosion", { pos: [entity.x, entity.y + 0.5, entity.z], color: [212, 232, 132, 10] })//末影
  //  tell(source.getType())

  //  entity.level.getPlayers().sendData("magic_crystalExplosion", { pos: [entity.x, entity.y + 0.5, entity.z], color: [42, 192, 172, 200] })//火焰
  //
  //   entity.level.getPlayers().sendData("magic_crystalExplosion", { pos: [entity.x, entity.y + 0.5, entity.z], color: [42, 192, 172, 200] })//火焰
  if (source.type().msgId() == "player") {
    //addItemEntity(entity.level,entity.x,entity.y,entity.z,
    //    Item.of("irons_spellbooks:scroll", 1, {
    //      ISB_Spells: {
    //        data: [{ id: "irons_spellbooks:flaming_strike", index: 0, level: 4000, locked: 1 }], maxSpells: 1, mustEquip: 0, spellWheel: 0
    //      }
    //    }))
    // attack(attacker, entity, ReactionTypes.fire, 1, 3)










    //addEntity(entity.level,entity.x,entity.y,entity.z,"creeperoverhaul:mushroom_creeper" )
    //ScreenJitter(attacker, 1, 15)//屏幕振动

    //tell(attacker.getItemInHand($InteractionHand.MAIN_HAND))
    //setData(entity, $Int, 'reaction', 10)
    //  tell( attacker.getMove())(new $blockPos(attacker.x, attacker.y, attacker.z)
    let pos = new Vec3(attacker.x, attacker.y, attacker.z)

    let vec3 = new Vec3(5, 5, 5)
    // tell(attacker.level.lightEngine.lightSectionCount)
    // let target1 = $ProjectileUtil.getEntityHitResult(entity.level, attacker, pos, pos.add(vec3), attacker.getBoundingBox().expandTowards(attacker.getDeltaMovement()).inflate(1.0), e => {

    let pm = -10 / Math.abs(-10)

    //  tell(pm * Math.pow(8 * Math.abs(-10), 0.1))



    //  tell(target1)

    //entity.setDataValue("hos33t", source.actual.stringUuid)


    //  let summoner = entity.level.createEntity('kubejs:fairy_bullet')
    //
    //  summoner.setX(entity.x)
    //  summoner.setY(entity.y)
    //  summoner.setZ(entity.z)
    //
    //  summoner.deltaMovement = new Vec3(0.5, 0.5, 0.5)//向量
    //  //  if (actual.isPlayer()) summoner.getRootData().putBoolean('load', true)//禁止等级初始化
    //
    //  entity.level.addFreshEntity(summoner)
    //
    //  // entity.goalSelector.addGoal(-1,$MoveTowardsTargetGoal(entity,1,300))
    //  // 
    //  // entity.target=attacker
    //  if (entity instanceof $PathfinderMob) {
    //
    //    entity.goalSelector.removeAllGoals(a => {
    //      return true
    //    })
    // tell(entity.target)
    //   entity.targetSelector.removeAllGoals(a => {
    //   return true
    // })
    //tell() new $TemptGoal(entity, 1.25, Ingredient.of(Item.of("stone")), false)
    // entity.target = attacker
    //   entity.targetSelector.addGoal(-1, new $MoveTowardsTargetGoal(entity, 1,10))
    //    entity.goalSelector.addGoal(-1, new $MoveTowardsTargetGoal(entity, 1,10))
    // entity.goalSelector.addGoal(0, new $TemptGoal(entity, 1.25, Ingredient.of(Item.of("stone")), false))
    // entity.targetSelector.addGoal(1, new $TemptGoal(entity, 1.25, Ingredient.of(Item.of("stone")), false))
    //tell(  entity.server.lootData.getLootTable(entity.getLootTable()).removePool())//.getRandomItems(killData.create($LootContextParamSets.ENTITY))


    // entity.target = attacker

    //tell(entity.target)


    //entity.setDataValue("host",attacker.stringUuid)








    //attack(attacker,entity,"fire",200,4)
    //entity.runCommandSilent(`particle legendary_monsters:circle ${0} ${PI/2} 3000 40 50 50 50 30 false`)
    //attack(attacker, entity, ReactionTypes.fire, 200, 10)

    //entity.attack(newSource(attacker, newDamageType("kubejs", "fire")), Number(10))

    //entity.attack(newSource(attacker, newDamageType("kubejs", "fire")), Number(1000))
    //**@type {$Circle} */
    //

    let a = attacker.getItemInHand($InteractionHand.MAIN_HAND).getItem()

    a.maxDamage = 789


    /*
      source.player.playAnimation(2, 2, 80, "zhongli1", t => {
    
        t.mTraceR2 = 3
        t.mTraceR1 = 0.2
        t.maxStage = 5;
    
        t.maxTrace = 40
    
        if (t.stage == 4) {
    
          t.mainTrace = true
    
          t.stageCool = 5;
          t.time = 60;
    
    
        } else if (t.stage == 1) {
    
          t.mainTrace = true
    
          t.animation = "zhongli2";
          t.stageCool = 5;
          t.time = 60;
    
    
    
    
        }
        if (t.stage == 2) {
    
          t.mainTrace = true
    
          t.animation = "zhongli3";
          t.stageCool = 20;
          t.time = 80;
    
        }
    tell(t.stage)
         if (t.stage == 0) {
    
          t.mainTrace = true
    
          t.animation = "piaobo1";
          t.stageCool = 40;
          t.time = 60;
    
        }
        
        
        
    
      });
    
    
     source.player.setAnimationLogic(e => {
    
       // if (t.stage == 0) {}
    
       if (e.stage==0&&e.age > 42) { e.mainTrace = false }
    
       if (e.stage==1&&e.age > 20) { e.mainTrace = false }
       
       if (e.stage==2&&e.age > 30) { e.mainTrace = false }
       
       
       
       
       
    
     })
    */




    if (source.player.getAnimationEntity() instanceof $AnimationEntity) {
      //tell(source.player.getAnimationEntity().mTraceR2)
    }


    // /**@type {Internal.CompoundTag} */
    // let name=entity.name
    // 

    // console.log(+"3434" + entity.type + ":" + entity.getName().getString())
    console.log("\"" + entity.type + entity.getName().getString() + "\"" + ":" + "\"" + entity.type + "\",")


    setData(entity, $List, '456456', { a: 4363 })
  }

  if (source.type().msgId() == 'magic') {

    // entity.setCrit(true)


  }

  //Client.player.tell(entity.getRootData())


  //reactionEffectAndEvent(event, entity, 255, 255, 255, '操你妈')
  //console.log(source.type().msgId())
  if (source.type().msgId() == 'cataclysm.shredder') {


    //Utils.server.scheduleInTicks(Math.random() * 20 + 20, () => {
    //  entity.invulnerableTime = 0
    //  entity.attack(newSource(source.actual, damageType.LIGHTNING_BOLT), 10)



    // })
















    //areData(entity,'load')

    //setData(entity,$Boolean,'load',true)
  }

  // if (source.type == "mob") {
  //
  //
  //   //source.actual.level
  //   //  .createExplosion(entity.x, entity.y, entity.z)
  //   //  .strength(2)//value?value:
  //   //  .damagesTerrain(false)
  //   //  .causesFire(false)
  //   //  .exploder(source.actual)
  //   //  .explode()
  //   //
  //
  //
  //   //LightningEffect2(entity, event)
  //
  // }


  //source.player.sendData('acquire_star_sound') 


})


//后发生



ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingDeathEvent', event => {//死亡事件

  //event.source.setIsFire()

  //console.log(event.entity)

  //campEntityDie(event)//阵营实体死亡

  let entity = event.entity

  callFairyDie(event)


})









//初始权重  9    I  6     II  8    III   10

//基础属性                                                            权重         2               3              4                 6
//>生命值 minecraft:generic.max_health   250                       2*20      +   4*30    +    6*15      65*
//<>护甲    minecraft:generic.armor          80                           1*30    +   2*25                     55*
//<基础伤害 puffish_skills:player.melee_damage      1000%       10%*20  +  15%*20   +20%*25   65*

//进阶属性
//暴击率  l2artifacts:crit_rate                          10%                                                0.5               1%        10*
//>暴击伤害     l2artifacts:crit_damage                    150%                            5%                            10%      20*
//<受治疗加成    puffish_skills:player.healing        800%                              20                              35%      36*  multiply_base计算
//<法力值  irons_spellbooks:max_mana               150                                10                                15        15*
//反应伤害加成
//冷却缩减        irons_spellbooks:cooldown_reduction 75%                                               7.5%    10*
//吟唱缩减     irons_spellbooks:cast_time_reduction       25%                                                5%      5*


//每个进阶属性技能点都应携带基础属性


//加成属性
//>弓伤害加成     projectile_damage:generic         1000%          20%*10    + 25%*14   +30%*15   39*  multiply_base计算      X弹射物伤害加成 puffish_skills:player.ranged_damage

//爆炸伤害  autoleveling:monster.explosion_damage_bonus 150%    10%                                15*
//雷伤害      irons_spellbooks:lightning_spell_power
//自然伤害  irons_spellbooks:nature_spell_power
//火伤害  irons_spellbooks:fire_spell_power
//神圣  irons_spellbooks:holy_spell_power
//冰伤害  irons_spellbooks:ice_spell_power
//末影伤害  irons_spellbooks:ender_spell_power
//血伤害  irons_spellbooks:blood_spell_power
//幻魔伤害  irons_spellbooks:evocation_spell_power



//近战   武器攻击力(等级)*遗物攻击力加成*基础伤害*暴击伤害
//弓      弓攻击力*遗物弓箭伤害加成*遗物攻击力加成*基础伤害*暴击伤害*弓伤害加成<---未完善
//魔法   基础伤害*魔法默认伤害/10*武器攻击力(等级)*暴击伤害*魔法伤害加成*遗物攻击力加成<-----待修改:魔法默认伤害应当修改为原来的1/10


//root[强度]主线技能 也在支线出现
//bow        支线技能有时会携带基础属性  此时进阶属性的值略微降低
//spell
//crit
//heal


//元素抗性
//普通攻击抗性
//韧性(对全伤害有效)







