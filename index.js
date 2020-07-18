const contanier = document.querySelector(".container");
const text = document.querySelector("#text");

const totalTime = 8000;
const breathTime = (totalTime / 8) * 3;
const holdTime = totalTime / 8;

breathAnimation();

function breathAnimation() {
  text.innerHTML = "Breath In!";
  contanier.className = "container grow";

  //just wait untill the time given like a sleep.
  setTimeout(() => {
    text.innerHTML = "Hold...";

    setTimeout(() => {
      text.innerHTML = "Breath Out!";

      setTimeout(() => {
        text.innerHTML = "Hold Again!";
      }, breathTime);
      contanier.className = "container shrink";
    }, holdTime);
  }, breathTime);
}

//run the given function every time after given time.
setInterval(breathAnimation, totalTime);
