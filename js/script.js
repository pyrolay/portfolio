const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

// Variables

const $hero = $(".hero")
const $about = $(".about")
const $projects = $(".projects")
const $contact = $(".contact")

const $$navLinks = $$(".nav-link")

const $lightTheme = $(".theme__light")
const $darkTheme = $(".theme__dark")

const sections = [$hero, $about, $projects, $contact]

const themes = [$lightTheme, $darkTheme]

let currentTheme = localStorage.getItem("theme")

// Functions

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

const selectActiveTheme = (e) => {
    for (const theme of themes) {
        if (theme === e.target) {
            addActiveClass(theme)
            setCurrentTheme(theme.name)
        }
        else removeActiveClass(theme)
    }
}

const setOnloadTheme = (currentTheme) => {
    for (const theme of themes) {
        theme.name === currentTheme && addActiveClass(theme)
    }
}

// Events

window.addEventListener("load", () => {
    setActiveToNavBarLinks()
    setCurrentTheme(currentTheme)
    setOnloadTheme(currentTheme)
})

window.addEventListener("scroll", () => {
    setActiveToNavBarLinks()
})

for (const theme of themes) {
    theme.addEventListener("click", (e) => {
        selectActiveTheme(e)
    })
}