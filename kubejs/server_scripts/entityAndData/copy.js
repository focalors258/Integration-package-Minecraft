

NetworkEvents.dataReceived('copy', event => {//客户端控制

    let condition = event.getData().getInt('condition')

    let difficulty = event.getData().getInt('difficulty')

    // @ts-ignore
    let entity = event.level.getEntity(event.getData().getString('uuid'))

    if (entity.type == 'kubejs:copy') {

        setData(entity, 'int', 'condition', condition)//状态

        setData(entity, 'int', 'time', 0)

        setData(entity, 'int', 'difficulty', difficulty)//难度

    }


})


//  let bossName = '45656'

//  let name = bossName

//  let projects = 10

//let star = []new LecternGui(i, playerInventory, player)

// for (let i = 0; i < projects; i++) { }

let getCopyByBoss = (entity) => {

    if (entity.isLiving() && areData(entity, 'copy_host')) {

        return entity.level.getEntity(getData(entity, $String, 'copy_host'))

    } else {

        return false

    }
}




let copyRangeUpdate = (player) => {


    setData(player, $Int, 'copy_rangeUpdate', Math.max(0, getData(player, $Int, 'copy_rangeUpdate') - 1))

}


let copyKillBoss = (entity) => {




    if (areData(entity, 'copy_host')) {

        let copy = getCopyByBoss(entity)//entity.level.getEntity(getData(entity, $String, 'copy_owner'))

        if (copy) {

            let 范围 = getData(copy, $Int, 'radius')

            let 副本_名称 = getData(copy, $String, 'copy_name')

            let 难度 = getData(copy, 'int', 'difficulty')//难度

            let 战利品 = getData(copy, 'list', 'loot')

            setData(copy, 'int', 'condition', 0)

            setData(copy, 'int', 'time', 0)




            let players = getRadiusEntity(entity, 'minecraft:player', 范围)

            let PuffishLevel = new $puffishExperience('puffish_skills:combat')



            players.forEach(player => {//设置等级

                let old_star_list = getData(player, $List, 'star_' + 副本_名称)//数组

                let star_list = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]//新数组 //Array.isArray(old_star_list)?old_star_list:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]

                let new_star = 0

                let old_star = 0

                copyRuleEvent(player, (type, rule) => {

                    if (rule.present == 1) new_star++

                })


                if (old_star_list[难度] == undefined) {

                    if (star_list[难度] < new_star) {

                        star_list[难度] = new_star// Math.max(star_list[难度], new_star)

                    }
                } else {

                    star_list = old_star_list

                    old_star = star_list[难度]//缓存旧星级

                    if (star_list[难度] < new_star) {

                        star_list[难度] = new_star//更新新星级

                    }

                }
                setData(player, $List, 'star_' + 副本_名称, star_list)




                let 战利品缓存 = getData(player, $List, 'star_loot_' + 副本_名称 + "_" + 难度)
                //tell(战利品缓存[3])
                if (战利品缓存 == undefined) {//初始化

                    setData(player, $List, 'star_loot_' + 副本_名称 + "_" + 难度, [false, false, false])//战利品缓存 true为已获取战利品缓存[战利品.repeat[i] - 1]==0&&new_star>=战利品.repeat[i]
                }

                Utils.server.scheduleInTicks(20, () => { //延迟打开
                    for (let i = 0; 战利品.item[i]; i++) {//每个玩家得一份
                        let item = 战利品.item[i]

                        let counts = [1, 1]

                        if (战利品.count[i]) {
                            counts = 战利品.count[i]

                        }
                        //  tell(j)

                        let 掉落物数量区间 = counts[1] - counts[0]

                        let 每级增加奖励 = counts[2] ? counts[2] : 0.1

                        if (掉落物数量区间 < 1) {//小于1时  有概率不掉落
                            // tell("概率"+(掉落物数量区间 - Math.random()) )

                            掉落物数量区间 = 掉落物数量区间 - Math.random() > 0 ? 1 : 0

                        }

                        if (item.Count) {
                            item.Count *= Math.random() * (掉落物数量区间) + counts[0]
                        } else {
                            item.Count = Math.random() * (掉落物数量区间) + counts[0]
                        }




                        if (!战利品.repeat[i] || 战利品.repeat[i] > old_star && 战利品.repeat[i] <= new_star) {


                            //  tell(战利品.item[i])

                            if (战利品.unlock[i] == undefined || (战利品.unlock[i][0] <= 难度 && 战利品.unlock[i][1] >= 难度)) {//难度区间

                                //  tell(战利品.unlock[i] + "  " + 难度)






                                //  if()

                                if (item.id == "kubejs:exp" && item.tag.exp) {

                                    player.level.runCommand(`/puffish_skills experience add ${player.name.getString()} puffish_skills:combat ${Math.floor(item.tag.exp * (1 + 难度 * 每级增加奖励))}`)

                                } else if (item.tag && item.tag.artifacts_ramdom) {
                                    //tell(getRamdomArtifacts(item.tag.artifacts_ramdom, item.tag.radius))
                                    addItemEntity(entity.level, entity.x, entity.y, entity.z, Item.of(getRamdomArtifacts(item.tag.artifacts_ramdom, item.tag.rarity), item.Count * (1 + 难度 * 每级增加奖励), item.tag))

                                } else {
                                    addItemEntity(entity.level, entity.x, entity.y, entity.z, Item.of(item.id, item.Count * (1 + 难度 * 每级增加奖励), item.tag))
                                }
                            }
                        }
                    }
                })

                if (new_star == 1) {
                    setData(player, $List, 'star_loot_' + 副本_名称 + "_" + 难度, [true, false, false])//战利品缓存标记 true为已获取
                } else if (new_star == 2) {
                    setData(player, $List, 'star_loot_' + 副本_名称 + "_" + 难度, [true, true, false])
                } else if (new_star == 3) {
                    setData(player, $List, 'star_loot_' + 副本_名称 + "_" + 难度, [true, true, true])
                }


            })
            //  let a = []



            //  let a =  new ItemEntity(level, x, y, z, itemStack)
            //
            //   level.addFreshEntity(a)







            players.sendData('copyWinAnimation', {})//动画

        }



    }



}




