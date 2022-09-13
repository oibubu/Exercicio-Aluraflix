var filmes = []
var imagens = []

function adicionarFilme(){
    var nomeFilme = document.getElementById('nomeFilme').value
    var imgFilme = document.getElementById('imgFilme').value
    if (nomeFilme.length == 0 || imgFilme.length == 0){
        window.alert ('[ERRO] Preencha todos os campos!')
    }else if(imgFilme.endsWith(".jpg") == false ){
        window.alert('O endereço da imagens está incorreto!')
        document.getElementById('imgFilme').value = ""
        document.getElementById('imgFilme').focus()
    }else if(filmes.indexOf(nomeFilme) != -1 || imagens.indexOf(imgFilme) != -1){
        window.alert('Filme ja adicionado!')
    }else{
        listarFilmes(nomeFilme, imgFilme)
        document.getElementById('nomeFilme').value = ""
        document.getElementById('imgFilme').value = ""
    }
}

function listarFilmes(nomeFilme, imgFilme){
    var listaFilmes = document.getElementById('listaFilmes')
    filmes.push(nomeFilme)
    imagens.push(imgFilme)
    listaFilmes.innerHTML = ""
    for (var f in filmes){
        listaFilmes.innerHTML += "<h2><img src=" + imagens[f] + "></br>" + filmes[f] + "</h2>"
    }
}

function limparFilmes(){
    listaFilmes.innerHTML = ''
    filmes = []
    imagens = []
    document.getElementById('nomeFilme').value = ""
    document.getElementById('imgFilme').value = ""
}