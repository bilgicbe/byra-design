const burger = document.querySelector(".burger")
const menuLink = document.querySelectorAll(".menu-link")
const hiddenMenu = document.querySelector(".hidden-menu")
const heroSlider = document.querySelector(".sliding-hero-container")
const slidingBackground = document.querySelectorAll(".sliding>.select")
const scrollButton = document.querySelector(".scroll-button")

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

function handleHeroSlide() {
    if (heroSlider.style.animationName == 'slide') {
        heroSlider.style.animationName = 'slide2'
    } else {
        heroSlider.style.animationName = 'slide'
    }
}

function handleElementDrag() {
    heroSlider.appendChild(heroSlider.firstElementChild)
    
    handleBackgroundTransition()
    document.querySelector('.select').style.transition = 'none'
    document.querySelector('.trans-toggle').classList.toggle('trans-toggle')
    setTimeout(()=>{
        document.querySelector('.select').style.transition = 'background-size 4s linear'
    },10)
}


function handleBackgroundTransition() {
    document.querySelector('.trans-toggle').parentElement.nextElementSibling.firstElementChild.classList.toggle('trans-toggle')
}

heroSlider.addEventListener("animationend", handleElementDrag)
slidingBackground.forEach((element)=> {
    element.addEventListener("transitionend", handleHeroSlide)
})

setTimeout(()=>{
    document.querySelector('.hero-slider-background-1').classList.toggle('trans-toggle')
},1200)

const loadingScreen = document.querySelector(".loading-screen")
const preloadingAnimation = document.querySelector(".screen-group-1")

setTimeout(()=>{
    loadingScreen.style.backgroundColor = "transparent"
},1100)

preloadingAnimation.addEventListener("animationend", () => loadingScreen.style.display = "none")

window.addEventListener("scroll", () => {
    let toTop = document.querySelector(".to-top")
    let toAbout = document.querySelector(".to-about")
    if (window.pageYOffset > document.querySelector(".about-container").offsetTop) {
        toTop.style.display = "flex"
        toAbout.style.display = "none"
    } else {
        toTop.style.display = "none"
        toAbout.style.display = "flex"
    }
})

var aboutSection = document.getElementById("about")
var topSection = document.getElementById("body")
document.querySelector(".to-top").addEventListener("click",()=>topSection.scrollIntoView())
document.querySelector(".to-about").addEventListener("click",()=>aboutSection.scrollIntoView())

const aboutUsImage = document.querySelectorAll(".about-us-image")

function handleFilter() {
    this.previousElementSibling.style.opacity = "1"
}

function handleFilter2() {
    this.previousElementSibling.style.opacity = "0"
}

aboutUsImage.forEach((element)=>{
    element.addEventListener("mouseover",handleFilter)
    element.addEventListener("mouseout",handleFilter2)
})