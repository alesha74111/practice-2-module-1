(() => {
const refs = {
    openMobileBtn: document.querySelector("[data-mobile-open]"),
    closeMobileBtn: document.querySelector("[data-mobile-close]"),
    mobileMenu: document.querySelector("[data-mobile-menu]"),
    };

refs.openMobileBtn.addEventListener("click", toggleModal);
refs.closeMobileBtn.addEventListener("click", toggleModal);

function toggleModal() {
    // document.body.classList.toggle("data-mobile-menu");
    refs.mobileMenu.classList.toggle("is-open");
    }

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