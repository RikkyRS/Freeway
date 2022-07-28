//setup
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3

//Sons
let trilhasonora;
let colidiu;
let pontos;

function preload(){
  imagemDaEstrada = loadImage("Imagens/estrada.png");
  imagemDoAtor = loadImage("Imagens/ator-1.png");
  imagemCarro = loadImage("Imagens/carro-1.png");
  imagemCarro2 = loadImage("Imagens/carro-2.png");
  imagemCarro3 = loadImage("Imagens/carro-3.png");
  imagemCarros =[imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3];
  trilhasonora = loadSound("Sons/trilha.mp3");
  colidiu = loadSound("Sons/colidiu.mp3");
  ponto = loadSound("Sons/pontos.wav");
}
