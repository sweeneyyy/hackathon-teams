var fs = require('fs');

function allTeams() {
  var teams = fs.readFileSync('./models/data.json');
  return JSON.parse(teams);
}
// can use to prepopulate team info
function getTeam(teamName) {
  var teams = allTeams();

  for (var i = 0; i < teams.length; i++) {
    if (teams[i].name === teamName) {
      return teams[i];
    }
  }
}

function deleteTeam(teamName) {
  var teams = allTeams();
  var index = -1;

  for (var i = 0; i < teams.length; i++) {
    if (teams[i].name === teamName) {
      index = i;
    }
  }

  teams.splice(index, 1);
  writeTeams(teams);
}

function editTeam(teamName, teamData) {
  var teams = allTeams();

  for (var i = 0; i < teams.length; i++) {
    if (teams[i].name === teamName) {
      teams[i] = teamData;
    }
  }

  writeTeams(teams);
}

function addTeam(teamData) {
  var teams = allTeams();
  teams.push(teamData);
  writeTeams(teams);
}

function writeTeams(teamData) {
  fs.writeFileSync('./models/data.json', JSON.stringify(teamData));
}

// exporting functions so they can be included in other files
// can only call the functions listed below - so could not call writeTeams
module.exports = {
  allTeams: allTeams,
  getTeam: getTeam,
  addTeam, addTeam,
  deleteTeam: deleteTeam,
  editTeam: editTeam
}
