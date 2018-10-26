const animatedTags = document.querySelectorAll("h2, h3, p, section img, a.button")

animatedTags.forEach(tag => {
  tag.style.opacity = 0
})

const fadeIn = function() {
  // look through all the animatedTags and see which ones are in the window


  let delay = 0.25

  animatedTags.forEach(tag => {
    const tagTop = tag.getBoundingClientRect().top
    const tagBottom = tag.getBoundingClientRect().bottom

    if (tagTop < window.innerHeight && tagBottom > 0) {
      tag.style.animation = `fadein 1s ${delay}s both`
      delay = delay + 0.25
    } else {
      tag.style.opacity = 0
      tag.style.animation = ""
    }

  })
}

// on page load - runs this script
fadeIn()

// on scroll - run script
document.addEventListener("scroll", function() {
  fadeIn()
})

// on browser re-size run description
window.addEventListener("resize", function() {
  fadeIn()
})
