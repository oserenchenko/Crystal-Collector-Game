var gameRandomScore;
var userCalcScore = 0;
var wins = 0;
var losses = 0;


function getRandomInt(min, max) {
  return Math.floor(Math.random() * max) + min;
}


$(document).ready(function () {
  gameRandomScore = getRandomInt(19, 120);
  $("#gameScore").text(gameRandomScore);
  console.log(typeof (gameRandomScore));
  $(".crystals").each(function () {
    $(this).val(getRandomInt(1, 12));
  });
  $(".crystals").on("click", function () {
    userCalcScore += Number($(this).val());
    console.log(typeof (userCalcScore));
    $("#userScore").text(userCalcScore);
    if (userCalcScore == gameRandomScore) {
      wins++;
      console.log(wins);
      $("#winScore").text("Wins: " + wins);
    };
  });
});