
let immune = (event) => {//免疫伤害

  let entity = event.entity


  if ((event.entity.getEffect("kubejs:fall_immune"))) {

    let intensity = event.entity.getEffect("kubejs:fall_immune").getAmplifier()  //元素量

    let time = event.entity.getEffect("kubejs:fall_immune").getDuration()


    if (event.source.type == "fall") {

      //  event.setAmount(-1)

      //event.setCanceled(true)//取消事件
      event.cancel(0)
      // event.cancel()
      event.entity.removeEffect('kubejs:fall_immune')

      if (intensity - 1 >= 0) {
        event.entity.addEffect(new $potion('kubejs:fall_immune', time, Math.max(intensity - 1, 0), false, false))
      }


    }
    return

  }

 //if (entity.type == "kubejs:divine_sword") {

 //  event.cancel(0)
 //  //event.setCanceled(true)//取消事件


 //}




}







let notRetreat = (entity) => {
  if (entity &&
    entity.block.offset(0, - 1, 0).getId() !== 'minecraft:void_air' &&
    entity.block.offset(0, - 1, 0).getId() !== 'minecraft:cave_air' &&
    entity.block.offset(0, - 1, 0).getId() !== 'minecraft:air' &&
    (entity.block.offset(0, 0, 0).getId() == 'minecraft:cave_air' ||
      entity.block.offset(0, 0, 0).getId() == 'minecraft:air')) {//降低击退


    entity.deltaMovement = new Vec3(0, -5000, 0)

  }
}