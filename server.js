var express = require("express"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  scrypt = require("scrypt"),
  scryptParameters = scrypt.paramsSync(0.1);
(path = require("path")),
  (saltRounds = 10),
  (port = 8000),
  (app = express()),
  (rls = require("rls-api"));
client = new rls.Client({
  token: "R8FJMUILX0OEAK9W9754E2YU6ABCJFP7"
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("port", process.env.PORT || port);
app.use(express.static(__dirname + "/public/dist"));

// mongoose.connect('mongodb://localhost/rocketleague');

var uristring =
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  "mongodb://heroku_2httdg95:ek48ergjhmeoq2in4es72dk210@ds135234.mlab.com:35234/heroku_2httdg95";

mongoose.connect(
  uristring,
  function(err, res) {
    if (err) {
      console.log("failed to connect to db");
    } else {
      console.log("Successfully db connection");
    }
  }
);

var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: [true, "username required"] },
    email: { type: String, required: [true, "email required"] },
    password: {
      type: Object,
      required: [true, "password required"],
      minlength: 8
    },
    following: { type: [{ uniqueId: String, platform: String }] }
  },
  { timestamps: true }
);
var User = mongoose.model("User", UserSchema);

// get rocket league player data from uniqueId and platformId
app.get("/player/:uid/:pid", function(req, res) {
  client.getPlayer(req.params.uid, req.params.pid, function(status, data) {
    console.log("STATUS", status);
    console.log("DATA", data);
    res.json(data);
  });
});

// unfollow player from current user
app.post("/user/unfollow", function(req, res) {
  User.findOne({ email: req.body.email }, function(err, data) {
    var user = new User(data);
    for (var i = 0; i < user.following.length; i++) {
      if (user.following[i].uniqueId === req.body.id) {
        user.following.splice(i, 1);
        console.log("AFTER SPLICE", user.following);
        break;
      }
    }
    user.save(function(err) {
      if (err) {
        console.log(err);
      } else {
        res.json(user);
      }
    });
  });
});

function fetchFollowingPlayer(player) {
  let { uniqueId, platform } = player;
  return new Promise(resolve => {
    setTimeout(() => {
      client.getPlayer(uniqueId, platform, (status, playerData) => {
        console.log("Status: ", status);
        resolve(playerData);
      });
    }, 1000);
  });
}

// function doSomethingAsync(value) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log("Resolving " + value);
//       resolve(value);
//     }, Math.floor(Math.random() * 1000));
//   });
// }
//
// function test() {
//   let i;
//   let promises = [];
//
//   for (i = 0; i < 5; ++i) {
//     promises.push(doSomethingAsync(i));
//   }
//
//   Promise.all(promises)
//     .then(results => {
//       console.log("All done", results);
//     })
//     .catch(e => {
//       // Handle errors here
//     });
// }

// get current user's following players
app.get("/:email/following", function(req, res) {
  User.findOne({ email: req.params.email }, function(err, data) {
    // console.log(data);
    let { following } = data;
    let promises = [];

    for (let player of following) {
      promises.push(fetchFollowingPlayer(player));
    }

    Promise.all(promises)
      .then(results => {
        res.send(results);
      })
      .catch(e => {
        console.log(e);
      });
  });
});

// Create new following to current user
app.post("/user/follow", function(req, res) {
  console.log(req.body);
  User.findOne({ email: req.body.email }, function(err, data) {
    var user = new User(data);
    // check if followed rocket league player is already followed by current user
    for (var i = 0; i < user.following.length; i++) {
      if (data.following[i].uniqueId === req.body.uniqueId) {
        res.json({ err: "You are already following this player" });
        return;
      }
    }
    // else append to following array
    user.following.push({
      uniqueId: req.body.uniqueId,
      platform: req.body.platform
    });
    user.save(function(err) {
      if (err) {
        console.log(err);
      } else {
        res.json(user);
      }
    });
  });
});

// register new user
app.post("/user/create", function(req, res) {
  User.find({ email: req.body.email }, function(err, data) {
    // if user is not found, create user
    if (data.length === 0) {
      try {
        // kdfResult is the hashed password
        req.body.password = scrypt
          .kdfSync(req.body.password, scryptParameters)
          .toString("Base64");
        User.create(req.body, function(err, data) {
          if (err) {
            console.log(err);
          } else {
            res.json(data);
          }
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      res.json({ err: "Email already exists" });
    }
  });
});

// logging user
app.post("/user/login", function(req, res) {
  User.find({ email: req.body.email }, function(err, data) {
    // if user is found, check hashed_pw
    if (data.length === 1) {
      try {
        let correct = scrypt.verifyKdfSync(
          new Buffer(data[0].password, "Base64"),
          req.body.password
        );
        if (correct) {
          res.json(data[0]);
        } else {
          res.json({ err: "Incorrect password" });
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      res.json({ err: "Email has not been registered" });
    }
  });
});

app.get("*", function(req, res) {
  res.sendFile(path.resolve("public/dist/index.html"));
});

var server = app.listen(app.get("port"), function() {
  console.log("Running on port", app.get("port"));
});
