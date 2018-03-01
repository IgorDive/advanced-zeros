module.exports = function getZerosCount(number, base) {
  let counterZero = 0;
  let i = 1;
  let simpleNumber = true;
  let tempBase = base;
  let dividersArr = [];

  for ( let k = 2; k <= tempBase; k++ ) {
    while ( !(tempBase % k) ) {
      tempBase /= k;
      dividersArr.push(k);
    }
  }

  while ( number / Math.pow(dividersArr[dividersArr.length - 1], i) >= 1 ) {
    counterZero += Math.floor( number / Math.pow(dividersArr[dividersArr.length - 1], i) );
    i += 1;
  }

  return counterZero;
}