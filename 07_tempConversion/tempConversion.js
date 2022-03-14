function roundOneDec(num) {
  var m = Number((Math.abs(num) * 10).toPrecision(15));
  return Math.round(m) / 10 * Math.sign(num);
}
const ftoc = function(tempFah) {
  let tempCel= (tempFah-32)*(5/9);
  return roundOneDec(tempCel);
};

const ctof = function(tempCel) {
  let tempFah= tempCel*(9/5)+32;
  return roundOneDec(tempFah);

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
