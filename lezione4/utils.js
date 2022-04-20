const process = require("process");
const os = require("os");

const currentIp = () => {
  const { en0 } = os.networkInterfaces();
  return en0[en0.length - 1]["address"];
};

module.exports.currentIp = currentIp;

if (require.main === module) {
  console.log(currentIp());
}
