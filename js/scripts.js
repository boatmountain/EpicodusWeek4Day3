//Back End
// back end logic for game
function Game(){
  this.playerNames = [];
  this.playerScores =[];
}

function dieRoll(){
 return Math.floor(Math.random()*6) +1;
};

Game.prototype.addPlayer = function(player){
  this.playerNames.push(player);
}

Game.prototype.addPlayerScore = function(playerScore){
  this.playerScores.push(playerScore);
}

Game.prototype.compareScores = function(){
  //write function that evaluates all values held in playerScores array
  // if any value >=100 return playerScore and playerName saying 'congratulations, you won'
  // refresh page for new game
}

//back end logic for players
function  Player(name) {
  this.playerName = name;
  this.currentId = 0;
  this.totalScore = 0;
}


player.prototype.turn = function(player){
    var turnScore;
    var rollScore = dieRoll();
    // vrollScoreoll = Math.floor(Math.random()*6) +1;
    ifturn
      // prompt next player to roll      //player.currentID.turnscore = 0;
    }this.turnScore += rollScore;.      // ask player to hold or roll again      //player.currentID.turnScore += dieRoll;
    }
}

  //player.currentID.totalScore += turnScore;player.prototype.hold = function(){

}

player.prototype.restart = function(){

}




// Front End
$(Document).ready(function(){
    event.preventDefault()
var dieRoll = Math.floor(Math.random()*6) +1;

})



https://gist.github.com/damianesteban/09640735173f8a2893d4

youtube: https://www.youtube.com/watch?v=8_F2oa3i8pI  whoops/ not pig dice

https://www.youtube.com/watch?v=T7JNHDFp7UI


