


//let Zombie=Java.loadClass('net.minecraft.world.entity.monster.Zombie')


//let Zombie=//('net.minecraft.world.entity.monster.Zombie')
BlockEvents.rightClicked(event => {

    // tell(event.block.getEntityData())
    // event.cancel(0)
    //let a={TrackedData:{},author:"steve2",id:"minecraft:structure_block",ignoreEntities:1,integrity:1.0,metadata:"",mirror:"NONE",mode:"LOAD",name:"minecraft:3534253245623523542345",posX:0,posY:1,posZ:0,powered:0,rotation:"NONE",seed:0,showair:0,showboundingbox:1,sizeX:0,sizeY:0,sizeZ:0,x:-52,y:-60,z:1970} 
return
let e=event

    /**@type {Internal.ItemStack} */
    let item = event.item
    let modifiers = item.getAttributeModifiers($EquipmentSlot.MAINHAND)





    if (!item.nbt) {
        item.setNbt({})
    }

    if (e.item.hasTag('kubejs:combat_weapon') && !item.nbt.contains("load")) {

        // item.nbttoughness_cut
        //添加自定义属性后 原版属性会失效weaponList[item.id]["stable"]
        item.addAttributeModifier("integration_package_core:max_toughness", new $AttributeModifier($uuid.fromString('6a102453cb4-d735-4cb7-8ab2-3d36a44e')
            , 'kubejs_combat', weaponList[item.id]["max_toughness"], "addition"), $EquipmentSlot.MAINHAND)
        item.addAttributeModifier("kubejs:stable", new $AttributeModifier($uuid.fromString('6a102453cb4-d735-4cb7-8ab2-3d386a44e')
            , 'kubejs_combat', 100, "addition"), $EquipmentSlot.MAINHAND)
        item.addAttributeModifier("kubejs:toughness_cut", new $AttributeModifier($uuid.fromString('6a102453cb4-d735-4cb7-8ab2-3d673a44e')
            , 'kubejs_combat', weaponList[item.id]["toughness_cut"], "addition"), $EquipmentSlot.MAINHAND)

        item.addAttributeModifier("kubejs:parry", new $AttributeModifier($uuid.fromString('6a102453cb4-d735-4cb7-8ab2-3d673a44e')
            , 'kubejs_combat', weaponList[item.id]["parry"], "addition"), $EquipmentSlot.MAINHAND)



//tell(item.nbt)



        item.getItem().getAttributeModifiers($EquipmentSlot.MAINHAND, item).forEach((modifier, attribute) => {
            item.addAttributeModifier(modifier, attribute, $EquipmentSlot.MAINHAND)
        })



        item.nbt.putBoolean("load", true)
        //tell(item.nbt.contains("load"))global.attributes.stable.get()
    }

    //tell(global.attributes.stable.get())
    item.getAttributeModifiers($EquipmentSlot.MAINHAND).get(global.attributes.stable.get()).map((modifier) => tell(modifier.getAmount()))

    //event.block.setEntityData(a)


})
ItemEvents.crafted(e => {



})



ItemEvents.pickedUp(e => {                               //该事件物品数据变不会被保存



    //tell(e.item.getAttributeModifiers($EquipmentSlot.MAINHAND))
    //tell(e.item.getAttributeModifiers($EquipmentSlot.CHEST))

    if (e.item.hasTag('kubejs:combat_weapon')) {

        //
     //   e.item.addAttributeModifier("generic.armor", new $AttributeModifier($uuid.fromString('6a102453cb4-d735-4cb7-8ab2-3d3a44e')
     //       , 'kubejs_combat', 10, "addition"), $EquipmentSlot.MAINHAND)
     //   e.item.addAttributeModifier("generic.armor", new $AttributeModifier($uuid.fromString('6a102cb4-d735-4cb7-8ab2-3d3a44e')
     //       , 'kubejs_combat', 10, "addition"), $EquipmentSlot.MAINHAND)

        // tell(e.item.getAttributeModifiers($EquipmentSlot.MAINHAND))
      

     //   tell(e.item.getShareTag())
      //  e.item.getNbt().putBoolean("load", true)
      //  tell( e.item.hashCode())
        
        
    //    tell(e.item.nbt)
        
        
        
    }


})


