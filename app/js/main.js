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


});