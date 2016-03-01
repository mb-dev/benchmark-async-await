function func(cb) {
  setTimeout(function() {
    cb(null);
  }, 0);
}

function perform(cb) {
  var i = 0;
  var loop = function() {
    if (i++ == 1000) {
      cb(null, true);
      return
    }
    func(function() {
      loop();
    });
  }
  loop()
}

module.exports = perform;
