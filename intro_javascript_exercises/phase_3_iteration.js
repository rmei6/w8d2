Array.prototype.bubbleSort = function () {
  let copy = this.map(function(el) {return el;});
  let swap = true;
  while (swap) {
    swap = false;
    for (let i = 0; i < copy.length-1; i++) {
      let j = i+1;
      if (copy[i] > copy[j]) {
        let temp = copy[i];
        copy[i] = copy[j];
        copy[j] = temp;
        swap = true;
      }
    }
  }
  return copy;
};

String.prototype.substrings = function () {
  let subs = [];
  console.log(this.length);
  for (let i = 0; i < this.length; i++) {
    for (let j = i; j < this.length; j++) {
      subs.push(this.substring(i,j)+this[j]);
    }
  }
  return subs;
};