var express = require('express');
var app = express();
app.use(express.static(__dirname+'/app'));
app.listen(8080);
console.log('port listening on 8080');