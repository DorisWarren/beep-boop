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
