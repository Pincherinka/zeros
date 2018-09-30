module.exports = function getZerosCount(number) {
  
  let result = 0;  
  let i = 1;
  
  while (number/(5*i) >= 1){    
    result += Math.trunc(number/(5*i));
    i *= 5;
  }
  return result;
}
