



let sameWeaponList = {

    "minecraft:iron_sword": "cataclysm:the_incinerator",
    "minecraft:diamond_sword": "cataclysm:the_incinerator",


    // "spartanweaponry:iron_rapier": "piaobo",
    // "spartanweaponry:stone_rapier": "piaobo",
    // "spartanweaponry:golden_rapier": "piaobo",
    // "spartanweaponry:diamond_rapier": "piaobo",
    // "spartanweaponry:netherite_rapier": "piaobo",
    // "spartanweaponry:wooden_rapier": "piaobo",



}


let getPlayerWeapon = () => {
    let item = Client.player.getItemBySlot($EquipmentSlot.MAINHAND)

    //  if (sameWeaponList[item.id]) item = Item.of(sameWeaponList[item.id], item.nbt)

    return item
}

let getWeaponStack = () => {


    return Client.player.getWeaponStack(getPlayerWeapon().id)


}




let spartanWeaponrySuit = () => {










}


var spartanWeaponList = {

    halberd: {
        toughness_cut: 25, // 削韧：中高（长柄破防优势）
        stable: 70,        // 稳定性：高（长柄攻击节奏稳）
        max_toughness: 35, // 自身韧性：中高
        parry: 25,         // 格挡：中（长柄可架挡）
        cost: 4            // 成本：中
    },

    // 匕首（敏捷爆发型）
    dagger: {
        toughness_cut: 18, // 削韧：中（快速戳刺破韧）
        stable: 85,        // 稳定性：极高（攻速快，伤害浮动小）
        max_toughness: 15, // 自身韧性：低（身板脆）
        parry: 30,         // 格挡：中高（短兵快速格挡）
        cost: 3,           // 成本：低

    },

    // 格斗匕首（格挡专精型）
    parring_dagger: {
        toughness_cut: 10, // 削韧：低（侧重防御）
        stable: 90,        // 稳定性：极高（精准格挡）
        max_toughness: 20, // 自身韧性：中（格挡补偿）
        parry: 90,         // 格挡：满值（专精格挡）
        cost: 4,           // 成本：中

    },

    // 武士刀（敏捷高伤型）
    katana: {
        toughness_cut: 22, // 削韧：中（居合破韧）
        stable: 88,        // 稳定性：极高（太刀斩击精准）
        max_toughness: 25, // 自身韧性：中
        parry: 40,         // 格挡：中高（太刀架刀）
        cost: 4,           // 成本：中

    },

    // 大剑（重武器高伤型）
    greatsword: {
        toughness_cut: 40, // 削韧：满值（重劈破韧）
        stable: 15,        // 稳定性：低（重攻击伤害浮动大）
        max_toughness: 50, // 自身韧性：满值（重武器抗破防）
        parry: 10,         // 格挡：低（重武器难格挡）
        cost: 5,           // 成本：高

    },

    // 锤（均衡重武器）
    battle_hammer: {
        toughness_cut: 32, // 削韧：高（钝器破韧）
        stable: 45,        // 稳定性：中（比大剑稳）
        max_toughness: 40, // 自身韧性：高
        parry: 15,         // 格挡：低
        cost: 4,           // 成本：中

    },

    // 战锤（重型破甲专精）
    warhammer: {
        toughness_cut: 38, // 削韧：极高（接近满值）
        stable: 10,        // 稳定性：极低（超重型攻击）
        max_toughness: 48, // 自身韧性：极高
        parry: 5,          // 格挡：极低
        cost: 5,           // 成本：高

    },

    // 长枪（中距离精准型）
    spear: {
        toughness_cut: 15, // 削韧：中（突刺破韧）
        stable: 80,        // 稳定性：高（长枪突刺精准）
        max_toughness: 30, // 自身韧性：中高
        parry: 20,         // 格挡：中
        cost: 3,           // 成本：低





    },

    // 长矛（超远距离压制型）
    pike: {
        toughness_cut: 12, // 削韧：中低（侧重距离）
        stable: 82,        // 稳定性：高（长矛穿刺稳定）
        max_toughness: 32, // 自身韧性：中高
        parry: 18,         // 格挡：中
        cost: 3,           // 成本：低


        skill0: {

            "spartanweaponry:netherite": "lupa",//换成别的
        },

        skill1: {
            element: "air",
            trail: "air",
            "spartanweaponry:netherite": "lupa",
            texture: "cataclysm:textures/gui/skill_icon/heavy_slash.png",
            auto: false,
            type: {
                
                 last: {
                    stage: 3,
                    time: 80
                },
                
                time: 30,
            }
        },
        skill2: {
            element: "air",
            trail: "air",
            auto: false,
            "spartanweaponry:netherite": "lupa",
            type: {//释放条件
                last: {
                    stage: 2,
                    time: 80
                },
                time: 40,//时间冷却
            }
        },






    },

    // 骑枪（冲锋爆发型）
    lance: {
        toughness_cut: 35, // 削韧：极高（冲锋破韧）
        stable: 20,        // 稳定性：低（冲锋伤害浮动大）
        max_toughness: 38, // 自身韧性：高
        parry: 0,          // 格挡：无（骑战无法格挡）
        cost: 4,           // 成本：中

    },

    // 长弓（远程精准型）
    longbow: {
        toughness_cut: 18, // 削韧：中（箭矢破韧）
        stable: 75,        // 稳定性：高（蓄力箭精准）
        max_toughness: 12, // 自身韧性：低（远程脆皮）
        parry: 0,          // 格挡：无
        cost: 4,           // 成本：中

    },

    // 长剑（均衡通用型）
    longsword: {
        toughness_cut: 18, // 削韧：中（均衡）
        stable: 90,        // 稳定性：极高（泛用性强）
        max_toughness: 28, // 自身韧性：中
        parry: 35,         // 格挡：中高
        cost: 3,           // 成本：低

    },


    // 战斧（重武器攻速型）
    battleaxe: {
        toughness_cut: 30, // 削韧：高（斧刃破韧）
        stable: 30,        // 稳定性：中低（比大剑快，浮动小）
        max_toughness: 42, // 自身韧性：高
        parry: 12,         // 格挡：低
        cost: 5,           // 成本：高

    },

    // 钉头锤（破甲+眩晕专精）
    flanged_mace: {
        toughness_cut: 28, // 削韧：高（钝器破韧）
        stable: 40,        // 稳定性：中
        max_toughness: 40, // 自身韧性：高
        parry: 8,          // 格挡：低
        cost: 4,           // 成本：中

    },

    // 柄刀（长柄敏捷型）
    glaive: {
        toughness_cut: 22, // 削韧：中高（斩刺结合）
        stable: 78,        // 稳定性：高（长柄敏捷）
        max_toughness: 33, // 自身韧性：中高
        parry: 28,         // 格挡：中高
        cost: 4,           // 成本：中
        skill0: {
            animation: "piaobo",//换成别的
        },
        skill1: {
            element: "air",
            trail: "air",
            animation: "piaobo",
            texture: "cataclysm:textures/gui/skill_icon/heavy_slash.png",
            auto: false,
            type: {
                time: 300,
            }
        },
        skill2: {
            element: "air",
            trail: "air",
            auto: false,
            animation: "piaobo",
            type: {//释放条件
                last: {
                    stage: 2,
                    time: 80
                },
                time: 400,//时间冷却
            }
        },



    },

    // 长棍（防御+控场专精）
    quarterstaff: {
        toughness_cut: 8,  // 削韧：低（侧重防御）
        stable: 98,        // 稳定性：接近满值（棍法精准）
        max_toughness: 45, // 自身韧性：极高
        parry: 90,         // 格挡：满值（棍法格挡优势）
        cost: 3,           // 成本：低

    },

    // 镰刀（流血+收割型）
    scythe: {
        toughness_cut: 20, // 削韧：中（镰刀破韧）
        stable: 25,        // 稳定性：低（大范围攻击浮动大）
        max_toughness: 18, // 自身韧性：中低
        parry: 15,         // 格挡：中低
        cost: 3,           // 成本：低

    },

    // 重弩（远程破甲专精）
    heavy_crossbow: {
        toughness_cut: 38, // 削韧：极高（重弩箭破韧）
        stable: 10,        // 稳定性：极低（蓄力慢，伤害浮动大）
        max_toughness: 10, // 自身韧性：低（远程脆皮）
        parry: 0,          // 格挡：无
        cost: 5,           // 成本：高

    },

    // 飞刀（速射远程）
    throwing_knife: {
        toughness_cut: 8,  // 削韧：低（速射弥补）
        stable: 15,        // 稳定性：低（飞刀伤害浮动）
        max_toughness: 10, // 自身韧性：低
        parry: 0,          // 格挡：无
        cost: 3,           // 成本：低

    },



    // 标枪（中程投掷均衡型）
    javelin: {
        toughness_cut: 15, // 削韧：中（投掷破韧）
        stable: 60,        // 稳定性：中高（标枪投掷精准）
        max_toughness: 35, // 自身韧性：中高
        parry: 20,         // 格挡：中
        cost: 3            // 成本：低
    },

    // 回旋镖（弹射远程）
    boomerang: {
        toughness_cut: 10, // 削韧：中低（弹射弥补）
        stable: 20,        // 稳定性：低（弹射伤害浮动）
        max_toughness: 12, // 自身韧性：低
        parry: 0,          // 格挡：无
        cost: 3,           // 成本：低

    },




    tomahawk: {//斧头
        toughness_cut: 38, // 削韧：极高（投掷爆发）
        stable: 10,        // 稳定性：极低（投掷伤害浮动大）
        max_toughness: 15, // 自身韧性：低
        parry: 0,          // 格挡：无
        cost: 4,            // 成本：中




    },




    rapier: {//迅捷剑
        "toughness_cut": 10,
        "stable": 60,
        "max_toughness": 15,
        "parry": 20,
        "cost": 4,

    },


















}









