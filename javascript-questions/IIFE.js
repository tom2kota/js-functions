(
    function () {
        let a = b = 100
        console.log(a)  // 100
        console.log(b)  // 100
    }
)()

// console.log(a) // ReferenceError: a is not defined
// console.log(b)

// console.log(b)  // 100 - becomes Global
// console.log(a)  // ReferenceError: a is not defined
