const cadastrar = document.getElementById('cadastrar')
const cadastrarPrestacao = document.getElementById('cadastrarPrestacao')
const cadastrarNav = document.getElementById('cadastrarNav')
const estoqueNav = document.getElementById('estoque')
const cadastroCliente = document.getElementById('cadastroCliente')
const estoque = document.getElementsByClassName('estoque')
const totalSpan = document.getElementById('total')
const cadastrarCliente = document.getElementById('cadastrarCliente')
const clientesNav = document.getElementById('clientes')
const clientesDiv = document.getElementsByClassName('clientes')
const cobrarBotao = document.getElementById('cobrarBotao')
const cadastrarCompra = document.getElementById('cadastrarCompra')
const cadastrarCompraBotao = document.getElementById('cadastrarCompraBotao')
const comprasNav = document.getElementById('comprasNav')
const anoExibido = document.getElementById('anoExibido')
const divCompras = document.getElementsByClassName('compra')
const prestacoesNav = document.getElementById('prestacoes')
const parcelaCadastrarBotao = document.getElementById('parcelaCadastrarBotao')
const prestacaoDiv = document.getElementsByClassName('compra')
const caixaMensalNav = document.getElementById('caixaMensal')
const cadastrarDespesasBotao = document.getElementById('cadastrarDespesasBotao')
const cadastrarDespesasNav = document.getElementById('cadastrarDespesasNav')
const comprasDiv = document.getElementById('comprasDiv')
const vendasDiv = document.getElementById('vendasDiv')
const saldoDiv = document.getElementById('saldoDiv')
const despesasDiv = document.getElementById('despesasDiv')
const lucroDiv = document.getElementById('lucroDiv')
const margemdiv = document.getElementById('margemDiv')
const cadastrarRecebimentoRetiradaBotao = document.getElementById('cadastrarRecebimentoRetiradaBotao')
const totalComprasSpan = document.getElementById('totalCompras')
const totalVendasSpan = document.getElementById('totalVendas')
const saldoVendas = document.getElementById('saldoVendas')
const lucroAcumulado = document.getElementById('lucroAcumulado')
const margemAcumulado = document.getElementById('margemAcumulado')
const caixaCaixa = document.getElementById('caixaCaixa')
const receberReceber = document.getElementById('receberReceber')
const pagarPagar = document.getElementById('pagarPagar')
const saldoSaldo = document.getElementById('saldoSaldo')
const saldoEstoque = document.getElementById('saldoEstoque')
const caixaNav = document.getElementById('caixaNav')
const produto = new Object()
const cliente = new Object()
const id = localStorage.getItem('idProduto')
let prestacoes = [[], [], [], [], [], [], [], [], [], [], [], []]
let totalPrestacoes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let clientes = localStorage.getItem('clientes')
let produtos = localStorage.getItem('estoque')
let mesAtual = new Date().getMonth()
let total = 0
let linhaAtual = 0, totalLucro = 0, totalCaixa = 0, totalReceber = 0, totalPagar = 0
let vendas
let caminhoPai
let pesquisa
let itemSpan
let nome
let compra
let venda
let quantidade
let nomeCampo
let compraCampo
let vendaCampo
let quantidadeCampo
let idCliente
let valorReceber
let compras
let anoAtual
let mes
let ano
let idCompra
let prestacaoValue
let parcelasValue
let lucro
let despesas
let despesaValue
caminhoPai = localStorage.getItem('inicio')
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
    if (window.location == caminhoPai + 'paginas/cadastrarProduto.html') {
        nome = valueName('nome')
        compra = valueName('compra')
        venda = valueName('venda')
        if (nome != '' && compra != '' && venda != '') {
            cadastrar.toggleAttribute('disabled', false)
        } else {
            cadastrar.toggleAttribute('disabled', true)
        }
    } else if (location == caminhoPai + 'paginas/editar.html') {
        nome = valueName('nome')
        compra = valueName('compra')
        venda = valueName('venda')
        quantidade = valueName('quantidade')
        nome != '' && compra != '' && venda != '' && quantidade != '' ? cadastrar.toggleAttribute('disabled', false) : cadastrar.toggleAttribute('disabled', true)
    }
    else if (location == caminhoPai + 'paginas/cadastroCliente.html' || location == caminhoPai + 'paginas/editarCliente.html') {
        nome = valueId('cliente')
        nome != '' ? cadastrarCliente.toggleAttribute('disabled', false) : cadastrarCliente.toggleAttribute('disabled', true)
    } else if (location == caminhoPai + 'paginas/cobrar.html' || location == caminhoPai + 'paginas/receber.html') {
        cobranca = valueId('cobranca')
        cobranca != '' ? cobrarBotao.toggleAttribute('disabled', false) : cobrarBotao.toggleAttribute('disabled', true)
    } else if (location == caminhoPai + 'paginas/cadastroCompra.html' || location == caminhoPai + 'paginas/editarCompras.html') {
        valor = valueId('valor')
        valor != '' ? cadastrarCompraBotao.toggleAttribute('disabled', false) : cadastrarCompraBotao.toggleAttribute('disabled', true)
    } else if (location == caminhoPai + 'paginas/cadastrarPrestacoes.html' || location == caminhoPai + 'paginas/editarPrestacoes.html') {
        prestacaoValue = valueId('prestacaoValue')
        parcelasValue = valueId('parcelasValue')
        prestacaoValue != '' && parcelasValue != '' ? parcelaCadastrarBotao.toggleAttribute('disabled', false) : parcelaCadastrarBotao.toggleAttribute('disabled', true)
    } else if (location == caminhoPai + 'paginas/cadastrarDespesas.html') {
        despesaValue = valueId('despesa')
        despesaValue != '' ? cadastrarDespesasBotao.toggleAttribute('disabled', false) : cadastrarDesepesaBotao.toggleAttribute('disabled', true)
    } else if (location == caminhoPai + 'paginas/retirada.html' || location == caminhoPai + 'paginas/receber.html') {
        recebimentoRetirada = valueId('recebimentoRetirada')
        recebimentoRetirada != '' ? cadastrarRecebimentoRetiradaBotao.toggleAttribute('disabled', false) : cadastrarRecebimentoRetiradaBotao.toggleAttribute('disabled', true)
    }
}
function enter(e, proximo) {
    if (proximo == 'button' && e.key == 'Enter') {
        if (location == caminhoPai || location == caminhoPai + 'paginas/editar.html') {
            cadastrar.click()
        } else if (location == caminhoPai + 'paginas/cadastroCliente.html' || location == caminhoPai + 'paginas/editarCliente.html') {
            cadastrarCliente.click()
            if (location == caminhoPai + 'paginas/editarCliente.html') {
                href(caminhoPai + 'paginas/clientes.html')
            }
        } else if (location == caminhoPai + 'paginas/cobrar.html' || location == caminhoPai + 'paginas/receber.html') {
            cobrarBotao.click()
        } else if (location == caminhoPai + 'paginas/cadastroCompra.html' || location == caminhoPai + 'paginas/editarCompras.html') {
            cadastrarCompraBotao.click()
        } else if (location == caminhoPai + 'paginas/cadastrarPrestacoes.html' || location == caminhoPai + 'paginas/editarPrestacoes.html') {
            parcelaCadastrarBotao.click()
        } else if (location == caminhoPai + 'paginas/cadastrarDespesas.html') {
            cadastrarDespesasBotao.click()
        }
    } else if (e.key == 'Enter') {
        proximo = elementName(proximo)
        proximo.focus()
    }
}

