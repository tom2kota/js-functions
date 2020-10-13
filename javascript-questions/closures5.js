const addTo = function (passed) {

    let add = function (inner) {
        return passed + inner
    }

    return add
}

let addTree = new addTo(3)
let addFour = new addTo(4)

console.log(addTree(1))
console.log(addFour(1))
