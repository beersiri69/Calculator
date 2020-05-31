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

function Checkdisplay(){
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


/* --------------------------------- 9Digit --------------------------------- */

for (var i=0;i<9;i++){
    id = i+1;    
    btn[i] = document.getElementById("num"+id); 
   
    btn[i].addEventListener("click",function(){
        input = this.innerHTML;
        console.log("input:"+input)
        Checkdisplay();
    });
}






