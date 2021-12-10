//code for a timer for the jeopardy page, counts down from 5mins

let counter = document.getElementById("timer");
let idTimer = null;

count = 300;

function timer() {
  idTimer = setInterval(tick, 1000);

  function tick() {
    console.log(count);
    let minutes = Math.floor(count / 60);
    let seconds = count % 60;
    counter.textContent = `${minutes}:${seconds}`;
    if (seconds < 10) {
      counter.textContent = `${minutes}:"00"${seconds}`;
    }
    console.log(minutes);
    console.log(seconds);

    count = count - 1;
    if (count <= 0) {
      count = "Round Complete!";
      counter.textContent = count;
      clearInterval(idTimer);
    }
  }
}

timer();

window.alert("You have 5 minutes! Player 1, begin!");
// Got timer to work, still a bit buggy

//use onclick to make boxes usable, need to tweak size in css
