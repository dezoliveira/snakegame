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

/* Movimentar a cobrinha */
let direction = "right"

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

function iniciarJogo(){
  criarBG()
  criarCobrinha()

  /* Dar movimentos para a cobrinha */
  let snakeX = snake[0].x
  let snakeY = snake[0].y

  if(direction == "right") snakeX += box
  if(direction == "left") snakeX -= box
  if(direction == "up") snakeY -= box
  if(direction == "down") snakeY += box

  /* Funcao pop para retirar ultimo elemento do array (rabo da cobrinha) */
  snake.pop()

  /* Funcao para acrescentar a cabeça da cobrinha */
  let newHead = {
    x: snakeX,
    y: snakeY
  }

  snake.unshift(newHead)
}

/* Function para iniciar o jogo*/
let jogo = setInterval(iniciarJogo, 100)