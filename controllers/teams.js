var express = require('express');
var fs = require('fs');
var teamService = require('../models/teamService');
var router = express.Router();

router.get('/', function(req, res) {
  var teams = teamService.allTeams();
  res.render('teams/index', { teams: teams });
});

router.post('/', function(req, res) {
  teamService.addTeam(req.body);

  res.redirect('/teams');
});


router.delete('/:name', function(req, res){
  // console.log('Delete team name: ', req.params.name);
  teamService.deleteTeam(req.params.name);
  res.send('Success');
  // }).catch(function(err){
  //   console.log('An error happened', err);
  //   res.send('fail');
  // });
});


router.get('/new', function(req, res) {
  res.render('teams/new');
});

router.get('/:name', function(req, res) {
  // search for the team name in all the teams.
  var team = teamService.getTeam(req.params.name);

  res.render('teams/show', { team: team });
});

module.exports = router;
