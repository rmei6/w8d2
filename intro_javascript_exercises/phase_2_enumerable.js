Array.prototype.myEach = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

Array.prototype.myMap = function (callback) {
  const arr = [];
  this.arr.myEach( function(el) {
    arr.push(callback(el));
  }
  );
  return arr;
};

Array.prototype.myReduce = function (callback,initialValue) {
  let sum = initialValue ? initialValue : 0;
    this.arr.myEach(function(el){
      sum = callback(sum,el);
    });
  return sum;
};