ItemEvents.rightClicked(event => {

    //event.cancel(0)
    //  /**@type {Internal.CompoundTag} */

    if (event.item.nbt["display"]) {
        let itemName = event.item.nbt["display"]["Name"]

        //   tell(itemName=='{"text":"stop"}')




        if (itemName == '{"text":"stop"}') {

            if (!event.player.getDataBoolean('stop')) {
                tell("暂停")
                setData(event.player, 'boolean', 'stop', true)
            } else {
                tell("继续")
                setData(event.player, 'boolean', 'stop', false)
            }




        }
    }


})//按下右键且物品可使用才执行




ItemEvents.firstLeftClicked(event => {

    let player = event.player
    /*
        if (!event.player.rayTrace(30).entity) return
        console.log(event.player.rayTrace(30).entity.type + ": " + event.player.rayTrace(30).entity.getName().getString())//显示怪物名字
    
        // .
    */



    player
        .level
        .getEntitiesWithin(AABB.of(player.x - 2, player.y - 2, player.z - 2, player.x + 2, player.y + 2, player.z + 2))
        .forEach(e => {

            //event.server.tell(global.goalEntity[e.getRootData().getString('goal')])

        })

    //  setIntData(visual(event,player,'kubejs:ender_gravity'), 'att', 3)



})




