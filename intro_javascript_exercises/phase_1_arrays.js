Array.prototype.uniq = () => {
  const arr = [];
  // console.log(self)
  for (let i = 0; i < self.arr.length; i++) {
    if (!arr.includes(self.arr[i])) {
      arr.push(self.arr[i]);
    }
  }
  return arr;
};

Array.prototype.twoSum = () => {
  const arr = [];
  for (let i = 0; i < self.arr.length-1; i++) {
    for (let j = i+1; j < self.arr.length; j++) {
      if (self.arr[i] + self.arr[j] === 0) {
        arr.push([i,j]);
      }
    }
  }
  return arr;
};

Array.prototype.transpose = () => {
  const res = [];
  for(let k = 0; k < self.arr.length; k++){
    res.push(new Array(self.arr.length));
  }
  for (let i = 0; i < self.arr.length; i++){
    for (let j = 0; j < self.arr.length; j++){
      res[i][j] = self.arr[j][i];
    }
  }
  return res;
};

