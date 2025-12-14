let initial_tag = (entitys) => {


    let type = entitys.type


    /*
    通用标签
    
    load 已加载
    boss 首领
    elite 精英怪
    projectile 弹射物
    time 存在时间
    goal 目标
    att 召唤物攻击伤害
    最大侦察进度max_find
    侦察范围 find_range
    
    
    
    
    */




    if (type == 'kubejs:magic_crystal' ||
        type == 'kubejs:split_crystal' ||
        type == 'kubejs:ender_gravity') {//召唤物随机视角  无等级

        entitys.getRootData().putDouble('xRot', 90 * (2 * Math.random() - 1))
        entitys.getRootData().putDouble('yRot', 180 * (2 * Math.random() - 1))
        entitys.getRootData().putBoolean('projectile', true)//添加弹射物标签

    }//特例区


    if (type == 'eeeabsmobs:nameless_guardian' ||//百分比伤害
        type == 'iceandfire:ice_dragon' ||
        type == 'iceandfire:fire_dragon' ||
        type == 'iceandfire:lightning_dragon' ||
        type == 'iceandfire:sea_serpent' ||
        type == 'va:patron_of_animals' ||
        type == 'va:basilisk' ||
        type == 'va:nightmarish_observer' ||
        type == 'the_mango_new_advent:mango_highland_sentry' ||
        type == 'twilightforest:minoshroom' ||
        type == 'twilightforest:naga' ||
        type == 'twilightforest:ur_ghast' ||
        type == 'twilightforest:snow_queen' ||
        type == 'twilightforest:hydra' ||
        type == 'twilightforest:alpha_yeti' ||
        type == 'blue_skies:summoner' ||
        type == 'cataclysm:ancient_remant' ||
        type == 'cataclysm:ender_guardian' ||
        type == 'cataclysm:ignis' ||//百分比伤害
        type == 'cataclysm:the_leviathan' ||
        type == 'cataclysm:the_harbinger' ||
        type == 'cataclysm:netherite_monstrosity' ||
        type == 'mowziesmobs:frostmaw' ||
        type == 'mowziesmobs:umvuthi' ||
        type == 'mowziesmobs:wroughtnaut' ||
        type == 'aquamirae:captain_cornelia' ||
        type == 'mutantmore:mutant_blaze' ||
        type == 'mutantmore:mutant_wither_skeleton' ||
        type == 'mutantmore:mutant_skulker' ||
        type == 'iter_rpg:insatiable' ||
        type == 'iter_rpg:sorrowswaled' ||
        type == 'illageandspillage:freakager' ||
        type == 'illageandspillage:spiritcaller' ||
        type == 'illageandspillage:magispeller' ||
        type == 'bosses_of_mass_destruction:lich' ||
        type == 'bosses_of_mass_destruction:void_blossom' ||
        type == 'bosses_of_mass_destruction:obsidilith' ||
        type == 'bosses_of_mass_destruction:gauntlet' ||
        type == 'born_in_chaos_v1:lord_pumpkinhead' ||
        type == 'born_in_chaos_v1:lord_pumpkinhead_withouta_horse' ||
        type == 'born_in_chaos_v1:lord_pumpkinhead_head' ||
        type == 'bosses_of_mass_destruction:gauntlet' ||
        type == 'bosses_of_mass_destruction:lich' ||
        type == 'bosses_of_mass_destruction:void_blossom' ||
        type == 'bosses_of_mass_destruction:obsidilith' ||
        type == 'mutantmore:mutant_shulker' ||
        type == 'irons_spellbooks:dead_king' ||
        type == 'mutantmore:mutant_blaze' ||
        type == 'mutantmore:mutant_wither_skeleton' ||
        type == 'blue_skies:arachnarch' ||
        type == 'blue_skies:starlit_crusher' ||
        type == 'blue_skies:alchemist' ||
        type == 'blue_skies:summoner' ||
        type == 'twilightforest:naga' ||
        type == 'twilightforest:minoshroom' ||
        type == 'twilightforest:hydra' ||
        type == 'twilightforest:alpha_yeti' ||
        type == 'twilightforest:lich' ||
        type == 'the_mango_new_advent:mango_highland_sentry' ||
        type == 'aether:sun_spirit' ||
        type == 'aether:slider' ||
        type == 'aether:valkyrie_queen' ||
        type == 'eeeabsmobs:nameless_guardian' ||
        type == 'born_in_chaos_v1:lord_pumpkinhead_withouta_horse' ||
        type == 'born_in_chaos_v1:lord_pumpkinhead_head' ||
        type == 'born_in_chaos_v1:lord_pumpkinhead' ||
        type == 'cataclysm:ender_guardian' ||
        type == 'cataclysm:nameless_sorcerer' ||
        type == 'cataclysm:netherite_monstrosity' ||
        type == 'alexsmobs:void_worm_part' ||
        type == 'cataclysm:ancient_remnant' ||
        type == 'illageandspillage:magispeller' ||
        type == 'twilightforest:snow_queen' ||
        type == 'twilightforest:ur_ghast' ||
        type == 'illageandspillage:freakager' ||
        type == 'cataclysm:ignis' ||
        type == 'mowziesmobs:umvuthi' ||
        type == 'mowziesmobs:frostmaw' ||
        type == 'mowziesmobs:ferrous_wroughtnaut' ||
        type == 'illageandspillage:spiritcaller' ||
        type == 'unusualend:endstone_golem' ||
        type == 'illager_additions:shogun' ||
        type == 'illageandspillage:ragno' ||
        type == 'theabyss:nightblade_boss' ||
        type == 'iceandfire:sea_serpent' ||
        type == 'cataclysm:the_leviathan' ||
        type == 'cataclysm:the_harbinger') {//添加boss标签


        // entitys.getRootData().putDouble('bossBar', 1)//血条
        entitys.getRootData().putBoolean('boss', true)//boss
        //  global.bossIndex[entitys.uuid] = entitys

    } else {//除了boss给其他实体添加是否发现
        if (entitys.isMonster()) {
            //entitys.getRootData().putInt('find_range', 32)//侦察范围
            //
            entitys.getRootData().putInt('find', 0)//仅通过此来判定是否可侦察
            //
            //entitys.getRootData().putInt('max_find', 100)//侦察进度
        }
    }

    if (
        type == 'undergarden:masticator' ||
        type == 'irons_spellbooks:apothecarist' ||
        type == 'irons_spellbooks:citadel_keeper' ||
        type == 'irons_spellbooks:archevoker' ||
        type == 'irons_spellbooks:priest' ||
        type == 'irons_spellbooks:cryomancer' ||
        type == 'irons_spellbooks:pyromancer' ||
        type == 'twilightforest:armored_giant' ||
        type == 'eeeabsmobs:corpse_warlock' ||
        type == 'the_mango_new_advent:mango_highland_golem' ||
        type == 'eeeabsmobs:immortal_shaman' ||
        type == 'the_mango_new_advent:mango_elite_silent_knight' ||
        type == 'eeeabsmobs:guling_sentinel_heavy' ||
        type == 'legendary_monsters:overgrown_colossus' ||
        type == 'eeeabsmobs:immortal_executioner' ||
        type == 'twilightforest:giant_miner' ||
        type == 'cataclysm:the_prowler' ||
        type == 'cataclysm:coral_golem' ||
        type == 'cataclysm:amethyst_crab' ||
        type == 'cataclysm:coralssus' ||
        type == 'cataclysm:ignited_revenant' ||
        type == 'cnb:yeti' ||
        type == 'born_in_chaos_v1:sir_pumpkinhead' ||
        type == 'cataclysm:kobolediator' ||
        type == 'cataclysm:wadjet' ||
        type == 'cataclysm:ender_golem' ||
        type == 'born_in_chaos_v1:supreme_bonescaller' ||
        type == 'born_in_chaos_v1:skeleton_thrasher' ||
        type == 'born_in_chaos_v1:glutton_fish' ||
        type == 'born_in_chaos_v1:missioner' ||
        type == 'born_in_chaos_v1:nightmare_stalker' ||
        type == 'alexsmobs:farseer' ||
        type == 'born_in_chaos_v1:zombie_bruiser' ||
        type == 'knight_quest:kq_bound_lord' ||
        type == 'alexsmobs:warped_mosco' ||
        type == 'illageandspillage:absorber' ||
        type == 'iceandfire:gorgon' ||
        type == 'enemyexpansion:senior' ||
        type == 'realmrpg_demons:ancient_demon_lord' ||
        type == 'illagr_additions:new_samurai' ||
        type == 'the_mango_new_advent:white_pumpkin_killer' ||
        type == 'theabyss:crystal_golem' ||
        type == 'va:cursed_knight_executioner' ||
        type == 'va:nightmare' ||
        type == 'iceandfire:cyclops' ||
        type == 'iceandfire:myrmex_queen' ||
        type == 'iceandfire:hydra' ||
        type == 'legendary_monsters:shulker_mimic' ||
        type == 'legendary_monsters:warped_fungussus' ||
        type == 'legendary_monsters:skeletosaurus' ||
        type == 'legendary_monsters:withered_abomination' ||
        type == 'legendary_monsters:lava_eater' ||
        type == 'legendary_monsters:cloud_golem' ||
        type == 'legendary_monsters:frostbitten_golem' ||
        type == 'legendary_monsters:ancient_guardian' ||
        // || type=='illager_additions:shogun'
        type == "minecraft:piglin_brute" ||
        type == "minecraft:elder_guardian" ||
        type == "minecraft:ravager" ||
        type == "minecraft:evoker" ||
        type == "illagerinvasion:inquisitor" ||
        type == "alexscaves:brainiac" ||
        type == "terramity:gatmancer" ||
        type == "knightquest:eldknight" ||
        type == "alexscaves:gum_worm" ||
        type == "terramity:dungeon_effigy" ||
        type == "knightquest:swampman" ||
        type == "terramity:duskrok" ||
        type == "terramity:uvogre" ||
        type == "terramity:hellrok" ||
        type == "undergarden:masticator" ||
        type == "irons_spellbooks:apothecarist" ||
        type == "irons_spellbooks:citadel_keeper" ||
        type == "irons_spellbooks:archevoker" ||
        type == "irons_spellbooks:priest" ||
        type == "irons_spellbooks:cryomancer" ||
        type == "irons_spellbooks:pyromancer" ||
        type == "twilightforest:armored_giant" ||
        type == "eeeabsmobs:corpse_warlock" ||
        type == "the_mango_new_advent:mango_highland_golem" ||
        type == "eeeabsmobs:immortal_shaman" ||
        type == "the_mango_new_advent:mango_elite_silent_knight" ||
        type == "eeeabsmobs:guling_sentinel_heavy" ||
        type == "legendary_monsters:overgrown_colossus" ||
        type == "eeeabsmobs:immortal_executioner" ||
        type == "twilightforest:giant_miner" ||
        type == "cataclysm:the_prowler" ||
        type == "cataclysm:coral_golem" ||
        type == "cataclysm:amethyst_crab" ||
        type == "cataclysm:coralssus" ||
        type == "cataclysm:ignited_revenant" ||
        type == "cnb:yeti" ||
        type == "born_in_chaos_v1:sir_pumpkinhead" ||
        type == "cataclysm:kobolediator" ||
        type == "cataclysm:wadjet" ||
        type == "cataclysm:ender_golem" ||
        type == "born_in_chaos_v1:supreme_bonescaller" ||
        type == "born_in_chaos_v1:skeleton_thrasher" ||
        type == "born_in_chaos_v1:glutton_fish" ||
        type == "born_in_chaos_v1:missioner" ||
        type == "born_in_chaos_v1:nightmare_stalker" ||
        type == "alexsmobs:farseer" ||
        type == "born_in_chaos_v1:zombie_bruiser" ||
        type == "已失效knight_quest:kq_bound_lord" ||
        type == "alexsmobs:warped_mosco" ||
        type == "illageandspillage:absorber" ||
        type == "iceandfire:gorgon" ||
        type == "enemyexpansion:senior" ||
        type == "realmrpg_demons:ancient_demon_lord" ||
        type == "illager_additions:new_samurai" ||
        type == "the_mango_new_advent:white_pumpkin_killer" ||
        type == "theabyss:crystal_golem" ||
        type == "va:cursed_knight_executioner" ||
        type == "va:nightmare" ||
        type == "iceandfire:cyclops" ||
        type == "iceandfire:myrmex_queen" ||
        type == "iceandfire:hydra" ||
        type == "torchesbecomesunlight:shield_guard" ||
        type == "conjurer_illager:conjurer" ||
        type=="born_in_chaos_v1:dire_hound_leader"

        
    ) {

        entitys.getRootData().putBoolean('elite', true)//精英
        
        
    }



    if (type == 'eeeabsmobs:guling_sentinel' ||
        type == 'enemyexpansion:propeller' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '') {//雷

        setData(entitys, 'int', 'lightning_att', 2)

        entitys.setAttributeBaseValue('kubejs:lightning_resistance', 0.7)


    }






    if (type == 'gnumus:gnumus_shaman' ||
        type == 'born_in_chaos_v1:lord_the_headless' ||
        type == 'endergetic:booflo' ||
        type == 'realmrpg_wyrms:ender_wyrm' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '') {//末影

        setData(entitys, 'int', 'ender_att', 2)

        entitys.setAttributeBaseValue('kubejs:ender_resistance', 0.7)

    }

    if (type == 'va:toadman' ||
        type == 'iceandfire:amphithere' ||
        type == 'born_in_chaos_v1:senor_pumpkin' ||
        type == 'mowziesmobs:foliaath' ||
        type == 'iceandfire:myrmex_royal' ||
        type == 'iceandfire:myrmex_soldier' ||
        type == 'iceandfire:myrmex_worker' ||
        type == 'iceandfire:myrmex_sentinel' ||
        type == 'enemyexpansion:scorpion' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '') {//毒

        setData(entitys, 'int', 'poison_att', 2)

        entitys.setAttributeBaseValue('kubejs:posion_resistance', 0.7)

    }

    if (
        type == 'enemyexpansion:crawler' ||
        type == 'knight_quest:kq_ghastling_summon' ||
        type == 'enemyexpansion:cinder' ||
        type == 'minecraft:blaze' ||
        type == 'illageandspillage:igniter' ||
        type == 'realmrpg_demons:demon' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '') {//火

        setData(entitys, 'int', 'fire_att', 2)

        entitys.setAttributeBaseValue('kubejs:fire_resistance', 0.7)

    }

    if (
        type == 'va:frostwing' ||
        type == 'friendsandfoes:iceologer' ||
        type == 'iceandfire:troll' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '') {//冰

        setData(entitys, 'int', 'ice_att', 2)

        entitys.setAttributeBaseValue('kubejs:ice_resistance', 0.7)

    }

    if (
        type == 'upgrade_aquatic:thrasher' ||
        type == 'upgrade_aquatic:great_thrasher' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '' ||
        type == '') {//水

        setData(entitys, 'int', 'water_att', 2)

        entitys.setAttributeBaseValue('kubejs:water_resistance', 0.7)

    }



    if (
        type == 'the_mango_new_advent:madmangohuntercrs' ||
        type == 'the_mango_new_advent:madmangohunter' ||
        type == 'the_mango_new_advent:armored_mangoboy' ||
        type == 'the_mango_new_advent:wind_worker' ||
        type == 'the_mango_new_advent:strom_spirit' ||
        type == 'the_mango_new_advent:mango_highland_executioner' ||
        type == 'the_mango_new_advent:mango_silent_knight' ||
        type == 'the_mango_new_advent:mango_highland_knight' ||
        type == 'the_mango_new_advent:mango_highland_gatekeeper' ||
        type == 'the_mango_new_advent:mango_castle_spiker' ||
        type == 'the_mango_new_advent:mango_castle_private' ||
        type == 'the_mango_new_advent:mango_castle_private_knight' ||
        type == 'the_mango_new_advent:mango_castle_spearhead' ||
        type == 'the_mango_new_advent:mangocastlesorcerer' ||
        type == 'the_mango_new_advent:mangoflagbearer' ||
        type == 'endermanoverhaul:flower_fields_enderman' ||
        type == 'endermanoverhaul:scarab' ||
        type == 'endermanoverhaul:spirit' ||
        type == 'twilightforest:quest_ram' ||
        type == 'twilightforest:king_spider' ||
        type == 'blue_skies:gatekeeper' ||
        type == 'blue_skies:cosmic_fox' ||
        type == 'blue_skies:azulfo' ||
        type == '') {//神圣

        setData(entitys, 'int', 'divine_att', 2)

        entitys.setAttributeBaseValue('kubejs:divine_resistance', 0.7)

    }





































}