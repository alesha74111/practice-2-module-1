(() => {
const refs = {
    openMobileBtn: document.querySelector("[data-mobile-open]"),
    closeMobileBtn: document.querySelector("[data-mobile-close]"),
    mobileMenu: document.querySelector("[data-mobile-menu]"),
    // closeMenu: document.querySelectorAll('.js-close-menu')
    closeMenu: document.querySelectorAll(".menu__close")
    };
    refs.closeMenu.forEach(menu__close => {
            menu__close.addEventListener('click', toggleModal);});
        
    refs.openMobileBtn.addEventListener("click", toggleModal);
    refs.closeMobileBtn.addEventListener("click", toggleModal);
    // refs.closeMenu.addEventListener('click', toggleModal);
    refs.mobileMenu.addEventListener('click', removeModal);
    
    function toggleModal() {
    document.body.classList.toggle("no-scroll");
    refs.mobileMenu.classList.toggle("is-open");
    }

    function removeModal(e) {
        if (e.target === refs.mobileMenu) {
            refs.mobileMenu.classList.toggle('is-open');
            document.body.classList.toggle("no-scroll");
        }
    }
    //animation
    function onEntry(entry) {
        entry.forEach(change => {
    if (change.isIntersecting) {
        change.target.classList.add('element-show');
    }
    });
    }
    const options = {
        threshold: [0.5] };
    const observer = new IntersectionObserver(onEntry, options);
    const elements = document.querySelectorAll('.element-animation');
    for (const elm of elements) {
        observer.observe(elm);
    }
// scroll
    window.onscroll = function () {
        scrollFunction();
    };
    const upbuttons = document.querySelectorAll(".button-up");
        for (const upbutton of upbuttons) {
        upbutton.addEventListener("click", clickHandler);
    }
    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        document.querySelector(href).scrollIntoView({
            behavior: "smooth",
        });
    }

    function scrollFunction() {
        if (
            document.body.scrollTop > 500 ||
            document.documentElement.scrollTop > 500
        ) {
            document.getElementById("btnUp").className = "button-up visible";
        } else {
            document.getElementById("btnUp").className = "button-up hidden";
        }
    }
})();