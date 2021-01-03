const elemento = document.querySelector(".jogo");
const elemParaModal = document.querySelector("#modal");
const telaNaoClicavel = document.querySelector("#tela");

let elementosClicados = [];
let cartasClicadasPorRodada = 0;
let primeiroId = 0;
let segundoId = 0;
let pontos = 0;
const numeroDePares = defineNumeroDePares();
const tempoAntesDaCartaErradaVirarDeVolta = 2000;
const tempoParaAparecerMensagemVitoria = 800;
const tempoNaoClicavel = 2000;
const tempoParaVirarACarta = 200;
const escalaInteira = "scale(1)";
const escalaEnquantoCartaVira = "scale(0.1, 1)";


elemento.addEventListener("click", function(event){
  event.preventDefault();

  const clicado = event.target;
  segundoId = clicado.id
  const virado = clicado.className;
  
  verificaSePodeMostrarCarta(virado, clicado)
  
  defineOPrimeiroId(clicado.id);
  
});


function animaACartaVirando(carta){
  carta.animate({"transform" : escalaEnquantoCartaVira}, tempoParaVirarACarta);
    setTimeout(() => {
      trocaClasseVerso(carta);
      carta.style.transform = escalaEnquantoCartaVira;
      carta.animate({"transform" : escalaInteira}, tempoParaVirarACarta);
      setTimeout(() => {
        carta.style.transform = escalaInteira;

      }, tempoParaVirarACarta);
  }, (tempoParaVirarACarta - 30));
}

function bloqueiaCliques(){
  telaNaoClicavel.classList.add("naoClicavel");
} 

function colocaModalVitoria(elemParaModal){
  elemParaModal.classList.remove("escondeModal");
}

function colocaNoVetorDeVerificacao(clicado){
  //Para fazer a verificação(comparação), coloquei em um vetor...
  const classeElementoClicado = clicado.className;
  elementosClicados.push(classeElementoClicado);
} 

function defineNumeroDePares(){
  const numeroDeCartas = elemento.childNodes.length - 2;
  const numeroDosPares = numeroDeCartas / 2;
  
  return numeroDosPares;
}

function defineOPrimeiroId(id){
  if (verificaSeNaoEhVazio(id)){
    primeiroId = id;
  }
}

function desviraCarta(){
  const primeiro = document.getElementById(primeiroId);
  const segundo = document.getElementById(segundoId);
  
  setTimeout(() => {
    animaACartaVirando(primeiro);
    tocarSomDesvirando();
    animaACartaVirando(segundo);
  }, tempoAntesDaCartaErradaVirarDeVolta);

}

function trocaClasseVerso(alvo){
  alvo.classList.toggle("verso");
}

function permiteCliques(){
  telaNaoClicavel.classList.remove("naoClicavel");
}

function viraCarta(clicado){
  animaACartaVirando(clicado);
  tocarSomVirando();
}
