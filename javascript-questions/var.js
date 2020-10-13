let x = function () {

    if (true) {
        console.log(v) // undefined
        // console.log(l) // ReferenceError: Cannot access 'l' before initialization

        var v = 10
        let l = 100
    }

    // console.log(v)  // 10
    // console.log(l) // ReferenceError: l is not defined
}

x()
