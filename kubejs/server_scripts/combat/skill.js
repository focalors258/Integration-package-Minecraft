NetworkEvents.dataReceived("press_right_skill0", e => {
    //let a=exampleData(e,e.player,"load",3)
    //  tell(e.data.getString("weapon"))
    let id = e.data.getString("weapon")

    e.player.mainTick(skillList[id].right_skill0.tick)

    parryDecide(e.player)


})

NetworkEvents.dataReceived("press_left_skill0", e => {

    let id = e.data.getString("weapon")

    e.player.mainTick(skillList[id].left_skill0.tick)

    //tell(34)
    parryDecide(e.player)

})


NetworkEvents.dataReceived("press_skill1", e => {

    let id = e.data.getString("weapon")

    e.player.mainTick(skillList[id].skill1.tick)

    //tell(34)
    parryDecide(e.player)

})
NetworkEvents.dataReceived("press_skill2", e => {

    let id = e.data.getString("weapon")

    e.player.mainTick(skillList[id].skill2.tick)

    //tell(34)
    parryDecide(e.player)

})
NetworkEvents.dataReceived("press_skill3", e => {

    let id = e.data.getString("weapon")

    e.player.mainTick(skillList[id].skill3.tick)

    //tell(34)
    parryDecide(e.player)

})





NetworkEvents.dataReceived("press_skill_end", e => {
    //tell(345)
    e.player.mainTick((t) => { return true })

})

//priority:10845630
let skillList = {}

let aoeAttack = (entity, player, r, damage, reaction, toughness, damagetype) => {
    // tell(reaction)
    let toughness_cut = getAttributeValue(player.getItemBySlot($EquipmentSlot.MAINHAND), global.attributes.toughness_cut)
    //在kjs使用Matrix3f方法无效(会变成nan)
    // tell(toughness_cut)

    let obb = $OBB.of(0, 0, 0, 0, 0, 0)
    obb.pos = player.position().toVector3f()
    obb.pos.y += 0.5
    //  obb.deflect=new $Vector3f(-r,0,-r)
    obb.pose = new $Vector3f(r, r, r)

    if (entity.target && !entity.target.isRemoved()) {
        obb.rotate.rotateY((-getHorizontal(entity.target.x - player.x, entity.target.z - player.z) / 180 * PI));
    } else {
        obb.rotate.rotateY((-player.yRotO / 180 + 1) * PI)
    }


    attacks(obb, player, damagetype, 0.1 * damage *DamageValue2(player,"attack")* player.getAttributeValue("generic.attack_damage"), toughness * toughness_cut, reaction)

}



let swordAttack = (entity, player, r, damage, reaction, toughness, damagetype) => {

    let toughness_cut = getAttributeValue(player.getItemBySlot($EquipmentSlot.MAINHAND), global.attributes.toughness_cut)
    //在kjs使用Matrix3f方法无效(会变成nan)
    // tell(toughness_cut)

    let obb = $OBB.of(0, 0, 0, 0, 0, 0)
    obb.pos = player.position().toVector3f()
    obb.pos.y += 1
    obb.deflect = new $Vector3f(0, 0, -(r - 0.4))
    obb.pose = new $Vector3f(1, 1.2, r)

    if (entity.target && !entity.target.isRemoved()) {
        let y = -getHorizontal(entity.target.x - player.x, entity.target.z - player.z)

        // entity.setYRots(-y)
        obb.rotate.rotateY(y / 180 * PI);

    } else {
        obb.rotate.rotateY((-player.yRotO / 180 + 1) * PI)
    }

    //  tell(damage *player.getAttributeValue("generic.attack_damage"))

    entity.invulnerableTime = 0
    //  tell(obb.rotate)
    //tell (  $OBB.ofEntity(player).rotate)

    attacks(obb, player, damagetype, 0.1 * damage* player.getAttributeValue("generic.attack_damage"), toughness * toughness_cut, reaction)

}
/*
if (entity.target && entity.target.isLiving() && entity.target.distanceToEntity(entity.player) < r) {
  
 
  
 
  let entitys = exampleData(0, entity.target, "load", r)
  if (entitys) {
      entitys.forEach(entity => {
       
          let e = entity

          //  e.sm
          if (entity.isLiving() && !entity.isPlayer()) {
              attack(player, entity, damagetype, damage, reaction)

              let value = toughness_cut * toughness


              entity.hurtToughness(value)

              //  player.setDataDouble("finally_toughness_cut", value)

          }
      })
  }
 
  
  
  
} else {
  let entitys = exampleData(0, entity.player, "load", r)
  if (entitys) {
      entitys.forEach(entity => {
          if (entity.isLiving() && !entity.isPlayer()) {
              attack(player, entity, damagetype, damage, reaction)

              let value = toughness_cut * toughness

              entity.hurtToughness(value)
              //player.setDataDouble("finally_toughness_cut", value)

          }

      })
  }
}

*/



