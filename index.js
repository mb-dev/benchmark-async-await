var vanilla = require('./lib/vanilla');
var promises = require('./lib/promises');
var asyncBabel = require('./lib/async-babel');
console.time('vanilla')

// test vanilla
vanilla(function() {
  console.timeEnd('vanilla');
  
  // test promises
  console.time('promises');
  promises(function() {
    console.timeEnd('promises');
    
    // test async promises
    console.time('async-babel');
    asyncBabel().then(function() {
      console.timeEnd('async-babel');
    });
  })
});
