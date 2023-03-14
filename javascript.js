const calcScreen = document.querySelector('.calc__result');
const calcBtns = Array.from(document.querySelectorAll('.calc__btn'));




calcBtns.map((btn) => {
    btn.addEventListener('click', function (e) {
        let answer = e.target.innerHTML
        if (answer === 'ac')  clear() 
        else if (answer === 'C')  del()
        else if (answer === '+/-')  plusMinus()
        else if (answer === '√')  sqrt()
        else if (answer === '=')  equal()
        else add(answer)
        limit()

    })
})


function clear() {
    calcScreen.innerHTML = ''
}
function del() {
    calcScreen.innerHTML = calcScreen.innerHTML.slice(0, -1)
}
function add(answer) {
    calcScreen.innerHTML.length >= 12 ? calcScreen.innerHTML : calcScreen.innerHTML += answer
}
function plusMinus() {
   calcScreen.innerHTML = parseFloat(calcScreen.innerHTML) * -1
}

function sqrt() {
    calcScreen.innerHTML = Math.sqrt( calcScreen.innerHTML)
}
function equal() {
    calcScreen.innerHTML = eval(calcScreen.innerHTML)
}
function limit() {
    if (calcScreen.innerHTML.length >= 12) {
        calcScreen.style.fontSize = '30px'
    }else if (calcScreen.innerHTML.length >= 6) {
        calcScreen.style.fontSize = '35px'
    }else if (calcScreen.innerHTML.length < 6) {
        calcScreen.style.fontSize = '40px'
    }
}
