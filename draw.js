const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

let snake;
let fruit;

(function setup() {
    snake = new Snake();
    fruit = new Fruit();
    fruit.pickLocation();

    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fruit.draw();
        snake.update();
        snake.draw();

        if (snake.eat(fruit)) {
            fruit.pickLocation();
        }

        document.getElementById("score").innerText = snake.total;
    }, 120);
}());

window.addEventListener("keydown", e => {
    const direction = e.key.replace("Arrow", "");
    snake.changeDirection(direction);
});
