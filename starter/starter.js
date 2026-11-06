const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const player = { x: 347, y: 203, size: 26, speed: 240 };
const keys = new Set();

const directions = {
  arrowleft: [-1, 0], a: [-1, 0], arrowright: [1, 0], d: [1, 0],
  arrowup: [0, -1], w: [0, -1], arrowdown: [0, 1], s: [0, 1]
};

canvas.addEventListener("keydown", event => {
  const key = event.key.toLowerCase();
  if (!Object.hasOwn(directions, key)) return;
  event.preventDefault();
  keys.add(key);
});
canvas.addEventListener("keyup", event => keys.delete(event.key.toLowerCase()));
canvas.addEventListener("blur", () => keys.clear());
window.addEventListener("blur", () => keys.clear());

function update(dt) {
  let dx = 0;
  let dy = 0;
  for (const key of keys) {
    dx += directions[key][0];
    dy += directions[key][1];
  }
  const distance = player.speed * dt / (Math.hypot(dx, dy) || 1);
  player.x = Math.max(0, Math.min(canvas.width - player.size, player.x + dx * distance));
  player.y = Math.max(0, Math.min(canvas.height - player.size, player.y + dy * distance));
  // TODO: Check for a pickup after moving.
}

function draw() {
  ctx.fillStyle = "#122039";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  // TODO: Draw a pickup before drawing the player.
  ctx.fillStyle = "#70edcf";
  ctx.fillRect(player.x, player.y, player.size, player.size);
}

let previousTime;
function frame(time) {
  const dt = previousTime === undefined ? 0 : Math.min((time - previousTime) / 1000, 0.033);
  previousTime = time;
  update(dt);
  draw();
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
