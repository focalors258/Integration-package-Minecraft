


let getDenominator = (sample) => {


    let denominator = 0

    for (let e of sample) {
        if (typeof e !== "string" && typeof e[1] === "number") {
            denominator += 1 / e[1]
        } else {
            denominator++
        }
    }

    return denominator

}











let getEnemySample = (entity) => {

    if (entity && entity.getRootData() && (entity.getRootData().contains("enemy_sample"))) {

        let sample = entity.getRootData().getString('enemy_sample')//获取样例组名称



        if (sample == 'goblin') {//临时组
            return ['enemyexpansion:errant',
                'enemyexpansion:baker',
                'enemyexpansion:rancher',
                'enemyexpansion:bouncer',
                'enemyexpansion:caster',
                'enemyexpansion:goblin']

        } else if (sample == 'be_invaded_villager_2') {

            return [
                ['illageandspillage:igniter', 3],
                ['alexsmobs:tarantula_hawk', 4],
                ['illager_additions:spearman', 5],
                ['alexsmobs:guster', 2],
                ['illageandspillage:twittollager', 4],
                //['born_in_chaos_v1:sir_pumpkinhead', 25],
                ['illageandspillage:absorber', 5],
                ['graveyard:corrupted_vindicator', 1],
                ['graveyard:corrupted_pillager', 1],
                ['minecraft:witch', 1],
            ]

        } else if (sample == 'be_invaded_villager_3') {

            return [
                ['rottencreatures:dead_beard', 4],
                ['rottencreatures:frostbitten', 1],
                ['eeeabsmobs:corpse_villager', 4],
                ['born_in_chaos_v1:bonescaller', 6],
                ['born_in_chaos_v1:decrepit_skeleton', 1],
                ['born_in_chaos_v1:door_knight', 5],
                ['born_in_chaos_v1:corpse_fly', 2],
                $Entitys.common["illagerinvasion:provoker挑衅者"],
                $Entitys.common["illageandspillage:不死图腾"]

            ]

        } else if (sample == 'be_invaded_villager_4') {

            return [
                ['knightquest:bad_patch', 1],
                ['terramity:royal_gnome', 1],
                ['knightquest:fallen_knight', 3],
                ['terramity:elite_skeleton', 3],
                ['twilightforest:mosquito_swarm', 2],
                ['born_in_chaos_v1:zombie_fisherman', 2],
                ['born_in_chaos_v1:bone_imp', 1],
                $Entitys.common["savage_and_ravage:skeleton_villager骷髅村民"],
                $Entitys.common["hunterillager:邪猎者"]
            ]

        } else if (sample == "be_invaded_villager_5") {

            return [
                [$Entitys.common["enemyexpansion:高苦力怕"], 2],
                [$Entitys.common["takesapillage:突袭者"], 1],
                [$Entitys.common["illageandspillage:工程师"], 6],
                [$Entitys.common["mischief_illagers:partyger派对客"], 1],
                [$Entitys.common["gnumus:角魔猎人"], 2],
                [$Entitys.common["rottencreatures:不死矿工"], 2],
                [$Entitys.elite["born_in_chaos_v1:野人僵尸"], 5],
                [$Entitys.elite["illagerinvasion:inquisitor裁决者"], 5],
            ]

        } else if (sample == "be_invaded_villager_6") {

            return [
                [$Entitys.common["caneswonderfulspidersoverhaul:断尾蜘蛛"], 2],
                [$Entitys.common["endermanoverhaul:沼泽末影人"], 3],
                [$Entitys.common["born_in_chaos_v1:生蛆僵尸"], 1],
                [$Entitys.common["savage_and_ravage:executioner刽子手"], 1],
                [$Entitys.common["mowziesmobs:野鸡喽啰"], 2],
                [$Entitys.common["alexsmobs:蟑螂"], 2],
                [$Entitys.elite["born_in_chaos_v1:狼人"], 5],
                [$Entitys.elite["irons_spellbooks:炽焰术士"], 5],
            ]

        } else if (sample == "be_invaded_villager_7") {

            return [
                [$Entitys.common["born_in_chaos_v1:凋零旋风怪"], 2],
                [$Entitys.common["enemyexpansion:高苦力怕"], 3],
                [$Entitys.common["alexsmobs:雪豹"], 3],
                [$Entitys.common["endermanoverhaul:雪原末影人"], 2],
                [$Entitys.common["rottencreatures:霜咬僵尸"], 1],
                [$Entitys.common["born_in_chaos_v1:木桶僵尸"], 1],
                [$Entitys.elite["cnb:雪人"], 5],
                [$Entitys.elite["irons_spellbooks:冰霜术士"], 5],
            ]

        } else if (sample == "be_invaded_villager_8") {

            return [
                [$Entitys.common["hunterillager:邪猎者"], 1],
                [$Entitys.common["illageandspillage:草垛卫道士"], 1],
                [$Entitys.common["illager_additions:灾厄近卫"], 3],
                [$Entitys.elite["illagr_additions:灾厄武士"], 7],
                [$Entitys.boss["illager_additions:灾厄大将"], 10],
            ]

        }
        else if (sample == "be_invaded_villager_9") {

            return [
                [$Entitys.common["scguns:僵尸枪手"], 1],
                [$Entitys.common["born_in_chaos_v1:大型苍蝇"], 2],
                [$Entitys.common["rottencreatures:沼泽僵尸"], 1],
                [$Entitys.common["endermanoverhaul:沼泽末影人"], 3],
                [$Entitys.common["knightquest:鼠人"], 3],
                [$Entitys.elite["knightquest:沼泽人"], 7],

            ]

        } else if (sample == "be_invaded_villager_10") {

            return [
                [$Entitys.common["endermanoverhaul:繁花原野末影人"], 3],
                [$Entitys.common["enemyexpansion:蛋糕哥布林"], 2],
                [$Entitys.common["illagerinvasion:marauder掳掠者"], 2],
                [$Entitys.common["born_in_chaos_v1:铁门僵尸"], 2],
                [$Entitys.common["illagerinvasion:alchemist炼金术士"], 1],
                [$Entitys.elite["conjurer_illager:魔术师"], 7],

            ]

        } else if (sample == "be_invaded_villager_11") {

            return [
                [$Entitys.common["alexsmobs:蘑菇君"], 1],
                [$Entitys.common["endermanoverhaul:蘑菇岛末影人"], 3],
                [$Entitys.common["blue_skies:雪帽蘑菇人"], 2],
                [$Entitys.common["alexscaves:深潜者骑士"], 5],
                [$Entitys.common["alexscaves:深潜者法师"], 8],
                [$Entitys.elite["alexscaves:舐脑魔"], 8],

            ]

        }
        else if (sample == "farm") {

            return [
                [$Entitys.common.僵尸村民, 1],
                [$Entitys.common["alexsmobs:响尾蛇"], 2],
                [$Entitys.common["born_in_chaos_v1:南瓜魔像"], 5],
                [$Entitys.common["born_in_chaos_v1:南瓜幽灵"], 1],
                [$Entitys.common["alexsmobs:鬃狼"], 1],
                [$Entitys.common["born_in_chaos_v1:骷髅召唤师"], 4],
                [$Entitys.common["alexscaves:甘草女巫"], 10],
                [$Entitys.common["illageandspillage:草垛卫道士"], 1],

            ]

        }

        else if (sample == 'be_invaded_villager') {

            return [
                ['illageandspillage:igniter', 3],
                ['hunterillager:hunterillager', 3],
                ['illager_additions:spearman', 3],
                ['illageandspillage:preserver', 1],
                ['illageandspillage:twittollager', 3],
                ['irons_spellbooks:archevoker', 6],
                ['illageandspillage:absorber', 6],
                ['graveyard:corrupted_vindicator', 1],
                ['graveyard:corrupted_pillager', 1],
                ['minecraft:witch', 1],
            ]

        } else if (sample == 'house_1') {

            return [
                // 'twilightforest:blockchain_goblin',
                [$Entitys.common["blue_skies:哨兵蟹"], 2],

                [$Entitys.common["iceandfire:食人妖"], 5],
                'illager_additions:cowboy',

                [$Entitys.common["enemyexpansion:蛋糕哥布林"], 2],
                [$Entitys.common["royalvariations:皇家苦力怕"], 5],
                'royalvariations:royal_creeper',



                'takesapillage:archer',



            ]

        } else if (sample == 'house_2') {

            return [


                'enemyexpansion:ghoul',
                [$Entitys.common["born_in_chaos_v1:自爆骨架"], 2],
                [$Entitys.common["born_in_chaos_v1:木桶僵尸"], 1],
                  [$Entitys.common["friendsandfoes:大胃怪"], 1],
                'akesapillage:archer',
                'iceandfire:myrmex_royal',
                'iceandfire:cockatrice',
                // 'enemyexpansion:cinder',





            ]


        } else if (sample == 'nether_house_3') {

            return [
                'realmrpg_demons:demon',
                'iceandfire:dread_knight',
                'unusualend:dragling',
            ]

        } else if (sample == 'house_4') {

            return [

                'endermanoverhaul:flower_fields_enderman',

                'twilightforest:kobold',

                ['eeeabsmobs:immortal_shaman', 6],
                ['irons_spellbooks:apothecarist', 6],
            ]

        } else if (sample == 'house_5') {

            return [

                'enemyexpansion:goblin',
                'friendsandfoes:rascal',
                ['born_in_chaos_v1:zombie_clown', 3],
                'born_in_chaos_v1:baby_skeleton'

            ]

        } else if (sample == 'house_6') {

            return [

                'royalvariations:royal_skeleton',
                'born_in_chaos_v1:zombie_fisherman',
                ['born_in_chaos_v1:seared_spirit', 4],
                'born_in_chaos_v1:zombie_lumberjack'

            ]

        } else if (sample == 'house_7') {

            return [

                'enemyexpansion:goblin',
                'friendsandfoes:rascal',
                ['born_in_chaos_v1:zombie_clown', 3],
                'born_in_chaos_v1:baby_skeleton'

            ]

        } else if (sample == 'house_8') {

            return [

                'terramity:royal_gnome',
                'terramity:conjurling',
                'blue_skies:shrumpty',
                'blue_skies:stonelet',
                'rottencreatures:swampy'

            ]

        } else if (sample == 'desert_house') {

            return [

                'alexsmobs:tarantula_hawk',
                'alexsmobs:guster',
                'caneswonderfulspidersoverhaul:sand_shifter_spider ',
                [$Entitys.common["born_in_chaos_v1:独臂诅咒骑士"], 2],
                [$Entitys.common["born_in_chaos_v1:骨架2"], 1],
                [$Entitys.common["born_in_chaos_v1:骨架"], 1],
            ]

        } else if (sample == 'mine') {

            return [
                'rottencreatures:undead_miner',
                'alexsmobs:underminer',
                'illageandspillage:preserver',
                'gnumus:pitcher_mouse_pac',
                'mowziesmobs:umvuthana_crane',
            ]

        } else if (sample == 'house_9') {

            return [
                ['knightquest:eldknight', 6],
                ['born_in_chaos_v1:zombie_bruiser', 6],

                ['iceandfire:gorgon', 8],

                ['terramity:gatmancer', 6],
                'twilightforest:redcap_sapper'


            ]

        } else if (sample == 'mine_2') {

            return [
                [$Entitys.common["born_in_chaos_v1:木桶僵尸"], 1],
                [$Entitys.common["twilightforest:洞穴巨魔"], 1],
                [$Entitys.common["realmrpg_demons:小鬼"], 1],
                [$Entitys.common["born_in_chaos_v1:远古寄居蟹"], 1],
                [$Entitys.common["eeeabsmobs:不朽骷髅"], 2],


            ]

        } else if (sample == 'sea') {

            return [
                [$Entitys.common["cataclysm:渊灵垂钓者"], 4],
                [$Entitys.common["rottencreatures:死胡子船长"], 3],
                [$Entitys.common["endermanoverhaul:海洋末影人"], 3],
                [$Entitys.common["born_in_chaos_v1:小骷髅"], 1],
                [$Entitys.common["enemyexpansion:僵尸渔夫"], 1],
                [$Entitys.common["takesapillage:重装军"], 1],
            ]



        }








        else if (sample == "house_10") {

            return [
                [$Entitys.common["minecraft:stray流浪者"], 2],
                [$Entitys.common["takesapillage:突袭者"], 1],
                [$Entitys.elite["minecraft:ravager劫掠兽"], 5],
                [$Entitys.elite["minecraft:evoker唤魔者"], 4],

                [$Entitys.common["mischief_illagers:evil_book邪恶之书"], 2],
                [$Entitys.common["scguns:机器2 Minion"], 6],
            ]

        } else if (sample == "house_11") {

            return [

                [$Entitys.common["takesapillage:突袭者"], 1],
                [$Entitys.common["illageandspillage:工程师"], 6],
                [$Entitys.common["scguns:机器1 Scamp"], 1],
                [$Entitys.common["terramity:简易炮塔"], 2],
                [$Entitys.common["illagerinvasion:archivist档案员"], 2],
                [$Entitys.common["mischief_illagers:libravoker唤书师"], 2],
            ]

        } else if (sample == "house_12") {

            return [

                [$Entitys.common["rottencreatures:木乃伊僵尸"], 1],
                [$Entitys.common["illagerinvasion:firecaller唤火者"], 1],
                [$Entitys.common["illager_additions:牛仔"], 3],
                [$Entitys.common["endermanoverhaul:沙漠末影人"], 3],
                [$Entitys.common["scguns:飞行机器 Carrier"], 4],
            ]

        } else if (sample == "house_13") {

            return [

                [$Entitys.common["mischief_illagers:doodle_pillager涂鸦掠夺者"], 1],
                [$Entitys.common["mischief_illagers:libravoker唤书师"], 1],
                [$Entitys.common["illagerinvasion:marauder掳掠者"], 3],
                [$Entitys.common["mischief_illagers:fangclaw利爪"], 3],
                [$Entitys.elite["knightquest:埃尔德骑士"], 6],
            ]

        } else if (sample == "end_1") {

            return [
                [$Entitys.common["alexscaves:核能苦力怕"], 6],
                [$Entitys.common["alexscaves:深潜者法师"], 6],
                [$Entitys.common["alexscaves:窥心者"], 10],
                [$Entitys.common["born_in_chaos_v1:铁门僵尸"], 1],
                [$Entitys.common["alexsmobs:末影噬菌体"], 1],
                [$Entitys.common["minecraft:烈焰人"], 2,],
                [$Entitys.common["born_in_chaos_v1:骇狼首领"], 5]
                [$Entitys.elite["born_in_chaos_v1:黑暗传教士"], 15]


            ]

        } else if (sample == "house_14") {

            return [
                [$Entitys.common["born_in_chaos_v1:急躁幽灵"], 2],
                [$Entitys.common["minecraft:zombified_piglin僵尸猪灵"], 1],
                [$Entitys.common["iceandfire:食人妖"], 5],
                [$Entitys.common["born_in_chaos_v1:骷髅召唤师"], 5],
                [$Entitys.common["terramity:地精"], 1],
                [$Entitys.common["illagerinvasion:surrendered亡骨役奴"], 2,],
                [$Entitys.common["minecraft:witch女巫"], 3]



            ]

        } else if (sample == "sky") {

            return [
                [$Entitys.common["realmrpg_wyrms:红色飞龙"], 4]
                  [$Entitys.common["scguns:飞行机器 Carrier"], 4]
                [$Entitys.common["alexsmobs:灵魂鹫"], 2]
                 [$Entitys.common["aether:西风啸云"], 2]
                  [$Entitys.common["alexsmobs:沙风怪"], 6]
                
                //  [$Entitys.common["minecraft:witch女巫"], 3]


            ]

        }












        // else if () {
        //
        //
        //
        //else if () {
        //
        //
        //
        //else if () {
        //
        //
        //
        //else if () {
        //
        //
        //
        //else if () {
        //
        //
        //
        //else if () {
        //
        //
        //
        //else if () {
        //
        //
        //
        //else if () {
        //
        //
        //
        //else if () {
        //
        //
        //
        //else if () {
        //
        //
        //
        //else if () {
        //
        //
        //
        //else if () {
        //
        //
        //
        //else if () {
        //
        //
        //
        //else if () {
        //
        //
        //
        //else if () {
        //
        //
        //
        //else if () {
        //
        //
        //
        //





















    }

}


