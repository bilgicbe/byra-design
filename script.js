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
    setTimeout(() => {
        document.querySelector('.select').style.transition = 'background-size 4s linear'
    }, 10)
}


function handleBackgroundTransition() {
    document.querySelector('.trans-toggle').parentElement.nextElementSibling.firstElementChild.classList.toggle('trans-toggle')
}

heroSlider.addEventListener("animationend", handleElementDrag)
slidingBackground.forEach((element) => {
    element.addEventListener("transitionend", handleHeroSlide)
})

setTimeout(() => {
    document.querySelector('.hero-slider-background-1').classList.toggle('trans-toggle')
}, 1200)

const loadingScreen = document.querySelector(".loading-screen")

setTimeout(() => {
    loadingScreen.style.backgroundColor = "transparent"
}, 1100)

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
document.querySelector(".to-top").addEventListener("click", () => topSection.scrollIntoView())
document.querySelector(".to-about").addEventListener("click", () => aboutSection.scrollIntoView())

const aboutUsImage = document.querySelectorAll(".about-us-image")

function handleFilter() {
    this.previousElementSibling.style.opacity = "1"
}

function handleFilter2() {
    this.previousElementSibling.style.opacity = "0"
}

aboutUsImage.forEach((element) => {
    element.addEventListener("mouseover", handleFilter)
    element.addEventListener("mouseout", handleFilter2)
})

const portfolioLinks = document.querySelectorAll(".portfolio-link")
console.log(document.querySelector(".screen-1").style.animationName)
portfolioLinks.forEach((element) => {
    element.addEventListener("mouseover", () => element.querySelector(".line-absolute").style.width = "100%")
    element.addEventListener("mouseout", () => element.querySelector(".line-absolute").style.width = "0%")
    element.addEventListener("click", () => {
        console.log(document.querySelector(".screen-1").style.animationName)
        document.querySelector(".screen-1").style.animationName = "reverse1"
        document.querySelector(".screen-2").style.animationName = "reverse2"
        document.querySelector(".screen-3").style.animationName = "reverse3"
        document.querySelector(".screen-4").style.animationName = "reverse4"
        setTimeout(() => {
            zoomedPortfolio.style.opacity = '1'
            zoomedPortfolio.style.pointerEvents = "all"
        }, 1000)
    })
})

portfolioLinks[0].addEventListener("mouseover", () => document.querySelector(".t01").style.opacity = "1")
portfolioLinks[0].addEventListener("mouseout", () => document.querySelector(".t01").style.opacity = "0")
portfolioLinks[1].addEventListener("mouseover", () => document.querySelector(".t02").style.opacity = "1")
portfolioLinks[1].addEventListener("mouseout", () => document.querySelector(".t02").style.opacity = "0")
portfolioLinks[2].addEventListener("mouseover", () => document.querySelector(".t03").style.opacity = "1")
portfolioLinks[2].addEventListener("mouseout", () => document.querySelector(".t03").style.opacity = "0")
portfolioLinks[3].addEventListener("mouseover", () => document.querySelector(".t04").style.opacity = "1")
portfolioLinks[3].addEventListener("mouseout", () => document.querySelector(".t04").style.opacity = "0")
portfolioLinks[4].addEventListener("mouseover", () => document.querySelector(".t05").style.opacity = "1")
portfolioLinks[4].addEventListener("mouseout", () => document.querySelector(".t05").style.opacity = "0")

const zoomedPortfolio = document.querySelector(".zoomed-portfolio")
portfolioLinks[0].addEventListener("click", () => {
    zoomedPortfolio.style.backgroundImage = 'url(./img/portfolio/portfolio1C.jpg)'
})
portfolioLinks[1].addEventListener("click", () => {
    zoomedPortfolio.style.backgroundImage = 'url(./img/portfolio/portfolio2C.jpg)'
})
portfolioLinks[2].addEventListener("click", () => {
    zoomedPortfolio.style.backgroundImage = 'url(./img/portfolio/portfolio3C.jpg)'
})
portfolioLinks[3].addEventListener("click", () => {
    zoomedPortfolio.style.backgroundImage = 'url(./img/portfolio/portfolio4C.jpg)'
})
portfolioLinks[4].addEventListener("click", () => {
    zoomedPortfolio.style.backgroundImage = 'url(./img/portfolio/portfolio5C.jpg)'
})

document.querySelector(".cross").addEventListener("click", () => {
    document.querySelector(".screen-1").style.animationName = "preloader1"
    document.querySelector(".screen-2").style.animationName = "preloader2"
    document.querySelector(".screen-3").style.animationName = "preloader3"
    document.querySelector(".screen-4").style.animationName = "preloader4"
    setTimeout(() => {
        zoomedPortfolio.style.opacity = '0'
        zoomedPortfolio.style.pointerEvents = "none"
    }, 1000)
    let portfolioSection = document.getElementById("portfolio")
    portfolioSection.scrollIntoView()
})
