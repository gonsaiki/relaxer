const container = document.getElementById("container");
const text = document.getElementById("text");

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = "Ambil Napas!";
  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "Tahan";

    setTimeout(() => {
      text.innerText = "Keluarkan!";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);
