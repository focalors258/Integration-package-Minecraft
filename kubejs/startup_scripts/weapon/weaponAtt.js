


// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

/*StartupEvents.registry('item', event => {

   // Register new items here
   // event.create('example_item').displayName('Example Item')


   // Other item methods also work on these builders. It is recommended to give the spell books the proper Curios item tag for them to work properly.
        // (that being "curios:spellbook")

        //This just creates a basic spell book with nothing special to it. It is given 3 spell slots as defined.
             event.create("test_spellbook", "irons_spells_js:spellbook")//创建的类型
               .setMaxSpellSlots(3)//法术容量
/*
        // You can add attributes to the spell book, including custom attributes.
        // This spell book is given 8 total spell slots and two attributes.
             event.create("test_attribute_spellbook", "irons_spells_js:spellbook")
               .setMaxSpellSlots(8)
               .addDefaultAttribute("kubejs:test_spell_power", "Test Spell Power", 2.0, "multiply_total")
               .addDefaultAttribute("minecraft:generic.movement_speed", "Test Movement Speed", 1.2, "multiply_total")//属性

        // If you give a spell book default spells, it is converted to a Unique spell book.
        // This spell book has been given two extra attributes and a single default spell, being Firebolt at level 1.
             event.create("test_unique_spellbook", "irons_spells_js:spellbook")
               .setMaxSpellSlots(4)
               .addDefaultAttribute("kubejs:test_spell_power", "Test Spell Power", 2.0, "multiply_total")
               .addDefaultAttribute("minecraft:generic.movement_speed", "Test Movement Speed", 1.2, "multiply_total")
               .addDefaultSpell(SpellRegistry.FIREBOLT_SPELL, 1)

        // You can create custom staves too, and give them additional custom attributes.
        // This staff deals 50 base damage and gives the user 200% more spell power for the school Test, shown in a previous example.
             event.create("test_staff", "irons_spells_js:staff")
               .addAdditionalAttribute("kubejs:test_spell_power", "Test Spell Power", 2.0, "multiply_total")
               .attackDamageBaseline(50)
               .speedBaseline(-2.4)

        // Along with custom staves, you can also create custom magic swords that come with default spells.
        // This sword deals 100 damage, has 3 attack speed, and has two pre-inscribed spells, being Firebolt and Blood Slash.
             event.create("test_magic_sword", "irons_spells_js:magic_sword")
               .addAdditionalAttribute("kubejs:test_spell_power", "Test Spell Power", 2.0, "multiply_total")
               .attackDamageBaseline(100)
               .speedBaseline(3)
               .addDefaultSpell(SpellRegistry.FIREBOLT_SPELL, 1)
               .addDefaultSpell(SpellRegistry.BLOOD_SLASH_SPELL, 2)

        // Also, you don't need to use a registry object for spells. You can input a string as the spell ID and it works just fine as well.
             event.create("test_magic_sword_2", "irons_spells_js:magic_sword")
               .addAdditionalAttribute("kubejs:test_spell_power", "Test Spell Power", 2.0, "multiply_total")
               .attackDamageBaseline(100)
               .speedBaseline(3)
               .addDefaultSpell("irons_spellbooks:starfall", 1)
               .addDefaultSpell("irons_spellbooks:planar_sight", 2)



})*/