function editarPrestacao() {
    prestacaoValue = valueId('prestacaoValue')
    parcelasValue = valueId('parcelasValue')
    prestacoes[idPrestacao].prestacao = prestacaoValue
    prestacoes[idPrestacao].parcelas = parcelasValue
    setItem('prestacoes', stringify(prestacoes))
    href(caminhoPai + 'paginas/prestacoes.html')
}

function cadastrarClienteBotao() {
    nome = valueId('cliente').toUpperCase()
    cliente.nome = nome
    cliente.divida = 0
    if (clientes == null) {
        setItem('clientes', stringify([cliente]))
    } else {
        clientes = parse(clientes)
        clientes.push(cliente)
        setItem('clientes', stringify(clientes))
    }
    href(caminhoPai + 'paginas/cadastroCliente.html')
}

function parcelaCadastrar() {
    prestacaoValue = valueId('prestacaoValue')
    parcelasValue = valueId('parcelasValue')
    if (getItem('prestacoes') == undefined) {
        setItem('prestacoes', stringify([{ prestacao: prestacaoValue, parcelas: parcelasValue, mes: new Date().getMonth() }]))
    } else {
        prestacoes = parse(getItem('prestacoes'))
        prestacoes.push({ prestacao: prestacaoValue, parcelas: parcelasValue, mes: new Date().getMonth() })
        setItem('prestacoes', stringify(prestacoes))
    }
    href(caminhoPai + 'paginas/prestacoes.html')
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
            estoque[1].innerHTML = estoque[1].innerHTML + `<span id='${id}'>${item.compra}</span>`
            estoque[2].innerHTML = estoque[2].innerHTML + `<span id='${id}'>${item.venda}</span>`
            estoque[3].innerHTML = estoque[3].innerHTML + `<span id='${id}'>${item.quantidade}</span>`
        }
    })
    let index = 0
    while (estoque[0].children[index] != undefined) {
        estoque[0].children[index].addEventListener('click', (e) => {
            setItem('idProduto', e.srcElement.id)
            href('./editar.html')
        })
        estoque[1].children[index].addEventListener('click', (e) => {
            setItem('idProduto', e.srcElement.id)
            href('./editar.html')
        })
        estoque[2].children[index].addEventListener('click', (e) => {
            setItem('idProduto', e.srcElement.id)
            href('./editar.html')
        })
        estoque[3].children[index].addEventListener('click', (e) => {
            setItem('idProduto', e.srcElement.id)
            href('./editar.html')
        })
        index++
    }
}

