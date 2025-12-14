


let spwanEntityGroup = (event, biome) => {

    let weight = []

    switch (biome) {
        //----------------------暮色----------------------------boss  地精之王·戈布  野鸡首领
        case 'twilightforest:clearing': {//暮光平原

            weight[0] = [//常见0.65
                "terramity:cave_gnome",
                "crittersandcompanions:shima_enaga",
                "crittersandcompanions:koi_fish",
            ]
            weight[1] = [//稀有0.25
                "terramity:royal_gnome",
                "alexsmobs:gazelle",
                //"endermanoverhaul:swamp_enderman",
                "endermanoverhaul:flower_fields_enderman"
            ]
            weight[2] = [//0.1
                "vinery:wandering_winemaker"
            ]
            break
        }

        case 'twilightforest:dark_forest': {//黑暗森林

            weight[0] = [//常见0.65
                "born_in_chaos_v1:dread_hound"
            ]
            weight[1] = [//稀有0.25
                "born_in_chaos_v1:door_knight"
            ]
            weight[2] = [//0.1
                "born_in_chaos_v1:dire_hound_leader",
                "born_in_chaos_v1:pumpkin_spirit",
            ]
            break
        }
        case 'twilightforest:dark_forest_center': {//黑暗森林

            weight[0] = [//常见0.65

            ]
            weight[1] = [//稀有0.25

            ]
            weight[2] = [//0.1
                "born_in_chaos_v1:nightmare_stalker"
            ]
            break
        }



        case 'twilightforest:dense_forest': {//繁茂

            weight[0] = [//常见0.65
                "crittersandcompanions:dragonfly",
                "born_in_chaos_v1:barrel_zombie"
            ]
            weight[1] = [//稀有0.25
                "alexsmobs:skunk",
                "alexsmobs:capuchin_monkey"
            ]
            weight[2] = [//0.1

            ]
            break
        }


        case 'twilightforest:dense_mushroom_forest': {//繁茂魔菇

            weight[0] = [//常见0.65
                "neapolitan:plantain_spider",
                "cnb:sporeling"
            ]
            weight[1] = [//稀有0.25
                "alexsmobs:moose",
                "alexsmobs:grizzly_bear",
                "alexsmobs:raccoon"
            ]
            weight[2] = [//0.1
                "quark:shiba"
            ]
            break
        }
        // twilightforest:enchanted_forest_


        case 'twilightforest:enchanted_forest': {//魔法

            weight[0] = [//常见0.65
                "cnb:sporeling",
                "terramity:green_fairy"
            ]
            weight[1] = [//稀有0.25
                "terramity:royal_gnome"
            ]
            weight[2] = [//0.1
                "conjurer_illager:conjurer"
            ]
            break
        }

        case 'twilightforest:final_plateau': {//终焉

            weight[0] = [//常见0.65
                "takesapillage:skirmisher",
                "illager_additions:spearman"
            ]
            weight[1] = [//稀有0.25
                "knightquest:fallen_knight"
            ]
            weight[2] = [//0.1
                "knightquest:eldknight"
            ]
            break
        }
        case 'twilightforest:fire_swamp': {//火焰

            weight[0] = [//常见0.65
                "rottencreatures:burned",
                "knightquest:bad_patch"
            ]
            weight[1] = [//稀有0.25
                "cnb:cindershell"
            ]
            weight[2] = [//0.1
                "terramity:thunker"
            ]
            break
        }
        case 'twilightforest:firefly_forest': {//萤火虫

            weight[0] = [//常见0.65
                "neapolitan:plantain_spider",
                "cnb:sporeling"
            ]
            weight[1] = [//稀有0.25
                "alexsmobs:moose",
                "alexsmobs:grizzly_bear",
                "alexsmobs:raccoon",
                "unusualend:ender_firefly"
            ]
            weight[2] = [//0.1
                "quark:shiba"
            ]
            break
        }
        case 'twilightforest:forest': {//暮色

            weight[0] = [//常见0.65
                "crittersandcompanions:dragonfly",
                "born_in_chaos_v1:barrel_zombie"
            ]
            weight[1] = [//稀有0.25
                "alexsmobs:skunk",
                "alexsmobs:capuchin_monkey"
            ]
            weight[2] = [//0.1

            ]
            break
        }
        case 'twilightforest:glacier': {//冰川

            weight[0] = [//常见0.65
                "rottencreatures:glacial_hunter",
                " terramity:blue_fairy"
            ]
            weight[1] = [//稀有0.25
                "blue_skies:diophyde_prowler"
            ]
            weight[2] = [//0.1
                "irons_spellbooks:cryomancer",
               // "legendary_monsters:frostbitten_golem"
            ]
            break
        }
        case 'twilightforest:highlands': {//高地

            weight[0] = [//常见0.65
                "born_in_chaos_v1:swarmer"
            ]
            weight[1] = [//稀有0.25
                "endermanoverhaul:windswept_hills_enderman",
                "born_in_chaos_v1:seared_spirit"
            ]
            weight[2] = [//0.1

            ]
            break
        }
        case 'twilightforest:lake': {//湖

            weight[0] = [//常见0.65
                $Entitys.common["quark:乌龟"],
                $Entitys.common["alexsmobs:水龟"],
                $Entitys.common["Luro Fish"]

            ]
            weight[1] = [//稀有0.25
                $Entitys.common["alexscaves:三脚鱼"],

            ]
            weight[2] = [//0.1
                $Entitys.common["alexsmobs:皱鳃鲨"],
                $Entitys.common["minecraft:美西螈"]
            ]
            break
        }
        case 'twilightforest:mushroom_forest': {//河

            weight[0] = [//常见0.65
                $Entitys.common["quark:乌龟"],
                $Entitys.common["alexsmobs:水龟"],
                $Entitys.common["Luro Fish"]

            ]
            weight[1] = [//稀有0.25
                $Entitys.common["alexscaves:三脚鱼"],

            ]
            weight[2] = [//0.1
                $Entitys.common["alexsmobs:皱鳃鲨"],
                $Entitys.common["minecraft:美西螈"]
            ]
            break


        }

        case 'twilightforest:oak_savannah': {//草原

            weight[0] = [//常见0.65
                $Entitys.common["alexsmobs:蜂鸟"],
                $Entitys.common["alexsmobs:瞪羚"],
                $Entitys.common["alexsmobs:跳鼠"]
            ]
            weight[1] = [//稀有0.25
                $Entitys.common["alexsmobs:犀牛"],
                $Entitys.common["alexsmobs:大象"],
                $Entitys.common["alexsmobs:老虎"]



            ]
            weight[2] = [//0.1

            ]
            break
        }



        case 'twilightforest:snowy_forest': {//雪原

            weight[0] = [//常见0.65
                $Entitys.common["crittersandcompanions:雪貂"]
            ]
            weight[1] = [//稀有0.25

                $Entitys.common["alexsmobs:灰熊"],
                $Entitys.common["endermanoverhaul:雪原末影人"]


            ]
            weight[2] = [//0.1
                $Entitys.elite["cnb:雪人"]
            ]
            break
        }


        case 'twilightforest:spooky_forest': {//幽魂

            weight[0] = [//常见0.65
                $Entitys.common["alexscaves:夜行蝠"],


                $Entitys.common["born_in_chaos_v1:南瓜幽灵"],


            ]
            weight[1] = [//稀有0.25
                $Entitys.common["artifacts:宝箱怪"],
                $Entitys.common["born_in_chaos_v1:铁门僵尸"],
                $Entitys.common["born_in_chaos_v1:南瓜魔像"]

            ]
            weight[2] = [//0.1
                $Entitys.elite["knightquest:埃尔德骑士"]
            ]
            break
        }




        case 'twilightforest:stream': {//溪流

            weight[0] = [//常见0.65
                $Entitys.common["quark:乌龟"],
                $Entitys.common["alexsmobs:水龟"],
                $Entitys.common["Luro Fish"]

            ]
            weight[1] = [//稀有0.25
                $Entitys.common["alexscaves:三脚鱼"],

            ]
            weight[2] = [//0.1
                $Entitys.common["alexsmobs:皱鳃鲨"],
                $Entitys.common["minecraft:美西螈"]
            ]
            break


        }

        case 'twilightforest:swamp': {//沼泽

            weight[0] = [//常见0.65
                $Entitys.common["ribbits:呱呱"],
                $Entitys.common["alexsmobs:雨蛙"],
                $Entitys.common["alexsmobs:鳄鱼"],
                $Entitys.common["alexsmobs:鸭嘴兽"],
            ]
            weight[1] = [//稀有0.25

                $Entitys.common["alexsmobs:大鳄龟"]


            ]
            weight[2] = [//0.1
                $Entitys.elite["knightquest:沼泽人"]
            ]
            break
        }

        //----------------------蔚蓝----------------------------boss  科妮莉亚船长  利维坦 海蟒(直接生成)  魔术卫道士   卫道士法术师

        case 'blue_skies:brightlands': {//雪山

            weight[0] = [//常见0.65

                $Entitys.common["alexsmobs:袋獾"],
                $Entitys.common["knightquest:鼠人"],

                $Entitys.common["rottencreatures:霜咬僵尸"],


            ]
            weight[1] = [//稀有0.25

                $Entitys.common["alexsmobs:雪豹"],
                $Entitys.common["endermanoverhaul:冰刺之地末影人"]

            ]
            weight[2] = [//0.1
                $Entitys.elite["iceandfire:独眼巨人"]
                //$Entitys.common
                //$Entitys.common
                //$Entitys.common
                //$Entitys.common
                //$Entitys.common
            ]
            break
        }

        case 'blue_skies:brisk_meadow': {//草原

            weight[0] = [//常见0.65

                $Entitys.common["alexsmobs:食蚁兽"],

                $Entitys.common["crittersandcompanions:雪貂"],

                $Entitys.common["enemyexpansion:哥布林小偷"]

            ]
            weight[1] = [//稀有0.25

                $Entitys.common["rottencreatures:冰川猎手"]


            ]
            weight[2] = [//0.1
                $Entitys.common["alexsmobs:灵翼"],
                $Entitys.common["alexsmobs:跨座兽"]
            ]
            break
        }

        case 'blue_skies:brumble_forest': {//海底

            weight[0] = [//常见0.65
                $Entitys.common["alexscaves:灯笼鱼"],
                $Entitys.common["alexsmobs:飞鱼"],

                $Entitys.common["alexsmobs:鲶鱼"],

                $Entitys.common["seadwellers:Depth Mermorph海底村民"]

            ]
            weight[1] = [//稀有0.25

                $Entitys.common["alexsmobs:骷髅剑鱼"],
                $Entitys.common["iceandfire:塞壬"]

            ]
            weight[2] = [//0.1
                $Entitys.boss["iceandfire:海蟒"]
            ]
            break
        }

        case 'blue_skies:calming_skies': {//矮森林

            weight[0] = [//常见0.65
                $Entitys.common["alexscaves:姜饼人2"],
                $Entitys.common["alexsmobs:食蚁兽"],



                $Entitys.common["enemyexpansion:哥布林小偷"],




            ]
            weight[1] = [//稀有0.25

                //  $Entitys.common["alexscaves:糖果独角兽"],
                $Entitys.common["alexsmobs:驼鹿"],
                $Entitys.common["friendsandfoes:哞花"]
            ]
            weight[2] = [//0.1

            ]
            break
        }

        case 'blue_skies:deep_peeking_ocean': {//海

            weight[0] = [//常见0.65
                $Entitys.common["alexscaves:灯笼鱼"],

                $Entitys.common["seadwellers:Mermorph Farmer海底村民"],

                $Entitys.common["alexsmobs:飞鱼"],

                $Entitys.common["alexsmobs:鲶鱼"]



            ]
            weight[1] = [//稀有0.25

                $Entitys.common["alexsmobs:骷髅剑鱼"],
                $Entitys.common["iceandfire:塞壬"]

            ]
            weight[2] = [//0.1

                $Entitys.common["alexsmobs:虎鲸"],

                $Entitys.boss["iceandfire:海蟒"]
            ]
            break
        }

        case 'blue_skies:frostbitten_forest': {//霜冻

            weight[0] = [//常见0.65

                $Entitys.common["enemyexpansion:哥布林小偷"],
                $Entitys.common["alexsmobs:袋獾"],
                $Entitys.common["knightquest:鼠人"],

                $Entitys.common["rottencreatures:冰川猎手"]

            ]
            weight[1] = [//稀有0.25

                $Entitys.common["endermanoverhaul:冰刺之地末影人"]


            ]
            weight[2] = [//0.1
                $Entitys.elite["illageandspillage:重锤卫道士"]
            ]
            break
        }
        case 'blue_skies:frostbitten_forest_clearing': {//霜冻

            weight[0] = [//常见0.65

                $Entitys.common["enemyexpansion:哥布林小偷"],
                $Entitys.common["alexsmobs:袋獾"],
                $Entitys.common["knightquest:鼠人"],

                $Entitys.common["rottencreatures:冰川猎手"]

            ]
            weight[1] = [//稀有0.25

                $Entitys.common["endermanoverhaul:冰刺之地末影人"]


            ]
            weight[2] = [//0.1
                $Entitys.elite["illageandspillage:重锤卫道士"]
            ]
            break
        }

        case 'blue_skies:midday_shore': {//海岸

            weight[0] = [//常见0.65
                $Entitys.common["aquaculture:星壳龟"],
                $Entitys.common["alexsmobs:龙虾"],
                $Entitys.common["born_in_chaos_v1:僵尸渔夫2"]

            ]
            weight[1] = [//稀有0.25

                $Entitys.common["born_in_chaos_v1:远古寄居蟹"]



            ]
            weight[2] = [//0.1

            ]
            break
        }

        case 'blue_skies:peeking_ocean': {//海


            weight[0] = [//常见0.65
                $Entitys.common["alexscaves:灯笼鱼"],

                $Entitys.common["alexsmobs:飞鱼"],

                $Entitys.common["alexsmobs:鲶鱼"]

            ]
            weight[1] = [//稀有0.25

                $Entitys.common["alexsmobs:骷髅剑鱼"],
                $Entitys.common["iceandfire:塞壬"]

            ]
            weight[2] = [//0.1
                $Entitys.common["alexsmobs:抹香鲸"]
            ]
            break
        }

        case 'blue_skies:polar_highland': {//草原

            weight[0] = [//常见0.65

                $Entitys.common["alexsmobs:食蚁兽"],

                $Entitys.common["crittersandcompanions:雪貂"],

                $Entitys.common["enemyexpansion:哥布林小偷"]

            ]
            weight[1] = [//稀有0.25

                $Entitys.common["rottencreatures:冰川猎手"]


            ]
            weight[2] = [//0.1
                $Entitys.common["alexsmobs:灵翼"],
                $Entitys.common["alexsmobs:跨座兽"]
            ]
            break
        }

        case 'blue_skies:slushlands': {//蘑菇

            weight[0] = [//常见0.65
                $Entitys.common["blue_skies:雪帽蘑菇人"],
                $Entitys.common["alexsmobs:花飘飘"],
                $Entitys.common["terramity:粉色仙灵"]
            ]
            weight[1] = [//稀有0.25

                $Entitys.common["quark:遗忘者"],

                $Entitys.common["snowpig:雪猪"]

            ]
            weight[2] = [//0.1
                $Entitys.elite["born_in_chaos_v1:骷髅召唤师首领"]
            ]
            break
        }

        case 'blue_skies:snow_covered_pines': {//拂雪森林
            weight[0] = [//常见0.65
                $Entitys.common["alexscaves:姜饼人2"],
                $Entitys.common["alexsmobs:食蚁兽"],



                $Entitys.common["enemyexpansion:哥布林小偷"],

            ]
            weight[1] = [//稀有0.25

                //  $Entitys.common["alexscaves:糖果独角兽"],
                $Entitys.common["alexsmobs:驼鹿"],
                $Entitys.common["friendsandfoes:哞花"]
            ]
            weight[2] = [//0.1

            ]
            break
        }

        case '': {//草原

            weight[0] = [//常见0.65


            ]
            weight[1] = [//稀有0.25




            ]
            weight[2] = [//0.1

            ]
            break
        }

        case '': {//草原

            weight[0] = [//常见0.65


            ]
            weight[1] = [//稀有0.25




            ]
            weight[2] = [//0.1

            ]
            break
        }

        case '': {//草原

            weight[0] = [//常见0.65


            ]
            weight[1] = [//稀有0.25




            ]
            weight[2] = [//0.1

            ]
            break
        }

        case '': {//草原

            weight[0] = [//常见0.65


            ]
            weight[1] = [//稀有0.25




            ]
            weight[2] = [//0.1

            ]
            break
        }

        case '': {//草原

            weight[0] = [//常见0.65


            ]
            weight[1] = [//稀有0.25




            ]
            weight[2] = [//0.1

            ]
            break
        }

        case '': {//草原

            weight[0] = [//常见0.65


            ]
            weight[1] = [//稀有0.25




            ]
            weight[2] = [//0.1

            ]
            break
        }

        case '': {//草原

            weight[0] = [//常见0.65


            ]
            weight[1] = [//稀有0.25




            ]
            weight[2] = [//0.1

            ]
            break
        }











        //---------------------------深园------------------------------boss 空之花  撼地斯拉   女巫·喀耳刻   南瓜骑士统领
        case 'undergarden:ancient_sea': {//远古海

            weight[0] = [//常见0.65
                "aquaculture:box_turtle",
                "aquaculture:arrau_turtle",
                "upgrade_aquatic:lionfish",
                "upgrade_aquatic:pike",
                "theabyss:luro_fish",
                "alexsmobs:comb_jelly",
            ]
            weight[1] = [//稀有0.25
                "minecraft:axolotl",
                // "upgrade_aquatic:thrasher",会攻击导致崩溃
                "born_in_chaos_v1:corpse_fish",
                "alexsmobs:blobfish",
                "alexsmobs:lobster",
                "alexsmobs:mimic_octopus",
            ]
            weight[2] = [//0.1
                //"va:sea_monster",
                "born_in_chaos_v1:glutton_fish",
                //  "upgrade_aquatic:great_thrasher",
            ]
            break
        }

        case 'undergarden:barren_abyss': {//贫瘠深渊

            weight[0] = [//常见0.65

                "enemyexpansion:spectre",
                "born_in_chaos_v1:thornshell_crab"
            ]
            weight[1] = [//稀有0.25

                "alexsmobs:murmur",

                "enemyexpansion:intruder",
            ]
            weight[2] = [//0.1
               // "legendary_monsters:ancient_guardian",
                "iceandfire:deathworm",

            ]
            break
        }


        case 'undergarden:veil_mushroom_bog': {//垂根蘑菇沼泽

            weight[0] = [//常见0.65
                //"va:toadman",
                "rottencreatures:swampy",
                "mowziesmobs:lantern",
                "born_in_chaos_v1:spirit_guide",
                "gnumus:gnumus_hunter_not_dispawn",
                "gnumus:gnumus_worker",
            ]
            weight[1] = [//稀有0.25
                "born_in_chaos_v1:decaying_zombie",
                "iceandfire:troll",
                "gnumus:gnumus_merchant",
                //"va:saurian",
            ]
            weight[2] = [//0.1
                "alexsmobs:bone_serpent",
                // "the_mango_new_advent:white_pumpkin_killer"
            ]
            break
        }


        case 'undergarden:wigglewood_forest': {//摇婉森林

            weight[0] = [//常见0.65
                "gnumus:big_snout",
                "gnumus:small_snout",
                "friendsandfoes:mauler",

                "gnumus:gnumus_shaman",
                "gnumus:gnumus_worker",
                "gnumus:gnumus_hunter",
                "born_in_chaos_v1:mr_pumpkin",

            ]
            weight[1] = [//稀有0.25
                "iceandfire:amphithere",
                "goblintraders:goblin_trader",
                "enemyexpansion:slugger",
                "infernalexp:glowsilk_moth",
                "enemyexpansion:crawler",
            ]
            weight[2] = [//0.1
            ]
            break
        }
        case 'undergarden:dense_forest': {//茂密森林

            weight[0] = [//常见0.65
                "gnumus:big_snout",
                "gnumus:small_snout",
                "friendsandfoes:mauler",
                "mowziesmobs:lantern",
                "gnumus:gnumus_hunter",


                "alexsmobs:mungus",
            ]
            weight[1] = [//稀有0.25
                "endermanoverhaul:swamp_enderman",
                "takesapillage:archer",
                "iceandfire:amphithere",
                "goblintraders:goblin_trader",

                "atmospheric:cochineal",
                "enemyexpansion:crawler",
            ]
            weight[2] = [//0.1
            ]
            break
        }
        case 'undergarden:smogstem_forest': {//烟梗森林

            weight[0] = [//常见0.65
                //"va:tease",
                "enemyexpansion:frigid",

                //"va:reaghtoo",
                "infernalexp:blindsight",


            ]
            weight[1] = [//稀有0.25

                "mowziesmobs:grottol",
                "eeeabsmobs:guling_sentinel",
            ]
            weight[2] = [//0.1
               // "legendary_monsters:ancient_guardian",
                //"born_in_chaos_v1:sir_pumpkinhead",
            ]
            break
        }
        case 'undergarden:indigo_mushroom_bog': {//蓝顶蘑菇林indigo_mushroom_bog

            weight[0] = [//常见0.65
                //"va:tease",
                "enemyexpansion:frigid",

                //"va:reaghtoo",
                "infernalexp:blindsight",
                "alexsmobs:mungus"

            ]
            weight[1] = [//稀有0.25
               "legendary_monsters:ambusher",
                "alexsmobs:underminer",
                //"eeeabsmobs:guling_sentinel",
            ]
            weight[2] = [//0.1


                "infernalexp:blackstone_dwarf"
            ]
            break
        }

        case 'undergarden:dead_sea': {//死亡之海 

            weight[0] = [//常见0.65
                "enemyexpansion:ghoul",
                "enemyexpansion:spectre",
                "born_in_chaos_v1:thornshell_crab"
            ]
            weight[1] = [//稀有0.25

                "alexsmobs:murmur",

                "enemyexpansion:intruder",
            ]
            weight[2] = [//0.1
                "alexsmobs:centipede_head",
               // "legendary_monsters:ancient_guardian",
                "iceandfire:deathworm",
            ]
            break
        }

        case 'undergarden:forgotten_field': {//一一之地

            weight[0] = [//常见0.65
                "caneswonderfulspidersoverhaul:jumping_spider",

                "gnumus:gnumus_worker",
                "gnumus:gnumus_hunter"
            ]
            weight[1] = [//稀有0.25
                "takesapillage:archer",
                "enemyexpansion:crawler",
                "gnumus:gnumus_merchant",
                "realmrpg_demons:chort",
                "iceandfire:troll",
                "enemyexpansion:slugger",
            ]
            weight[2] = [//0.1
                "friendsandfoes:tuff_golem",
                "mowziesmobs:grottol",
            ]
            break
        }


        case 'undergarden:frostfields': {//寒霜之地

            weight[0] = [//常见0.65
                //"va:unknown_thief",
                "enemyexpansion:propeller",
                "gnumus:gnumus_hunter_not_dispawn",
                "gnumus:gnumus_shaman",
                "enemyexpansion:ghoul",
            ]
            weight[1] = [//稀有0.25
                //"va:frostwing",
                "eeeabsmobs:guling_sentinel",
                //"va:cursed_knight",
                "legendary_monsters:ambusher",
                "quark:forgotten",
            ]
            weight[2] = [//0.1
                "born_in_chaos_v1:nightmare_stalker",
                //"va:nightmare",
                "friendsandfoes:tuff_golem",

                "mowziesmobs:grottol",
            ]
            break
        }

        case 'undergarden:gronglegrowth': {//油绿森林

            weight[0] = [//常见0.65
                "gnumus:big_snout",
                "gnumus:small_snout",
                "friendsandfoes:mauler",
                "mowziesmobs:lantern",
                "gnumus:gnumus_hunter",


                "alexsmobs:mungus",
            ]
            weight[1] = [//稀有0.25
                "endermanoverhaul:swamp_enderman",
                "takesapillage:archer",
                "iceandfire:amphithere",

                "alexsmobs:mungus",
                "atmospheric:cochineal",
                "enemyexpansion:crawler",
            ]
            weight[2] = [//0.1
                //"va:saurian",

                "goblintraders:goblin_trader",
            ]
            break
        }

        case 'undergarden:ink_mushroom_bog': {//墨黑_蘑菇_沼泽

            weight[0] = [//常见0.65
                "realmrpg_demons:chort",
                //"va:drull",
                "enemyexpansion:meature",
                "enemyexpansion:frigid",
                "born_in_chaos_v1:scarlet_persecutor",

            ]
            weight[1] = [//稀有0.25
                "iceandfire:troll",

            ]
            weight[2] = [//0.1
                "mowziesmobs:lantern",
                "iceandfire:deathworm",
                "alexsmobs:centipede_head",
                "alexsmobs:bone_serpent",
                //"va:nightmare",
            ]
            break
        }
        case 'undergarden:smog_spires': {//喷口

            weight[0] = [//常见0.65
                //"va:toadman",
                "legendary_monsters:ambusher", 

                "enemyexpansion:propeller",
                "gnumus:gnumus_worker",
                "gnumus:gnumus_hunter",

            ]
            weight[1] = [//稀有0.25
                //"va:saurian",
                //"va:cursed_knight",
                "infernalexp:glowsilk_moth",
            ]
            weight[2] = [//0.1 
               // "legendary_monsters:ancient_guardian",
                "gnumus:gnumus_merchant",
            ]
            break
        }

        case 'undergarden:': {//一一之地

            weight[0] = [//常见0.65
                "",
            ]
            weight[1] = [//稀有0.25
                "",
            ]
            weight[2] = [//0.1
                "",
            ]
            break
        }
        case 'undergarden:': {//一一之地

            weight[0] = [//常见0.65
                "",
            ]
            weight[1] = [//稀有0.25
                "",
            ]
            weight[2] = [//0.1
                "",
            ]
            break
        }








        default: return false
    }
    let rare = spwanWeight(weight)

    return { entityType: weight[rare], value: rare }//0实体组  1稀有度


}