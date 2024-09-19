const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [], userClickedPattern = [];
let started = false, level = 0;

$(document).keypress(() => {
  if (!started) {
    startGame();
  }
});

$(".btn").click(function() {
  const userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(nextSequence, 1000);
    }
  } else {
    gameOver();
  }
}

function nextSequence() {
  userClickedPattern = [];
  $("#level-title").text(`Level ${++level}`);
  
  const randomChosenColour = buttonColours[Math.floor(Math.random() * 4)];
  gamePattern.push(randomChosenColour);

  animateSequence(randomChosenColour);
  playSound(randomChosenColour);
}

function startGame() {
  started = true;
  level = 0;
  gamePattern = [];
  nextSequence();
}

function gameOver() {
  playSound("wrong");
  $("body").addClass("game-over");
  $("#level-title").text("Game Over, Press Any Key to Restart");

  setTimeout(() => $("body").removeClass("game-over"), 200);
  started = false;
}

function animatePress(color) {
  $(`#${color}`).addClass("pressed");
  setTimeout(() => $(`#${color}`).removeClass("pressed"), 100);
}

function animateSequence(color) {
  $(`#${color}`).fadeIn(100).fadeOut(100).fadeIn(100);
}

function playSound(name) {
  new Audio(`sounds/${name}.mp3`).play();
}

