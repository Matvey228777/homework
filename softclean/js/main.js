(function () {
    document.addEventListener('click', burgerTrigger)

    function burgerTrigger(e) {

        const burgerClick = e.target.closest('.burger-icon')
        
        if (burgerClick) {
            e.preventDefault()
            if (document.body.classList.contains('body--opened-menu')) {
                document.body.classList.remove('body--opened-menu')
            }
            else {
                document.body.classList.add('body--opened-menu')
            }
        }
        else return
    }
})();