"use strict"

let func = function () {
  var ref = _asyncToGenerator(function* () {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve();
      }, 0);
    });
  });

  return function func() {
    return ref.apply(this, arguments);
  };
}();

let perform = function () {
  var ref = _asyncToGenerator(function* (cb) {
    for (var i = 0; i < 1000; ++i) {
      yield func();
    }
  });

  return function perform(_x) {
    return ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

module.exports = perform;
