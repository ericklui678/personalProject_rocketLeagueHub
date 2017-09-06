const express = require('express'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  port = 8000,
  app = express(),
  rls = require('rls-api');
  client = new rls.Client({
    token: "R8FJMUILX0OEAK9W9754E2YU6ABCJFP7"
  });
  http = require('http')
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.set('port', (process.env.PORT || port))
app.use(express.static(__dirname + '/public/dist'));

app.get('/player/:id', function(req, res) {
  client.getPlayer(req.params.id, 1, function(status, data){
    res.json(data);
  })
});

var server = app.listen(app.get('port'), function() {
  console.log('Running on port', app.get('port'));
})
