let villageEcology = (entity) => {





   if (entity.type == $Entitys.common["guardvillagers:警卫"] && entity.age % 400 == 0) {

            let entitys = entity.level.getEntities(entity, AABB.of(entity.x - 50, entity.y - 30, entity.z - 50, entity.x + 50, entity.y + 30, entity.z + 50), entity => {
                if (entity.type == $Entitys.common["guardvillagers:警卫"] || entity.type == "minecraft:villager") {
                    return true
                }
                return false
            })

            let villagers = 0

            let 警卫 = 0
            //).length
            // let number2 = entity.level.getEntities(new $Villager($EntityType.VILLAGER, entity.level), AABB.of(entity.x - 50, entity.y - 30, entity.z - 50, entity.x + 50, entity.y + 30, entity.z + 50)).length
            entitys.forEach(entity => {
                if (entity.type == $Entitys.common["guardvillagers:警卫"]) {

                    警卫++

                } else {

                    villagers++

                }
            })
            
            
          //  tell(警卫 / (villagers + 1) )
            
            
            
            if ((警卫 / (villagers + 1 ))> 0.8) {

                addEntity(entity.level, entity.x, entity.y, entity.z, "minecraft:villager", e => {
                    e.setDataValue("KJSspwan", true)
                })

                entity.remove('discarded')

            }








            //    if (entity instanceof $Mob) {

            //        entity.goalSelector.removeAllGoals(a => {

            //            return true

            //        })

            //        entity.goalSelector.addGoal(0, new $MoveTowardsTargetGoal(entity, 1, 300))

            //   entity.target = player     

            //t//ll(entity.target)
            //        
            //    }


        }














}