var tape = require('tape');
var first = require('../index');

tape('returns first item of array', function (test) {
  test.plan(1);
  test.equals(first([6,0,0,8,14]), 6);
});

tape('returns first array of array', function (test) {
  test.plan(1);
  test.equals(first([[6,16],0,8,14])[1], 16);
});

tape('returns first n items of array', function (test) {
  test.plan(2);
  test.equals(first(['Hi', 'World', 1337], 2).join(' '), 'Hi World');
  test.equals(first(['Hi', 'World', 1337], 3).join(' '), 'Hi World 1337');
});

tape('returns items of array while callback return truthy', function (test) {
  test.plan(1);
  test.deepEqual(first([1, 52, 89, 1337], function (num) {
    return num < 1337;
  }), [1, 52, 89]);
});