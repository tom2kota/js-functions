const person = {
    name: 'John',
    lastName: 'Doe',
    job: 'developer'
}
const {job, ...other} = person

console.log(person);
console.log(job, other);