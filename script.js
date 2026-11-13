// 1. Key data
const KEYS = [
  { note: "C4",  type: "white", letter: "A" },
  { note: "C#4", type: "black", letter: "W" },
  { note: "D4",  type: "white", letter: "S" },
  { note: "D#4", type: "black", letter: "E" },
  { note: "E4",  type: "white", letter: "D" },
  { note: "F4",  type: "white", letter: "F" },
  { note: "F#4", type: "black", letter: "T" },
  { note: "G4",  type: "white", letter: "G" },
  { note: "G#4", type: "black", letter: "Y" },
  { note: "A4",  type: "white", letter: "H" },
  { note: "A#4", type: "black", letter: "U" },
  { note: "B4",  type: "white", letter: "J" },
  { note: "C5",  type: "white", letter: "K" },
  { note: "C#5", type: "black", letter: "O" },
  { note: "D5",  type: "white", letter: "L" },
  { note: "D#5", type: "black", letter: "P" },
  { note: "E5",  type: "white", letter: ";" },
];

// 2. Physical key -> note
const KEY_TO_PITCH = {
  KeyA: "C4", KeyW: "C#4", KeyS: "D4", KeyE: "D#4", KeyD: "E4",
  KeyF: "F4", KeyT: "F#4", KeyG: "G4", KeyY: "G#4", KeyH: "A4",
  KeyU: "A#4", KeyJ: "B4", KeyK: "C5", KeyO: "C#5", KeyL: "D5",
  KeyP: "D#5", Semicolon: "E5",
};

// 3. Draw the keys
const pianoContainer = document.querySelector(".piano");
const keyElements = {};
let whiteCount = 0;

KEYS.forEach((item) => {
  const element = document.createElement("div");
  element.classList.add("key", item.type);
  element.dataset.note = item.note;
  element.textContent = item.letter;

  if (item.type === "white") {
    whiteCount++;
  } else {
    element.style.setProperty("--white-index", whiteCount);
  }

  element.addEventListener("mousedown", () => pressKey(item.note));
  element.addEventListener("mouseup", () => releaseKey(item.note));
  element.addEventListener("mouseleave", () => releaseKey(item.note));

  keyElements[item.note] = element;
  pianoContainer.appendChild(element);
});

// 4. Press and release (shared by keyboard and mouse)
function pressKey(pitch) {
  keyElements[pitch].classList.add("active");
}

function releaseKey(pitch) {
  keyElements[pitch].classList.remove("active");
}

// 5. Keyboard events
document.addEventListener("keydown", (event) => {
  if (event.repeat) return;
  const pitch = KEY_TO_PITCH[event.code];
  if (!pitch) return;
  pressKey(pitch);
});

document.addEventListener("keyup", (event) => {
  const pitch = KEY_TO_PITCH[event.code];
  if (pitch) releaseKey(pitch);
});