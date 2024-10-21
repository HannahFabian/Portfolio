function getPrimeFactors(){
    var id = document.getElementById("numP");
    var number = parseInt(document.getElementById("numP").value);
    var maxNum = parseInt(1299827);

    var factors = [];
    var divisor = 2;


    while (number >= divisor * divisor) {
        if (number % divisor === 0) {
            factors.push(divisor);
            number = number / divisor; 
        } else {
            divisor++; 
        }
    }

    if (number > 1) {
        factors.push(number);
    }

    
    pf.innerHTML = "Prime factors are: " + factors.join(", ");
    
}