let openCopyMenu = (entity, player, event) => {


    if (event.item.id == 'kubejs:copy') return

   

    if ((!areData(entity, 'modify') || getData(entity, 'boolean', 'modify')) && entity.type == "kubejs:copy") {//注意最低等级需和盔甲防御关联


        setData(entity, 'boolean', 'modify', false)


        let 背景 = setData(entity, 'string', 'background', 'kubejs:gui/copy/cursed_pyramid.png')

        let 挑战时间 = setData(entity, 'list', 'max_time', [500, 500, 500, 400, 400, 400, 300, 300, 300, 120])

        let 副本_精英模式 = setData(entity, 'boolean', 'elite', true)

        let 副本_选项数量 = setData(entity, 'int', 'projects', 10)

        let 副本_名称 = setData(entity, 'string', 'copy_name', '被诅咒的金字塔')

        let 副本_描述 = setData(entity, 'string', 'describe', '据说，在远古时期，这片沙漠曾是一个强大文明的领地，金字塔便是他们为祭祀神灵而建。然而，一场突如其来的灾难降临，文明覆灭，邪恶力量趁机侵入金字塔，使其沦为了诅咒之地。')

        let 副本_解锁星级 = setData(entity, 'list', 'unlock_star', [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2])

        let 副本_boss等级 = setData(entity, 'list', 'boss_level', [70, 82, 94, 106, 118, 130, 142])

        let 副本_解锁等级 = setData(entity, 'list', 'unlock_level', [60, 75, 90, 100, 120, 140, 150, 150, 150, 150, 150])

        let 副本_注册名 = setData(entity, 'string', 'register_name', 'cataclysm:the_harbinger')

        let 范围 = setData(entity, 'int', 'radius', 60)

        let 战利品 = setData(entity, 'list', 'loot',
            {
                item: [
                    Item.of("create:ochrum", 64),
                    //   Item.of("l2artifacts:random_set_1", 1,),
                    Item.of("l2artifacts:random_set_2", 1,),
                    Item.of("l2artifacts:random_set_3", 1,),                         //一次性
                    Item.of("l2artifacts:random_set_4", 1,),
                    Item.of("l2artifacts:random_set_5", 1,),
                    Item.of("kubejs:exp_divine", 1, { exp: 100 }),

                    Item.of("kubejs:exp", 1, { exp: 300 }),    //经验  钻石  武器水晶  特殊掉落物 碎片

                    Item.of("minecraft:diamond", 1),

                    Item.of("theabyss:aurel_crystal_ore", 1),//武器经验

                    Item.of("iceandfire:witherbone", 1),

                    Item.of("create:electron_tube", 1),

                    Item.of("irons_spellbooks:scroll", 1, {
                        ISB_Spells: {
                            data: [{ id: "irons_spellbooks:ascension", index: 0, level: 1, locked: 1 }], maxSpells: 1, mustEquip: 0, spellWheel: 0
                        }
                    }),
                    //
                    // Item.of("l2artifacts:physical_head_1", 1, { artifacts_ramdom: "physical", rarity: 1 }),//启用古遗物随机获取
                    Item.of("l2artifacts:ancient_scroll_head_2", 1, { artifacts_ramdom: "ancient_scroll", rarity: 2 }),//启用古遗物随机获取
                    Item.of("l2artifacts:ancient_scroll_head_3", 1, { artifacts_ramdom: "ancient_scroll", rarity: 3 }),//启用古遗物随机获取    重复
                    Item.of("l2artifacts:ancient_scroll_head_4", 1, { artifacts_ramdom: "ancient_scroll", rarity: 4 }),//启用古遗物随机获取
                    Item.of("l2artifacts:ancient_scroll_head_5", 1, { artifacts_ramdom: "ancient_scroll", rarity: 5 }),//启用古遗物随机获取

                ], count: [
                    [3, 5, 0.5], [1, 1, 0], [1, 1, 0], [1, 1, 0], [1, 1, 0], [1, 1, 0], [1, 1, 0],

                    [2, 2, 0.333333334], [0.4, 0.5, 0.1], [1.6, 3.6, 0.2], [2.2, 3.2, 0.4], [2.6, 3.6, 0.2],

                    [0.6, 1.6, 0.2],

                    [0, 2], [0, 2], [0, 2], [0, 2], [0, 2],],//第一项和第二项为数量区间  第三项为每级增加的量
                repeat: [1, 2, 2, 2, 2, 3,],//<=  0表示可重复获得 1-3表示该星级可获得   无法在获得

                unlock: [[0, 13], [0, 2], [3, 5], [6, 8], [9, 10], [0, 13],

                [0, 13], [0, 13], [0, 13], [0, 13], [0, 13],

                [0, 13],

                [0, 4], [2, 7], [5, 9], [8, 10]]//解锁等级区间

            }

        )


        let 星级_条件 = setData(entity, 'list', 'star_rule', {
            name: 副本_名称,
            rule: {//data中的为该星级条件数据 default为默认是否达成 present为当前是否达成
                time: { default: 0, present: 1, data: { value: 120, present: 0 } },
                be_att: { default: 0, present: 1, data: { value: 10, present: 0, type: 'cataclysm.deathlaser' } },
                att: { default: 1, present: 0, data: { value: 40, present: 0 } }
            }
        })


        //  let 背景 = setData(entity, 'string', 'background', 'kubejs:gui/copy/burning_arena.png')


        setData(entity, 'boolean', 'copy_load', true)
    }






    Utils.server.scheduleInTicks(1, () => { //延迟打开

        if (entity && entity.type == 'kubejs:copy' && getData(entity, 'int', 'condition') == 0) {

            //event.screen.addSlot(new $Slot(new $inventory(Client.player),0,36,50))

            //new $AnvilMenu(102,new $Inventory(player)).add

            openMenu(player, 101)


            //打开界面时更新数据


            let PuffishLevel = new $puffishExperience('puffish_skills:combat')

            //tell(   a.getLevel(player))


            /**@type {Internal.ServerPlayer} */
            let serPlayer = player


            player.sendData('puffish_expLevel', { value: PuffishLevel.getLevel(serPlayer) })//玩家等级


            let 挑战时间 = getData(entity, 'list', 'max_time')

            let 副本_精英模式 = getData(entity, 'boolean', 'elite')

            let 副本_选项数量 = getData(entity, 'int', 'projects')

            let 副本_名称 = getData(entity, 'string', 'copy_name')

            let 副本_描述 = getData(entity, 'string', 'describe')

            let 副本_解锁星级 = getData(entity, 'list', 'unlock_star')

            let 副本_boss等级 = getData(entity, 'list', 'boss_level')

            let 副本_解锁等级 = getData(entity, 'list', 'unlock_level')

            let 副本_注册名 = getData(entity, 'string', 'register_name')

            let 范围 = getData(entity, 'int', 'radius')

            let 玩家_副本_星级 = getData(player, $List, 'star_' + 副本_名称)

            let 战利品 = getData(entity, 'list', 'loot')


            玩家_副本_星级 = Array.isArray(玩家_副本_星级) ? 玩家_副本_星级 : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

            player.sendData('copy_open', {
                background: getData(entity, 'string', 'background'),//背景
                name: 副本_名称,
                entity: entity.getId(),
                star: 玩家_副本_星级,//player.getRootData().get('star_'+name),player.getRootData().get('star_' + 副本_名称)
                describe: 副本_描述,
                projects: 副本_选项数量,
                elite: 副本_精英模式,
                boss_level: 副本_boss等级,
                unlock_star: 副本_解锁星级,
                unlock_level: 副本_解锁等级,
                time: 挑战时间,
                tool: 战利品
            })

            //tell(getData(entity, 'list', 'max_time'))

        }

    })


    //player.getRootData().put('star_' + 副本_名称, [3, 3, 2, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3])//
    //解锁条件第一项无意义
    // let abc = [0, 0, 50, 0]

    // player.getRootData().put('abc', abc)


    // event.server.tell('666  ' + player.getRootData().get('abc'))
    // setData(event.source.player, 'int', name + '_star_' + i)//xxx_star_0  boss名称 star 难度

    //  event.cancel(0)

    /*
    getData(player, 'list', 'star_user_rule')['rule'].forEach(项目 => {

        if (项目['present'] == 1) new_star++

    })
*/

    // tell(new_star)

}