function editar() {
    nome = valueName('nome').toUpperCase()
    compra = valueName('compra')
    venda = valueName('venda')
    quantidade = valueName('quantidade')
    produto.nome = nome
    produto.compra = new Number(compra)
    produto.venda = new Number(venda)
    produto.quantidade = quantidade
    produtos[id] = produto
    setItem('estoque', stringify(produtos))
    href(caminhoPai + 'paginas/estoque.html')
}

function editarCliente() {
    nome = valueId('cliente').toUpperCase()
    console.log()
    clientes[idCliente].nome = nome
    setItem('clientes', stringify(clientes))
    href(caminhoPai + 'paginas/clientes.html')
}

function cobrarReceber() {
    clientes = parse(getItem('clientes'))
    idCliente = getItem('idCliente')
    venda = valueId('cobranca')
    data = new Date().toLocaleDateString()
    if (location == caminhoPai + 'paginas/cobrar.html') {
        clientes[idCliente].divida = Number(clientes[idCliente].divida) + Number(venda)
        lucro = valueId('lucro')
        if (lucro == '') {
            lucro = 0
        }
        if (getItem('vendas') == undefined) {
            vendas = [{ venda: venda, lucro: lucro, data: data }]
        } else {
            vendas = parse(getItem('vendas'))
            vendas.push({ venda: venda, lucro: lucro, data: data })
        }
        setItem('vendas', stringify(vendas))
    } else {
        clientes[idCliente].divida = Number(clientes[idCliente].divida) - Number(venda)
        if (getItem('recebimentosRetiradas') == undefined) {
            setItem('recebimentosRetiradas', stringify([venda]))
        } else {
            recebimentosRetiradas = parse(getItem('recebimentosRetiradas'))
            recebimentosRetiradas.push(venda)
            setItem('recebimentosRetiradas', stringify(recebimentosRetiradas))
        }
    }
    setItem('clientes', stringify(clientes))
    href(caminhoPai + 'paginas/clientes.html')
}

function cadastrarRecebimentoRetirada() {
    recebimentoRetirada = valueId('recebimentoRetirada')
    setItem('retiradaAntigo', recebimentoRetirada)
    if (location == caminhoPai + 'paginas/retirada.html') {
        recebimentoRetirada = recebimentoRetirada * -1
    }
    if (getItem('recebimentosRetiradas') == undefined) {
        setItem('recebimentosRetiradas', stringify([recebimentoRetirada]))
    } else {
        retiradas = parse(getItem('recebimentosRetiradas'))
        retiradas.push(recebimentosRetirada)
        setItem('recebimentosRetiradas', stringify(recebimentosRetirada))
    }
    href(caminhoPai + 'paginas/clientes.html')
}

function compraCadastrar() {
    compra = valueId('valor')
    data = new Date().toLocaleDateString()
    if (getItem('compras') == undefined) {
        setItem('compras', stringify([{ compra: compra, data: data }]))
        href(caminhoPai + 'paginas/compras.html')
    } else {
        compras = parse(getItem('compras'))
        compras.push({ compra: compra, data: data })
        setItem('compras', stringify(compras))
        href(caminhoPai + 'paginas/compras.html')
    }

}

function pesquisarAno(e) {
    if (e.key == 'Enter') {
        ano = valueId('pesquisarAno')
        if (ano >= 2023 && ano <= new Date().getFullYear()) {
            setItem('visualizarAno', ano)
        } else {
            setItem('visualizarAno', new Date().getFullYear())
        }
        href(location)
    }
}

