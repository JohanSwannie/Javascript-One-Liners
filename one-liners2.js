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
  ).innerHTML = `This is display number ${n} of the loop`;
  if (o === 10) {
    clearInterval(displayLoopId);
  }
  n++;
  o++;
};

let displayLoopId;

displayLoopId = setInterval(displayLoop, 5000);