let weaponList = {




    "cataclysm:the_incinerator": {//大剑
        "toughness_cut": 25,//削韧
        "stable": 80,//稳定性
        "max_toughness": 40,//最大韧性
        "parry": 12,//格挡能力
        "cost": 8,//负荷值

        skill1: {

            texture: "cataclysm:textures/gui/skill_icon/heavy_slash.png",

            auto: false,
            type: {
                time: 400,
                last: {//持续技能
                    time: 40,//持续时间
                    stage: 4//段数后冷却或清空能量
                },
            }

        },
        skill2: {
            auto: false,
            type: {//释放条件

                last: {//持续技能
                    time: 500,//持续时间
                    stage: 9//段数后冷却或清空能量
                },
                color: [1, 0.3, 0.3],//技能颜色
                time: 600,//时间冷却
                save: 120, //能量积累
                effect: null
            }
        },
        skill3: {},

        skill4: {},

        skill5: {}










    },

    "minecraft:diamond_sword": {//单手剑
        "toughness_cut": 10,
        "stable": 60,
        "max_toughness": 15,
        "parry": 10,
        "cost": 4,


        skill1: {

            texture: "cataclysm:textures/gui/skill_icon/heavy_slash.png",

            auto: false,
            type: {
                time: 50,
                last: {//持续技能
                    time: 50,//持续时间
                    stage: 4//段数后冷却或清空能量
                },
            }

        },
        skill2: {
            auto: false,
            type: {//释放条件

                last: {//持续技能
                    time: 500,//持续时间
                    stage: 9//段数后冷却或清空能量
                },
                color: [1, 0.15, 0],//技能颜色
                time: 60,//时间冷却
                save: 120, //能量积累
                effect: null
            }
        },
        skill3: {},

        skill4: {},

        skill5: {}







    },



}




