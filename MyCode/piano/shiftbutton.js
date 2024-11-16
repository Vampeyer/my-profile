const  butinput = document.getElementById("butinput")
const buttawn = document.getElementById("butt-tawn")


window.addEventListener("keydown" , (e)=>{
    if (e.shiftKey == true){
        butinput.value = 1
    }

         window.addEventListener("keyup" ,(e)=>{
            if(e.shiftKey == false ){
        butinput.value = 0 
                                }
                } )
})       
  
