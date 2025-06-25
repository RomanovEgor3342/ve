const sideBarBtn = document.querySelector(".header-top-side-bar-btn");
const headerMenu = document.querySelector(".header-bottom");
const header = document.quer

sideBarBtn.addEventListener("click", () => {
    sideBarBtn.classList.toggle("active")
    headerMenu.classList.toggle("active")
})

