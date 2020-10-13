const profile = {
    firstName: 'x',
    lastName: 'y',
    setName: function (name) {
        let splitName = (n) => {
            let nameArray = n.split(' ')

            this.firstName = nameArray[0]
            this.lastName = nameArray[1]
        }
        splitName(name)
    }
}

profile.setName('tom bob')

console.log(profile.firstName)  // tom


