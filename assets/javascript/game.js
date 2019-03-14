var randomNumber = Math.floor(Math.random(randomNumber) * 120) +19;
var gemValue1 = Math.floor(Math.random(randomNumber) * 12) +1;
var gemValue2 = Math.floor(Math.random(randomNumber) * 12) +1;
var gemValue3 = Math.floor(Math.random(randomNumber) * 12) +1;
var gemValue4 = Math.floor(Math.random(randomNumber) * 12) +1;
var wins = 0;
var losses = 0;
var userScore = 0;

//game starts and a random number is generated. 
    // random value is generated for each crystal.
$("#numberToMatch").text(randomNumber)
$("#crystal1").text(gemValue1)
$("#crystal2").text(gemValue2)
$("#crystal3").text(gemValue3)
$("#crystal4").text(gemValue4)

console.log(randomNumber)
console.log(gemValue1)



//make a function that will reset the game when finished.
function reset(){
      Random=Math.floor(Math.random()*102+19);
      console.log(Random)
      $("#numberToMath").text(randomNumber);
      gemValue1= Math.floor(Math.random()*12+1);
      gemValue2= Math.floor(Math.random()*12+1);
      gemValue3= Math.floor(Math.random()*12+1);
      gemValue4= Math.floor(Math.random()*12+1);
      userScore= 0;
      $("#user-score").text(playerTotal);
      }

//make a function that will increase the value of wins and give a winner message

function winner() {
    alert("Congrats! You win")
    wins++
    reset()
}

function loser() {
    alert("Awww, You lose :(")
    losses++
    reset()
}



$("#crystal1").on("click", function(){
    console.log(gemValue1)
    userScore = userScore + gemValue1
    $("#user-score").text(userScore)
    
    if (userScore === randomNumber) {
        winner()
    }else if (userScore > randomNumber) {
        loser()
    }
    
})

$("#crystal2").on("click", function(){
    console.log(gemValue2)
    userScore = userScore + gemValue2
    $("#user-score").text(userScore)

    if (userScore === randomNumber) {
        winner()
    }else if (userScore > randomNumber) {
        loser()
    }
})

    $("#crystal3").on("click", function(){
    console.log(gemValue3)
    userScore = userScore + gemValue3
    $("#user-score").text(userScore)

    if (userScore === randomNumber) {
        winner()
    }else if (userScore > randomNumber) {
        loser()
    }
})

    $("#crystal4").on("click", function(){
    console.log(gemValue4)
    userScore = userScore + gemValue4
    $("#user-score").text(userScore)

    if (userScore === randomNumber) {
        winner()
    }else if (userScore > randomNumber) {
        loser()
    }
    
    
})