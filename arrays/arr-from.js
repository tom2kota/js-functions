// Array.from() NodeList

const p = document.querySelectorAll('p')
const resultOne = document.getElementById('resultOne')
const resultTwo = document.getElementById('resultTwo')

console.log(p);
console.log(resultOne);
console.log(resultTwo);

let textOne = Array.from(p)
console.log(textOne);
textOne = textOne.map(x => `<h3> ${x.textContent}</h3>`).join(' ')
console.log(textOne);

resultOne.innerHTML = textOne

let textTwo = Array.from(p, x => `<h4> ${x.textContent}</h4>`).join(' ')
console.log(textTwo);

resultTwo.innerHTML = textTwo