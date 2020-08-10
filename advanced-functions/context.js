/*
    КОНТЕКСТ ВЫПОЛНЕНИЯ ФУНКЦИЙ
    Когда функция производит вызов вложенной функции, происходит следующее:

    выполнение текущей функции приостанавливается;
    контекст выполнения, связанный с ней, запоминается в специальной структуре данных – стеке контекстов выполнения.
    выполняются вложенные вызовы, для каждого из которых создаётся свой контекст выполнения;
    после завершения вложенных функций предыдущий контекст достаётся из стека,
    и выполнение внешней функции возобновляется с того места, где она была остановлена.

    https://flagman.top/about-business/php-i-t-p-uzelki/kontekst-vypolneniya-i-oblast-vidimosti-v-javascript

    Когда функция createGenerator() производит вызов вложенной функции genNewID(), происходит следующее:

    выполнение текущей функции createGenerator() приостанавливается;
    контекст выполнения, связанный с ней, запоминается в специальной структуре данных – стеке контекстов выполнения.
    выполняются вложенные вызовы функции genNewID(), для каждого из них создаётся свой контекст выполнения;
    после завершения вложенной функции предыдущий контекст достаётся из стека,
    и выполнение внешней функции возобновляется с того места, где она была остановлена.
 */

// Global execution context
function createGenerator(prefix) {
    // createGenerator() function context
    let index = 0;

    return function genNewId() {
        // genNewId() function context
        index++;
        return prefix + index.toString()
        // end genNewId() function context
    }
    // end createGenerator() function context
}

console.log(createGenerator('xxx-')());


let generateNewId = createGenerator('function call #')
console.log(generateNewId())
console.log(generateNewId())
console.log(generateNewId())
console.log(generateNewId())
console.log(generateNewId())
console.log(generateNewId())

// end Global execution context