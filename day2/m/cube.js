const calculate = function(a) {
  console.log("cwd > ", process.cwd());
  return a * a * a;
};

module.exports = calculate;
