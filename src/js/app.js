import "../css/main.scss";
import { RandomGenerator } from "./random-generator.js";

let se6_test = 10;
let h = document.createElement("h1");
h.innerHTML = "Babel ES6!"
document.querySelector('body').append(h);

const outputParagraph = document.querySelector('#outputParagraph');

const outputRandomInt = () => {
    outputParagraph.textContent = RandomGenerator.randomInteger();
};

const outputRandomRange = () => {
    outputParagraph.textContent = RandomGenerator.randomRange(1, 500);
};

const buttonRndInt = document.querySelector('#randomInt');
const buttonRndRange = document.querySelector('#randomRange');

buttonRndInt.addEventListener('click', outputRandomInt);
buttonRndRange.addEventListener('click', outputRandomRange);
