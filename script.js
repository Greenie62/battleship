var launchBtn=document.querySelector(".launchBtn");
var xInput =document.querySelector("input[name='x']");
var yInput =document.querySelector("input[name='y']");

var xDOM=document.querySelector(".x")
var yDOM=document.querySelector(".y")




launchBtn.onclick=launchAttack;


function launchAttack(){
    let x = xInput.value,
        y = yInput.value
    console.log(`X:${x},Y:${y}`)
    xDOM.innerHTML=x;
    yDOM.innerHTML=y;

    hitDetection(y,x)
}



function hitDetection(y,x){
    if(enemyMap[y][x] === 0){
        alert("Miss!");
    }
    
}
