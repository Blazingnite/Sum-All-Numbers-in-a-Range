function sumAll(arr) {
  const reducer = (acc, currentVal) => acc + currentVal;
  let holdArr = [];
const max = Math.max(...arr);
const min = Math.min(...arr);
for(let i = min; i <= max; i++){
  holdArr.push(i);
}
let sum = holdArr.reduce(reducer);
return sum;
}

console.log(sumAll([10, 5]));
