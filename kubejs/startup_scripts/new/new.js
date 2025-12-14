
let $Type = Java.loadClass('com.integration_package_core.util.Type')

let IPC = "integration_package_core"

StartupEvents.registry('item', event => {

    event.create("exp")//主技能等级

    event.create("exp_fire")//火元素天赋技能等级

    event.create("exp_ice")//元素天赋技能等级

    event.create("exp_ender")//元素天赋技能等级

    event.create("exp_lightning")//元素天赋技能等级

    event.create("exp_water")//元素天赋技能等级

    event.create("exp_divine")//元素天赋技能等级

    event.create("weapon_fragment_1")
    event.create("weapon_fragment_2")
    event.create("weapon_fragment_3")
    event.create("weapon_fragment_4")//图纸
    event.create("weapon_fragment_5")
    event.create("weapon_fragment_6")
    event.create("weapon_fragment_7")

    event.create("weapon_blueprint_1")
    event.create("weapon_blueprint_2")
    event.create("weapon_blueprint_3")
    event.create("weapon_blueprint_4")//碎片
    event.create("weapon_blueprint_5")
    event.create("weapon_blueprint_6")
    event.create("weapon_blueprint_7")


})

//global.keyBinds.open_dan ={}
//
//global.keyBinds.open_dan = new $KeyMapping('key.kubejs.open.dan.ui', $KeyConflictContext.IN_GAME, $keyType.KEYSYM, $GLFW.GLFW_KEY_L, 'kubejs.additional.content')


ForgeEvents.onEvent('net.minecraftforge.client.event.RegisterKeyMappingsEvent', e => {




    // e.register(global.keyBinds.open_dan )


})




StartupEvents.registry('damage_type', event => {


    //event.create('aaa',new ResourceLocation())


})

let ResourceKey = Java.loadClass('net.minecraft.resources.ResourceKey')

const Registries = Java.loadClass('net.minecraft.core.registries.Registries')


StartupEvents.registry('potion', event => {

    //event.create('kuserf','basic').addEffect(new  $potion('kubejs:ender', 200, 54, false, false))



})



let newDamageType = (modId, name) => {

    /**@type {ResourceKey<damageType>} */
    let type = ResourceKey.create(Registries.DAMAGE_TYPE, new ResourceLocation(modId, name))

    return type


}


//let ertgret=Java. loadClass("dev.latvian.mods.kubejs.registry.BuilderFactory")net.minecraftforge.registries.DeferredRegister

//let tyhutg=Java. loadClass( "dev.latvian.mods.kubejs.registry.BuilderBase")

/*
if (Platform.isClientEnvironment()) {
    let sapConstructor = Java.loadClass("net.minecraft.client.particle.SimpleAnimatedParticle").__javaObject__.declaredConstructors[0];
    sapConstructor.setAccessible(true);
    let zero = Java.loadClass("java.lang.Float").valueOf(0);

    global.registerParticleProvider = (event) => {




    }

    ForgeModEvents.onEvent('net.minecraftforge.client.event.RegisterParticleProvidersEvent', event => {

        //event.register()

        event.register(global.rocketPlumeSupplier.get(), set => {
            return (particleOptions, clientLevel, x, y, z, xSpeed, ySpeed, zSpeed) => {
                let plume = sapConstructor.newInstance(clientLevel, x, y, z, set, zero);
                // Initialize particle's values
                plume.setParticleSpeed(xSpeed, ySpeed, zSpeed);
                plume.scale(5);
                plume.setLifetime(65);
                plume.setSpriteFromAge(set);
                return plume
            }
        })



    });// global.registerParticleProvider(e)
}
*/


StartupEvents.registry('particle_type', event => {


    //event.create('steam')

    // /**@type {Internal.BuilderBase}*/

    //event.create('ema_pulse').overrideLimiter(true);
    //event.create('kubejs:ema_pulse')//.registryType.addType('645635',ertgret.createBuilder('kubejs:ema_pulses'),ertgret)//createAdditionalObjects()//.newID('kubejs','abcde')//deserializer(event=>{})






})
/*


*/
StartupEvents.registry('sound_event', event => {//注意 此事件注册的是命名空间   需在数据包里绑定音乐文件

    //ResourceLocation_
    event.create('epic_bullet')//addResourcePackLocations('kubejs:sounds/clash',['kubejs:sounds/clash'],'server_data')

    event.create('starrail_mimi')

    event.create('starrail_activity')

    event.create('starrail_heal')


    event.create('2077_found')


})


