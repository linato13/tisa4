const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const audio = document.getElementById("bg-music");
let musicStarted = false;

envelope.addEventListener("click", () => {
  envelope.classList.add("open");

  if (!musicStarted) {
    audio.play();
    musicStarted = true;
  }

  spawnHearts(10);
});

function spawnHearts(count) {
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight - 50 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 2000);
  }
}
