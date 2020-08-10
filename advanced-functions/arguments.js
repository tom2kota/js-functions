/*
    Объект arguments функции является псевдо-массивом. Внутри функции Вы можете ссылаться к аргументам следующим образом:

    arguments[i]
    где i — это порядковый номер аргумента, отсчитывающийся с 0.
    К первому аргументу, переданному функции, обращаются так arguments[0].
    А получить количество всех аргументов — arguments.length.
    https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Functions
 */

function myConcat(separator) {
    let result = '';
    let i;

    // iterate through arguments
    for (i = 1; i < arguments.length; i++) {
        result += arguments[i] + separator;
    }
    console.log(result)
    return result;
}

myConcat(', ', 'sage', 'basil', 'oregano', 'pepper', 'parsley');
myConcat('; ', 'sage', 'basil', 'oregano', 'pepper', 'parsley');