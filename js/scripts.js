
$(document).ready(function(){

  $("#intakeForm").on("submit", function(event){
    event.preventDefault();
    var inputNumber = $("#inputNumber").val();
    var resultArray = convertInput(inputNumber);
    var result = "";
    for (var i = 0; i < resultArray.length; i++) {
        result += resultArray[i] + " ";
    }
    $("#result").text(result);
  });
});

function findOnes(input){
    var result = input.toString().indexOf(1);
    if (result === -1) {
        return false;
    } else {
        return true;
    }
}

function findTwos(input){
    var result = input.toString().indexOf(0);
    if (result === -1) {
        return false;
    } else {
        return true;
    }
}

function divByThree(input){
    var result = input % 3;
    if (result === 0 && input !=0){
        return true;
    } else {
        return false;
    }
}

function convertInput(input){
    var numberArray = [];
    for (var i = 0; i <= input; i++) {
      if (divByThree(i) === true) {
        numberArray.push("I'm sorry, Dave! I am afraid i cant do that.");
      } else if ( findOnes(i) === true) {
        numberArray.push("Boop!");
      } else if (findTwos(i) === true) {
        numberArray.push("Beep!");
      } else {
        numberArray.push(i);
      }
    }
    return numberArray;
}
