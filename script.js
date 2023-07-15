// selecting the elements
const increase = document.querySelector('#btnIncrease')
const number = document.querySelector('#number')
const decrease = document.querySelector('#btnDecrease')
const reset = document.querySelector('#btnReset')

// set the initial count
var n = 0

onload = function(){
    n = localStorage.getItem('num')
    number.innerHTML = n
    color(n)
    console.log(n)
}

// functions
increase.addEventListener('click', function(){
    n = ++n
    number.innerHTML = n
    color(n)
    console.log(n)
    localStorage.setItem('num', n)
})

decrease.addEventListener('click', function(){
    n = --n
    number.innerHTML = n
    color(n)
    localStorage.setItem('num', n)
})

reset.addEventListener('click', function(){
    n = 0
    number.innerHTML = n
    localStorage.setItem('num', n)
})

function color (n){
    if(n < 0){
        number.style.color = 'red'
    }
    else if (n > 0){
        number.style.color = 'rgb(11, 238, 15)'
    }else{
        number.style.color = 'black'
    }
}
