let earthTexture;

function preload() {
  // Carregue a textura da Terra
  // Substitua o URL abaixo pelo caminho da sua imagem, se desejar
  earthTexture = loadImage('https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg');
}

function setup() {
  createCanvas(600, 600, WEBGL);
  noStroke();
}

function draw() {
  background(0);
  
  // Configurações de iluminação
  ambientLight(150);
  directionalLight(255, 255, 255, 0, -1, 0);
  
  // Permite rotacionar a Terra com o mouse
  rotateY(frameCount * 0.01);
  
  // Opcional: rotacionar com o mouse
  // rotateY(map(mouseX, 0, width, -PI, PI));
  // rotateX(map(mouseY, 0, height, -PI/2, PI/2));
  
  // Aplica a textura e desenha a esfera
  texture(earthTexture);
  sphere(200);
}
