window.addEventListener('load',initEvents);

var box;
var oprs;
var btns;
var calc;

function initEvents(){
    box = document.querySelector("#box_1");
    btns = document.querySelectorAll(".num");
    oprs = document.querySelectorAll(".opr");
    calc = document.querySelector(".calc");

    calc.addEventListener("click",calculation)

    for(var i=0;i<btns.length;i++){
        // console.log(i);
        btns[i].addEventListener("click", appendValues);
    }

    for(var i=0;i<oprs.length;i++){
        oprs[i].addEventListener("click", appendOperators);
    }
}

function appendValues(){
    box.value += event.srcElement.innerHTML;
}

function appendOperators(){
    var lastvalue = box.value.charAt(box.value.length - 1);
    console.log(lastvalue);
        for(var i=0;i<oprs.length;i++){
            console.log(i);
            console.log(oprs[i].innerHTML);
            if(oprs[i].innerHTML == lastvalue){
                console.log("operator already exist..");
                return 
            }
        }
        box.value += event.srcElement.innerHTML;
}
function calculation(){
    var expression = box.value;
    var result = eval(expression);
    box.value = result;
}