const MaxSkill = 5


let swordSeek = (entity, player, seekR, seekR1, seekR2, seekR3, speed1, speed2) => {

    //6  3  8  4
    let modify = player.areData("modifyCombatMove")

    let data = player.getDataList("modifyCombatMove")



    if (entity.target && entity.target.isLiving() && !entity.target.isRemoved() && !(modify && data.getInt("tick") > player.age)) {
        let d = entity.target.distanceToEntity(entity.player)


        if (d < seekR) {
            // tell(entity.isStageCool())
            if (d > seekR1
                && !entity.isStageCool()) {


                if (data.getInt("type")) {//目标位置
                    let speed = new $Vec3(speed1 * (-player.x + entity.target.x), 0, speed1 * (-player.z + entity.target.z))
                    // tell(speed.length())
                    //  tell()
                    if (speed.length() > 0.2) {
                        // tell(speed.length())
                        speed = speed.normalize()
                        // tell(speed.length())
                        speed = speed.scale(0.2 + speed2)
                    }
                    //tell(speed.length())

                    player.setMove(speed)

                } else {//方向键

                    let ang = ofDirection(data.getInt("move"))
                    let speed = new $Vec3(speed1 * Math.cos((player.yRotO - ang + 90) / 180 * PI), 0, speed1 * Math.sin((player.yRotO - ang + 90) / 180 * PI))
                    // tell(speed.length())

                    //   let speed = new $Vec3(speed1 * (-player.x + entity.target.x), 0, speed1 * (-player.z + entity.target.z))
                    // tell(speed.length())
                    //  tell()

                    //tell(speed.length())

                    player.setMove(speed)

                }




            } else {
                //entity.player.setMove(new Vec3(0, 0, 0))
            }
        } else if (d > seekR2) {
            addTarget(entity, seekR3)
        }
    } else {
        if (modify) {

            //    tell(data.getInt("move"))

            addTarget(entity, seekR3, data.getInt("move"))//添加以当前按键方向为目标移动的选择

        } else {
            addTarget(entity, seekR3)

        }

        player.setMove(new $Vec3(speed1 * Math.cos((player.yRotO + 90) / 180 * PI), player.getMove().y(), speed1 * Math.sin((player.yRotO + 90) / 180 * PI)))

    }








}


let ofDirection = (direction) => {

    if (direction == 0) {//前
        return 0

    } else if (direction == 1) {//后


        return 180

        // searchTarget(entity, r, 180)
    } else if (direction == 2) {//左
        return 90
        //  searchTarget(entity, r, 90)
    } else if (direction == 3) {//右
        return -90
        // searchTarget(entity, r, -90)

    } else if (direction == 4) {
        return 45
        // searchTarget(entity, r, 45)
    } else if (direction == 5) {
        return -45
        // searchTarget(entity, r, -45)

    } else if (direction == 6) {
        return -135
        //searchTarget(entity, r, -135)
    } else if (direction == 7) {
        return 135
        // searchTarget(entity, r, 135)
    }


}
let combatMoveY = (entity, speed, isAdd) => {
    let player
    if (entity instanceof $Player) {

        player = entity

    } else {
        player = entity.player
    }

    //player.setMove(player.getMove().add(0, speed1, 0))
    let move = player.getMove()

    if (isAdd) {
        player.setMove(player.getMove().add(speed))
    } else {

        player.setMove(new $Vec3(move.x(), speed, move.z()))
    }
    //tell(player.getMove())

}



