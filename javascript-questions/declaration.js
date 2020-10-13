functionDeclaration()  // Function Declaration
console.log(functionExpression())  // ReferenceError: Cannot access 'functionExpression' before initialization

function functionDeclaration() {
    console.log('Function Declaration')
}

let functionExpression = function () {
    console.log('Function Expression')
}

functionExpression()  // Function Expression
