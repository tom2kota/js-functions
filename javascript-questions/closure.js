let obj = function () {
    let i = 0

    return {
        setI(k) {
            i = k
        },
        getI() {
            return i
        }
    }
}

let x = obj()

x.setI(2)
x.setI(5)

console.log(x.getI())