function exibirCompras() {
    if (getItem('visualizarAno') == undefined) {
        anoAtual = new Date().getFullYear()
    } else {
        anoAtual = getItem('visualizarAno')
    }
    if (getItem('compras') != undefined) {
        compras = parse(getItem('compras'))
        compras.forEach((compra, id) => {
            total = total + Number(compra.compra)
            mes = Number(compra.data.split('/')[1])
            ano = Number(compra.data.split('/')[2])
            if (ano == anoAtual) {
                switch (mes) {
                    case 1:
                        divCompras[0].innerHTML = divCompras[0].innerHTML + `<span id="${id}">${compra.compra}</span>`
                        break
                    case 2:
                        divCompras[1].innerHTML = divCompras[1].innerHTML + `<span id="${id}">${compra.compra}</span>`
                        break
                    case 3:
                        divCompras[2].innerHTML = divCompras[2].innerHTML + `<span id="${id}">${compra.compra}</span>`
                        break
                    case 4:
                        divCompras[3].innerHTML = divCompras[3].innerHTML + `<span id="${id}">${compra.compra}</span>`
                        break
                    case 5:
                        divCompras[4].innerHTML = divCompras[4].innerHTML + `<span id="${id}">${compra.compra}</span>`
                        break
                    case 6:
                        divCompras[5].innerHTML = divCompras[5].innerHTML + `<span id="${id}">${compra.compra}</span>`
                        break
                    case 7:
                        divCompras[6].innerHTML = divCompras[6].innerHTML + `<span id="${id}">${compra.compra}</span>`
                        break
                    case 8:
                        divCompras[7].innerHTML = divCompras[7].innerHTML + `<span id="${id}">${compra.compra}</span>`
                        break
                    case 9:
                        divCompras[8].innerHTML = divCompras[8].innerHTML + `<span id="${id}">${compra.compra}</span>`
                        break
                    case 10:
                        divCompras[9].innerHTML = divCompras[9].innerHTML + `<span id="${id}">${compra.compra}</span>`
                        break
                    case 11:
                        divCompras[10].innerHTML = divCompras[10].innerHTML + `<span id="${id}">${compra.compra}</span>`
                        break
                    case 12:
                        divCompras[11].innerHTML = divCompras[11].innerHTML + `<span id="${id}">${compra.compra}</span>`
                        break
                }
                for (let i = 0; i < 12; i++) {
                    let index = 0
                    while (divCompras[i].children[index] != undefined) {
                        divCompras[i].children[index].addEventListener('click', (e) => {
                            setItem('editarCompra', e.srcElement.id)
                            href(caminhoPai + 'paginas/editarCompras.html')
                        })
                        index++
                    }
                }
            }
        })
    }
}

function comprarEditar() {
    compra = valueId('valor')
    compras[idCompra].compra = compra
    setItem('compras', stringify(compras))
    href(caminhoPai + 'paginas/compras.html')
}

function exibirAno() {
    ano = elementId('ano')
    anoVizualizar = getItem('visualizarAno')
    if (anoVizualizar == undefined) {
        anoVizualizar = new Date().getFullYear()
    }
    ano.innerText = anoVizualizar
}

function cadastrarDespesa() {
    despesaValue = valueId('despesa')
    data = new Date().toLocaleDateString()
    if (getItem('despesas') == undefined) {
        setItem('despesas', stringify([{ despesa: despesaValue, data: data }]))
    } else {
        despesas = parse(getItem('despesas'))
        despesas.push({ despesa: despesaValue, data: data })
        setItem('despesas', stringify(despesas))
    }
    href(caminhoPai + 'paginas/caixaMensal.html')
}

caixaNav.addEventListener('click', () => {
    if (getItem('inicio') == null) {
        localStorage.setItem('inicio', window.location.href)
    }
    caminhoPai = getItem('inicio')

    window.location = caminhoPai
})
cadastrarNav.addEventListener('click', () => {
    if (getItem('inicio') == null) {
        localStorage.setItem('inicio', window.location.href)
    } else if (getItem('inicio').includes('index.html')) {
        caminhoPai = getItem('inicio').replace('index.html', '')
        console.log(caminhoPai)
    }
    window.location = caminhoPai + 'paginas/cadastrarProduto.html'
})

estoqueNav.addEventListener('click', () => {
    if (getItem('inicio') == null) {
        localStorage.setItem('inicio', window.location.href)
    } else if (getItem('inicio').includes('index.html')) {
        caminhoPai = getItem('inicio').replace('index.html', '')
    }
    window.location = caminhoPai + 'paginas/estoque.html'
})

cadastroCliente.addEventListener('click', () => {
    if (getItem('inicio') == null) {
        setItem('inicio', window.location.href)
    } else if (getItem('inicio').includes('index.html')) {
        caminhoPai = getItem('inicio').replace('index.html', '')
    }

    window.location = caminhoPai + 'paginas/cadastroCliente.html'
})

clientesNav.addEventListener('click', () => {
    if (getItem('inicio') == null) {
        setItem('inicio', window.location.href)
    } else if (getItem('inicio').includes('index.html')) {
        caminhoPai = getItem('inicio').replace('index.html', '')
    }

    setItem('retiradaAntigo', 0)
    window.location = caminhoPai + 'paginas/clientes.html'
})

