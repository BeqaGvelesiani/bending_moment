import { check_type } from "./checkType.js";

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

//[actionBTN--------------------
actionBTN.addEventListener("click", function () {
  xArr = [];
  pArr = [];

  let Ra = "";
  let p_deltaL = [];
  L = Number(document.getElementById("L").value);
  for (let i = 1; i <= count; i++) {
    let newX = document.getElementById(`X${i}`).value;
    let newP = document.getElementById(`P${i}`).value;
    xArr.push(newX);
    pArr.push(newP);
    p_deltaL.push(newP * currentP_delta_L(i));
    Ra = sum_of_array(p_deltaL) / L;
    document.getElementById("Ra").innerText = Ra.toFixed(3);
  }
  let O = Ra * Number(a.value) - Number(pArr[0]) * (L - Number(xArr[0]));
  final_result.innerText = `მღუნავი მომენტი O წერტილისთვის = ${O}`;
  console.log(xArr);
  console.log(pArr);
});
//-------------------actionBTN]

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
  console.log("count: " + count);
});

//----------------addBTN]

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

//--------------clearBTN]

function currentP_delta_L(n) {
  let Xsum = 0;
  for (let i = 0; i < n; i++) {
    Xsum += Number(xArr[i]);
    //console.log("Xsum = " + Xsum);
  }
  let delta_L = L - Xsum;
  return delta_L;
}

// sum of array members

function sum_of_array(ARR) {
  let sum = 0;
  for (let i = 0; i < ARR.length; i++) {
    sum += ARR[i];
  }
  return sum;
}
