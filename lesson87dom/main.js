const element = document.querySelectorAll('.block')
element.forEach ((block)=>{
    block.style.color = 'red'
})
element[0].textContent = 'Hello,'
element[1].textContent = 'stranger'
for (let i = 0; i<=element.length;i++) {
    let k = (i+2)*10
    element[i].style.fontSize = `${k+2}px`
}
console.log(element[0])
console.log(element[1])