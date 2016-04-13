var koa = require('koa');
var server = require('koa-static');
var path = require('path');
var app = koa();
app.use(server(path.join(__dirname, 'demo')))
app.listen(8003);
console.log('listen on port 8003');