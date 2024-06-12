// const options = ['easy', 'medium', 'hard'];
// const select = document.getElementById('difficulty');

// let randomNum1 = 0;
// let randomNum2 = 0;

// const getRandomNums = (max) => {
//     randomNum1 = Math.floor(Math.random() * max) + 1;
//     randomNum2 = Math.floor(Math.random() * max) + 1;

//     if (randomNum1 < randomNum2) {
//         getRandomNums(max);
//     }
// }

// const func = () => {
//     const selected = select.value;
//     const index = options.indexOf(selected);
//     const minNumber = 1;
//     const maxNumber = selected === 'easy' ? 10 : selected === 'medium' ? 100 : 1000;

//     getRandomNums(maxNumber);

//     const oprators = ['+', '-', '*', '/'];
//     const randomOprator = oprators[Math.floor(Math.random() * oprators.length)];

//     const exercise = `${randomNum1} ${randomOprator} ${randomNum2} = `;
//     document.querySelector("#output1").innerText = exercise;
//     const result = eval(`${randomNum1} ${randomOprator} ${randomNum2}`);

//     document.querySelector("#output2").innerHTML = result;
// }

// select.addEventListener('change', func);

let num1 = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);
let num3 = Math.floor(Math.random() * 100 + 1);
let num4 = Math.floor(Math.random() * 100 + 1);
let num5 = Math.floor(Math.random() * 1000 + 1);
let num6 = Math.floor(Math.random() * 1000 + 1);
const select = document.querySelector("#difficulty");
const output1 = document.querySelector("#output1");
const selectOperator = document.querySelector("#operator");
const input = document.querySelector("#output2");
let operator = "+";
const tbody = document.querySelector("tbody");
let score = 0;
operGen()
numGenerate()

function numGenerate() {
    num1 = Math.floor(Math.random() * 10 + 1);
    num2 = Math.floor(Math.random() * 10 + 1);
    num3 = Math.floor(Math.random() * 100 + 1);
    num4 = Math.floor(Math.random() * 100 + 1);
    num5 = Math.floor(Math.random() * 1000 + 1);
    num6 = Math.floor(Math.random() * 1000 + 1);

    if (select.value === 'easy') {
        output1.innerText = `${num1} ${operator} ${num2}`;
    } else if (select.value === 'medium') {
        output1.innerText = `${num3} ${operator} ${num4}`;
    } else {
        output1.innerText = `${num5} ${operator} ${num6}`;
    }
}

function operGen() {
    if (selectOperator.value === '+') {
        operator = '+';
        if (select.value === 'easy') {
            output1.innerText = `${num1} ${operator} ${num2}`;
        } else if (select.value === 'medium') {
            output1.innerText = `${num3} ${operator} ${num4}`;
        } else {
            output1.innerText = `${num5} ${operator} ${num6}`;
        }
    } else if (selectOperator.value === '-') {
        operator = '-';
        if (select.value === 'easy') {
            output1.innerText = `${num1} ${operator} ${num2}`;
        } else if (select.value === 'medium') {
            output1.innerText = `${num3} ${operator} ${num4}`;
        } else {
            output1.innerText = `${num5} ${operator} ${num6}`;
        }
    } else if (selectOperator.value === '/') {
        operator = '/';
        if (select.value === 'easy') {
            output1.innerText = `${num1} ${operator} ${num2}`;
        } else if (select.value === 'medium') {
            output1.innerText = `${num3} ${operator} ${num4}`;
        } else {
            output1.innerText = `${num5} ${operator} ${num6}`;
        }
    } else {
        operator = '*';
        if (select.value === 'easy') {
            output1.innerText = `${num1} ${operator} ${num2}`;
        } else if (select.value === 'medium') {
            output1.innerText = `${num3} ${operator} ${num4}`;
        } else {
            output1.innerText = `${num5} ${operator} ${num6}`;
        }
    }
}


function Check() {
    eval(output1.innerText);
    console.log(eval(output1.innerText))

    if (input.value == eval(output1.innerText)) {
        alert('correct')
        score += 10;
    } else {
        alert('wrong')

    }
    tbody.innerHTML += `<tr>
        <th>${output1.innerText}</th>
        <th>${eval(output1.innerText)}</th>
        <th>${input.value}</th>
        <th>${score}</th>
    </tr>`

}





