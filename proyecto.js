let variable = document.querySelector("#dark")
variable.addEventListener("click", cambioColor)
function cambioColor() {
    document.documentElement.classList.toggle("dark")
}

const mySkills = [
    {
        img: "./resourses/5352-html5_102567.png"
    },
    {
        img: "./iconos/css3icon.png"
    },
    {
        img: "./iconos/javascript-logo-javascript-icon-transparent-free-png.webp"
    },
    {
        img: "./resourses/react_original_logo_icon_146374.png"
    },
    {
        img: "./iconos/next.png"
    },
    {
        img: "./iconos/node-js-icon-1817x2048-g8tzf91e.png"
    },
    {
        img: " ./iconos/Tailwind_CSS_Logo.svg.png"
    },
    {
        img: "./resourses/mongodb_plain_wordmark_logo_icon_146423.png"
    },
]

let caja = document.querySelector("#padre")
caja.innerHTML = ""
mySkills.forEach(element => {
    caja.innerHTML += `   <div
                            class="  w-39 h-45 flex justify-center items-center rounded-xl bg-[#1d2236] mb-2 shadow-[0px_0px_1px_rgba(250,250,250,0.8)] dark:bg-[#2a4a8f] ">
                            <img src=  ${element.img}  width="75px" alt="">
                        </div>
`
});



