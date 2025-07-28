const flap = document.querySelector(".flap");
const letter = document.querySelector(".letter");
const audio = document.getElementById("bg-music");

let opened = false;

function openEnvelope() {
  if (opened) return;
  flap.style.transform = "rotateX(-180deg)";
  letter.style.top = "0";
  audio.play().catch(e => {
    console.log("User interaction required to play audio:", e);
  });
  opened = true;
}
