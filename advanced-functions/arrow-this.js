/*
    Стрелочные функции — функции вида "arrow function expression" (неверно fat arrow function) —
    имеют укороченный ситаксис по сравнению с function expression и лексически связывает значение this.
    Стрелочные функции всегда анонимны.

    На введение стрелочных функций повлияли два фактора:
    - более короткие функции и
    - лексика this.

    До стрелочных функций каждая новая функция определяла свое значение this
    (новый объект в случае конструктора, undefined в strict mode,
    контекстный объект, если функция вызвана как метод объекта, и т.д.).
    Это оказалось раздражающим с точки зрения объектно-орентированного стиля программирования.

    В arrow function значением this является окружающий его контекст
    https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Functions
 */

function Person() {
    this.age = 0;

    setInterval(() => {
        this.age++; // |this| должным образом ссылается на объект Person

        console.log(this.age)
    }, 1000);
}

const p = new Person();

console.log(p)