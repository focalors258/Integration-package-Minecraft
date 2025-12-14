

let findSnow = (event, entity, health,player,guiGraphic) => {//音乐接收放在entityBar


    let e = event


    if (entity.isMonster() && areData(entity, 'find') && health > 0) {//侦察值


        let find = getData(entity, 'int', 'find') / entity.getAttributes().getValue('kubejs:max_find')//getData(entity, 'int', 'max_find'&& areData(entity, 'max_find') )


        find <= 1 ? find : 0

        event.poseStack.pushPose()//创建新的


        if (find < 1 && find > 0) {//侦察状态
            let distance = player.distanceToEntity(entity)
            if (distance > 5) {
                
                distance=Math.pow(distance,0.8)*1.37
                
                e.poseStack.scale(0.08*distance,0.08*distance, 0.08*distance)//注意 渲染堆栈和if有关
                
                
            } else {
            e.poseStack.scale(0.4, 0.4, 0.4)//注意 渲染堆栈和if有关
            }
            


            guiGraphic.blit('kubejs:gui/bossbar.png', -10, -23, 0, 178, 20, 20, 256, 256)//底

            event.poseStack.pushPose()//创建新的
            event.poseStack.translate(0, 0, -0.01)
            guiGraphic.blit('kubejs:gui/bossbar.png', -8,
                -21 + 16 * (1 - (find)), 22, 180 +
            Math.ceil(16 * (1 - (find))), 16,
                16 * (find), 256, 256)//底
            event.poseStack.popPose()//清空

        } else if (find == 1) {//攻击状态
            e.poseStack.scale(0.8, 0.8, 0.8)//注意 渲染堆栈和if有关

            guiGraphic.blit('kubejs:gui/bossbar.png', -5, -12, 46, 187, 11, 8, 256, 256)//底


        }

        event.poseStack.popPose()//清空

    }


}



let find_sound=0


let findSoundCool = (player) => {

  if(find_sound>0)  find_sound--  // setData(player, 'int', 'find_sound', Math.max(0, getData(player, 'int', 'find_sound') - 1))

//Client.player.tell(getData(player, 'int', 'find_sound') )


}