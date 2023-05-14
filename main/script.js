//  switch dark mode

// stick header

const header = document.querySelector("header")

const stickHeader = () => {
  const scroll = window.scrollY
  if (scroll > 0) {
    header.classList.add("active")
  } else {
    header.classList.remove("active")
  }
}
window.addEventListener("scroll", stickHeader)

const menuLinks = document.querySelectorAll(".menu_link")
const menu = document.querySelector(".menu")

menuLinks.forEach((link) =>
  link.addEventListener("click", (e) => {
    const key = e.target.dataset.key

    console.log(key)

    const section =
      document.querySelector(`.${key}`).getBoundingClientRect().top +
      window.pageYOffset -
      160

    menu.classList.remove("active")
    window.scrollTo({ top: section, behavior: "smooth" })
  })
)

// hamburger

const hamburger = document.querySelector(".hamburger")
const hamburgerIcon = document.querySelector(".hamburger img")
const dropDownMenu = document.querySelector(".dropdown_menu")

hamburger.onclick = function () {
  dropDownMenu.classList.toggle("open")
}

// // text animation

// var spanText = function spanText(text) {
//   var string = text.innerText
//   var spaned = ""
//   for (var i = 0; i < string.length; i++) {
//     if (string.substring(i, i + 1) === " ") spaned += string.substring(i, i + 1)
//     else spaned += "<span>" + string.substring(i, i + 1) + "</span>"
//   }
//   text.innerHTML = spaned
// }

// var headline = document.querySelector("h1")

// spanText(headline)

// let animations = document.querySelectorAll(".animation")

// animations.forEach((animation) => {
//   let letters = animation.querySelectorAll("span")
//   letters.forEach((letter, i) => {
//     letter.style.animationDelay = i * 0.1 + "s"
//   })
// })
