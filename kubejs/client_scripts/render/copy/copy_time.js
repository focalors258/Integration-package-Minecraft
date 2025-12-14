let copy_time = (event,width,height) => {





// if (Animation.copyBeginsAnimation>0) {//倒计时动画
//    
//        Animation.copyBeginsAnimation -= Math.min(Animation.copyBeginsAnimation, DPF)
//        
//  
//        
//           event.drawString(Math.floor(Animation.copyBeginsAnimation),width,height-100,getColor(255,255,255,255))
//        
//        
//        
//        
//        
//        
//    }
    
  // Client.player.tell(副本_condition)
 
     
    if (recent_copy&&copy_rangeUpdate > 0&&副本_condition==1&&Animation.copyBeginsAnimation==0) {//显示时间
    
        event.pushPose()
        event.poseStack.translate(0,0,1000)
        
         //event.poseStack.scale(1.5,1.5,0)
        
     // Client.player.tell(   Object.entries(星级_条件.rule)) 
        let index = 0
        renderTextrue(event,'kubejs:gui/copy_run.png',(2*width)-100,144,0,0.4,-42.5,0, 512, 512, 0, 37, 278, 100)//任务栏
       
        renderTextrue(event, 'kubejs:gui/copy_run.png', width - 8, 58.5, 0, 0.5, -42.5, 0, 512, 512, 70, 0, 95, 27)  //倒计时
        
        //                                v数组v
        getKeyAndValue(星级_条件.rule).forEach(([type,rule],index)=>{
        
       // Client.player.tell(  value.value )
        
         //  Client.player.tell( starDescribe[type](rule.data))
            
        renderText(event,starDescribe[type](rule.data),0.7,0.7,(2*width)-100,148.5+index*13,getColor(150,150,150,255,),90)
            
            if(rule.present==1)renderTextrue(event,'kubejs:gui/copy_run.png',(2*width)-94.75,145.75+index*13,0,0.4,-42.5,0,512, 512, 0, 0, 25, 25)
        
        })
        
        
    
        
        
         
        
        let time
   
        if (副本_max_time > 0) {
        
        time=getTimeFormat((副本_max_time-副本_time)/4)
           
         let color
            
            if ((副本_max_time-副本_time) < 4*20) {
                
                let move=(Math.cos(2*PI*(Client.player.age%20/20))+1.2)/2
                
                color = getColor(185, 185*move, 185*move, 255)
            } else {
            
             color = getColor(185, 185, 185, 255)
            }
            
            
        event.drawString(time,width-0.5*getTextWidth(time),61,color)
        
        
        } else {
        
        time=getTimeFormat(副本_time/4)
        
         event.drawString(time,width-0.5*getTextWidth(time),61,getColor( 185,185,185,255))
        
        
        }
        
    event.popPose()
    
        
    }




















}