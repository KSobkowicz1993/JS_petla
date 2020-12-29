'use strict';

// Petla for

for (let i = 200; i >= 1; i--) {
    if (i % 2 === 0) {
        document.querySelector('#box').innerHTML += `${i} <br>`;
    }
}

// Petla while 

let j = 200;

while (j >= 1){
    if (j % 2 === 0) {
        document.querySelector('#box2').innerHTML += `${j} <br>`;
    }
    j--;
}

