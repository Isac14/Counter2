const increase = document.querySelector('#btnIncrease')
const number = document.querySelector('#number')
const decrease = document.querySelector('#btnDecrease')

var n = 0

increase.addEventListener('click', function(){
    n = ++n
    number.innerHTML = n
})

decrease.addEventListener('click', function(){
    n = --n
    number.innerHTML = n
})