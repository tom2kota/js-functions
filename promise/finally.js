/*
    finally
    По аналогии с блоком finally из обычного try {...} catch {...}, у промисов также есть метод finally.

    Вызов .finally(f) похож на .then(f, f), в том смысле, что f выполнится в любом случае,
    когда промис завершится: успешно или с ошибкой.

    finally хорошо подходит для очистки, например остановки индикатора загрузки,
    его ведь нужно остановить вне зависимости от результата.

    https://learn.javascript.ru/promise-basics
 */

new Promise((resolve, reject) => {
    console.log('... setTimeout: 2 sec ...')
    setTimeout(() => resolve("result"), 2000)
})
    .finally(() => console.log("Промис завершён"))
    .then(result => console.log(result)); // <-- .then обработает результат