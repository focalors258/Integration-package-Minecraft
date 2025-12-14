// @ts-nocheck
// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => { //listen for the "recipes" server event.
  // You can replace `event` with any name you like, as
  // long as you change it inside the callback too!
  //锻造台格式          1 产物
  //                  2 升级的装备
  //                  3 升级材料


  event.remove({ id:'twilightforest:material/smelted_ironwood_ingot' })//铁木
  event.remove({ id:'twilightforest:material/blasted_ironwood_ingot' })

  event.remove({ id:'twilightforest:material/smelted_knightmetal_ingot' })//骑士金属

  event.remove({ id:'twilightforest:material/blasted_knightmetal_ingot' })
  event.remove({ id: 'twilightforest:equipment/fiery_ingot_crafting' })//赤铁
  

  
// 
// event.remove({ id:'undergarden:forgotten_nugget_to_ingot' })//遗忆
  // event.remove({ id: 'undergarden:forgotten_ingot_to_nugget'})
  
  
 event.remove({ id:'undergarden:blast_depthrock_cloggrum_ore' })//厄塞
  event.remove({ id:'undergarden:blast_raw_cloggrum' })
  event.remove({ id: 'undergarden:blast_shiverstone_cloggrum_ore' })
  
   event.remove({ id:'undergarden:smelt_raw_cloggrum' })//厄塞
  event.remove({ id:'undergarden:smelt_shiverstone_cloggrum_ore' })
  event.remove({ id: 'undergarden:smelt_depthrock_cloggrum_ore' })//熔炉
  
  
  event.remove({ id:'undergarden:blast_depthrock_utherium_ore' })//御腐
  event.remove({ id:'undergarden:blast_shiverstone_utherium_ore' })
  event.remove({ id: 'undergarden:blast_utherium_item' })
  
   event.remove({ id:'undergarden:smelt_depthrock_utherium_ore' })//御腐
  event.remove({ id:'undergarden:smelt_shiverstone_utherium_ore' })
  event.remove({ id: 'undergarden:smelt_utherium_item' })//熔炉
  
    event.remove({ id: 'undergarden:shard_to_crystal'})//合成
  
 event.remove({ id:'undergarden:blast_depthrock_froststeel_ore' })//霜钢
  event.remove({ id:'undergarden:blast_shiverstone_froststeel_ore' })
  event.remove({ id: 'undergarden:blast_froststeel_item' })
  
   event.remove({ id:'undergarden:smelt_depthrock_froststeel_ore' })//霜钢
  event.remove({ id:'undergarden:smelt_shiverstone_froststeel_ore' })
  event.remove({ id: 'undergarden:smelt_froststeel_item' })
 event.remove({ id: 'undergarden:blast_raw_froststeel' })
  
  



// event.remove({ id: })
//  event.remove({ id: })
//
// event.remove({ id: })
//  event.remove({ id: })
//
// event.remove({ id: })
//  event.remove({ id: })
//
// event.remove({ id: })
//  event.remove({ id: })
//

  //莱特兰
  event.remove({ id: 'l2complements:enchantments/invincible' })
  event.remove({ id: 'l2complements:enchantments/eternal' })
  event.remove({ id: 'l2complements:enchantments/magic_reject' })
  event.remove({ id: 'l2complements:enchantments/explosion_reject' })
  event.remove({ id: 'l2complements:enchantments/environment_reject' })
  event.remove({ id: 'l2complements:enchantments/projectile_reject' })
  event.remove({ id: 'l2complements:enchantments/fire_reject' })
  event.remove({ id: 'l2complements:enchantments/hardened' })
  //葡萄
  event.remove({ id: 'vinery:apples' })

  //马车
  event.remove({ id: 'astikorcarts:wheel' })
  // event.remove({ id: '' })
  // event.remove({ id: '' })
  // event.remove({ id: '' })
  // event.remove({ id: '' })
  // event.remove({ id: '' })
  // event.remove({ id: '' })
  event.shaped(//黄金锻矿
    Item.of('astikorcarts:wheel', 1),               // arg 1: output
    [
      'BBB',
      'BAB',                                                           // arg 2: the shape (array of strings)
      'BBB'
    ],
    {
      A: 'create:water_wheel',
      B: 'minecraft:iron_nugget'                              //arg 3: the mapping object

    }
  )




  //重复
  event.remove({ id: 'incubation:fried_egg_from_campfire_cooking' })


  //腐肉烧皮革
  event.blasting('minecraft:leather', 'minecraft:rotten_flesh')

  //水晶
  //event.blasting('6x minecraft:glass', 'minecraft:quartz')


  //event.blasting( 'minecraft:amethyst_shard','6x minecraft:quartz',)

  event.shaped(//黄金锻矿
    Item.of('theabyss:aurel_crystal_ore', 1),               // arg 1: output
    [
      '   ',
      ' B ',                                                           // arg 2: the shape (array of strings)
      'ABA'
    ],
    {
      A: 'minecraft:gold_ingot',
      B: 'minecraft:quartz'                              //arg 3: the mapping object

    }
  )


  event.shaped(//钻石锻矿
    Item.of('theabyss:frost_crystal_ore', 1),               // arg 1: output
    [
      '   ',
      ' B ',                                                           // arg 2: the shape (array of strings)
      'ABA'
    ],
    {
      A: 'minecraft:diamond',
      B: 'minecraft:amethyst_shard'                              //arg 3: the mapping object

    }
  )


  event.shaped(//下界合金锻矿
    Item.of('theabyss:caverna_crystal_ore', 1),               // arg 1: output
    [
      '   ',
      ' B ',                                                           // arg 2: the shape (array of strings)
      'ABA'
    ],
    {
      A: 'minecraft:netherite_ingot',
      B: 'aquamirae:abyssal_amethyst'                              //arg 3: the mapping object

    }
  )

  event.shaped(//下界合金锻矿
    Item.of('theabyss:caverna_crystal_ore', 1),               // arg 1: output
    [
      '   ',
      ' B ',                                                           // arg 2: the shape (array of strings)
      'ABA'
    ],
    {
      A: 'minecraft:netherite_ingot',
      B: 'cataclysm:amethyst_crab_meat'                              //arg 3: the mapping object

    }
  )


  event.shaped(//下界合金锻矿
    Item.of('theabyss:caverna_crystal_ore', 1),               // arg 1: output
    [
      '   ',
      ' B ',                                                           // arg 2: the shape (array of strings)
      'ABA'
    ],
    {
      A: 'minecraft:netherite_ingot',
      B: 'bosses_of_mass_destruction:obsidian_heart'                              //arg 3: the mapping object

    }
  )

  //箭
  event.remove({ id: 'minecraft:arrow' })
  event.shaped(
    Item.of('minecraft:arrow', 8),               // arg 1: output
    [
      ' A ',
      ' C ',                                                           // arg 2: the shape (array of strings)
      ' B '
    ],
    {
      A: 'minecraft:flint',
      B: 'minecraft:feather',                                   //arg 3: the mapping object
      C: 'minecraft:stick'
    }
  )
  event.shaped(
    Item.of('minecraft:arrow', 12),               // arg 1: output
    [
      ' A ',
      ' C ',                                                           // arg 2: the shape (array of strings)
      ' B '
    ],
    {
      A: 'minecraft:flint',
      B: 'ecologics:penguin_feather',                                   //arg 3: the mapping object
      C: 'minecraft:stick'
    }
  )
  event.shaped(
    Item.of('minecraft:arrow', 12),               // arg 1: output
    [
      ' A ',
      ' C ',                                                           // arg 2: the shape (array of strings)
      ' B '
    ],
    {
      A: 'minecraft:flint',
      B: 'twilightforest:raven_feather',                                   //arg 3: the mapping object
      C: 'minecraft:stick'
    }
  )
