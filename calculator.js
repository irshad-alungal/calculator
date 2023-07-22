function displayValue(num) {
    result.value += num;
}

function clearAll() {
    result.value = '';
}

function evaluateOut(){
    result.value = eval(result.value);
}

function backSpace() {
    result.value = result.value.slice(0,-1);
}