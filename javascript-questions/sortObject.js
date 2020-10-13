const items = [
    {name: 'Edward', value: 21},
    {name: 'Sharpe', value: 37},
    {name: 'And', value: 45},
    {name: 'The', value: -12},
    {name: 'Magnetic'},
    {name: 'Zeros', value: 37}
];

console.log('Sort by name: ',
    items.sort(
        (a, b) => {
            if (a.name > b.name) {
                return 1
            }
            if (a.name < b.name) {
                return -1
            }
            return 0
        }
    )
)

console.log('Sort by value: ',
    items.sort(
        (a, b) => {
            if (a.value > b.value) {
                return 1
            }
            if (a.value < b.value) {
                return -1
            }
            return 0
        }
    )
)
