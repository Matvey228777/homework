const btn = document.querySelector('.btn')
const text = document.querySelector('.text')
console.log(text)
btn.addEventListener ('click',()=>{
    text.classList.toggle('hehe')
    if (text.classList.contains('hehe')){
        text.textContent = ('Bye-bye')
    } else {
        text.textContent = ('Hello')
    }
})