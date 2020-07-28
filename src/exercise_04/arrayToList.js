export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.
  const List = function (value, next) {
    this.value = value;
    this.next = next;
  };
  const lists = [];
  if (!array.length) {
    throw Error('Creating list from undefined array');
  } else {
    for (let j = 0; j < array.length; j++) {
      var list = new List();
      list.value = j+1;
      lists.push(list);
    }
    for (let i = 0; i < array.length; i++) {
      if (i + 1 >= array.length) {
        lists[i].next = null;
      } else {
        lists[i].next = lists[i + 1];
      }
    }
    return lists[0];
  }
}
