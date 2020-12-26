var primeSection = document.querySelector("#primeNumber");
var btnPrime = document.querySelector("#checkPrime");
var primeDiv = document.querySelector("#primeAnswer");
btnPrime.addEventListener('click',primenumber);

function primenumber() {
    
    var primeValue = document.querySelector("#primeInput").value;
    
    var score = 0;
    for(var i=2;i<primeValue;i++) {
        if(primeValue % i === 0) {
          score++;
        }
      }
    if(score === 0) {
        primeDiv.innerHTML = primeValue + " is a prime number";
    } else {
        primeDiv.innerHTML = primeValue + " is not a prime number";
    }
}


