var path = require('path')

var app = require('./app')
var opts = {
  port: process.env.PORT,
  static: path.join(__dirname, 'node_modules/bootstrap/dist')
}

require('derby-starter').run(app, opts)

