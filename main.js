const display1El = document.querySelector(".display-1");
const display2El = document.querySelector(".display-2");
const tempResultEl = document.querySelector(".temp-result");
const numberlEl = document.querySelectorAll(".number");
const opationEl = document.querySelectorAll(".opation");
const equalEl = document.querySelector(".equal");
const clearEl = document.querySelector(".all-clear");
const lastEl = document.querySelector(".last-clear");

let dis1Num = "";
let dis2Num = "";
let result = null;
let lastOpration = "";
let havDot = false;

numberlEl.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !havDot) {
      havDot = true;
    } else if (e.target.innerText === "." && havDot) {
      return;
    }

    dis2Num += e.target.innerText;
    display2El.innerText = dis2Num;
  });
});

opationEl.forEach((opation) => {
  opation.addEventListener("click", (e) => {
    if (!dis2Num) return;

    if (dis1Num && dis2Num && lastOpration) {
      mathOpation();
    } else {
      result = parseFloat(dis2Num);
    }

    const opationName = e.target.innerText;

    lastOpration = opationName;

    clearVar(opationName);
  });
});

function clearVar(name = " ") {
  dis1Num += dis2Num + " " + name + " ";
  display1El.innerText = dis1Num;
  display2El.innerText = 0;
  dis2Num = "";
  tempResultEl.innerText = result;
}

function mathOpation() {
  if (lastOpration === "X") {
    result = parseFloat(result) * parseFloat(dis2Num);
  }

  if (lastOpration === "/") {
    result = parseFloat(result) / parseFloat(dis2Num);
  }

  if (lastOpration === "%") {
    result = parseFloat(result) % parseFloat(dis2Num);
  }

  if (lastOpration === "-") {
    result = parseFloat(result) - parseFloat(dis2Num);
  }

  if (lastOpration === "+") {
    result = parseFloat(result) + parseFloat(dis2Num);
  }
}

equalEl.addEventListener("click", (e) => {
  if (!dis1Num || !dis2Num) return;

  mathOpation();
  clearVar();

  display2El.innerText = result;
  tempResultEl.innerText = "";
});

clearEl.addEventListener("click", (e) => {
  display1El.innerText = 0;
  display2El.innerText = 0;
  tempResultEl.innerText = 0;
  dis1Num = "";
  dis2Num = "";
});

lastEl.addEventListener("click", (e) => {
  if (display2El.innerText.length === 1) {
    display2El.innerText = 0;
  } else {
    display2El.innerText = display2El.innerText.substring(
      0,
      display2El.innerText.length - 1
    );
  }

  dis2Num = "";
});
