//código do ator

let xAtor = 85;
let yAtor = 366;
let batida = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    yAtor += 3;
    if(yAtor > 366){
      yAtor = 366;
    }
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    batida = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if (batida){
      voltaPosicaoInicial();
      meusPontos = 0;
      colidiu.play();
    }
  }
}

function voltaPosicaoInicial(){
  yAtor = 366;
}
function incluiPontos(){
  fill(color(255,240,60))
  textAlign(CENTER)
  textSize(25)
  text(meusPontos, width / 5, 27);
}
function marcaPonto(){
  if(yAtor < 15){
    meusPontos += 1;
  voltaPosicaoInicial();
    ponto.play();
  }
}
