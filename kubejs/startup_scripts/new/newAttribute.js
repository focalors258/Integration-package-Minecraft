// @   ts-no   check


//global.attributes = {}
let $IPCAttributes = Java.loadClass('com.integration_package_core.util.RegistryHandler.AttributeRegistry')

let attribute = Java.loadClass('net.minecraft.world.entity.ai.attributes.Attribute')

StartupEvents.registry('attribute', event => {

  /*
      event.createCustom('kubejs:reaction',()=>{
          return new attribute('attribute.name.generic.reaction',1.0)
      })
  */
  //event.create('kubejs:reaction')
  global.attributes = {}

  //物理抗性  决定非元素自然伤害的抗性

  event.create('physics_resistance', 'irons_spells_js:spell',).setDefaultValue(0.1).setMinimumValue(-100.0).setMaximumValue(100.0)//小于0为负面效果

  event.create('water_resistance', 'irons_spells_js:spell',).setDefaultValue(0.1).setMinimumValue(-100.0).setMaximumValue(100.0)//小于0为负面效果

  event.create('ender_resistance', 'irons_spells_js:spell',).setDefaultValue(0.1).setMinimumValue(-100.0).setMaximumValue(100.0)//小于0为负面效果

  event.create('ice_resistance', 'irons_spells_js:spell',).setDefaultValue(0.1).setMinimumValue(-100.0).setMaximumValue(100.0)//小于0为负面效果

  event.create('fire_resistance', 'irons_spells_js:spell',).setDefaultValue(0.1).setMinimumValue(-100.0).setMaximumValue(100.0)//小于0为负面效果

  event.create('natrue_resistance', 'irons_spells_js:spell',).setDefaultValue(0.1).setMinimumValue(-100.0).setMaximumValue(100.0)//小于0为负面效果

  event.create('divine_resistance', 'irons_spells_js:spell',).setDefaultValue(0.1).setMinimumValue(-100.0).setMaximumValue(100.0)//小于0为负面效果

  event.create('posion_resistance', 'irons_spells_js:spell',).setDefaultValue(0.1).setMinimumValue(-100.0).setMaximumValue(100.0)//小于0为负面效果

  event.create('lightning_resistance', 'irons_spells_js:spell',).setDefaultValue(0.1).setMinimumValue(-100.0).setMaximumValue(100.0)//小于0为负面效果


  event.create('call_resistance', 'irons_spells_js:spell',).setDefaultValue(0.1).setMinimumValue(-100.0).setMaximumValue(100.0)//小于0为负面效果


  //废弃自然(真实)抗性  使用元素抗性代替posion
  global.attributes.a = event.create('nature_resistance', 'irons_spells_js:spell',).setDefaultValue(0.0).setMinimumValue(-100.0).setMaximumValue(100.0)//小于0为负面效果
  //讨论抗性是否使用韧性替换
  global.attributes.b = event.create('basi_att', 'irons_spells_js:spell',).setDefaultValue(0.0).setMinimumValue(0.0).setMaximumValue(100.0)

  global.attributes.c = event.create('reaction_add', 'irons_spells_js:spell',)
    .setDefaultValue(0.0)
    .setMinimumValue(0.0)
    .setMaximumValue(999999.0)//反应熟练度

  global.attributes.d = event.create('reaction_magic', 'irons_spells_js:spell',)
    .setDefaultValue(0.0)
    .setMinimumValue(0.0)
    .setMaximumValue(100.0)//增幅伤害加成max_divine


  event.create('hidden', 'irons_spells_js:spell',).setDefaultValue(0.0).setMinimumValue(0.0).setMaximumValue(200.0)//隐蔽值

  event.create('find_range', 'irons_spells_js:spell',).setDefaultValue(16.0).setMinimumValue(0.0).setMaximumValue(128.0)//侦察范围

  //event.create('find', 'irons_spells_js:spell',).setDefaultValue(0.0).setMinimumValue(0.0).setMaximumValue(200.0)//隐蔽值

  event.create('max_find', 'irons_spells_js:spell',).setDefaultValue(100.0).setMinimumValue(1.0).setMaximumValue(2000.0)//隐蔽值


  event.create('max_call', 'irons_spells_js:spell',).setDefaultValue(10.0).setMinimumValue(0.0).setMaximumValue(100.0)


  event.create('max_divine', 'irons_spells_js:spell',).setDefaultValue(10.0).setMinimumValue(0.0).setMaximumValue(100.0)

  event.create('max_fire', 'irons_spells_js:spell',).setDefaultValue(10.0).setMinimumValue(0.0).setMaximumValue(100.0)

  event.create('max_lightning', 'irons_spells_js:spell',).setDefaultValue(10.0).setMinimumValue(0.0).setMaximumValue(100.0)

  event.create('max_water', 'irons_spells_js:spell',).setDefaultValue(10.0).setMinimumValue(0.0).setMaximumValue(100.0)


  event.create('max_ender', 'irons_spells_js:spell',).setDefaultValue(10.0).setMinimumValue(0.0).setMaximumValue(100.0)


  event.create('max_ice', 'irons_spells_js:spell',).setDefaultValue(10.0).setMinimumValue(0.0).setMaximumValue(100.0)

  // event.create('maxFire', 'irons_spells_js:spell',).setDefaultValue(10.0).setMinimumValue(0.0).setMaximumValue(100.0)


  //event.create('maxFire', 'irons_spells_js:spell',).setDefaultValue(10.0).setMinimumValue(0.0).setMaximumValue(100.0)
  event.create('crit_resist', 'irons_spells_js:spell',).setDefaultValue(0.1).setMinimumValue(-100.0).setMaximumValue(100.0)//小于0为负面效果

  event.create('crit_rate', 'irons_spells_js:spell',).setDefaultValue(0.0).setMinimumValue(0.0).setMaximumValue(1000.0)//暴击率  需要跟莱特兰的暴击率相加 因为其不能大于1

  event.create('screen_shaking', 'irons_spells_js:spell',).setDefaultValue(0.0).setMinimumValue(0.0).setMaximumValue(105436450.0)//屏幕振动

  event.create('shaking_intensity', 'irons_spells_js:spell',).setDefaultValue(0.0).setMinimumValue(0.0).setMaximumValue(105466450.0)//屏幕振动
  //段位
  event.create('max_dan', 'irons_spells_js:spell',).setDefaultValue(0.0).setMinimumValue(0.0).setMaximumValue(99999.0)//段位

  //event.create('danaaa', 'irons_spells_js:spell',).setDefaultValue(0.0).setMinimumValue(0.0).setMaximumValue(999114514.0)//段位
  //最大段位
  event.create('dan', 'irons_spells_js:spell',).setDefaultValue(0.0).setMinimumValue(0.0).setMaximumValue(99999.0)//段位
  //0-500原木  500-1200石制 1200-2000铁 2000-3000金 3000-4200钻 4200-5500下届 5500-7000终末     7000>创造者

  //125*4         140*5             160*5            200*5          200*6           260*5             250*6                             


  //木 铁         
  //原木  石制 铁 金 钻 下界合金 终末 创造者
  //武器负荷  最大
  event.create('cost', 'irons_spells_js:spell',).setDefaultValue(10.0).setMinimumValue(0.0).setMaximumValue(100.0)

  // event.create( "l2damagetracker:crit_rate","irons_spells_js:spell").setDefaultValue(5.0).setMinimumValue(0.0).setMaximumValue(1000.0)



  event.create('allow_smash', 'irons_spells_js:spell',).setDefaultValue(0.0).setMinimumValue(0.0).setMaximumValue(2.0)//  1 可以击溃敌人  2  攻击被击溃时的敌人无视盔甲
  event.create('combatArea_help', 'irons_spells_js:spell',).setDefaultValue(0.0).setMinimumValue(0.0).setMaximumValue(3.0)// 1 据点会显示周围敌人的位置 2可作为重生点 3 回复玩家生命值
  event.create('shift_hidden', 'irons_spells_js:spell',).setDefaultValue(0.0).setMinimumValue(0.0).setMaximumValue(3.0)//潜行时不易被敌人发现
  event.create('spanner', 'irons_spells_js:spell',).setDefaultValue(0.0).setMinimumValue(0.0).setMaximumValue(1.0)//功能键增加切换方块朝向
  event.create('divine_swordAtt', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0);//神圣制裁添加伤害






  //唤魔特殊技能点
  event.create('dillager_friendly', 'irons_spells_js:spell',).setDefaultValue(0.0).setMinimumValue(0.0).setMaximumValue(1.0)//被村民通缉时忖民不会主动攻击
  event.create('dillager_defend', 'irons_spells_js:spell',).setDefaultValue(0.0).setMinimumValue(0.0).setMaximumValue(3.0)//受到忖民的伤害降低
  event.create('call_summon', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0);//召唤物最多数量
  event.create('call_crystal', 'irons_spells_js:spell',).setDefaultValue(2.0).setMinimumValue(1.0).setMaximumValue(5.0);//水晶最大数量
  event.create('call_butt', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0);//水晶破裂数量
  event.create('call_fairy_die', 'irons_spells_js:spell',).setDefaultValue(0.0).setMinimumValue(0.0).setMaximumValue(2.0);//仙灵死亡掉落水晶
  ['divine', 'fire', 'water', 'ender', 'ice', 'lightning'].forEach(type => {
    event.create(`call_${type}`, 'irons_spells_js:spell')
      .setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0);
  });

  // divine系列
  ['call', 'fire', 'water', 'ice', 'lightning'].forEach(type => {
    event.create(`divine_${type}`, 'irons_spells_js:spell')
      .setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0);
  });




  //末影特殊技能点
  event.create('dodge_att', 'irons_spells_js:spell',).setDefaultValue(0.0).setMinimumValue(0.0).setMaximumValue(2.0);//闪避后伤害提升
  event.create('dodge_gain', 'irons_spells_js:spell',).setDefaultValue(0.0).setMinimumValue(0.0).setMaximumValue(2.0)//闪避加成 1 允许极限闪避 2极限闪避后回复一点翻滚值
  event.create('ender_fire2', 'irons_spells_js:spell',).setDefaultValue(0.0).setMinimumValue(0.0).setMaximumValue(2.0);//末影喷涌可冲飞敌人
   event.create('ender_divine2', 'irons_spells_js:spell',).setDefaultValue(0.0).setMinimumValue(0.0).setMaximumValue(2.0);//逸散反应后玩家的反应速度提升
  // ender系列
  ['fire', 'water', 'call', 'ice', 'lightning'].forEach(type => {//ice 使用末影之眼后 伤害提高 
    event.create(`ender_${type}`, 'irons_spells_js:spell')
      .setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0);
  });

  // fire系列
  ['divine', 'call', 'water', 'ender', 'ice', 'lightning'].forEach(type => {
    event.create(`fire_${type}`, 'irons_spells_js:spell')
      .setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0);
  });

  // ice系列
  ['divine', 'fire', 'water', 'ender', 'call', 'lightning'].forEach(type => {
    event.create(`ice_${type}`, 'irons_spells_js:spell')
      .setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0);
  });

  // lightning系列
  ['divine', 'fire', 'water', 'ender', 'call'].forEach(type => {
    event.create(`lightning_${type}`, 'irons_spells_js:spell')
      .setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0);
  });






  /*
  event.create('call_divine', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0)//反应等级
  event.create('call_fire', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0)//反应等级
  event.create('call_water', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0)//反应等级
  event.create('call_ender', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0)//反应等级
  event.create('call_ice', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0)//反应等级
  event.create('call_lightning', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0)//反应等级



  event.create('divine_call', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0)//反应等级
  event.create('divine_fire', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0)//反应等级
  event.create('divine_water', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0)//反应等级
  // event.create('divine_ender', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0)//反应等级
  event.create('divine_ice', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0)//反应等级
  event.create('divine_lightning', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0)//反应等级

  // event.create('call_divine', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0)//反应等级
  // event.create('call_fire', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0)//反应等级
  // event.create('call_water', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0)//反应等级
  // event.create('call_ender', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0)//反应等级
  // event.create('call_ice', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0)//反应等级
  // event.create('call_lightning', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0)//反应等级

  //  event.create('ender_divine', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0)//反应等级
  event.create('ender_fire', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0)//反应等级
  event.create('ender_water', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0)//反应等级
  event.create('ender_call', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0)//反应等级
  event.create('ender_ice', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0)//反应等级
  event.create('ender_lightning', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0)//反应等级

  event.create('fire_divine', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0)//反应等级
  event.create('fire_call', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0)//反应等级
  event.create('fire_water', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0)//反应等级
  event.create('fire_ender', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0)//反应等级
  event.create('fire_ice', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0)//反应等级
  event.create('fire_lightning', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0)//反应等级

  event.create('ice_divine', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0)//反应等级
  event.create('ice_fire', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0)//反应等级
  event.create('ice_water', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0)//反应等级
  event.create('ice_ender', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0)//反应等级
  event.create('ice_call', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0)//反应等级
  event.create('ice_lightning', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0)//反应等级

  event.create('lightning_divine', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0)//反应等级
  event.create('lightning_fire', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0)//反应等级
  event.create('lightning_water', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0)//反应等级
  event.create('lightning_ender', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0)//反应等级
  event.create('lightning_call', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(5.0)//反应等级
*/

  event.create('posion_att', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(7.0)//溅射伤害加成
  event.create('posion_reaction', 'irons_spells_js:spell',).setDefaultValue(1.0).setMinimumValue(1.0).setMaximumValue(7.0)//附着值加成

  //玩家韧性  由ipc注册
  global.attributes.max_toughness = $IPCAttributes.MaxToughness//?????
  // event.create('max_toughness', 'irons_spells_js:spell',).setDefaultValue(0.0).setMinimumValue(0.0).setMaximumValue(1000.0)//反应等级

  //武器稳定性 
  global.attributes.stable = event.create('stable', 'irons_spells_js:spell',).setDefaultValue(0.0).setMinimumValue(0.0).setMaximumValue(100.0)//反应等级

  //武器削韧能力
  global.attributes.toughness_cut = event.create('toughness_cut', 'irons_spells_js:spell',).setDefaultValue(0.0).setMinimumValue(0.0).setMaximumValue(100.0)//反应等级

  //武器格挡能力
  global.attributes.parry = event.create('parry', 'irons_spells_js:spell',).setDefaultValue(0.0).setMinimumValue(0.0).setMaximumValue(100.0)//反应等级


  //stableparry




})









