const arr = [122, 4, 22, 65, 2, 9]

console.log(arr.sort()) // sort it as a string [ 122, 2, 22, 4, 65, 9 ]

console.log(arr.sort((a, b) => a - b)) // sort it as a number [ 2, 4, 9, 22, 65, 122 ]

console.log(arr.sort((a, b) => b - a)) // sort it as a number [ 122, 65, 22, 9, 4, 2 ]

let sortedAscending = arr.sort((a, b) => a - b)
console.log(sortedAscending)

let sortedDescending = arr.sort((a, b) => b - a)
console.log(sortedDescending)
