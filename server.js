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

// client.getPlatformsData(function(status, data){
//   if(status === 200){
//     console.log('-- Platforms data:');
//     console.log(data);
//   }
// });
//
// client.getSeasonsData(function(status, data){
//   if(status === 200){
//     console.log('-- Seasons data:');
//     console.log(data);
//   }
// });
//
// client.getTiersData(function(status, data){
//   if(status === 200){
//     console.log("-- Tiers data:");
//     console.log(data);
//   }
// });

// client.searchPlayers("lord", function(status, data){
//   if(status === 200){
//     console.log("-- Player Search Data:");
//     console.log("   Results: " + data.results);
//     console.log("   Total Results: " + data.totalResults);
//     console.log(data)
//   }
// });

// client.getRankedLeaderboard(rls.rankedPlaylists.DUEL, function(status, data){
//   if(status === 200){
//     console.log("-- Ranked Leaderboard:");
//     console.log("   Leaderboard count: " + data.length);
//     console.log("   Duel Number #1 Player: " + data[0].displayName);
//   }
// });

// client.getStatLeaderboard(rls.statType.GOALS, function(status, data){
//   if(status === 200){
//     console.log("-- Stat Goals Leaderboard:");
//     console.log("   Leaderboard count: " + data.length);
//     console.log("   Goals #1 Player: " + data[0].displayName);
//   }
// });

var server = app.listen(app.get('port'), function() {
  console.log('Running on port', app.get('port'));
})
