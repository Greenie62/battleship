var playersMap = document.querySelector(".playersmap");
var enemiesMap = document.querySelector(".enemy-map");

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
            gameTile.className = "gametile"

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