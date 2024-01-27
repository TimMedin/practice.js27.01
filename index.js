const button = document.getElementById("button");
const buttondel = document.getElementById("button-delete");
const message = document.getElementById("hello-message");

button.addEventListener("click", hello);
function hello() {
    message.textContent = "Hello World!";
    buttondel.classList.add('button')
}

buttondel.addEventListener("click", helloDel);
function helloDel() {
    message.textContent = "";
    buttondel.classList.remove('button')

}

function checkGuess() {
    const guess = document.getElementById("guess").value;
    const Number = Math.floor(Math.random() * 100) + 1;
    console.log(Number);

    if (guess == Number) {
        document.getElementById("result").innerHTML = "Ви вгадали!";
    } else {
        document.getElementById("result").innerHTML = "Спробуйте ще раз! ";
    }
}

const clickResult = document.getElementById("click-result");
const clickBtn = document.getElementById("click-btn");
const clickDel = document.getElementById("click-del");

let clicks = 0; 
clickBtn.addEventListener("click", clickFunc)
function clickFunc() {
    clicks++;
    clickResult.textContent = clicks;
}

clickDel.addEventListener("click", clickDelF)
function clickDelF() {
    clickResult.textContent = 0;
}

