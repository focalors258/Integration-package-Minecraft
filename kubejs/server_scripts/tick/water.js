


let InWater = (entitys) => {



    if (entitys.isLiving() && entitys && entitys.block == 'minecraft:water') {



        //将此处内容改为WaterEffect2







        stickTime2(entitys)

        if (!(entitys.getRootData().getInt('sickTime2') % 60 == 0)) return



        if (onFire2(entitys)) {

            let intensity = entitys.getEffect("kubejs:fire").getAmplifier()  //元素量

            let time = entitys.getEffect("kubejs:fire").getDuration()

            entitys.removeEffect('kubejs:fire')

            if (intensity - 5 >= 0) {
                entitys.addEffect(new $potion('kubejs:fire', time, Math.max(intensity - 5, 0), false, false))
            }


        } else if (onIce2(entitys)) {


            let intensity = entitys.getEffect("kubejs:ice").getAmplifier()  //元素量

            let time = entitys.getEffect("kubejs:ice").getDuration()


            if (!entitys.getEffect("mowziesmobs:frozen")) {
                entitys.addEffect(new $potion('mowziesmobs:frozen', 20 * (intensity * 0.4 + 2), 0, false, false)) //mow更多boss的冻结效果
            }


            entitys.removeEffect('kubejs:ice')

        } else if (onLightning2(entitys)) {

            let intensity = entitys.getEffect("kubejs:lightning").getAmplifier()  //元素量

            let time = entitys.getEffect("kubejs:lightning").getDuration()

            /**@type {Internal.LivingEntity} */
            let entity = entitys

            let attack = entity.getAttributes().getValue("minecraft:generic.attack_damage")

            entitys.removeEffect('kubejs:lightning')

            if (intensity - 5 >= 0) {
                entitys.addEffect(new $potion('kubejs:lightning', time, Math.max(intensity - 5, 0), false, false))
            }

            entitys.attack(attack)

        } else if (onPosion2(entitys)) {



        } else if (!entitys.getEffect("kubejs:water")) {//javascripts的变量定义在if中为临时变量 只在if中生效

            entitys.addEffect(new $potion("kubejs:water", 400, 0, false, false))//给予效果

        } else {//最大层数

            let intensity = entitys.getEffect("kubejs:water").getAmplifier() + 1//加强效果

            entitys.addEffect(new $potion("kubejs:water", 400, Math.min(intensity, 9), false, false))


        }

    }


}


let waterTime = (data, event) => {




    if (data.contains("timingBlockHandle") && event.server.tickCount % 20 == 0) {

        /**@type {Internal.CompoundTag} */
        let tag = data.get("timingBlockHandle")
        let removeList = []
        tag.allKeys.forEach(key => {

            if (tag[key]["time"] < Utils.server.tickCount) {


                let block = event.level.getBlock(new $blockPos(tag[key]["pos"][0], tag[key]["pos"][1], tag[key]["pos"][2]))
                if (block.id == "minecraft:water") {

                    block.set("air")


                }
              removeList.push(key)
            }
        })
        removeList.forEach(k => {
        tag.remove(k)
        })


    }









}





