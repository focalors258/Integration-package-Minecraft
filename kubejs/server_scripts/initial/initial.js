











EntityEvents.spawned(event => {






    let { entity } = event

    if (entity.type == "kubejs:magic_crystal") return//排除



    if (entity.isPlayer()&&entity instanceof Player) {
        puffishSync(entity)

        initClientToughness(entity)
        
        initDanLocking(entity)
        
        entity.sendData("INIT", { })//初始化所有kjs变量
     
    }

    entityBarSync(entity)





    if (!getData(entity, 'int', 'level') && entity && entity.isLiving()) {




        combatNoSpawne(event, entity)



        let level = 0

        let dimension = event.level.dimension.getPath()

        // tell(dimension)


        let y = Math.abs(entity.y - 10)

        y = y > 100 ? y / 5 + 80 : y

        level += y / 20



        if (dimension == 'undergarden') {

            level += 30

        } else if (dimension == 'twilight_forest') {

            level += 20

        } else if (dimension == 'everbright') {

            level += 50

        }




        let averageDan = 0

        let playersNumber = 0

        event.level.getPlayers().forEach(p => {

            averageDan += getDan(p)

            playersNumber++

        })

        averageDan /= playersNumber

        level += Math.floor(averageDan / 70)


        //getNearbyPlayers($TargetingConditions.forNonCombat().range(64),)



        if (event.player) {


            let PuffishLevel = new $puffishExperience('puffish_skills:combat')



            /**@type {Internal.ServerPlayer} */
            let serPlayer = event.player


            level = PuffishLevel.getLevel(serPlayer)

        }


        setData(entity, 'int', 'level', Math.min(3000, level))//设置等级逻辑


    }




    if (entity.isLiving()) {

        entity.addEffect(new $potion('minecraft:resistance', 5, 10, false, false))

    }//生成实体免疫




    initial(event, entity)//实体初始

    //event.server.tell(getData(entity, 'int', 'level'))
























})

//global.bossIndex = {}

