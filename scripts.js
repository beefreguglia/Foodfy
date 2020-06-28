const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

document.querySelector('.header img').addEventListener("click", function(){

    

})

for(let card of cards){

    card.addEventListener("click", function(){

        const id = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("img").src =`/assets/${id}.png`
        
    })

}

document.querySelector('.modal-close a').addEventListener("click", function(){

    modalOverlay.classList.remove('active')

})
