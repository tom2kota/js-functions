/*
    JavaScript спроектирован на основе простой парадигмы. В основе концепции лежат простые объекты.
    Объект — это набор свойств, и каждое свойство состоит из имени и значения, ассоциированного с этим именем.
    Значением свойства может быть функция, которую можно назвать методом объекта.
    В дополнение к встроенным в браузер объектам, вы можете определить свои собственные объекты.
    Эта глава описывает как пользоваться объектами, свойствами, функциями и методами, а также как создавать свои собственные объекты.

    https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Working_with_Objects
 */

const myCar = new Object();

let yourCar = {};
// yourCar = myCar;

myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;
myCar["type of fuel"] = "hybrid xxx";
delete myCar.year;

console.log(myCar)
console.log(myCar.year)
console.log(myCar.color)
console.log(myCar["type of fuel"])

console.log(myCar === yourCar)