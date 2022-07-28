
function setup() {
  createCanvas(500, 400);
  trilhasonora.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraOCarro();
  movimentaOCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}
