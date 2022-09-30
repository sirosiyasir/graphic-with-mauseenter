const div = document.querySelector(".down-wed")
const text = document.querySelector(".text-on-hover")

div.addEventListener("mouseenter" , () => {
    text.style.display = "block"
})

div.addEventListener("mouseleave" , () => {
    text.style.display = "none"
})

const div2 = document.querySelector(".down-thu")
const text2 = document.querySelector(".text-on-hover-2")

div2.addEventListener("mouseenter" , () => {
  text2.style.display = "block"
})

div2.addEventListener("mouseleave" , () => {
  text2.style.display = "none"
})
