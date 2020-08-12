const promise = new Promise((resolve, reject) => {
    if (!true) {
        setTimeout(() => resolve('resolved ...'), 2000)
    } else {
        reject('rejected ...')
    }
})

promise.then(console.log)
promise.catch(console.log)