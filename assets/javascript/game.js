$(document).ready(function() {

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
          
          randomNumber=Math.floor(Math.random(randomNumber) * 120) +19;
          $("#numberToMatch").text(randomNumber);
          gemValue1= Math.floor(Math.random(randomNumber) * 12) +1;
          gemValue2= Math.floor(Math.random(randomNumber) * 12) +1;
          gemValue3= Math.floor(Math.random(randomNumber) * 12) +1;
          gemValue4= Math.floor(Math.random(randomNumber) * 12) +1;
          userScore= 0;
          $("#user-score").text(userScore);
          }
    
    //make a function that will increase the value of wins and give a winner message and reset game.
    
    function winner() {
        alert("Nice! You win")
        wins++
        $("#wins").text("Wins: " + wins)
        reset()
        
    }
    
    //make a function that will increase value of losses and give a loser message. also need to reset game
    
    function loser() {
        alert("Bummer! You lose :(")
        losses++
        $("#losses").text("Losses: " + losses)
        reset()
    
    }
    
    
    //create click events for the crystals that will log the value and add it to the user score card. 
    $("#crystal1").on("click", function(){
        console.log(gemValue1)
        userScore = userScore + gemValue1
        $("#user-score").text(userScore)
    
        //make an if/else statement that checks for a winner-for when randomNumber===userScore and loser-for when randomNumber > userScore
        
        if (userScore === randomNumber) {
            winner()
        }else if (userScore > randomNumber) {
            loser()
        }
        
    })
    
    //repeat for crystals 2-4
    
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
    
    });