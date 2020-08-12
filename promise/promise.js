/*
    У объекта promise, возвращаемого конструктором new Promise, есть внутренние свойства:

    - state («состояние») — вначале "pending" («ожидание»), потом меняется на "fulfilled" («выполнено успешно»)
    при вызове resolve или на "rejected" («выполнено с ошибкой») при вызове reject.

    - result («результат») — вначале undefined, далее изменяется на value при вызове resolve(value)
    или на error при вызове reject(error).

    https://learn.javascript.ru/promise-basics
 */

let promise = new Promise(function (resolve, reject) {
    console.log('... setTimeout: 3 sec ...')
    setTimeout(() => {
        resolve("done")
    }, 3000);
});

promise.then(console.log)
promise.catch(console.log)

// resolve запустит первую функцию, переданную в .then
// promise.then(
//     result => console.log(result), // выведет "done!" через 3 секунду
//     error => console.log(error) // не будет запущена
// );