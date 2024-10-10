const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')

let minhaListaDeItens = []

function AdicionarNovaTarefa() {
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false,
    })

    input.value = ''

    mostarTarefas()
}


function mostarTarefas() {

    let novaLi = ''

    minhaListaDeItens.forEach((item, posicao) => {

        novaLi = novaLi+ `
        
           <li class="task ${item.concluida && "done"}">
                <img src="./img/checked.png" alt="arrow" onclick = 'concluirTarefa(${posicao})'>
                <p>${item.tarefa}</p>
                <img src="./img/trash.png" alt="trash" onclick ='deletarTarefas(${posicao})'>
            </li>`

    });

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))

}

function concluirTarefa(posicao) {
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida

    mostarTarefas()
}


function deletarTarefas(posicao) {
        minhaListaDeItens.splice(posicao,1)

        mostarTarefas()
}


function recarregarTarefas() {
    const tarefasDoLocalStore = localStorage.getItem('lista')
    
    if (tarefasDoLocalStore) {
        minhaListaDeItens = JSON.parse(tarefasDoLocalStore)
      }
 
    mostarTarefas()
    
}

recarregarTarefas()
button.addEventListener('click', AdicionarNovaTarefa)
