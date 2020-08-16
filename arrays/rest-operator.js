const fruits = ['apple', 'banana', 'orange', 'pineapple']
const [first] = fruits
const [, second, ...rest] = fruits

console.log(fruits);
console.log(first);
console.log(second, rest);
console.log(typeof second);
console.log(typeof rest);
