const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)


const $hero = $(".hero")
const $about = $(".about")
const $projects = $(".projects")
const $contact = $(".contact")
const $$navLinks = $$(".nav-link")

const sections = [$hero, $about, $projects, $contact]


const setActiveToNavBarLinks = () => {
    for (const section of sections) {

        const sectionRect = section.getBoundingClientRect()

        if (sectionRect.y <= 1 && sectionRect.y >= -Math.abs(sectionRect.height)) {
            for (const navLink of $$navLinks) {

                const navLinkName = navLink.getAttribute("name")

                if (section.id === navLinkName) navLink.classList.add("active")
                else navLink.classList.remove("active")
            }
        }
    }
}

window.addEventListener("scroll", () => {
    setActiveToNavBarLinks()
})

for (const navLink of $$navLinks) {
    navLink.addEventListener("click", () => {
        navLink.classList.add("active")
    })
}



