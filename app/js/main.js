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


    // class Tabs {
    //     constructor(navList, navItem, itemActiveClass, contentDBClasses, activeContentClass) {
    //         this.navList = navList;
    //         this.navItem = navItem;
    //         this.itemActiveClass = itemActiveClass;
    //         this.contentDBClasses = contentDBClasses;
    //         this.activeContentClass = activeContentClass;
    //     }

    //     addingActiveClass(navList, navItem, itemActiveClass, contentDBClasses, activeContentClass) {

    //         document.querySelector(navList).addEventListener('click', (e) => {

    //             if (e.target && !e.target.classList.contains(itemActiveClass)) {
    //                 e.target.classList.add(itemActiveClass);
    //             } else {
    //                 return;
    //             }

    //             document.querySelectorAll(navItem).forEach(item => {
    //                 if (item.classList.contains(itemActiveClass) && item != e.target) {
    //                     item.classList.remove(itemActiveClass);
    //                 }
    //             });

    //             for (let i = 0; i < contentDBClasses.length; i++) {
    //                 if (e.target.id && e.target.id.slice(-1) == i + 1) {
    //                     document.querySelector(contentDBClasses[i]).classList.add(activeContentClass);
    //                 } else {
    //                     document.querySelector(contentDBClasses[i]).classList.remove(activeContentClass);
    //                 }
    //             }
    //         });
    //     }
    // }

    // const accountMainNavigation = new Tabs();
    // const contentDBClasses = ['.account-login', '.account-data', 'account-my', '.account-favourites'];
    // accountMainNavigation.addingActiveClass('.account-navigation__list', '.account-navigation__item', 'account-navigation__item--active', 'account-content__inner-visible', contentDBClasses);



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


});