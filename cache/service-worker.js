/*
    Использование Service Worker
    https://developer.cdn.mozilla.net/ru/docs/Web/API/Service_Worker_API/Using_Service_Workers

    Интерфейс Cache представляет собой механизм хранения пары объектов Request / Response,
    которые кешируются, например, как часть жизненного цикла ServiceWorker.

    Заметьте, что интерфейс Cache доступен как в области видимости окна, так и в области видимости воркеров.
    Не обязательно использовать его вместе с сервис воркерами, даже если интерфейс определен в их спецификации.

    https://developer.mozilla.org/ru/docs/Web/API/Cache

    Замечание: Cache.put, Cache.add и Cache.addAll допускают сохранение в кеш только GET запросов.

    https://developer.mozilla.org/ru/docs/Web/API/Cache/add

    Метод add() интерфейса Cache принимает в качестве параметра URL,
    загружает его и добавляет полученный объект ответа в заданный кеш.
    Метод add() функционально эквивалентен соедующему коду:
 */

const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url).then(function (response) {
    if (!response.ok) {
        throw new TypeError('bad response status');
    }
    return cache.put(url, response);
})