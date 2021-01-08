function fazValidacoes(cartasClicadasPorRodada, clicado){
  if (verificaSeUmaDuplaJaFoiClicada(cartasClicadasPorRodada)){
    verificaDupla(elementosClicados, clicado);
    verificaVitoria(numeroDePares);
  }
}

function verificaSeCartaEstaViradaParaBaixo(virado){
  if (virado.indexOf('verso') !== -1){
    return true;
  }else{
    return false;
  }
}

function verificaDupla(){
  //verifica as classes (se for igual, a imagem também será)...
  if(elementosClicados[0] === elementosClicados[1]){
    setTimeout(() => {
      tocarSom(somDeAcerto);
    }, tempoParaVirarACarta * 3);
    pontos ++;
  }else{
    bloqueiaCliques();
    setTimeout(() => {
      permiteCliques();
    }, tempoNaoClicavel);
    desviraCarta();
  }
  elementosClicados = [];
  cartasClicadasPorRodada -= 2;
}

function verificaSeNaoEhVazio(objetoParaVerificar){
  if (objetoParaVerificar != ""){
    return true;
  }else{
    return false;
  }
}

function verificaSePodeMostrarCarta(virado, clicado){
  if (verificaSeCartaEstaViradaParaBaixo(virado) && clicado.id){
    viraCarta(clicado);
    colocaNoVetorDeVerificacao(clicado);
    fazValidacoes(cartasClicadasPorRodada, clicado);
    cartasClicadasPorRodada ++;
  }
}

function verificaSeUmaDuplaJaFoiClicada(cartasClicadasPorRodada){
  if (cartasClicadasPorRodada > 0){
    return true;
  } else{
    return false;
  }
}

function verificaVitoria(numeroDePares){
  if(pontos == numeroDePares){
    setTimeout(() => {
      tocarSom(somDeVitoria);
      colocaModalVitoria(elemParaModal);
    }, tempoParaAparecerMensagemVitoria);
  }else{
  } 
}