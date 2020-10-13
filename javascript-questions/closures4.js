/*
    closure with lexical scoping - passed is available inside addTo()
 */

let passed = 3

const addTo = function () {
    let inner = 2

    return passed + inner
}

console.log(addTo())  // 5
console.dir(addTo)
