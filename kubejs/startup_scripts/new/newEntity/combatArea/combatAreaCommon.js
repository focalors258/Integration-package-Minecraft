StartupEvents.registry('entity_type', event => {
    //注意  据点实体的相关代码不可使用forge的persistentData  因为已有大量已存储实体使用了kubejs的pdata
    //注意  据点实体的相关代码不可使用forge的persistentData  因为已有大量已存储实体使用了kubejs的pdata
    event.create('combat_area_common', "entityjs:geckolib_projectile")//常见的据点样式
        // .immuneTo()//可接受的方块
        //.canSpawnFarFromPlayer(true)
        //.clientTrackingRange(20)//实体追踪范围
        .mobCategory('misc')//实体分类
        .setRenderType("translucent")//实体呈现类型
        .sized(1, 8)//碰撞箱大小
        .modelSize(1, 1)//模型比例
        .updateInterval(3)//tick更新速率
        .repositionEntityAfterLoad(true)//加载后重新定位
        .isPushable(false)//是否可移动
        .fireImmune(true)//是否免疫火
        .saves(true)//应序列化其数据
        .setSummonable(true)//是否可召唤
        // .setSwimSound("minecraft:entity.generic.swim")//游泳声音
        //.setSwimSplashSound("minecraft:entity.generic.splash")//游泳飞溅声音

        .mobCategory('projectile')



        .addAnimationController('exampleController', 1, event => {//动画控制

            //console.log('是否存在camp   ' + areData(event.entity, 'camp'))

            if (event.entity.getRootData().contains("camp")) {

                /*
                if (event.entity.getRootData().getDouble('camp') == 0) {//中立
                    event.thenLoop('animation.model.grey');
                } else
                    */

                if (event.entity.getRootData().getDouble('camp') < 0) {//敌对
                    event.thenPlayAndHold('animation.model.illagers');
                } else {//友好
                    event.thenPlayAndHold('animation.model.player');
                }

            } else {



                //event.thenLoop('animation.model.grey');//bug 当打开游戏第二次进入存档时 会使部分动画会刷新 需重新加载区块
            }
            // event.thenLoop('move');
            //event.thenLoop('rotate'); // event.thenPlayAndHold('');
            return true;
        })
        .scaleModelForRender(context => {//模型修改
            // Define logic to render the entity without changing core logic such as hitbox rendering
            let { entity, widthScale, heightScale, poseStack, model, isReRender, partialTick, packedLight, packedOverlay } = context
            //实体、宽度比例、高度比例、姿态堆栈、模型、重新渲染、部分刻度、打包光、打包场景
            //poseStack.scale(0.7, 0.7, 0.7)

        })

        .tick(entity => {//客户端服务端同时执行



            if (entity.age <= 5) {

                if (entity.persistentData && entity.persistentData.contains("camp") && !entity.getRootData().contains("camp")) entity.setRootData(entity.persistentData.copy())//同步原数据


                setData(entity, $List, "pos", { x: entity.blockX, y: entity.blockY + 1, z: entity.blockZ })//初始化坐标


                if (entity.getDataDouble("camp") > 0) setData(entity, 'boolean', 'done2', true)//如果为友好阵营 则标记为已完成



            } else {
                let pos = (getData(entity, 'list', 'pos'))
                if (pos) {
                    entity.setX(pos.x + 0.5)
                    entity.setY(pos.y - 0.1)
                    entity.setZ(pos.z + 0.5)
                }
            }


            entity.deltaMovement = new Vec3(0, 0, 0)

            let r = getIntData(entity, 'r')//生成半径




            /*
                         本实体
                         -max_camp ~ 0 敌对 
 
                         done 占领后一次性标记
                         repeat 是否可重复
                         camp 阵营 浮点数
                         r 生成半径
                         max_quantity 最大数量(精英敌人占用更多的数量)
                         enemy_sample 敌人样例组(字符串类型)
                         generate_speed 生成速度 每x秒召唤一个
                         generate 生成计数器
                         
                         敌人
                         camp_entity 被本实体召唤出的标签 
                         occupy_speed 存储阵营占据速度 浮点数
                         
                         玩家 
                         occupy_speed 存储阵营占据速度 击杀camp_entity会提高该值
                         camp_move   占领值动画
                         camp_snow  占领值显示
                         */

            //entity.getRootData().contains("camp")
            // let time

            /*
            流程
            先给无数据的实体初始化
            
            再将实体的服务端数据发送(同步)至客户端(因退出世界客户端数据不保存)
            
            对实体数据操作后 再同时保存至客户端和服务端
            
            
            */


            if (entity.age % 20 == 0) {

                if (!entity.level.getNearestPlayer(entity, r + 10)) return
                //灰色 非重复据点被占领后

                //绿色 可重复据点被占领前

                //红色 未被占领

                //初始化 
                if (!entity.getRootData().contains("done")) {
                    entity.getRootData().putBoolean('done', false)//占领标记
                }
                // if (!entity.getRootData().contains("repeat")) {
                //     entity.getRootData().putBoolean('repeat', false)//是否为重复
                // }
                if (!entity.getRootData().contains("max_camp")) {
                    entity.getRootData().putDouble('max_camp', 1000)//默认最大占领值(包含正负)
                }
                if (!entity.getRootData().contains("camp")) {
                    entity.getRootData().putDouble('camp', -1000)//初始占领值
                }
                if (!entity.getRootData().contains("r") || (areData(entity, 'r') && getData(entity, 'int', 'r') > 128)) {//最大距离
                    entity.getRootData().putInt('r', 10)
                }
                if (!entity.getRootData().contains("max_quantity")) {
                    entity.getRootData().putInt('max_quantity', 20)
                }
                if (!entity.getRootData().contains("camp_level")) {
                    entity.getRootData().putInt('camp_level', 20)
                }
                if (!entity.getRootData().contains("enemy_sample")) {
                    entity.getRootData().putString('enemy_sample', 'goblin')//此处添加了默认的实体集合  可在生成时自定义
                }
                if (!entity.getRootData().contains("generate_speed")) {
                    entity.getRootData().putInt('generate_speed', 2)
                }
                if (!entity.getRootData().contains("generate")) {
                    entity.getRootData().putInt('generate', 0)
                } else {
                    let generateTick = getIntData(entity, 'generate')

                    let generate_speed = getIntData(entity, 'generate_speed')

                    if (generateTick >= generate_speed) {//最大生成速率
                        entity.getRootData().putInt('generate', 0)
                    } else {
                        entity.getRootData().putInt('generate', 1 + generateTick)
                    }
                }




                //let repeat = getData(entity, 'boolean', 'repeat')//是否可重复

                let done = getData(entity, 'boolean', 'done')

                let maxCamp = getData(entity, 'double', 'max_camp')

                let camp = getData(entity, 'double', 'camp')//阵营

                if (Number.isNaN(camp)) {
                    setData(entity, 'double', 'camp', 0)

                    camp = 0
                }


                //  let entitys = exampleData(event, entity, 'camp_entity', r + 64)//获取阵营实体 服务端  此处改为如果实体为怪物则计入

                let 范围内玩家 = getRadiusEntity(entity, 'minecraft:player', r + 5)



                //  if (camp == 0 && !getData(entity, 'boolean', 'repeat') && done) return//排除一次性的阵营




                let max_quantity = getIntData(entity, 'max_quantity')//最大数量(加上权重)

                let camp_level = getData(entity, $Int, 'camp_level')//据点等级差

                let level = getData(entity, $Int, 'level')//等级

                let generate_speed = getIntData(entity, 'generate_speed')//生成速度

                let generate = getIntData(entity, 'generate') == 0//是否生成 计速器


                let main = entity

                let entitys111 = main
                    .level
                    .getEntitiesWithin(AABB.of(
                        main.x - r - 15,
                        main.y - 15,
                        main.z - r - 15,
                        main.x + r + 15,
                        main.y + 40,
                        main.z + r + 15))

                let weight_quantity = 0

                let monster_quantity = 0



                entitys111.forEach(entitys => {

                    if (entitys.isLiving()) {

                        //monster_quantity++

                        let base = 1

                        //   if (!areData(entitys, 'camp_entity')) base = 1.5//入侵者占领速度

                        // if (areData(entitys, 'weighting')) {
                        //
                        //     weight_quantity += ((getData(entitys, $Int, 'weighting')) / base)
                        //
                        // } else

                        if (entitys.getRootData().contains('elite')) {

                            weight_quantity += (3 / base)

                        } else if (entitys.getRootData().contains('boss')) {

                            weight_quantity += (6 / base)

                        } else if (entitys.isMonster() || areData(entitys, 'camp_entity')) {//为怪物或有标签的实体

                            weight_quantity += (1 / base)

                        }


                    }
                    if (entitys.type == "guardvillagers:guard") {

                        weight_quantity -= 1

                    }else if (entitys instanceof $AbstractGolem) {
                        weight_quantity += 2
                    }
                })


                if (entity.server) {//为服务端时  仅在此处修改camp



                    范围内玩家.sendData('combat_area', {

                        entity: entity.getId(),
                        done: done,//给实体
                        camp: camp,//给实体
                        max_camp: maxCamp,//给实体
                        r: r,//给实体
                        entity_number: weight_quantity,
                    })
                }



                let players = entity.level.getPlayers()


                // let eligible = example(event, entity, 'minecraft:player', r + 16)//获取在范围内的玩家(在r+16格内)


                let sample = getEnemySample(entity)//获取实体样例集合




                if (entity.server) {
                    if (sample && camp < 0 && generate && Math.random() < Math.pow((max_quantity - weight_quantity) / max_quantity, 0.9)) {//生成机制

                        // let index = Math.floor(Math.random() * sample.length)
                        let denominator = getDenominator(sample)

                        let index = Math.random() * denominator

                        let index2 = 0

                        for (let e of sample) {
                            if (typeof e !== "string" && typeof e[1] === "number") {
                                index -= 1 / e[1]
                                if (index <= 0) {
                                    break
                                }
                            } else {
                                index--
                                if (index <= 0) {
                                    break
                                }
                            }
                            index2++
                        }
                        // console.log(sample)

                        //console.log(2)
                        let summoner

                        if (typeof sample[index2] !== "string") {

                            summoner = entity.level.createEntity(sample[index2][0])//返回服务端
                            setData(summoner, $Int, 'weighting', sample[index2][1])//自定义权重

                        } else {

                            // @ts-ignore
                            summoner = entity.level.createEntity(sample[index2])//返回服务端
                        }
                        if (summoner) {
                            summoner.setX(entity.x)
                            summoner.setY(entity.y)//不能设置刷新过远
                            summoner.setZ(entity.z)
                            randomTp(summoner, event, r-3)

                            entity.level.addFreshEntity(summoner)

                            //  tell(summoner)

                            setData(summoner, 'string', 'camp_entity', entity.stringUuid)//服务端已添加  存储阵营实体id

                            if (monster_quantity <= Math.max(5, r / 8)) {

                                entitys111.forEach(entitys => {

                                    if (entitys.isMonster()) {
                                        /**@type {Internal.LivingEntity} */
                                        let Monster = entitys

                                        Monster.addEffect(new $potion('minecraft:glowing', 100, 1, false, false)) //位置提示

                                        //  tell(111)

                                    }

                                })
                            }

                            if (areData(summoner, 'level')) {

                                setData(summoner, 'int', 'level', Math.max(1, getData(summoner, 'int', 'level') + camp_level))//等级
                                //不可在实体未添加至世界时使用/\
                            }

                        }


                    } else if (camp >= 0 && !getData(entity, 'boolean', 'done') && entity.age > 20) {//客户端数据不会保存  // 占领后       1-实体数/最大实体数的根号

                        //添加奖励(段位)

                        范围内玩家.forEach(e => {


                            e.getRootData().putInt('occupy_speed', getData(e, 'double', 'occupy_speed') + 3)


                        })

                        if (monster_quantity <= Math.max(5, r / 8)) {
                            let entitys = main
                                .level
                                .getEntitiesWithin(AABB.of(
                                    main.x - r,
                                    main.y - 3,
                                    main.z - r,
                                    main.x + r,
                                    main.y + 40,
                                    main.z + r))
                            entitys.forEach(entitys => {

                                if (entitys.isMonster()) {
                                    /**@type {Internal.LivingEntity} */
                                    let Monster = entitys
                                    if (areData(entitys, 'camp_entity')) {

                                        Monster.addEffect(new $potion('minecraft:glowing', 10000, 1, false, false)) //位置提示

                                    } else {

                                        Monster.addEffect(new $potion('minecraft:glowing', 100, 1, false, false)) //位置提示

                                    }



                                }

                            })
                        }




                        occupy_explosion(entity, 范围内玩家)



                        setData(entity, 'boolean', 'done', true)//已占领标记


                    } else if (getData(entity, 'boolean', 'done') && camp < 0) {//当据点被夺回时(且为可重复)  重置玩家速度

                        if (getData(entity, 'boolean', 'done')) {

                            // if (eligible) {
                            //     if (true) {//实体为循环时  增加玩家的的占领速度
                            //         for (let i = 0; eligible[i]; i++) {
                            //
                            //             eligible[i].getRootData().putInt('occupy_speed', 1)//死亡后增加速度getData(eligible[i], 'double', 'occupy_speed') + 1
                            //         }
                            //     } else {//为非循环时 重置玩家占领速度
                            //
                            //         for (let i = 0; eligible[i]; i++) {
                            //
                            //             eligible[i].getRootData().putInt('occupy_speed', 1)//被占领后后重置速度
                            //         }
                            //     }
                            //  tell("---------被抢夺----------")

                            范围内玩家.forEach(e => {


                                /**@type {Player} */
                                let player = e

                                player.sendData('combat_animation', { data: 'fail' })


                                setDan(e, getDan(e) - (20 + level * 0.1))



                                e.getRootData().putInt('occupy_speed', 1)
                            })


                            camp -= (0.5 * maxCamp)

                            //setData(entity, 'double', 'camp', -0.5 * maxCamp)//被占领惩罚

                            occupy_explosion(entity, 范围内玩家)


                            setData(entity, 'boolean', 'done', false) // entity.getRootData().remove('done')//当被抢夺时删除已被占领标记

                            setData(entity, 'boolean', 'done2', false)

                        }


                    } else if (!getData(entity, 'boolean', 'done2') && camp == maxCamp && camp > 0) {//完全占领

                        范围内玩家.forEach(e => {

                            /**@type {Player} */
                            let player = e

                            player.sendData('combat_animation', { data: 'win' })

                            setDan(e, getDan(e) + 20 + level * 0.1)

                        })

                        setData(entity, 'boolean', 'done2', true)



                    }
                }



                // tell(getData(entity, 'boolean', 'done2'))

                // tell(maxCamp)

                // tell(camp)




                //let weight_quantity = 0
                let campAdd = -weight_quantity//entitys ? -entitys.length : 0  //怪物占领速度值为负数



                if (范围内玩家) {
                    /*
                                    eligible.forEach(eligibles => {
                    
                                        setData(eligibles, 'boolean', 'range', true)
                                    })
                                        */
                    //给范围内的玩家标记 以方便筛选

                    //setData(players[i], 'double', 'camp_snow', camp / maxCamp)//显示占领条animation //players[i].getRootData().remove('camp_animation')

                    /*
                                        if (areData(players[i], 'range')) {
                                        } else {
                                            //players[i].getRootData().putInt('occupy_speed', 1)//重置占领速度
                                            players[i].getRootData().remove('camp_snow')
                                            console.log('删除')
                                        }
                    */
                    /*
                     if (false) {//entity.server
                         //条长度
                         setData(eligible[i], 'double', 'camp_snow', camp / maxCamp)//服务端
     
                         eligible[i].sendData('combat_area', {
                             value: camp / maxCamp,
                             name: 'camp_snow',
                             entity: 0,
                         })
     
                         //条动画
                         if (areData(eligible[i], 'camp_move')) {
     
                             let bar_move = Math.min(getData(eligible[i], 'int', 'camp_move') + 1, 100)
     
                             eligible[i].sendData('combat_area', {
                                 value: bar_move,
                                 name: 'camp_move',
                                 entity: 0,
                             })
                             setData(eligible[i], 'int', 'camp_move', bar_move)
                         } else {
                             eligible[i].sendData('combat_area', {
                                 value: 0,
                                 name: 'camp_move',
                                 entity: 0,//此项无需实体id
                             })
                             setData(eligible[i], 'int', 'camp_move', 0)
                         }
     
                     }//
    */
                    范围内玩家.forEach(e => {

                        if (!e.getRootData().contains("occupy_speed")) {
                            e.getRootData().putInt('occupy_speed', 1)

                        }//初始化玩家占领速度  还应该给玩家初始化占领速度

                        // setData(eligible[i], 'double', 'camp_snow', camp / maxCamp)//显示占领条
                        if (areData(e, 'occupy_speed')) {

                            campAdd += getData(e, 'double', 'occupy_speed')//加上范围内玩家
                            //console.log('campadd' + getData(players[i], 'double', 'occupy_speed'))
                        }

                    })

                    //  tell (  campAdd)


                    //for (let i = 0; eligible[i]; i++) {

                    //    if (!eligible[i].getRootData().contains("occupy_speed")) {
                    //        eligible[i].getRootData().putInt('occupy_speed', 1)

                    //    }//初始化玩家占领速度  还应该给玩家初始化占领速度

                    //    // setData(eligible[i], 'double', 'camp_snow', camp / maxCamp)//显示占领条
                    //    if (areData(eligible[i], 'occupy_speed')) {

                    //        campAdd += getData(eligible[i], 'double', 'occupy_speed')//加上范围内玩家
                    //        //console.log('campadd' + getData(players[i], 'double', 'occupy_speed'))
                    //    }
                    //    // console.log('存在玩家')




                    //}//


                    /*
                                    eligible.forEach(eligibles => {
                                        eligibles.getRootData().remove('range')
                                    })
                                        */
                    //删除标记
                }


                // console.log('campAdd' + campAdd)

                //  entity.customNameVisible = true
                // 设置自定义的名称
                //  entity.customName = Component.green(`camp:${camp}`)

                // campAdd*=10

                if (entity.server) {//为服务端时  在此处统一修改camp (服务端 客户端)
                    // tell('campAdd' + campAdd)
                    // tell('camp' + camp)
                    /*
                                    Client.player.paint({
                    
                                        bossBar15: {//基底
                                            type: 'text',
                                            x: 0,
                                            y: 12,//
                                            alignX: 'center',
                                            alignY: 'top',
                                            w: 182,
                                            h: 5,
                                            draw: 'always',
                                            // scale: 0.5,
                                            text: '占领值' + camp + '占领速度' + campAdd,//90.9-181.8 * (health / maxHealth-oldHealth)/2+2*(90.9* health / maxHealth - 90.9)
                                            remove: false
                                        }
                                    })
                    */



                    if ((camp + campAdd) > maxCamp) {
                        //console.log('最大')
                        setData(entity, 'double', 'camp', maxCamp)

                        // entity.server.players.sendData('combat_area', {//给所有玩家客户端的实体添加仅做标签判定的nbt(传入的为服务端)
                        //     value: maxCamp,//
                        //     name: 'camp',
                        //     entity: entity.getId(),
                        // })//传客户端 camp


                    } else if ((camp + campAdd) < -maxCamp) {

                        setData(entity, 'double', 'camp', -maxCamp)

                        //  entity.server.players.sendData('combat_area', {//给所有玩家客户端的实体添加仅做标签判定的nbt(传入的为服务端)
                        //      value: -maxCamp,
                        //      name: 'camp',
                        //      entity: entity.getId(),
                        //  })



                    } else if (camp < 0 || true) {
                        //当类型为可重复时  大于0仍可被抢夺  类型为一次性时  大于0便不在可被抢夺 并使camp一直为0
                        let absCamp = Math.abs(campAdd)

                        let pm = 0
                        if (absCamp != 0) {
                            pm = campAdd / absCamp
                        }


                        setData(entity, 'double', 'camp', camp + pm * Math.pow(Math.abs(8 * absCamp), 0.8))

                        // entity.server.players.sendData('combat_area', {//给所有玩家客户端的实体添加仅做标签判定的nbt(传入的为服务端)
                        //     value: camp + campAdd,//需要显示的 getData(entity, 'boolean', 'repeat')
                        //     name: 'camp',
                        //     entity: entity.getId(),
                        // })

                    } else if (camp > 0 && !getData(entity, 'boolean', 'repeat')) {//当camp大于0且该实体不可重复抢夺时 camp设置为零

                        setData(entity, 'double', 'camp', 0)

                        entity.server.players.sendData('combat_area', {//给所有玩家客户端的实体添加仅做标签判定的nbt(传入的为服务端)
                            value: 0,
                            name: 'camp',
                            entity: entity.getId(),
                        })
                    }
                }
            }
            /// if (time < 0) { entity.kill() }

            //  if (entity.age % 100 != 0) return
            // console.log('ticked every 100 ticks')
        })

})