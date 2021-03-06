const burger = document.querySelector(".burger")
const menuLink = document.querySelectorAll(".menu-link")
const hiddenMenu = document.querySelector(".hidden-menu")
const heroSlider = document.querySelector(".sliding-hero-container")
const slidingBackground = document.querySelectorAll(".sliding>.select")
const scrollButton = document.querySelector(".scroll-button")

const featuredImg = document.querySelector(".featured-projects div")

document.querySelector(".menu-footer").style.animationName = "menu-footer-animation"
function handleBurgerClick() {
    burger.classList.toggle("active")
    let menuFooterAnimation = document.querySelector(".menu-footer").style.animationName
    if (menuFooterAnimation == "menu-footer-animation") {
        document.querySelector(".menu-footer").style.animationName = ""
        document.querySelectorAll(".menu-footer p, .menu-footer h2").forEach((element) => element.style.animationName = "menu-footer-entry")
        document.querySelector(".menu-link.menu-link-1").style.animationName = "menulink1"
        document.querySelector(".menu-link.menu-link-2").style.animationName = "menulink2"
        document.querySelector(".menu-link.menu-link-3").style.animationName = "menulink3"
        document.querySelector(".menu-link.menu-link-4").style.animationName = "menulink4"
        document.querySelector(".menu-link.menu-link-5").style.animationName = "menulink5"
    } else {
        document.querySelector(".menu-footer").style.animationName = "menu-footer-animation"
        document.querySelectorAll(".menu-footer p, .menu-footer h2").forEach((element) => element.style.animationName = "")
        document.querySelector(".menu-link.menu-link-1").style.animationName = ""
        document.querySelector(".menu-link.menu-link-2").style.animationName = ""
        document.querySelector(".menu-link.menu-link-3").style.animationName = ""
        document.querySelector(".menu-link.menu-link-4").style.animationName = ""
        document.querySelector(".menu-link.menu-link-5").style.animationName = ""
    }
    burger.classList.toggle("inactive")
    document.querySelector(".menu-body").classList.toggle("active")
    setTimeout(() => {
        document.querySelector(".hidden-menu").classList.toggle("active")
    }, 650)
}

burger.addEventListener("click", handleBurgerClick)
document.querySelectorAll(".menu-link a").forEach((element) => element.addEventListener("click", handleBurgerClick))

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
    setTimeout(() => {
        if (heroSlider.style.animationName == 'slide') {
            heroSlider.style.animationName = 'slide2'
        } else {
            heroSlider.style.animationName = 'slide'
        }
    }, 1000)
}

function handleElementDrag() {
    heroSlider.appendChild(heroSlider.firstElementChild)

    handleBackgroundTransition()
    document.querySelector('.select').style.transition = 'none'
    document.querySelector('.trans-toggle').classList.toggle('trans-toggle')
    setTimeout(() => {
        document.querySelector('.select').style.transition = 'transform 4s linear'
    }, 10)
}


function handleBackgroundTransition() {
    document.querySelector('.trans-toggle').nextElementSibling.classList.toggle('trans-toggle')
}

heroSlider.addEventListener("animationend", handleElementDrag)
slidingBackground.forEach((element) => {
    element.addEventListener("transitionend", handleHeroSlide)
})

setTimeout(() => {
    document.querySelector('.hero-slider-1').classList.toggle('trans-toggle')
}, 1200)

const loadingScreen = document.querySelector(".loading-screen")

setTimeout(() => {
    loadingScreen.style.backgroundColor = "transparent"
}, 1100)

var aboutSection = document.getElementById("About")
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

function getOffsetTop(element) {
    let offsetTop = 0;
    while(element) {
      offsetTop += element.offsetTop;
      element = element.offsetParent;
    }
    return offsetTop;
}

const toTop = document.querySelector(".to-top")
const toAbout = document.querySelector(".to-about")
function updateScrollButton(winScr) {
    if (winScr > abtCntTop - 5) {
        toTop.style.display = "flex"
        toAbout.style.display = "none"
    } else {
        toTop.style.display = "none"
        toAbout.style.display = "flex"
    }
}

const singleImageWrapper = document.querySelectorAll(".single-image-wrapper")
function updateAboutImages(winScr) {
    singleImageWrapper.forEach((element)=>{
        let elOfst = getOffsetTop(element)
        let elHgh = element.offsetHeight
        if (elOfst+elHgh/2-150>winScr && winScr >elOfst-100) {
            element.lastElementChild.style.width = `${100-Math.abs(25*(0.5-Math.abs((winScr-elOfst+100)/(elHgh/2-50)-0.5)))}%`
        }
    })
}

