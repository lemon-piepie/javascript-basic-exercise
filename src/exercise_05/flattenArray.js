export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.

  // 判断参数是否是数组,检测数组元素是否是整数或者数组
  var result = [];
  if (!Array.isArray(array)) {
    if (array % 1 == 0) {
      result.push(array);
    } else {
      throw new Error('Flatten undefined or null array');
    }
  }
  else {
    // 是数组
    for (var i = 0; i < array.length; i++) {
      result = result.concat(flattenArray(array[i]));
    }
  }
  return result;
}