let combatMoveZ = (entity, speed1, isAdd, r) => {

    let player
    if (entity instanceof $Player) {

        player = entity

    } else {
        player = entity.player
    }
    let r1 = r ? r : 225

    let speed
    if (entity.target && !entity.target.isRemoved() && player.distanceToEntitySqr(entity.target) < r1) {

        speed = new $Vec3(speed1 * (-player.z + entity.target.z), 0, speed1 * (-player.x + entity.target.x))

    } else {
        // speed = new $Vec3(Math.sin(player.yRotO / 180 * PI), 0, Math.cos(player.yRotO / 180 * PI))
        speed = new $Vec3(Math.cos((player.yRotO + 90) / 180 * PI), 0, Math.sin((player.yRotO + 90) / 180 * PI))

    }


    speed = speed.normalize()

    speed = speed.scale(0.2 + Math.abs(speed1))

    if (isAdd) {
        player.setMove(player.getMove().add(speed))
    } else {

        player.setMove(speed)
    }
    //player.setMove(player.getMove().add(speed)) 


}


let combatMoveX = (entity, speed1, isAdd, r) => {
    let player
    if (entity instanceof $Player) {

        player = entity

    } else {
        player = entity.player
    }

    let r1 = r ? r : 225

    let speed

    let xx = 0

    let zz = 0


    if (entity.target && !entity.target.isRemoved() && player.distanceToEntitySqr(entity.target) < r1) {
        xx = -player.x + entity.target.x
        zz = -player.z + entity.target.z
        speed = new $Vec3(speed1 * (xx), 0, speed1 * (zz))




    } else {
        xx = Math.sin(player.yRotO / 180 * PI)
        zz = Math.cos(player.yRotO / 180 * PI)
        speed = new $Vec3(Math.cos((player.yRotO + 90) / 180 * PI), 0, Math.sin((player.yRotO + 90) / 180 * PI))

    }

    // if (speed.length() > 0.2) { }
    //  tell(speed)
    speed = speed.normalize()
    // tell(speed)
    speed = speed.scale(0.2 + Math.abs(speed1))
    //   tell(speed)

    //tell(speed.length())
    // tell(speed)

    // if (entity.target && player.distanceToEntitySqr(entity.target) < 0.5 && speed1 > 0) return//接近目标时停止移动

    // tell(  player.getMove())
    if (isAdd) {

        //  tell('v2')

        player.setMove(player.getMove().add(speed))
    } else {
        //tell(isAdd)
        let oSpeed = player.getMove()

        let y = Math.acos(xx / Math.sqrt(xx * xx + zz * zz))

        let v1 = oSpeed.yRot(y)

        let v2 = new $Vec3(0, 0, v1.z()).yRot(-y)

        player.setMove(new $Vec3(0, player.getMove().y(), 0).add(v2).add(speed))
    }

}

let combatYRot = (t) => {


    if (t.target && t.target.distanceToEntity(t.player) < 6) {
        t.setYRots(getHorizontal(-t.target.x + t.player.x, -t.target.z + t.player.z))
    } else {
        t.setYRots(t.player.yRotO)
    }


}


let addTarget = (entity, r, direction) => {
    let p = entity.player
    //  tell(direction)
    if (direction || direction == 0) {

        searchTarget(entity, r, ofDirection(direction))

    } else {
        if (entity.player) {
            searchTarget(entity, r)
        }
    }
}
let searchTarget = (entity, r, rotate) => {

    searchTargets(entity, r, rotate, 1)

}

