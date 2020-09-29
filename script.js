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
let alertImageDOM=document.querySelector(".alertModal")
let hitsImagesArray=['./assets/hit2.jpg',"./assets/hit3.jpg","./assets/hitbattleship.jpg"]

let computerCounter=0;
let computerHits=0;
let computerSuccess=0;




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


   
    renderDamage(enemyTiles,idx)
    updateStats(result)
    if(checkIfBoatSunk(enemyMap,y,x)){
        console.log("you sunk their boat!!")
    }
    
}


function renderDamage(tiles,idx){

    let redDot=document.createElement("div");
    redDot.className = 'red'
    tiles[idx].appendChild(redDot)

}


function checkIfBoatSunk(map,y,x){
    let isSunk=true;
    if(map[y+1][x] !== 0){
        isSunk=false;
    }
    if(map[y][x+1] !== 0){
        isSunk=false;
    }

    return isSunk;
}


function toggleModal(modal,msg){
    modal.style.display='block'
    messageDOM.innerHTML=msg
    
    if(msg == "Hit!"){
    alertImageDOM.style.backgroundImage=`url(${hitsImagesArray[hitsImagesArray.length * Math.random() | 0]})`
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
