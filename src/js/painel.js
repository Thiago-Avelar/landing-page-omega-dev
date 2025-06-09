const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

 function esconderImagens(){
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
}

 function mostrarImagens(){
        imagensPainel[imagemAtual].classList.add('mostrar');
 }

/*
   quando clicar na seta temos que esconder todas as imagens e mostrar a proxima imagem
*/

setaAvancar.addEventListener('click', function () {
    //testa se o contador da imagemAtual e igual ao total de imagens
const totalDeImagens = imagensPainel.length - 1;
if(imagemAtual === totalDeImagens) {
    return;
}
    /*
    imagem atual começa em 0;
    assim que for clicado no avançar eu preciso adicionar mais 1 ao contador de imagem
    pra porder saber que agora vou mostrar a segunda imagem

    */
    imagemAtual++;

    esconderImagens();
    mostrarImagens();
});

setaVoltar.addEventListener('click', function(){
    if(imagemAtual === 0){
        return;
    }

    imagemAtual--;

    esconderImagens();
    mostrarImagens();
});
