//import { useDialog } from "./aa.jss"

//priority:1080   
function Roll(x, y, height, width, count, maxLength, containerId, rollId, direction, isChoose) {//function类中不能再用function定义函数
//注意成员方法中的成员变量不能跟类型形参混淆
    this.x = x

    this.y = y

    this.height = height//单个高度

    this.width = width//单个宽度

    this.count = count//目录数量

    if (isChoose) this.rollBefore = 0//之前的选项

    this.oldMouseX = 0

    this.oldMouseY = 0

    this.direction = direction//横向 竖向

    if (!this.direction) this.direction = "vertical"



    this.containerId = containerId

    this.rollMouse = 0//鼠标现在的选项
    //Math.floor((MouseY - this.slidePos - 20 + 12.5) / this.height) //
    this.maxLength = maxLength//窗口呈现最大长度

    this.slidePos = 0//滑动坐标

    //tell( this.slidePos)

    this.setPos = (x, y) => {

        this.x = x

        this.y = y


    }

    this.flag = () => {//放在界面上时

        // tell(this.rollMouse)

        // tell(this.direction )
        let rollBefore
        if (typeof this.rollBefore == "number") {
            rollBefore = this.rollBefore
        } else {
            rollBefore = -9999999
        }//是否可选择

        // tell(this.buttonZone())


        if (this.rollMouse != rollBefore
            && this.rollMouse >= 0
            // && this.rollMouse >= 0//选项为0默认解锁
            && this.buttonZone()

            && this.rollMouse <= this.count - 1
        ) {
            return this.rollMouse
        } else {


            return null

        }

    }

    this.sliceScrol = (MouseScroll) => {//滚轮滑动
        let x = this.x
        let y = this.y

        //  let MouseScroll = //getMouseScroll()//滚轮

        //   tell(MouseScroll)

        if (newVirtualButton(x, y, x + width, y + height * (1 + this.count))) {

            this.slidePos += MouseScroll * 7.5

        }

    }

    this.sliceMouse = (MouseMove) => {//鼠标滑动

        if (this.buttonZone()) {

            this.slidePos += (MouseMove)

        }

    }

    this.click = () => {//点击
        if (Client.mouseHandler.mouseX == this.oldMouseX && Client.mouseHandler.mouseY == this.oldMouseY && mouseLeftEnd) {

            return true

        }

        return false


    }

    this.oldMouse = () => {//缓存

        this.oldMouseX = Client.mouseHandler.mouseX

        this.oldMouseY = Client.mouseHandler.mouseY
    }
    this.buttonZone = () => {//按键区域

        let x = this.x
        let y = this.y

        let length=maxLength
        
       

        if (this.direction == "vertical") {
            
            if (length == 0) length = Client.window.guiScaledHeight
            
            return newVirtualButton(x, y, width, length)

        } else if (this.direction == "horizontal") {

              if (length == 0) length = Client.window.guiScaledWidth
            
            return newVirtualButton(x, y, length, height)

        }
    }

    this.tick = () => {

        let x = this.x
        let y = this.y

        let length = this.maxLength//最大呈现长度缓存

        let singleLength = 0//Client.window.guiScale




        if (this.direction == "vertical") {

            this.rollMouse = Math.floor((MouseY - this.slidePos - y - 7.5) / this.height) //鼠标的选项

            singleLength = height

            if (this.maxLength == 0) {

                length = Client.window.guiScaledHeight

            }

        } else if (this.direction == "horizontal") {

            this.rollMouse = Math.floor((MouseX - this.slidePos - x) / this.width) //鼠标的选项

            singleLength = width

            if (this.maxLength == 0) {

                length = Client.window.guiScaledWidth

            }

        }

        // tell(this.rollMouse)
        //  this.slice()

        //目录边界
        let exceed_roll = 0

        let windowDiffer = this.count * singleLength - length//可移动的窗口长度

        if (windowDiffer < 0) {

            exceed_roll = this.slidePos// + ((副本_选项数量 * 50 - height) +副本_选项数量*50)//1420
            ///tell(exceed_roll)
        } else {

            exceed_roll = this.slidePos + ((this.count * singleLength - length))

        }

        // tell(rool.slidePos)

        if (this.slidePos > 0) {

            //   tell(this.slidePos)

            this.slidePos *= 0.95

            if (this.slidePos < 0.05) {

                this.slidePos *= 0


            }//this.slidePos = 10//减少过小计算


        } else if (this.slidePos != 0 && exceed_roll < 0) {

            this.slidePos -= (exceed_roll) * 0.05

            if (exceed_roll > -0.05) this.slidePos = -(exceed_roll - this.slidePos)//减少过小计算

        }
    }

    // RoolList[containerId] = {}
    //tell(rollId)
    if (RoolList[containerId] == undefined) RoolList[containerId] = {}//初始化

    RoolList[containerId][rollId] = this

}

//priority:1080  
const RoolList = []//Array.from({ length: 99 }, () => ({}))






