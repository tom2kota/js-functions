const sum = (a, b, c, d) => a + b + c + d
console.log('sum(10, 10, 10, 10): ', sum(10, 10, 10, 10))

const curriedSum = (a) => (b) => (c) => (d) => a + b + c + d
console.log('curriedSum(5)(5)(5)(5): ', curriedSum(5)(5)(5)(5))

const curriedSum5 = curriedSum(5)
console.log('curriedSum5(1000)(1000)(1000): ', curriedSum5(1000)(1000)(1000))