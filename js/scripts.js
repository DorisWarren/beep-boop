function findOnes(inputNumber){
  var result = inputNumber.toString().indexOf(1);
  if (result === -1) {
    return false;
  } else {
    return true;
  }
}

function findTwos(inputNumber){
  var result = inputNumber.toString().indexOf(2);
  if (result === -1) {
    return false;
  } else {
    return true;
  }
}

function findThree(inputNumber){
  if (inputNumber.toString().split("").includes("3")) {
    return true;
  } else {
    return false;
  }
}

function convertInput(inputNumber){
  var numberArray = [];
  for (var i = 0; i <= inputNumber; i++) {
    if (findThree(i)) {
      numberArray.push("I'm sorry, Dave! I am afraid i cant do that.");
    } else if (findTwos(i)) {
      numberArray.push("Boop!");
    } else if ( findOnes(i)) {
      numberArray.push("Beep!");
    } else {
      numberArray.push(i);
    }
  }
  return numberArray;
}

$(document).ready(function(){
  $("#intakeForm").submit(function(event){
    event.preventDefault();
    var inputNumber = $("#inputNumber").val();
    var resultArray = convertInput(inputNumber);

    $("#result").text(resultArray);
  });
});
