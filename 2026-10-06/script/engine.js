const emojis = [
    "💾",
    "💾",
    "👨‍💻",
    "👨‍💻",
    "🤖",
    "🤖",
    "💻",
    "💻",
    "📈",
    "📈",
    "📡",
    "📡",
];
let openCards = [];
let moves = 0;

let shuffleEmojis = emojis.sort(()=> (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < shuffleEmojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    //box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}