// event.shaped(
//   Item.of('minecraft:arrow', 16),               // arg 1: output
//   [
//     ' A ',
//     ' C ',                                                           // arg 2: the shape (array of strings)
//     ' B '
//   ],
//   {
//     A: 'minecraft:flint',
//     B: 'va:black_feather',                                   //arg 3: the mapping object
//     C: 'minecraft:stick'
//   }
// )
  event.shaped(
    Item.of('minecraft:arrow', 12),               // arg 1: output
    [
      ' A ',
      ' C ',                                                           // arg 2: the shape (array of strings)
      ' B '
    ],
    {
      A: 'minecraft:flint',
      B: 'alexsmobs:roadrunner_feather',                                   //arg 3: the mapping object
      C: 'minecraft:stick'
    }
  )
  event.shaped(
    Item.of('minecraft:arrow', 12),               // arg 1: output
    [
      ' A ',
      ' C ',                                                           // arg 2: the shape (array of strings)
      ' B '
    ],
    {
      A: 'minecraft:flint',
      B: 'alexsmobs:emu_feather',                                   //arg 3: the mapping object
      C: 'minecraft:stick'
    }
  )

  event.remove({ id: 'minecraft:arrow' })
  event.shaped(
    Item.of('minecraft:arrow', 8),               // arg 1: output
    [
      ' A ',
      ' C ',                                                           // arg 2: the shape (array of strings)
      ' B '
    ],
    {
      A: 'minecraft:iron_nugget',
      B: 'minecraft:feather',                                   //arg 3: the mapping object
      C: 'minecraft:stick'
    }
  )
  event.shaped(
    Item.of('minecraft:arrow', 12),               // arg 1: output
    [
      ' A ',
      ' C ',                                                           // arg 2: the shape (array of strings)
      ' B '
    ],
    {
      A: 'minecraft:iron_nugget',
      B: 'ecologics:penguin_feather',                                   //arg 3: the mapping object
      C: 'minecraft:stick'
    }
  )
  event.shaped(
    Item.of('minecraft:arrow', 12),               // arg 1: output
    [
      ' A ',
      ' C ',                                                           // arg 2: the shape (array of strings)
      ' B '
    ],
    {
      A: 'minecraft:iron_nugget',
      B: 'twilightforest:raven_feather',                                   //arg 3: the mapping object
      C: 'minecraft:stick'
    }
  )
// event.shaped(
//   Item.of('minecraft:arrow', 16),               // arg 1: output
//   [
//     ' A ',
//     ' C ',                                                           // arg 2: the shape (array of strings)
//     ' B '
//   ],
//   {
//     A: 'minecraft:iron_nugget',
//     B: 'va:black_feather',                                   //arg 3: the mapping object
//     C: 'minecraft:stick'
//   }
// )
  event.shaped(
    Item.of('minecraft:arrow', 12),               // arg 1: output
    [
      ' A ',
      ' C ',                                                           // arg 2: the shape (array of strings)
      ' B '
    ],
    {
      A: 'minecraft:iron_nugget',
      B: 'alexsmobs:roadrunner_feather',                                   //arg 3: the mapping object
      C: 'minecraft:stick'
    }
  )
  event.shaped(
    Item.of('minecraft:arrow', 12),               // arg 1: output
    [
      ' A ',
      ' C ',                                                           // arg 2: the shape (array of strings)
      ' B '
    ],
    {
      A: 'minecraft:iron_nugget',
      B: 'alexsmobs:emu_feather',                                   //arg 3: the mapping object
      C: 'minecraft:stick'
    }
  )



  event.remove({ id: 'minecraft:arrow' })
  event.shaped(
    Item.of('minecraft:arrow', 8),               // arg 1: output
    [
      ' A ',
      ' C ',                                                           // arg 2: the shape (array of strings)
      ' B '
    ],
    {
      A: 'createdeco:cast_iron_nugget',
      B: 'minecraft:feather',                                   //arg 3: the mapping object
      C: 'minecraft:stick'
    }
  )
  event.shaped(
    Item.of('minecraft:arrow', 12),               // arg 1: output
    [
      ' A ',
      ' C ',                                                           // arg 2: the shape (array of strings)
      ' B '
    ],
    {
      A: 'createdeco:cast_iron_nugget',
      B: 'ecologics:penguin_feather',                                   //arg 3: the mapping object
      C: 'minecraft:stick'
    }
  )
  event.shaped(
    Item.of('minecraft:arrow', 12),               // arg 1: output
    [
      ' A ',
      ' C ',                                                           // arg 2: the shape (array of strings)
      ' B '
    ],
    {
      A: 'createdeco:cast_iron_nugget',
      B: 'twilightforest:raven_feather',                                   //arg 3: the mapping object
      C: 'minecraft:stick'
    }
  )
