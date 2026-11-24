# Piano Trainer

Play it live: https://cesarck-bit.github.io/pianotrainer/

Video demo: (YouTube link coming soon)

A browser piano trainer. Notes fall toward a hit line and you play them on your computer keyboard. When a note reaches the line, the song waits until you press the right key. No real piano needed.

## How to play

1. Open the live link and choose a song, or pick Free play to just play the keys.
2. Notes fall from the top. Each block sits above the key you must press, and longer notes are taller blocks.
3. When a note reaches the line, the song stops and the line turns yellow. Press the right key to keep going.
4. A wrong key still plays its sound, flashes red and counts as a miss.
5. At the end you see your results, with Play again and Back to menu.

You can also click the keys with the mouse.

## Controls

| Computer key | A  | S  | D  | F  | G  | H  | J  | K  | L  | ;  |
|--------------|----|----|----|----|----|----|----|----|----|----|
| White key    | C4 | D4 | E4 | F4 | G4 | A4 | B4 | C5 | D5 | E5 |

| Computer key | W   | E   | T   | Y   | U   | O   | P   |
|--------------|-----|-----|-----|-----|-----|-----|-----|
| Black key    | C#4 | D#4 | F#4 | G#4 | A#4 | C#5 | D#5 |

## Songs

- Twinkle, Twinkle, Little Star (Traditional)
- Ode to Joy (Ludwig van Beethoven)
- Für Elise, opening theme (Ludwig van Beethoven)

To add a new song, add an object to the SONGS array in script.js. No other code changes are needed.

## Built with

- HTML, CSS and JavaScript, with no libraries.
- requestAnimationFrame for the falling notes, based on elapsed time so the speed is the same on any screen.
- Web Audio API for the sound.

## Credits

- All sounds are synthesized in the browser with the Web Audio API. No audio files are used.
- The three songs are in the public domain.
- Project for the Web Page Development 1 course, Fundatec (TEC).