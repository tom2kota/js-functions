const x = [1, 2, 3]

x[-1] = -1

console.log(x[x.indexOf(100)])

console.log('Because of [1, 2, 3].indexOf(100) : ', [1, 2, 3].indexOf(100))
console.log('[1, 2, 3].indexOf(1) : ', [1, 2, 3].indexOf(1))
console.log('[1, 2, 3].indexOf(2) : ', [1, 2, 3].indexOf(2))
console.log('[1, 2, 3].indexOf(3) : ', [1, 2, 3].indexOf(3))
console.log('But not [1, 2, 3][-1] = -1 : ', [1, 2, 3][-1] = -1)
