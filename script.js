const burger = document.querySelector(".burger") 
const menuLink = document.querySelectorAll(".menu-link")
const hiddenMenu = document.querySelector(".hidden-menu")
const slidingLoader = document.querySelector(".sliding-loader")

function handleBurgerClick() {
    this.classList.toggle("active")
    this.classList.toggle("inactive")
    document.querySelector(".hidden-menu").classList.toggle("active")
}

burger.addEventListener("click", handleBurgerClick)

function handleMenuHover() {
    this.querySelector(".menu-number").style.color = "goldenrod"
    this.querySelector("a").style.color = "goldenrod"
    this.querySelector(".menu-line").style.width = "100px"
}

function handleMenuOut() {
    this.querySelector(".menu-number").style.color = "gray"
    this.querySelector("a").style.color = "#aaa"
    this.querySelector(".menu-line").style.width = "0px"
}

menuLink.forEach((element) => {
    element.addEventListener("mouseover", handleMenuHover)
    element.addEventListener("mouseout", handleMenuOut)
})