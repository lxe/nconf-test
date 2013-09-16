var nconf = require('nconf')
  , express = require('express')
  , sample_module  = require('nconf-test-module')

nconf.file('config.json', './config.json')

var app = express();

app.use(sample_module);

app.get('/', function(req, res, next) {
  console.log('This is the root. The foo is %s', nconf.get('foo'));
  res.send(200);
});

app.listen(3000);

