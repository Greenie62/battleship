var launchBtn=document.querySelector(".launchBtn");
var alertModal = document.querySelector(".alertModal");

var xInput =document.querySelector("input[name='x']");
var yInput =document.querySelector("input[name='y']");

var xDOM=document.querySelector(".x")
var yDOM=document.querySelector(".y")

// init game values
let playerAttacksTotal=0;
let playerHits=0;
let playerSuccess=0;
let playerKills =0;
let enemyCount = 7

let computerAttackTotal=0;
let computerHits=0;
let computerSuccess=0;
let computerKills=0;
let playerCount=7;

// DOM elements 
let hitsDOM=document.querySelector(".hits")
let totalAttacksDOM=document.querySelector(".total-player-attacks")
let successDOM=document.querySelector(".success")
let killsDOM=document.querySelector(".kills")
let enemyCountDOM=document.querySelector(".enemycount")
let messageDOM=document.querySelector(".message")
let alertImageDOM=document.querySelector(".alertModal")

let enemysKillsDOM = document.querySelector(".enemysKills")
let playerShipCounterDOM = document.querySelector(".playerShipCount")
let enemyHitsDOM=document.querySelector(".enemy-hits")
let enemyTotalAttacksDOM=document.querySelector(".enemy-total-attacks")
let enemySuccessDOM=document.querySelector(".enemy-success")
let hitsImagesArray=['./assets/hit2.jpg',"./assets/hit3.jpg","./assets/hitbattleship.jpg"]




function initGameValues(){

    hitsDOM.innerHTML=playerHits;
    totalAttacksDOM.innerHTML=playerAttacksTotal
    killsDOM.innerHTML=playerKills;
    enemyCountDOM.innerHTML=enemyCount;
    successDOM.innerHTML=playerSuccess


    enemyHitsDOM.innerHTML=computerHits;
    enemyTotalAttacksDOM.innerHTML=computerAttackTotal;
    enemySuccessDOM.innerHTML=computerSuccess;
    enemysKillsDOM.innerHTML=computerKills;
    // enemyCountDOM.innerHTML=playerCount;
    playerShipCounterDOM.innerHTML=playerCount
}

initGameValues()



launchBtn.onclick=launchAttack;


function launchAttack(){
    let x = parseInt(xInput.value),
        y = parseInt(yInput.value)
    console.log(`X:${x},Y:${y}`)
    xDOM.innerHTML=x;
    yDOM.innerHTML=y;

    xInput.value=""
    yInput.value=""



   let idx = coordTranslator(y,x)


   hitDetection(y,x,idx)


   setTimeout(()=>{
       computersTurn()
   },1200)

}


function updateStats(result){
    playerAttacksTotal++;
    if(result === 1){
        playerHits++;
    }
    playerSuccess = (playerHits / playerAttacksTotal).toFixed(2);
    console.log("Success: " + playerSuccess)
    totalAttacksDOM.innerHTML=playerAttacksTotal;
    hitsDOM.innerHTML=playerHits;
    successDOM.innerHTML=playerSuccess;
}



function hitDetection(y,x,idx){
    let result=0
    if(enemyMap[y][x] === 0){
        console.log("Miss");
        toggleModal(alertModal,"Miss!")
        renderDamage(enemyTiles,idx,'temporary')

    }
    else{
        toggleModal(alertModal,"Hit!")
        // let redDot=document.createElement("div");
        // redDot.className = 'red'
        // playerTiles[idx].appendChild(redDot)
        result=1
    


   
    renderDamage(enemyTiles,idx)
    if(checkIfBoatSunk(enemyMap,y,x,enemyTiles,idx)){
        console.log("you sunk their boat!!")
        toggleModal(alertModal,"Ship is Sunk! ☠︎")
        sinkShip()
    }
}

updateStats(result)

    
}





function sinkShip(){
    enemyCount--;
    playerKills++
    enemyCountDOM.innerHTML=enemyCount;
    killsDOM.innerHTML=playerKills

    if(enemyCount === 0){
        console.log("Congrats, you have made the sea a safe place to sail again!:)")
    }
}




function renderDamage(tiles,idx,status=""){

    let redDot=document.createElement("div");
    redDot.className = 'red'
    tiles[idx].appendChild(redDot)

    if(status !== ""){
        setTimeout(()=>{
        tiles[idx].innerHTML=""
        },1000);
    }

}




function checkIfBoatSunk(map,y,x,enemyTiles,idx){
    console.log(enemyTiles[idx-1].children)
    let isSunk=true;
    if(map[y+1][x] !== 0){
        isSunk=false;
    }
    if(map[y-1][x] !== 0 && !enemyTiles[idx-11].children.length){
        isSunk=false;
    }
    if(map[y][x+1] !== 0){
        isSunk=false;
    }

    if(map[y][x-1] !== 0 && !enemyTiles[idx-1].children.length){
        isSunk=false;
    }

    // if(map[y][x-2] !== 0 && !enemyTiles[idx-2].children.length){
    //     isSunk=false;
    // }
    // if(map[y-2][x] !== 0 && !enemyTiles[idx-22].children.length){
    //     isSunk=false;
    // }
    // if(map[y][x-3] !== 0 && !enemyTiles[idx-3].children.length){
    //     isSunk=false;
    // }
    // if(map[y-3][x] !== 0 && !enemyTiles[idx-33].children.length){
    //     isSunk=false;
    // }

    return isSunk;
}


function toggleModal(modal,msg){
    modal.style.display='block'
    messageDOM.innerHTML=msg
    
    if(msg == "Hit!"){
    alertImageDOM.style.backgroundImage=`url(${hitsImagesArray[hitsImagesArray.length * Math.random() | 0]})`
    // toggleEnemyMap()
    }

    else{
        alertImageDOM.style.backgroundImage=`url('./assets/battle3.jpg')`
    }


    setTimeout(()=>{
        modal.style.display='none'
    },1500)
}


function coordTranslator(y,x){
    let idx=0;
   
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



function computersTurn(){
    console.log("Computer is taking a turn!")
    let xRandom=Math.random() * 12 | 0;
    let yRandom=Math.random() * 12 | 0;

    let compIdx = coordTranslator(yRandom,xRandom);

    console.log(`X:${xRandom},Y:${yRandom},Idx:${compIdx}`)


}
