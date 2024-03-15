let users = [
    {
        name:'sanya',
        age: 19,
        loc: 'moscow',
    },
    {
        name:'roma',
        age: 12,
        loc: 'voronezh',
    },
    {
        name:'nikita',
        age: 22,
        loc: 'samara',
    }
]

let userLoc = []

users.forEach((user) => {
    userLoc.push(user.loc)
})

userLoc.forEach((loc) =>{
    console.log(loc)
})

