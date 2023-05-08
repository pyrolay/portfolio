const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

// Variables

const $mainContainer = $(".main-container")

const $hero = $(".hero")
const $about = $(".about")
const $projects = $(".projects")
const $contact = $(".contact")
const sections = [$hero, $about, $projects, $contact]

const $$navLinks = $$(".nav-link")

const $catButton = $(".cat__button")

const $lightTheme = $(".theme__light")
const $darkTheme = $(".theme__dark")
const themes = [$lightTheme, $darkTheme]

let currentTheme = localStorage.getItem("theme")

// Functions

const catSound = () => {
    const audio = new Audio('../assets/audio/cat-sound.wav')
    audio.volume = 0.3
    audio.play()
}


const addActiveClass = (element) => element.classList.add("active")
const removeActiveClass = (element) => element.classList.remove("active")

const setActiveToNavBarLinks = () => {
    for (const section of sections) {

        const sectionRect = section.getBoundingClientRect()

        if (sectionRect.y <= 1 && sectionRect.y >= -Math.abs(sectionRect.height)) {
            for (const navLink of $$navLinks) {

                const navLinkName = navLink.getAttribute("name")

                if (section.id === navLinkName) addActiveClass(navLink)
                else removeActiveClass(navLink)
            }
        }
    }
}


const setCurrentTheme = (theme) => localStorage.setItem("theme", theme)

const setThemeClass = (theme) => {
    $mainContainer.className = "main-container"
    $mainContainer.classList.add(theme)
}

const setClassOnloadTheme = (currentTheme) => {
    for (const theme of themes) {
        theme.name === currentTheme && addActiveClass(theme)
    }
}

const selectActiveTheme = (e) => {
    for (const theme of themes) {
        if (theme === e.target) {
            addActiveClass(theme)
            setCurrentTheme(theme.name)
            setThemeClass(theme.name)
        }
        else removeActiveClass(theme)
    }
}

// Events

$catButton.addEventListener("click", () => {
    catSound()
})

window.addEventListener("load", () => {
    if (!currentTheme) {
        setCurrentTheme("light")
        currentTheme = "light"
    }

    setActiveToNavBarLinks()
    setCurrentTheme(currentTheme)
    setClassOnloadTheme(currentTheme)
    setThemeClass(currentTheme)
})

window.addEventListener("scroll", () => {
    setActiveToNavBarLinks()
})

for (const theme of themes) {
    theme.addEventListener("click", (e) => {
        selectActiveTheme(e)
    })
}