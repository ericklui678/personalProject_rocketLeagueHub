const express = require('express'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  bcrypt = require('bcrypt'),
  saltRounds = 10,
  port = 8000,
  app = express(),
  rls = require('rls-api');
  client = new rls.Client({
    token: "R8FJMUILX0OEAK9W9754E2YU6ABCJFP7"
  });
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('port', (process.env.PORT || port));
app.use(express.static(__dirname + '/public/dist'));

mongoose.connect('mongodb://localhost/rocketleague');

var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  username: { type: String, required: [true, 'username required'] },
  email: { type: String, required: [true, 'email required'] },
  password: { type: String, required: [true, 'password required'], minlength: 8 },
  following: { type: [String] },
}, { timestamps: true });
var User = mongoose.model('User', UserSchema);

app.get('/player/:uid/:pid', function(req, res) {
  client.getPlayer(req.params.uid, req.params.pid, function(status, data){
    res.json(data);
  })
});

app.post('/user/create', function(req, res) {
  User.find({email: req.body.email}, function(err, data) {
    // if user is not found, create user
    if (data.length === 0) {
      bcrypt.hash(req.body.password, saltRounds).then(function(hash) {
        req.body.password = hash;
        User.create(req.body, function(err, data) {
          if (err) { console.log(err); }
          else { res.json(data); }
        })
      })
    } else {
      res.json( {err: 'Email already exists'} )
    }
  });
})

app.post('/user/login', function(req, res) {
  User.find({email: req.body.email}, function(err, data) {
    // if user is found, check hashed_pw
    if (data.length === 1) {
      bcrypt.compare(req.body.password, data[0].password).then(function(correct_pw) {
        if (correct_pw) {
          res.json(data[0]);
        } else {
          res.json({err: 'Incorrect password'});
        }
      })
    } else {
      res.json({err: 'Email has not been registered'});
    }
  })
})

var server = app.listen(app.get('port'), function() {
  console.log('Running on port', app.get('port'));
})
