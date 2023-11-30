var campoTexto = document.querySelector('#nome');
var img = document.querySelector('img');
var btn = document.querySelector('#button');
btn.addEventListener('click', enviaRequisicao);


function enviaRequisicao() {
    var url, chave_api ;
    chave_api = 'MUG7xbLWbruXuavLK6WBppmKO0IMPfSIRW52rikg7Z0HgzyH77F07uT1';
    url ='https://api.pexels.com/v1/search?query=' + campoTexto.value;
    console.log(url);
    var requisicao = new XMLHttpRequest();
    requisicao.onload = manipulaResposta;
    requisicao.open('GET', url);
    requisicao.setRequestHeader('Authorization', chave_api);
    requisicao.send();
    function manipulaResposta() {
        var response = JSON.parse(requisicao.responseText);
        console.log(response);
        img.src = response.photos[0].src.large2x;
    }
}

