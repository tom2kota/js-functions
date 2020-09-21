/*
    Object.keys, values, entries
    https://learn.javascript.ru/keys-values-entries

    Для простых объектов доступны следующие методы:

    Object.keys(obj) – возвращает массив ключей.
    Object.values(obj) – возвращает массив значений.
    Object.entries(obj) – возвращает массив пар [ключ, значение].
 */

let user = {
    name: "John",
    age: 30
}

console.log(
    Object.keys(user)
)

console.log(
    Object.values(user)
)

console.log(
    Object.entries(user)
)


console.log(
    Object.fromEntries(
        Object.entries(user)
    )
)

