/*
    У стрелочных функций нет «this»

    Стрелочные функции не имеют «arguments»

    Не могут быть вызваны с new

    У них также нет super

    Всё это потому, что они предназначены для небольшого кода, который не имеет своего «контекста», выполняясь в текущем.

    https://learn.javascript.ru/arrow-functions
 */

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList() {
        this.students.forEach(
            student => console.log(this.title + ': ' + student)
            // student => console.log(this)
        );
    }
};

group.showList();