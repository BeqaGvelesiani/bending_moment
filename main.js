import { check_type } from "./functions.js";
import { sum_of_array_intil_number } from "./functions.js";
import { array_until_number } from "./functions.js";
import { find_B } from "./functions.js";

let L = Number(document.getElementById("L").value);
const actionBTN = document.getElementById("do_it");
const clearBTN = document.getElementById("clear");
const add = document.getElementById("add");
const inputs = document.getElementById("inputs");
const X1 = document.getElementById("X1");
const P1 = document.getElementById("P1");
let final_result = document.getElementById("final_result");
const a = document.getElementById("a");

let count = 1;
let xArr = [];
let pArr = [];

//-
//-
//-
//-
//-
//-
//[actionBTN--------------------
actionBTN.addEventListener("click", function () {
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
    p_deltaL.push(newP * currentP_delta_L(i));
    Ra = sum_of_array(p_deltaL) / L;
    document.getElementById("Ra").innerText = Ra.toFixed(3);
  }

  //console.log(xArr);
  //console.log(pArr);

  let sum_p = sum_of_array_intil_number(xArr, A);
  let current_P = array_until_number(xArr, A);

  console.log("sum_p = " + sum_p);
  console.log("current_P = " + current_P);

  let O = Ra * A - find_B(A, xArr, pArr, current_P);
  final_result.innerText = `მღუნავი მომენტი O წერტილისთვის = ${O.toFixed(3)}`;
});
//-------------------actionBTN]
//-
//-
//-
//-
//-
//-
//[addBTN----------------

add.addEventListener("click", function () {
  count += 1;
  const div = document.createElement("div");
  div.className = "P_X";
  div.innerHTML = `
        <h1 class="Pnumber">${count}</h1>
          <input
            type="number"
            class="form-control input_data"
            id="X${count}"
            placeholder="X${count}-ის სიდიდე"
          />
          <input
            type="number"
            class="form-control input_data"
            id="P${count}"
            placeholder="P${count}-ის სიდიდე"
          />
    `;
  inputs.appendChild(div);
  //console.log("count: " + count);
});

//----------------addBTN]
//-
//-
//-
//-
//-
//-
//[clearBTN-------------------

clearBTN.addEventListener("click", function () {
  for (let i = 1; i <= count; i++) {
    document.getElementById(`X${i}`).value = "";
    document.getElementById(`P${i}`).value = "";
  }

  xArr = [];
  pArr = [];
  Xsum = 0;

  console.log(xArr);
  console.log(pArr);
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

let test = [1, 2, 1, 3, 2.1, 7, 12];

//console.log(test);
//console.log(sum_of_array_intil_number(test, 9.3));
//.log(array_until_number(test, 9.2));