cadastrarCompra.addEventListener('click', () => {
    if (getItem('inicio' == null)) {
        setItem('inicio', window.location.href)
    } else if (getItem('inicio').includes('index.html')) {
        caminhoPai = getItem('inicio').replace('index.html', '')
    }
    window.location = caminhoPai + 'paginas/cadastroCompra.html'
})

comprasNav.addEventListener('click', () => {
    if (getItem('inicio' == null)) {
        setItem('inicio', location.href)
    } else if (getItem('inicio').includes('index.html')) {
        caminhoPai = getItem('inicio').replace('index.html', '')
    }
    setItem('visualizarAno', new Date().getFullYear())
    location = caminhoPai + 'paginas/compras.html'
})

prestacoesNav.addEventListener('click', () => {
    if (getItem('inicio' == null)) {
        setItem('inicio', location.href)
    } else if (getItem('inicio').includes('index.html')) {
        caminhoPai = getItem('inicio').replace('index.html', '')
    }

    location = caminhoPai + 'paginas/prestacoes.html'
})

cadastrarPrestacao.addEventListener('click', () => {
    if (getItem('inicio' == null)) {
        setItem('inicio', location.href)
    } else if (getItem('inicio').includes('index.html')) {
        caminhoPai = getItem('inicio').replace('index.html', '')
    }

    location = caminhoPai + 'paginas/cadastrarPrestacoes.html'
})

caixaMensalNav.addEventListener('click', () => {
    if (getItem('inicio') == null) {
        setItem('inicio', location.href)
    } else if (getItem('inicio').includes('index.html')) {
        caminhoPai = getItem('inicio').replace('index.html', '')
    }
    setItem('visualizarAno', new Date().getFullYear())
    location = caminhoPai + 'paginas/caixaMensal.html'
})

cadastrarDespesasNav.addEventListener('click', () => {
    if (getItem('inicio') == null) {
        setItem('inicio', location.href)
    } else if (getItem('inicio').includes('index.html')) {
        caminhoPai = getItem('inicio').replace('index.html', '')
    }

    location = caminhoPai + 'paginas/cadastrarDespesas.html'
})

if (getItem('inicio').includes('index.html')) {
    caminhoPai = getItem('inicio').replace('index.html', '')
}

