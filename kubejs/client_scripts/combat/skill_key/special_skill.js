





let skillTick = (player) => {

    let item = player.getItemInHand($InteractionHand.MAIN_HAND)


    let weapon = player.getWeaponStack()
    if (weapon && player.age % 4 == 0) {



        for (let i = 0; i <= 4; i++) {

            if (!skillKeyList["skill" + (i + 1)]) continue

            let skillName = "skill" + (i + 1)


            if (weaponList[item.id][skillName] && weaponList[item.id][skillName]["type"]) {
                let type = weaponList[item.id][skillName]["type"]


                //   tell(  weapon.data.getFloat(skillName + "_last_time")-Dates.tickCount)
                //   tell(weapon.data.getBoolean(skillName + "_last"))

                //  if (skillName == "skill1") tell(weapon.data.getBoolean(skillName + "_last"))
                if (type["last"] &&
                    weapon.data.getBoolean(skillName + "_last") &&
                    Dates.tickCount > weapon.data.getInt(skillName + "_last_time")) {

                    //   setSkillMana(weapon, skillName)
                    //已在按键触发清除能量
                    setSkillCool(weapon, skillName)

                    weapon.data.putBoolean(skillName + "_last", false)
                    weapon.updateData()
                }
            }


        }

    }













}

let press_skill = (skillName, item) => {


    if (!(skillList[item] && skillList[item][skillName])) {

        if (weaponList[item] && weaponList[item][skillName] && weaponList[item][skillName]["animation"]) item = weaponList[item][skillName]["animation"]

    }

    if (Client.player.animationEntity.isStageCool()) {
        Client.player.sendData("press_" + skillName, { weapon: item })
    }
    if (skillList[item] && skillList[item][skillName]) {
        Client.player.playAnimation(true,skillList[item][skillName].animation);
        Client.player.mainTick(skillList[item][skillName].tick)
    }




}

let skill_mechanism = (event, weapon, skillName) => {


    if (!weapon) return


    let item = weapon.item

    if (!(skillKeyList[skillName] instanceof $KeyMapping)) return



    if (skillKeyList[skillName].getKey().getValue() == event.key && weaponList[item.id][skillName]) {

        let type = weaponList[item.id][skillName]["type"]

        let trigger = true
        //tell(weapon.data.getInt(skillName + "_cool")-Dates.tickCount)
        if (weapon.data.contains(skillName + "_cool")) {
            if (weapon.data.getInt(skillName + "_cool") >= Dates.tickCount) {
                trigger = false
            }
        }

        if (weapon.data.contains(skillName + "_mana")) {


            //  tell(weapon.data.getFloat(skillName + "_mana"))
            if (weapon.data.getFloat(skillName + "_mana") < weaponList[item.id][skillName]["type"]["save"]) {

                if (!type["last"]) {

                    trigger = false


                } else if (!weapon.data.getBoolean(skillName + "_last")) {

                    trigger = false

                }



            }

        }

        if (trigger && Client.player.animationEntity.isStageCool()) {


            if (sameWeaponList[item.id]) {

                press_skill(skillName, sameWeaponList[item.id])

            } else {

                press_skill(skillName, item.id)


            }

            //tell(Client.player.getWeaponStack().getToughnessValue())


            if (!type["last"] || !weapon.data.getBoolean(skillName + "_last")) setSkillMana(weapon, skillName)

            if (type["last"]) {
                //tell( weapon.player.animationEntity.stage )
                if (weapon.data.getBoolean(skillName + "_last") &&
                    weapon.player.animationEntity.stage >= type["last"]["stage"] - 1) {

                    // setSkillMana(weapon, skillName)

                    setSkillCool(weapon, skillName)

                    weapon.data.putBoolean(skillName + "_last", false)
                } else {
                    //   tell(weapon.data.getInt(skillName + "_last_time"))
                    weapon.data.putBoolean(skillName + "_last", true)
                    weapon.data.putInt(skillName + "_last_time", Dates.tickCount + type["last"]["time"])
                    //  tell(weapon.data.getInt(skillName + "_last_time"))
                    //tell(type["last"]["time"])
                }
                weapon.updateData()
            } else {

                setSkillCool(weapon, skillName)
            }


            //  if (weapon.data.contains(skillName + "_cool")) weapon.data.putInt(skillName + "_cool", Dates.tickCount + weaponList[item.id][skillName]["type"]["time"])

            // if (weapon.data.contains(skillName + "_mana")) weapon.data.putFloat(skillName + "_mana", 0)
            //  weapon.updateData()


            // tell( skillList[item.id])


        }

    }


}


let getLastSkillTime = (player, itemid, skillName) => {

    let time = player.getWeaponStack(itemid).getData().getInt(skillName + "_last_time") - Dates.tickCount
    //  let data = weaponList[itemid][skillName]
    return time > 0 ? time : 0

}










function setSkillMana(weapon, skillName) {

    //    let weapon = player.getWeaponStack(item)
    if (weapon) {

        weapon.data.putFloat(skillName + "_mana", 0)
        weapon.updateData()
    }


}

function setSkillManas(player, item, skillName) {

    let weapon = player.getWeaponStack(item)
    if (weapon) {

       weapon.data.putFloat(skillName + "_mana", 0)
        weapon.updateData()
    }


}
function setSkillCool(weapon, skillName) {


//tell( weaponList[weapon.itemId][skillName]["type"]["time"])

    //  let weapon = player.getWeaponStack(item)
    if (weapon) {

       weapon.data.putInt(skillName + "_cool", Dates.tickCount + weaponList[weapon.itemId][skillName]["type"]["time"])
        weapon.updateData()

    }
//tell(weapon.data.contains(skillName + "_cool"))
}

function setSkillCools(player, item, skillName) {

    let weapon = player.getWeaponStack(item)
    if (weapon) {

        weapon.data.putInt(skillName + "_cool", Dates.tickCount + weaponList[item][skillName]["type"]["time"])
        weapon.updateData()

    }

}

