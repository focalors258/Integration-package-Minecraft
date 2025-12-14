StartupEvents.registry('entity_type', event => {

    event.create('cure_bullet', "entityjs:geckolib_projectile")
        // .immuneTo()//可接受的方块
        //.canSpawnFarFromPlayer(true)
        //.clientTrackingRange(20)//实体追踪范围
        .mobCategory('misc')//实体分类
        .setRenderType("solid")//实体呈现类型
        .sized(1, 1)//碰撞箱大小
        .modelSize(3, 3)//模型比例
        .updateInterval(1)//tick更新速率
        .repositionEntityAfterLoad(true)//加载后重新定位
        .isPushable(false)//是否可移动
        .fireImmune(true)//是否免疫火
        .saves(true)//应序列化其数据
        .setSummonable(true)//是否可召唤
        // .setSwimSound("minecraft:entity.generic.swim")//游泳声音
        //.setSwimSplashSound("minecraft:entity.generic.splash")//游泳飞溅声音

        .mobCategory('projectile')
        .render(e => {

            RenderJSRenderSystem.setShaderColor(2, 2, 2, 2)


        })


        .addAnimationController('exampleController', 1, event => {//动画控制

            event.thenLoop('animation.model.rotate');

            //event.thenLoop('rotate');

            // event.thenPlayAndHold('');
            return true;
        })

        .tick(entity => {



            //entity.deltaMovement = new Vec3(0, 0, 0)//向量


            if (entity.getRootData().contains("goal") ) {//追踪false&& global.goalEntity[entity.getRootData().getString('goal')]

                if (!entity.getRootData().contains("heal")) {
                    entity.getRootData().putInt('heal', 0)//回复量
                }


                let entity1 = global.goalEntity[entity.getRootData().getString('goal')]

                //  1->实体修改前的视角
                //  2->实体与玩家的角度
                //3->修改后的视角

                let vertical1 = entity.getRootData().getDouble('xRot')

                let horizontal1 = entity.getRootData().getDouble('yRot')

                let vertical = PI * vertical1 / 180  //竖向角度(使用此值替换原版角度)  entity.XRot/ 180  entity.YRot/ 180 /

                let horizontal = PI * horizontal1 / 180 //横向角度  //注意 vertical  horizontal 这里的单位为弧度

                let horizontal3 = 0

                let vertical3 = 0


                let x = entity.x - entity1.x  //entity1 被攻击者  entity 实体
                let y = entity.y - entity1.y
                let z = entity.z - entity1.z

                let distance = Math.hypot(Math.hypot(x, y), z)//这里没有distanceToEntity()方法

                if (distance < 1) {

                    entity1.invulnerableTime = 0

                    entity1.heal(getData(entity, 'int', 'heal'))

                    //global.goalEntity[entity1.stringUuid] = null



                    let player = example(event, entity, 'minecraft:player', 30)

                    if (player) {
                        player.forEach(player => {
                            player.sendData('divineHeal', { entity: entity.getId() })//
                        })
                    }




                    entity.remove('discarded')




                }

                let vecX = -Math.cos(vertical) * Math.sin(horizontal) / 5//向量 * distance

                let vecZ = Math.cos(vertical) * Math.cos(horizontal) / 5// vecX * distance 

                let vecY = -Math.sin(vertical) / 5// * distance // vecX 负号不可动




                let vertical2 = getVertical(x, y, z)//180 * (Math.asin(y / distance) / PI) //根据受击者与该实体连线的倾斜角度得出最终该实体移动的方向

                let horizontal2 = getHorizontal(x, z)//180 * (Math.atan2(x, z) / PI)//注意 vertical1 horizontal1  这里的单位为角度
                /*
                                if (horizontal2 > 0) {
                                    horizontal2 = 180 - horizontal2//修复坐标系方向不同
                                } else if (horizontal2 < 0) {
                                    horizontal2 = -horizontal2 - 180
                                }                                                                                        //Math.asin(x*x+) 180*(1-Math.abs(Math.atan2(differX, differZ)/PI))
                */


                if (Math.abs(vertical1 - vertical2) > 20) {//使vertical逐渐逼近并最终等于vertical1

                    let add = Math.abs(vertical1 - vertical2) / (vertical1 - vertical2)

                    if (vertical1 <= -90 && add > 0) {

                        if (horizontal1 < 0) {
                            horizontal3 = horizontal1 + 180
                        } else if (horizontal1 > 0) {
                            horizontal3 = horizontal1 - 180
                        }

                    } else if (vertical1 >= 90 && add < 0) {

                        if (horizontal1 < 0) {
                            horizontal3 = horizontal1 + 180
                        } else if (horizontal1 > 0) {
                            horizontal3 = horizontal1 - 180
                        }

                    } else {
                        vertical3 = vertical1 - 20 * add
                    }

                } else if (Math.abs(vertical1 - vertical2) < 20) {

                    vertical3 = vertical1
                } else if (Math.abs(vertical1 - vertical2) > 0) {

                }

                let differHorizontal = horizontal1 - horizontal2//( horizontal1 - horizontal2)>180?horizontal1 - horizontal2:360-( horizontal1 - horizontal2) //差值

                if (Math.abs(differHorizontal) > 180 && !(horizontal1 < 0 && horizontal2 < 0) && !(horizontal1 > 0 && horizontal2 > 0)) {

                    if (differHorizontal > 0) {
                        differHorizontal = -(360 - differHorizontal)
                    } else {
                        differHorizontal = (360 - differHorizontal)
                    }
                }

                if (Math.abs(differHorizontal) >= 20) {//使vertical逐渐逼近并最终等于vertical1

                    let add = Math.abs(differHorizontal) / differHorizontal

                    if (horizontal1 <= -180 && add > 0) {

                        horizontal3 = 180

                    } else if (horizontal1 >= 180 && add < 0) {

                        horizontal3 = -180
                    } else {
                        horizontal3 = horizontal1 - 20 * add
                    }

                } else if (Math.abs(differHorizontal) < 20) {//&& Math.abs(horizontal1 - horizontal2) > 0


                    horizontal3 = horizontal2


                } else if (Math.abs(differHorizontal) == 0) {//&& Math.abs(horizontal1 - horizontal2) > 0

                    //  vecX *= 5
                    //  vecZ *= 5

                }

                entity.getRootData().putDouble("xRot", vertical3)
                entity.getRootData().putDouble("yRot", horizontal3)//赋值


                //console.log('目标:' + entity1.name)
                //S console.log('横  修改前角:' + Math.floor(horizontal1) + '  修改后角:' + Math.floor(horizontal3) + '  最终角:' + Math.floor(horizontal2))//Math.floor(vertical1) + 
                //S console.log('竖  修改前角:' + Math.floor(vertical1) + '  修改后角:' + Math.floor(vertical3) + '  最终角:' + Math.floor(vertical2))
                //S console.log('  x:' + vecX + '  y:' + vecY + '  z:' + vecZ)


                entity.deltaMovement = new Vec3(5 * vecX, 5 * vecY, 5 * vecZ)//以该实体视角移动x / distance, y / distance, z / distancevecY

                entity.hurtMarked = true

            }









        })


})