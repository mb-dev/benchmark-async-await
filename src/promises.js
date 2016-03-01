function func(cb) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
       resolve();
    }, 0);
  });
}

function perform(cb) {
  var i = 0;
  loop = function() {
    if (i++ == 1000) {
      cb();
      return;
    }
    func().then(function() {
      loop();
    });
  }
  loop();
}

module.exports = perform;
