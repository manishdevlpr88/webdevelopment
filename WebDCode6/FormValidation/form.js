window.addEventListener("load",initEvents)

var username;
var userpwd;
var progress;


function initEvents(){
    // console.log("init Event method work");

    spans = document.querySelectorAll("span");
    progress = document.querySelector("#progress");
    console.log(progress);
    username = document.querySelector("#box_1");
    userpwd = document.querySelector("#box_3");
    username.addEventListener("blur",checkUser)
    userpwd.addEventListener("keyup",checkPassword)
    
}


function checkUser(){
    console.log("checkUser");
    if(username.value.length == 0){
        spans[0].innerHTML = "Please fill this Field";
    }else{
        spans[0].innerHTML = "";
    }

}

function checkPassword(){
    console.log("check password");
    progress.style.width = userpwd.value.length*10+'px';
    // console.log(userpwd.value.length);
    if(userpwd.value.length == 0){
        spans[2].innerHTML = "Please fill this Field";
        progress.style.width = '';
        progress.style.backgroundColor = 'transparent';
    } else if(userpwd.value.length > 0 && userpwd.value.length <= 4){
        spans[2].innerHTML = "Weak";
        progress.style.backgroundColor = "yellow";
    } else if(userpwd.value.length > 4 && userpwd.value.length <=8){
        spans[2].innerHTML = "Average";
        progress.style.backgroundColor = 'yellow';
    }else if(userpwd.value.length > 8){
        spans[2].innerHTML = "Strong";
        progress.style.backgroundColor = 'green';
    }else{
        spans[2].innerHTML = "";
    }
}