StartupEvents.registry('mob_effect', event => {//新建元素事件无法随重载而刷新


    event.create('ice')
        .modifyAttribute('minecraft:generic.movement_speed', 'urghier9eiwire4ee', -0.01, 'multiply_base')
        .modifyAttribute('l2damagetracker:crit_damage', 'fgrety5y5tryedfy', 0.02, 'addition')  //迟缓

    event.create('fire').modifyAttribute('minecraft:generic.attack_damage', '4565yt4uiie5yhdy', +0.01, 'multiply_base')


    event.create('lightning').modifyAttribute('minecraft:generic.armor', 'wge546o4ubhue55756', -0.01, 'multiply_base')
        .modifyAttribute('minecraft:generic.movement_speed', 'urgh467464343e', 0.005, 'multiply_base')
    //event.create('posion')

    event.create('ender')

    event.create('water')
        .modifyAttribute('minecraft:generic.attack_damage', '4tyrt6yrey64et', -0.0075, 'multiply_base')
        .modifyAttribute('minecraft:generic.max_health', 'fghrt6y5tghr', +0.01, 'multiply_base')

    event.create('divine').modifyAttribute("generic.armor_toughness", 'urgh757464343e', 0.025, 'multiply_base')   //不稳定  传送


    event.create('resistMinus')
        .modifyAttribute('kubejs:physics_resistance', 'ftreseyjedjj', -0.05, 'addition')



    event.create('spellResistMinus')
        .modifyAttribute('kubejs:physics_resistance', 'ftreseyjedjj', -0.05, 'addition')
        .modifyAttribute('irons_spellbooks:ender_magic_resist', 'cgnyf55rnt', -0.02, 'addition')
        .modifyAttribute('irons_spellbooks:ice_magic_resist', 'nstent46wn6', -0.02, 'addition')
        .modifyAttribute('irons_spellbooks:lightning_magic_resist', 'rdn67r5mrd', -0.02, 'addition')
        .modifyAttribute('irons_spellbooks:nature_magic_resist', 'esn5etretw', -0.02, 'addition')
        .modifyAttribute('irons_spellbooks:holy_magic_resist', 'rdnyd5jny5m', -0.02, 'addition')
        .modifyAttribute('irons_spellbooks:fire_magic_resist', 'yummytuar', -0.02, 'addition')
        .modifyAttribute('irons_spellbooks:evocation_magic_resist', 'rymr56m5w', -0.02, 'addition')
        .modifyAttribute('irons_spellbooks:eldritch_magic_resist', 'rymr56m5w', -0.02, 'addition')

    /**/

    event.create('divine_sword_cool')//神圣冲击冷却c:\Users\125800\Desktop\absorption.png

    event.create('absorption').beneficial()//护盾

    event.create('basis1_icon')

    event.create('basis2_icon')

    event.create('basis3_icon')

    event.create('begin_icon')

    event.create('bow1_icon')

    event.create('bow2_icon')

    event.create('bow3_icon')

    event.create('bow4_icon')

    event.create('bow5_icon')

    event.create('bow6_icon')


    event.create('crit_icon')

    event.create('critatt_icon')


    event.create('crit4_icon')

    event.create('critatt4_icon')



    event.create('heal_icon')

    event.create('heal4_icon')


    event.create("toughness").modifyAttribute("minecraft:generic.armor_toughness", 'ftrese56yjedjj', +1, 'addition')



    event.create('mana_icon')

    event.create('mana4_icon')


    event.create('explos_icon')

    //   event.create('spelltime_icon')

    // event.create('spellcoll_icon')


    event.create('magic_add_icon')

    event.create('recation_add_icon')

    event.create('fall_immune').beneficial()

    event.create("gravity_cold")


    event.create('call').harmful().effectTick((entity, level) => {

        if (entity.getEffect("kubejs:call")) {




            let intensity = entity.getEffect("kubejs:call").getAmplifier()
            let time = entity.getEffect("kubejs:call").getDuration()


            if (entity.age % Math.max(100, 300 - 10 * intensity) == 0) {


                let entitys = entity
                    .level
                    .getEntitiesWithin(AABB.of(
                        entity.x - 40,
                        entity.y - 60,
                        entity.z - 40,
                        entity.x + 40,
                        entity.y + 100,
                        entity.z + 40))

                entitys.removeIf(entity => {

                    if (entity.type != "kubejs:magic_crystal") return true

                    return false
                })

                //tell(entitys.size() )

                // example(event, entity, "kubejs:magic_crystal", 6)

                let base = 2

                if (!entity.isPlayer()) {
                    /**@type {Player} */
                    let player = entity.level.getPlayers()[0]

                    console.log("player" + player.getAttributeValue("kubejs:call_crystal"))

                    base = player.getAttributeValue("kubejs:call_crystal")
                }
                console.log("size" + entitys.size())

                if (entitys && entitys.size() > base) return

                let summoner = entity.level.createEntity('kubejs:magic_crystal')
                summoner.setX(entity.x + (2 * Math.random() - 1))
                summoner.setY(entity.y + 1)
                summoner.setZ(entity.z + (2 * Math.random() - 1))

                entity.level.addFreshEntity(summoner)




            }








        }
    })//tick事件  每秒执行20次


    // 4 5 6表示单加成的项目

    /*
event.create('toughnessReduce')
    .modifyAttribute('minecraft:generic.armor_toughness', 'u6t5esdtuuij', -0.005, 'addition')//原版盔甲韧性已不使用?
*/








    // .modifyAttribute('minecraft:generic.max_health', 'fghrt6y5tghr', +0.01, 'addition')








    // 
    event.create('steam').harmful().effectTick((entity, level) => {//tick事件  每秒执行20次

        stickTime2(entity)



        if (!(entity.getRootData().getInt('sickTime2') % 2 == 0)) {

            entity.level.getPlayers().sendData("steam_effect", { pos: [entity.x, entity.y, entity.z] })




            // a.move(x, 0, y)
        }



        if (!(entity.getRootData().getInt('sickTime2') % 20 == 0)) return//伤害间隔

        let player

        let uuid = entity.getRootData().getString('steamSource')

        if (uuid) {


            player = entity.level.getEntity(uuid)
            // let uuid = entity.getRootData().getString('actual')

            //测试entity.getRootData().contains('actual')
            // /**@type {Internal.LivingEntity} */
            // actual = Client.level.getPlayerByUUID(uuid) 放弃此策略
        }


        if (entity.isPlayer()) {//players, entitys-->范围内的实体  entity-->持有buff的实体     当附着者为玩家时  对周围的玩家造成伤害  

            entity.level.getEntitiesWithin(AABB.of(entity.x - 3, entity.y - 1, entity.z - 3, entity.x + 3, entity.y + 3, entity.z + 3)).forEach(players => {
                if (players && players.isLiving()) {
                    if (players.isPlayer()) {


                        if (entity.getRootData().contains('steamAtt')) {//判断是否有此标签

                            if (player) {

                                attack(player, players, ReactionTypes.water, entity.getRootData().getInt('steamAtt'), 0)

                              //  players.attack(newSource(player, damageType.DROWN), entity.getRootData().getInt('steamAtt'))

                            } else {
                                attack(player, players, ReactionTypes.water, entity.getRootData().getInt('steamAtt'), 0)

                               // players.attack(entity.getRootData().getInt('steamAtt'))

                            }


                        } else {

                            players.attack(2)
                        }
                        players.invulnerableTime = 0
                        //players.invulnerableTime = 100
                    }
                }
            })



        } else if (entity) {//当附着者为实体时  对周围的实体造成伤害 

            entity.level.getEntitiesWithin(AABB.of(entity.x - 3, entity.y - 1, entity.z - 3, entity.x + 3, entity.y + 3, entity.z + 3)).forEach(entitys => {
                if (entitys.isLiving()) {
                    if (!entitys.isPlayer()) {


                        if (entity.getRootData().contains('steamAtt')) {


                            if (player) {

                                entitys.attack(newSource(player, damageType.DROWN), entity.getRootData().getInt('steamAtt'))

                            } else {

                                entitys.attack(entity.getRootData().getInt('steamAtt'))

                            }



                        } else {

                            entitys.attack(2)

                        }
                        entitys.invulnerableTime = 0

                    }
                }
            })
        }

















    })













})
































