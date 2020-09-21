const text = 'Hi there !'
const newText = [...text]

console.log(text);
console.log(newText);

const arrOne = ['one', 'two', 'three']
const arrTwo = [1,2,3]
const string = 'string'

const arrCopy = [string, ...arrOne, ...arrTwo]
console.log(arrCopy);

const freshCopy = [...arrCopy]
console.log('copy of array: ',freshCopy);