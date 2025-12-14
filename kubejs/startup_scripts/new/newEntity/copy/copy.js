
//注意  实体tick中的pdata不能与实体生成事件中的pdata产生冲突(事件同时触发?)



//copy_star_'bossName' 存储boss挑战星级  放在玩家身上


StartupEvents.registry('entity_type', event => {//注意颜色渲染透明度有限制范围

    event.create('copy', "entityjs:geckolib_projectile")//

        .mobCategory('misc')//实体分类
        .setRenderType("translucent")//实体呈现类型
        .sized(1, 2)//碰撞箱大小
        .modelSize(1, 1)//模型比例
        .updateInterval(3)//tick更新速率
        .repositionEntityAfterLoad(true)//加载后重新定位
        .isPushable(false)//是否可移动
        .fireImmune(true)//是否免疫火
        .saves(true)//应序列化其数据
        .setSummonable(true)//是否可召唤

        .mobCategory('projectile')



        .addAnimationController('exampleController', 1, event => {//动画控制



       // /**@type {Internal.BaseEntityBuilder$IAnimationPredicateJS} */
       // let e = event

            let 挑战状态 = getData(event.entity, 'int', 'condition')//需要更新客户端
           
            
            let 动画过渡 = getData(event.entity, "int", 'endToMove')
            
         // tell(动画过渡)//tell(event.animationTick)
            
            if (挑战状态 == 0&&动画过渡<130) {

                event.thenPlayAndHold('animation.unknown.end')
            
           //   if (event.entity.age % 20 == 0) {//计时
           //       
           //   setData(event.entity, 'int', 'endToMove', 动画过渡 + DPF*10)
           //   
           //   }
                
            }  else if (挑战状态 == 0&&动画过渡>=130) {

                
                
                
                event.thenLoop('animation.unknown.move')
                
            }else if (挑战状态 == 1) {

                event.thenPlayAndHold('animation.unknown.begin')
                
                 // setData(event.entity, 'int', 'endToMove', 0)
            }
            
           
            
            
            
            
            //else if (挑战状态 == 2) { }


            return true;
        })
        .scaleModelForRender(context => {//模型修改

            let { entity, widthScale, heightScale, poseStack, model, isReRender, partialTick, packedLight, packedOverlay } = context


        }).tick(entity => {

            /*

star_rule 模板  存于副本

star_user_rule 玩家数据


        被动
        
        时间限制_<时间>
        
        
        受伤次数限制_<次数>
        
        
        受附着层数限制_<类型>_<层数>
        
        
        受击飞限制_<时间>
        
        
        
        主动
        
        附着层数限制_<类型>_<层数>
        
        
        反应次数限制_<附着效果>_<层数>_<攻击效果>
        
        攻击头部占比_<百分比>_<当前>

         */

    
    let 挑战状态 = getData(entity, 'int', 'condition')//需要更新客户端


    let 动画过渡 = getData(entity, "int", 'endToMove')

            if (!(entity.server)) {
            
            
            
          

    if (挑战状态 == 0 && 动画过渡 < 130) {

        if (entity.age % 20 == 0) {//计时

            setData(entity, 'int', 'endToMove', 动画过渡+50)

        }

    } else if (挑战状态 == 1) {



        setData(entity, 'int', 'endToMove', 0)
    }

      }        
            
            const 状态切换冷却 = 8

            entity.deltaMovement = new Vec3(0, 0, 0)
            
           
          
            copyInitial(entity)//使客户端更新
            
         
            
            
            if (!(entity.server)) return

           //setData(entity,'boolean','load',true)

            if (entity.age % 5 == 0) {//地址中存储的是数值无法使两个变量共同指向

                  let data=entity.getRootData()

                 let pos = (getData(entity, 'list', 'pos'))
            if(pos){
              entity.setX(pos.x+0.5)
               entity.setY(pos.y-0.1)
               entity.setZ(pos.z+0.5)
            }
                
                //因屏幕显示而实时更新
                let 挑战状态 = getData(entity, 'int', 'condition')//需要更新客户端

                let 已过时间 = getData(entity, 'int', 'time')//需要更新客户端

                //getData(entity, 'int', 'cooling_time1')//需要更新客户端

                let 挑战时间 = getData(entity, 'list', 'max_time')//需要更新客户端  设置为0则不限制时间

                let 当前星级 = getData(entity, 'list', 'star')//需要更新客户端

                let 星级_条件 = (getData(entity, 'list', 'star_rule'))////模板

                let 副本_精英模式 = getData(entity, 'boolean', 'elite')

                let 副本_选项数量 = getData(entity, 'int', 'projects')

                let 副本_名称 = getData(entity, 'string', 'copy_name')

                //   tell(data['star_rule']['rule']['be_att'])
                
                entity.getRootData()['star_rule']['name']=副本_名称//更新
                
               // tell(data['star_rule']['rule']['be_att'])
                
                
                let 副本_描述 = getData(entity, 'string', 'describe')

                let 副本_解锁星级 = getData(entity, 'list', 'unlock_star')

                let 副本_boss等级 = getData(entity, 'list', 'boss_level')
                
                let 副本_解锁等级 = getData(entity, 'list', 'unlock_level')
                
                let 副本_注册名 = getData(entity, 'string', 'register_name')
                
                let 范围 = getData(entity, 'int', 'radius')

                let 背景 = getData(entity, 'string', 'background')

               // let 是否召唤成功 = data['is_summon']//getData(entity, 'boolean', 'is_summon')
                let 战利品=getData(entity, 'list', 'loot')


                let 当前难度 = getData(entity, 'int', 'difficulty')

                //entity.level.getPlayers()
                //if (状态切换冷却 == 0) { }
                let 范围内玩家 = getRadiusEntity(entity, 'minecraft:player', 范围 + 10)


                

                范围内玩家.forEach(/**@param {Player} player*/player => {//同步客户端信息

                    setData(player, $String, 'copy_user', entity.stringUuid)//使玩家与副本绑定

                    setData(player, $Int, 'copy_rangeUpdate', 20)//使玩家当前状态为进入副本(服务端)(pdata)

                    if(!areData(player,'star_' + 副本_名称)) setData(player, $List, 'star_' + 副本_名称, [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,])
                    //注 star_user_rule每个玩家仅有一个  所有副本共用  而'star_' + 副本_名称为每个副本各有一个
                    player.sendData('copy_data', {
                        condition: 挑战状态,//更新挑战状态
                        time: 已过时间 - 状态切换冷却,
                        max_time: 挑战时间[当前难度]*4,
                        entity: entity.getId(),
                        star_user_rule: getData(player, 'list', 'star_user_rule')
                    })//范围内玩家//使玩家当前状态为进入副本(客户端)(变量)
                })
                //范围内玩家.sendData('copyBeginsAnimation', {})//播放挑战开始



                //  范围内玩家.tell(挑战状态 + '  ' + 是否召唤成功 + '  ' + 状态切换冷却)


                //   范围内玩家.tell(已过时间 + '  ' + 挑战时间)

                if (挑战状态 == 1) {//客户端触发
                    //开始动画 copyBeginsAnimation
                    //失败结束动画 copyLoseAnimation
                    //胜利结束动画 copyWinAnimation

                    if (已过时间 == 0) {

                        范围内玩家.sendData('copyBeginsAnimation', {})//播放挑战开始

                    }



                    if (已过时间 == 状态切换冷却) {
                         /**@type {Internal.LivingEntity}*/
                        let boss = entity.level.createEntity(副本_注册名)

                        boss.setX(entity.x)
                        boss.setY(entity.y)
                        boss.setZ(entity.z)


                        setData(boss, 'int', 'level', 副本_boss等级[当前难度])

                        if (entity.level.addFreshEntity(boss)) {   //生成boss   //在此添加特化属性

                            //是否召唤成功 = true //挑战结束  玩家离开区域  boss消失重置

                            setData(boss, 'boolean', 'boss', true)//boss标签

                            setData(entity, 'string', 'copy_owner', boss.stringUuid)//给副本实体绑定生成的bossid  

                            setData(boss, 'string', 'copy_host', entity.stringUuid)//互相绑定

                            setData(boss, 'int', 'level', 副本_boss等级[当前难度])


                            范围内玩家.sendData('level', { entity: boss.getId(), level: getData(boss, 'int', 'level') })//更新等级

                            boss.addEffect(new $potion("resistance",10,6,false,false))

                            //范围内玩家.sendData('copy_star_rule', { rule: 星级_条件 })//更新客户端星级显示

                            范围内玩家.forEach(player => { //更新规则

                                setData(player, $List, 'star_user_rule', 星级_条件)//在各事件内进行检测 //注意  给与的是路径

                                //tell(星级_条件)
                                
                            })
                        }

                    } else if (已过时间 > 状态切换冷却) {

                        let bossUuid = getData(entity, 'string', 'copy_owner')

                        let boss = entity.level.getEntity(bossUuid)//注意 此为entity

                        if (boss && areData(boss, 'boss')) {

                            if (已过时间 == 状态切换冷却 + 1) {

                                范围内玩家.sendData('boss_bar', { name: 'boss', entity: boss.getId(), })//更新客户端血条//value: true,后置

                            }



                            if ((
                                entity.distanceToEntity(boss) > 范围 + 10

                                ||
                                (
                                    挑战时间[当前难度]*4 != 0

                                    && 已过时间 > 挑战时间[当前难度]*4 + 状态切换冷却
                                )
                            )
                            ) {//超出范围 挑战失败

                                范围内玩家.sendData('copyLoseAnimation', {})


                                boss.remove('discarded')

                                挑战状态 = 0

                                已过时间 = 0
                            }


                        } else {
                            挑战状态 = 0

                            已过时间 = 0
                        }



                    }

                    if (挑战状态 != 0) {
                        
                        
                        if(entity.age%20==0){
                        
                        范围内玩家.forEach(/**@param {Player} player*/player => {
                        
                            time_star_rule(player)
                            
                        })
                        }
                        已过时间++
                    }

                }

         setData(entity, 'string', 'copy_name', 副本_名称)
//
//
         setData(entity, 'string', 'register_name', 副本_注册名)
//
         setData(entity, 'string', 'describe', 副本_描述)
//
         setData(entity, 'list', 'boss_level', 副本_boss等级)
//
         setData(entity, 'boolean', 'elite', 副本_精英模式)
//
         setData(entity, 'list', 'unlock_level', 副本_解锁等级)
//
         setData(entity, 'list', 'unlock_star', 副本_解锁星级)
//
         setData(entity, 'int', 'projects', 副本_选项数量)
//
         setData(entity, 'int', 'condition', 挑战状态)
//
         setData(entity, 'int', 'radius', 范围)
//
        // setData(entity, 'boolean', 'is_summon', 是否召唤成功)
                //
            
         // setData(entity, 'int', 'cooling_time1', 状态切换冷却)
//
        setData(entity, 'int', 'time', 已过时间)
//
         setData(entity, 'list', 'max_time', 挑战时间)
//
//
            }

        })



})
/**
star: player.getRootData().get('star_' + name),//player.getRootData().get('star_'+name),
describe: '挑战目标:在120秒内击败, 战斗过程中未掉入岩浆, 使用一次末影喷涌',
projects: projects,
elite: true,
boss_level: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,],
unlock_level:[3, 3, 100, 300, 30, 3, 3, 3, 3, 3, 3, 30, 300, 3, 3, 3, 3, 3,],
 
副本_精英模式 = fal
副本_选项数量 = 10/
副本_名称 = '副本'
副本_描述 = ''//描
副本_星级 = []//星
副本_星级解锁 = 3
副本_boss等级 = []
副本_解锁等级 = []
*/
let copyInitial = (entity) => {

//entity.getRootData().putBoolean('load',true)
    
    
  //  entity.getRootData().getBoolean('load')
            //!load[entity.stringUuid]
        
        //!areData(entity, 'load')
//!areData(entity,'load')!areData(entity,'load')
       //= setData(entity,$Boolean,'load',true)
       // setData(entity,'boolean','load',true)
   
    if (entity.age<=5) {
    
     setData(entity,$List,"pos",{x:entity.blockX,y:entity.blockY+1,z:entity.blockZ})//初始化坐标
    
    }
    
    
    if (!getData(entity, 'boolean', 'copy_load')) {
        

        //中间量(自动)
        let 挑战状态 =initData(entity, 'int', 'condition',0)//需要更新客户端

        let 剩余时间 = initData(entity, 'int', 'time',0)//需要更新客户端
        
        let 挑战时间 =initData(entity, 'list', 'max_time',    [1000, 456, 45654, 5646, 565, 46, 566, 4, 4, 4, 456, 0]  )

      
        
            
            
      
     
        let 副本_精英模式 =initData(entity, 'boolean', 'elite',  true )

        let 副本_选项数量 =initData(entity, 'int', 'projects', 10 )

        let 副本_名称 =initData(entity, 'string', 'copy_name', 'boss名称' )

        let 副本_描述 =initData(entity, 'string', 'describe',   '目标')

        let 副本_解锁星级 =initData(entity, 'list', 'unlock_star', [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] )

        let 副本_boss等级 =initData(entity, 'list', 'boss_level',   [6, 60, 600, 68, 6, 6, 56, 56, 76, 45, 54] )

        let 副本_解锁等级 =initData(entity, 'list', 'unlock_level',  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,] )

        let 副本_注册名 =initData(entity, 'string', 'register_name',  'minecraft:villager' )

        let 范围 = initData(entity, 'int', 'radius', 50)
        
        let 战利品 = initData(entity, 'list', 'loot',
            {
                item: [
                    Item.of("acacia_fence_gate",1),
                    Item.of("advancednetherite:netherite_diamond_helmet",1),
                    Item.of("advancednetherite:netherite_gold_axe",1),
                    Item.of("advancednetherite:netherite_iron_axe",1),
                    Item.of("aether:cloud_staff",1),
                    Item.of("aether:cockatrice_spawn_egg",1),
                    
                ], count: [[1, 6], [3, 7], [0, 1]],
                repeat: [0, 0, 0, 1, 1, 2, 3],//<=  0表示可重复获得 1-3表示该星级可获得   无法在获得
                unlock: [0, 4,3,0,0,3]//解锁等级
        
            }
        
        )
        
        
        let 星级_条件 =initData(entity, 'list', 'star_rule', {
                name: 副本_名称,
                rule: {//data中的为该星级条件数据 default为默认是否达成 present为当前是否达成
                   time: {  default: 0, present: 1 ,data:{value:500,present:0}},
                   be_att: {  default: 0, present: 1 ,data:{value:10,present:0}},//data可加入类型限制
                   reaction: { default: 1, present: 0 ,data:{type:'冰冻',value:10,present:0}}
                }
            }  )

      
        let 背景 = initData(entity, 'string', 'background', 'kubejs:gui/copy/burning_arena.png')
        
        
        
        
  //中间量(玩家控制)
     //   let 当前难度 =initData(entity, 'int', 'difficulty',   [6, 60, 600, 68, 6, 6, 56, 56, 76, 45, 54] )

        //常量(数据)
     //  if (!副本_名称) {//副本名称
     //      setData(entity, 'string', 'copy_name', 'boss名称')
     //  }
  // let 星级_条件2 =initData(entity, 'list', 'star_rule2')

        // let 星级_条件3 =initData(entity, 'list', 'star_rule3')

   //  if (!副本_注册名) {//boss注册名
   //      setData(entity, 'string', 'register_name', 'minecraft:villager')
   //  }
//  let 状态切换冷却 =initData(entity, 'int', 'cooling_time1',)//需要更新客户端

      //  let 是否召唤成功 =initData(entity, 'boolean', 'is_summon')
   //  if (!副本_描述) {//目标描述
   //      setData(entity, 'string', 'describe', '目标')
   //  }

   //  if (!副本_boss等级) {//生成的boss等级
   //      setData(entity, 'list', 'boss_level', [6, 60, 600, 68, 6, 6, 56, 56, 76, 45, 54])
   //  }

  //    if (!副本_精英模式) {//是否精英模式
  //        setData(entity, 'boolean', 'elite', true)
  //    }

  //    if (!副本_解锁等级) {
  //        setData(entity, 'list', 'unlock_level', )
  //    }

  //    if (!副本_解锁星级) {
  //        setData(entity, 'list', 'unlock_star', )
  //    }

  //    if (!副本_选项数量) {//等级选项数量condition
  //        setData(entity, 'int', 'projects', 10)
  //    }

  //    if (!挑战状态) {//等级选项数量condition
  //        setData(entity, 'int', 'condition', 0)
  //    }
  //    if (!范围) {//等级选项数量condition
  //        setData(entity, 'int', 'radius', 20)
  //    }
  //   
  //   if (!剩余时间) {//等级选项数量condition
  //        setData(entity, 'int', 'time', 0)
  //    }
  //    if (!挑战时间) {//等级选项数量condition
  //        setData(entity, 'list', 'max_time',)
  //    }
////t不能存object数组(内含多种类型的数组)
  //    if (!星级_条件) {
  //        setData(entity, 'list', 'star_rule', {
  //            name: 副本_名称,
  //            rule: {//data中的为该星级条件数据 default为默认是否达成 present为当前是否达成
  //               time: {  default: 0, present: 1 ,data:{value:500,present:0}},
  //               be_att: {  default: 0, present: 1 ,data:{value:10,present:0}},
  //               reaction: { default: 1, present: 0 ,data:{type:'冰冻',value:10,present:0}}
  //            }
  //        })
  //    }

  //    if (!背景) {//目标描述
  //        setData(entity, 'string', 'background', 'kubejs:gui/copy/burning_arena.png')//默认
  //    }

  //setData(entity, $List, "tool", {
  //            {},
  //            
  //            
  //            })
  //    
        
        
        
        
      setData(entity, 'boolean', 'copy_load', true)
    }


}


    /*

star_rule 模板  存于副本

star_user_rule 玩家数据


        被动
        
      time  时间限制_<时间>
        
        
      be_att  受伤次数限制_<次数>
        
        
      be_effect  受附着层数限制_<类型>_<层数>
        
        
        受击飞限制_<时间>
        
        
        
        主动
        
        附着层数限制_<类型>_<层数>
        
        
      reaction  反应次数限制_<附着效果>_<层数>_<攻击效果>
        
        攻击头部占比_<百分比>_<当前>

         */







        //   if (!状态切换冷却) {//等级选项数量condition
        //       setData(entity, 'int', 'cooling_time1', 0)
        //   }

 
/** 
        // if (!星级_条件2) {
        //     setData(entity, 'list', 'star_rule2', { name: 'be_att' ,default:true})
        // }
        // if (!星级_条件3) {
        //     setData(entity, 'list', 'star_rule3', { name: 'reaction', default:false })
        // }
StartupEvents.registry('entity_type', event => {

    event.create('copy', 'entityjs:nonliving')
     
        .mobCategory('misc')
        .setRenderType("translucent")
        .sized(1, 1)
        .modelSize(1, 1)
        .updateInterval(3)
        .repositionEntityAfterLoad(true)
        .isPushable(false)
        .fireImmune(true)
        .saves(true)
        .setSummonable(true)

        .mobCategory('projectile')

        .addAnimationController('exampleController', 1, event => {

            return true;
        })
        .scaleModelForRender(context => {
            
            let { entity, widthScale, heightScale, poseStack, model, isReRender, partialTick, packedLight, packedOverlay } = context
           

        }).tick(entity => {

            entity.deltaMovement = new Vec3(0, 0, 0)

        })



})

*/