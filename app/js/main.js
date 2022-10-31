document.addEventListener("DOMContentLoaded", function () {
    const main = document.querySelector(".main");
    const header = document.querySelector(".header");

    function resizeMainPadding() {
        main.style.paddingTop = `${header.clientHeight + 30}px`;
    }
    resizeMainPadding();

    

});