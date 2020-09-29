var launchBtn=document.querySelector(".launchBtn");
var alertModal = document.querySelector(".alertModal");

var xInput =document.querySelector("input[name='x']");
var yInput =document.querySelector("input[name='y']");

var xDOM=document.querySelector(".x")
var yDOM=document.querySelector(".y")

let playerCounter=0;
let playerHits=0;
let playerSuccess=0;
let hitsDOM=document.querySelector(".hits")
let missesDOM=document.querySelector(".misses")
let successDOM=document.querySelector(".success")
let messageDOM=document.querySelector(".message")

let computerCounter=0;
let computerHits=0;
let computerSuccess=0;




launchBtn.onclick=launchAttack;


function launchAttack(){
    let x = xInput.value,
        y = yInput.value
    console.log(`X:${x},Y:${y}`)
    xDOM.innerHTML=x;
    yDOM.innerHTML=y;


    hitDetection(y,x)

    coordTranslator(y,x)
}


function changeDOM(result){
    playerCounter++;
    if(result === 1){
        playerHits++;
    }
    playerSuccess = (playerHits / playerCounter).toFixed(2);
    console.log("Success: " + playerSuccess)
    missesDOM.innerHTML=playerCounter;
    hitsDOM.innerHTML=playerHits;
    successDOM.innerHTML=playerSuccess;
}



function hitDetection(y,x){
    let result=0
    if(enemyMap[y][x] === 0){
        console.log("Miss");
        toggleModal(alertModal,"Miss!")
    }
    else{
        toggleModal(alertModal,"Hit!")
        result=1
    }

    changeDOM(result)
    
}


function toggleModal(modal,msg){
    modal.style.display='block'
    messageDOM.innerHTML=msg
    setTimeout(()=>{
        modal.style.display='none'
    },1500)
}


function coordTranslator(x,y){
    let idx=0;
    [y,x] = [parseInt(y),parseInt(x)];
    while(y > 0){
        idx+=11;
        y--
    }

    while(x >0){
        idx +=1;
        x--
    }

    console.log("Idx: " + idx);
    return idx;
}
