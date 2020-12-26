
var leapSection = document.querySelector("#leapYear");
var primeSection = document.querySelector("#primeNumber");
var btnLeap = document.querySelector("#checkLeap");
var btnPrime = document.querySelector("#checkPrime");
var primeDiv = document.querySelector("#primeAnswer");
var leapDiv = document.querySelector("#leapAnswer");

function leapyear() {
    
    var yearValue = document.querySelector("#yearInput").value;
    
    if(((yearValue % 4 === 0)&(yearValue % 100 !== 0)) || (yearValue % 400 === 0)) {
        
        leapDiv.innerText = yearValue + " is a leap year";
        
    } else {
        leapDiv.innerText = yearValue + " is a not leap year";   
    }
}



function primenumber() {
    
    var primeValue = document.querySelector("#primeInput").value;
    
    var score = 0;
    for(var i=2;i<primeValue;i++) {
        if(primeValue % i === 0) {
          score++;
        }
      }
    if(score === 0) {
        primeDiv.innerText = primeValue + " is a prime number";
    } else {
        primeDiv.innerText = primeValue + " is not a prime number";
    }
}

btnLeap.addEventListener('click',leapyear);
btnPrime.addEventListener('click',primenumber);