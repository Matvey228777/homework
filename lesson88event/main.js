const btn = document.querySelector('.btn')
const body = document.querySelector('body')
console.log(body)
let red = true
function lights() {
    if (red==true) {
        body.style.background = 'blue'
        red = false
    } else {
        body.style.background = 'red'
        red = true
    }
}
btn.addEventListener('click',lights)