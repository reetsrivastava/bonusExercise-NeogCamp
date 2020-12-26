var leapSection = document.querySelector("#leapYear");
var btnLeap = document.querySelector("#checkLeap");
var leapDiv = document.querySelector("#leapAnswer");
btnLeap.addEventListener('click',leapyear);

function leapyear() {
    
    var yearValue = document.querySelector("#yearInput").value;
    
    if(((yearValue % 4 === 0)&(yearValue % 100 !== 0)) || (yearValue % 400 === 0)) {
        
        leapDiv.innerText = yearValue + " is a leap year";
        
    } else {
        leapDiv.innerText = yearValue + " is a not leap year";   
    }
}