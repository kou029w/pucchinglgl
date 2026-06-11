import { Oscillator } from "tone";
import randomInt from "./randomInt";
import keyPosition from "./keyPosition";
import keyLayouts from "./config/keyLayouts";
import pallet from "./config/pallet";

const root = document.body;
const grid = { colum: 14, row: 4 } as const;
const oscillators = Array.from(
  { length: grid.colum * grid.row },
  (_, i) =>
    new Oscillator(
      `${"CDEFGAB"[i % 7]}${Math.floor(i / 7)}`,
      "square"
    ).toDestination()
);
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d")!;

function tone(osc: Oscillator) {
  osc.start();
  osc.stop("+0.05");
}

function draw(px: number, py: number) {
  if (Number.isNaN(px) || Number.isNaN(py)) return;

  const col = Math.floor((px / canvas.width) * grid.colum);
  const screenRow = Math.floor((py / canvas.height) * grid.row);
  if (col < 0 || col >= grid.colum || screenRow < 0 || screenRow >= grid.row) {
    return;
  }

  try {
    // FIXME: Error: Start time must be strictly greater than previous start time.
    tone(oscillators[(grid.row - 1 - screenRow) * grid.colum + col]!);
  } catch {}

  const offset = () => 0.05 * (Math.random() - 0.5);
  const width = (0.08 + offset()) * canvas.height;
  const height = (0.08 + offset()) * canvas.height;
  ctx.fillStyle = pallet[randomInt(pallet.length - 1)]!;
  ctx.fillRect(px - width / 2, py - height / 2, width, height);
}

function handleKeydown({ key }: KeyboardEvent) {
  if (key === " ") return setup();

  const [x = randomInt(grid.colum - 1), y = randomInt(grid.row - 1)] = [
    ...keyPosition(keyLayouts.default, key),
    ...keyPosition(keyLayouts.shift, key),
  ];

  const offset = () => Math.random() - 0.5;
  draw(
    ((x + offset()) / (grid.colum - 1)) * canvas.width,
    ((y + offset()) / (grid.row - 1)) * canvas.height
  );
}

function handleMouseMove(event: { clientX: number; clientY: number }) {
  const { left, top } = canvas.getBoundingClientRect();
  const offset = () => 0.1 * (Math.random() - 0.5);
  draw(
    event.clientX - left + offset() * canvas.width,
    event.clientY - top + offset() * canvas.height
  );
}

function handleTouchmove(event: TouchEvent) {
  event.preventDefault();
  [...event.touches].forEach(handleMouseMove);
}

function resize() {
  if (canvas.width === 0 || canvas.height === 0) return setup();

  const snapshot = document.createElement("canvas");
  snapshot.width = canvas.width;
  snapshot.height = canvas.height;
  snapshot.getContext("2d")!.drawImage(canvas, 0, 0);

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.drawImage(snapshot, 0, 0, canvas.width, canvas.height);
}

function setup() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function main() {
  Object.assign(canvas.style, { width: "100%", height: "100%", display: "block" });
  root.addEventListener("keydown", handleKeydown);
  root.addEventListener("touchstart", handleTouchmove, { passive: false });
  root.addEventListener("touchmove", handleTouchmove, { passive: false });
  root.addEventListener("mousedown", handleMouseMove);
  root.addEventListener("mousedown", () => {
    root.addEventListener("mousemove", handleMouseMove);
  });
  for (const event of ["mouseup", "mouseleave"] as const) {
    root.addEventListener(event, () => {
      root.removeEventListener("mousemove", handleMouseMove);
    });
  }
  root.appendChild(canvas);
  Object.assign(root.style, {
    overflow: "hidden",
    overscrollBehavior: "none",
    background: "white",
  });
  window.addEventListener("resize", resize);
  setup();
}

main();
