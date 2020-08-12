const fetch = require("node-fetch");

(async () => {
    try {
        const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users')
        const usersJson = await usersResponse.json()
        const secondUser = usersJson[1]
        console.log(secondUser)
        console.log('... Posts of user (secondUser.id): #', secondUser.id)

        const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + secondUser.id)
        const postsJson = await postsResponse.json()
        console.log(postsJson);
    } catch (e) {
        console.log('... ERROR! ...', e)
    }
})()