ForgeModEvents.onEvent('net.minecraftforge.event.entity.EntityAttributeModificationEvent', event => {
  // @ts-ignore
  //获取所有实体      遍历
  event.types.forEach(type => {//所有类型





    //                               属性注册名

    event.add(type, 'kubejs:max_water')
    event.add(type, 'kubejs:max_divine')
    event.add(type, 'kubejs:nature_resistance')


    event.add(type, 'kubejs:physics_resistance')

    event.add(type, 'kubejs:basi_att')
    event.add(type, 'kubejs:reaction_add')
    event.add(type, 'kubejs:reaction_magic')
    event.add(type, 'kubejs:max_fire')
    event.add(type, 'kubejs:max_lightning')
    event.add(type, 'kubejs:max_ender')
    event.add(type, 'kubejs:max_ice')
    event.add(type, 'kubejs:max_call')
    event.add(type, 'kubejs:max_water')
    event.add(type, 'kubejs:max_divine')



    event.add(type, 'kubejs:crit_resist')
    event.add(type, 'kubejs:crit_rate')
    //event.add(type, 'l2damagetracker:crit_rate')physics_resistance

    event.add(type, 'kubejs:water_resistance')
    event.add(type, 'kubejs:ender_resistance')
    event.add(type, 'kubejs:ice_resistance')
    event.add(type, 'kubejs:fire_resistance')
    event.add(type, 'kubejs:natrue_resistance')
    event.add(type, 'kubejs:divine_resistance')
    event.add(type, 'kubejs:lightning_resistance')
    event.add(type, 'kubejs:posion_resistance')
    event.add(type, 'kubejs:call_resistance')


    event.add(type, 'kubejs:hidden')
    event.add(type, 'kubejs:find_range')
    event.add(type, 'kubejs:max_find')


    //global.attributes.a.get()
    //global.attributes.b.get()
    //global.attributes.c.get()
    //global.attributes.d.get()
    //global.attributes.e.get()
    //global.attributes.f.get()
    //global.attributes.g.get()
    //global.attributes.x.get()
    //global.attributes.y.get()
    //global.attributes.z.get()

    event.add(type, 'kubejs:allow_smash')
    event.add(type, 'kubejs:combatArea_help')
    event.add(type, 'kubejs:shift_hidden')
    event.add(type, 'kubejs:spanner')




    event.add(type, 'kubejs:call_summon')
    event.add(type, 'kubejs:call_crystal')
    event.add(type, 'kubejs:call_butt')
    event.add(type, 'kubejs:call_fairy_die')
    event.add(type, 'kubejs:dillager_friendly')
    event.add(type, 'kubejs:dillager_defend')
    // 






    customAttributes.forEach(attrId => {

      event.add(type, attrId);

    });

  })












  // forge:entity_gravity_
  event.add('kubejs:fairy_bullet', 'forge:entity_gravity', 0)//取消弹重力

  event.add('kubejs:magic_crystal', 'minecraft:generic.max_health', 1)//水晶初始血量

  event.add('minecraft:player', 'kubejs:screen_shaking')//给玩家添加事件

  event.add('minecraft:player', 'kubejs:shaking_intensity')//给玩家添加振动强度属性

  event.add('minecraft:player', 'kubejs:dan')






  ///event.add('minecraft:player', 'kubejs:danaaa')

  event.add('minecraft:player', 'kubejs:max_dan')

  event.add('minecraft:player', 'kubejs:cost')

  // event.add('minecraft:player',  'kubejs:max_toughness', 10)

  event.add('minecraft:player', "kubejs:toughness_cut", 1)

  //  event.add('minecraft:player',  "kubejs:stable", 0)

  //  event.add('minecraft:player',  "kubejs:parry", 0)




  /*
let entity=event.types

  if (!event.has(entity,'kubejs:nature_resistance')) {
      event.add(entity, 'kubejs:nature_resistance');
  }


*/














})
const customAttributes = [
  // call系列
  "kubejs:call_divine",
  "kubejs:call_fire",
  "kubejs:call_water",
  "kubejs:call_ender",
  "kubejs:call_ice",
  "kubejs:call_lightning",

  // divine系列
  "kubejs:divine_call",
  "kubejs:divine_fire",
  "kubejs:divine_water",
  "kubejs:divine_ice",
  "kubejs:divine_lightning",

  // ender系列
  "kubejs:ender_fire",
  "kubejs:ender_water",
  "kubejs:ender_call",
  "kubejs:ender_ice",
  "kubejs:ender_lightning",

  // fire系列
  "kubejs:fire_divine",
  "kubejs:fire_call",
  "kubejs:fire_water",
  "kubejs:fire_ender",
  "kubejs:fire_ice",
  "kubejs:fire_lightning",

  // ice系列
  "kubejs:ice_divine",
  "kubejs:ice_fire",
  "kubejs:ice_water",
  "kubejs:ice_ender",
  "kubejs:ice_call",
  "kubejs:ice_lightning",

  // lightning系列
  "kubejs:lightning_divine",
  "kubejs:lightning_fire",
  "kubejs:lightning_water",
  "kubejs:lightning_ender",
  "kubejs:lightning_call",
]
