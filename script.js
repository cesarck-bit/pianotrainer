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
  playTone(pitch);
}

function releaseKey(pitch) {
  keyElements[pitch].classList.remove("active");
}

// 6. Audio

const audio = new AudioContext();
const NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const midiOf = (pitch) => (Number(pitch.slice(-1)) + 1) * 12 + NAMES.indexOf(pitch.slice(0, -1));

function playTone(pitch) {
  if (audio.state === "suspended") audio.resume(); // browser blocks audio until user interaction
  const osc = audio.createOscillator();
  const gain = audio.createGain();
  osc.type = "triangle";
  osc.frequency.value = 440 * 2 ** ((midiOf(pitch) - 69) / 12);

  gain.gain.setValueAtTime(0.0001, audio.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.3, audio.currentTime + 0.01); // quick fade in
  gain.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + 1); //fade out

  osc.connect(gain).connect(audio.destination);
  osc.start();
  osc.stop(audio.currentTime + 1);
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

// 7. Songs

const SONGS = [
  {
    id: "twinkle",
    title: "Twinkle, Twinkle, Little Star",
    composer: "Traditional",
    bpm: 90,
    notes: [
      { pitch: "C4", beats: 1 }, { pitch: "C4", beats: 1 }, { pitch: "G4", beats: 1 }, { pitch: "G4", beats: 1 },
      { pitch: "A4", beats: 1 }, { pitch: "A4", beats: 1 }, { pitch: "G4", beats: 2 },
      { pitch: "F4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "E4", beats: 1 },
      { pitch: "D4", beats: 1 }, { pitch: "D4", beats: 1 }, { pitch: "C4", beats: 2 },
      { pitch: "G4", beats: 1 }, { pitch: "G4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "F4", beats: 1 },
      { pitch: "E4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "D4", beats: 2 },
      { pitch: "G4", beats: 1 }, { pitch: "G4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "F4", beats: 1 },
      { pitch: "E4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "D4", beats: 2 },
      { pitch: "C4", beats: 1 }, { pitch: "C4", beats: 1 }, { pitch: "G4", beats: 1 }, { pitch: "G4", beats: 1 },
      { pitch: "A4", beats: 1 }, { pitch: "A4", beats: 1 }, { pitch: "G4", beats: 2 },
      { pitch: "F4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "E4", beats: 1 },
      { pitch: "D4", beats: 1 }, { pitch: "D4", beats: 1 }, { pitch: "C4", beats: 2 },
    ],
  },
  {
    id: "ode-to-joy",
    title: "Ode to Joy",
    composer: "Ludwig van Beethoven",
    bpm: 100,
    notes: [
      { pitch: "E4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "G4", beats: 1 },
      { pitch: "G4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "D4", beats: 1 },
      { pitch: "C4", beats: 1 }, { pitch: "C4", beats: 1 }, { pitch: "D4", beats: 1 }, { pitch: "E4", beats: 1 },
      { pitch: "E4", beats: 1.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "D4", beats: 2 },
      { pitch: "E4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "G4", beats: 1 },
      { pitch: "G4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "D4", beats: 1 },
      { pitch: "C4", beats: 1 }, { pitch: "C4", beats: 1 }, { pitch: "D4", beats: 1 }, { pitch: "E4", beats: 1 },
      { pitch: "D4", beats: 1.5 }, { pitch: "C4", beats: 0.5 }, { pitch: "C4", beats: 2 },
    ],
  },
  {
    id: "fur-elise",
    title: "Für Elise (opening theme)",
    composer: "Ludwig van Beethoven",
    bpm: 60,
    notes: [
      { pitch: "E5", beats: 0.25 }, { pitch: "D#5", beats: 0.25 },
      { pitch: "E5", beats: 0.25 }, { pitch: "D#5", beats: 0.25 }, { pitch: "E5", beats: 0.25 },
      { pitch: "B4", beats: 0.25 }, { pitch: "D5", beats: 0.25 }, { pitch: "C5", beats: 0.25 },
      { pitch: "A4", beats: 0.75 }, { pitch: "C4", beats: 0.25 }, { pitch: "E4", beats: 0.25 }, { pitch: "A4", beats: 0.25 },
      { pitch: "B4", beats: 0.75 }, { pitch: "E4", beats: 0.25 }, { pitch: "G#4", beats: 0.25 }, { pitch: "B4", beats: 0.25 },
      { pitch: "C5", beats: 0.75 }, { pitch: "E4", beats: 0.25 }, { pitch: "E5", beats: 0.25 }, { pitch: "D#5", beats: 0.25 },
      { pitch: "E5", beats: 0.25 }, { pitch: "D#5", beats: 0.25 }, { pitch: "E5", beats: 0.25 },
      { pitch: "B4", beats: 0.25 }, { pitch: "D5", beats: 0.25 }, { pitch: "C5", beats: 0.25 },
      { pitch: "A4", beats: 0.75 }, { pitch: "C4", beats: 0.25 }, { pitch: "E4", beats: 0.25 }, { pitch: "A4", beats: 0.25 },
      { pitch: "B4", beats: 0.75 }, { pitch: "E4", beats: 0.25 }, { pitch: "C5", beats: 0.25 }, { pitch: "B4", beats: 0.25 },
      { pitch: "A4", beats: 1.5 },
    ],
  },
];

function withStartBeats(notes) {
  let beat = 0;
  return notes.map((note) => {
    const timed = { ...note, start: beat };
    beat += note.beats;
    return timed;
  });
}

// Falling notes
const PX_PER_BEAT = 120;
const LEAD_IN_BEATS = 3; // empty beats before the first note reaches the line
const lane = document.querySelector(".lane");
let noteBlocks = [];
let hitY = 0;
let songBeat = 0;
let nextIndex = 0;
let lastTime = null;
let playing = false;
let rafId = null;

function blockHeight(note) {
  return note.beats * PX_PER_BEAT - 4; // small gap between consecutive notes
}

function placeInColumn(block, pitch) {
  const key = keyElements[pitch];
  block.style.left = `${key.offsetLeft}px`;
  block.style.width = `${key.offsetWidth}px`;
}

function createBlocks() {
  lane.innerHTML = "";
  hitY = lane.clientHeight;
  noteBlocks = currentSong.notes.map((note) => {
    const block = document.createElement("div");
    block.classList.add("note-block");
    block.style.height = `${blockHeight(note)}px`;
    placeInColumn(block, note.pitch);
    lane.appendChild(block);
    return block;
  });
}

function draw() {
  currentSong.notes.forEach((note, i) => {
    const bottom = hitY - (note.start - songBeat) * PX_PER_BEAT;
    const top = bottom - blockHeight(note);
    noteBlocks[i].style.transform = `translateY(${top}px)`;
  });
}

function frame(now) {
  if (lastTime !== null) {
    const seconds = Math.min((now - lastTime) / 1000, 0.1);
    songBeat += seconds * (currentSong.bpm / 60);
    const next = currentSong.notes[nextIndex];
    if (next && songBeat >= next.start) songBeat = next.start; // wait at the line
  }
  lastTime = now;
  draw();
  if (playing) rafId = requestAnimationFrame(frame);
}

function startLoop() {
  stopLoop();
  songBeat = -LEAD_IN_BEATS;
  nextIndex = 0;
  lastTime = null;
  playing = true;
  rafId = requestAnimationFrame(frame);
}

function stopLoop() {
  playing = false;
  cancelAnimationFrame(rafId);
}

// Menu and modes
const songList = document.getElementById("song-list");
const hud = document.querySelector(".hud");
let currentSong = null;

SONGS.forEach((song) => {
  const button = document.createElement("button");
  button.textContent = `${song.title} (${song.composer})`;
  button.addEventListener("click", () => startSong(song));
  songList.appendChild(button);
});

function startSong(song) {
  currentSong = { ...song, notes: withStartBeats(song.notes) };
  document.getElementById("song-title").textContent = song.title;
  document.getElementById("progress").textContent = `0 / ${currentSong.notes.length}`;
  document.getElementById("misses").textContent = "Misses: 0";
  hud.classList.remove("hidden");
  lane.classList.remove("hidden");
  showScreen("game");  // must come BEFORE createBlocks
  createBlocks();
  startLoop();
}

function startFreePlay() {
  stopLoop();
  currentSong = null;
  hud.classList.add("hidden");
  lane.classList.add("hidden");
  showScreen("game");
}

document.getElementById("free-play-btn").addEventListener("click", startFreePlay);
document.getElementById("back-btn").addEventListener("click", () => {
  stopLoop();
  showScreen("menu");
});

function showScreen(name) {
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.add("hidden");
  });
  document.getElementById(name).classList.remove("hidden");
}

showScreen("menu");