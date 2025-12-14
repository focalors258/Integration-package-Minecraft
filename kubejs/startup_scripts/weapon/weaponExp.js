


let exp = (event, upgrade, newUpgrade, quantity,exp) => {

    let ceiling;

   // let i = 0

    for (; quantity>0; quantity--) {



        if (!newUpgrade.nbt["level"] || newUpgrade.nbt["level"] == 0) {
            newUpgrade.nbt["level"] = 0
            ceiling = 50;
        } else if (newUpgrade.nbt["level"] == 1) {
            ceiling = 140
        } else if (newUpgrade.nbt["level"] >= 5 && (upgrade.getItem().id === 'minecraft:stone_sword' || upgrade.getItem().id === 'minecraft:wooden_sword' || upgrade.hasTag('spartanweaponry:wooden_weapons') || upgrade.hasTag('spartanweaponry:stone_weapons'))) {//最大等级<==============
            return quantity
        } else if (newUpgrade.nbt["level"] >= 10 && upgrade.hasTag('spartanweaponry:copper_weapons')) {//最大等级<==============
            return quantity;
       
        } else if (newUpgrade.nbt["level"] >= 20 && (upgrade.getItem().id === 'minecraft:iron_sword' || upgrade.hasTag('spartanweaponry:iron_weapons'))) {//最大等级<==============
            return quantity;
        } else if (newUpgrade.nbt["level"] >= 40 && (upgrade.hasTag('minecraft:diamond_weapons')|| upgrade.getItem().id === 'minecraft:diamond_sword') ){//最大等级<==============
           //console.log('e45gvvw') 
            return quantity;
        } else if (newUpgrade.nbt["level"] >= 80) {//最大等级<==============
            return quantity;
        } else {
            ceiling = newUpgrade.nbt["level"] * 80 + 60;
        }



        if (newUpgrade.nbt["levelprogress"]) { newUpgrade.nbt["levelprogress"] += exp; } else { newUpgrade.nbt["levelprogress"] = exp; }//每个物品增加的经验<============

        while (newUpgrade.nbt["levelprogress"] >= ceiling) {

            if (newUpgrade.nbt["level"] >= 5 && (upgrade.getItem().id === 'minecraft:stone_sword' || upgrade.getItem().id === 'minecraft:wooden_sword' || upgrade.hasTag('spartanweaponry:wooden_weapons') || upgrade.hasTag('spartanweaponry:stone_weapons'))) {//最大等级<==============
                return quantity;
            }

            if (newUpgrade.nbt["level"] >= 10 && upgrade.hasTag('spartanweaponry:copper_weapons')) {//最大等级<==============
                return quantity;;
            }
            if (newUpgrade.nbt["level"] >= 20 && (upgrade.getItem().id === 'minecraft:iron_sword' || upgrade.hasTag('spartanweaponry:iron_weapons'))) {//最大等级<==============
                return quantity;;
            }
            if (newUpgrade.nbt["level"] >= 40 && (upgrade.hasTag('minecraft:diamond_weapons')|| upgrade.getItem().id === 'minecraft:diamond_sword') ) {//最大等级<==============
                return quantity;;
            }
            if (newUpgrade.nbt["level"] >= 80) {//停止循环   继续事件
                return quantity;;
            }

            newUpgrade.nbt["level"]++;//提高一级

            newUpgrade.nbt["levelprogress"] -= ceiling;//减去升级前的exp上限

            if (!newUpgrade.nbt["level"] || newUpgrade.nbt["level"] == 0) {//更新exp上限
                newUpgrade.nbt["level"] = 0
                ceiling = 50;
            } else if (newUpgrade.nbt["level"] == 1) {
                ceiling = 140
            } else {
                ceiling = newUpgrade.nbt["level"] * 80 + 60;
            }

        }

    }


   



return 0

}



let exclude=(upgrade)=>{


    if (upgrade.nbt["level"] >= 5 && (upgrade.getItem().id === 'minecraft:stone_sword' || upgrade.getItem().id === 'minecraft:wooden_sword' || upgrade.hasTag('spartanweaponry:wooden_weapons') || upgrade.hasTag('spartanweaponry:stone_weapons'))) {//最大等级<==============
        return false;
    }

    if (upgrade.nbt["level"] >= 10 && upgrade.hasTag('spartanweaponry:copper_weapons')) {//最大等级<==============
        return false;
    }
    if (upgrade.nbt["level"] >= 20 && (upgrade.getItem().id === 'minecraft:iron_sword' || upgrade.hasTag('spartanweaponry:iron_weapons'))) {//最大等级<==============
        return false;
    }
    if (upgrade.nbt["level"] >= 40 &&  (upgrade.hasTag('minecraft:diamond_weapons')|| upgrade.getItem().id === 'minecraft:diamond_sword') ) {//最大等级<==============
        return false;
    }
    if (upgrade.nbt["level"] >= 80) {//停止循环   继续事件
        return false;
    }

return true

}