//event.shaped(
//  Item.of('minecraft:arrow', 16),               // arg 1: output
//  [
//    ' A ',
//    ' C ',                                                           // arg 2: the shape (array of strings)
//    ' B '
//  ],
//  {
//    A: 'createdeco:cast_iron_nugget',
//    B: 'va:black_feather',                                   //arg 3: the mapping object
//    C: 'minecraft:stick'
//  }
//)
  event.shaped(
    Item.of('minecraft:arrow', 12),               // arg 1: output
    [
      ' A ',
      ' C ',                                                           // arg 2: the shape (array of strings)
      ' B '
    ],
    {
      A: 'createdeco:cast_iron_nugget',
      B: 'alexsmobs:roadrunner_feather',                                   //arg 3: the mapping object
      C: 'minecraft:stick'
    }
  )
  event.shaped(
    Item.of('minecraft:arrow', 12),               // arg 1: output
    [
      ' A ',
      ' C ',                                                           // arg 2: the shape (array of strings)
      ' B '
    ],
    {
      A: 'createdeco:cast_iron_nugget',
      B: 'alexsmobs:emu_feather',                                   //arg 3: the mapping object
      C: 'minecraft:stick'
    }
  )















  /*
  //顶级盾牌配方
  event.shaped(
    Item.of('shieldexp:paragon_shield', 1),               // arg 1: output
    [
      'AAA',
      'ACB',                                                           // arg 2: the shape (array of strings)
      'BBB'
    ],
    {
      A: 'advancednetherite:netherite_diamond_ingot',
      B: 'advancednetherite:netherite_emerald_ingot' ,                                   //arg 3: the mapping object
      C: 'shieldexp:netherite_shield'
    }
  )
  //下界盾牌配方
  event.shaped(
    Item.of('shieldexp:netherite_shield', 1),               // arg 1: output
    [
      'AAA',
      'ABA',                                                           // arg 2: the shape (array of strings)
      'AAA'
    ],
    {
      A: 'minecraft:netherite_ingot',                                  //arg 3: the mapping object
      B: 'shieldexp:diamond_shield'
    }
  )
  //删除原配方
  event.remove({ id: 'shieldexp:netherite_shield_smithing' })
  */


  //删除部分武器配方
  event.remove({ id: 'aquamirae:divider' })



  //法套配方
  //删除原配方
  //初级
  event.remove({ id: 'irons_spellbooks:wandering_magician_helmet' })
  event.remove({ id: 'irons_spellbooks:wandering_magician_chestplate' })
  event.remove({ id: 'irons_spellbooks:wandering_magician_leggings' })
  event.remove({ id: 'irons_spellbooks:wandering_magician_boots' })
  //中级
  event.remove({ id: 'irons_spellbooks:pumpkin_helmet' })
  event.remove({ id: 'irons_spellbooks:pumpkin_chestplate' })
  event.remove({ id: 'irons_spellbooks:pumpkin_leggings' })
  event.remove({ id: 'irons_spellbooks:pumpkin_boots' })
  //高级
  event.remove({ id: 'irons_spellbooks:pyromancer_helmet' })
  event.remove({ id: 'irons_spellbooks:pyromancer_chestplate' })
  event.remove({ id: 'irons_spellbooks:pyromancer_leggings' })
  event.remove({ id: 'irons_spellbooks:pyromancer_boots' })

  event.remove({ id: 'irons_spellbooks:electromancer_helmet' })
  event.remove({ id: 'irons_spellbooks:electromancer_chestplate' })
  event.remove({ id: 'irons_spellbooks:electromancer_leggings' })
  event.remove({ id: 'irons_spellbooks:electromancer_boots' })

  event.remove({ id: 'irons_spellbooks:archevoker_helmet' })
  event.remove({ id: 'irons_spellbooks:archevoker_chestplate' })
  event.remove({ id: 'irons_spellbooks:archevoker_leggings' })
  event.remove({ id: 'irons_spellbooks:archevoker_boots' })

  event.remove({ id: 'irons_spellbooks:cultist_helmet' })
  event.remove({ id: 'irons_spellbooks:cultist_chestplate' })
  event.remove({ id: 'irons_spellbooks:cultist_leggings' })
  event.remove({ id: 'irons_spellbooks:cultist_boots' })

  event.remove({ id: 'irons_spellbooks:cryomancer_helmet' })
  event.remove({ id: 'irons_spellbooks:cryomancer_chestplate' })
  event.remove({ id: 'irons_spellbooks:cryomancer_leggings' })
  event.remove({ id: 'irons_spellbooks:cryomancer_boots' })

  event.remove({ id: 'irons_spellbooks:shadowwalker_helmet' })
  event.remove({ id: 'irons_spellbooks:shadowwalker_chestplate' })
  event.remove({ id: 'irons_spellbooks:shadowwalker_leggings' })
  event.remove({ id: 'irons_spellbooks:shadowwalker_boots' })

  event.remove({ id: 'irons_spellbooks:priest_helmet' })
  event.remove({ id: 'irons_spellbooks:priest_chestplate' })
  event.remove({ id: 'irons_spellbooks:priest_leggings' })
  event.remove({ id: 'irons_spellbooks:priest_boots' })

  event.remove({ id: 'irons_spellbooks:plagued_helmet' })
  event.remove({ id: 'irons_spellbooks:plagued_chestplate' })
  event.remove({ id: 'irons_spellbooks:plagued_leggings' })
  event.remove({ id: 'irons_spellbooks:plagued_boots' })


  //初级配方
  event.smithing(
    'irons_spellbooks:wandering_magician_helmet',
    'minecraft:iron_helmet',
    'irons_spellbooks:magic_cloth'
  )
  event.smithing(
    'irons_spellbooks:wandering_magician_chestplate',
    'minecraft:iron_chestplate',
    'irons_spellbooks:magic_cloth'
  )
  event.smithing(
    'irons_spellbooks:wandering_magician_leggings',
    'minecraft:iron_leggings',
    'irons_spellbooks:magic_cloth'
  )
  event.smithing(
    'irons_spellbooks:wandering_magician_boots',
    'minecraft:iron_boots',
    'irons_spellbooks:magic_cloth'
  )

  //中级配方
  event.shaped(
    Item.of('irons_spellbooks:pumpkin_helmet', 1),               // arg 1: output
    [
      ' A ',
      'ABA',                                                           // arg 2: the shape (array of strings)
      ' C '
    ],
    {
      A: 'irons_spellbooks:magic_cloth',
      B: 'irons_spellbooks:wandering_magician_helmet',                                   //arg 3: the mapping object
      C: 'minecraft:pumpkin'
    }
  )

  event.shaped(
    Item.of('irons_spellbooks:pumpkin_chestplate', 1),               // arg 1: output
    [
      'C C',
      'ABA',                                                           // arg 2: the shape (array of strings)
      'AAA'
    ],
    {
      A: 'irons_spellbooks:magic_cloth',
      B: 'irons_spellbooks:wandering_magician_chestplate',                                   //arg 3: the mapping object
      C: 'minecraft:hay_block'
    }
  )

  event.shaped(
    Item.of('irons_spellbooks:pumpkin_leggings', 1),               // arg 1: output
    [
      'CBC',
      'A A',                                                           // arg 2: the shape (array of strings)
      'A A'
    ],
    {
      A: 'irons_spellbooks:magic_cloth',
      B: 'irons_spellbooks:wandering_magician_leggings',                                   //arg 3: the mapping object
      C: 'minecraft:hay_block'
    }
  )

  event.shaped(
    Item.of('irons_spellbooks:pumpkin_boots', 1),               // arg 1: output
    [
      '   ',
      'ABA',                                                           // arg 2: the shape (array of strings)
      'C C'
    ],
    {
      A: 'irons_spellbooks:magic_cloth',
      B: 'irons_spellbooks:wandering_magician_boots',                                   //arg 3: the mapping object
      C: 'minecraft:hay_block'
    }
  )


  //高级配方
  //头部
  event.shaped(
    Item.of('irons_spellbooks:pyromancer_helmet', 1),               // arg 1: output
    [
      'ABA',
      'ACA',                                                           // arg 2: the shape (array of strings)
      '   '
    ],
    {
      A: 'irons_spellbooks:magic_cloth',
      B: 'irons_spellbooks:pumpkin_helmet',                                   //arg 3: the mapping object
      C: 'irons_spellbooks:fire_rune'
    }
  )
  event.shaped(
    Item.of('irons_spellbooks:electromancer_helmet', 1),               // arg 1: output
    [
      'ABA',
      'ACA',                                                           // arg 2: the shape (array of strings)
      '   '
    ],
    {
      A: 'irons_spellbooks:magic_cloth',
      B: 'irons_spellbooks:pumpkin_helmet',                                   //arg 3: the mapping object
      C: 'irons_spellbooks:lightning_rune'
    }
  )
  event.shaped(
    Item.of('irons_spellbooks:archevoker_helmet', 1),               // arg 1: output
    [
      'ABA',
      'ACA',                                                           // arg 2: the shape (array of strings)
      '   '
    ],
    {
      A: 'irons_spellbooks:magic_cloth',
      B: 'irons_spellbooks:pumpkin_helmet',                                   //arg 3: the mapping object
      C: 'irons_spellbooks:evocation_rune'
    }
  )
  event.shaped(
    Item.of('irons_spellbooks:cultist_helmet', 1),               // arg 1: output
    [
      'ABA',
      'ACA',                                                           // arg 2: the shape (array of strings)
      '   '
    ],
    {
      A: 'irons_spellbooks:magic_cloth',
      B: 'irons_spellbooks:pumpkin_helmet',                                   //arg 3: the mapping object
      C: 'irons_spellbooks:blood_rune'
    }
  )
  event.shaped(
    Item.of('irons_spellbooks:cryomancer_helmet', 1),               // arg 1: output
    [
      'ABA',
      'ACA',                                                           // arg 2: the shape (array of strings)
      '   '
    ],
    {
      A: 'irons_spellbooks:magic_cloth',
      B: 'irons_spellbooks:pumpkin_helmet',                                   //arg 3: the mapping object
      C: 'irons_spellbooks:ice_rune'
    }
  )
  event.shaped(
    Item.of('irons_spellbooks:shadowwalker_helmet', 1),               // arg 1: output
    [
      'ABA',
      'ACA',                                                           // arg 2: the shape (array of strings)
      '   '
    ],
    {
      A: 'irons_spellbooks:magic_cloth',
      B: 'irons_spellbooks:pumpkin_helmet',                                   //arg 3: the mapping object
      C: 'irons_spellbooks:ender_rune'
    }
  )
  event.shaped(
    Item.of('irons_spellbooks:priest_helmet', 1),               // arg 1: output
    [
      'ABA',
      'ACA',                                                           // arg 2: the shape (array of strings)
      '   '
    ],
    {
      A: 'irons_spellbooks:magic_cloth',
      B: 'irons_spellbooks:pumpkin_helmet',                                   //arg 3: the mapping object
      C: 'irons_spellbooks:holy_rune'
    }
  )
  event.shaped(
    Item.of('irons_spellbooks:plagued_helmet', 1),               // arg 1: output
    [
      'ABA',
      'ACA',                                                           // arg 2: the shape (array of strings)
      '   '
    ],
    {
      A: 'irons_spellbooks:magic_cloth',
      B: 'irons_spellbooks:pumpkin_helmet',                                   //arg 3: the mapping object
      C: 'irons_spellbooks:nature_rune'
    }
  )


  //胸甲
  event.shaped(
    Item.of('irons_spellbooks:pyromancer_chestplate', 1),               // arg 1: output
    [
      'ACA',
      'ABA',                                                           // arg 2: the shape (array of strings)
      'AAA'
    ],
    {
      A: 'irons_spellbooks:magic_cloth',
      B: 'irons_spellbooks:pumpkin_chestplate',                                   //arg 3: the mapping object
      C: 'irons_spellbooks:fire_rune'
    }
  )
  event.shaped(
    Item.of('irons_spellbooks:electromancer_chestplate', 1),               // arg 1: output
    [
      'ACA',
      'ABA',                                                           // arg 2: the shape (array of strings)
      'AAA'
    ],
    {
      A: 'irons_spellbooks:magic_cloth',
      B: 'irons_spellbooks:pumpkin_chestplate',                                   //arg 3: the mapping object
      C: 'irons_spellbooks:lightning_rune'
    }
  )
  event.shaped(
    Item.of('irons_spellbooks:archevoker_chestplate', 1),               // arg 1: output
    [
      'ACA',
      'ABA',                                                           // arg 2: the shape (array of strings)
      'AAA'
    ],
    {
      A: 'irons_spellbooks:magic_cloth',
      B: 'irons_spellbooks:pumpkin_chestplate',                                   //arg 3: the mapping object
      C: 'irons_spellbooks:evocation_rune'
    }
  )
  event.shaped(
    Item.of('irons_spellbooks:cultist_chestplate', 1),               // arg 1: output
    [
      'ACA',
      'ABA',                                                           // arg 2: the shape (array of strings)
      'AAA'
    ],
    {
      A: 'irons_spellbooks:magic_cloth',
      B: 'irons_spellbooks:pumpkin_chestplate',                                   //arg 3: the mapping object
      C: 'irons_spellbooks:blood_rune'
    }
  )
  event.shaped(
    Item.of('irons_spellbooks:cryomancer_chestplate', 1),               // arg 1: output
    [
      'ACA',
      'ABA',                                                           // arg 2: the shape (array of strings)
      'AAA'
    ],
    {
      A: 'irons_spellbooks:magic_cloth',
      B: 'irons_spellbooks:pumpkin_chestplate',                                   //arg 3: the mapping object
      C: 'irons_spellbooks:ice_rune'
    }
  )
  event.shaped(
    Item.of('irons_spellbooks:shadowwalker_chestplate', 1),               // arg 1: output
    [
      'ACA',
      'ABA',                                                           // arg 2: the shape (array of strings)
      'AAA'
    ],
    {
      A: 'irons_spellbooks:magic_cloth',
      B: 'irons_spellbooks:pumpkin_chestplate',                                   //arg 3: the mapping object
      C: 'irons_spellbooks:ender_rune'
    }
  )
  event.shaped(
    Item.of('irons_spellbooks:priest_chestplate', 1),               // arg 1: output
    [
      'ACA',
      'ABA',                                                           // arg 2: the shape (array of strings)
      'AAA'
    ],
    {
      A: 'irons_spellbooks:magic_cloth',
      B: 'irons_spellbooks:pumpkin_chestplate',                                   //arg 3: the mapping object
      C: 'irons_spellbooks:holy_rune'
    }
  )
  event.shaped(
    Item.of('irons_spellbooks:plagued_chestplate', 1),               // arg 1: output
    [
      'ACA',
      'ABA',                                                           // arg 2: the shape (array of strings)
      'AAA'
    ],
    {
      A: 'irons_spellbooks:magic_cloth',
      B: 'irons_spellbooks:pumpkin_chestplate',                                   //arg 3: the mapping object
      C: 'irons_spellbooks:nature_rune'
    }
  )

  //腿甲
  event.shaped(
    Item.of('irons_spellbooks:pyromancer_leggings', 1),               // arg 1: output
    [
      'ABA',
      'ACA',                                                           // arg 2: the shape (array of strings)
      'A A'
    ],
    {
      A: 'irons_spellbooks:magic_cloth',
      B: 'irons_spellbooks:pumpkin_leggings',                                   //arg 3: the mapping object
      C: 'irons_spellbooks:fire_rune'
    }
  )
  event.shaped(
    Item.of('irons_spellbooks:electromancer_leggings', 1),               // arg 1: output
    [
      'ABA',
      'ACA',                                                           // arg 2: the shape (array of strings)
      'A A'
    ],
    {
      A: 'irons_spellbooks:magic_cloth',
      B: 'irons_spellbooks:pumpkin_leggings',                                   //arg 3: the mapping object
      C: 'irons_spellbooks:lightning_rune'
    }
  )
  event.shaped(
    Item.of('irons_spellbooks:archevoker_leggings', 1),               // arg 1: output
    [
      'ABA',
      'ACA',                                                           // arg 2: the shape (array of strings)
      'A A'
    ],
    {
      A: 'irons_spellbooks:magic_cloth',
      B: 'irons_spellbooks:pumpkin_leggings',                                   //arg 3: the mapping object
      C: 'irons_spellbooks:evocation_rune'
    }
  )
  event.shaped(
    Item.of('irons_spellbooks:cultist_leggings', 1),               // arg 1: output
    [
      'ABA',
      'ACA',                                                           // arg 2: the shape (array of strings)
      'A A'
    ],
    {
      A: 'irons_spellbooks:magic_cloth',
      B: 'irons_spellbooks:pumpkin_leggings',                                   //arg 3: the mapping object
      C: 'irons_spellbooks:blood_rune'
    }
  )
  event.shaped(
    Item.of('irons_spellbooks:cryomancer_leggings', 1),               // arg 1: output
    [
      'ABA',
      'ACA',                                                           // arg 2: the shape (array of strings)
      'A A'
    ],
    {
      A: 'irons_spellbooks:magic_cloth',
      B: 'irons_spellbooks:pumpkin_leggings',                                   //arg 3: the mapping object
      C: 'irons_spellbooks:ice_rune'
    }
  )
  event.shaped(
    Item.of('irons_spellbooks:shadowwalker_leggings', 1),               // arg 1: output
    [
      'ABA',
      'ACA',                                                           // arg 2: the shape (array of strings)
      'A A'
    ],
    {
      A: 'irons_spellbooks:magic_cloth',
      B: 'irons_spellbooks:pumpkin_leggings',                                   //arg 3: the mapping object
      C: 'irons_spellbooks:ender_rune'
    }
  )
  event.shaped(
    Item.of('irons_spellbooks:priest_leggings', 1),               // arg 1: output
    [
      'ABA',
      'ACA',                                                           // arg 2: the shape (array of strings)
      'A A'
    ],
    {
      A: 'irons_spellbooks:magic_cloth',
      B: 'irons_spellbooks:pumpkin_leggings',                                   //arg 3: the mapping object
      C: 'irons_spellbooks:holy_rune'
    }
  )
  event.shaped(
    Item.of('irons_spellbooks:plagued_leggings', 1),               // arg 1: output
    [
      'ABA',
      'ACA',                                                           // arg 2: the shape (array of strings)
      'A A'
    ],
    {
      A: 'irons_spellbooks:magic_cloth',
      B: 'irons_spellbooks:pumpkin_leggings',                                   //arg 3: the mapping object
      C: 'irons_spellbooks:nature_rune'
    }
  )

  //鞋子
  event.shaped(
    Item.of('irons_spellbooks:pyromancer_boots', 1),               // arg 1: output
    [
      '   ',
      'ACA',                                                           // arg 2: the shape (array of strings)
      'ABA'
    ],
    {
      A: 'irons_spellbooks:magic_cloth',
      B: 'irons_spellbooks:pumpkin_boots',                                   //arg 3: the mapping object
      C: 'irons_spellbooks:fire_rune'
    }
  )
  event.shaped(
    Item.of('irons_spellbooks:electromancer_boots', 1),               // arg 1: output
    [
      '   ',
      'ACA',                                                           // arg 2: the shape (array of strings)
      'ABA'
    ],
    {
      A: 'irons_spellbooks:magic_cloth',
      B: 'irons_spellbooks:pumpkin_boots',                                   //arg 3: the mapping object
      C: 'irons_spellbooks:lightning_rune'
    }
  )
  event.shaped(
    Item.of('irons_spellbooks:archevoker_boots', 1),               // arg 1: output
    [
      '   ',
      'ACA',                                                           // arg 2: the shape (array of strings)
      'ABA'
    ],
    {
      A: 'irons_spellbooks:magic_cloth',
      B: 'irons_spellbooks:pumpkin_boots',                                   //arg 3: the mapping object
      C: 'irons_spellbooks:evocation_rune'
    }
  )
  event.shaped(
    Item.of('irons_spellbooks:cultist_boots', 1),               // arg 1: output
    [
      '   ',
      'ACA',                                                           // arg 2: the shape (array of strings)
      'ABA'
    ],
    {
      A: 'irons_spellbooks:magic_cloth',
      B: 'irons_spellbooks:pumpkin_boots',                                   //arg 3: the mapping object
      C: 'irons_spellbooks:blood_rune'
    }
  )
  event.shaped(
    Item.of('irons_spellbooks:cryomancer_boots', 1),               // arg 1: output
    [
      '   ',
      'ACA',                                                           // arg 2: the shape (array of strings)
      'ABA'
    ],
    {
      A: 'irons_spellbooks:magic_cloth',
      B: 'irons_spellbooks:pumpkin_boots',                                   //arg 3: the mapping object
      C: 'irons_spellbooks:ice_rune'
    }
  )
  event.shaped(
    Item.of('irons_spellbooks:shadowwalker_boots', 1),               // arg 1: output
    [
      '   ',
      'ACA',                                                           // arg 2: the shape (array of strings)
      'ABA'
    ],
    {
      A: 'irons_spellbooks:magic_cloth',
      B: 'irons_spellbooks:pumpkin_boots',                                   //arg 3: the mapping object
      C: 'irons_spellbooks:ender_rune'
    }
  )
  event.shaped(
    Item.of('irons_spellbooks:priest_boots', 1),               // arg 1: output
    [
      '   ',
      'ACA',                                                           // arg 2: the shape (array of strings)
      'ABA'
    ],
    {
      A: 'irons_spellbooks:magic_cloth',
      B: 'irons_spellbooks:pumpkin_boots',                                   //arg 3: the mapping object
      C: 'irons_spellbooks:holy_rune'
    }
  )
  event.shaped(
    Item.of('irons_spellbooks:plagued_boots', 1),               // arg 1: output
    [
      '   ',
      'ACA',                                                           // arg 2: the shape (array of strings)
      'ABA'
    ],
    {
      A: 'irons_spellbooks:magic_cloth',
      B: 'irons_spellbooks:pumpkin_boots',                                   //arg 3: the mapping object
      C: 'irons_spellbooks:nature_rune'
    }
  )

  //升级材料配方
  /*
  event.shapeless(
    Item.of('bhc:wither_bone', 1), // arg 1: output
    [
      'minecraft:bone',
      'minecraft:coal' 	//arg 2: the array of inputs
    ]
  )
  */


  //未知物品
  event.remove({ id: 'obscure_api:obscure_book' })



  //去除重复配方(金栏杆 墙半砖方块)
  event.remove({ id: 'quark:building/crafting/vertslabs/brick_vertical_slab' })
  event.remove({ id: 'upgrade_aquatic:glass_trapdoor' })
  event.remove({ id: 'upgrade_aquatic:glass_door' })
  event.remove({ id: 'quark:building/stonecutting/vertslabs/brick_vertical_slab_stonecutter' })
  event.remove({ id: 'quark:building/crafting/gold_bars' })

  event.remove({ id: 'createbigcannons:compacting/iron_to_cast_iron_ingot' })
  event.remove({ id: 'createaddition:pressing/zinc_ingot' })
  event.remove({ id: 'createbigcannons:compacting/forge_cast_iron_ingot' })



  //心之容器优化
  event.remove({ id: 'bhc:red_heart_canister' })
  event.remove({ id: 'bhc:yellow_heart_canister' })
  event.remove({ id: 'bhc:green_heart_canister' })
  event.remove({ id: 'bhc:blue_heart_canister' })

  event.shapeless(
    Item.of('bhc:red_heart_canister', 1), // arg 1: output
    [
      'bhc:canister',
      'bhc:red_heart' 	//arg 2: the array of inputs
    ]
  )
  event.shapeless(
    Item.of('bhc:yellow_heart_canister', 1), // arg 1: output
    [
      'bhc:red_heart_canister',
      'bhc:yellow_heart' 	//arg 2: the array of inputs
    ]
  )
  event.shapeless(
    Item.of('bhc:green_heart_canister', 1), // arg 1: output
    [
      'bhc:yellow_heart_canister',
      'bhc:green_heart' 	//arg 2: the array of inputs
    ]
  )
  event.shapeless(
    Item.of('bhc:blue_heart_canister', 1), // arg 1: output
    [
      'bhc:green_heart_canister',
      'bhc:blue_heart'                           	    //arg 2: the array of inputs
    ]
  )


  event.shapeless(
    Item.of('bhc:blue_heart', 1), // arg 1: output
    [
      'bhc:green_heart',
      'bhc:green_heart'                           	    //arg 2: the array of inputs
    ]
  )

  event.shapeless(
    Item.of('bhc:green_heart', 1), // arg 1: output
    [
      'bhc:yellow_heart',
      'bhc:yellow_heart'                           	    //arg 2: the array of inputs
    ]
  )

  event.shapeless(
    Item.of('bhc:yellow_heart', 1), // arg 1: output
    [
      'bhc:red_heart',
      'bhc:red_heart'                           	    //arg 2: the array of inputs
    ]
  )


  //体力升级
  event.shaped(
    Item.of('paraglider:stamina_vessel', 1),               // arg 1: output
    [
      'AAA',
      'AAA',                                                           // arg 2: the shape (array of strings)
      'AAA'
    ],
    {
      A: 'paraglider:spirit_orb'
      //arg 3: the mapping obje
    }
  )




  //遗物宝石
  event.shaped(
    Item.of('l2artifacts:boost_main_1', 6),               // arg 1: output
    [
      ' A ',
      'BAB',                                                           // arg 2: the shape (array of strings)
      ' A '
    ],
    {
      A: 'minecraft:diamond',
      B: 'minecraft:gold_ingot'                                //arg 3: the mapping obje
    }
  )

  event.shaped(
    Item.of('l2artifacts:boost_sub_1', 4),               // arg 1: output
    [
      ' A ',
      ' A ',                                                           // arg 2: the shape (array of strings)
      ' A '
    ],
    {
      A: 'minecraft:emerald'
      //arg 3: the mapping obje
    }
  )

  event.shaped(
    Item.of('l2artifacts:stat_container_1', 1),               // arg 1: output
    [
      ' A ',
      'BAB',                                                           // arg 2: the shape (array of strings)
      ' A '
    ],
    {
      A: 'minecraft:paper',
      B: 'minecraft:gold_ingot'                                //arg 3: the mapping obje
    }
  )

  event.shaped(
    Item.of('l2artifacts:select', 1),               // arg 1: output
    [
      'AAA',
      'AAA',                                                           // arg 2: the shape (array of strings)
      'AAA'
    ],
    {
      A: 'l2artifacts:random_5'
      //arg 3: the mapping obje
    }
  )







  //突变  待改为炼金台合成
  event.shaped(
    Item.of('mutantmore:compound_z', 1),               // arg 1: output
    [
      ' B ',
      'BAB',                                                           // arg 2: the shape (array of strings)
      'BBB'
    ],
    {
      A: 'minecraft:nether_star',
      B: 'minecraft:glass'                                //arg 3: the mapping obje
    }
  )

  event.shaped(
    Item.of('mutantmore:formula_y', 1),               // arg 1: output
    [
      ' B ',
      'BAB',                                                           // arg 2: the shape (array of strings)
      'BBB'
    ],
    {
      A: 'minecraft:wither_skeleton_skull',
      B: 'minecraft:glass'                                //arg 3: the mapping obje
    }
  )

  event.shapeless(
    Item.of('minecraft:wither_skeleton_skull', 3), // arg 1: output
    [
      'mutantmore:mutant_wither_skeleton_skull'                           	    //arg 2: the array of inputs
    ]
  )

  //去除无用配方
  event.remove({ id: 'villagertools:gears' })

  event.remove({ id: 'wom:netherite_mask' })
  event.remove({ id: 'wom:netherite_manicle' })
  event.remove({ id: 'wom:netherite_belt' })
  event.remove({ id: 'wom:netherite_chains' })
  event.remove({ id: 'wom:emerald_earrings' })
  event.remove({ id: 'wom:emerald_chakra' })
  event.remove({ id: 'wom:emerald_tasset' })
  event.remove({ id: 'wom:emerald_anklebracelet' })
  event.remove({ id: 'wom:diamond_crown' })
  event.remove({ id: 'wom:diamond_armbracelet' })
  event.remove({ id: 'wom:diamond_legtopseal' })
  event.remove({ id: 'wom:diamond_legbottomseal' })
  event.remove({ id: 'wom:golden_monocle' })
  event.remove({ id: 'wom:golden_kit' })
  event.remove({ id: 'wom:golden_chrono' })
  event.remove({ id: 'wom:golden_mokassin' })









  //幽谧锭
  event.remove({ id: 'deeperdarker:reinforced_echo_shard' })
  event.shaped(
    Item.of('l2complements:sculkium_ingot', 1),               // arg 1: output
    [
      'AB ',
      'BC ',                                                           // arg 2: the shape (array of strings)
      '   '
    ],
    {
      A: 'minecraft:echo_shard',
      B: 'deeperdarker:warden_carapace',
      C: 'minecraft:copper_ingot'                                         //arg 3: the mapping obje
    }
  )





  //飞行器
  event.remove({ id: 'immersive_aircraft:industrial_gears' })
  event.remove({ id: 'immersive_aircraft:boiler' })
  event.remove({ id: 'immersive_aircraft:gyroscope' })
  event.remove({ id: 'immersive_aircraft:sturdy_pipes' })
  event.remove({ id: 'immersive_aircraft:nether_engine' })
  event.remove({ id: 'immersive_aircraft:engine' })
  event.remove({ id: 'immersive_aircraft:sail' })
  event.remove({ id: 'immersive_aircraft:hull' })



  event.shaped(
    Item.of('immersive_aircraft:hull', 1),               // arg 1: output
    [
      '   ',
      'AA ',                                                           // arg 2: the shape (array of strings)
      'AA '
    ],
    {
      A: 'create:andesite_casing'
      // B: 'minecraft:iron_ingot',
      //C:'create:cogwheel'                                         //arg 3: the mapping obje
    }
  )




  event.shaped(
    Item.of('immersive_aircraft:industrial_gears', 1),               // arg 1: output
    [
      ' BC',
      'A B',                                                           // arg 2: the shape (array of strings)
      'CA '
    ],
    {
      A: 'minecraft:copper_ingot',
      B: 'minecraft:iron_ingot',
      C: 'create:cogwheel'                                         //arg 3: the mapping obje
    }
  )

  event.shaped(
    Item.of('immersive_aircraft:gyroscope', 1),               // arg 1: output
    [
      ' B ',
      'CAC',                                                           // arg 2: the shape (array of strings)
      '   '
    ],
    {
      A: 'minecraft:comparator',
      B: 'minecraft:compass',
      C: 'create:electron_tube'                                         //arg 3: the mapping obje
    }
  )

  event.shaped(
    Item.of('immersive_aircraft:boiler', 1),               // arg 1: output
    [
      ' B ',
      'AAA',                                                           // arg 2: the shape (array of strings)
      'CCC'
    ],
    {
      A: 'create:fluid_tank',
      B: 'create:steam_engine',
      C: 'minecraft:campfire'                                         //arg 3: the mapping obje
    }
  )


  event.shaped(
    Item.of('immersive_aircraft:engine', 1),               // arg 1: output
    [
      ' B ',
      'ADA',                                                           // arg 2: the shape (array of strings)
      'BCB'
    ],
    {
      A: 'create:mechanical_bearing',
      B: 'minecraft:iron_block',
      C: 'immersive_aircraft:boiler',
      D: 'minecraft:blast_furnace'                                         //arg 3: the mapping obje
    }
  )

  event.shaped(
    Item.of('immersive_aircraft:sail', 1),               // arg 1: output
    [
      'ABB',
      'ABB',                                                           // arg 2: the shape (array of strings)
      '   '
    ],
    {
      A: 'minecraft:string',
      B: 'create:white_sail'
      // C:'create:cogwheel'                                         //arg 3: the mapping obje
    }
  )

  event.shaped(
    Item.of('immersive_aircraft:sturdy_pipes', 1),               // arg 1: output
    [
      '   ',
      'AAA',                                                           // arg 2: the shape (array of strings)
      '   '
    ],
    {
      A: 'create:fluid_pipe'
      // B: 'minecraft:iron_ingot',
      // C:'create:cogwheel'                                         //arg 3: the mapping obje
    }
  )

  event.shaped(
    Item.of('immersive_aircraft:nether_engine', 1),               // arg 1: output
    [
      'ABA',
      'CDC',                                                           // arg 2: the shape (array of strings)
      'EGE'
    ],
    {
      A: 'minecraft:magma_cream',
      B: 'minecraft:netherite_ingot',
      C: 'minecraft:blaze_rod',
      D: 'immersive_aircraft:engine',
      E: 'minecraft:nether_brick',
      G: 'create:blaze_burner'                                    //arg 3: the mapping obje
    }
  )




  event.stonecutting('1x blue_skies:charoite', '#aether:zanite_gemstone')

  event.shaped(
    Item.of('l2artifacts:gambler_head_1', 1),  //头
    [
      'ABC',
      'A A',
      '   '
    ],
    {
      A: 'blue_skies:fox_pelt',
      B: 'aether:zanite_gemstone',
      C: 'create:brass_ingot'
    }
  )

  event.shaped(
    Item.of('l2artifacts:gambler_body_1', 1),  //胸
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: 'create:brass_ingot',
      B: 'aether:zanite_gemstone'

    }
  )

  event.shaped(
    Item.of('l2artifacts:gambler_necklace_1', 1),//项链
    [
      ' A ',
      'A A',
      'BC '
    ],
    {
      A: 'create:brass_ingot',
      B: 'aether:zanite_gemstone',
      C: 'blue_skies:fox_pelt'
    }
  )

  event.shaped(
    Item.of('l2artifacts:gambler_bracelet_1', 1),//手环
    [
      'AA ',
      'CA ',
      'B  '
    ],
    {
      A: 'create:brass_ingot',
      B: 'aether:zanite_gemstone',
      C: 'blue_skies:fox_pelt'
    }
  )

  event.shaped(
    Item.of('l2artifacts:gambler_belt_1', 1),//腰带
    [
      '   ',
      'ACB',
      'AA '
    ],
    {
      A: 'create:brass_ingot',
      B: 'aether:zanite_gemstone',
      C: 'blue_skies:fox_pelt'
    }
  )




  event.shaped(
    Item.of('l2artifacts:berserker_head_1', 1),  //头
    [
      'ABC',
      'A A',
      '   '
    ],
    {
      A: 'iceandfire:deathworm_chitin_yellow',
      B: 'blue_skies:pyrope_gem',
      C: 'born_in_chaos_v1:nightmare_claw'
    }
  )


  event.shaped(
    Item.of('l2artifacts:berserker_body_1', 1),  //胸
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: 'iceandfire:deathworm_chitin_yellow',
      B: 'blue_skies:pyrope_gem'

    }
  )

  event.shaped(
    Item.of('l2artifacts:berserker_necklace_1', 1),//项链
    [
      ' A ',
      'A A',
      'BC '
    ],
    {
      A: 'iceandfire:deathworm_chitin_yellow',
      B: 'blue_skies:pyrope_gem',
      C: 'born_in_chaos_v1:nightmare_claw'
    }
  )

  event.shaped(
    Item.of('l2artifacts:berserker_bracelet_1', 1),//手环
    [
      'AA ',
      'CA ',
      'B  '
    ],
    {
      A: 'iceandfire:deathworm_chitin_yellow',
      B: 'born_in_chaos_v1:nightmare_claw',
      C: 'blue_skies:pyrope_gem'
    }
  )

  event.shaped(
    Item.of('l2artifacts:berserker_belt_1', 1),//腰带
    [
      '   ',
      'ACB',
      'AA '
    ],
    {
      A: 'born_in_chaos_v1:nightmare_claw',
      B: 'iceandfire:deathworm_chitin_yellow',
      C: 'blue_skies:pyrope_gem'
    }
  )

  event.shaped(
    Item.of('l2artifacts:archer_head_2', 1),  //头
    [
      'ABC',
      'A A',
      '   '
    ],
    {
      A: 'graveyard:corruption',
      B: 'alexscaves:uranium',
      C: 'alexsmobs:roadrunner_feather'
    }
  )

  event.shaped(
    Item.of('l2artifacts:archer_body_2', 1),  //胸
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: 'graveyard:corruption',
      B: 'alexscaves:uranium'

    }
  )

  event.shaped(
    Item.of('l2artifacts:archer_necklace_2', 1),//项链
    [
      ' A ',
      'A A',
      'BC '
    ],
    {
      A: 'graveyard:corruption',
      B: 'alexscaves:uranium',
      C: 'alexsmobs:roadrunner_feather'
    }
  )

  event.shaped(
    Item.of('l2artifacts:archer_bracelet_2', 1),//手环
    [
      'AA ',
      'CA ',
      'B  '
    ],
    {
      A: 'graveyard:corruption',
      B: 'alexsmobs:roadrunner_feather',
      C: 'alexscaves:uranium'
    }
  )

  event.shaped(
    Item.of('l2artifacts:archer_belt_2', 1),//腰带
    [
      '   ',
      'ACB',
      'AA '
    ],
    {
      A: 'graveyard:corruption',
      B: 'alexsmobs:roadrunner_feather',
      C: 'alexscaves:uranium'
    }
  )

  event.shaped(
    Item.of('l2artifacts:saint_head_3', 1),  //头
    [
      'ABC',
      'A A',
      '   '
    ],
    {
      A: 'aether:ambrosium_shard',
      B: 'alexsmobs:guster_eye',
      C: 'iceandfire:pixie_wings'
    }
  )

  event.shaped(
    Item.of('l2artifacts:saint_body_3', 1),  //胸
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: 'aether:ambrosium_shard',
      B: 'alexsmobs:guster_eye'

    }
  )

  event.shaped(
    Item.of('l2artifacts:saint_necklace_3', 1),//项链
    [
      ' A ',
      'A A',
      'BC '
    ],
    {
      A: 'aether:ambrosium_shard',
      B: 'iceandfire:pixie_wings',
      C: 'alexsmobs:guster_eye'
    }
  )

  event.shaped(
    Item.of('l2artifacts:saint_bracelet_3', 1),//手环
    [
      'AA ',
      'CA ',
      'B  '
    ],
    {
      A: 'aether:ambrosium_shard',
      B: 'alexsmobs:guster_eye',
      C: 'iceandfire:pixie_wings'
    }
  )

  event.shaped(
    Item.of('l2artifacts:saint_belt_3', 1),//腰带
    [
      '   ',
      'ACB',
      'AA '
    ],
    {
      A: 'aether:ambrosium_shard',
      B: 'alexsmobs:guster_eye',
      C: 'iceandfire:pixie_wings'
    }
  )




  event.shaped(
    Item.of('l2artifacts:perfection_head_3', 1),  //头
    [
      'ABC',
      'A A',
      '   '
    ],
    {
      A: 'aquamirae:abyssal_amethyst',
      B: 'alexscaves:pewen_sap',
      C: 'infernalexp:moth_dust'
    }
  )

  event.shaped(
    Item.of('l2artifacts:perfection_body_3', 1),  //胸
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: 'aquamirae:abyssal_amethyst',
      B: 'alexscaves:pewen_sap'

    }
  )

  event.shaped(
    Item.of('l2artifacts:perfection_necklace_3', 1),//项链
    [
      ' A ',
      'A A',
      'BC '
    ],
    {
      A: 'aquamirae:abyssal_amethyst',
      B: 'alexscaves:pewen_sap',
      C: 'infernalexp:moth_dust'
    }
  )

  event.shaped(
    Item.of('l2artifacts:perfection_bracelet_3', 1),//手环
    [
      'AA ',
      'CA ',
      'B  '
    ],
    {
      A: 'aquamirae:abyssal_amethyst',
      B: 'alexscaves:pewen_sap',
      C: 'infernalexp:moth_dust'
    }
  )

  event.shaped(
    Item.of('l2artifacts:perfection_belt_3', 1),//腰带
    [
      '   ',
      'ACB',
      'AA '
    ],
    {
      A: 'aquamirae:abyssal_amethyst',
      B: 'infernalexp:moth_dust',
      C: 'alexscaves:pewen_sap'
    }
  )


  event.shaped(
    Item.of('l2artifacts:froze_head_2', 1),  //头
    [
      'ABC',
      'A A',
      '   '
    ],
    {
      A: 'twilightforest:alpha_yeti_fur',
      B: 'iceandfire:sapphire_gem',
      C: 'blue_skies:aquite'
    }
  )

  event.shaped(
    Item.of('l2artifacts:froze_body_2', 1),  //胸
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: 'blue_skies:aquite',
      B: 'iceandfire:sapphire_gem'

    }
  )

  event.shaped(
    Item.of('l2artifacts:froze_necklace_2', 1),//项链
    [
      ' A ',
      'A A',
      'BC '
    ],
    {
      A: 'twilightforest:alpha_yeti_fur',
      B: 'iceandfire:sapphire_gem',
      C: 'blue_skies:aquite'
    }
  )

  event.shaped(
    Item.of('l2artifacts:froze_bracelet_2', 1),//手环
    [
      'AA ',
      'CA ',
      'B  '
    ],
    {
      A: 'twilightforest:alpha_yeti_fur',
      B: 'blue_skies:aquite',
      C: 'iceandfire:sapphire_gem'
    }
  )

  event.shaped(
    Item.of('l2artifacts:froze_belt_2', 1),//腰带
    [
      '   ',
      'ACB',
      'AA '
    ],
    {
      A: 'twilightforest:alpha_yeti_fur',
      B: 'blue_skies:aquite',
      C: 'iceandfire:sapphire_gem'
    }
  )

  event.shaped(
    Item.of('l2artifacts:executor_head_3', 1),  //头
    [
      'ABC',
      'A A',
      '   '
    ],
    {
      A: 'blue_skies:soul_fragment',
      B: 'gnumus:gnumus_claw',
      C: 'alexsmobs:hemolymph_sac'
    }
  )

  event.shaped(
    Item.of('l2artifacts:executor_body_3', 1),  //胸
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: 'blue_skies:soul_fragment',
      B: 'gnumus:gnumus_claw'

    }
  )

  event.shaped(
    Item.of('l2artifacts:executor_necklace_3', 1),//项链
    [
      ' A ',
      'A A',
      'BC '
    ],
    {
      A: 'blue_skies:soul_fragment',
      B: 'gnumus:gnumus_claw',
      C: 'alexsmobs:hemolymph_sac'
    }
  )

  event.shaped(
    Item.of('l2artifacts:executor_bracelet_3', 1),//手环
    [
      'AA ',
      'CA ',
      'B  '
    ],
    {
      A: 'blue_skies:soul_fragment',
      B: 'gnumus:gnumus_claw',
      C: 'alexsmobs:hemolymph_sac'
    }
  )

  event.shaped(
    Item.of('l2artifacts:executor_belt_3', 1),//腰带
    [
      '   ',
      'ACB',
      'AA '
    ],
    {
      A: 'blue_skies:soul_fragment',
      B: 'alexsmobs:hemolymph_sac',
      C: 'gnumus:gnumus_claw'
    }
  )

  event.shaped(
    Item.of('l2artifacts:physical_head_2', 1),  //头
    [
      'ABC',
      'A A',
      '   '
    ],
    {
      A: 'cnb:cindershell_shell_shard',
      B: 'undergarden:utherium_crystal',
      C: 'cataclysm:coral_chunk'
    }
  )

  event.shaped(
    Item.of('l2artifacts:physical_body_2', 1),  //胸
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: 'cnb:cindershell_shell_shard',
      B: 'undergarden:utherium_crystal'

    }
  )

  event.shaped(
    Item.of('l2artifacts:physical_necklace_2', 1),//项链
    [
      ' A ',
      'A A',
      'BC '
    ],
    {
      A: 'cnb:cindershell_shell_shard',
      B: 'undergarden:utherium_crystal',
      C: 'cataclysm:coral_chunk'
    }
  )

  event.shaped(
    Item.of('l2artifacts:physical_bracelet_2', 1),//手环
    [
      'AA ',
      'CA ',
      'B  '
    ],
    {
      A: 'cnb:cindershell_shell_shard',
      B: 'cataclysm:coral_chunk',
      C: 'undergarden:utherium_crystal'
    }
  )

  event.shaped(
    Item.of('l2artifacts:physical_belt_2', 1),//腰带
    [
      '   ',
      'ACB',
      'AA '
    ],
    {
      A: 'cnb:cindershell_shell_shard',
      B: 'undergarden:utherium_crystal',
      C: 'cataclysm:coral_chunk'
    }
  )


  event.shaped(
    Item.of('l2artifacts:abyss_medal_head_2', 1),  //头
    [
      'ABC',
      'A A',
      '   '
    ],
    {
      A: 'unusualend:enderblob_moult',
      B: 'unusualend:enderling_scrap',
      C: 'cataclysm:amethyst_crab_shell'
    }
  )

  event.shaped(
    Item.of('l2artifacts:abyss_medal_body_2', 1),  //胸
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: 'unusualend:enderblob_moult',
      B: 'unusualend:enderling_scrap'

    }
  )

  event.shaped(
    Item.of('l2artifacts:abyss_medal_necklace_2', 1),//项链
    [
      ' A ',
      'A A',
      'BC '
    ],
    {
      A: 'unusualend:enderblob_moult',
      B: 'unusualend:enderling_scrap',
      C: 'cataclysm:amethyst_crab_shell'
    }
  )

  event.shaped(
    Item.of('l2artifacts:abyss_medal_bracelet_2', 1),//手环
    [
      'AA ',
      'CA ',
      'B  '
    ],
    {
      A: 'unusualend:enderblob_moult',
      B: 'cataclysm:amethyst_crab_shell',
      C: 'unusualend:enderling_scrap'
    }
  )

  event.shaped(
    Item.of('l2artifacts:abyss_medal_belt_2', 1),//腰带
    [
      '   ',
      'ACB',
      'AA '
    ],
    {
      A: 'unusualend:enderblob_moult',
      B: 'cataclysm:amethyst_crab_shell',
      C: 'unusualend:enderling_scrap'
    }
  )


  event.shaped(
    Item.of('l2artifacts:wrath_head_3', 1),  //头
    [
      'ABC',
      'A A',
      '   '
    ],
    {
      A: 'born_in_chaos_v1:ethereal_spirit',
      B: 'born_in_chaos_v1:fel_lamp',
      C: 'born_in_chaos_v1:fangofthe_hound_leader'
    }
  )

  event.shaped(
    Item.of('l2artifacts:wrath_body_3', 1),  //胸
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: 'born_in_chaos_v1:ethereal_spirit',
      B: 'born_in_chaos_v1:fel_lamp'

    }
  )

  event.shaped(
    Item.of('l2artifacts:wrath_necklace_3', 1),//项链
    [
      ' A ',
      'A A',
      'BC '
    ],
    {
      A: 'born_in_chaos_v1:ethereal_spirit',
      B: 'born_in_chaos_v1:fel_lamp',
      C: 'born_in_chaos_v1:fangofthe_hound_leader'
    }
  )

  event.shaped(
    Item.of('l2artifacts:wrath_bracelet_3', 1),//手环
    [
      'AA ',
      'CA ',
      'B  '
    ],
    {
      A: 'born_in_chaos_v1:ethereal_spirit',
      B: 'born_in_chaos_v1:fel_lamp',
      C: 'born_in_chaos_v1:fangofthe_hound_leader'
    }
  )

  event.shaped(
    Item.of('l2artifacts:wrath_belt_3', 1),//腰带
    [
      '   ',
      'ACB',
      'AA '
    ],
    {
      A: 'born_in_chaos_v1:ethereal_spirit',
      B: 'born_in_chaos_v1:fel_lamp',
      C: 'born_in_chaos_v1:fangofthe_hound_leader'
    }
  )

  event.shaped(
    Item.of('l2artifacts:fury_of_fallen_head_1', 1),  //头
    [
      'ABC',
      'A A',
      '   '
    ],
    {
      A: 'undead_unleashed:grave_metal_scrap',
      B: 'infernalexp:glownuggets',
      C: 'l2complements:warden_bone_shard'
    }
  )

  event.shaped(
    Item.of('l2artifacts:fury_of_fallen_body_1', 1),  //胸
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: 'undead_unleashed:grave_metal_scrap',
      B: 'l2complements:warden_bone_shard'

    }
  )

  event.shaped(
    Item.of('l2artifacts:fury_of_fallen_necklace_1', 1),//项链
    [
      ' A ',
      'A A',
      'BC '
    ],
    {
      A: 'undead_unleashed:grave_metal_scrap',
      B: 'l2complements:warden_bone_shard',
      C: 'infernalexp:glownuggets'
    }
  )

  event.shaped(
    Item.of('l2artifacts:fury_of_fallen_bracelet_1', 1),//手环
    [
      'AA ',
      'CA ',
      'B  '
    ],
    {
      A: 'undead_unleashed:grave_metal_scrap',
      B: 'infernalexp:glownuggets',
      C: 'l2complements:warden_bone_shard'
    }
  )

  event.shaped(
    Item.of('l2artifacts:fury_of_fallen_belt_1', 1),//腰带
    [
      '   ',
      'ACB',
      'AA '
    ],
    {
      A: 'undead_unleashed:grave_metal_scrap',
      B: 'infernalexp:glownuggets',
      C: 'l2complements:warden_bone_shard'
    }
  )



  event.shaped(
    Item.of('l2artifacts:vampire_head_1', 1),  //头
    [
      'ABC',
      'A A',
      '   '
    ],
    {
      A: 'born_in_chaos_v1:fire_dust',
      B: 'bhc:red_heart',
      C: 'born_in_chaos_v1:orbofthe_summoner'
    }
  )

  event.shaped(
    Item.of('l2artifacts:vampire_body_1', 1),  //胸
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: 'born_in_chaos_v1:fire_dust',
      B: 'born_in_chaos_v1:orbofthe_summoner'

    }
  )

  event.shaped(
    Item.of('l2artifacts:vampire_necklace_1', 1),//项链
    [
      ' A ',
      'A A',
      'BC '
    ],
    {
      A: 'born_in_chaos_v1:fire_dust',
      B: 'born_in_chaos_v1:orbofthe_summoner',
      C: 'bhc:red_heart'
    }
  )

  event.shaped(
    Item.of('l2artifacts:vampire_bracelet_1', 1),//手环
    [
      'AA ',
      'CA ',
      'B  '
    ],
    {
      A: 'born_in_chaos_v1:fire_dust',
      B: 'born_in_chaos_v1:orbofthe_summoner',
      C: 'bhc:red_heart'
    }
  )

  event.shaped(
    Item.of('l2artifacts:vampire_belt_1', 1),//腰带
    [
      '   ',
      'ACB',
      'AA '
    ],
    {
      A: 'born_in_chaos_v1:fire_dust',
      B: 'born_in_chaos_v1:orbofthe_summoner',
      C: 'bhc:red_heart'
    }
  )


  event.shaped(
    Item.of('l2artifacts:gluttony_head_4', 1),  //头
    [
      'ABC',
      'A A',
      '   '
    ],
    {
      A: 'born_in_chaos_v1:monster_skin',
      B: 'born_in_chaos_v1:monster_flesh',
      C: 'cataclysm:monstrous_horn'
    }
  )

  event.shaped(
    Item.of('l2artifacts:gluttony_body_4', 1),  //胸
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: 'born_in_chaos_v1:monster_skin',
      B: 'born_in_chaos_v1:monster_flesh'

    }
  )

  event.shaped(
    Item.of('l2artifacts:gluttony_necklace_4', 1),//项链
    [
      ' A ',
      'A A',
      'BC '
    ],
    {
      A: 'born_in_chaos_v1:monster_skin',
      B: 'cataclysm:monstrous_horn',
      C: 'born_in_chaos_v1:monster_flesh'
    }
  )

  event.shaped(
    Item.of('l2artifacts:gluttony_bracelet_4', 1),//手环
    [
      'AA ',
      'CA ',
      'B  '
    ],
    {
      A: 'born_in_chaos_v1:monster_skin',
      B: 'cataclysm:monstrous_horn',
      C: 'born_in_chaos_v1:monster_flesh'
    }
  )

  event.shaped(
    Item.of('l2artifacts:gluttony_belt_4', 1),//腰带
    [
      '   ',
      'ACB',
      'AA '
    ],
    {
      A: 'born_in_chaos_v1:monster_skin',
      B: 'cataclysm:monstrous_horn',
      C: 'born_in_chaos_v1:monster_flesh'
    }
  )


  event.shaped(
    Item.of('l2artifacts:ancient_scroll_head_1', 1),  //头
    [
      'ABC',
      'A A',
      '   '
    ],
    {
      A: 'cataclysm:koboleton_bone',
      B: 'gnumus:vintage_alloy_ingot',
      C: 'cataclysm:ancient_metal_nugget'
    }
  )

  event.shaped(
    Item.of('l2artifacts:ancient_scroll_body_1', 1),  //胸
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: 'cataclysm:koboleton_bone',
      B: 'cataclysm:ancient_metal_nugget'

    }
  )

  event.shaped(
    Item.of('l2artifacts:ancient_scroll_necklace_1', 1),//项链
    [
      ' A ',
      'A A',
      'BC '
    ],
    {
      A: 'cataclysm:koboleton_bone',
      B: 'cataclysm:ancient_metal_nugget',
      C: 'gnumus:vintage_alloy_ingot'
    }
  )

  event.shaped(
    Item.of('l2artifacts:ancient_scroll_bracelet_1', 1),//手环
    [
      'AA ',
      'CA ',
      'B  '
    ],
    {
      A: 'cataclysm:koboleton_bone',
      B: 'cataclysm:ancient_metal_nugget',
      C: 'gnumus:vintage_alloy_ingot'
    }
  )

  event.shaped(
    Item.of('l2artifacts:ancient_scroll_belt_1', 1),//腰带
    [
      '   ',
      'ACB',
      'AA '
    ],
    {
      A: 'cataclysm:koboleton_bone',
      B: 'cataclysm:ancient_metal_nugget',
      C: 'gnumus:vintage_alloy_ingot'
    }
  )




  event.shaped(
    Item.of('l2artifacts:long_shooter_head_1', 1),  //头
    [
      'ABC',
      'A A',
      '   '
    ],
    {
      A: 'alexsmobs:bison_fur',
      B: 'deep_aether:skyjade',
      C: 'alexsmobs:straddlite'
    }
  )
  event.shaped(
    Item.of('l2artifacts:long_shooter_necklace_1', 1),//项链
    [
      ' A ',
      'A A',
      'BC '
    ],
    {
      A: 'alexsmobs:bison_fur',
      B: 'deep_aether:skyjade',
      C: 'alexsmobs:straddlite'
    }
  )

  event.shaped(
    Item.of('l2artifacts:long_shooter_bracelet_1', 1),//手环
    [
      'AA ',
      'CA ',
      'B  '
    ],
    {
      A: 'alexsmobs:bison_fur',
      B: 'deep_aether:skyjade',
      C: 'alexsmobs:straddlite'
    }
  )

  event.shaped(
    Item.of('l2artifacts:long_shooter_belt_1', 1),//腰带
    [
      '   ',
      'ACB',
      'AA '
    ],
    {
      A: 'alexsmobs:bison_fur',
      B: 'deep_aether:skyjade',
      C: 'alexsmobs:straddlite'
    }
  )



  event.shaped(
    Item.of('l2artifacts:protection_head_3', 1),  //冠
    [
      'AAA',
      'A A',
      '   '
    ],
    {
      A: 'l2complements:totemic_gold_ingot'

    }
  )



  event.shaped(
    Item.of('l2artifacts:sun_block_head_4', 1),  //伞
    [
      '   ',
      ' A ',
      '   '
    ],
    {
      A: 'artifacts:umbrella'

    }
  )



  event.shaped(
    Item.of('l2artifacts:damocles_head_1', 1),  //剑
    [
      'B  ',
      ' A ',
      '  A'
    ],
    {
      A: 'twilightforest:carminite',
      B: 'spartanfire:witherbone_handle'

    }
  )



























  // This part, inside the curly braces, is the callback.
  // You can modify as many recipes as you like in here,
  // without needing to use ServerEvents.recipes() again.
  // Change recipes here
  console.log('Hello! The recipe event has fired!')
})

ServerEvents.tags('item', event => {
  // Get the #forge:cobblestone tag collection and add Diamond Ore to it
  // event.get('forge:cobblestone').add('minecraft:diamond_ore')

  // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
  // event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})


