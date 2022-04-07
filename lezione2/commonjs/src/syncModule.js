module.exports.direct = function direct() {
  console.log("Snickers");
};
console.log("START loading");
for (let i = 0; i < 10e9; i++) {}
module.exports.hit = function hit() {
  console.log("or Reese's");
};
