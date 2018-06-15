//defining global variables 
//the random score chosen by the computer between 19 and 120
var gameRandomScore;
//the user score that keeps increasing with every crystal click
var userCalcScore;
//the count of user wins
var wins = 0;
//the count of user losses
var losses = 0;
//variable that controls whether the game is ready or not - it is not ready when there has been a loss or a win, until the game restarts
var gameReady = false;

//function that produces a random integer between a min and max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//function that sets up the game each round (after a win or loss)
function gameSetUp() {
  //sets a random game score and displays it in html
  gameRandomScore = getRandomInt(19, 120);
  $("#gameScore").text(gameRandomScore);
  //sets a random value for each crystal between 1 and 12 
  $(".crystals").each(function () {
    $(this).val(getRandomInt(1, 12));
  });
  //sets the user score to 0 and sets the styling back to its original
  userCalcScore = 0;
  $("#userScore").text(userCalcScore);
  $("#userScore").css("color", "white");
  $("#userScore").css("fontSize", 80);
  //allows the game to run - crystals to be selected
  gameReady = true;
}


//fuction that runs when the html and css files have finished loading
$(document).ready(function () {
  //runs the game set up funciton first
  gameSetUp();
  //when a button with the crystal class is pushed...
  $(".crystals").on("click", function () {
    //if the game ready variable is equal to true...
    if (gameReady) {
      //increase the user score by the clicked crystal's random value
      userCalcScore += Number($(this).val());
      //display the total user score each time a crystal is clicked
      $("#userScore").text(userCalcScore);
    }
    //if the user score is equal to the game score...
    if (userCalcScore == gameRandomScore) {
      //and if the game ready variable is true...
      if (gameReady) {
        //add 1 to the wins count 
        wins++;
        //set the game ready variable to false
        gameReady = false;
        //display the wins score in html
        $("#winScore").text("Wins: " + wins);
        //set the user score to blue and make the font larger
        $("#userScore").css("color", "blue").css("fontSize", 100);
        //run the game set up function to start a new round after 3 seconds
        setTimeout(gameSetUp, 3000);
      }
      //if the user score is larger than the games score..
    } else if (userCalcScore > gameRandomScore) {
      //and if the game ready variable is set to true..
      if (gameReady) {
        //add 1 to the losses count
        losses++;
        //set the game ready variable to false
        gameReady = false;
        //display the losses score in html
        $("#lossesScore").text("Losses: " + losses);
        //display the user score in red in a larger font size
        $("#userScore").css("color", "red").css("fontSize", 100);
        //run the game set up funciton to start a new round in 3 seconds
        setTimeout(gameSetUp, 3000);
      }
    }
  })
});