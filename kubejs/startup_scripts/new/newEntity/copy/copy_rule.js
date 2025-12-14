let getCopyByBoss = (entity) => {

    if (entity.isLiving() && areData(entity, 'copy_host')) {

        return entity.level.getEntity(getData(entity, $String, 'copy_host'))

    } else {

        return false

    }
}

let reaction_star_rule = (player, event) => {




    copyRuleEvent(player, (type, rule) => {

        if (type == 'reaction' && event.reaction == rule.data.type) {

            let reaction = player.getRootData()['star_user_rule']['rule'][type]

            if (rule.data.value > rule.data.present) {

                reaction['data']['present']++



            }
            if (rule.data.value <=  reaction['data']['present']&& reaction['present'] != reaction['default']) {
                //使该星级当前值为完成(已达成)值
                reaction['present'] = reaction['default']

                player.sendData('acquire_star_sound')

            }
        }
    })


}

let be_att_star_rule = (player, event) => {
//tell(3534)
    if (player.isPlayer()) {

        copyRuleEvent(player, (type, rule) => {

            if (type == 'be_att') {
                let be_att = player.getRootData()['star_user_rule']['rule'][type]//注意 复制出来的

                let damage_type=false
                
                if (be_att['data']['type'] == event.source.type().msgId()) {//判断类型
                damage_type=true
                }
                
                if (rule.data.value > rule.data.present&&damage_type) {

                    be_att['data']['present']++

                }

//tell(rule.data.value <= rule.data.present && be_att['present'] != be_att['default'])
                if (rule.data.value <= be_att['data']['present'] && be_att['present'] != be_att['default']) {

                    be_att['present'] = be_att['default']

                    player.sendData('acquire_star_sound')

                }
            }

        })
    }


}


let att_star_rule = (player, entity) => {

    if (player.isPlayer() && !entity.isPlayer()) {

        copyRuleEvent(player, (type, rule) => {

            if (type == 'att') {
                let att = player.getRootData()['star_user_rule']['rule'][type]

                if (rule.data.value > rule.data.present) {

                    att['data']['present']++

                    //tell(att['present'] != att['default'])


                }
                if (rule.data.value <= att['data']['present'] && att['present'] != att['default']) {

                    att['present'] = att['default']

                    player.sendData('acquire_star_sound')

                }
            }

        })
    }


}




let time_star_rule = (player) => {


    copyRuleEvent(player, (type, rule) => {

        if (type == 'time') {
            let time = player.getRootData()['star_user_rule']['rule'][type]

            if (rule.data.value > rule.data.present) {

                time['data']['present']++

            }
            if (rule.data.value <= time['data']['present']&& time['present'] != time['default']) {

                time['present'] = time['default']

                player.sendData('acquire_star_sound')

            }
        }

    })









}


















