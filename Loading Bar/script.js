const counter = document.querySelector(".counter");
const red = document.querySelector(".red");


let number = 0;
updateNumber();
function updateNumber(){
    counter.textContent = number + `%`; 
    red.style.width = number + "%"  
    number++;

    if(number < 101){  
        setTimeout(updateNumber,30) 
    }
}