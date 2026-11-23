// 1. Data: keys, key map and songs
//    KEYS, KEY_TO_PITCH, SONGS, withStartBeats

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

const KEY_TO_PITCH = {
  KeyA: "C4", KeyW: "C#4", KeyS: "D4", KeyE: "D#4", KeyD: "E4",
  KeyF: "F4", KeyT: "F#4", KeyG: "G4", KeyY: "G#4", KeyH: "A4",
  KeyU: "A#4", KeyJ: "B4", KeyK: "C5", KeyO: "C#5", KeyL: "D5",
  KeyP: "D#5", Semicolon: "E5",
};

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

// 2. Audio
//    audio, NAMES, midiOf, playTone

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

// 3. Draw the piano
//    pianoContainer, keyElements, whiteCount, KEYS.forEach

const pianoContainer = document.querySelector(".piano");
const keyElements = {};
let whiteCount = 0;

KEYS.forEach((item) => {
  const element = document.createElement("div");
  element.classList.add("key", item.type);
  element.dataset.note = item.note;
  const noteLabel = document.createElement("span");
  noteLabel.classList.add("note-name");
  noteLabel.textContent = item.note;

  const letterLabel = document.createElement("span");
  letterLabel.classList.add("key-letter");
  letterLabel.textContent = item.letter;

  element.append(noteLabel, letterLabel);

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

// 4. Input (keyboard and mouse share pressKey)
//    pressKey, releaseKey, keydown, keyup

function pressKey(pitch) {
  keyElements[pitch].classList.add("active");
  playTone(pitch);
  if (currentSong && playing) checkNote(pitch);
}

function releaseKey(pitch) {
  keyElements[pitch].classList.remove("active");
}

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


// 5. Falling notes
//    PX_PER_BEAT ... misses, blockHeight, placeInColumn,
//    createBlocks, draw, frame, startLoop, stopLoop

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
let misses = 0;

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
    const waiting = next && songBeat >= next.start;
    if (waiting) songBeat = next.start; // wait at the line
    lane.classList.toggle("waiting", Boolean(waiting));
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

// 6. Game logic
//    checkNote, hitNote, missNote, updateHud, finishSong

function checkNote(pitch) {
  const next = currentSong.notes[nextIndex];
  if (!next || songBeat < next.start) return; // not at the line yet: play freely
  if (pitch === next.pitch) hitNote();
  else missNote(pitch);
}

function hitNote() {
  noteBlocks[nextIndex].classList.add("hidden");
  nextIndex++;
  updateHud();
  if (nextIndex === currentSong.notes.length) finishSong();
}

function missNote(pitch) {
  misses++;
  updateHud();
  const key = keyElements[pitch];
  key.classList.add("wrong");
  setTimeout(() => key.classList.remove("wrong"), 300);
}

function updateHud() {
  document.getElementById("progress").textContent = `${nextIndex} / ${currentSong.notes.length}`;
  document.getElementById("misses").textContent = `Misses: ${misses}`;
}

function finishSong() {
  stopLoop();
  document.getElementById("results-text").textContent =
    `${currentSong.title}: ${currentSong.notes.length} notes, ${misses} misses.`;
  showScreen("results");
}

// 7. Screens and menu
//    songList, hud, currentSong, lastSong, SONGS.forEach,
//    startSong, startFreePlay, showScreen, button listeners,
//    showScreen("menu")

const songList = document.getElementById("song-list");
const hud = document.querySelector(".hud");
let currentSong = null;
let lastSong = null;

SONGS.forEach((song) => {
  const button = document.createElement("button");
  button.textContent = `${song.title} (${song.composer})`;
  button.addEventListener("click", () => startSong(song));
  songList.appendChild(button);
});

function startSong(song) {
  lastSong = song;
  currentSong = { ...song, notes: withStartBeats(song.notes) };
  misses = 0;
  document.getElementById("song-title").textContent = song.title;
  hud.classList.remove("hidden");
  lane.classList.remove("hidden");
  showScreen("game");  // must come BEFORE createBlocks
  createBlocks();
  startLoop();
  updateHud();
}

function startFreePlay() {
  stopLoop();
  currentSong = null;
  hud.classList.add("hidden");
  lane.classList.add("hidden");
  showScreen("game");
}

function showScreen(name) {
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.add("hidden");
  });
  document.getElementById(name).classList.remove("hidden");
}

document.getElementById("free-play-btn").addEventListener("click", startFreePlay);
document.getElementById("back-btn").addEventListener("click", () => {
  stopLoop();
  showScreen("menu");
});
document.getElementById("play-again-btn").addEventListener("click", () => startSong(lastSong));
document.getElementById("results-menu-btn").addEventListener("click", () => showScreen("menu"));



showScreen("menu");