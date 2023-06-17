import { check_type } from "./functions.js";
import { sum_of_array_intil_number } from "./functions.js";
import { array_until_number } from "./functions.js";
import { find_B } from "./functions.js";
import { add_p } from "./functions.js";
import { swap } from "./functions.js";

let L = Number(document.getElementById("L").value);
const actionBTN = document.getElementById("do_it");
const clearBTN = document.getElementById("clear");
const add = document.getElementById("add");
const inputs = document.getElementById("inputs");
const X1 = document.getElementById("X1");
const P1 = document.getElementById("P1");
let final_result = document.getElementById("final_result");
let a = document.getElementById("a");
const bim = document.getElementById("bim");

let count = 1;
let xArr = [];
let pArr = [];

document.getElementById(`X1`).value = 6;
document.getElementById(`P1`).value = 10;
add_p(50, 1, document.getElementById(`P1`).value);

//[actionBTN--------------------
actionBTN.addEventListener("click", go_go);
//-------------------actionBTN]

//[addBTN----------------

add.addEventListener("click", add_wheel);

//----------------addBTN]
//-
//[clearBTN-------------------

clearBTN.addEventListener("click", function () {
  document.getElementById("arrows").innerHTML = "";
  for (let i = 1; i <= count; i++) {
    document.getElementById(`X${i}`).value = "";
    document.getElementById(`P${i}`).value = "";
  }
  xArr = [];
  pArr = [];
  Xsum = 0;
  console.log(xArr);
  console.log(pArr);
  go_go();
  swap();
});

//----------------clearBTN]
//-
//-
//-
//-
//-
//-

function sum_of_array(ARR) {
  let sum = ARR.reduce(function (acumulator, member) {
    return acumulator + member;
  });
  return sum;
}

function currentP_delta_L(n) {
  let Xsum = 0;
  for (let i = 0; i < n; i++) {
    Xsum += Number(xArr[i]);
    //console.log("Xsum = " + Xsum);
  }
  let delta_L = L - Xsum;
  return delta_L;
}

function go_go() {
  document.getElementById("arrows").innerHTML = "";

  xArr = [];
  pArr = [];

  let A = Number(a.value);
  let Ra = "";
  let p_deltaL = [];
  L = Number(document.getElementById("L").value);
  for (let i = 1; i <= count; i++) {
    let newX = Number(document.getElementById(`X${i}`).value);
    let newP = Number(document.getElementById(`P${i}`).value);

    xArr.push(newX);
    pArr.push(newP);
    // -------------------------------------------------------
    let F = xArr.reduce((acum, num) => {
      return (acum += num);
    });
    console.log(F);
    let percent = (F / L) * 100;
    add_p(percent, i, newP);

    // -------------------------------------------------------
    p_deltaL.push(newP * currentP_delta_L(i));
    Ra = sum_of_array(p_deltaL) / L;
    document.getElementById("Ra").innerText = `Ra = ${Ra.toFixed(3)}`;
    set_o_section_location((a.value / L) * 100);
    swap();
  }

  console.log("length = " + pArr.length);

  //console.log(xArr);
  //console.log(pArr);

  let sum_p = sum_of_array_intil_number(xArr, A);
  let current_P = array_until_number(xArr, A);

  console.log("sum_p = " + sum_p);
  console.log("current_P = " + current_P);

  let O = Ra * A - find_B(A, xArr, pArr, current_P);
  final_result.innerText = `მღუნავი მომენტი O კვეთისთვის = ${O.toFixed(3)}`;
}

function add_wheel() {
  count += 1;
  const div = document.createElement("div");
  div.className = "P_X";
  div.innerHTML = `
        <h1 class="Pnumber">${count}</h1>
          <input
            type="number"
            class="input"
            id="X${count}"
            placeholder="X${count}"
          />
          <input
            type="number"
            class="input"
            id="P${count}"
            placeholder="P${count}"
          />
    `;
  inputs.appendChild(div);
  //console.log("count: " + count);
  set_o_section_location((a.value / document.getElementById("L").value) * 100);
}

function set_o_section_location(percent) {
  document.documentElement.style.setProperty("--O_percent", `${percent}%`);
  document.getElementById("a_text").innerText = `a=${a.value}`;
  document.getElementById("L_text").innerText = `L=${
    document.getElementById("L").value
  }`;
}

set_o_section_location((a.value / L) * 100);

a.addEventListener("keyup", function () {
  swap();
  set_o_section_location((a.value / document.getElementById("L").value) * 100);
  go_go();
});

a.addEventListener("mouseup", function () {
  swap();
  set_o_section_location((a.value / document.getElementById("L").value) * 100);
  go_go();
});

document.getElementById("L").addEventListener("keyup", function () {
  swap();
  set_o_section_location((a.value / document.getElementById("L").value) * 100);
  go_go();
});

document.getElementById("L").addEventListener("mouseup", function () {
  swap();
  set_o_section_location((a.value / document.getElementById("L").value) * 100);
  go_go();
});

X1.addEventListener("mouseup", function () {
  swap();
  go_go();
});

X1.addEventListener("keyup", function () {
  swap();
  go_go();
});

document.getElementById("Name").addEventListener("mouseenter", function () {
  document.getElementById("QR").style.animationName = "moveUp";
});

document.getElementById("Name").addEventListener("mouseleave", function () {
  document.getElementById("QR").style.animationName = "movedown";
});
