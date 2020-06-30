const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for(let card of cards){

    card.addEventListener("click", function(){

        //Pegando o conteudo para criar modal dinamico
        const img = card.querySelector("img").getAttribute("src")
        const alt = card.querySelector("img").getAttribute("alt")
        const title = card.querySelector(".card__content h3").innerHTML
        const author = card.querySelector(".card__info p").innerHTML
       
        //passando para o modal

        modalOverlay.querySelector(".modal-content img").src = img
        modalOverlay.querySelector(".modal-content img").alt = alt
        modalOverlay.querySelector(".modal-content h3").innerText = title
        modalOverlay.querySelector(".modal-content p").innerText = author


        //ativando modal
        modalOverlay.classList.add('active')
        
        
    })

}

document.querySelector('.modal-close a').addEventListener("click", function(){

    modalOverlay.classList.remove('active')
    modalOverlay.querySelector(".modal-content img").src = "/"
    modalOverlay.querySelector(".modal-content img").alt = "/"
    modalOverlay.querySelector(".modal-content h3").innerText = ""
    modalOverlay.querySelector(".modal-content p").innerText = ""


})
