/* Desenhando canvas */
let canvas = document.getElementById("snake")

/* Deixando o canvas como um plano 2d */
let context = canvas.getContext("2d")

/* Criando a área quadrada de 32px */
let box = 32

/* Criando vetor da cobrinha */
let snake = []
snake[0] = {
  x: 1 * box,
  y: 1 * box
}

/* Movimentar a cobrinha */
let direction = "right"

/* Array da comida */
let food = {
  /* Gera aleatoriamente um número até o tamanho do cenario */
  x: Math.floor(Math.random() * 15 + 1) * box,
  y: Math.floor(Math.random() * 15 + 1) * box
}

/* Criar o background */
function criarBG(){
  context.fillStyle = "#A1C192"

  //desenha o retângulo usando x e y e a largura e altura setadas
  context.fillRect(0, 0, 16 * box, 16 * box)
}

/* Cria a cobrinha */
function criarCobrinha(){
  for(i=0; i < snake.length; i++){
    /* Cor da cobrinha */
    /* Tamanho da cobrinha (inicial até o final (tamanho do cenário)) */
    context.fillStyle = "#4A5844"
    context.fillRect(snake[i].x, snake[i].y, box, box)
  }
}

/* Funçao para desenhar a comida */
function drawFood(){
  context.fillStyle = "#4A5844"
  context.fillRect(food.x, food.y, box, box)
}

/* Evento de escuta da cobrinha */
document.addEventListener('keydown', update)

/* Funcao para movimentar a cobrinha pelo teclado */
/* Direção nao pode ser oposta da direçao setada */
function update (event){
  if(event.keyCode == 37 && direction != "right") direction = "left"
  if(event.keyCode == 38 && direction != "down") direction = "up"
  if(event.keyCode == 39 && direction != "left") direction = "right"
  if(event.keyCode == 40 && direction != "up") direction = "down"
}

function iniciarJogo(){

  /* Retornar a cobrinha para o cenário */
  if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0
  if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box
  if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0
  if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box

  /* Looping para ver se cada coordenada se choca com a cobrinha */
  for(i = 1; i < snake.length; i++){
    if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
      clearInterval(jogo)
      alert('Game Over :(')
      location.reload()
    }
  }

  criarBG()
  criarCobrinha()
  drawFood()

  /* Dar movimentos para a cobrinha */
  let snakeX = snake[0].x
  let snakeY = snake[0].y

  if(direction == "right") snakeX += box
  if(direction == "left") snakeX -= box
  if(direction == "up") snakeY -= box
  if(direction == "down") snakeY += box

  /* Função para aumentar a cobrinha */
  if(snakeX != food.x || snakeY != food.y){
    /* Acrescenta a comida na cobrinha */
    snake.pop()
  }
  else{
    /* Adiciona a comida em outro local do canvas */
    food.x = Math.floor(Math.random() * 15 + 1) * box,
    food.y = Math.floor(Math.random() * 15 + 1) * box
  }

  /* Funcao para acrescentar a cabeça da cobrinha */
  let newHead = {
    x: snakeX,
    y: snakeY
  }

  //método unshift adiciona como primeiro quadradinho da cobrinha
  snake.unshift(newHead)
}

/* Function para iniciar o jogo*/
let jogo = setInterval(iniciarJogo, 100)