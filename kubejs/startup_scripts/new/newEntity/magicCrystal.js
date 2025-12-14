







let callFairyDie = (event) => {

    let entity = event.entity



    if (event.entity && entity.areData("host") && (isFairy(entity))
    ) {
        /**@type {Internal.LivingEntity} */
        let host = entity.level.getEntity(entity.getDataString("host"))


        if (host) {

            let a = host.getAttributeValue("kubejs:call_fairy_die")

            if (a) {
                for (let i = 0; i < a; i++) {
                    let summoner = entity.level.createEntity('kubejs:magic_crystal')
                    summoner.setX(entity.x + (2 * Math.random() - 1))
                    summoner.setY(entity.y + 1)
                    summoner.setZ(entity.z + (2 * Math.random() - 1))
                    entity.level.addFreshEntity(summoner)

                }
            }


        }



    }


}






//需求   追踪   自爆  可被攻击
let magicCrystalReaction = (event, entity, source) => {

    if (entity.type == "kubejs:magic_crystal") {
        if (source.actual) {



            setData(entity, $String, "host", source.actual.stringUuid)

            event.setCanceled(true)
        }
    }




}

let isMagicCrystalTarget = (entitys, host) => {

    return entitys.isLiving() &&
        (
            (host.isPlayer() && !entitys.isPlayer()) ||
            (!host.isPlayer() && entitys.isPlayer())
        ) &&
        entitys.type != "kubejs:magic_crystal"







}

