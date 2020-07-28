export default function waitForAll(...promises) {
  // This function returns a promise which will be triggered when all the `promises` are completed.
  //
  // If all the `promises` are resolved, then the returned promise will be resolved. Otherwise,
  // if one of the `promises` is rejected, then the returned promise will be rejected.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in wait_for_all_spec.js.
  // * Please do NOT modify the signature of the function.
  Promise.all(selectedTypes.map((type) => {
    const body = {
      selectedScreenshot: type,
      dataUrl,
    };
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify(body),
      credentials: 'same-origin',
    })
      .then((resp) => {
        console.log(resp.json()); //  this is done one by one as the results come in
        console.log('next');
      });
  })).then((text) => {
    console.log('done'); // this should be printed last, is printed first
  });
}
