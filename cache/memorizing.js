const str1 = 'xxx1'
const str2 = 'xxx2'

function mem(str) {
    if (!mem.cache) {
        console.log(mem.cache);
        mem.cache = (typeof str !== undefined) ? str : null;
        console.log(mem.cache);
    }
}

mem(str1)
mem(str2)

console.log(mem.cache);