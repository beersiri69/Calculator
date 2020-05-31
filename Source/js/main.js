/* -------------------------------------------------------------------------- */
/*                                    Inint                                   */
/* -------------------------------------------------------------------------- */

var Displaytxt;
var btn=[];
var val_1 = 0;
var val_2 = 0;
var shw = 0;
var input = "x";
var display;  
display = document.getElementById("Displaytxt");

/* -------------------------------------------------------------------------- */
/*                                  Function                                  */
/* -------------------------------------------------------------------------- */


/* --------------------------------- Display -------------------------------- */

function Inputdisplay(){
    if(display.innerHTML !== "Welcome"){    
        shw += input     
    }
    else{       
        shw = input + ""     
    }    
    display.innerHTML = shw               
}


/* -------------------------------------------------------------------------- */
/*                                    Main                                    */
/* -------------------------------------------------------------------------- */


/* --------------------------------- 9 Digit -------------------------------- */

for (var i=0;i<9;i++){
    id = i+1;    
    btn[i] = document.getElementById("num"+id); 
   
    btn[i].addEventListener("click",function(){
        input = this.innerHTML;
        console.log("input:"+input)
        Inputdisplay();
    });
}

/* --------------------------------- Clr Btn -------------------------------- */

Clrbtn = document.getElementById("clr")
Clrbtn.addEventListener("click",function(){
    console.log("Clr")
    setTimeout(function () {
        console.log("asd")
        display.style.color ="#F8F1C6"
        display.innerHTML = "Welcome"
        
        
    }, 800);  
    display.style.color ="#BF3D56"
    display.innerHTML = "Clr"
    
    
});


