const contanier = document.querySelector(".container");
const text = document.querySelector("#text");

const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerHTML = "Breath In!";
  contanier.className = "container grow";

  //just wait untill the time given like a sleep.
  setTimeout(() => {
    text.innerHTML = "Hold...";

    setTimeout(() => {
      text.innerHTML = "Breath Out!";

      contanier.className = "container shrink";
    }, holdTime);
  }, breathTime);
}

//run the given function every time after given time.
setInterval(breathAnimation, totalTime);
