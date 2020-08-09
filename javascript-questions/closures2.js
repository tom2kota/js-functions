

((a = 2) => {
    let b = 1;
    (() => console.log('(() => console.log(a, b))(): ', a, b))()
})()
