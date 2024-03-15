function Hello(name) {
    return console.log('Hello',name)
}

Hello('Masha')

console.log('-------------------------------------------------------------------------------------')/////////////////////////////

function select(list) {
    for (let i=0;i<list.length;i++) {
        if (list[i]<10) {
            console.log(list[i])
        } else {console.log(list[i],'Не подходит')}
    }
}

select([1,2,3,11,12])

console.log('-------------------------------------------------------------------------------------')///////////////////////////////

function calc(x,y,action) {
    if (action == 'plus') {
        return console.log(x+y,'Плюс')
    } else if (action == 'minus') {
        return console.log(x-y,'Минус')
    } else if (action == 'multi') {
        return console.log(x*y,'Произведение')
    } else if (action == 'div') {
        return console.log(x/y,'Деление')
    }
}

let l = ['plus','minus','multi','div']
for (let i=0;i<l.length;i++) {
    calc(2,3,l[i])
}