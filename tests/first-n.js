var test = require('chai').assert;
var first = require('../index');

describe('first', function() {
  it('returns first item of array', function () {
    test.strictEqual(first([6,0,0,8,14]), 6);
  });

  it('returns first array of array', function () {
    test.strictEqual(first([[6,16],0,8,14])[1], 16);
  });

  it('returns first n items of array', function () {
    test.strictEqual(first(['Hi', 'World', 1337], 2).join(' '), 'Hi World');
    test.strictEqual(first(['Hi', 'World', 1337], 3).join(' '), 'Hi World 1337');
  });

  it('returns items of array while callback return truthy', function () {
    test.deepEqual(first([1, 52, 89, 1337], function (num) {
      return num < 1337;
    }), [1, 52, 89]);
  });
});