let occupy_explosion = (entity, 范围内玩家) => {


    if (entity.server) {//振动效果

        范围内玩家.sendData('video', {
            value: 1,//
            name: 'intensity1',
        })//振动强度
        范围内玩家.sendData('video', {

            value: 15,//
            name: 'time1',
        })//振动时间


        entity.level.createExplosion(entity.x, entity.y + 8, entity.z)//被占领后触发
            .strength(1)//
            //  .damagesTerrain(false)
            .causesFire(false)
            .exploder(entity)
            .explode()


    }


}




























//   let elite = exampleData2(event, entity, 'camp_entity', 'elite', r + 64)//精英
// let boss = exampleData2(event, entity, 'camp_entity', 'boss', r + 64)//boss

//   let extraWeight = 2 * (elite ? elite.length : 0) + 9 * (boss ? boss.length : 0)//额外权重


//  let weight_quantity = (entitys ? entitys.length : 0) + extraWeight //获取数量(加上权重)






//因该实体被占领后的行为会影响客户端与服务端不同 所以需传输占领标记
// console.log('server   ' + camp + '  ' + done + '  ' + entity)

//  entity.server.players.sendData('combat_area', {
//      name: 'camp',
//      entity: entity.getId(),
//
//  })//先传给客户端数据  camp决定了实体在客户端的渲染
//  entity.server.players.sendData('combat_area', {
//      name: 'max_camp',
//      entity: entity.getId(),
//      value: maxCamp,//给实体
//  })//最大占领值
// entity.server.players.sendData('combat_area', {//客户端数据退出后不保存  所以得随时同步数据
//     name: 'repeat',
//     entity: entity.stringUuid,
//     value: repeat,//给实体
// })
//     entity.server.players.sendData('combat_area', {//客户端数据退出后不保存  所以得随时同步数据
//         name: 'r',
//         entity: entity.getId(),
//         value: r,//给实体
//     })
//     if (entitys && entitys.length) {//不为false调用length却为false?
//         entity.server.players.sendData('combat_area', {//客户端数据退出后不保存  所以得随时同步数据
//             name: 'entity_number',
//             entity: entity.getId(),
//             value: entitys.length,//注意:仅客户端该实体有此属性   用于ui
//         })
//     }