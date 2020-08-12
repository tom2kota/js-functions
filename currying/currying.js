/*
    Каррирование (от англ. currying, иногда — карринг) — преобразование функции от многих аргументов в набор функций,
    каждая из которых является функцией от одного аргумента.

    https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5
 */

const multiply = (a, b) => a * b
console.log('multiply(10, 10): ', multiply(10, 10))

const curriedMultiply = (a) => (b) => a * b
console.log('curriedMultiply(5)(5): ', curriedMultiply(5)(5))

const curriedMultiply5 = curriedMultiply(5)
console.log('curriedMultiply5(1000): ', curriedMultiply5(1000))