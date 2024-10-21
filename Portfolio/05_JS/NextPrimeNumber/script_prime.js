function checkPrime() {
    var id = document.getElementById("num");
    var number = parseInt(document.getElementById("num").value);
    var maxNum = parseInt(1299827);


    if (number < maxNum && !isNaN(number)) {
        for (var i = number + 1; i < maxNum; i++) {
            if (isPrime(i)) {
                primeNresult.innerHTML = "Next prime number = " + i;

                return;
            }
        }
    } else {
        window.alert("Please Enter Number Below 1299827 or Enter A Valid Integer");
        id.value = "";
    }
}
function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}