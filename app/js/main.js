document.addEventListener("DOMContentLoaded", function () {
    const main = document.querySelector(".main");
    const header = document.querySelector(".header");

    function resizeMainPadding() {
        main.style.paddingTop = `${header.clientHeight + 30}px`;
    }
    resizeMainPadding();

    class Slider {
        constructor(owlElement, owlOptions) {
            this.owlElement = owlElement;
            this.owlOptions = owlOptions;
        }

        addSlider(owlElement, owlOptions) {
            $(owlElement).owlCarousel(owlOptions);
        }
    }

    const slider = new Slider();

    slider.addSlider(".slider", {
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            1100: {
                items: 2
            },
            1300: {
                items: 1
            },
            1500: {
                items: 2,
            }
        }
    });



    function accountMainTabs() {
        const accountNavItem = $(".account-navigation__tabs");
        const accountContent = $(".account-content__inner");

        accountNavItem.on("click", function () {
            let activeContent = $(this).attr("data-target");
            accountNavItem.removeClass("account-navigation__item--active");
            if (!$(this).hasClass('account-navigation__user')) {
                $(this).addClass("account-navigation__item--active");
            }
            accountContent.removeClass("account-content__inner--visible");
            $(activeContent).addClass("account-content__inner--visible");
        });
    }
    accountMainTabs();


    function accountNewTabs() {
        const accountNavItem = $(".account-content__new-item");
        const accountContent = $(".account-content__new-block");

        accountNavItem.on("click", function () {
            let activeContent = $(this).attr("data-target");
            accountNavItem.removeClass("account-content__new-item--active");
            $(this).addClass("account-content__new-item--active");
            accountContent.removeClass("account-content__new-block--active");
            $(activeContent).addClass("account-content__new-block--active");
        });
    }
    accountNewTabs();


    function openModal(){
        const modal = document.querySelector('.modal');
        const changePasswordBtn = document.querySelector('.form__change-password');
        const modalCloseBtn = document.querySelector('.modal__btn-close');

        changePasswordBtn.addEventListener('click', () => {
            modal.style.display = 'block';
        });
        modalCloseBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

    }
    openModal();


});