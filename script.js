const burger = document.querySelector(".burger")
const menuLink = document.querySelectorAll(".menu-link")
const hiddenMenu = document.querySelector(".hidden-menu")
const heroSlider = document.querySelector(".sliding-hero-container")
const slidingBackground = document.querySelectorAll(".sliding>.select")

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
    console.log(heroSlider.style.animationName)
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
},500)
