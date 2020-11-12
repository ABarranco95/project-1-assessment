// Target our dom elements

let add = document.querySelector('.add');
let subtract = document.querySelector('.subtract');
let currentValue = document.querySelector('p');

// Start our count at 0 upon loading and display it
count = 0 
currentValue.innerHTML = count

// Add and subtract functions
add.onclick = function() {
    count += 1;
    currentValue.innerHTML = count;
}

subtract.onclick = function() {
    count -= 1;
    currentValue.innerHTML = count;
}