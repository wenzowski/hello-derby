var path = require('path')

var app = require('./app')
var opts = {
  port: process.env.PORT,
  static: path.join(__dirname, 'public')
}

require('derby-starter').run(app, opts)

