// Target our dom elements

let add = document.querySelector('.add');
let subtract = document.querySelector('.subtract');
let userInput = document.querySelector('.user-input');
let currentValue = document.querySelector('p');

console.log(userInput.value);
// Start our count at 0 upon loading and display it
count = 0 
currentValue.innerHTML = count



// Add and subtract functions
add.onclick = function() {
    count + userInput.value;
    currentValue.innerHTML = count;
}

subtract.onclick = function() {
    count -= userInput.value;
    currentValue.innerHTML = count;
}