StartupEvents.registry('entity_type', event => {//幻魔元素召唤

    event.create('magic_crystal', "entityjs:mob")
        // .immuneTo()//可接受的方块
        //.canSpawnFarFromPlayer(true)
        //.clientTrackingRange(20)//实体追踪范围
        // .mobCategory('misc')//实体分类
        .setRenderType("translucent")//实体呈现类型
        .sized(0.7, 1.2)//碰撞箱大小
        .modelSize(1, 1)//模型比例
        .updateInterval(1)//tick更新速率
        .repositionEntityAfterLoad(true)//加载后重新定位
        .isPushable(false)//是否可移动
        .fireImmune(false)//是否免疫火
        .setHurtSound(context => {//受伤音效
            // Custom logic to determine the hurt sound for the entity
            // You can use information from the HurtContext to customize the sound based on the context
            const { entity, damageSource } = context;
            // Determine the hurt sound based on the type of damage source

            return "minecraft:block.glass.break"

        })
        .saves(true)//应序列化其数据
        .setSummonable(true)//是否可召唤
        // .setSwimSound("minecraft:entity.generic.swim")//游泳声音
        //.setSwimSplashSound("minecraft:entity.generic.splash")//游泳飞溅声音
        .defaultDeathPose(false)
        .mobCategory('projectile')

        //     .defaultDeathPose(true)

        //     .isPersistenceRequired(true)
        //    .isAlwaysExperienceDropper(true)
        // .setDeathSound("minecraft:entity.generic.death")
        //    .canJump(true)
        // .ambientSoundInterval(100)

        //   .canBreatheUnderwater(true)
        //    .eatingSound("minecraft:entity.zombie.ambient")
        //  .fallSounds("minecraft:entity.generic.small_fall", "minecraft:entity.generic.large_fall")
        //
        // .followLeashSpeed(1.5)
        // .setAmbientSound("minecraft:entity.zombie.ambient")
        // .mainArm("left")
        // .mobType('undead')

        //   .setSoundVolume(0.5)
        //.setSummonable(true)
        // .setSwimSound("minecraft:entity.generic.swim")
        // .setSwimSplashSound("minecraft:entity.generic.splash")
        // .setWaterSlowDown(0.6)
        //    .shouldDespawnInPeaceful(true)
        // .mountJumpingEnabled(true)


        // .noEggItem() // Disables automatic egg item creation


        /**
         * These methods below require a set return value, if the value does not match the required result
         * it will automatically default to the super method in the entity builder and output an error in logs>kubejs>startup.log.
         *
         * Remember all callback functions are also able to be live-edited with global events!
         *
         * Example:
         * global.interact = context => {
         *  if (context.player.isShiftKeyDown()) return
         *      context.player.startRiding(context.entity);
         * }
         *
         * .onInteract(context => global.interact(context)) // Reload this with /kubejs reload startup_scripts
         */
        //(entity1.x - entity.x) / distance, (entity1.y - entity.y) / distance, (entity1.z - entity.z) / distance
        .addAnimationController('exampleController', 1, event => {//动画控制


            if (event.entity.getHealth() > 0) {
                event.thenLoop('animation.charging_eye.rotate');
            } else {
                event.thenLoop('animation.charging_eye.die')
            }

            //event.thenLoop('rotate');
            //    tell(getData(event.entity, $String, "magicCrystalEffect"))
            // event.thenPlayAndHold('');

            // 




            return true;
        })
        ///particle legendary_monsters:circle 20 20 3000 40 50 50 50 30 false_
        .tick(entity => {

            // entity.getRootData().putBoolean("projectile", true)
            //   let 星级_条件 = getData(entity, 'list', 'star_rule')//模板??????????????????????????
            //
            //   if (!星级_条件) {
            //       setData(entity, 'list', 'star_rule', {
            //           name: '副本_名称',
            //           rule: {//data中的为该星级条件数据 default为默认是否达成 present为当前是否达成
            //               time: { default: 1, present: 0, data: { value: 500, present: 0 } },
            //               be_att: { default: 1, present: 0, data: { value: 10, present: 0 } },
            //               reaction: { default: 0, present: 1, data: { type: '冰冻', value: 10, present: 0 } }
            //           }
            //       })
            //   }
            //
            //    entity.getRootData()['star_rule']['name']='副本_名称'//更新
            //       
            //       tell(entity.getRootData()['star_rule'])?????????????????????????????????????????



            //let a = Client.particleEngine.createParticle('blue_skies:dust', entity.x , entity.y + 0.5, entity.z , 0, 100, 0)//粒子

            if (entity.age > 400) {

                entity.remove("discarded")

            }


            if (entity.level.getBlock(entity.x, entity.y - 1, entity.z,).blockState.isAir()) {
                entity.deltaMovement = new Vec3(0, -1, 0)//向量
            } else {
                entity.deltaMovement = new Vec3(0, 0, 0)//向量
            }

            let att = 0
            let host
            if (areData(entity, "host")) {


                host = entity.level.getEntity(getData(entity, $String, "host"))
                if (host) {

                    if (host.isPlayer()) {//攻击者为玩家trueisPlayer(event)
                        //      console.log('蒸发2')
                        att = DamageValue2(host, 'reaction1')

                    } else {
                        //     console.log('蒸发3')
                        att = entityAtt2(host)
                    }
                    let reaction = ofReactionEffect(entity)

                    if (reaction) {
                        att *= reaction.getAmplifier() * 0.05 + 1
                    }

                    let number = false
                    entity.level.getEntitiesWithin(AABB.of(entity.x - 3, entity.y - 1, entity.z - 3, entity.x + 3, entity.y + 3, entity.z + 3)).forEach(entitys => {



                        if (onFire2(entity)) {//爆炸

                            // entity.runCommand(`particle legendary_monsters:circle 20 20 3000 40 50 50 50 30 false`)
                            if (isMagicCrystalTarget(entitys, host)) {

                                attack(host, entitys, ReactionTypes.fire, att, 1)

                            }

                            entity.level.getPlayers().sendData("magic_crystalExplosion", { pos: [entity.x, entity.y + 0.5, entity.z], color: [42, 192, 172, 200] })//火焰

                            entity.remove("discarded")

                        } else if (onEnder2(entity)) {//爆炸

                            if (isMagicCrystalTarget(entitys, host)) {

                                attack(host, entitys, ReactionTypes.ender, att, 1)

                            }

                            entity.level.getPlayers().sendData("magic_crystalExplosion", { pos: [entity.x, entity.y + 0.5, entity.z], color: [1, 0.15, 1, 1] })//末影


                            entity.remove("discarded")

                        } else if (entity.getEffect("kubejs:ice")) {//有概率获得碎片


                            if (isMagicCrystalTarget(entitys, host)) {

                                attack(host, entitys, ReactionTypes.ice, att, 1)

                            }

                            entity.level.getPlayers().sendData("magic_crystalExplosion", { pos: [entity.x, entity.y + 0.5, entity.z], color: [42, 192, 172, 200] })//火焰

                            entity.remove("discarded")

                        } else if (entity.getEffect("kubejs:divine")) {//有概率获得碎片


                            if (isMagicCrystalTarget(entitys, host)) {

                                attack(host, entitys, ReactionTypes.divine, att, 1)

                            }

                            entity.level.getPlayers().sendData("magic_crystalExplosion", { pos: [entity.x, entity.y + 0.5, entity.z], color: [42, 192, 172, 200] })//火焰

                            entity.remove("discarded")

                        } else if (entity.getEffect("kubejs:water")) {//有概率获得碎片


                            if (isMagicCrystalTarget(entitys, host)) {

                                attack(host, entitys, ReactionTypes.water, att, 1)

                            }

                            entity.level.getPlayers().sendData("magic_crystalExplosion", { pos: [entity.x, entity.y + 0.5, entity.z], color: [42, 192, 172, 200] })//火焰

                            entity.remove("discarded")

                        } else if (entity.getEffect("kubejs:lightning")) {//有概率获得碎片


                            if (isMagicCrystalTarget(entitys, host)) {

                                attack(host, entitys, ReactionTypes.lightning, att, 1)

                            }

                            entity.level.getPlayers().sendData("magic_crystalExplosion", { pos: [entity.x, entity.y + 0.5, entity.z], color: [42, 192, 172, 200] })//火焰

                            entity.remove("discarded")

                        } else if (entity.getEffect('kubejs:call')) {//逃窜(追踪)"kubejs:water"

                            if (!entity.getRootData().contains("isTrace") && !number && (isMagicCrystalTarget(entitys, host))) {


                                number = true
                                //global.goalEntity[]=
                                let entity1 = entitys

                                let numbers = host.getAttributeValue("kubejs:call_butt")

                                for (let j = 0; j < numbers; j++) {//召唤五个  后期需调整


                                    if (entity1) {
                                        let summoner = entity.level.createEntity('kubejs:split_crystal')
                                        summoner.setX(entity.x)
                                        summoner.setY(entity.y + 1)
                                        summoner.setZ(entity.z)
                                        //summoner.setTarget(entity)//设置攻击目标

                                        //  global.goalEntity[entity1.stringUuid] = entity1//将受击者对象存入global 索引为其id
                                        //  event.server.tell(global.goalEntity[entity.stringUuid])

                                        entity.level.addFreshEntity(summoner)

                                        summoner.getRootData().putString('goal', entity1.stringUuid)

                                        summoner.getRootData().putFloat('att', att * 1.2)

                                        //  entity.getRootData().putString("isTrace", uuid)//保存选定的受击者

                                        //entity.getRootData().putDouble('angle', -1)

                                        //global.goalEntity[uuid] = entity1
                                        entity.getRootData().putBoolean("isTrace", true)


                                    } else {

                                        entity.getRootData().putBoolean("invalid", true)
                                    }
                                }



                            }

                            entity.remove('discarded')


                        }



                    })



                    entity.remove("discarded")



                }
                // tell(host)
            }











        })

    /*
            .canCollideWith(context => {
                return false //Some Boolean value determining whether the entity may collid with another
            })
    
    
    
    
            .render(context => {
                // Define core logic to render the entity (recommended to use .scaleModelForRender instead)
                if (context.entity.isBaby()) {
                    return context.poseStack.scale(0.5, 0.5, 0.5); // Scale down if the entity is a baby
                }
                return context.poseStack; // Otherwise, keep the default pose stack
            })
            .scaleModelForRender(context => {
                // Define logic to render the entity without changing core logic such as hitbox rendering
                const { entity, widthScale, heightScale, poseStack, model, isReRender, partialTick, packedLight, packedOverlay } = context
                if (entity.hurtTime > 0) {
    
                    let a = entity.hurtTime
    
                    poseStack.scale(1 - a * 0.025, 1 - a * 0.025, 1 - a * 0.025)
                }
            })
    
            .setBlockJumpFactor(entity => {
                // Sets block jump factor returning a float value
                if (entity.age > 2000) {
                    return 1.3; // Increase jump factor when the entity is old enough
                }
                return 1; // Default jump factor
            })
          
    
            .animationResource(entity => {
                // Return different animation resources based on the entity's state
                // Use information about the LivingEntity provided by the context.
                /*
                if (entity.hurtTime > 0) {
                    return // Return some animation path when entity is hurt
                } else {
                    return //"kubejs:animations/entity/wyrm.animation.json"; // Return Wyrm animation otherwise
                }
    
                return //"kubejs:animations/entity/ender_eye.animation.json"
    
            })
                
            */


    /*
.blockSpeedFactor(entity => {
// Define logic to calculate and return the block speed factor for the entity
// Use information about the LivingEntity provided by the context.
const age = entity.age;
const maxAge = 5000; // Assuming the maximum age is 5000

// Custom logic to calculate block speed factor based on entity's age
const factor = age < maxAge ? 1.0 : 0.5; // Reduce speed factor for older entities
return factor;
})

.canAddPassenger(context => {
// Define custom logic to determine if a passenger can be added to the entity
// Use information about the PassengerEntityContext provided by the context.
// For example, check if the entity is not already carrying too many passengers.
const maxPassengers = 4; // Assuming a maximum of 4 passengers
return context.entity.getPassengers().size() < maxPassengers;
})



                                     //   for (let i = 0; entitys[i]; i++) {
// //  let entitys = exampleData(event, entity, 'load', 30)//需要有 已加载 标签  有等级的实体
                                     //       if (entitys[i].isLiving() && !(entitys[i].getRootData().contains("projectile"))) {//添加攻击黑名单//.type == "dummmmmmy:target_dummy"projectile
                                     //           entity1 = entitys[i]
                                     //       }
//
                                     //   }


.canChangeDimensions(entity => {
// Define the conditions for the entity to be able to change dimensions
// Use information about the LivingEntity provided by the context.
// For example, allow dimension change only for entities with a specific tag.
return entity.tags.contains("dimension_changer");
})


.canFreeze(entity => {
// Define conditions for the entity to be able to freeze
// For example, allow freezing only if the entity is in water.
return entity.inWater;
})

.setMaxFallDistance(entity => {
// Define custom logic to determine the maximum fall distance before taking damage
// Use information about the LivingEntity provided by the context

return 0; // Default fall distance
})




.dampensVibrations(entity => {
// Determine whether the living entity dampens vibrations
// Return true if the entity dampens vibrations, false otherwise
// For example, return true if the entity has no gravity.
return entity.isNoGravity();
})







.isCurrentlyGlowing(entity => {
// Define the conditions to check if the entity is currently glowing
// For example, check if the entity has a regeneration or glowing effect applied
return entity.hasEffect("minecraft:regeneration") || entity.hasEffect("minecraft:glowing");
})
.isFlapping(entity => {
// Mimics the Ender Dragon's Flapping Behavior
// Define logic to determine whether the entity is currently flapping
const flapTime = entity.flapTime; // Current flap time
const oFlapTime = entity.oFlapTime; // Previous flap time

// Calculate cosine values for the current and previous flap times
const f = Math.cos(flapTime * 6.2831855);
const f1 = Math.cos(oFlapTime * 6.2831855);

// Check if the entity is flapping based on cosine values
return f1 <= -0.3 && f >= -0.3;
})


.isFreezing(entity => {
// Define the conditions for the entity to start freezing
// Use information about the LivingEntity provided by the context.
// Start freezing the entity if they're in the taiga biome and can freeze.
return entity.level.getBiome(entity.block.pos) == 'minecraft:taiga' && entity.canFreeze();
})

.isInvulnerableTo(context => {
// Define conditions for the entity to be invulnerable to the specific type of damage
// Use information about the DamageContext provided by the context.

// Example condition: Entity is invulnerable to magic damage
return context.damageSource.isMagic();
})


.mayInteract(context => {
// Define conditions for the entity to be allowed to interact with the world
// Use information about the MayInteractContext provided by the context.
return context.entity.getTags().contains('canInteractWithWorld')
})

.nextStep(entity => {
// Define custom logic to calculate the next step distance based on the provided entity.
const movementSpeed = entity.getTotalMovementSpeed(); // Get the entity's movement speed
//If the entity is not an animal return default vanilla behavior
if (!entity.animal) return entity.moveDist + 1;
const behaviorFactor = entity.isAggressive() ? 1.5 : 1; // Adjust the step distance based on behavior
// Calculate the next step distance based on movement speed, size, and behavior
const nextStepDistance = movementSpeed * behaviorFactor;
return nextStepDistance;
})






.showVehicleHealth(entity => {
// Determine whether to show the vehicle health for the living entity
// Return true to show the vehicle health, false otherwise
return !entity.isFallFlying(); //Only show vehicle's health to the player if the vehicle is fall flying
})


.canCollideWith(context => {
return true //Some Boolean value determining whether the entity may collid with another
})




/**
* All methods below return void meaning they don't require a set return value to function.
* These mostly are similar to KubeJS' normal events where you may do things on certain events your entities call!
*/



    /*        
            .lavaHurt(entity => {
                // Heal the entity by 20 health points
                entity.heal(20);
            })
    
    
    
    
            .lerpTo(context => {
                const { x, y, z, yaw, pitch, entity, delta } = context;
                // Set the entity's position directly to the target position if the entity is freezing
                if (entity.isFreezing()) entity.setPosition(x, y, z);
            })
            .onAddedToWorld(entity => {
                // Teleport the entity slightly above its current position when added to the world
                entity.teleportTo(entity.level.dimension, entity.x, entity.y + 1, entity.z, 1, 1)
            })
    
            .onClientRemoval(entity => {
                // Log a message when the entity is removed on the client side
                console.log(`${entity} was removed on the client`)
            })
    
    
    
    
    
    
            .onFlap(entity => {
                // Place a gold ore block below the entity when it flaps
                entity.block.down.set('minecraft:gold_ore')
            })
    
    
    
    
    
    
    
            .onRemovedFromWorld(entity => {
                // Log a message when the entity is removed from the world
                console.log(`${entity} was just removed from the world!`)
            })
    
            .onSprint(entity => {
                // Log a message when the entity starts sprinting
                console.log(`${entity} is sprinting!`)
            })
    
            .onStopRiding(entity => {
                // Drop a diamond above the entity when it stops riding
                if (!entity.isPassenger()) return
                entity.block.popItemFromFace('minecraft:diamond', 'up')
            })
    
    
            .playerTouch(context => {
                // Attack the player when touched by the entity
                //context.player.attack(1)
            })
    
            .thunderHit(context => {
                // Heal the entity when struck by lightning
                context.entity.heal(15)
    
            })
  

    //Default vanilla implimentation of tickDeath removes the entity from the world after 20 ticks
    /*.tickDeath(entity => {
        // Override the tickDeath method in the entity
    })*/
    /*
                      if (entity.getRootData().contains("invalid")) {//无实体
          
          
                      } else if (entity.getRootData().contains("isTrace") && global.goalEntity[entity.getRootData().getString('isTrace')]) {//追踪false
          
                         
                          let entity1 = global.goalEntity[entity.getRootData().getString('isTrace')]
          
                          //  = entity.distanceToEntity(entity1)
                          //  entity.runCommand(`/say ${entity1}`)
          
          
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
          
                          let distance = Math.hypot(Math.hypot(x, y), z)
          
                          let vecX = -Math.cos(vertical) * Math.sin(horizontal) / 5//向量 * distance
          
                          let vecZ = Math.cos(vertical) * Math.cos(horizontal) / 5// vecX * distance 
          
                          let vecY = -Math.sin(vertical) /5// * distance // vecX 负号不可动
          
          
                          //let horizontal1 = Math.atan2(x, z)//Math.asin(x*x+)   //平行
                          //console.log(vecX + '  ' + vecY + '  ' + vecZ)
                          // let vertical1  = Math.asin(y / distance)   //垂直
          
          
                          let vertical2 = 180 * (Math.asin(y / distance) / PI) //根据受击者与该实体连线的倾斜角度得出最终该实体移动的方向
          
                          let horizontal2 = 180 * (Math.atan2(x, z) / PI)//注意 vertical1 horizontal1  这里的单位为角度
          
                          if (horizontal2 > 0) {
                              horizontal2 = 180 - horizontal2//修复坐标系方向不同
                          } else if (horizontal2 < 0) {
                              horizontal2 = -horizontal2 - 180
                          }                                                                                        //Math.asin(x*x+) 180*(1-Math.abs(Math.atan2(differX, differZ)/PI))
          
          
          
                          if (Math.abs(vertical1 - vertical2) > 5) {//使vertical逐渐逼近并最终等于vertical1
          
                              let add = Math.abs(vertical1 - vertical2) / (vertical1 - vertical2)
          
                              if (vertical1 <= -90 && add > 0) {
          
                                  //vertical1 = 90//修改横向视角
                                //  horizontal1 + 180
          
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
                                  vertical3 = vertical1 - 5 * add
          
                              }
          
          
          
                          } else if (Math.abs(vertical1 - vertical2) < 5) {
                              //  vertical1 = vertical2
                              // entity.getRootData().putDouble("xRot", vertical1)
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
          
          
          
                          if (Math.abs(differHorizontal) >= 5) {//使vertical逐渐逼近并最终等于vertical1
          
                              let add = Math.abs(differHorizontal) / differHorizontal
          
                              if (horizontal1 <= -180 && add > 0) {
          
                                  horizontal3 = 180
          
                              } else if (horizontal1 >= 180 && add < 0) {
          
                                  horizontal3 = -180
                              } else {
                                  horizontal3 = horizontal1 - 5 * add
                              }
          
                              //horizontal1 -= Math.abs(horizontal2 - horizontal1) / horizontal2 - horizontal1
                              //entity.getRootData().putDouble("yRot", horizontal1)//赋值
          
                          } else if (Math.abs(differHorizontal) < 5) {//&& Math.abs(horizontal1 - horizontal2) > 0
          
          
                              horizontal3 = horizontal2
          
          
                          } else if (Math.abs(differHorizontal) == 0) {//&& Math.abs(horizontal1 - horizontal2) > 0
          
                              vecX *= 5
                              vecZ *= 5
          
                          }
          
                          entity.getRootData().putDouble("xRot", vertical3)
                          entity.getRootData().putDouble("yRot", horizontal3)//赋值
          
                          console.log('横  修改前角:' + Math.floor(horizontal1) + '  修改后角:' + Math.floor(horizontal3) + '  最终角:' + Math.floor(horizontal2))//Math.floor(vertical1) + 
                          console.log('竖  修改前角:' + Math.floor(vertical1) + '  修改后角:' + Math.floor(vertical3) + '  最终角:' + Math.floor(vertical2))
                          console.log('  x:' + vecX  +'  y:' + vecY  + '  z:' + vecZ )
          
                          // 存入实体nbt
                          //entity.getRootData().putDouble("yRot", horizontal)
                          entity.deltaMovement = new Vec3(5*vecX, 5*vecY, 5*vecZ)//以该实体视角移动x / distance, y / distance, z / distancevecY
          
                          entity.hurtMarked = true
          
          
                      } else 
                       */




})
