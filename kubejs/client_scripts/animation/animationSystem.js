let animationList = {}

let presentAnimation = null

function guiAnimation(name, tick, data) {

    this.name = name

    this.oTick = tick
    this.data = data
    this.tick = tick

    animationList[$uuid.randomUUID()] = this
}


let guiAnimationTick = () => {

    if (animationList) { } 
        getKeyAndValue(animationList).forEach(([uuid, animation], index) => {


            if (index == 0 && !Client.paused) {
                //tell(animation.tick)

                if (animation.tick == 0||animationList.length > 10) {
                    
                    presentAnimation = null
                    
                    delete animationList[uuid]
 
                    return
                }


                animation.oTick = animation.tick

              //  tell(animation.tick)

                if (animationList.length > 5) {

                    animation.tick = Math.max(animation.tick - 3, 0)

                } else {

                    animation.tick--

                }
                
                presentAnimation = animation

            }



        })
   




}







