


let entitySpwan = (event, player) => {


    if (event.server.tickCount % (60) == 0) {

        const Max = 64//最大数量



        let number = 10

        if (event.server.tickCount % (120) == 0) {

           number = entitySpwanCount( player, 'KJSspwan', 48)

            //number = count ? count.length : 0
            
            setData(player,$Int,"KJSspwanNumber",number)
            
        } else if(areData(player,"KJSspwanNumber")){
            
    
            number= getData(player,$Int,"KJSspwanNumber")
            
            
    
        }




        for (let j = 0; j < 10 * Math.random(); j++) {
       
            
            if (Math.random() < Math.pow((Max - number) / Max, 0.9)) {//生成机制player.block.biomeId

                let pos = randomPos(event, player, 48)//随机取点 允许 空气 水

                if (pos) {

                    let entity = spwanEntityGroup(event, player.block.offset(pos[0] - player.x, pos[1] - player.y, pos[2] - player.z,).biomeId)
                    //event.server.tell(player.block.offset(pos[0], pos[1], pos[2],).biomeId)
                    if (entity && entity['entityType'] && entity['entityType'][0]) {

                        let isWater = false

                        let addQuantity = 0



                        switch (entity['value']) {//生成数量
                            case 0: addQuantity = 3
                                break
                            case 1: addQuantity = 1
                                break
                            case 2: addQuantity = 0
                                break
                        }

                        let type = Math.floor(Math.random() * entity['entityType'].length)
                        //event.server.tell(type)
                        
                         let spawner = player.level.createEntity(entity['entityType'][type])//返回服务端
                        for (let i = 0; i <Math.round( addQuantity * Math.random()) + 1; i++) {

                            //spawner.setPose(player.getPose())//先初始化

                            spawner.setX(pos[0] + 0.1 * (2 * Math.random() - 1))
                            spawner.setY(pos[1])//不能设置刷新过远
                            spawner.setZ(pos[2] + 0.1 * (2 * Math.random() - 1))


                            if (i == 0) {//仅在第一次进行实体类型检测
                                isWater = spawner.getMobType() == $MobType.WATER//是否为水生生物

                                if (spawner.isMonster()&&player.level.dayTime()%24000<12000) {
                                
                            // spawner.remove('discarded')
                                
                                }
                                
                                
                                if (isWater) {//是否为海洋生物spawner.waterCreature
                                    if (spawner.block.offset(0, 0, 0).getId() !== 'minecraft:water') {

                                        spawner.remove('discarded')
                                        break
                                    }
                                } else {

                                    if (spawner.block.offset(0, 0, 0).getId() == 'minecraft:water') {

                                        spawner.remove('discarded')
                                        break
                                    }
                                }
                            }
                         
                       // spawner.level.getPlayers()[0].setX(pos[0])
                       // spawner.level.getPlayers()[0].setY(pos[1])
                       // spawner.level.getPlayers()[0].setZ(pos[2])
                            //   if (type == 4 && spawner.type == "alexsmobs:mungus") {
                            //       player.setX(pos[0])  pos = randomPos(event, spawner, 64)
                            //       player.setY(pos[1])
                            //       player.setZ(pos[2])
                            //   }


                            // event.server.tell(pos)


                            //   if (type == 2&&addQuantity==3) {

                            //       player.setX(pos[0])
                            //       player.setY(pos[1])
                            //       player.setZ(pos[2])
                            //   }
                            // event.server.tell(pos[0] + '    ' + pos[1] + '    ' + pos[2] + '    ' + i)
                            //event.server.tell((spawner.waterCreature))

                            //  event.server.tell((spawner.name))
                            //  event.server.tell(pos)

                            player.level.addFreshEntity(spawner)

                            setData(spawner, 'boolean', 'KJSspwan', true)
                        }
                        //event.server.tell(spawner.x + '    ' + spawner.y + '    ' + spawner.z)


                        // event.server.tell("y" + pos[1])
                    }
                }
            }
        }


    }

}




let spwanWeight = (weight) => {//生成权重

    let length1 = weight[0].length
    let length2 = weight[1].length
    let length3 = weight[2].length


    let denominator = length1 + length2 + length3


    let random = Math.random() * (length1 * 0.65 / denominator) + (length2 * 0.25 / denominator) + (length3 * 0.1 / denominator)

    //console.log((length1 * 0.65 / denominator) + (length2 * 0.25 / denominator) + '    ' + (length1 * 0.65 / denominator)+ ' 数 ' + ((length1 * 0.65 / denominator) + (length2 * 0.25 / denominator) + (length3 * 0.1 / denominator)))

    if (random > (length1 * 0.65 / denominator) + (length2 * 0.25 / denominator)) {

        return 2

    } else if (random > (length1 * 0.65 / denominator)) {
        return 1

    } else {
        return 0

    }

}














