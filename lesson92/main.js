const btn = document.querySelector('.btn')
const btnX = document.querySelector('.btnX')
const modal = document.querySelector('.modal')
const body = document.querySelector('.body')

const open = () => {
    modal.classList.add('modal--open')
    body.classList.add('body--fixed')
}
const close = () => {
    modal.classList.remove('modal--open')
    body.classList.remove('body--fixed')
}

btn.addEventListener ('click', open)

modal.addEventListener ('click', event => {
    const target = event.target
    if (target && target.classList.contains('modal') || target.classList.contains('btnX')) {
        close()
    }
})

document.addEventListener('keydown', event => {
    const click = event.code
    if (click=='Escape') {
        close()
    }
})

// const btn = document.querySelector('.btn')
// const body = document.querySelector('body')
// console.log(body)
// let red = true
// function lights() {
//     if (red==true) {
//         body.style.background = 'blue'
//         red = false
//     } else {
//         body.style.background = 'red'
//         red = true
//     }
// }
// btn.addEventListener('click',lights)
