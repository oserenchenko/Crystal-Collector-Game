var gameRandomScore;
var userCalcScore;
var wins = 0;
var losses = 0;
var gameReady = false;


function getRandomInt(min, max) {
  return Math.floor(Math.random() * max) + min;
}

function gameSetUp() {
  gameRandomScore = getRandomInt(19, 120);
  $("#gameScore").text(gameRandomScore);
  $(".crystals").each(function () {
    $(this).val(getRandomInt(1, 12));
  });
  userCalcScore = 0;
  $("#userScore").text(userCalcScore);
  $("#userScore").css("color", "white");
  $("#userScore").css("fontSize", 80);
  gameReady = true;
}

$(document).ready(function () {
  gameSetUp();
  $(".crystals").on("click", function () {
    if (gameReady) {
      userCalcScore += Number($(this).val());
      $("#userScore").text(userCalcScore);
    }
    if (userCalcScore == gameRandomScore) {
      if (gameReady) {
        wins++;
        gameReady = false;
        $("#winScore").text("Wins: " + wins);
        $("#userScore").css("color", "blue").css("fontSize", 100);
        // $("#userScore").css("fontSize", 100);
        setTimeout(gameSetUp, 3000);
      }
    } else if (userCalcScore > gameRandomScore) {
      if (gameReady) {
        losses++;
        gameReady = false;
        $("#lossesScore").text("Losses: " + losses);
        $("#userScore").css("color", "red").css("fontSize", 100);
        // $("#userScore").css("fontSize", 100);
        setTimeout(gameSetUp, 3000);
      }
    }
  })
});