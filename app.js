const btnstyle = document.querySelector(".toggle-btn");
const header = document.querySelector(".main-header");
const clickoverlay = document.querySelector(".overlay");

btnstyle.addEventListener('click', function () {
    btnstyle.classList.toggle("open");
    header.classList.toggle("open");
    clickoverlay.classList.toggle("open");
})