if (location == caminhoPai + 'paginas/clientes.html') {
    retiradaAntigo.innerText = getItem('retiradaAntigo')
    if (clientes != null) {
        clientes = parse(clientes)
        clientes.forEach((cliente, id) => {
            clientesDiv[0].innerHTML = clientesDiv[0].innerHTML + `<span id='${id}'>${cliente.nome}</span>`
            clientesDiv[1].innerHTML = clientesDiv[1].innerHTML + `<span id='${id}'>${cliente.divida}</span>`
            clientesDiv[2].innerHTML = clientesDiv[2].innerHTML + `<span class=cobrarReceber id=${id}>Cobrar</span>`
            clientesDiv[3].innerHTML = clientesDiv[3].innerHTML + `<span class=cobrarReceber id=${id}>Receber</span>`
        })
        let index = 1
        while (clientesDiv[0].children[index] != undefined) {
            clientesDiv[0].children[index].addEventListener('click', (e) => {
                setItem('idCliente', e.srcElement.id)
                href(caminhoPai + 'paginas/editarCliente.html')
            })
            clientesDiv[1].children[index].addEventListener('click', (e) => {
                setItem('idCliente', e.srcElement.id)
                href(caminhoPai + 'paginas/editarCliente.html')
            })
            clientesDiv[2].children[index].addEventListener('click', (e) => {
                setItem('idCliente', e.srcElement.id)
                href(caminhoPai + 'paginas/cobrar.html')
            })
            clientesDiv[3].children[index].addEventListener('click', (e) => {
                setItem('idCliente', e.srcElement.id)
                href(caminhoPai + 'paginas/receber.html')
            })
            index++
        }
    }

} else if (location == caminhoPai + 'paginas/estoque.html') {
    if (produtos != null) {
        produtos = parse(produtos)
        produtos.forEach((item, id) => {
            estoque[0].innerHTML = estoque[0].innerHTML + `<span id='${id}'>${item.nome}</span>`
            estoque[1].innerHTML = estoque[1].innerHTML + `<span id='${id}'>${item.compra}</span>`
            estoque[2].innerHTML = estoque[2].innerHTML + `<span id='${id}'>${item.venda}</span>`
            estoque[3].innerHTML = estoque[3].innerHTML + `<span id='${id}'>${item.quantidade}</span>`
            total = total + item.venda * item.quantidade
        })
        totalSpan.innerText = total.toFixed(2)
        let index = 0
        while (estoque[0].children[index] != undefined) {
            estoque[0].children[index].addEventListener('click', (e) => {
                setItem('idProduto', e.srcElement.id)
                href('./editar.html')
            })
            estoque[1].children[index].addEventListener('click', (e) => {
                setItem('idProduto', e.srcElement.id)
                href('./editar.html')
            })
            estoque[2].children[index].addEventListener('click', (e) => {
                setItem('idProduto', e.srcElement.id)
                href('./editar.html')
            })
            estoque[3].children[index].addEventListener('click', (e) => {
                setItem('idProduto', e.srcElement.id)
                href('./editar.html')
            })
            index++
        }
    }

} else if (window.location == caminhoPai + 'paginas/editar.html') {
    produtos = parse(produtos)
    nomeCampo = elementName('nome')
    compraCampo = elementName('compra')
    vendaCampo = elementName('venda')
    quantidadeCampo = elementName('quantidade')
    nomeCampo.value = produtos[id].nome
    compraCampo.value = produtos[id].compra
    vendaCampo.value = produtos[id].venda
    quantidadeCampo.value = produtos[id].quantidade
} else if (location == caminhoPai + 'paginas/editarCliente.html') {
    idCliente = getItem('idCliente')
    clientes = parse(getItem('clientes'))
    nomeCampo = elementId('cliente')
    nomeCampo.value = clientes[idCliente].nome
} else if (location == caminhoPai + 'paginas/cobrar.html' || location == caminhoPai + 'paginas/receber.html') {
    nome = elementId('cliente')
    idCliente = getItem('idCliente')
    clientes = parse(getItem('clientes'))
    nome.value = clientes[idCliente].nome
} else if (location == caminhoPai + 'paginas/compras.html') {
    exibirCompras()
    anoExibido.innerText = anoAtual
    totalSpan.innerText = total.toFixed(2)
} else if (location == caminhoPai + 'paginas/editarCompras.html') {
    idCompra = getItem('editarCompra')
    compra = elementId('valor')
    parcelas = elementId('parcelas')
    compras = parse(getItem('compras'))
    compra.value = compras[idCompra].compra
    parcelas.value = compras[idCompra].parcelas
} else if (location == caminhoPai + 'paginas/prestacoes.html') {
    prestacoes = parse(getItem('prestacoes'))
    if (prestacoes != undefined) {
        prestacoes.forEach((prestacao, index) => {
            if (prestacao.mes <= new Date().getMonth()) {
                prestacao.mes == 11 ? prestacoes[index].mes = 0 : prestacoes[index].mes++
            }
        })
        prestacoes.forEach((prestacao, index) => {
            prestacao.parcelas == 0 ? prestacoes.splice(index, 1) : null;
        })
        prestacoes.forEach((prestacao, index) => {
            let indexMes = prestacao.mes
            for (i = 0; i < 12; i++) {
                if (i <= prestacoes[index].parcelas) {
                    prestacaoDiv[indexMes].innerHTML = prestacaoDiv[indexMes].innerHTML + `<span id=${index}>${prestacoes[index].prestacao}</span>`
                    totalPrestacoes[indexMes] = totalPrestacoes[indexMes] + Number(prestacoes[index].prestacao)
                } else {
                    prestacaoDiv[indexMes].innerHTML = prestacaoDiv[indexMes].innerHTML + '<span>.</span>'
                }
                indexMes == 11 ? indexMes = 0 : indexMes++
            }
        })
        for(indexMes = 0; indexMes < 12; indexMes++) {
                let indexSpan = 0
                while (prestacaoDiv[indexMes].children[indexSpan] != undefined) {
                    if (prestacaoDiv[indexMes].children[indexSpan].innerText != '.') {
                        prestacaoDiv[indexMes].children[indexSpan].addEventListener('click', (e) => {
                            setItem('idPrestacao', e.srcElement.id)
                            href(caminhoPai + 'paginas/editarPrestacoes.html')
                        })
                    }
                    indexSpan++
                }
        }
        for (i = 0; i < 12; i++) {
            totalPrestacoes[i] != undefined ? prestacaoDiv[i].innerHTML = prestacaoDiv[i].innerHTML + `<span>${totalPrestacoes[i].toFixed(2)}</span>` : null
            total = (Number(total) + Number(totalPrestacoes[i])).toFixed(2)
        }
        totalSpan.innerText = total
        setItem('prestacoes', stringify(prestacoes))
        for(indexMes = 0; indexMes < 12; indexMes++) {
                let indexSpan = 0
                while (prestacaoDiv[indexMes].children[indexSpan] != undefined) {
                    if (prestacaoDiv[indexMes].children[indexSpan].innerText != '.') {
                        prestacaoDiv[indexMes].children[indexSpan].addEventListener('click', (e) => {
                            setItem('idPrestacao', e.srcElement.id)
                            console.log('ola')
                            href(caminhoPai + 'paginas/editarPrestacoes.html')
                        })
                    }
                    indexSpan++
                }
        }
    }
} else if (location == caminhoPai + 'paginas/editarPrestacoes.html') {
    prestacoes = parse(getItem('prestacoes'))
    idPrestacao = getItem('idPrestacao')
    prestacaoInput = elementId('prestacaoValue')
    parcelasValue = elementId('parcelasValue')
    prestacaoInput.value = prestacoes[idPrestacao].prestacao
    parcelasValue.value = prestacoes[idPrestacao].parcelas
} else if (location == caminhoPai + 'paginas/caixaMensal.html') {
    exibirAno()
    if (getItem('visualizarAno') == undefined) {
        ano = new Date().getFullYear()
    } else {
        ano = getItem('visualizarAno')
    }
    compras = parse(getItem('compras'))
    vendas = parse(getItem('vendas'))
    despesas = parse(getItem('despesas'))
    totalCompras = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    totalVendas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    totalSaldo = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    totalDespesas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    totalLucro = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    totalMargem = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    acumulados = [0, 0, 0, 0, 0]
    medias = [0, 0, 0, 0, 0, 0]
    if (compras != undefined) {
        compras.forEach((compra) => {
            mes = compra.data.split('/')[1] - 1
            anoCompra = compra.data.split('/')[2]
            if (anoCompra == ano) {
                totalCompras[mes] = totalCompras[mes] + Number(compra.compra)
            }
        })
        for (i = 0; i < 12; i++) {
            totalCompras[i] = totalCompras[i].toFixed(2)
        }
    }
    if (despesas != undefined) {
        despesas.forEach((despesa) => {
            mes = despesa.data.split('/')[1] - 1
            anoDespesa = despesa.data.split('/')[2]
            if (anoDespesa == ano) {
                totalDespesas[mes] = totalDespesas[mes] + Number(despesa.despesa)
            }
        })
    }
    if (vendas != undefined) {
        vendas.forEach((venda) => {
            mes = venda.data.split('/')[1] - 1
            anoVenda = venda.data.split('/')[2]
            if (anoVenda == ano) {
                totalVendas[mes] = totalVendas[mes] + Number(venda.venda)
                totalLucro[mes] = totalLucro[mes] + Number(venda.lucro)
            }
        })
        for (i = 0; i < 12; i++) {
            totalVendas[i] = totalVendas[i].toFixed(2)
            totalLucro[i] = totalLucro[i].toFixed(2)
        }
    }
    if (getItem('despesas') != undefined) {
        for (i = 0; i < 12; i++) {
            totalLucro[i] = totalLucro[i] - totalDespesas[i]
        }
    }
    totalSaldo.forEach((total, index) => {
        totalSaldo[index] = totalVendas[index] - totalCompras[index]
    })
    for (i = 0; i < 12; i++) {
        totalSaldo[i] = totalSaldo[i].toFixed(2)
    }
    totalMargem.forEach((margem, index) => {
        if (totalVendas[index] != 0) {
            totalMargem[index] = Number((Number(totalLucro[index]) / Number(totalVendas[index]) * 100).toFixed(2))
        }
    })
    for (i = 0; i < 12; i++) {
        acumulados[0] = acumulados[0] + Number(totalCompras[i])
        acumulados[1] = acumulados[1] + Number(totalVendas[i])
        acumulados[2] = acumulados[2] + Number(totalSaldo[i])
        acumulados[3] = acumulados[3] + Number(totalDespesas[i])
        acumulados[4] = acumulados[4] + Number(totalLucro[i])
        medias[0] = medias[0] + Number(totalCompras[i])
        medias[1] = medias[1] + Number(totalVendas[i])
        medias[2] = medias[2] + Number(totalSaldo[i])
        medias[3] = medias[3] + Number(totalDespesas[i])
        medias[4] = medias[4] + Number(totalLucro[i])
        medias[5] = medias[5] + Number(totalMargem[i].toFixed(2))
    }
    acumulados[0] = acumulados[0].toFixed(2)
    acumulados[1] = acumulados[1].toFixed(2)
    acumulados[2] = acumulados[2].toFixed(2)
    acumulados[3] = acumulados[3].toFixed(2)
    acumulados[4] = acumulados[4].toFixed(2)
    medias[0] = (medias[0] / 12).toFixed(2)
    medias[1] = (medias[1] / 12).toFixed(2)
    medias[2] = (medias[2] / 12).toFixed(2)
    medias[3] = (medias[3] / 12).toFixed(2)
    medias[4] = (medias[4] / 12).toFixed(2)
    medias[5] = (medias[5] / 12).toFixed(2)
    for (i = 0; i < 12; i++) {
        comprasDiv.innerHTML = comprasDiv.innerHTML + `<span>${totalCompras[i]}</span>`
        vendasDiv.innerHTML = vendasDiv.innerHTML + `<span>${totalVendas[i]}</span>`
        saldoDiv.innerHTML = saldoDiv.innerHTML + `<span>${totalSaldo[i]}</span>`
        despesasDiv.innerHTML = despesasDiv.innerHTML + `<span>${totalDespesas[i]}</span>`
        lucroDiv.innerHTML = lucroDiv.innerHTML + `<span>${totalLucro[i]}</span>`
        margemDiv.innerHTML = margemDiv.innerHTML + `<span>${totalMargem[i]}%</span>`

    }
    comprasDiv.innerHTML = comprasDiv.innerHTML + `<span>${acumulados[0]}</span>`
    vendasDiv.innerHTML = vendasDiv.innerHTML + `<span>${acumulados[1]}</span>`
    saldoDiv.innerHTML = saldoDiv.innerHTML + `<span>${acumulados[2]}</span>`
    despesasDiv.innerHTML = despesasDiv.innerHTML + `<span>${acumulados[3]}</span>`
    lucroDiv.innerHTML = lucroDiv.innerHTML + `<span>${acumulados[4]}</span>`
    margemDiv.innerHTML = margemDiv.innerHTML + `<span>${(acumulados[4] / acumulados[1] * 100).toFixed(2)}%</span>`
    comprasDiv.innerHTML = comprasDiv.innerHTML + `<span>${medias[0]}</span>`
    vendasDiv.innerHTML = vendasDiv.innerHTML + `<span>${medias[1]}</span>`
    saldoDiv.innerHTML = saldoDiv.innerHTML + `<span>${medias[2]}</span>`
    despesasDiv.innerHTML = despesasDiv.innerHTML + `<span>${medias[3]}</span>`
    lucroDiv.innerHTML = lucroDiv.innerHTML + `<span>${medias[4]}</span>`
    margemDiv.innerHTML = margemdiv.innerHTML + `<span>${(medias[4] / medias[1] * 100).toFixed(2)}%</span>`
} else if (location == caminhoPai || location.href.includes('index.html')) {
    compras = parse(getItem('compras'))
    vendas = parse(getItem('vendas'))
    clientes = parse(getItem('clientes'))
    prestacoes = parse(getItem('prestacoes'))
    despesas = parse(getItem('despesas'))
    produtos = parse(getItem('estoque'))
    recebimentosRetiradas = parse(getItem('recebimentosRetiradas'))
    totalCompras = 0
    totalVendas = 0
    if (compras != undefined) {
        compras.forEach((compra) => {
            totalCompras = totalCompras + Number(compra.compra)
        })
    }
    if (vendas != undefined) {
        vendas.forEach((venda) => {
            totalVendas = totalVendas + Number(venda.venda)
            totalLucro = totalLucro + Number(venda.lucro)

        })
    }
    totalSaldoVendas = totalVendas - totalCompras
    if (despesas != undefined) {
        despesas.forEach((despesa) => {
            totalLucro = totalLucro - Number(despesa.despesa)

        })
    }
    totalMargem = totalLucro / totalVendas * 100
    if (recebimentosRetiradas != undefined) {
        recebimentosRetiradas.forEach((recebimentosRetirada) => {
            totalCaixa = totalCaixa + Number(recebimentosRetirada)
        })
    }
    if (clientes != undefined) {
        clientes.forEach((cliente) => {
            totalReceber = totalReceber + Number(cliente.divida)
        })
    }
    if (prestacoes != undefined) {
        prestacoes.forEach((prestacao) => {
            totalPagar = totalPagar + Number(prestacao.prestacao) * prestacao.parcelas
        })
    }
    totalSaldo = totalCaixa + totalReceber - totalPagar
    totalSaldoEstoque = 0
    if (produtos != undefined) {
        let totalEstoque = 0
        produtos.forEach((produto) => {
            totalEstoque = totalEstoque + Number(produto.venda) * Number(produto.quantidade)
        })
        totalSaldoEstoque = totalEstoque + totalSaldo
    }
    totalComprasSpan.innerText = totalCompras.toFixed(2)
    totalVendasSpan.innerText = totalVendas.toFixed(2)
    saldoVendas.innerText = totalSaldoVendas.toFixed(2)
    lucroAcumulado.innerText = totalLucro.toFixed(2)
    if (String(totalMargem) == 'NaN') {
        margemAcumulado.innerText = '0%'
    } else {
        margemAcumulado.innerText = totalMargem.toFixed(2) + '%'
    }
    caixaCaixa.innerText = totalCaixa.toFixed(2)
    receberReceber.innerText = totalReceber.toFixed(2)
    pagarPagar.innerText = totalPagar.toFixed(2)
    saldoSaldo.innerText = totalSaldo.toFixed(2)
    saldoEstoque.innerText = totalSaldoEstoque.toFixed(2)
}

