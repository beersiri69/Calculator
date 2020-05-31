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
var disablestate = 0;
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

function Setdisable(){
    for (var i=0;i<9;i++){
        btn[i].classList.add("disbtn"); 
    }    
    disablestate = 1;
}

function Removedisable(){
    for (var i=0;i<9;i++){
        btn[i].classList.remove("disbtn");
    }    
    disablestate = 0;
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
        if(disablestate == 0) {
            Inputdisplay();
        }  
    });
}

/* --------------------------------- Clr Btn -------------------------------- */

Clrbtn = document.getElementById("clr")
Clrbtn.addEventListener("click",function(){
    
    setTimeout(function () {
        
        display.style.color ="#F8F1C6"
        display.innerHTML = "Welcome"
        Removedisable();
    }, 800);  
    display.style.color ="#BF3D56"
    display.innerHTML = "Clr"
    Setdisable();  
    
});




