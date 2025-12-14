StartupEvents.registry('entity_type', event => {

    event.create('attract_circle', "entityjs:geckolib_projectile")
        // .immuneTo()//可接受的方块
        //.canSpawnFarFromPlayer(true)
        //.clientTrackingRange(20)//实体追踪范围
        .setRenderType("translucent")//实体呈现类型

        .sized(1, 1)//碰撞箱大小
        .modelSize(3, 3)//模型比例
        .updateInterval(1)//tick更新速率
        .repositionEntityAfterLoad(true)//加载后重新定位
        .isPushable(false)//是否可移动
        .fireImmune(true)//是否免疫火
        .saves(true)//应序列化其数据
        .setSummonable(true)//是否可召唤
        // .setSwimSound("minecraft:entity.generic.swim")//游泳声音
        //.setSwimSplashSound("minecraft:entity.generic.splash")//游泳飞溅声音
        // .dampensVibrations(entity => {

        //     return entity.isNoGravity();//无重力时无振动
        // })
        .mobCategory('projectile')
        .addAnimationController('exampleController', 1, event => {//动画控制

            //  event.thenLoop('animation.model.rotate');

            event.thenPlayAndHold('animation.model.move')

            // event.thenPlayAndHold('');
            return true;
        })
        .tick(e => {
        
           e.deltaMovement = new Vec3(0, 0, 0)
        
              if (e.age > 15) {
                e.remove("discarded")
            }
            
            
        })

})