const buttonHome = document.querySelector("#home")
const buttonAbout = document.querySelector("#about")
const buttonPortfolio = document.querySelector("#portfolio")
const buttonContact = document.querySelector("#contact")

function scrollTo(element) {
    document.querySelector(element).scrollIntoView({ behavior: "smooth"})
}



document.querySelector("#home").addEventListener("click", function(event) {
    event.preventDefault();
    scrollTo(".section-1");

    buttonHome.style.color = "#2793eb"
    buttonAbout.style.color = "#ffffff"
    buttonPortfolio.style.color = "#ffffff"
    buttonContact.style.color = "#ffffff"


})



document.querySelector("#about").addEventListener("click", function(event) {
    event.preventDefault();
    scrollTo(".section-2");

    buttonHome.style.color = "#ffffff"
    buttonAbout.style.color = "#2793eb"
    buttonPortfolio.style.color = "#ffffff"
    buttonContact.style.color = "#ffffff"
})



document.querySelector("#portfolio").addEventListener("click", function(event) {
    event.preventDefault();
    scrollTo(".section-3");

    buttonHome.style.color = "#ffffff"
    buttonAbout.style.color = "#ffffff"
    buttonPortfolio.style.color = "#2793eb"
    buttonContact.style.color = "#ffffff"
})



document.querySelector("#contact").addEventListener("click", function(event) {
    event.preventDefault();
    scrollTo(".section-4");

    buttonHome.style.color = "#ffffff"
    buttonAbout.style.color = "#ffffff"
    buttonPortfolio.style.color = "#ffffff"
    buttonContact.style.color = "#2793eb"
})


/*>>>>>>>>>>>>>>>>>TROCA DE PÁGINA PORTFÓLIO<<<<<<<<<<<<<<<<< */

const firstPage = document.querySelector(".div-section-3-1")
const secondPag = document.querySelector(".div-section-3-2")


function next() {
    firstPage.style.display = "none";
    secondPag.style.display = "flex"
}

function previous() {
    firstPage.style.display = "flex";
    secondPag.style.display = "none"
}




/*>>>>>>>>>>>>>>>>>ENVIO DE FORMULÁRIO<<<<<<<<<<<<<<<<< */

let myInput = document.querySelectorAll(".input-form")

function toSend() {
    myInput.value = ""
}

