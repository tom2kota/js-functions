let x = [1, 2, 3] + [4, 5, 6] // 1,2,34,5,6 - converted to string

console.log(x)
console.log(typeof x)

let y = [...[1, 2, 3], ...[4, 5, 6]]

console.log(y)
console.log(typeof y)

let z = String(y)
console.log(z)
console.log(typeof z)
