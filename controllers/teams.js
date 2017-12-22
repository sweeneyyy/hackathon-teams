var express = require('express');
var fs = require('fs');
var teamService = require('../models/teamService');
var router = express.Router();

// organize routes by path
router.get('/', function(req, res) {
  var teams = teamService.allTeams();
  res.render('teams/index', { teams: teams });
});

router.post('/', function(req, res) {
  teamService.addTeam(req.body);

  res.redirect('/teams');
});


router.get('/new', function(req, res) {
  res.render('teams/new');
});

router.get('/edit/:name', function(req, res){
  // prepopulate team info incase only chaning some of it
  var team = teamService.getTeam(req.params.name);
  // passing team object into edit ejs file
  res.render('teams/edit', { team: team });
});


router.delete('/:name', function(req, res){
  teamService.deleteTeam(req.params.name);
  res.send('Success');
});

router.get('/:name', function(req, res) {
  // search for the team name in all the teams.
  var team = teamService.getTeam(req.params.name);

  res.render('teams/show', { team: team });
});

router.put('/:name', function(req, res){
  teamService.editTeam(req.params.name, req.body)
  res.send('Success!');
});


module.exports = router;