const experienceYears = document.querySelector(".experience-years")
const expYearsH = experienceYears.offsetHeight
const expText = document.querySelector(".experience-years-text")
const expNum = document.querySelector(".experience-years-amount")
function updateYearsZoom(winScr) {
    let expYearsT = experienceYears.offsetTop
    if (expYearsT+expYearsH>winScr && winScr>expYearsT-100) {
        if (winScr<expYearsT) {
            expText.style.opacity = "1"
            expText.style.top = "15%"
            expNum.style.transform = "scale(1)"           
        } else {
            expText.style.opacity = `${ 1 - (2*(winScr-expYearsT)/expYearsH) }`
            expText.style.top = `${ 15 -((winScr-expYearsT)/4.5) }%`
            expNum.style.transform = `scale(${ 1 + ((winScr-expYearsT)/40)})`
        }
    }
}

const abtCntTop = document.querySelector(".about-container").offsetTop
const thrLine1 = document.querySelector(".three-line-1")
const thrLine2 = document.querySelector(".three-line-2")
const thrLine3 = document.querySelector(".three-line-3")
const lines = document.querySelector(".three-lines")
function updateLines(winScr){
    if (abtCntTop+1200>winScr && winScr>abtCntTop-300) {
        lines.style.alignItems = "flex-start"
        thrLine2.style.height = `${(winScr-abtCntTop+300)*0.1}vh`
        if(winScr>abtCntTop) {
            thrLine3.style.height = `${(winScr-abtCntTop)*0.1}vh`
            if(winScr>abtCntTop+100) {
                thrLine1.style.height = `${(winScr-abtCntTop-100)*0.1}vh`
            }
        }
    }else if(portfolioTop+1300>winScr && winScr>portfolioTop+100) {
                lines.style.alignItems = "flex-end"
                thrLine1.style.height = `${100-((winScr-portfolioTop-100)*0.1)}vh`
                thrLine2.style.height = `${100-((winScr-portfolioTop-100)*0.09)}vh`
                thrLine3.style.height = `${100-((winScr-portfolioTop-100)*0.09)}vh`
            } else if (winScr>=portfolioTop+1300) {
                thrLine1.style.height = "0vh"
                thrLine2.style.height = "0vh"
                thrLine3.style.height = "0vh"                 
                }else if(winScr>abtCntTop+1000) {
                        thrLine1.style.height = "100vh"
                        thrLine2.style.height = "100vh"
                        thrLine3.style.height = "100vh"
                }
}
const portfolioTop = document.querySelector(".portfolio-container").offsetTop
const featured = document.querySelector(".featured-projects")
const featuredTop = getOffsetTop(featured)
function updateFeatured(winScr){
    if (featuredTop>winScr && winScr>featuredTop-window.innerHeight) {
        featuredImg.style.top = `${-(featuredTop-winScr)}px`
        if (featuredTop-(window.innerHeight*0.5)>winScr) {
            featuredImg.style.transform = `scale(${
                1-((featuredTop-(window.innerHeight*0.5)-winScr)/((featuredTop-window.innerHeight)-(featuredTop-(window.innerHeight*0.7))))
            })`
        }
    }
}

const contactTop = document.querySelector(".contact-section").offsetTop
const lastSliders = document.querySelector(".last-sliders")
const viewWidth = window.innerWidth
const bg2 = document.querySelector(".last-slide-2-background")
const bg4 = document.querySelector(".last-slide-4-background")

function updateLastSlider(winScr){
    if (winScr-contactTop<(viewWidth/4) && winScr-contactTop>0) {
        console.log(lastSliders.style.left)
        lastSliders.style.left = "0px"
        bg2.style.left = "0px"
        bg4.style.left = "0px"
    } else if (winScr-contactTop>(viewWidth/4)) {
        lastSliders.style.left = `-${2*(winScr-contactTop-(viewWidth/4))}px`
        bg2.style.left = `-${0.4*(winScr-contactTop-(viewWidth/4))}px`
        bg4.style.left = `-${0.15*(winScr-contactTop-(viewWidth/4))}px`
    }
    
}

function handleScrollingEvents() {
    let winScr = window.pageYOffset
    updateScrollButton(winScr)
    updateAboutImages(winScr)
    updateYearsZoom(winScr)
    updateLines(winScr)
    updateFeatured(winScr)
    updateLastSlider(winScr)
}

document.addEventListener("DOMContentLoaded",()=>{
    if (window.pageYOffset > getOffsetTop(featuredImg)){
        featuredImg.style.top = "0px"
        featuredImg.style.transform = "scale(1.0)"
    }
})

window.addEventListener("scroll", handleScrollingEvents)


