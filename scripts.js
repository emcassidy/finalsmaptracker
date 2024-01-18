// COUNTER TEST
let decrement = document.querySelector('.decrement');
let counter = document.querySelector('.counter');
let increment = document.querySelector('.increment');

let v = 0;

increment.onclick = function() {
    v++;
    counter.value = v;
}

decrement.onclick = function() {
    if(v == 0) {
        v = 0;
    }else{
        v--;
    counter.value = v;
    }
}