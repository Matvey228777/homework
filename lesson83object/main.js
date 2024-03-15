let me = {
    me: {
        name: 'Евпатий',
        age: 93+' лет',
        height: 199+' см',
        edu: 'Сварочный колледж села Иваново'
    }
}

let sp = '|||'
console.log(me.me.name+sp+me.me.age+sp+me.me.height+sp+me.me.edu)

console.log('--------------------------------------------------------------------------------')////////////////////////

let obj = {
    obj: {
        helloName(name) {
            console.log('Hello '+name)
        }
    }
}

obj.obj.helloName('Ivan')

console.log('-----------------------------------------------------------------------------------')///////////////////////////////

let list = [
    {
        name: 'Ivan',
        isAdmin: true
    },
    {
        name: 'Arthur',
        isAdmin: false
    },
    {
        name: 'Alex',
        isAdmin: false
    },
    {
        name: 'Sergey',
        isAdmin: true
    },
    {
        name: 'Kirill',
        isAdmin: false
    },
    {
        name: 'Ilya',
        isAdmin: false
    },
    {
        name: 'Sanya',
        isAdmin: false
    },
    {
        name: 'Evpatiy',
        isAdmin: true
    },
]

let amountNAdm = 0
for (let i = 0;i<list.length;i++) {
    if (list[i].isAdmin==false) {
        amountNAdm++
    }
}

console.log(amountNAdm)