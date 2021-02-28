const path = require('path');

function resolve(p) {
  return path.resolve(__dirname, '../', p);
}

module.exports = {
  resolve
};