const portfolioLinks = document.querySelectorAll(".portfolio-link")
portfolioLinks.forEach((element) => {
    element.addEventListener("mouseover", () => element.querySelector(".line-absolute").style.width = "100%")
    element.addEventListener("mouseout", () => element.querySelector(".line-absolute").style.width = "0%")
    element.addEventListener("click", () => {
        document.querySelector(".screen-1").style.animationName = "reverse1"
        document.querySelector(".screen-2").style.animationName = "reverse2"
        document.querySelector(".screen-3").style.animationName = "reverse3"
        document.querySelector(".screen-4").style.animationName = "reverse4"
        setTimeout(() => {
            fixedPortfolio.style.display = 'block'
        }, 1000)
    })
})

portfolioLinks[0].addEventListener("mouseover", () => {
    document.querySelector(".t01").style.opacity = "1"
    document.querySelector(".first-portfolio-change.change1").style.opacity = "1"
    document.querySelector(".first-portfolio-change.change1").style.transform = "rotate(0deg) scale(1)"
    document.querySelector(".second-portfolio-change.change1").style.opacity = "1"
    document.querySelector(".second-portfolio-change.change1").style.transform = "rotate(0deg) scale(1)"
    document.querySelector(".third-portfolio-change.change1").style.opacity = "1"
    document.querySelector(".third-portfolio-change.change1").style.transform = "rotate(0deg) scale(1)"
})
portfolioLinks[0].addEventListener("mouseout", () => {
    document.querySelector(".t01").style.opacity = "0"
    document.querySelector(".first-portfolio-change.change1").style.opacity = "0"
    document.querySelector(".first-portfolio-change.change1").style.transform = "rotate(-20deg) scale(1.7)"
    document.querySelector(".second-portfolio-change.change1").style.opacity = "0"
    document.querySelector(".second-portfolio-change.change1").style.transform = "rotate(-20deg) scale(1.7)"
    document.querySelector(".third-portfolio-change.change1").style.opacity = "0"
    document.querySelector(".third-portfolio-change.change1").style.transform = "rotate(-20deg) scale(1.7)"
})
portfolioLinks[1].addEventListener("mouseover", () => {
    document.querySelector(".t02").style.opacity = "1"
    document.querySelector(".first-portfolio-change.change2").style.opacity = "1"
    document.querySelector(".first-portfolio-change.change2").style.transform = "rotate(0deg) scale(1)"
    document.querySelector(".second-portfolio-change.change2").style.opacity = "1"
    document.querySelector(".second-portfolio-change.change2").style.transform = "rotate(0deg) scale(1)"
    document.querySelector(".third-portfolio-change.change2").style.opacity = "1"
    document.querySelector(".third-portfolio-change.change2").style.transform = "rotate(0deg) scale(1)"
})
portfolioLinks[1].addEventListener("mouseout", () => {
    document.querySelector(".t02").style.opacity = "0"
    document.querySelector(".first-portfolio-change.change2").style.opacity = "0"
    document.querySelector(".first-portfolio-change.change2").style.transform = "rotate(-20deg) scale(1.7)"
    document.querySelector(".second-portfolio-change.change2").style.opacity = "0"
    document.querySelector(".second-portfolio-change.change2").style.transform = "rotate(-20deg) scale(1.7)"
    document.querySelector(".third-portfolio-change.change2").style.opacity = "0"
    document.querySelector(".third-portfolio-change.change2").style.transform = "rotate(-20deg) scale(1.7)"
})
portfolioLinks[2].addEventListener("mouseover", () => {
    document.querySelector(".t03").style.opacity = "1"
    document.querySelector(".first-portfolio-change.change3").style.opacity = "1"
    document.querySelector(".first-portfolio-change.change3").style.transform = "rotate(0deg) scale(1)"
    document.querySelector(".second-portfolio-change.change3").style.opacity = "1"
    document.querySelector(".second-portfolio-change.change3").style.transform = "rotate(0deg) scale(1)"
    document.querySelector(".third-portfolio-change.change3").style.opacity = "1"
    document.querySelector(".third-portfolio-change.change3").style.transform = "rotate(0deg) scale(1)"
})
portfolioLinks[2].addEventListener("mouseout", () => {
    document.querySelector(".t03").style.opacity = "0"
    document.querySelector(".first-portfolio-change.change3").style.opacity = "0"
    document.querySelector(".first-portfolio-change.change3").style.transform = "rotate(-20deg) scale(1.7)"
    document.querySelector(".second-portfolio-change.change3").style.opacity = "0"
    document.querySelector(".second-portfolio-change.change3").style.transform = "rotate(-20deg) scale(1.7)"
    document.querySelector(".third-portfolio-change.change3").style.opacity = "0"
    document.querySelector(".third-portfolio-change.change3").style.transform = "rotate(-20deg) scale(1.7)"
})
portfolioLinks[3].addEventListener("mouseover", () => {
    document.querySelector(".t04").style.opacity = "1"
    document.querySelector(".first-portfolio-change.change4").style.opacity = "1"
    document.querySelector(".first-portfolio-change.change4").style.transform = "rotate(0deg) scale(1)"
    document.querySelector(".second-portfolio-change.change4").style.opacity = "1"
    document.querySelector(".second-portfolio-change.change4").style.transform = "rotate(0deg) scale(1)"
    document.querySelector(".third-portfolio-change.change4").style.opacity = "1"
    document.querySelector(".third-portfolio-change.change4").style.transform = "rotate(0deg) scale(1)"
})
portfolioLinks[3].addEventListener("mouseout", () => {
    document.querySelector(".t04").style.opacity = "0"
    document.querySelector(".first-portfolio-change.change4").style.opacity = "0"
    document.querySelector(".first-portfolio-change.change4").style.transform = "rotate(-20deg) scale(1.7)"
    document.querySelector(".second-portfolio-change.change4").style.opacity = "0"
    document.querySelector(".second-portfolio-change.change4").style.transform = "rotate(-20deg) scale(1.7)"
    document.querySelector(".third-portfolio-change.change4").style.opacity = "0"
    document.querySelector(".third-portfolio-change.change4").style.transform = "rotate(-20deg) scale(1.7)"
})
portfolioLinks[4].addEventListener("mouseover", () => {
    document.querySelector(".t05").style.opacity = "1"
    document.querySelector(".first-portfolio-change.change5").style.opacity = "1"
    document.querySelector(".first-portfolio-change.change5").style.transform = "rotate(0deg) scale(1)"
    document.querySelector(".second-portfolio-change.change5").style.opacity = "1"
    document.querySelector(".second-portfolio-change.change5").style.transform = "rotate(0deg) scale(1)"
    document.querySelector(".third-portfolio-change.change5").style.opacity = "1"
    document.querySelector(".third-portfolio-change.change5").style.transform = "rotate(0deg) scale(1)"
})
portfolioLinks[4].addEventListener("mouseout", () => {
    document.querySelector(".t05").style.opacity = "0"
    document.querySelector(".first-portfolio-change.change5").style.opacity = "0"
    document.querySelector(".first-portfolio-change.change5").style.transform = "rotate(-20deg) scale(1.7)"
    document.querySelector(".second-portfolio-change.change5").style.opacity = "0"
    document.querySelector(".second-portfolio-change.change5").style.transform = "rotate(-20deg) scale(1.7)"
    document.querySelector(".third-portfolio-change.change5").style.opacity = "0"
    document.querySelector(".third-portfolio-change.change5").style.transform = "rotate(-20deg) scale(1.7)"
})

