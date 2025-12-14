
let DamageValue = (event, damageType) => {//返回伤害数值/

      

    if (!event.source.player) return damageType == 'reaction3' ? 1.5 : entityAtt2(event.source.actual)//怪物reaction3类型伤害默认1.5倍率

    let source = event.source

    let entity = event.entity


    let random = Math.random()

    let crit = source.player.getAttributes().getValue('l2damagetracker:crit_rate') + source.player.getAttributes().getValue('kubejs:crit_rate')// 

    let att = source.player.getAttributes().getValue("minecraft:generic.attack_damage")//武器攻击力

    let critAtt = source.player.getAttributes().getValue('l2damagetracker:crit_damage') + 1   //暴击伤害   ~4

    let attAdd = source.player.getAttributes().getValue('kubejs:basi_att') + 1//基础伤害 ~3puffish_skills:player.melee_damage//最大 ~10

    //  let explosion = source.player.getAttributes().getValue('autoleveling:monster.explosion_damage_bonus')

    //

    let reaction_add = source.player.getAttributes().getValue('kubejs:reaction_add') + 1

    let critResist = entity.getAttributes().getValue('kubejs:crit_resist')//敌人抗暴击率

//tell(Math.pow(2, attAdd))



    if (damageType == 'attack') {//近战伤害

        //return attAdd

        // tell(   source.player.getAttributes().getValue('kubejs:crit_rate') )

        if (crit - critResist >= random) {
            //tell(crit - critResist >= random)
            setCrit(event.entity, 1)//暴击效果

            return critAtt * attAdd
        } else {
            
             setCrit(event.entity, 0)//暴击效果
            return attAdd
        }



    } else if (damageType == 'spell') {//魔法伤害   将所有魔法伤害降低10倍  再乘以基础伤害

        if (crit - critResist >= random) {

            setCrit(event.entity, 1)//暴击效果

            return att * critAtt * attAdd / 10
        } else {
             setCrit(event.entity, 0)//暴击效果
            return att * attAdd / 10
        }

    } else if (damageType == 'explosion') {//爆炸伤害


        return critAtt * attAdd * 0.6


    } else if (damageType == 'reaction1') {//反应伤害随基础伤害指数增长  附加持续伤害类型


        return (Math.pow(2, attAdd) + 2 * Math.pow(reaction_add * attAdd / 4, 0.9))//        X 除以attadd用于排除此伤害再次受到player加成的影响X

    } else if (damageType == 'reaction2') {//反应伤害随基础伤害指数增长  附加单次伤害类型


        return Math.pow(2, attAdd) * (1 + (400 * reaction_add / (500 + reaction_add)) / 100)   //应当再乘以元素精通        

    } else if (damageType == 'reaction3') {//反应伤害随基础伤害指数增长  仅做附加伤害增幅


        return (1 + (400 * reaction_add / (500 + reaction_add)) / 100)   //   

    }//反应伤害
    //反应伤害



}



let DamageValue2 = (actual, damageType,entity) => {//返回伤害数值/




    if (!actual.isLiving()) return

    if (!actual.isPlayer()) {

        return damageType == 'reaction3' ? 1.5 : entityAtt2(actual)//怪物reaction3类型伤害默认1.5倍率

    }

    //let source.player = entity

    //let entity=event.entity


    let random = Math.random()

    let crit = actual.getAttributes().getValue('l2damagetracker:crit_rate') + actual.getAttributes().getValue('kubejs:crit_rate')// 

    let att = actual.getAttributes().getValue("minecraft:generic.attack_damage")//武器攻击力

    let critAtt = actual.getAttributes().getValue('l2damagetracker:crit_damage') + 1   //暴击伤害   ~4

    let attAdd = actual.getAttributes().getValue('kubejs:basi_att') + 1//基础伤害 ~3puffish_skills:player.melee_damage//最大 ~10
//tell(Math.pow(2, attAdd))
    //let explosion = entity.getAttributes().getValue('autoleveling:monster.explosion_damage_bonus')

    //

    let reaction_add = actual.getAttributes().getValue('kubejs:reaction_add') + 1//反应加成

    let critResist = actual.getAttributes().getValue('kubejs:crit_resist')//敌人抗暴击率



    if (damageType == 'attack') {//近战伤害

        //return attAdd



        if (crit - critResist >= random) {

          if(entity)  setCrit(entity, 1)//暴击效果

            return critAtt * attAdd
        } else {
              if(entity)  setCrit(entity, 0)//暴击效果
            return attAdd
        }



    } else if (damageType == 'spell') {//魔法伤害   将所有魔法伤害降低10倍  再乘以基础伤害

        if (crit - critResist >= random) {

            if(entity)  setCrit(entity, 1)//暴击效果

            return att * critAtt * attAdd / 10
        } else {
            
              if(entity)  setCrit(entity, 0)//暴击效果
            return att * attAdd / 10
        }

    } else if (damageType == 'explosion') {//爆炸伤害


        return critAtt * attAdd * 0.6


    } else if (damageType == 'reaction1') {//反应伤害随基础伤害指数增长  附加持续伤害类型


        return (Math.pow(2, attAdd) + 2 * Math.pow(reaction_add * attAdd / 4, 0.9))//        X 除以attadd用于排除此伤害再次受到player加成的影响X

    } else if (damageType == 'reaction2') {//反应伤害随基础伤害指数增长  附加单次伤害类型


        return Math.pow(2, attAdd) * (1 + (400 * reaction_add / (500 + reaction_add)) / 100)   //应当再乘以元素精通        

    } else if (damageType == 'reaction3') {//  仅做附加伤害增幅


        return (1 + (400 * reaction_add / (500 + reaction_add)) / 100)   //   

    }//反应伤害
    //反应伤害



}


/*
let DamageValue2 = (entity, damageType) => {//返回伤害数值//未完善
    if (!entity.isPlayer()) return

    // let source = entity.source


    let random = Math.random()

    let crit = entity.getAttributes().getValue('l2artifacts:crit_rate')// 


    let att = entity.getAttributes().getValue("minecraft:generic.attack_damage")//最大 ~10

    let critAtt = entity.getAttributes().getValue('l2artifacts:crit_damage') + 1   //暴击伤害   ~4

    let attAdd = entity.getAttributes().getValue('kubejs:basi_att') + 1//基础伤害 ~3puffish_skills:player.melee_damage

    let explosion = entity.getAttributes().getValue('autoleveling:monster.explosion_damage_bonus')

    //let reactionAdd = source.player.getAttributes().getValue('元素精通')


    if (damageType == 'attack') {//近战伤害

        return attAdd

    } else if (damageType == 'spell') {//魔法伤害   将所有魔法伤害降低10倍  再乘以基础伤害

        if (crit >= random) {
            return att * critAtt * attAdd / 10
        } else {
            return att * attAdd / 10
        }

    } else if (damageType == 'explosion') {//爆炸伤害


        return critAtt * attAdd * 0.6


    } else if (damageType == 'reaction1') {//反应伤害随基础伤害指数增长


        return Math.pow(2, attAdd) * 0.6   //应当再乘以元素精通        

    }//反应伤害



}


*/




























