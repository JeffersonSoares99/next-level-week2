// Procurar botao de novo horário
document.querySelector("#add-time")
.addEventListener('click', cloneField)

//Quando clicar no botão


//Executar uma acao
function cloneField(){    
    //Duplicas os campos. Quais campos?
    const newFieldCOntainer = document.querySelector(".schedule-item").cloneNode(true)    

    //Limpar os campos que serao clonados
    const fields = newFieldCOntainer.querySelectorAll('input')
    //Estrutura de repeticao para limpar os campos
    fields.forEach(function(field){
        //pegar o field e limpar
        field.value = ""        
    })

    //Colocar na pagina de formulario. Em que lugar da pagina?
    document.querySelector("#schedule-items").appendChild(newFieldCOntainer)

}