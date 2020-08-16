// Array.from - returns array object from any object with a length property or an iterable object
// turns array like into array (string, nodeList, Set)

const text = 'Hi there!'
const arr = Array.from(text)
console.log(arr);

function countTotal() {
    let total = Array.from(arguments).reduce(
        (total, currNum) => (total += currNum), 0
    )
    console.log(total)
}

countTotal(11, 22, 33, 44, 55, 66)