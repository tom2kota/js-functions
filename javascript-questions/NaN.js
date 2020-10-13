/*
    В отличие от других возможных значениях в JavaScript, при работе с значением данного типа невозможно
    полагаться на == и === для определения, является ли переменная или литерал нечисловым значением (NaN)
    или нет, так как проверки NaN == NaN и NaN === NaN в качестве значения вернут false.
    Следовательно, для проверки нужна функция isNaN.

    https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/isNaN
 */

console.log(
    isNaN(NaN)
)

console.log(
    NaN == NaN
)

console.log(
    NaN === NaN
)

console.log(
    false === false
)

console.log(
    isNaN("37.37")   // false: "37.37" преобразуется в число 37.37 которое не NaN
)

console.log(
    isNaN("37,5")    // true
)

console.log(
    isNaN("ssd")   // true
)

console.log(
    isNaN(1)   // false
)
