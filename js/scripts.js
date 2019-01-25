function findOnes(input){
    var result = input.toString().indexOf(1);
    if (result === -1) {
        return false;
    } else {
        return true;
    }
}

function findZeros(input) {
    var result = input.toString().indexOf(0);
    if (result === -1) {
        return false;
    } else {
        return true;
    }
}

function divByThree(input) {
    var result = input % 3;
    if (result === 0 && input !=0){
        return true;
    } else {
        return false;
    }
}
