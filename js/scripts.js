//Back End
function  Player(name) {
  this.playerName = name;
  this.currentId =[]
  this.totalScore = 0;
  this.turnScore = 0;
}


player.prototype.roll = function(){
    // var dieRoll = Math.floor(Math.random()*6) +1;
    if (dieRoll === 1){ 
      //layer.currentID.turnscore = 0;
    } else {
      //player.currentID.turnScore += dieRoll;
    }
}

player.prototype.hold = function(){

}

player.prototype.restart = function(){

}




// Front End
$(Document).ready(function(){
    event.preventDefault()
var dieRoll = Math.floor(Math.random()*6) +1;

})