const zoomedPortfolio = document.querySelectorAll(".zportscr")
const fixedPortfolio = document.querySelector(".fixing-portfolio")
portfolioLinks[0].addEventListener("click", () => {
    zoomedPortfolio.forEach((element)=>element.style.opacity = "0")
    zoomedPortfolio[0].style.opacity = "1"
})
portfolioLinks[1].addEventListener("click", () => {
    zoomedPortfolio.forEach((element)=>element.style.opacity = "0")
    zoomedPortfolio[1].style.opacity = "1"
})
portfolioLinks[2].addEventListener("click", () => {
    zoomedPortfolio.forEach((element)=>element.style.opacity = "0")
    zoomedPortfolio[2].style.opacity = "1"
})
portfolioLinks[3].addEventListener("click", () => {
    zoomedPortfolio.forEach((element)=>element.style.opacity = "0")
    zoomedPortfolio[3].style.opacity = "1"
})
portfolioLinks[4].addEventListener("click", () => {
    zoomedPortfolio.forEach((element)=>element.style.opacity = "0")
    zoomedPortfolio[4].style.opacity = "1"
})

document.querySelector(".cross").addEventListener("click", () => {
    document.querySelector(".screen-1").style.animationName = "preloader1"
    document.querySelector(".screen-2").style.animationName = "preloader2"
    document.querySelector(".screen-3").style.animationName = "preloader3"
    document.querySelector(".screen-4").style.animationName = "preloader4"
    setTimeout(() => {
        fixedPortfolio.style.display = "none"
    }, 1000)
    let portfolioSection = document.getElementById("Portfolio")
    portfolioSection.scrollIntoView()
})

