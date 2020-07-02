const cards = document.querySelectorAll('.card')
const receitas = document.querySelector('.receita')
const ingredientes = document.querySelector('.ingredientes')
const preparo = document.querySelector('.preparo')
const informacoes = document.querySelector('.informacoes')

for(let card of cards){

    card.addEventListener("click", function(){

        const id = card.getAttribute('id')
        console.log(id)
        window.location.href = `/receitas/${id}`
        
    })

}


receitas.querySelector('.show').addEventListener("click", function(){

    if(receitas.querySelector('.show').innerHTML == 'Esconder'){

        ingredientes.classList.toggle('active')
        receitas.querySelector('.show').innerHTML = 'Mostrar'

    }else{

        ingredientes.classList.toggle('active')
        receitas.querySelector('.show').innerHTML = 'Esconder'

    }

})

receitas.querySelector('.show2').addEventListener("click", function(){

    if(receitas.querySelector('.show2').innerHTML == 'Esconder'){

        preparo.classList.toggle('active')
        receitas.querySelector('.show2').innerHTML = 'Mostrar'

    }else{

        preparo.classList.toggle('active')
        receitas.querySelector('.show2').innerHTML = 'Esconder'

    }

})

receitas.querySelector('.show3').addEventListener("click", function(){

    if(receitas.querySelector('.show3').innerHTML == 'Esconder'){

        informacoes.classList.toggle('active')
        receitas.querySelector('.show3').innerHTML = 'Mostrar'

    }else{

        informacoes.classList.toggle('active')
        receitas.querySelector('.show3').innerHTML = 'Esconder'

    }

})