const headerTag = document.querySelector("header")


// adds a class on scroll after a certain pixel height on the page
const toggleHeader = function() {
  const pixels = window.pageYOffset

  if (pixels > 60) {
    headerTag.classList.add("scrolled")
  } else {
    headerTag.classList.remove("scrolled")
  }
}


// uses JS to fade in box-shadow with a threshold
const fadeBox = function() {

  const pixels = window.pageYOffset
  const alpha = Math.min(pixels / 200, 0.25)

  headerTag.style.boxShadow = '0 0 10px rgba (0, 0, 0, ${alpha})'

}


toggleHeader()
fadeBox()

document.addEventListener("scroll", function() {
  toggleHeader()
  fadeBox()
})
