// nav 
const menu = document.querySelector('ul');
const buttonBurger = document.querySelector('.toggle');

buttonBurger.addEventListener("click", function () {
    menu.classList.toggle('active')
})



// header container 
const words = ['crazy', 'friendly', 'communicative', 'good'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === words.length) {
        count = 0;
    }
    currentText = words[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.writing').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }

    setTimeout(type, 200);
}())