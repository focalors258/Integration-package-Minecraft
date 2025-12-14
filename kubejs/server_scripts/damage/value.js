

/*
let Damage = (event, damageType) => {//返回伤害数值  废弃
    if (!event.source.player) return

    let source = event.source


    let random = Math.random()

    let crit = source.player.getAttributes().getValue('l2artifacts:crit_rate')// 


    let att = source.player.getAttributes().getValue("minecraft:generic.attack_damage")//最大 ~10

    let critAtt = source.player.getAttributes().getValue('l2artifacts:crit_damage') + 1   //暴击伤害   ~4

    let attAdd = source.player.getAttributes().getValue('puffish_skills:player.melee_damage') + 1//基础伤害 ~3

    let explosion = source.player.getAttributes().getValue('autoleveling:monster.explosion_damage_bonus')

    //let reactionAdd = source.player.getAttributes().getValue('元素精通')


    if (damageType == 'attack') {//近战伤害

        return attAdd

    } else if (damageType == 'spell') {//魔法伤害   将所有魔法伤害降低10倍  再乘以基础伤害

        if (crit >= random) {
            return att * critAtt * attAdd
        } else {
            return att * attAdd
        }

    } else if (damageType == 'explosion') {//爆炸伤害


        return critAtt * attAdd


    } else if (damageType == 'reaction1') {//反应伤害随基础伤害指数增长


        return Math.pow(2, attAdd)*0.6   //应当再乘以元素精通        

    }//反应伤害



}
*/

let Damage = (event, damageType) => {//返回伤害数值/
    if (!event.source.player) return

    let source = event.source


    let random = Math.random()

    let crit = source.player.getAttributes().getValue('l2artifacts:crit_rate')// 


    let att = source.player.getAttributes().getValue("minecraft:generic.attack_damage")//最大 ~10

    let critAtt = source.player.getAttributes().getValue('l2artifacts:crit_damage') + 1   //暴击伤害   ~4

    let attAdd = source.player.getAttributes().getValue('kubejs:basi_att') + 1//基础伤害 ~3puffish_skills:player.melee_damage

    let explosion = source.player.getAttributes().getValue('autoleveling:monster.explosion_damage_bonus')

    //let reactionAdd = source.player.getAttributes().getValue('元素精通')

    let reaction_add = source.player.getAttributes().getValue('kubejs:reaction_add')+1

    if (damageType == 'attack') {//近战伤害

        return attAdd

    } else if (damageType == 'spell') {//魔法伤害   将所有魔法伤害降低10倍  再乘以基础伤害

        if (crit >= random) {
            event.source.actual.setCritical(true)
            return att * critAtt * attAdd /10
        } else {
            return att * attAdd /10
        }

    } else if (damageType == 'explosion') {//爆炸伤害


        return critAtt * attAdd * 0.6


    } else if (damageType == 'reaction1') {//反应伤害随基础伤害指数增长  附加持续伤害类型


        return (Math.pow(2, attAdd) + 2*Math.pow( reaction_add*attAdd/4,0.9 ))//        X 除以attadd用于排除此伤害再次受到player加成的影响X

    }else if (damageType == 'reaction2') {//反应伤害随基础伤害指数增长  附加单次伤害类型


        return Math.pow(2, attAdd) *(1+(400* reaction_add/(500+reaction_add))/100)   //   

    }else if (damageType == 'reaction3') {//反应伤害随基础伤害指数增长  仅做附加伤害增幅


        return (1+(400* reaction_add/(500+reaction_add))/100)   //   

    }//反应伤害



}


let Damage2 = (entity, damageType) => {//返回伤害数值/


    if (!entity.isLiving()&&!entity.isPlayer()) return

    //let source.player = entity

//let entity=event.entity


    let random = Math.random()

    let crit =     entity.getAttributes().getValue('l2artifacts:crit_rate')+entity.getAttributes().getValue('kubejs:crit_rate')// 

    let att =      entity.getAttributes().getValue("minecraft:generic.attack_damage")//武器攻击力

    let critAtt = entity.getAttributes().getValue('l2artifacts:crit_damage') + 1   //暴击伤害   ~4

    let attAdd =   entity.getAttributes().getValue('kubejs:basi_att') + 1//基础伤害 ~3puffish_skills:player.melee_damage//最大 ~10

    let explosion =entity.getAttributes().getValue('autoleveling:monster.explosion_damage_bonus')

    //

    let reaction_add = entity.getAttributes().getValue('kubejs:reaction_add') + 1

  let critResist = entity.getAttributes().getValue('kubejs:crit_resist')//敌人抗暴击率

    if (damageType == 'attack') {//近战伤害

        //return attAdd



        if (crit-critResist >= random) {

            entity.setCritical(true)//暴击效果

            return critAtt * attAdd
        } else {
            return attAdd
        }



    } else if (damageType == 'spell') {//魔法伤害   将所有魔法伤害降低10倍  再乘以基础伤害

        if (crit-critResist >= random) {

            entity.setCritical(true)//暴击效果

            return att * critAtt * attAdd / 10
        } else {
            return att * attAdd / 10
        }

    } else if (damageType == 'explosion') {//爆炸伤害


        return critAtt * attAdd * 0.6


    } else if (damageType == 'reaction1') {//反应伤害随基础伤害指数增长  附加持续伤害类型


        return (Math.pow(2, attAdd) + 2 * Math.pow(reaction_add * attAdd / 4, 0.9))//        X 除以attadd用于排除此伤害再次受到player加成的影响X

    } else if (damageType == 'reaction2') {//反应伤害随基础伤害指数增长  附加单次伤害类型


        return Math.pow(2, attAdd) * (1 + (400 * reaction_add / (500 + reaction_add)) / 100)   //应当再乘以元素精通        

    }else if (damageType == 'reaction3') {//反应伤害随基础伤害指数增长  仅做附加伤害增幅


        return (1+(400* reaction_add/(500+reaction_add))/100)   //   

    }//反应伤害
//反应伤害



}























