const div = document.querySelector(".down-wed")
const text = document.querySelector(".text-on-hover")

div.addEventListener("mouseenter" , () => {
    text.style.display = "block"
})

div.addEventListener("mouseleave" , () => {
    text.style.display = "none"
})
