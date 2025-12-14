   // /**@type {Internal.Mob} */
   //         let entity1 = entity
//注意   通过target获取的实体对象不能直接打印  会导致报错
//注意   通过target获取的实体对象不能直接打印  会导致报错
//注意   通过target获取的实体对象不能直接打印  会导致报错
//注意   通过target获取的实体对象不能直接打印  会导致报错
//注意   通过target获取的实体对象不能直接打印  会导致报错!(entity1?.target) || !(entity1?.target.isPlayer())

let resetFind = (entity, event) => {

    return
    
    if (entity.age % (20 * 3) == 0) {
        if (entity.isLiving() && entity.isMonster() && areData(entity, 'find')) {//&& entity.getRootData().contains('goal')

            let findRange = entity.getAttributes().getValue('kubejs:find_range')//getData(entity, 'int', 'find_range')//侦察范围&&entity.type=='minecraft:endermite'

            let player = entity.level.getNearestPlayer(entity, findRange)



            //Client.player.tell(entity.name)//未进入世界时已开始执行
            if (entity.age % (20 * 6) == 0 && !player) {

                setData(entity, 'int', 'find', 0)//玩家远离侦察范围重置侦察值


            }

            let find = getData(entity, 'int', 'find')

            let maxFind = entity.getAttributes().getValue('kubejs:max_find')//getData(entity, 'int', 'max_find')

            entity.level.getPlayers().sendData('entity_bar', {//发给客户端这里也进行图步
                name: 'find_bar',
                entity: entity.getId(),
                //max_find: maxFind,
                find: find,
            })

           
            if (player && !getData(entity, 'boolean', 'find_add')) {// !(entity1?.target) || !(entity1?.target.isPlayer())


                if (find < maxFind) {
                    setData(entity, 'int', 'find', Math.max(0, find - 30))//有遮挡且al不更新时缓慢减少
                }
                // Client.player.tell(getData(entity, 'int', 'find'

            }

        }
    }
}




//let distance = Math.floor(entity.distanceToEntity(player)) + 1
//  console.log(distance)
// let xGap = entity.x - player.x
// let yGap = entity.y - player.y
// let zGap = entity.z - player.z

// let shelter = true//是否无遮挡
/*
for (let i = 0; i <= Math.min(distance, 10); i++) {
 
let b = i / distance
 
let blockId = entity.level.getBlock(entity.x - (b * xGap), entity.y - (b * yGap), entity.z - (b * zGap)).id
//Client.player.tell(blockId)
 
if (blockId !== 'minecraft:air' && blockId !== 'minecraft:cave_air') {
 shelter = false
 //break
}
 
if (i == 10) shelter = false
 
}
*/



let attFind = (source, entity) => {




    /**@type {Internal.LivingEntity} */
    let player = source.actual



    if (entity.isMonster() && areData(entity, 'find') && source.actual.isPlayer()) {

        let r = entity.distanceToEntity(source.actual)

        let find = getData(entity, 'int', 'find')

        let maxFind = entity.getAttributes().getValue('kubejs:max_find')//getData(entity, 'int', 'max_find')



        let hidden = player.getAttributes().getValue('kubejs:hidden')

        if (r < 8 - Math.pow(hidden, 0.3)) {//过于靠近

            setData(entity, 'int', 'find', Math.min(maxFind, find + 10 * maxFind / (10 + hidden)))

        } else {

            setData(entity, 'int', 'find', Math.min(maxFind, find + 0.6 * (25 * maxFind / (25 + hidden))))

        }

    }













}