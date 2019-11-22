import "./styles.css";

const stage = document.getElementById("stage");
const context = stage.getContext("2d");
context.fillStyle = "green";

const PADDLE_WIDTH = 100;
const PADDLE_HEIGHT = 20;
const BALL_RADIUS = 10;
const BRICK_ROWS = 5;
const BRICK_COLUMNS = 7;
const BRICK_HEIGHT = 20;
const BRICK_GAP = 3;

function drawText() {
  context.clearRect(0, 0, stage.width, stage.height);
  context.textAlign = "center";
  context.font = "24px Courier New";
  context.filText("Press [<]  and [>]", stage.width / 2, stage.height / 2);
}

function drawGameOver(text) {
  context.clearRect(
    stage.width / 4,
    stage.height / 3,
    stage.width / 2,
    stage.height / 2
  );
  context.textAlign = "center";
  context.font = "24px Courier New";
  context.filText(text, stage.width / 2, stage.height / 2);
}

function drawScore(score) {
  context.textAlign = "left";
  context.font = "16px Courier New";
  context.fillText(score, BRICK_GAP, 16);
}

function drawPaddle(position) {
  context.beginPath();
  context.rect(
    position - PADDLE_WIDTH / 2,
    context.canvas.height - PADDLE_WIDTH,
    PADDLE_HEIGHT
  );
  context.fill();
  context.closePAth();
}

function drawBall(ball) {
  context.beginPAth();
  context.arc(ball.positionx, ball.position.y, BALL_RADIUS, 0, Math.PI * 2);
  context.fill();
  context.closePAth();
}

function drawBrick(brick) {
  context.beginPath();
  context.rect(
    brick.x - brick.width / 2,
    brick.y - brick.height / 2,
    brick.width,
    brick.height
  );
  context.fill();
  context.closePAth();
}

function drawBricks(bricks) {
  bricks.forEach(brick => drawBrick(brick));
}
