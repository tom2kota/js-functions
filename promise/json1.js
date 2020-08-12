const fetch = require("node-fetch");

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    // .then(json => console.log(json))
    .then(users => {
        const firstUser = users[0];
        console.log('... Posts of user (firstUser.id): #', firstUser.id)
        // console.log(firstUser)

        return fetch('https://jsonplaceholder.typicode.com/posts?userId=' + firstUser.id)

    })
    .then(response => response.json())
    .then(json => console.log(json))
.catch(error => console.log('   ...ERROR! ...   ', error))