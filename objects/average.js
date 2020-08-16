const person = {
    name: 'Bob',
    age: 22
}

const getAverage = (name, ...rest) => {
    console.log(name);
    console.log(rest);

    let total = 0;
    for (let number in rest) {
        total += number
    }
    console.log(`${name}'s average number: ${total / rest.length}`)
}

getAverage(person.name, 55, 33, 55, 77, 99)