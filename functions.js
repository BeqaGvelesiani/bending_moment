export function check_type(n) {
  console.log("type is: " + typeof n);
}

export function sum_of_array_intil_number(array, number) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (sum < number) {
      sum += Number(array[i]);
      if (sum > number) {
        sum -= Number(array[i]);
        break;
      }
    }
  }
  return sum;
}

export function array_until_number(array, number) {
  let sum = 0;
  let temporary_array = [];
  for (let i = 0; i < array.length; i++) {
    if (sum < number) {
      sum += array[i];
      temporary_array.push(array[i]);
      if (sum > number) {
        sum -= array[i];
        temporary_array.shift(array[i]);
        break;
      }
    }
  }
  return temporary_array.length;
}

export function find_B(A, xArr, pArr, current_P) {
  let B = 0;
  let x = [];
  for (var i = 0; i < current_P; i++) {
    x.push(xArr[i]);
    console.log(`x${i+1} = ${xArr[i]}`);
    console.log(x);

    let y = x.reduce((acumulator, number) => {
      return (acumulator += number);
    });

    console.log("y = " + y);

    B += pArr[i] * (A - y);
  }
  return B;
}
