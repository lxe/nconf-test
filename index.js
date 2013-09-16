var nconf = require('nconf');

module.exports = function(req, res, next) {
  console.log('This is the module. The foo is %s', nconf.get('foo'));
  next();
}
