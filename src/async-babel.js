async function func() {
  return new Promise(function(resolve, reject) {
      setTimeout(function() {
       resolve();
    }, 0);
  });
}

async function perform(cb) {
  for (var i = 0; i < 1000; ++i) {
    await func();
  }
}

module.exports = perform;
