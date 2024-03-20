const form = document.getElementById("form-contatos")
const nomes = []
const tel = []

let linhas = ""

form.addEventListener("submit", function(e) {
    e.preventDefault()
    adicionaContato()
    atualizaTabela()
})

function adicionaContato() {
    const nomeContato = document.getElementById("nome-contato")
    const telContato = document.getElementById("tel-contato")

    if(nomes.includes(nomeContato.value.toLowerCase())) {
        alert("O nome do contato inserido ja existe na agenda")
    } else if (tel.includes(telContato.value)) {
        alert("O telefone inserido ja existe na agenda")
    } else {
        nomes.push(nomeContato.value.toLowerCase())
        tel.push(telContato.value)

        let linha = `<tr>`
        linha += `<td>${nomeContato.value}</td>`
        linha += `<td>${telContato.value}</td>`
        linha += `</tr>`

        linhas += linha
    }

    nomeContato.value = ""
    telContato.value = ""
}

function atualizaTabela() {
    const corpoTabela = document.querySelector("tbody")
    corpoTabela.innerHTML = linhas
}