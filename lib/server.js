var express = require('express')
var webpack = require ('webpack')
var webpackDevServer = require('webpack-dev-server')
var app = express()
var MagentoAPI = require('magento-api')

var magento = new MagentoAPI({
  host: '52.59.3.117',
  port: 80,
  path: '/en/api/xmlrpc/',
  login: 'unu-challenge',
  pass: 'unu-challenge'
})

function accessOrders (err, data) {
  if (err) {
    console.log('Error accessing data:' + err)
  } else {
    console.log(data)
  }
}

magento.login(function (err, sessId) {
  if (err) {
    console.log("Error accessing Magento")
    console.log(err)
    return
  }
  magento.salesOrder.list(accessOrders)
})

app.use(express.static('lib/web'))

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})

var config = require("../webpack.config.js")
//config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080")
var compiler = webpack(config)
var devserver = new webpackDevServer(compiler)
devserver.listen(8080)
