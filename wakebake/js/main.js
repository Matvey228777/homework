(function () {
    document.addEventListener('click', burgerTrigger)

    function burgerTrigger(e) {

        const burgerClick = e.target.closest('.burger-icon')
        const linkClick = e.target.closest('.nav__link')

        if (burgerClick || (linkClick && document.body.classList.contains('body--opened-menu'))) {
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

(function () {
    document.addEventListener('click', modalTrigger)
    document.addEventListener('keydown', keyTrigger)

    function modalTrigger(e) {
        const modalClick = e.target.closest('.about__button-click')
        const cancelClick = e.target.closest('.modal__cancel')
        const milkClick = e.target.closest('.modal__inner')

        if (modalClick) {
            document.body.classList.add('modal--opened-window')
        }
        else if (cancelClick || (!(milkClick))) {
            document.body.classList.remove('modal--opened-window')
        }
    }

    function keyTrigger(e) {
        if (e.keyCode === 27) {
            document.body.classList.remove('modal--opened-window')
        }
    };
})();

(function () {

    document.addEventListener('click', tabShow)

    function tabShow(e) {
        const controlTrigger = e.target.closest('.tab-controls__item')
        const tabTrigger = e.target.closest('.tab-controls__link')
        if (!tabTrigger) return
        e.preventDefault()
        if (controlTrigger.classList.contains('tab-controls__item--active')) return

        document.querySelector('.tab-controls__item--active').classList.remove('tab-controls__item--active')
        controlTrigger.classList.add('tab-controls__item--active')

        const tabSelect = tabTrigger.getAttribute('href')
        const tabContent = document.querySelector(tabSelect)

        document.querySelector('.program__tab-content--show').classList.remove('program__tab-content--show')
        tabContent.classList.add('program__tab-content--show')
    }
})();

(function () {
    const accordionLists = document.querySelectorAll('.accordion-list')
    accordionLists.forEach(el => {
        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__control')
            if (!accordionControl) return
            const accordionItem = accordionControl.parentElement
            const accordionContent = accordionControl.nextElementSibling
            const accordionSvg = accordionControl.children[1]

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }

            accordionItem.classList.toggle('accordion-list__item--opened')
            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
            } else {
                accordionContent.style.maxHeight = null
            }
        })
    })
})();

(function () {
    const swiper = new Swiper('.gallery__slider', {
        spaceBetween: 32,
        slidesPerView: 1.4,

        pagination: {
            el: '.gallery__pagination',
            type: 'fraction'
        },

        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },
        
        breakpoints: {
            1101: {
                slidesPerView: 4,
            },
            601: {
                slidesPerView: 3,
            },
            501: {
                slidesPerView: 2
            }
        },
    });
})();

// слайдер отзывы

(function () {
    const swiper = new Swiper('.testimonials__slider', {
        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: true,

        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: false,
        },

        breakpoints: {
            901: {
                slidesPerView: 1.5,
            },
            1201: {
                slidesPerView: 2.1,
            },
        },
    });
})();


// маска телефона

(function () {
    const tellInputs = document.querySelectorAll('.contact__form-input--tel')
    const im = new Inputmask('+7 (999) 999-99-99')
    im.mask(tellInputs)
})();