let searchTargets = (entity, r, rotate, i) => {

    i--

    if (i < 0) return

    let entitys = entity.player
        .level
        .getEntitiesWithin(AABB.of(
            entity.player.x - r,
            entity.player.y - r,
            entity.player.z - r,
            entity.player.x + r,
            entity.player.y + r,
            entity.player.z + r))

    let obb = $OBB.ofEntity(entity.player)

    if (rotate || rotate == 0) {

        //  tell(rotate)
        obb.pose = new $Vector3f(1.5, r, r);
        obb.rotate.rotateY(rotate / 180 * PI)
        obb.deflect = new $Vector3f(0, 0, r);
    } else {

        obb.pose = new $Vector3f(r, r, r);

    }
    let have = false
    entitys.forEach(entitys => {

        if (entitys.isLiving() && !entitys.isPlayer()) {

            let ab = obb.collide(entitys.position().toVector3f())

            /**@type {Internal.Entity} */
            let a = entitys
            if (ab) {
                have = true
                entity.setTarget(entitys);
            }
        }
    })

    if (!have) searchTargets(entity, r, null, i)




}



NetworkEvents.dataReceived("combatMoveData", e => {
    //e.player
    let a = e.data.getBoolean("a")
    let w = e.data.getBoolean("w")

    let d = e.data.getBoolean("d")

    let s = e.data.getBoolean("s")

    let type = e.data.getBoolean("type")
    //重新索敌
    if (w && !(a || d || s)) {//前
        let data = { tick: e.player.age + 10, move: 0, type: type }
        e.player.setDataList("modifyCombatMove", data)

    } else if (s && !(w || d || a)) {//后
        let data = { tick: e.player.age + 10, move: 1, type: type }
        e.player.setDataList("modifyCombatMove", data)
    } else if (a && !(w || d || s)) {//左

        let data = { tick: e.player.age + 10, move: 2, type: type }
        e.player.setDataList("modifyCombatMove", data)

    } else if (d && !(w || a || s)) {//右

        let data = { tick: e.player.age + 10, move: 3, type: type }
        e.player.setDataList("modifyCombatMove", data)

    } else if (a && w && !(d || s)) {//左前

        let data = { tick: e.player.age + 10, move: 4, type: type }
        e.player.setDataList("modifyCombatMove", data)


    } else if (d && w && !(a || s)) {//右前


        let data = { tick: e.player.age + 10, move: 5, type: type }
        e.player.setDataList("modifyCombatMove", data)


    } else if (s && d && !(w || a)) {//右后


        let data = { tick: e.player.age + 10, move: 6, type: type }
        e.player.setDataList("modifyCombatMove", data)


    } else if (a && s && !(d || w)) {//左后


        let data = { tick: e.player.age + 10, move: 7, type: type }
        e.player.setDataList("modifyCombatMove", data)


    }



})



