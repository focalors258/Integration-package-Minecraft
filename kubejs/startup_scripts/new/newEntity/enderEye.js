
//Java.loadClass('net.minecraft.world.entity.projectile.Arrow')

StartupEvents.registry('entity_type', event => {

    event.create('ender_eye', "entityjs:geckolib_projectile")
        // .immuneTo()//可接受的方块
        //.canSpawnFarFromPlayer(true)
        //.clientTrackingRange(20)//实体追踪范围
        .mobCategory('misc')//实体分类
        .setRenderType("translucent")//实体呈现类型
        .sized(1, 1)//碰撞箱大小
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

        .addAnimationController('exampleController', 1, event => {//动画控制

            event.thenLoop('move');

            //event.thenLoop('rotate');

            // event.thenPlayAndHold('');
            return true;
        })

        .tick(entity => {


            entity.deltaMovement = new Vec3(0, 0, 0)

            let time

            if (entity.getRootData().contains("time")) {


                time = entity.getRootData().getInt('time')

                entity.getRootData().putInt('time', --time)
//存在时间

            }

            if (time < 0) { entity.kill() }
            
            
            if (entity.age % 5 == 0&&entity.server) {
                
                entity.level.getPlayers().forEach(p => {
            
                    if (entity.distanceToEntity(p) <= 25&&playerVisual(p,entity,4)) {
                    
                 
                    
                    /**@type {Player} */
                    let p1=p
                    
                    p1.sendData("ender_eye",{entity:entity.getId()})
                    
                    
                    }
            
    
                })
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            }
            
            
            
            
            
            
            
            
            //  if (entity.age % 100 != 0) return
            // console.log('ticked every 100 ticks')
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

})


/*
/**
 *  .rideTick(entity => {
            // Log a message every 100 ticks if the entity is a vehicle
            if (entity.age % 100 != 0) return
            console.log(entity.isVehicle())
        })
 * @param {Internal.ContextUtils$MobInteractContext} context
 * @returns
 */
/*
global.interact = context => {
    if (context.player.isShiftKeyDown()) return
    context.player.startRiding(context.entity);
}
*/




