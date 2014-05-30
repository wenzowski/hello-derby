var path = require('path');
var app = require('./app');
var opts = {
  static: [{
    route: '/css',
    dir: path.join(__dirname, 'node_modules/bootstrap/dist/css')
  }]
};

require('derby-starter').run(app, opts);

