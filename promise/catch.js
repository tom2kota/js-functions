/*
    catch
    Если мы хотели бы только обработать ошибку, то можно использовать null в качестве первого аргумента:
     .then(null, errorHandlingFunction).

     Или можно воспользоваться методом .catch(errorHandlingFunction), который сделает тоже самое

    https://learn.javascript.ru/promise-basics
 */

let promise = new Promise((resolve, reject) => {
    console.log('... setTimeout: 3 sec ...')
    setTimeout(() => reject(new Error("Ошибка!")), 3000);
});

// .catch(f) это тоже самое, что promise.then(null, f)
promise.catch(console.log)
promise.then(null, console.log)