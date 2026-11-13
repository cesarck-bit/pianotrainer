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

const pianoContainer = document.querySelector(".piano");
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
  pianoContainer.appendChild(element);
});

