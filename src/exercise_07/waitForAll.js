import { resolvePlugin } from '@babel/core';
import stopwatch from '../util/stopwatch';

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

  /*
  for (let j = 0; j < arguments.length; j++) {
    if (!(arguments[j] instanceof Promise)) {
      i = false;
    }
  } */
  let i = true;
  promises.forEach((item, index) => {
    if (!isPromise(item)) {
      i = false;
    }
  });

  if (i) {
    return Promise.all(promises).then((resolved) => {
      
    }, (reject) => {
      return Promise.reject('It should not be a success promise');
    });
  }
  throw new Error('Not all elements are promises.');
}


function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}
