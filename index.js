const body = document.querySelector('.body')
const color = document.querySelector('.color');
const button = document.querySelector('.colorControl');

let backgroundColor = ['red', 'blue', 'purple', 'green', 'white', 'orange', 'red', 'brown']

button.addEventListener('click', ChangeColor)

function ChangeColor () {
    let randomNumber = Math.floor(Math.random() * backgroundColor.length)
    console.log(randomNumber);
    const bgColor = backgroundColor[randomNumber]
    body.style.backgroundColor = bgColor;
    color.innerHTML = bgColor
}