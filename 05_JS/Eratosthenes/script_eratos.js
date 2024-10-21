/*
    Sieve of Eratosthenes - The sieve of Eratosthenes is one of the most efficient ways
    to find all of the smaller primes (below 10 million or so).
*/

var sieve = function () {
    "use strict";
    var id = document.getElementById("num");
    var n = parseInt(id.value); 
    var array = [];
    
    for (var i = 0; i <= n; i++) {
        array[i] = true;
    }
      
    array[0] = array[1] = false;

    for (var i = 2; i * i <= n; i++) {
        if (array[i]) {
            for (var multiple = i * i; multiple <= n; multiple += i) {
                array[multiple] = false;
            }
        }
    }
    
    var primes = []; 

    for (var i = 0; i <= n; i++) {
        if (array[i] === true) { 
            primes.push(i); 
        }
    }

    var result = document.getElementById("result"); 
    result.innerHTML = primes.join(', '); 
};
