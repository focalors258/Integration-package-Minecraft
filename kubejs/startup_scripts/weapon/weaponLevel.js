

ForgeEvents.onEvent('net.minecraftforge.event.entity.player.AnvilRepairEvent', event => {

        event.entity.paint({

                exp_bar1: {

                        remove: true
                }
                ,
                exp_bar2: {

                        remove: true
                }
        })//铁砧升级完成事件





        // event.
})



/*
LycheeEvents.customCondition('example_always_true_condition', event => {
        //event.data.

})
*/
ForgeEvents.onEvent('net.minecraftforge.event.AnvilUpdateEvent', event => {//添加图形化升级界面  允许一次升级



        //console.log(event.player.name)
        //event.



        let upgrade = event.getLeft();
        let material = event.getRight();


        console.log(upgrade + '    ' + material + '    ' + event.isCanceled())


        let quantity = event.getRight().count

        //console.log(quantity)








        if (!upgrade.nbt && !upgrade.hasNBT["level"] && !upgrade.hasTag('forge:weapons') && !exclude(upgrade)) return
        /*
  {      event.player.paint({

                exp_bar1: {
 
                        remove: true
                }
                ,
                exp_bar2: {
 
                        remove: true
                }
        })//铁砧升级完成
}

event.player.paint({

        exp_bar1: {
                type: 'rectangle',
                x: -35,
                y: -14,
                alignX: 'center',
                alignY: 'center',
                w: 50,
                h: 9,
                draw: 'gui',
 
                scale: 0.5,
                texture: 'kubejs:gui/exp_bar1.png',
                remove: false
        }
        , exp_bar2: {
                type: 'rectangle',
                x: 12,
                y: 10,
                alignX: 'center',
                alignY: 'center',
                w: 44,
                h: 5,
                draw: 'gui',
 
                scale: 0.5,
                texture: 'kubejs:gui/exp_bar2.png',
                remove: false
        }
 
        , exp_bar3: {
                type: 'rectangle',
                x: 12,
                y: 10,
                alignX: 'center',
                alignY: 'center',
                w: 44,
                h: 5,
                draw: 'gui',
 
                scale: 0.5,
                texture: 'kubejs:gui/exp_bar3.png',
                remove: false
        }
 
        ,
        exp_bar4: {
                type: 'text',
                x: 43,
                y: 1,
                alignX: 'center',
                alignY: 'center',
                w: 20,
                h: 20,
                //mouseX:100,
                //color: color(35,634,24,2),
                draw: 'gui',
                scale: 0.8,
                text: '右键可到达此处',
                shadow: true,
                remove: false
        }
 
 
 
 
 
})
*/
        //添加  有几率爆炸 受伤  丢弃物品 召唤怪物 生成方块

        if ((upgrade.hasTag('forge:weapons') || upgrade.hasTag('forge:tools/swords')) && material.getItem().id === 'theabyss:aurel_crystal_ore') {//upgrade.isDamaged()&&    检测耐久度是否有损害//材料改成紫水晶
                //tag标签无法返回后比较? 只能将目标值作为形参传递过去
                //upgrade.getItem().id==="spartanfire:lightning_dragon_bone_tomahawk"||upgrade.getItem().id==='minecraft:iron_sword'


                let newUpgrade = upgrade.copy();//克隆对象

                //newUpgrade.setDamageValue(newUpgrade.nbt["Damage"]);//示例 设定耐久损耗了10
                let remain = exp(event, upgrade, newUpgrade, quantity, 100)




                event.setMaterialCost(quantity - remain)//getRight().count=10   //event.getRight().

                //console.log("剩余" + remain)


                event.setCost(5);//设定消耗10经验
                event.setOutput(newUpgrade);//输出的物品

        }


        if ((upgrade.hasTag('forge:weapons') || upgrade.hasTag('forge:tools/swords')) && material.getItem().id === 'theabyss:frost_crystal_ore') {//upgrade.isDamaged()&&    检测耐久度是否有损害//材料改成紫水晶
                //tag标签无法返回后比较? 只能将目标值作为形参传递过去
                //upgrade.getItem().id==="spartanfire:lightning_dragon_bone_tomahawk"||upgrade.getItem().id==='minecraft:iron_sword'


                let newUpgrade = upgrade.copy();//克隆对象


                let remain = exp(event, upgrade, newUpgrade, quantity, 900)


                event.setMaterialCost(quantity - remain)


                event.setCost(10);//设定消耗10经验

                event.setOutput(newUpgrade);//输出的物品

        }


        if ((upgrade.hasTag('forge:weapons') || upgrade.hasTag('forge:tools/swords')) && material.getItem().id === 'theabyss:caverna_crystal_ore') {//upgrade.isDamaged()&&    检测耐久度是否有损害
                //tag标签无法返回后比较? 只能将目标值作为形参传递过去
                //upgrade.getItem().id==="spartanfire:lightning_dragon_bone_tomahawk"||upgrade.getItem().id==='minecraft:iron_sword'


                let newUpgrade = upgrade.copy();//克隆对象

                //newUpgrade.setDamageValue(newUpgrade.nbt["Damage"]);//示例 设定耐久损耗了10

                let remain = exp(event, upgrade, newUpgrade, quantity, 8100)


                event.setMaterialCost(quantity - remain)

                event.setCost(5);//设定消耗10经验

                event.setOutput(newUpgrade);//输出的物品

        }


        if ((upgrade.hasTag('forge:weapons') || upgrade.hasTag('forge:tools/swords')) && material.getItem().id === 'theabyss:ender_crystal_ore') {//upgrade.isDamaged()&&    检测耐久度是否有损害
                //tag标签无法返回后比较? 只能将目标值作为形参传递过去

                //upgrade.getItem().id==="spartanfire:lightning_dragon_bone_tomahawk"||upgrade.getItem().id==='minecraft:iron_sword'


                let newUpgrade = upgrade.copy();//克隆对象

                //newUpgrade.setDamageValue(newUpgrade.nbt["Damage"]);//示例 设定耐久损耗了10

                //末影水晶  有概率升级


                let remain = exp(event, upgrade, newUpgrade, quantity, Math.random() * 3600)


                event.setMaterialCost(quantity - remain)

                event.setCost(5);//设定消耗10经验

                event.setOutput(newUpgrade);//输出的物品

        }

        if ((upgrade.hasTag('forge:weapons') || upgrade.hasTag('forge:tools/swords')) && material.getItem().id === 'theabyss:warped_crystal_ore') {//upgrade.isDamaged()&&    检测耐久度是否有损害
                //tag标签无法返回后比较? 只能将目标值作为形参传递过去

                //upgrade.getItem().id==="spartanfire:lightning_dragon_bone_tomahawk"||upgrade.getItem().id==='minecraft:iron_sword'

                //诡异水晶  有概率损害武器

                let newUpgrade = upgrade.copy();//克隆对象

                //newUpgrade.setDamageValue(newUpgrade.nbt["Damage"]);//示例 设定耐久损耗了10

                //末影水晶  有概率升级


                let remain = exp(event, upgrade, newUpgrade, quantity, 13500)


                event.setMaterialCost(quantity - remain)

                event.setCost(5);//设定消耗10经验

                newUpgrade.nbt['Damage'] += newUpgrade.maxDamage * (Math.random() * 0.2 + 0.3)

                event.setOutput(newUpgrade);//输出的物品newUpgrade

        }














































})

//if(!level){ceiling =50;}else if(level==1){ceiling =140;}else{ceiling =level*80+60;}//升级前的exp上限


/*
if(newUpgrade.nbt["level"]<=79){//最大等级

}else if(newUpgrade.nbt["level"]==80){//停止循环   继续事件
       // break;
}else{//return;}// 停止整个事件
*/



//if(newUpgrade.nbt["levelprogress"]>=ceiling){}

//let ceiling =   level==1?   level*80+60 :level*80+50 ;
//if(!level){}else if(level==1){ ;}else{}//计算exp上限



//if(newUpgrade.nbt["level"]>=10&&newUpgrade.nbt["level"]){return;}




//newUpgrade.nbt["levelprogress"] = (int)(newUpgrade.nbt["levelprogress"]);