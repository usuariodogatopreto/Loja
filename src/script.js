const cadastrar = document.getElementById('cadastrar')
const cadastrarNav = document.getElementById('cadastrarNav')
const estoqueNav = document.getElementById('estoque')
const estoque = document.getElementsByClassName('estoque')
const produto = new Object()
let produtos = localStorage.getItem('estoque')
let pesquisa
let itemSpan
let caminhoPai
let nome
let compra
let venda

if (localStorage.getItem('inicio') == undefined) {
    localStorage.setItem('inicio', window.location.href)
    caminhoPai = localStorage.getItem('inicio')
} else {
    caminhoPai = localStorage.getItem('inicio')
}


function setItem(chave, valor) {
    localStorage.setItem(chave, valor)
}

function href(caminho) {
    window.location = caminho
}

function stringify(json) {
    return JSON.stringify(json)
}

function parse(json) {
    return JSON.parse(json, true)
}
function getItem(chave) {
    return localStorage.getItem(chave)
}
function valueName(id) {
    return document.getElementsByName(id)[0].value
}
function valueId(id) {
    return document.getElementById(id).value
}
function elementName(id) {
    return document.getElementsByName(id)[0]
}
function elementId(id) {
    return document.getElementById(id)
}
function valido() {
    nome = valueName('nome')
    compra = valueName('compra')
    venda = valueName('venda')
    if (nome != '' && compra != '' && venda != '') {
        cadastrar.toggleAttribute('disabled', false)
    } else {
        cadastrar.toggleAttribute('disabled', true)
    }
}


function enter(e, proximo) {
    if (proximo == 'button' && e.key == 'Enter') {
        cadastrar.click()
    } else if (e.key == 'Enter') {
        proximo = elementName(proximo)
        proximo.focus()
    }
}

function cadastrarProduto() {
    nome = valueName('nome').toUpperCase()
    compra = valueName('compra')
    venda = valueName('venda')
    produto.nome = nome
    produto.compra = new Number(compra)
    produto.venda = new Number(venda)
    produto.quantidade = 0
    produtos = getItem('estoque')
    if (produtos == undefined) {
        setItem('estoque', stringify([produto]))
        href('./')

    } else {
        produtos = parse(produtos)
        produtos.push(produto)
        setItem('estoque', stringify(produtos))
        href('./')
    }
}

function pesquisar() {
    pesquisa = valueId('pesquisaCampo')
    while (estoque[0].children[0] != undefined) {
        estoque[0].children[0].remove()
        estoque[1].children[0].remove()
        estoque[2].children[0].remove()
        estoque[3].children[0].remove()
    }

    produtos.forEach((item, id) => {
        if (item.nome.includes(pesquisa.toUpperCase())) {
            estoque[0].innerHTML = estoque[0].innerHTML + `<span id='${id}'>${item.nome}</span>`
            estoque[1].innerHTML = estoque[1].innerHTML + `<span>${item.compra}</span>`
            estoque[2].innerHTML = estoque[2].innerHTML + `<span>${item.venda}</span>`
            estoque[3].innerHTML = estoque[3].innerHTML + `<span>${item.quantidade}</span>`
        }
    })


}

cadastrarNav.addEventListener('click', () => {
    window.location = caminhoPai
})

estoqueNav.addEventListener('click', () => {
    window.location = caminhoPai + 'paginas/estoque.html'
})
if (estoque.length != 0) {
    if (produtos != null) {
        produtos = parse(produtos)
        produtos.forEach((item) => {
            estoque[0].innerHTML = estoque[0].innerHTML + `<span>${item.nome}</span>`
            estoque[1].innerHTML = estoque[1].innerHTML + `<span>${item.compra}</span>`
            estoque[2].innerHTML = estoque[2].innerHTML + `<span>${item.venda}</span>`
            estoque[3].innerHTML = estoque[3].innerHTML + `<span>${item.quantidade}</span>`
        })
    }
}

