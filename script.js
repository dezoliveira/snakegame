/* Desenhando canvas */
let canvas = document.getElementById("snake")

/* Deixando o canvas como um plano 2d */
let context = canvas.getContext("2d")

/* Criando a área quadrada de 32px */
let box = 32

/* Criando vetor da cobrinha */
let snake = []
snake[0] = {
  x: 8 * box,
  y: 8 * box
}

/* Criar o background */
function criarBG(){
  context.fillStyle = "lightgreen"
  context.fillRect(0, 0, 16 * box, 16 * box)
}

/* Cria a cobrinha */
function criarCobrinha(){
  for(i=0; i < snake.length; i++){
    /* Cor da cobrinha */
    /* Tamanho da cobrinha (inicial até o final (tamanho do cenário)) */
    context.fillStyle = "green"
    context.fillRect(snake[i].x, snake[i].y, box, box)
  }
}

criarBG()
criarCobrinha()