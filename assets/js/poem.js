const phrases = [
    "The sun sets in the west",
    "Whispers of the wind",
    "Stars twinkle in the night",
    "A river flows gently",
    "Leaves rustle in the breeze",
    "Mountains stand tall",
    "Birds sing at dawn",
    "The moon glows softly",
    "Flowers bloom in spring",
    "Raindrops on the window"
];

function getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
}

function createPoem(lines) {
    let poem = "";
    for (let i = 0; i < lines; i++) {
        poem += getRandomPhrase() + "\n";
    }
    return poem;
}

const poem = createPoem(4);
console.log(poem);