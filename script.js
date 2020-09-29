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

    xInput.value=""
    yInput.value=""



   let idx = coordTranslator(y,x)


   hitDetection(y,x,idx)

}


function updateStats(result){
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



function hitDetection(y,x,idx){
    let result=0
    if(enemyMap[y][x] === 0){
        console.log("Miss");
        toggleModal(alertModal,"Miss!")
    }
    else{
        toggleModal(alertModal,"Hit!")
        // let redDot=document.createElement("div");
        // redDot.className = 'red'
        // playerTiles[idx].appendChild(redDot)
        result=1
    }


    let redDot=document.createElement("div");
    redDot.className = 'red'
    enemyTiles[idx].appendChild(redDot)
    updateStats(result)
    
}


function toggleModal(modal,msg){
    modal.style.display='block'
    messageDOM.innerHTML=msg
    setTimeout(()=>{
        modal.style.display='none'
    },1500)
}


function coordTranslator(y,x){
    let idx=0;
    [y,x] = [parseInt(y),parseInt(x)];
    while(y > 0){
        y--
        idx+=12;
    }

    while(x > 0){
        x--
        idx +=1;
    }

    console.log("Idx: " + idx);
    return idx;
}