ItemEvents.firstRightClicked(event => {//只要按下右键便执行

    let player = event.player

    if (player.getRootData().contains('rightClicked')) {
        player.getRootData().remove('rightClicked')
        return
    } else {
        player.getRootData().putBoolean('rightClicked', true)//防止执行两遍
    }

    let level = event.level

    //event.server.tell(player.getRootData().contains('load'))//player.XRot + " " + player.YRot
    //event.server.runCommandSilent(`say ${event.player.headArmorItem.hasTag()}`)
    //event.target.block.setEntityData({a:35345})
    //event.player.headArmorItem.getCreativeTab())
    // let a = Java.loadClass('java.util.stream.DoubleStream')

    //net.minecraft.world.phys.HitResultClient.hitResult//new a(event.player).entity
    //  /**@type {a} */
    //let target=Client.hitResult 
    //   /**@type {a} */
    //  let target=player.pick(10,5,true).type
    //**@type {Internal.Entity} */
    //let vec3=Java. loadClass("net.diebuddies.jbox2d.common.Vec3")AABB.of(player1.x, player1.y, player1.z, endVector.x(), endVector.y(), endVector.z())


    //  /**@type {Internal.Entity} */
    //  let player1 = player

    //

    //  let length = 10




    //AABB.ofBlocks(new BlockPos(0,0,0),new BlockPos(0,0,0))

    //event.level.getBlock()


    //  let eyePosition = player.getEyePosition(1)//眼睛坐标

    //  let lookVector = player.getViewVector(1)//眼睛视线向量

    //  let endVector = lookVector.add(new Vec3(lookVector.x() * length, lookVector.y() * length, lookVector.z() * length))

    //

    //  event.server.tell(lookVector)

    //  let entitys = event.level.getEntities(player1, AABB.of(player1.x - length, player1.y - length, player1.z - length, player1.x + length, player1.y + length, player1.z + length,), Predicate)
    /**@type {Internal.LivingEntity} */
    let entity = playerEyeline(event.level, player, 9)


    if (!entity) return


    //let a=   entity.level.createEntity("minecraft:item_display")
    //
    // // a.setNbt(.toNBT())
    //
    //    a.setX(entity.x)
    //    a.setY(entity.y)
    //   a.setZ(entity.z)
    //
    //   entity.level.addFreshEntity(a)
    //
    //player.rayTrace().block.x

    // player.distanceToSqr()
    //if(!player.rayTrace().type.){ }

    openCopyMenu(entity, player, event)


    combatModify(entity)
    /// tell(event.item.id == 'kubejs:copy')
    ///console.log(entity.getRootData())

    // console.log(entity.nbt)


    if (event.item.id == 'kubejs:copy' && entity.type == 'kubejs:copy' && event.item.nbt) {//物品nbt可直接修改



        //= event.item.nbt
        //let a={background:"kubejs:gui/copy/burning_arena.png",boss_level:[6.0,60.0,600.0,68.0,6.0,6.0,56.0,56.0,76.0,45.0,54.0],condition:0,copy_load:1,copy_name:"boss名称",describe:"目标",elite:1,is_summon:0,level:90,load:1,load2:1,max_time:[1000.0,456.0,45654.0,5646.0,565.0,46.0,566.0,4.0,4.0,4.0,456.0,0.0],projects:10,radius:20,register_name:"minecraft:villager",star_rule:{name:"boss名称",rule:{be_att:{data:{present:0.0,value:10.0},default:0.0,present:1.0},reaction:{data:{present:0.0,type:"冰冻",value:10.0},default:1.0,present:0.0},time:{data:{present:0.0,value:500.0},default:0.0,present:1.0}}},time:0,unlock_level:[6.0,6.0,6.0,6.0,6.0,6.0,6.0,6.0,6.0,6.0,6.0,6.0,6.0,6.0],unlock_star:[2.0,2.0,2.0,2.0,2.0,2.0,2.0,2.0,2.0,2.0,2.0,2.0,2.0,2.0,2.0]} 

        getKeyAndValue(event.item.nbt).forEach(([key, value], index) => {

            //tell( value)
            //
            //tell(Object.prototype.toString.call(value))
            //
            //tell(key)
            //if (key=='star_rule') {
            if (!(key == 'time' || key == 'condition')) {

                let type = getType(value) == 'number' ? 'int' : getType(value)

                setData(entity, type, key, value)

            }




        })


    }


    //entity.getRootData().put('aaa',45)  

    //tell(entity.getRootData())






    //Internal.DataOutput
    //et a= Java.loadClass('net.minecraft.data.PackOutput')
    //entity.getRootData().merge
    //console.log(entity.getRootData())
    //event.server.tell('->' + playerEyeline(event.level,player,9))

    /*entity.nbt['Item']
    let fluid=Java.loadClass("net.minecraft.world.level.ClipContext$Fluid")
      
       
        let entity=player
        
       let target= player.level.clip(new ClipContext(
            player.getEyePosition(),
            player.getEyePosition().add(player.getViewVector(1.0).x, player.getViewVector(1.0).y, player.getViewVector(1.0).z),
            a.ENTITY,
            fluid.WATER,D
            entitynew a(player, player.getEyePosition()).getEntity()
        ))event.target.entity.getBoundingBox().clip()
        */



    //event.level.getBlockEntity(new BlockPos(0,0,0)).onlyOpCanSetNbt()

    // event.server.tell(playerTarget[player.stringUui])

    //if(){}+getIntData(visual(event,player,'kubejs:ender_gravity'),'att_time')event.target.block.setEntityData({})

    // event.server.tell(areDataData(visual(event,player,'kubejs:ender_gravity'),'camp_entity')+'  ')


    //
    //event.server.tell(player.rayTrace(7).entity.nbt['AbsorptionAmount'])

    //let a =new Vec3d()


    //let b=new Vec3f()


    //let entity =event.player.rayTrace(3000)


    //if(entity.gettype=="aether:hammer_projectile"){}player.x - entitys.x, player.y - entitys.y, player.z - entitys.z

    //event.server.tell(event.player.getInventory().getStackInSlot(0).getId())//获取物品栏

    /*
    let entitys =event.player.level.createEntity('kubejs:ender_eye')
    entitys.setX(player.x)
    entitys.setY(player.y-5)
    entitys.setZ(player.z)
    
    event.level.addFreshEntity(entitys)
    */


    //let a =new Vec3(5,5,5)

    //entity.setPitch(5)

    /*
        if (event.player.rayTrace(30).entity.getRootData().contains('isTrace')) { event.server.tell(1) 
    
        }else{event.server.tell(0) }
    */








    //enderMove(event)//末影之眼快速移动


    //event.server.tell(event.player.rayTrace(30).entity)
    //console.log(event.player.rayTrace(30).entity)//显示怪物名字




    /*
    let z=new Zombie()
    
    //z.
    
    
    
    
    
    
    
    */


    //entity.kill()

    //console.log(event.player.getInventory().getStackInSlot(0).getId())

    //player.rayTrace(10).entity.setY(9999)

    //player.rayTrace(10).entity.attack(10000)

    //event.player.spawn()


    //event.player.getRootData().putIntArray(,)event.player.rayTrace(30).entity
    //event.player.getRootData().putShort()

    //event.player.getRootData().get

})