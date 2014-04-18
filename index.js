var isArray = require('isarray');
var isFunction = require('isfunction');

module.exports = function firstN (array, callback) {
  var n = 0,
      item;

  if (typeof callback === 'number') {
    n = callback;
  } else if (isFunction(callback)) {
    var index = 0;
    while (callback(array[index++])) {
      n++;
    }
  } else {
    n++;
  }

  item = array.slice(0, n);

  return (isArray(item) && item.length === 1 ? item[0] : item);
};