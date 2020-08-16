// Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.

let arr = ['Метод', 'filter()', 'создаёт', 'новый массив', 'со всеми элементами', 'прошедшими проверку', 'задаваемую', 'в передаваемой функции']
console.log(arr);

let arrFiltered = arr.filter(x => x.length > 10)
console.log(arrFiltered);