var express = require('express');
var app = express();

app.set('view engine', 'pug');

app.use('/', express.static(__dirname + '/public'));
app.use('/', express.static(__dirname + '/dist'));

app.get('*', function (req, res) {
  res.render('index')
})

app.listen(80, function () {
  console.log('Example app listening on port 80!');
});