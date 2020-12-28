'use strict';

for (let i = 200; i >= 1; i--) {
    if (i % 2 === 0) {
        document.querySelector('#box').innerHTML += `${i} <br>`;
    }
}