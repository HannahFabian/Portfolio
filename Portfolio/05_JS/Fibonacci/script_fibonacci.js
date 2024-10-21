/*
    Fibonacci Sequence - Enter a number and have the program
    generate the Fibonacci sequence to that number or to the Nth number.
*/
// This array will keep memory of the previous fibonacci numbers

// Fn = F(n-1) + F(n-2), F1 = 1, F2 = 1


var memo = {};
function fibonacci() {

    var id = document.getElementById("numFibo");
    var n = parseInt(document.getElementById("numFibo").value);

    "use strict";
    var val = f(n);
    fibonacciResult.innerHTML = "Fibonacci at position  " + n + " = " + val;
}

function f(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    var value;

    if (memo.hasOwnProperty(n)) {
        value = memo[n];
    } else {
        value = f(n - 1) + f(n - 2);
        memo[n] = value;
    }

    return value;
}
