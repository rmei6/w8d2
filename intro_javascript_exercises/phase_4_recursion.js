function range(start, end) {
  if (start === end) {
    return [end];
  }
 return [start].concat(range(start+1, end));
}

function sumRec(arr) {
  if (arr.length === 0 ) {
    return 0;
  } else {
    return arr.pop() + sumRec(arr);
  }
}

function exponent(base,exp) {
  if (exp === 0){
    return 1;
  }
  return base * exponent(base,exp-1);
}

function exponent2(base,exp) {
  if (exp === 0){
    return 1;
  }
  if (exp%2 === 0){
    return Math.pow(exponent(base,exp/2),2);

  }else {
    return base * Math.pow(exponent(base,(exp-1)/2),2);
  }
}

function fibonacci(n) {
  if (n === 2) {
    return [1,1];
  }
  return fibonacci(n-1).concat(fibonacci(n-1)[n-2] + fibonacci(n-1)[n-3]);
}

function deepDup(arr) {
  const dup = [];
  for(i=0; i<arr.length; i++) {
    if(arr[i] instanceof Array) {
      dup.push(deepDup(arr[i]));
    } else {
      dup.push(arr[i]);
    }
  }
  return dup;
}

function bsearch(arr, target) {
  if (target < arr[0] || target > arr[arr.length-1]) {
    return -1;
  }
  let middle = parseInt(arr.length/2);
  if (target === arr[middle]) {
    return middle;
  // } else if (arr.length === 1) {
  //   return -1;
  }else if (target > arr[middle]) {
    let num = bsearch(arr.slice(middle),target);
    if (num === -1) {
      return num;
    }else {
      return middle + num;
    }
  } else {
    return bsearch(arr.slice(0,middle),target);
  }
}

function merge(arr1,arr2) {
  let result = [];
  while (arr1.length > 0 && arr2.length > 0) {
    result.push(arr1[0] < arr2[0] ? arr1.shift() : arr2.shift());
    // debugger;
  }
  result = result.concat(arr1);
  result = result.concat(arr2);
  // debugger;
  return result;
}

function mergesort(arr) {
  if (arr.length > 1) {
    let middle = parseInt(arr.length/2);
    let left = mergesort(arr.slice(0,middle));
    let right = mergesort(arr.slice(middle));
    return merge(left,right);
  }else {
    return arr;
  }
}

function subsets(arr) {
  if (arr.length === 0) {
    return [arr];
  } else {
    let subs = subsets(arr.slice(0,arr.length-1));
    let results = [];
    for(let i = 0; i < subs.length; i++){
      let sub = subs[i].concat(arr.slice(arr.length-1));
      results.push(sub);
    }
    return subs.concat(results);
  }
}