/*

     if (direction == 0) {//前

            searchTarget(entity, r, 0)
        } else if (direction == 1) {//后

            searchTarget(entity, r, 180)
        } else if (direction == 2) {//左

            searchTarget(entity, r, 90)
        } else if (direction == 3) {//右

            searchTarget(entity, r, -90)

        } else if (direction == 4) {

            searchTarget(entity, r, 45)
        } else if (direction == 5) {
            searchTarget(entity, r, -45)
        } else if (direction == 6) {
            searchTarget(entity, r, -135)
        } else if (direction == 7) {

            searchTarget(entity, r, 135)
        }
let addTarget = (entity, r, direction) => {
    let p=entity.player
    
    if (direction) {
    
        if (direction == 0) {
        
            searchTarget(entity, r, 0.5*r,
               p.x+0.5*r*Math.cos((p.xRotO)/180*PI),
               p.y,
              p.z+0.5*Math.sin((p.xRotO)/180*PI))
        } else   if (direction == 1) {
        
            searchTarget(entity, r, 0.5*r,
               p.x+0.5*Math.cos((p.xRotO+180)/180*PI),
               p.y,
              p.z+0.5*Math.sin((p.xRotO+180)/180*PI))
        } else   if (direction == 2) {
        
            searchTarget(entity, r, 0.5*r,
               p.x+0.5*Math.cos((p.xRotO-90)/180*PI),
               p.y,
              p.z+0.5*Math.sin((p.xRotO-90)/180*PI))
        } else   if (direction == 3) {
        
            searchTarget(entity, r, 0.5*r,
               p.x+0.5*Math.cos((p.xRotO+90)/180*PI),
               p.y,
              p.z+0.5*Math.sin((p.xRotO+90)/180*PI))
        } else   if (direction == 4) {
        
            searchTarget(entity, r, 0.5*r,
               p.x+0.5*Math.cos((p.xRotO-45)/180*PI),
               p.y,
              p.z+0.5*Math.sin((p.xRotO-45)/180*PI))
        } else   if (direction == 5) {
        
            searchTarget(entity, r, 0.5*r,
               p.x+0.5*Math.cos((p.xRotO+45)/180*PI),
               p.y,
              p.z+0.5*Math.sin((p.xRotO+45)/180*PI))
        } else   if (direction == 6) {
        
            searchTarget(entity, r, 0.5*r,
               p.x+0.5*Math.cos((p.xRotO+135)/180*PI),
               p.y,
              p.z+0.5*Math.sin((p.xRotO+135)/180*PI))
        }else   if (direction == 7) {
        
            searchTarget(entity, r, 0.5*r,
               p.x+0.5*Math.cos((p.xRotO-135)/180*PI),
               p.y,
              p.z+0.5*Math.sin((p.xRotO-135)/180*PI))
        }
    
    
    
    
    } else {
        if (entity.player) { 
        
  searchTarget(entity, r, r,
               entity.player.x,
               entity.player.y,
               entity.player.z)
}
    }
}


let searchTarget = (entity,r,x,y,z )=> {

 let entitys = entity.player
        .level
        .getEntitiesWithin(AABB.of(
            entity.player.x - r,
            entity.player.y - r,
            entity.player.z - r,
            entity.player.x + r,
            entity.player.y + r,
            entity.player.z + r))
    
    tell(entitys.size())
    
    let combatMoveY = (entity, speed1) => {
    let player
    if (entity instanceof $Player) {

        player = entity

    } else {
        player = entity.player
    }

    player.setMove(player.getMove().add(0, speed1, 0))
}



let combatMoveZ = (entity, speed1) => {

    let player
    if (entity instanceof $Player) {

        player = entity

    } else {
        player = entity.player
    }


    let speed
    if (entity.target) {

        speed = new $Vec3(speed1 * (-player.z + entity.target.z), 0, speed1 * (-player.x + entity.target.x))

    } else {

        speed = new $Vec3(Math.sin(player.yRotO / 180 * PI), 0, Math.cos(player.yRotO / 180 * PI))

    }


    speed = speed.normalize()

    speed = speed.scale(0.2 + Math.abs(speed1))


    player.setMove(player.getMove().add(speed))


}


let combatMoveX = (entity, speed1) => {
    let player
    if (entity instanceof $Player) {

        player = entity

    } else {
        player = entity.player
    }



    let speed
    if (entity.target) {

        speed = new $Vec3(speed1 * (-player.x + entity.target.x), 0, speed1 * (-player.z + entity.target.z))

    } else {

        speed = new $Vec3(Math.cos(player.yRotO / 180 * PI), 0, Math.sin(player.yRotO / 180 * PI))

    }

    // if (speed.length() > 0.2) { }
    //  tell(speed)
    speed = speed.normalize()
    // tell(speed)
    speed = speed.scale(0.2 + Math.abs(speed1))
    //   tell(speed)

    //tell(speed.length())
    // tell(speed)
    // tell(  player.getMove())
    player.setMove(player.getMove().add(speed))
    //tell(  player.getMove())
    //entity.player.setMove(new Vec3(0, 0, 0))
}

    entitys.forEach(entitys => {
        if (entitys.isLiving() && !entitys.isPlayer()) {
         //  tell(r1 * r1)
         //   tell(entitys.distanceToSqr(new $Vector3d(x, y, z)) )
          //  tell(entitys.x-x)
          //    tell(entitys.y-y)
          //    tell(entitys.z-z)
        
            let a = entitys
            
          //  tell(a)
            
            if ( (entitys.x-x)*(entitys.x-x)+(entitys.y-y)*(entitys.y-y)+(entitys.z-z)*(entitys.z-z)< r1 * r1) { 
           
                entity.setTarget(entitys);
            }
        }
    })






}
 */























