var derby = require('derby-starter/node_modules/derby')
var app = module.exports = derby.createApp('helloworld', __filename)

app.use(require('d-bootstrap'))
app.loadViews(__dirname)

app.get('/', function (page) {
  page.render()
})

