!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.firstN=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
var isArray = _dereq_('isarray');
var isFunction = _dereq_('isfunction');

module.exports = function first (array, callback) {
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
},{"isarray":2,"isfunction":3}],2:[function(_dereq_,module,exports){
module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

},{}],3:[function(_dereq_,module,exports){
// if (typeof require !== 'undefined') {}

var isFunction = function (functionToCheck) {
	var getType = {};
	return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
};

if (typeof module !== 'undefined' && module.exports) {
	module.exports = isFunction;
}
},{}]},{},[1])
(1)
});