/*
    колбэки
    Многие действия в JavaScript асинхронные.

    https://learn.javascript.ru/callbacks

    В функции, которые выполняют какие-либо асинхронные операции, передаётся аргумент callback — функция,
    которая будет вызвана по завершению асинхронного действия.
    Код абсолютно рабочий, но кажется разорванным на куски. Его трудно читать, вы наверняка заметили это.
    Приходится прыгать глазами между кусками кода, когда пытаешься его прочесть.
    Это неудобно, особенно, если читатель не знаком с кодом и не знает, что за чем следует.

    Кроме того, все функции step* одноразовые, и созданы лишь только, чтобы избавиться от «адской пирамиды вызовов».
    Никто не будет их переиспользовать где-либо ещё. Таким образом, мы, кроме всего прочего, засоряем пространство имён.

    К счастью, такие способы существуют. Один из лучших — использовать промисы.
 */

loadScript('1.js', step1)


function loadScript(s, step1) {
    console.log('function loadScript, s:', s);
    step1()
}

function handleError(error) {
    console.log('error: ', error);
    return 0
}

function step1(error, script) {
    if (error) {
        handleError(error);
    } else {
        // ...
        loadScript('2.js', step2);
    }
}

function step2(error, script) {
    if (error) {
        handleError(error);
    } else {
        // ...
        loadScript('3.js', step3);
    }
}

function step3(error, script) {
    if (error) {
        handleError(error);
    } else {
        // ...и так далее, пока все скрипты не будут загружены (*)
    }
}