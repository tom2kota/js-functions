const add80 = (n) => {
    console.log('... calculation in progress ... ')
    return n + 80
}

console.log('add80(n) call #1: ', add80(100));
console.log('add80(n) call #2: ', add80(100));
console.log('add80(n) call #3: ', add80(100));
console.log('add80(n) call #4: ', add80(100));
console.log('add80(n) call #5: ', add80(100));

let cache = {}

const mem80 = (n) => {
    console.log('cache: ', cache)
    if (n in cache) {
        return cache[n]
    } else {
        console.log('... calculation in progress ... ')
        cache[n] = n + 80
        return cache[n]
    }
}

console.log('==============CACHED===================')
console.log('mem80(n) call #1: ', mem80(100));
console.log('mem80(n) call #2: ', mem80(100));
console.log('mem80(n) call #3: ', mem80(100));
console.log('mem80(n) call #4: ', mem80(100));
console.log('mem80(n) call #5: ', mem80(100));