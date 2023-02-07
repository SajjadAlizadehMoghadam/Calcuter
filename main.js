const display1El = document.querySelector(".display-1");
const display2El = document.querySelector(".display-2");
const tempResultEl = document.querySelector(".temp-result");
const nemberlEl = document.querySelectorAll(".number");
const opationEl = document.querySelectorAll(".opation");
const equalEl = document.querySelector(".equal");
const clearEl = document.querySelector(".all-clear");
const lastEl = document.querySelector(".last-clear");

let dis1Num = "";
let dis2Num = "";
let result = null;
let lastOpration = "";
let havDot = false;

nemberlEl.forEach((number) => {
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
    havDot = false;

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

function clearVar(name = "") {
  dis1Num += dis2Num + " " + name + " ";
  display1El.innerText = dis1Num;
  display2El.innerText = 0;
  dis2Num = "";
  tempResultEl.innerText = result;
}

function mathOpation() {
  if (lastOpration === "X") {
    result = parseFloat(result) * parseFloat(dis2Num);
  } else if (lastOpration === "+") {
    result = parseFloat(result) + parseFloat(dis2Num);
  } else if (lastOpration === "-") {
    result = parseFloat(result) - parseFloat(dis2Num);
  } else if (lastOpration === "%") {
    result = parseFloat(result) % parseFloat(dis2Num);
  } else if (lastOpration === "/") {
    result = parseFloat(result) / parseFloat(dis2Num);
  }
}
