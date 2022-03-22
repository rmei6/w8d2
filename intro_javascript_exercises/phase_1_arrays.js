Array.prototype.uniq = function() {
  const arr = [];
  console.log(this);
  for (let i = 0; i < this.length; i++) {
    if (!arr.includes(this[i])) {
      arr.push(this[i]);
    }
  }
  return arr;
};

Array.prototype.twoSum = function() {
  const arr = [];
  for (let i = 0; i < this.length-1; i++) {
    for (let j = i+1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        arr.push([i,j]);
      }
    }
  }
  return arr;
};

Array.prototype.transpose = function() {
  const res = [];
  for(let k = 0; k < this.length; k++){
    res.push(new Array(this.length));
  }
  for (let i = 0; i < this.length; i++){
    for (let j = 0; j < this.length; j++){
      res[i][j] = this[j][i];
    }
  }
  return res;
};