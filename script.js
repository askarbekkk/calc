let viewer = document.querySelector('.viewer')
let button = document.querySelectorAll('button')
let ex = document.querySelector('.ex')
let num = ''
// переменная которая хранит вводимое число
let equation = ''
// переменная которая хранит все выражение
let oneChk = false
// переменная которая позволяет  при первом знаке ничего не делать
let operations = ['+', '-', '/', '*'  ]
function view (event) {
const target = event.target.innerText
    ex.innerText = target + equation
    if (target === 'C'){
        clear()
    } else if (operations.includes(target)){
        expression(target)
        // когда оператор нажат
        // проверка, если нажали на знак первый раз, то ничего не считать ненадо
        // если нажали на цифру
    }else if (target === '=') {
        //при нажатии
        viewer.innerText = eval(equation) || 0
        equation = eval(equation)
    }else {
        //когда нажата цифра
     addNumber(target)
    }
}
button.forEach(function (btn) {
    btn.addEventListener('click',  view)
})
console.log()

function clear() {
    // если хотим очистить
    num = ''
    equation = ''
    viewer.innerText = '0'
}
function addNumber (target){
    equation = equation + target
    console.log(equation)
    num = num + target
    viewer.textContent = num

}

function expression (target) {

    if(operations.includes(equation[equation.length-1])){
        equation = equation.slice(0,equation.length -1) + target
    } else {
        if (oneChk === false) {
            equation = equation + target
            oneChk = true
            num = ''
            // иначе считаем результат выражения , вставляем его в output
            // и только потом добавляем новый знак в выражение
        } else {
            viewer.innerText = eval(equation)
            equation = eval(equation) + target
            // очищаем переменную с числом, так как ожидаем ввод нового
            num = ''
        }
    }
}

