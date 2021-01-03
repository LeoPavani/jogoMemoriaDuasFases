function tocarSomDeAcerto(){
  var audioAcertou = new Audio();
  audioAcertou.src = "../sons/success.wav";
  audioAcertou.play();
}

function tocarSomDesvirando(){
  var audio2 = new Audio();
  audio2.src = "../sons/desviraCartaSom.wav";
  audio2.play();
}

function tocarSomVirando(){
  var audio1 = new Audio();
  audio1.src = "../sons/viraCartaSom.wav";
  audio1.play();
}

function tocarSomVitoria(){
  var audioVitoria = new Audio();
  audioVitoria.src = "../sons/yeah.wav";
  audioVitoria.play();
}