function updateZoomedPortfolio(winScr){
    if (fixedPortfolio.style.display=="block") {

    }
}

const teamCarousel = document.querySelector(".our-team-slide-container")
function handleButtonSelect(rate) {
    document.querySelectorAll(".round-buttons div").forEach((element) => element.classList.remove("selected-button"))
    teamCarousel.style.transform = `translate(${rate}px)`
    document.querySelectorAll(".our-team-slides").forEach((element) => { element.classList.remove("focused") })
}

document.querySelector(".button-1").addEventListener("click", () => {
    handleButtonSelect(0)
    document.querySelector(".button-1").classList.add("selected-button")
    document.querySelector(".our-team-slide-1").classList.add("focused")
    document.querySelector(".dummy-team-slide-1").classList.add("focused")
    document.querySelector(".dummy-team-slide-4").style.opacity = "0"
    document.querySelector(".dummy-team-slide-1").style.opacity = "0"
})
document.querySelector(".button-2").addEventListener("click", () => {
    handleButtonSelect(-710)
    document.querySelector(".button-2").classList.add("selected-button")
    document.querySelector(".our-team-slide-2").classList.add("focused")
})
document.querySelector(".button-3").addEventListener("click", () => {
    handleButtonSelect(-1420)
    document.querySelector(".button-3").classList.add("selected-button")
    document.querySelector(".our-team-slide-3").classList.add("focused")
})
document.querySelector(".button-4").addEventListener("click", () => {
    handleButtonSelect(-2130)
    document.querySelector(".button-4").classList.add("selected-button")
    document.querySelector(".our-team-slide-4").classList.add("focused")
    document.querySelector(".dummy-team-slide-4").classList.add("focused")
    document.querySelector(".dummy-team-slide-4").style.opacity = "0"
    document.querySelector(".dummy-team-slide-1").style.opacity = "0"
})

document.querySelector(".next-container").addEventListener("click", () => {
    if (document.querySelector(".selected-button").classList.contains("button-4")) {
        teamCarousel.style.transition = "none"
        teamCarousel.style.transform = "translate(740px)"
        document.querySelector(".dummy-team-slide-4").style.opacity = "1"
        document.querySelector(".dummy-team-slide-4").classList.remove("focused")
        setTimeout(() => {
            teamCarousel.style.transition = "all 0.3s linear"
            handleButtonSelect(0)
            document.querySelector(".our-team-slide-1").classList.add("focused")
            document.querySelector(".button-1").classList.add("selected-button")
            document.querySelector(".dummy-team-slide-1").classList.add("focused")
        })
    } else {
        document.querySelector(".selected-button").nextElementSibling.click()
    }
})
document.querySelector(".prev-container").addEventListener("click", () => {
    if (document.querySelector(".selected-button").classList.contains("button-1")) {
        teamCarousel.style.transition = "none"
        teamCarousel.style.transform = "translate(-2840px)"
        document.querySelector(".dummy-team-slide-1").style.opacity = "1"
        document.querySelector(".dummy-team-slide-1").classList.remove("focused")
        setTimeout(() => {
            teamCarousel.style.transition = "all 0.3s linear"
            handleButtonSelect(-2130)
            document.querySelector(".our-team-slide-4").classList.add("focused")
            document.querySelector(".button-4").classList.add("selected-button")
            document.querySelector(".dummy-team-slide-4").classList.add("focused")
        })
    } else {
        document.querySelector(".selected-button").previousElementSibling.click()
    }
})



const awardsParagraphy = document.querySelector(".awwards-paragraph")

function handleAwardsOver() {
    this.querySelector(".awards-line").style.width = "100px"
    this.querySelector(".awwards-title").style.color = "goldenrod"
    awardsParagraphy.style.opacity = 1
}
function handleAwardsOut() {
    this.querySelector(".awards-line").style.width = "0px"
    this.querySelector(".awwards-title").style.color = "white"
    awardsParagraphy.style.opacity = 0
}

const awardsLinks = document.querySelectorAll(".awards-link")
awardsLinks.forEach((element) => element.addEventListener("mouseover", handleAwardsOver))
awardsLinks.forEach((element) => element.addEventListener("mouseout", handleAwardsOut))
document.querySelector(".awards-body").addEventListener("transitionend",()=> {
    awardsLinks.forEach((element)=>element.style.opacity = "1")
})

const form = document.querySelector(".formum")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let sbmtBtn = document.querySelector(".submit-button")
    sbmtBtn.value = "Please wait..."
    setTimeout(()=>{
        form.style.display = "none"
        document.querySelector(".thank-you").style.display = "inline-block"
    },1000)
})