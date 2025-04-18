let variable = document.querySelector("#dark")
variable.addEventListener("click", cambioColor)
function cambioColor() {
    document.documentElement.classList.toggle("dark")
}