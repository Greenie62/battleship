var playersMap = document.querySelector(".playersmap");
var enemiesMap = document.querySelector(".enemy-map");
var enemyContainer =document.querySelector(".enemysContainer")
// enemyContainer.style.display='none'
console.log(playersMap);


var playerMap=[
    [0,0,0,0,1,3,3,1,0,0,0,0],
    [0,0,1,0,0,0,0,0,0,0,1,0],
    [0,0,3,0,0,0,1,3,0,0,3,0],
    [0,0,3,0,0,0,0,0,0,0,3,0],
    [0,0,1,0,1,3,1,0,0,0,1,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,0,0,0,0,0,0,0,0,0,0],
    [0,3,0,0,0,0,0,1,3,1,0,0],
    [0,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,3,3,1,0,0]
  
]



var enemyMap=[
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,0,0,0,1,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0],
    [0,0,0,0,1,0,0,0,1,0,1,0],
    [0,0,0,0,1,0,0,0,0,0,1,0],
    [0,0,0,0,1,0,0,0,0,0,1,0],
    [0,0,0,0,1,0,1,1,1,0,1,0],
    [1,1,1,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,1,1,1,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,0,0,1]
  
]

var deg=[90,80,105]

function printPlayerMap(map,el,player=""){
    map.forEach((row,y)=>{
        row.forEach((value,x)=>{
            let gameTile = document.createElement("div");
            if(player === ""){
            gameTile.className = "gametile"
            }
            else{
                gameTile.className = "enemyTile"
            }

            if(value === 0){
                gameTile.className += " water"
            }
            else{
                if(player !==""){
                    gameTile.className += " enemy"
                }
                if(value === 3){
                    var gunDiv=document.createElement("div");
                    var gunDivTwo=document.createElement("div");
                    gunDiv.className = "gun-div"
                    gunDivTwo.className = "gun"
                    gunDivTwo.style.transform=`rotate(${deg[Math.random()*deg.length | 0]}deg)`
                    
                    // if(deg[Math.random()*deg.length | 0] !== 90){
                    // gunDivTwo.style.left='200px'
                    // }

                    gunDiv.appendChild(gunDivTwo)
                    gameTile.appendChild(gunDiv)
                }
                gameTile.className += " boat"
            }
         
            el.appendChild(gameTile)

        })
    })

}

printPlayerMap(playerMap,playersMap)
printPlayerMap(enemyMap,enemiesMap,'enemy')

var playerTiles = document.querySelectorAll(".gametile");
var enemyTiles = document.querySelectorAll(".enemyTile");



function toggleEnemyMap(){
    enemyContainer.style.display='block'
    setTimeout(()=>{
        enemyContainer.style.display='none'
    },1500)
}


console.log(playerTiles.length,enemyTiles.length)