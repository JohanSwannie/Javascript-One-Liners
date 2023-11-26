const container = document.querySelector(".container");
let n = 1;
let p = "";
let o = 1;

const displayLoop = () => {
  const pippy = document.createElement("p");
  p = `p${n}`;
  pippy.setAttribute("id", p);
  container.appendChild(pippy);
  document.getElementById(
    `${p}`
  ).innerHTML = `<h4 style="font-size: 1.3rem; color: red">We have waited for 5 seconds and here we are now</h4>`;
  if (o === 10) {
    clearInterval(displayLoopId);
  }
  n++;
  o++;
};

let displayLoopId;

displayLoopId = setInterval(displayLoop, 5000);
