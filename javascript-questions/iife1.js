/*
function foo(){ }()

    IIFE расшифровывается как Immediately Invoked Function Expression - немедленно вызываемое функциональное выражение.
    Синтаксический анализатор JavaScript читает function foo(){ } (); как function foo(){ } и ();,
    где первое выражение - это объявление функции, а второе (пара скобок) - попытка вызова функции,
    но так как имя не указано, он выдает ошибку Uncaught SyntaxError: Unexpected token.
 */

(function one() {
    }
)()

function three() {
}

three()