let spartanKind = [//种类
    "halberd",
    "dagger",
    "parring_dagger",
    "katana",
    "greatsword",
    "battle_hammer",
    "warhammer",
    "spear",
    "pike",
    "lance",
    "longbow",
    "longsword",
    "rapier",
    "battleaxe",
    "flanged_mace",
    "glaive",
    "quarterstaff",
    "scythe",
    "heavy_crossbow",
    "throwing_knife",
    "tomahawk",
    "javelin",
    "boomerang"
]


let spartanSuit = [
    "spartanweaponry:wooden",
    "spartanweaponry:copper",
    "spartanweaponry:iron",
    "spartanweaponry:stone",
    "spartanweaponry:golden",
    "spartanweaponry:diamond",//主世界

    "spartantwilight:ironwood",
    "spartantwilight:fiery",
    "spartantwilight:steeleaf",
    "spartantwilight:knightmetal",//暮色
    "spartanfire:desert_myrmex_chitin",
    "spartanfire:desert_myrmex_stinger",
    "spartanfire:jungle_myrmex_stinger",
    "spartanfire:jungle_myrmex_chitin",//深园
    "spartanweaponry:netherite",//地狱

    //换动作

    "spartanskies:horizonite",
    "spartanskies:charoite",
    "spartanskies:diopside",
    "spartanskies:aquite",
    "spartanskies:pyrope",
    "spartanfire:dragon_bone",
    "spartanfire:flamed_dragon_bone",
    "spartanfire:iced_dragon_bone",
    "spartanfire:lightning_dragon_bone",//蔚蓝

    "spartanfire:fire_dragonsteel",
    "spartanfire:ice_dragonsteel",
    "spartanfire:lightning_dragonsteel",

]


let spartanSuitIndex = 0

let suitLevelCache = {}

while (spartanSuit[spartanSuitIndex]) {
    spartanSuitIndex++



    getKeyAndValue(spartanWeaponList).forEach(([k, v], i) => {



        let suitName = spartanSuit[spartanSuitIndex]


        let weaponName = suitName + "_" + k

        //let v1 = {}

        weaponList[weaponName] = JSON.parse(JSON.stringify(v))//复制

        if (weaponList[weaponName] && weaponList[weaponName]["skill0"]) {


            //  tell(weaponName + "    " + weaponList[weaponName]["skill0"]["animation"])
        }
        for (let j = 0; j <= MaxSkill; j++) {

            // tell(4)

            //    tell(v["skill" + j])

            if (v["skill" + j]) {

                let suitSkill = v["skill" + j][suitName]

                if (!suitSkill) suitSkill = suitLevelCache[k]
                //   tell(weaponName + "  " + spartanSuitIndex)
                if (suitSkill) {
                    //  tell(spartanSuit.indexOf(suitName) + "   " + spartanSuitIndex)
                   // tell(suitSkill)

                    if (spartanSuit.indexOf(suitName) >= spartanSuitIndex) {


                        weaponList[weaponName]["skill" + j]["animation"] = suitSkill
                        suitLevelCache[k] = suitSkill

                        //tell(getKeyAndValue( weaponList[weaponName]))
                    }

                }

            }



        }


    })
}


//tell(weaponList["spartanfire:fire_dragonsteel_rapier"]["toughness_cut"])



















let initWeapon = (item) => {

}