let initial = (event, entitys) => {
    /*
        if (entitys && entitys.isLiving() && entitys.nbt['ForgeData'] && (entitys.getAttributes().getValue('minecraft:generic.max_health') != entitys.getRootData().getDouble('health')
            || entitys.getAttributes().getValue('minecraft:generic.armor') != entitys.getRootData().getDouble('armor'))) {
    
            entitys.setAttributeBaseValue('minecraft:generic.armor', entitys.getRootData().getDouble('armor'))
    
            entitys.setAttributeBaseValue('minecraft:generic.max_health', entitys.getRootData().getDouble('health'))//血量修复
        }
    *///冰与火的龙重新进入世界会重置生命值entitys.nbt['ForgeData'] && entitys.nbt['ForgeData']['LEVEL'] 

    if (!entitys.getRootData().contains('load')) {
        //tell(entitys)
        if (entitys && entitys.isLiving() && !(entitys.isPlayer()) && !entitys.getRootData().contains('projectile')) {//有等级的实体加载流程
            //

            let level = getData(entitys, 'int', 'level')//entitys.nbt['ForgeData']['LEVEL']

            let outHealth = entitys.getAttributes().getValue('minecraft:generic.max_health')

            let knockback = entitys.getAttributes().getValue('minecraft:generic.knockback_resistance')

            // let attack =Math.pow(1.05,level-1)*outHealth

            let armor = Math.pow(level, 0.6) + entitys.getAttributes().getValue('minecraft:generic.armor')//护甲



            // entitys.getRootData().putDouble('health', health)//保存数值

            entitys.getRootData().putDouble('armor', armor)


            // entitys.setAttributeBaseValue('minecraft:generic.max_health', health)//生命值



            let health = 0

            if (level > 120) {

                health = Math.pow(1.06, 119) * (1 + 0.1 * (level - 120))

            } else {

                health = Math.pow(1.06, level - 1) //* outHealth

            }
            //let newHealth = entitys.getMaxHealth()

            //entitys.modifyAttribute('minecraft:generic.max_health', entitys.stringUuid, health, 'multiply_base')//setHealth(newHealth)
            //区分getAttribute与getAttributes
            entitys.getAttribute('generic.max_health')//长久保存
                .addPermanentModifier(new $AttributeModifier($uuid.fromString('6a102453cb4-d735-4cb7-8ab2-3d3a44e')
                    , 'kubejs_level', health - 1, 'multiply_base'))


            //event.server.tell(Math.pow(level, 0.8) * 0.6 / 100)//灾变的怪物设置生命值上限后会比原来多出300

            entitys.setAttributeBaseValue('minecraft:generic.armor', armor)

            entitys.setAttributeBaseValue('kubejs:max_fire', 20)//设置敌人的最大赋予附着值
            entitys.setAttributeBaseValue('kubejs:max_ender', 20)
            entitys.setAttributeBaseValue('kubejs:max_lightning', 20)
            entitys.setAttributeBaseValue('kubejs:max_ice', 20)



            entitys.setAttributeBaseValue('kubejs:crit_resist', Math.pow(level, 0.8) * 0.6 / 100)//暴击抗性

            entitys.setAttributeBaseValue('irons_spellbooks:lightning_magic_resist', 0)
            entitys.setAttributeBaseValue('irons_spellbooks:fire_magic_resist', 0)
            entitys.setAttributeBaseValue('irons_spellbooks:ice_magic_resist', 0)
            entitys.setAttributeBaseValue('irons_spellbooks:ender_magic_resist', 0)
            entitys.setAttributeBaseValue('irons_spellbooks:nature_magic_resist', 0)
            entitys.setAttributeBaseValue('irons_spellbooks:holy_magic_resist', 0)

            entitys.setHealth(entitys.getMaxHealth())



            entitys.setAttributeBaseValue('minecraft:generic.knockback_resistance', knockback * 1.5)//击退抗性

            // entitys.setAttributeBaseValue('puffish_skills:player.ranged_damage',attack)
            //  entitys.setAttributeBaseValue('minecraft:generic.attack_damage',attack)
            //entitys.setAttributeBaseValue('autoleveling:monster.projectile_damage_bonus',attack)
            // entitys.setAttributeBaseValue('autoleveling:monster.explosion_damage_bonus',attack)
            //

            //event.server.tell('1')

        }



        initial_tag(entitys)



        if (entitys.isLiving() && !(entitys.isPlayer())) {

            let y = entitys.getBoundingBox().getYsize()

            let x = entitys.getBoundingBox().getXsize()

            //   tell(x+" "+y)
            if (entitys.getDataBoolean("elite")) {
                entitys.setSmashTime(250*Math.pow(y/2,0.8))
                entitys.setMaxToughness((x / 0.6) * 20 * 7.5)//设置最大 Toughness
            } else if (entitys.getDataBoolean("boss")) {
                entitys.setSmashTime(300*Math.pow(y/2,0.8))
                entitys.setMaxToughness((x / 0.6) * 20 * 12)//设置最大 Toughness
            } else {
                entitys.setSmashTime(60*Math.pow(y/2,0.8))
                entitys.setMaxToughness((x / 0.6) * 20)//设置最大 Toughness
            }





        }




        entitys.getRootData().putBoolean('load', true)//现在所有实体都会有此标签

    }




}

let initial2 = (entitys) => {

    if (!entitys.getRootData().contains('load2')) {
        if (entitys && entitys.isLiving() && !(entitys.isPlayer()) && !entitys.getRootData().contains('projectile')) {



            //entitys.setMaxHealth(health * entitys.getMaxHealth())

            // entitys.setHealth(entitys.getMaxHealth())
        }

        entitys.getRootData().putBoolean('load2', true)
    }
}



/*
通用标签

load 已加载
boss 首领
elite 精英怪
projectile 弹射物
time 存在时间
goal 目标
att 召唤物攻击伤害
host 召唤者
owner 所生成的  所有者
copy_host 副本
copy_owner 副本所生成的














*/










