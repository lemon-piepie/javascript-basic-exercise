export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.
  if (!array.length) {
    throw new Error('Creating list from undefined array');
  }else{
    var arr_list = new Map();
    for(var i = 0; i < array.length; i++){
      arr_list.add(array[i]);
    }
    return arr_list;
  }
}