StartupEvents.registry('block', event => {
   // Register new blocks here
   // event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})


ItemEvents.modification(event => {


   setArmor(event, 'undergarden', 'utherium', 25)


   setArmor(event, 'undergarden', 'froststeel', 23)//深园盔甲


   setArmor(event, 'undergarden', 'cloggrum', 21)














   //暮色森林   20级
   event.modify('twilightforest:naga_chestplate', item => {



      //item.maxDamage = 3460
      item.armorProtection = 5
   })
   event.modify('twilightforest:naga_leggings', item => {
      //item.maxDamage = 3460
      item.armorProtection = 8
   })

   event.modify('twilightforest:ironwood_helmet', item => {
      //item.maxDamage = 3460
      item.armorProtection = 10.5
   })
   event.modify('twilightforest:ironwood_chestplate', item => {
      //item.maxDamage = 3460
      item.armorProtection = 17
   })
   event.modify('twilightforest:ironwood_leggings', item => {
      //item.maxDamage = 3460
      item.armorProtection = 15
   })
   event.modify('twilightforest:ironwood_boots', item => {
      //item.maxDamage = 3460
      item.armorProtection = 8.5
   })



   event.modify('twilightforest:arctic_helmet', item => {
      //item.maxDamage = 3460
      item.armorProtection = 5
   })
   event.modify('twilightforest:arctic_chestplate', item => {
      //item.maxDamage = 3460
      item.armorProtection = 7
   })
   event.modify('twilightforest:arctic_leggings', item => {
      //item.maxDamage = 3460
      item.armorProtection = 6
   })
   event.modify('twilightforest:arctic_boots', item => {
      //item.maxDamage = 3460
      item.armorProtection = 3
   })

   event.modify('twilightforest:yeti_helmet', item => {
      //item.maxDamage = 5190
      item.armorProtection = 6
   })
   event.modify('twilightforest:yeti_chestplate', item => {
      //item.maxDamage = 5190
      item.armorProtection = 8
   })
   event.modify('twilightforest:yeti_leggings', item => {
      //item.maxDamage = 5190
      item.armorProtection = 7

   })
   event.modify('twilightforest:yeti_boots', item => {
      //item.maxDamage = 5190
      item.armorProtection = 5
   })





   event.modify('twilightforest:fiery_helmet', item => {
      //item.maxDamage = 6760
      item.armorProtection = 12

   })
   event.modify('twilightforest:fiery_chestplate', item => {
      //item.maxDamage = 6760
      item.armorProtection = 19
   })
   event.modify('twilightforest:fiery_leggings', item => {
      //item.maxDamage = 6760
      item.armorProtection = 17
   })
   event.modify('twilightforest:fiery_boots', item => {
      //item.maxDamage = 6760
      item.armorProtection = 9.5
   })



   event.modify('twilightforest:steeleaf_helmet', item => {
      //item.maxDamage = 4230
      item.armorProtection = 6
   })
   event.modify('twilightforest:steeleaf_chestplate', item => {
      //item.maxDamage = 4230
      item.armorProtection = 8
   })
   event.modify('twilightforest:steeleaf_leggings', item => {
      //item.maxDamage = 4230
      item.armorProtection = 7
   })
   event.modify('twilightforest:steeleaf_boots', item => {
      //item.maxDamage = 4230
      item.armorProtection = 5
   })




   event.modify('twilightforest:knightmetal_helmet', item => {
      //item.maxDamage = 4230
      item.armorProtection = 11
   })
   event.modify('twilightforest:knightmetal_chestplate', item => {
      //item.maxDamage = 4230
      item.armorProtection = 18
   })
   event.modify('twilightforest:knightmetal_leggings', item => {
      //item.maxDamage = 4230
      item.armorProtection = 16
   })
   event.modify('twilightforest:knightmetal_boots', item => {
      //item.maxDamage = 4230
      item.armorProtection = 9
   })


   event.modify('twilightforest:phantom_helmet', item => {
      //item.maxDamage = 4230
      item.armorProtection = 5
   })
   event.modify('twilightforest:phantom_chestplate', item => {
      //item.maxDamage = 4230
      item.armorProtection = 8
   })





   //末地







   //龙鳞套  50级
   event.modify('iceandfire:tide_blue_helmet', item => {
      //item.maxDamage = 24850
      item.armorProtection = 23
   })
   event.modify('iceandfire:tide_bronze_helmet', item => {
      //item.maxDamage = 24850
      item.armorProtection = 23
   })
   event.modify('iceandfire:tide_deepblue_helmet', item => {
      //item.maxDamage = 24850
      item.armorProtection = 23
   })
   event.modify('iceandfire:tide_green_helmet', item => {
      //item.maxDamage = 24850
      item.armorProtection = 23
   })
   event.modify('iceandfire:tide_purple_helmet', item => {
      //item.maxDamage = 24850
      item.armorProtection = 23
   })
   event.modify('iceandfire:tide_red_helmet', item => {
      //item.maxDamage = 24850
      item.armorProtection = 23
   })
   event.modify('iceandfire:tide_teal_helmet', item => {
      //item.maxDamage = 24850
      item.armorProtection = 23
   })



   event.modify('iceandfire:tide_blue_chestplate', item => {
      //item.maxDamage = 24850
      item.armorProtection = 37
   })
   event.modify('iceandfire:tide_bronze_chestplate', item => {
      //item.maxDamage = 24850
      item.armorProtection = 37
   })
   event.modify('iceandfire:tide_deepblue_chestplate', item => {
      //item.maxDamage = 24850
      item.armorProtection = 37
   })
   event.modify('iceandfire:tide_green_chestplate', item => {
      //item.maxDamage = 24850
      item.armorProtection = 37
   })
   event.modify('iceandfire:tide_purple_chestplate', item => {
      //item.maxDamage = 24850
      item.armorProtection = 37
   })
   event.modify('iceandfire:tide_red_chestplate', item => {
      //item.maxDamage = 24850
      item.armorProtection = 37
   })
   event.modify('iceandfire:tide_teal_chestplate', item => {
      //item.maxDamage = 24850
      item.armorProtection = 37
   })


   event.modify('iceandfire:tide_blue_leggings', item => {
      //item.maxDamage = 24850
      item.armorProtection = 32.5
   })
   event.modify('iceandfire:tide_bronze_leggings', item => {
      //item.maxDamage = 24850
      item.armorProtection = 32.5
   })
   event.modify('iceandfire:tide_deepblue_leggings', item => {
      //item.maxDamage = 24850
      item.armorProtection = 32.5
   })
   event.modify('iceandfire:tide_green_leggings', item => {
      //item.maxDamage = 24850
      item.armorProtection = 32.5
   })
   event.modify('iceandfire:tide_purple_leggings', item => {
      //item.maxDamage = 24850
      item.armorProtection = 32.5
   })
   event.modify('iceandfire:tide_red_leggings', item => {
      //item.maxDamage = 24850
      item.armorProtection = 32.5
   })
   event.modify('iceandfire:tide_teal_leggings', item => {
      //item.maxDamage = 24850
      item.armorProtection = 32.5
   })


   event.modify('iceandfire:tide_blue_boots', item => {
      //item.maxDamage = 24850
      item.armorProtection = 18.5
   })
   event.modify('iceandfire:tide_bronze_boots', item => {
      //item.maxDamage = 24850
      item.armorProtection = 18.5
   })
   event.modify('iceandfire:tide_deepblue_boots', item => {
      //item.maxDamage = 24850
      item.armorProtection = 18.5
   })
   event.modify('iceandfire:tide_green_boots', item => {
      //item.maxDamage = 24850
      item.armorProtection = 18.5
   })
   event.modify('iceandfire:tide_purple_boots', item => {
      //item.maxDamage = 24850
      item.armorProtection = 18.5
   })
   event.modify('iceandfire:tide_red_boots', item => {
      //item.maxDamage = 24850
      item.armorProtection = 18.5
   })
   event.modify('iceandfire:tide_teal_boots', item => {
      //item.maxDamage = 24850
      item.armorProtection = 18.5
   })





   event.modify('iceandfire:armor_blue_helmet', item => {
      //item.maxDamage =26180
      item.armorProtection = 24.5
   })
   event.modify('iceandfire:armor_bronze_helmet', item => {
      //item.maxDamage = 26180
      item.armorProtection = 24.5
   })
   event.modify('iceandfire:armor_copper_helmet', item => {
      //item.maxDamage = 26180
      item.armorProtection = 24.5
   })
   event.modify('iceandfire:armor_green_helmet', item => {
      //item.maxDamage = 26180
      item.armorProtection = 24.5
   })
   event.modify('iceandfire:armor_black_helmet', item => {
      //item.maxDamage = 26180
      item.armorProtection = 24.5
   })
   event.modify('iceandfire:armor_red_helmet', item => {
      //item.maxDamage = 26180
      item.armorProtection = 24.5
   })
   event.modify('iceandfire:armor_gray_helmet', item => {
      //item.maxDamage = 26180
      item.armorProtection = 24.5
   })
   event.modify('iceandfire:armor_white_helmet', item => {
      //item.maxDamage = 26180
      item.armorProtection = 24.5
   })
   event.modify('iceandfire:armor_sapphire_helmet', item => {
      //item.maxDamage = 26180
      item.armorProtection = 24.5
   })
   event.modify('iceandfire:armor_silver_helmet', item => {
      //item.maxDamage = 26180
      item.armorProtection = 24.5
   })
   event.modify('iceandfire:armor_electric_helmet', item => {
      //item.maxDamage = 26180
      item.armorProtection = 24.5
   })
   event.modify('iceandfire:armor_amythest_helmet', item => {
      //item.maxDamage = 26180
      item.armorProtection = 24.5
   })

   event.modify('iceandfire:armor_blue_chestplate', item => {
      //item.maxDamage = 26180
      item.armorProtection = 39

   })
   event.modify('iceandfire:armor_bronze_chestplate', item => {
      //item.maxDamage = 26180
      item.armorProtection = 39

   })
   event.modify('iceandfire:armor_copper_chestplate', item => {
      //item.maxDamage = 26180
      item.armorProtection = 39

   })
   event.modify('iceandfire:armor_green_chestplate', item => {
      //item.maxDamage = 26180
      item.armorProtection = 39

   })
   event.modify('iceandfire:armor_black_chestplate', item => {
      //item.maxDamage = 26180
      item.armorProtection = 39

   })
   event.modify('iceandfire:armor_red_chestplate', item => {
      //item.maxDamage = 26180
      item.armorProtection = 39

   })
   event.modify('iceandfire:armor_gray_chestplate', item => {
      //item.maxDamage = 26180
      item.armorProtection = 39

   })
   event.modify('iceandfire:armor_white_chestplate', item => {
      //item.maxDamage = 26180
      item.armorProtection = 39

   })
   event.modify('iceandfire:armor_sapphire_chestplate', item => {
      //item.maxDamage = 26180
      item.armorProtection = 39

   })
   event.modify('iceandfire:armor_silver_chestplate', item => {
      //item.maxDamage = 26180
      item.armorProtection = 39

   })
   event.modify('iceandfire:armor_electric_chestplate', item => {
      //item.maxDamage = 26180
      item.armorProtection = 39

   })
   event.modify('iceandfire:armor_amythest_chestplate', item => {
      //item.maxDamage = 26180
      item.armorProtection = 39

   })

   event.modify('iceandfire:armor_blue_leggings', item => {
      //item.maxDamage = 26180
      item.armorProtection = 34
   })
   event.modify('iceandfire:armor_bronze_leggings', item => {
      //item.maxDamage = 26180
      item.armorProtection = 34
   })
   event.modify('iceandfire:armor_copper_leggings', item => {
      //item.maxDamage = 26180
      item.armorProtection = 34
   })
   event.modify('iceandfire:armor_green_leggings', item => {
      //item.maxDamage = 26180
      item.armorProtection = 34
   })
   event.modify('iceandfire:armor_black_leggings', item => {
      //item.maxDamage = 26180
      item.armorProtection = 34
   })
   event.modify('iceandfire:armor_red_leggings', item => {
      //item.maxDamage = 26180
      item.armorProtection = 34
   })
   event.modify('iceandfire:armor_gray_leggings', item => {
      //item.maxDamage = 26180
      item.armorProtection = 34
   })
   event.modify('iceandfire:armor_white_leggings', item => {
      //item.maxDamage = 26180
      item.armorProtection = 34
   })
   event.modify('iceandfire:armor_sapphire_leggings', item => {
      //item.maxDamage = 26180
      item.armorProtection = 34
   })
   event.modify('iceandfire:armor_silver_leggings', item => {
      //item.maxDamage = 26180
      item.armorProtection = 34
   })
   event.modify('iceandfire:armor_electric_leggings', item => {
      //item.maxDamage = 26180
      item.armorProtection = 34
   })
   event.modify('iceandfire:armor_amythest_leggings', item => {
      //item.maxDamage = 26180
      item.armorProtection = 34
   })

   event.modify('iceandfire:armor_blue_boots', item => {
      //item.maxDamage = 26180
      item.armorProtection = 19.5
   })
   event.modify('iceandfire:armor_bronze_boots', item => {
      //item.maxDamage = 26180
      item.armorProtection = 19.5
   })
   event.modify('iceandfire:armor_copper_boots', item => {
      //item.maxDamage = 26180
      item.armorProtection = 19.5
   })
   event.modify('iceandfire:armor_green_boots', item => {
      //item.maxDamage = 26180
      item.armorProtection = 19.5
   })
   event.modify('iceandfire:armor_black_boots', item => {
      //item.maxDamage = 26180
      item.armorProtection = 19.5
   })
   event.modify('iceandfire:armor_red_boots', item => {
      //item.maxDamage = 26180
      item.armorProtection = 19.5
   })
   event.modify('iceandfire:armor_gray_boots', item => {
      //item.maxDamage = 26180
      item.armorProtection = 19.5
   })
   event.modify('iceandfire:armor_white_boots', item => {
      //item.maxDamage = 26180
      item.armorProtection = 19.5
   })
   event.modify('iceandfire:armor_sapphire_boots', item => {
      //item.maxDamage = 26180
      item.armorProtection = 19.5
   })
   event.modify('iceandfire:armor_silver_boots', item => {
      //item.maxDamage = 26180
      item.armorProtection = 19.5
   })
   event.modify('iceandfire:armor_electric_boots', item => {
      //item.maxDamage = 26180
      item.armorProtection = 19.5
   })
   event.modify('iceandfire:armor_amythest_boots', item => {
      //item.maxDamage = 26180
      item.armorProtection = 19.5

   })




   //虫壳套
   event.modify('iceandfire:deathworm_yellow_helmet', item => {
      //item.maxDamage = 1820
      item.armorProtection = 7.5
   })
   event.modify('iceandfire:deathworm_white_helmet', item => {
      //item.maxDamage = 1820
      item.armorProtection = 7.5
   })
   event.modify('iceandfire:deathworm_red_helmet', item => {
      //item.maxDamage = 1820
      item.armorProtection = 7.5
   })
   event.modify('iceandfire:myrmex_desert_helmet', item => {
      //item.maxDamage = 1820
      item.armorProtection = 7.5
   })
   event.modify('iceandfire:myrmex_jungle_helmet', item => {
      //item.maxDamage = 1820
      item.armorProtection = 7.5
   })
   event.modify('iceandfire:dragonsteel_fire_helmet', item => {
      //item.maxDamage = 30150
      item.armorProtection = 22
   })
   event.modify('iceandfire:dragonsteel_ice_helmet', item => {
      //item.maxDamage = 30150
      item.armorProtection = 22
   })
   event.modify('iceandfire:dragonsteel_lightning_helmet', item => {
      //item.maxDamage = 30150
      item.armorProtection = 22
   })




   event.modify('iceandfire:deathworm_yellow_chestplate', item => {
      //item.maxDamage = 2120
      item.armorProtection = 12
   })
   event.modify('iceandfire:deathworm_white_chestplate', item => {
      //item.maxDamage = 2120
      item.armorProtection = 12
   })
   event.modify('iceandfire:deathworm_red_chestplate', item => {
      //item.maxDamage = 2120
      item.armorProtection = 12
   })
   event.modify('iceandfire:myrmex_desert_chestplate', item => {
      //item.maxDamage = 2120
      item.armorProtection = 12
   })
   event.modify('iceandfire:myrmex_jungle_chestplate', item => {
      //item.maxDamage = 2120
      item.armorProtection = 12
   })
   event.modify('iceandfire:dragonsteel_fire_chestplate', item => {
      //item.maxDamage = 32700
      item.armorProtection = 36
   })
   event.modify('iceandfire:dragonsteel_ice_chestplate', item => {
      //item.maxDamage = 32700
      item.armorProtection = 36
   })
   event.modify('iceandfire:dragonsteel_lightning_chestplate', item => {
      //item.maxDamage = 32700
      item.armorProtection = 36
   })




   event.modify('iceandfire:deathworm_yellow_leggings', item => {
      //item.maxDamage = 1910
      item.armorProtection = 10.5
   })
   event.modify('iceandfire:deathworm_white_leggings', item => {
      //item.maxDamage = 1910
      item.armorProtection = 10.5
   })
   event.modify('iceandfire:deathworm_red_leggings', item => {
      //item.maxDamage = 1910
      item.armorProtection = 10.5
   })
   event.modify('iceandfire:myrmex_desert_leggings', item => {
      //item.maxDamage = 1910
      item.armorProtection = 10.5
   })
   event.modify('iceandfire:myrmex_jungle_leggings', item => {
      //item.maxDamage = 1910
      item.armorProtection = 10.5
   })
   event.modify('iceandfire:dragonsteel_fire_leggings', item => {
      //item.maxDamage = 31500
      item.armorProtection = 30
   })
   event.modify('iceandfire:dragonsteel_ice_leggings', item => {
      //item.maxDamage = 31500
      item.armorProtection = 30
   })
   event.modify('iceandfire:dragonsteel_lightning_leggings', item => {
      //item.maxDamage = 31500
      item.armorProtection = 30
   })

   event.modify('iceandfire:deathworm_yellow_boots', item => {
      //item.maxDamage = 1715
      item.armorProtection = 6
   })
   event.modify('iceandfire:deathworm_white_boots', item => {
      //item.maxDamage = 1715
      item.armorProtection = 6
   })
   event.modify('iceandfire:deathworm_red_boots', item => {
      //item.maxDamage = 1715
      item.armorProtection = 6
   })
   event.modify('iceandfire:myrmex_desert_boots', item => {
      //item.maxDamage = 1715
      item.armorProtection = 6
   })
   event.modify('iceandfire:myrmex_jungle_boots', item => {
      //item.maxDamage = 1715
      item.armorProtection = 6
   })
   event.modify('iceandfire:dragonsteel_fire_boots', item => {
      //item.maxDamage = 29500
      item.armorProtection = 18
   })
   event.modify('iceandfire:dragonsteel_ice_boots', item => {
      //item.maxDamage = 29500
      item.armorProtection = 18
   })
   event.modify('iceandfire:dragonsteel_lightning_boots', item => {
      //item.maxDamage = 29500
      item.armorProtection = 18
   })



















   //银铜套耐久

   event.modify('iceandfire:armor_silver_metal_helmet', item => {
      //item.maxDamage = 625
      item.armorProtection = 5
   })
   event.modify('iceandfire:armor_silver_metal_chestplate', item => {
      //item.maxDamage = 625
      item.armorProtection = 8
   })
   event.modify('iceandfire:armor_silver_metal_leggings', item => {
      //item.maxDamage = 625
      item.armorProtection = 7
   })
   event.modify('iceandfire:armor_silver_metal_boots', item => {
      //item.maxDamage = 625
      item.armorProtection = 4
   })

   event.modify('iceandfire:armor_copper_metal_helmet', item => {
      //item.maxDamage = 625
      item.armorProtection = 4
   })
   event.modify('iceandfire:armor_copper_metal_chestplate', item => {
      //item.maxDamage = 625
      item.armorProtection = 7
   })
   event.modify('iceandfire:armor_copper_metal_leggings', item => {
      //item.maxDamage = 625
      item.armorProtection = 6
   })
   event.modify('iceandfire:armor_copper_metal_boots', item => {
      //item.maxDamage = 625
      item.armorProtection = 3
   })






   //皮铁钻套耐久
   event.modify('minecraft:leather_helmet', item => {
      //item.maxDamage = 650
      item.armorProtection = 5
   })
   event.modify('minecraft:leather_chestplate', item => {
      //item.maxDamage = 625
      item.armorProtection = 8
   })
   event.modify('minecraft:leather_leggings', item => {
      //item.maxDamage = 625
      item.armorProtection = 7
   })
   event.modify('minecraft:leather_boots', item => {
      //item.maxDamage = 625
      item.armorProtection = 4
   })



   event.modify('minecraft:iron_helmet', item => {
      item.armorProtection = 6.5
      //item.maxDamage = 1050
   })
   event.modify('minecraft:iron_chestplate', item => {
      item.armorProtection = 10
      //item.maxDamage = 1050
   })
   event.modify('minecraft:iron_leggings', item => {
      item.armorProtection = 8.5
      //item.maxDamage = 1040
   })
   event.modify('minecraft:iron_boots', item => {
      item.armorProtection = 5
      //item.maxDamage = 1030
   })
   //<-----  此处开始修改
   event.modify('minecraft:chainmail_helmet', item => {
      item.armorProtection = 6.5
      //item.maxDamage = 910
   })
   event.modify('minecraft:chainmail_chestplate', item => {
      item.armorProtection = 10
      //item.maxDamage = 910
   })
   event.modify('minecraft:chainmail_leggings', item => {
      item.armorProtection = 8.5
      //item.maxDamage = 910
   })
   event.modify('minecraft:chainmail_boots', item => {
      item.armorProtection = 5
      //item.maxDamage = 910
   })




   event.modify('minecraft:diamond_helmet', item => {
      item.armorProtection = 9.5
      //item.maxDamage = 2310
   })
   event.modify('minecraft:diamond_chestplate', item => {
      item.armorProtection = 15
      //item.maxDamage = 2350
   })
   event.modify('minecraft:diamond_leggings', item => {
      item.armorProtection = 13
      //item.maxDamage = 2320
   })
   event.modify('minecraft:diamond_boots', item => {
      item.armorProtection = 7.5
      //item.maxDamage = 2310
   })
   //深园
   event.modify('minecraft:cloggrum_helmet', item => {
      item.armorProtection = 13
      //item.maxDamage = 8010
   })
   event.modify('minecraft:cloggrum_chestplate', item => {
      item.armorProtection = 21
      //item.maxDamage = 8010
   })
   event.modify('minecraft:cloggrum_leggings', item => {
      item.armorProtection = 18.5
      //item.maxDamage = 8010
   })
   event.modify('minecraft:cloggrum_boots', item => {
      item.armorProtection = 10.5
      //item.maxDamage = 8010
   })

   event.modify('minecraft:froststeel_helmet', item => {
      item.armorProtection = 14
      //item.maxDamage = 9126
   })
   event.modify('minecraft:froststeel_chestplate', item => {
      item.armorProtection = 22
      //item.maxDamage = 9126
   })
   event.modify('minecraft:froststeel_leggings', item => {
      item.armorProtection = 19
      //item.maxDamage = 9126
   })
   event.modify('minecraft:froststeel_boots', item => {
      item.armorProtection = 11
      //item.maxDamage = 9126
   })

   event.modify('minecraft:utherium_helmet', item => {
      item.armorProtection = 15
      //item.maxDamage = 10610
   })
   event.modify('minecraft:utherium_chestplate', item => {
      item.armorProtection = 24
      //item.maxDamage = 10610
   })
   event.modify('minecraft:utherium_leggings', item => {
      item.armorProtection = 21
      //item.maxDamage = 10610
   })
   event.modify('minecraft:utherium_boots', item => {
      item.armorProtection = 12
      //item.maxDamage = 10610
   })





   //下界合金套耐久    40级
   event.modify('minecraft:netherite_helmet', item => {
      //item.maxDamage = 13120
      item.armorProtection = 17
   })
   event.modify('minecraft:netherite_chestplate', item => {
      //item.maxDamage = 13120
      item.armorProtection = 27
   })
   event.modify('minecraft:netherite_leggings', item => {
      //item.maxDamage = 13120
      item.armorProtection = 23.5
   })
   event.modify('minecraft:netherite_boots', item => {
      //item.maxDamage = 13120
      item.armorProtection = 13.5
   })

   //生于馄饨
   event.modify('born_in_chaos_v1:dark_metal_armor_helmet', item => {
      //item.maxDamage = 14810
      item.armorProtection = 18
   })
   event.modify('born_in_chaos_v1:dark_metal_armor_chestplate', item => {
      //item.maxDamage = 14810
      item.armorProtection = 29
   })
   event.modify('born_in_chaos_v1:dark_metal_armor_leggings', item => {
      //item.maxDamage = 14810
      item.armorProtection = 25.5
   })
   event.modify('born_in_chaos_v1:dark_metal_armor_boots', item => {
      //item.maxDamage = 14810
      item.armorProtection = 14.5
   })





   //下界铁耐久(应调整所有盔甲防御)    42
   event.modify('advancednetherite:netherite_iron_helmet', item => {
      //item.maxDamage = 14850
      item.armorProtection = 18
   })
   event.modify('advancednetherite:netherite_iron_chestplate', item => {
      //item.maxDamage = 14850
      item.armorProtection = 29
   })
   event.modify('advancednetherite:netherite_iron_leggings', item => {
      //item.maxDamage = 14800
      item.armorProtection = 25.5
   })
   event.modify('advancednetherite:netherite_iron_boots', item => {
      //item.maxDamage = 14800
      item.armorProtection = 14.5
   })

   //下界金耐久       43
   event.modify('advancednetherite:netherite_gold_helmet', item => {
      //item.maxDamage = 16570
      item.armorProtection = 19.5
   })
   event.modify('advancednetherite:netherite_gold_chestplate', item => {
      //item.maxDamage = 16300
      item.armorProtection = 31
   })
   event.modify('advancednetherite:netherite_gold_leggings', item => {
      //item.maxDamage = 16550
      item.armorProtection = 27
   })
   event.modify('advancednetherite:netherite_gold_boots', item => {
      //item.maxDamage = 16250
      item.armorProtection = 15.5
   })

   //下界绿宝石耐久   45
   event.modify('advancednetherite:netherite_emerald_helmet', item => {
      //item.maxDamage = 18150
      item.armorProtection = 20.5
   })
   event.modify('advancednetherite:netherite_emerald_chestplate', item => {
      //item.maxDamage = 18100
      item.armorProtection = 33
   })
   event.modify('advancednetherite:netherite_emerald_leggings', item => {
      //item.maxDamage = 18100
      item.armorProtection = 29
   })
   event.modify('advancednetherite:netherite_emerald_boots', item => {
      //item.maxDamage = 18100
      item.armorProtection = 16.5
   })

   //下界钻石耐久     47级
   event.modify('advancednetherite:netherite_diamond_helmet', item => {
      //item.maxDamage = 19050
      item.armorProtection = 22
   })
   event.modify('advancednetherite:netherite_diamond_chestplate', item => {
      //item.maxDamage = 19250
      item.armorProtection = 35
   })
   event.modify('advancednetherite:netherite_diamond_leggings', item => {
      //item.maxDamage = 19200
      item.armorProtection = 30.5
   })
   event.modify('advancednetherite:netherite_diamond_boots', item => {
      //item.maxDamage = 19200
      item.armorProtection = 17.5
   })
   //蔚蓝浩空
   event.modify('blue_skies:pyrope_helmet', item => {
      //item.maxDamage = 23450
      item.armorProtection = 22.5
   })
   event.modify('blue_skies:pyrope_chestplate', item => {
      //item.maxDamage = 23450
      item.armorProtection = 36
   })
   event.modify('blue_skies:pyrope_leggings', item => {
      //item.maxDamage = 23450
      item.armorProtection = 31.5
   })
   event.modify('blue_skies:pyrope_boots', item => {
      //item.maxDamage = 23450
      item.armorProtection = 18
   })


   event.modify('blue_skies:horizonite_helmet', item => {
      //item.maxDamage = 23450
      item.armorProtection = 22.5
   })
   event.modify('blue_skies:horizonite_chestplate', item => {
      //item.maxDamage = 23450
      item.armorProtection = 36
   })
   event.modify('blue_skies:horizonite_leggings', item => {
      //item.maxDamage = 23450
      item.armorProtection = 31.5
   })
   event.modify('blue_skies:horizonite_boots', item => {
      //item.maxDamage = 23450
      item.armorProtection = 18
   })

   event.modify('blue_skies:aquite_helmet', item => {
      //item.maxDamage = 25150
      item.armorProtection = 24
   })
   event.modify('blue_skies:aquite_chestplate', item => {
      //item.maxDamage = 25150
      item.armorProtection = 38
   })
   event.modify('blue_skies:aquite_leggings', item => {
      //item.maxDamage = 25150
      item.armorProtection = 33
   })
   event.modify('blue_skies:aquite_boots', item => {
      //item.maxDamage = 25150
      item.armorProtection = 19
   })

   event.modify('blue_skies:diopside_helmet', item => {
      //item.maxDamage = 26810
      item.armorProtection = 25
   })
   event.modify('blue_skies:diopside_chestplate', item => {
      //item.maxDamage = 26810
      item.armorProtection = 40
   })
   event.modify('blue_skies:diopside_leggings', item => {
      //item.maxDamage = 26810
      item.armorProtection = 35
   })
   event.modify('blue_skies:diopside_boots', item => {
      //item.maxDamage = 26810
      item.armorProtection = 20
   })

   event.modify('blue_skies:charoite_helmet', item => {
      //item.maxDamage = 28150
      item.armorProtection = 26.5
   })
   event.modify('blue_skies:charoite_chestplate', item => {
      //item.maxDamage = 28150
      item.armorProtection = 42
   })
   event.modify('blue_skies:charoite_leggings', item => {
      //item.maxDamage = 28150
      item.armorProtection = 37
   })
   event.modify('blue_skies:charoite_boots', item => {
      //item.maxDamage = 28150
      item.armorProtection = 21
   })

   //幽谧
   event.modify('l2complements:sculkium_helmet', item => {
      //item.maxDamage = 32450
      item.armorProtection = 29
   })
   event.modify('l2complements:sculkium_chestplate', item => {
      //item.maxDamage = 32450
      item.armorProtection = 46
   })
   event.modify('l2complements:sculkium_leggings', item => {
      //item.maxDamage = 32450
      item.armorProtection = 40
   })
   event.modify('l2complements:sculkium_boots', item => {
      //item.maxDamage = 32450
      item.armorProtection = 23
   })
   //深渊
   //6
   event.modify('theabyss:fusion_armor_helmet', item => {
      //item.maxDamage = 39160
      item.armorProtection = 32.5
   })
   event.modify('theabyss:fusion_armor_chestplate', item => {
      //item.maxDamage = 39160
      item.armorProtection = 52
   })
   event.modify('theabyss:fusion_armor_leggings', item => {
      //item.maxDamage = 39160
      item.armorProtection = 45.5
   })
   event.modify('theabyss:fusion_armor_boots', item => {
      //item.maxDamage = 39160
      item.armorProtection = 26
   })

   event.modify('theabyss:aberythe_armor_helmet', item => {
      //item.maxDamage = 39160
      item.armorProtection = 32.5
   })
   event.modify('theabyss:aberythe_armor_chestplate', item => {
      //item.maxDamage = 39160
      item.armorProtection = 52
   })
   event.modify('theabyss:aberythe_armor_leggings', item => {
      //item.maxDamage = 39160
      item.armorProtection = 45.5
   })
   event.modify('theabyss:aberythe_armor_boots', item => {
      //item.maxDamage = 39160
      item.armorProtection = 26
   })

   event.modify('theabyss:ignisithe_armor_helmet', item => {
      //item.maxDamage = 39160
      item.armorProtection = 32.5
   })
   event.modify('theabyss:ignisithe_armor_chestplate', item => {
      //item.maxDamage = 39160
      item.armorProtection = 52
   })
   event.modify('theabyss:ignisithe_armor_leggings', item => {
      //item.maxDamage = 39160
      item.armorProtection = 45.5
   })
   event.modify('theabyss:ignisithe_armor_boots', item => {
      //item.maxDamage = 39160
      item.armorProtection = 26
   })


   event.modify('theabyss:garnite_armor_helmet', item => {
      //item.maxDamage = 39160
      item.armorProtection = 32.5
   })
   event.modify('theabyss:garnite_armor_chestplate', item => {
      //item.maxDamage = 39160
      item.armorProtection = 52
   })
   event.modify('theabyss:garnite_armor_leggings', item => {
      //item.maxDamage = 39160
      item.armorProtection = 45.5
   })
   event.modify('theabyss:garnite_armor_boots', item => {
      //item.maxDamage = 39160
      item.armorProtection = 26
   })



   //7
   event.modify('theabyss:incorythe_armor_helmet', item => {
      //item.maxDamage = 42780
      item.armorProtection = 34.5
   })
   event.modify('theabyss:incorythe_armor_chestplate', item => {
      //item.maxDamage = 42780
      item.armorProtection = 55
   })
   event.modify('theabyss:incorythe_armor_leggings', item => {
      //item.maxDamage = 42780
      item.armorProtection = 48
   })
   event.modify('theabyss:incorythe_armor_boots', item => {
      //item.maxDamage = 42780
      item.armorProtection = 27.5
   })

   event.modify('theabyss:phantom_armor_helmet', item => {
      //item.maxDamage = 42780
      item.armorProtection = 34.5
   })
   event.modify('theabyss:phantom_armor_chestplate', item => {
      //item.maxDamage = 42780
      item.armorProtection = 55
   })
   event.modify('theabyss:phantom_armor_leggings', item => {
      //item.maxDamage = 42780
      item.armorProtection = 48
   })
   event.modify('theabyss:phantom_armor_boots', item => {
      //item.maxDamage = 42780
      item.armorProtection = 27.5
   })
   //8
   event.modify('theabyss:unorithe_armor_helmet', item => {
      //item.maxDamage = 48150
      item.armorProtection = 35.5
   })
   event.modify('theabyss:unorithe_armor_chestplate', item => {
      //item.maxDamage = 48150
      item.armorProtection = 57
   })
   event.modify('theabyss:unorithe_armor_leggings', item => {
      //item.maxDamage = 48150
      item.armorProtection = 50
   })
   event.modify('theabyss:unorithe_armor_boots', item => {
      //item.maxDamage = 48150
      item.armorProtection = 28.5
   })
   //4
   event.modify('theabyss:glacerythe_armor_helmet', item => {
      //item.maxDamage = 36910
      item.armorProtection = 31
   })
   event.modify('theabyss:glacerythe_armor_chestplate', item => {
      //item.maxDamage = 36910
      item.armorProtection = 50
   })
   event.modify('theabyss:glacerythe_armor_leggings', item => {
      //item.maxDamage = 36910
      item.armorProtection = 44
   })
   event.modify('theabyss:glacerythe_armor_boots', item => {
      //item.maxDamage = 36910
      item.armorProtection = 25
   })

   event.modify('theabyss:bone_armor_helmet', item => {
      //item.maxDamage = 36910
      item.armorProtection = 31
   })
   event.modify('theabyss:bone_armor_chestplate', item => {
      //item.maxDamage = 36910
      item.armorProtection = 50
   })
   event.modify('theabyss:bone_armor_leggings', item => {
      //item.maxDamage = 36910
      item.armorProtection = 44
   })
   event.modify('theabyss:bone_armor_boots', item => {
      //item.maxDamage = 36910
      item.armorProtection = 25
   })
   //以太













   //炎魔套耐久  70级等价
   event.modify('cataclysm:ignitium_helmet', item => {
      //item.maxDamage = 58150
      item.armorProtection = 40.5
   })
   event.modify('cataclysm:ignitium_chestplate', item => {
      //item.maxDamage = 58150
      item.armorProtection = 65
   })
   event.modify('cataclysm:ignitium_elytra_chestplate', item => {
      //item.maxDamage = 58150
      item.armorProtection = 65  //  <--
   })
   event.modify('cataclysm:ignitium_leggings', item => {
      //item.maxDamage = 58150
      item.armorProtection = 57
   })
   event.modify('cataclysm:ignitium_boots', item => {
      //item.maxDamage = 58150
      item.armorProtection = 32.5
   })
   //合金巨兽
   event.modify('cataclysm:monstrous_helmet', item => {
      //item.maxDamage = 58150
      item.armorProtection = 40.5
   })
   //远古遗骸
   event.modify('cataclysm:bone_reptile_helmet', item => {
      //item.maxDamage = 43120
      item.armorProtection = 34
   })
   event.modify('cataclysm:bone_reptile_chestplate', item => {
      //item.maxDamage = 43120
      item.armorProtection = 54
   })
   event.modify('cataclysm:', item => {
      //item.maxDamage = 43120
      item.armorProtection = 47
   })
   event.modify('cataclysm:', item => {
      //item.maxDamage = 43120
      item.armorProtection = 27
   })



   //盾耐久
   /*
     event.modify('shieldexp:wooden_shield', item => {
       //item.maxDamage = 215
      })
     event.modify('shieldexp:iron_shield', item => {
       //item.maxDamage = 1087
      })
     event.modify('shieldexp:diamond_shield', item => {
       //item.maxDamage = 2894
      })
     event.modify('shieldexp:netherite_shield', item => {
       //item.maxDamage = 15671
      })
     event.modify('shieldexp:paragon_shield', item => {
       //item.maxDamage = 32655
      })
      */
   //斯巴达
   event.modify('spartanshields:wooden_basic_shield', item => {
      //item.maxDamage = 215
   })
   event.modify('spartanshields:wooden_tower_shield', item => {
      //item.maxDamage = 357
   })
   event.modify('spartanshields:stone_basic_shield', item => {
      //item.maxDamage = 423
   })
   event.modify('spartanshields:stone_tower_shield', item => {
      //item.maxDamage = 567
   })
   event.modify('spartanshields:copper_basic_shield', item => {
      //item.maxDamage = 757
   })
   event.modify('spartanshields:copper_tower_shield', item => {
      //item.maxDamage = 869
   })
   event.modify('spartanshields:iron_basic_shield', item => {
      //item.maxDamage = 1238
   })
   event.modify('spartanshields:iron_tower_shield', item => {
      //item.maxDamage = 1584
   })
   event.modify('spartanshields:golden_basic_shield', item => {
      //item.maxDamage = 167
   })
   event.modify('spartanshields:golden_tower_shield', item => {
      //item.maxDamage = 259
   })
   event.modify('spartanshields:diamond_basic_shield', item => {
      //item.maxDamage = 15789
   })
   event.modify('spartanshields:diamond_tower_shield', item => {
      //item.maxDamage = 19454
   })
   event.modify('spartanshields:netherite_basic_shield', item => {
      //item.maxDamage = 36257
   })
   event.modify('spartanshields:netherite_tower_shield', item => {
      //item.maxDamage = 39672
   })
   event.modify('spartanshields:obsidian_basic_shield', item => {
      //item.maxDamage = 3766
   })
   event.modify('spartanshields:obsidian_tower_shield', item => {
      //item.maxDamage = 3981
   })
   event.modify('spartanshields:steel_basic_shield', item => {
      //item.maxDamage = 1912
   })
   event.modify('spartanshields:steel_tower_shield', item => {
      //item.maxDamage = 2267
   })
   event.modify('spartanshields:bronze_basic_shield', item => {
      //item.maxDamage = 5716
   })
   event.modify('spartanshields:bronze_tower_shield', item => {
      //item.maxDamage = 6107
   })
   event.modify('spartanshields:silver_basic_shield', item => {
      //item.maxDamage = 757
   })
   event.modify('spartanshields:silver_tower_shield', item => {
      //item.maxDamage = 869
   })
   //主世界
   event.modify('legendary_monsters:frostbitten_shield', item => {
      //item.maxDamage = 3158
   })
   event.modify('legendary_monsters:dinosaur_bone_shield', item => {
      //item.maxDamage = 3167
   })
   event.modify('legendary_monsters:spiky_shield', item => {
      //item.maxDamage = 3558
   })
   event.modify('alexsmobs:shield_of_the_deep', item => {
      //item.maxDamage = 4558
   })

   event.modify('', item => {
      //item.maxDamage = 4558
   })



   event.modify('minecraft:shield', item => {
      //item.maxDamage = 867
   })
   //暮色
   event.modify('twilightforest:knightmetal_shield', item => {
      //item.maxDamage = 3659
   })
   //末地
   event.modify('unusualend:blob_shield', item => {
      //item.maxDamage = 35154
   })
   event.modify('endermanoverhaul:corrupted_shield', item => {
      //item.maxDamage = 39670
   })

   event.modify('mutantmore:mutant_shulker_shield', item => {
      //item.maxDamage = 41670
   })
   event.modify('legendary_monsters:shulker_shield', item => {
      //item.maxDamage = 41058
   })
   //蔚蓝
   event.modify('blue_skies:moonstone_shield', item => {
      //item.maxDamage = 8670
   })
   //深谙
   event.modify('undergarden:cloggrum_shield', item => {
      //item.maxDamage = 4670
   })







   //法套耐久
//   event.modify('irons_spellbooks:electromancer_helmet', item => {
//      //item.maxDamage = 27750
//      item.armorProtection = 20
//   })
//   event.modify('irons_spellbooks:electromancer_chestplate', item => {
//      //item.maxDamage = 33400
//      item.armorProtection = 32
//   })
//   event.modify('irons_spellbooks:electromancer_leggings', item => {
//      //item.maxDamage = 31600
//      item.armorProtection = 28
//   })
//   event.modify('irons_spellbooks:electromancer_boots', item => {
//      //item.maxDamage = 29800
//      item.armorProtection = 16
//   })
//
//   event.modify('irons_spellbooks:pyromancer_helmet', item => {
//      //item.maxDamage = 27750
//      item.armorProtection = 20
//   })
//   event.modify('irons_spellbooks:pyromancer_chestplate', item => {
//      //item.maxDamage = 33400
//      item.armorProtection = 32
//   })
//   event.modify('irons_spellbooks:pyromancer_leggings', item => {
//      //item.maxDamage = 31600
//      item.armorProtection = 28
//   })
//   event.modify('irons_spellbooks:pyromancer_boots', item => {
//      //item.maxDamage = 29800
//      item.armorProtection = 16
//   })
//
//   event.modify('irons_spellbooks:archevoker_helmet', item => {
//      //item.maxDamage = 27750
//      item.armorProtection = 20
//   })
// event.modify('irons_spellbooks:archevoker_chestplate', item => {
//    //item.maxDamage = 33400
//    item.armorProtection = 32
// })
// event.modify('irons_spellbooks:archevoker_leggings', item => {
//    //item.maxDamage = 31600
//    item.armorProtection = 28
// })
// event.modify('irons_spellbooks:archevoker_boots', item => {
//    //item.maxDamage = 29800
//    item.armorProtection = 16
// })
//
//  event.modify('irons_spellbooks:cultist_helmet', item => {
//     //item.maxDamage = 27750
//     item.armorProtection = 20
//  })
//  event.modify('irons_spellbooks:cultist_chestplate', item => {
//     //item.maxDamage = 33400
//     item.armorProtection = 32
//  })
//  event.modify('irons_spellbooks:cultist_leggings', item => {
//     //item.maxDamage = 31600
//     item.armorProtection = 28
//  })
//  event.modify('irons_spellbooks:cultist_boots', item => {
//     //item.maxDamage = 29800
//     item.armorProtection = 16
//  })
//
//  event.modify('irons_spellbooks:cryomancer_helmet', item => {
//     //item.maxDamage = 27750
//     item.armorProtection = 20
//  })
//  event.modify('irons_spellbooks:cryomancer_chestplate', item => {
//     //item.maxDamage = 33400
//     item.armorProtection = 32
//  })
//  event.modify('irons_spellbooks:cryomancer_leggings', item => {
//     //item.maxDamage = 31600
//     item.armorProtection = 28
//  })
//  event.modify('irons_spellbooks:cryomancer_boots', item => {
//     //item.maxDamage = 29800
//     item.armorProtection = 16
//  })
//
/// event.modify('irons_spellbooks:shadowwalker_helmet', item => {
//    //item.maxDamage = 27750
//    item.armorProtection = 20
// })
// event.modify('irons_spellbooks:shadowwalker_chestplate', item => {
//    //item.maxDamage = 33400
//    item.armorProtection = 32
// })
// event.modify('irons_spellbooks:shadowwalker_leggings', item => {
//    //item.maxDamage = 31600
//    item.armorProtection = 28
// })
// event.modify('irons_spellbooks:shadowwalker_boots', item => {
//    //item.maxDamage = 29800
//    item.armorProtection = 16
// })
//
// event.modify('irons_spellbooks:priest_helmet', item => {
//    //item.maxDamage = 27750
//    item.armorProtection = 20
// })
// event.modify('irons_spellbooks:priest_chestplate', item => {
//    //item.maxDamage = 33400
//    item.armorProtection = 32
// })
// event.modify('irons_spellbooks:priest_leggings', item => {
//    //item.maxDamage = 31600
//    item.armorProtection = 28
// })
// event.modify('irons_spellbooks:priest_boots', item => {
//    //item.maxDamage = 29800
//    item.armorProtection = 16
// })
//
//  event.modify('irons_spellbooks:plagued_helmet', item => {
//     //item.maxDamage = 27750
//     item.armorProtection = 20
//  })
//  event.modify('irons_spellbooks:plagued_chestplate', item => {
//     //item.maxDamage = 33400
//     item.armorProtection = 32
//  })
//  event.modify('irons_spellbooks:plagued_leggings', item => {
//     //item.maxDamage = 31600
//     item.armorProtection = 28
//  })
//  event.modify('irons_spellbooks:plagued_boots', item => {
//     //item.maxDamage = 29800
//     item.armorProtection = 16
//  })

   //event.modify('irons_spellbooks:wandering_magician_helmet', item => {
   //    //item.maxDamage = 3220
   //    item.armorProtection = 10
   //   })
   //event.modify('irons_spellbooks:wandering_magician_chestplate', item => {
   //    //item.maxDamage = 3850
   //    item.armorProtection = 16
   //   })
   //event.modify('irons_spellbooks:wandering_magician_leggings', item => {
   //    //item.maxDamage = 3670
   //    item.armorProtection = 14
   //   })
   //event.modify('irons_spellbooks:wandering_magician_boots', item => {
   //    //item.maxDamage = 3350
   //    item.armorProtection = 8
   //   })electromancer/pyromancer/archevoker

   setArmor(event, 'irons_spellbooks', 'plagued', 32, 0)

   setArmor(event, 'irons_spellbooks', 'priest', 32, 0)

   setArmor(event, 'irons_spellbooks', 'shadowwalker', 32, 0)
   setArmor(event, 'irons_spellbooks', 'cryomancer', 32, 0)
   setArmor(event, 'irons_spellbooks', 'cultist', 32, 0)
   setArmor(event, 'irons_spellbooks', 'electromancer', 32, 0)
   setArmor(event, 'irons_spellbooks', 'pyromancer', 32, 0)
   setArmor(event, 'irons_spellbooks', 'archevoker', 32, 0)

   setArmor(event, 'irons_spellbooks', 'wandering_magician', 12, 0)


   setArmor(event, 'irons_spellbooks', 'pumpkin', 24, 0)

   // event.modify('irons_spellbooks:pumpkin_chestplate', item => {
   //    //item.maxDamage = 9550
   //    item.armorProtection = 15
   // })
   // event.modify('irons_spellbooks:pumpkin_leggings', item => {
   //    //item.maxDamage = 11580
   //    item.armorProtection = 24
   // })
   // event.modify('irons_spellbooks:pumpkin_helmet', item => {
   //    //item.maxDamage = 10590
   //    item.armorProtection = 21
   // })
   // event.modify('irons_spellbooks:pumpkin_boots', item => {
   //    //item.maxDamage = 10050
   //    item.armorProtection = 12
   //
   // })


   //平衡性调整
   event.modify('plenty_of_golems:the_ancient_anchor', item => {
      //item.maxDamage = 1005
      item.attackDamage = 9
   })



   event.modify('aquamirae:abyssal_heaume', item => {
      //item.maxDamage = 10500
      item.armorProtection = 11
   })
   event.modify('aquamirae:abyssal_brigantine', item => {
      //item.maxDamage = 12300
      item.armorProtection = 18
   })
   event.modify('aquamirae:abyssal_leggings', item => {
      //item.maxDamage = 10100
      item.armorProtection = 16
   })
   event.modify('aquamirae:abyssal_boots', item => {
      //item.maxDamage = 9500
      item.armorProtection = 9
   })

   event.modify('aquamirae:three_bolt_helmet', item => {
      //item.maxDamage = 500
      item.armorProtection = 5
   })
   event.modify('aquamirae:three_bolt_suit', item => {
      //item.maxDamage = 650
      item.armorProtection = 9
   })
   event.modify('aquamirae:three_bolt_leggings', item => {
      //item.maxDamage = 550
      item.armorProtection = 7
   })
   event.modify('aquamirae:three_bolt_boots', item => {
      //item.maxDamage = 550
      item.armorProtection = 4
   })
   event.modify('aquamirae:whisper_of_the_abyss', item => {
      item.attackDamage = 36
   })
   event.modify('aquamirae:coral_lance', item => {
      item.attackDamage = 34
   })
   event.modify('aquamirae:poisoned_blade', item => {
      item.attackDamage = 11
   })
   event.modify('aquamirae:remnants_saber', item => {
      item.attackDamage = 21
   })
   event.modify('aquamirae:fin_cutter', item => {
      item.attackDamage = 15
   })
   event.modify('aquamirae:terrible_sword', item => {
      item.attackDamage = 12
   })




   event.modify('swordinthestone:forest_sword', item => {
      item.attackDamage = 12
   })
   event.modify('swordinthestone:desert_sword', item => {
      item.attackDamage = 12
   })
   event.modify('swordinthestone:arctic_sword', item => {
      item.attackDamage = 12
   })
   event.modify('swordinthestone:plains_sword', item => {
      item.attackDamage = 12
   })
   event.modify('swordinthestone:nether_sword', item => {
      item.attackDamage = 12
   })
   event.modify('swordinthestone:end_sword', item => {
      item.attackDamage = 12
   })




   //生于馄饨
   event.modify('born_in_chaos_v1:nightmare_scythe', item => {
      item.attackDamage = 13
   })
   event.modify('born_in_chaos_v1:darkwarblade', item => {
      item.attackDamage = 16
   })



   /*event.modify('gothic:guardian_armor_helmet', item => {
       //item.maxDamage = 850
       item.armorProtection = 6
      })
   event.modify('gothic:guardian_armor_chestplate', item => {
       //item.maxDamage = 1150
       item.armorProtection = 11
      })
   event.modify('gothic:guardian_armor_leggings', item => {
       //item.maxDamage = 1100
       item.armorProtection = 9
      })
   event.modify('gothic:guardian_armor_boots', item => {
       //item.maxDamage = 950
       item.armorProtection = 5
      })
   
   event.modify('gothic:ravens_guard_armor_helmet', item => {
       //item.maxDamage = 1150
       item.armorProtection = 7
      })
   event.modify('gothic:ravens_guard_armor_chestplate', item => {
       //item.maxDamage = 1450
       item.armorProtection = 13
      })
   event.modify('gothic:ravens_guard_armor_leggings', item => {
       //item.maxDamage = 1350
       item.armorProtection = 10
      })
   event.modify('gothic:ravens_guard_armor_boots', item => {
       //item.maxDamage = 1200
       item.armorProtection = 6
      })
   
   event.modify('gothic:guru_armor_helmet', item => {
       //item.maxDamage = 850
       item.armorProtection = 6
      })
   event.modify('gothic:guru_armor_chestplate', item => {
       //item.maxDamage = 1150
       item.armorProtection = 11
      })
   event.modify('gothic:guru_armor_leggings', item => {
       //item.maxDamage = 1100
       item.armorProtection = 9
      })
   event.modify('gothic:guru_armor_boots', item => {
       //item.maxDamage = 950
       item.armorProtection = 5
      })
   
   event.modify('gothic:upgraded_magic_ore_armor_helmet', item => {
   
       item.armorProtection = 18
      })
   event.modify('gothic:upgraded_magic_ore_armor_chestplate', item => {
   
       item.armorProtection = 28
      })
   event.modify('gothic:upgraded_magic_ore_armor_leggings', item => {
   
       item.armorProtection = 24
      })
   event.modify('gothic:upgraded_magic_ore_armor_boots', item => {
   
       item.armorProtection = 14
      })
   
   event.modify('gothic:wolfs_tooth', item => {
       item.attackDamage = 13
      })
      */
   //从此处继续(史前生物已完成)















   //武器伤害调整
   event.modify('minecraft:bow', item => {
      //item.projectileDamage = 20

   })


   event.modify('spartanweaponry:netherite_longbow', item => {
      //  item.projectileDamage = 32

   })





   /*
   //错误
   event.modify('spartanweaponry:netherite_rapier', item => {
   item.tier = tier => {tier.attackDamageBonus = 13}
   
   
   
      })
   
   
   
   
   
   
   event.modify('spartanweaponry:netherite_rapier', item => {
       item.attackDamage = 20
   
      })
   
   event.modify("spartanweaponry:netherite_greatsword", modification => {
   modification.setAttackDamage(50)
   
                                })
   
   event.modify('spartanweaponry:netherite_greatsword', modification => {
   modification.setAttackDamage(50)
   
                                })
   */






   //需修改









   /*
   event.modify('minecraft:stone_sword', item => {
       item.attackDamage = 7
   
      })
   
   event.modify('minecraft:iron_sword', item => {
       item.attackDamage = 10
      })
   
   event.modify('minecraft:wooden_sword', item => {
       item.attackDamage = 5
   
      })
   
   event.modify('minecraft:diamond_sword', item => {
       item.attackDamage = 14
   
      })
      */
   /*
event.modify('minecraft:netherite_sword', item => {
    item.attackDamage = 14

   })


event.modify('the_mango_new_advent:mangoingotsword', item => {
    item.attackDamage = 42
   })

event.modify('va:copperolite_sword', item => {
    item.attackDamage = 11
   })

event.modify('va:ancient_horn_sword', item => {
    item.attackDamage = 17
   })

event.modify('va:execution_blade', item => {
    item.attackDamage = 22
   })

event.modify('va:copperolite_sword', item => {
    item.attackDamage = 17
   })
*/
   /*无法找到事件
  event.modify('va:drull_scythe', item => {
      item.attackDamage = 10
     })
  
  event.modify('cataclysm:the_incinerator', item => {
      item.attackDamage = 33
     })
  
  event.modify('cataclysm:coral_spear', item => {
      item.attackDamage = 12
     })
  event.modify('cataclysm:coral_bardiche', item => {
      item.attackDamage = 17
     })
  
  event.modify('cataclysm:athame', item => {
      item.attackDamage = 9
     })
   */

   /*
   event.modify('twilightforest:ironwood_sword', item => {
       item.attackDamage = 8
      })
   
   event.modify('twilightforest:fiery_sword', item => {
       item.attackDamage = 10
      })
   event.modify('twilightforest:steeleaf_sword', item => {
       item.attackDamage = 8
      })
   event.modify('twilightforest:knightmetal_sword', item => {
       item.attackDamage = 8
      })
   event.modify('twilightforest:ice_sword', item => {
       item.attackDamage = 8
      })
   event.modify('twilightforest:giant_sword', item => {
       item.attackDamage = 8
      })
   event.modify('born_in_chaos_v1:spiritual_divider', item => {
       item.attackDamage = 1
      })
   event.modify('born_in_chaos_v1:sharpened_darketal_sword', item => {
       item.attackDamage = 1
      })
   
   event.modify('undergarden:cloggrum_sword', item => {
       item.attackDamage = 10
      })
   event.modify('undergarden:utherium_sword', item => {
       item.attackDamage = 11
      })
   event.modify('undergarden:froststeel_sword', item => {
       item.attackDamage = 11
      })
   event.modify('undergarden:forgotten_sword', item => {
       item.attackDamage = 12
      })
   
   event.modify('advancednetherite:netherite_diamond_sword', item => {
       item.attackDamage = 17
   
      })
   event.modify('advancednetherite:netherite_emerald_sword', item => {
       item.attackDamage = 16
   
      })
   event.modify('advancednetherite:netherite_gold_sword', item => {
       item.attackDamage = 15
   
      })
   event.modify('advancednetherite:netherite_iron_sword', item => {
       item.attackDamage = 14
   
      })
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   */



   /*
event.modify('iceandfire:silver_sword', item => {
    item.attackDamage = 11
   })
event.modify('iceandfire:copper_sword', item => {
    item.attackDamage = 8
   })
event.modify('iceandfire:dragonbone_sword', item => {
    item.attackDamage = 30
   })
event.modify('iceandfire:dragonbone_sword_fire', item => {
    item.attackDamage = 30
   })
event.modify('iceandfire:dragonbone_sword_ice', item => {
    item.attackDamage = 30
   })
event.modify('iceandfire:dragonbone_sword_lightning', item => {
    item.attackDamage = 30
   })
*/

   event.modify('spartanweaponry:netherite_saber', item => {
      item.attackDamage = 3000
   })

   /*
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })
event.modify('spartanweaponry:_', item => {
    item.attackDamage =
   })


*/





































































   //测试





})



let setArmor = (event, modId, ingotId, armor, max) => {

   event.modify(modId + ':' + ingotId + '_helmet', item => {
      //item.maxDamage = max
      ItemAttribute.addAttribute(item, $Attributes.ARMOR, new $AttributeModifier($uuid.randomUUID(), '5634', armor * 5 / 8, 'addition'))


   })
   event.modify(modId + ':' + ingotId + '_chestplate', item => {
      // item.maxDamage = max
      ItemAttribute.addAttribute(item, $Attributes.ARMOR, new $AttributeModifier($uuid.randomUUID(), '5634', armor * 8 / 8, 'addition'))

   })
   event.modify(modId + ':' + ingotId + '_leggings', item => {
      // item.maxDamage = max
      ItemAttribute.addAttribute(item, $Attributes.ARMOR, new $AttributeModifier($uuid.randomUUID(), '5634', armor * 7 / 8, 'addition'))

   })
   event.modify(modId + ':' + ingotId + '_boots', item => {
      //item.maxDamage = max
      ItemAttribute.addAttribute(item, $Attributes.ARMOR, new $AttributeModifier($uuid.randomUUID(), '5634', armor * 4 / 8, 'addition'))

   })

}






