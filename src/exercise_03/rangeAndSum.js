export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  const arr = [];
  if (start > end) {
    for (var i = start; i > end; i--) {
      arr.push(i);
    }
  } else {
    for (var i = start; i < end; i++) {
      arr.push(i);
    }
  }
  return arr;
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  var sum = 0;
  for (var k = 0; k < arguments.length; k++) {
    sum += parseInt(arguments[k]);
  }
  return sum;
}
