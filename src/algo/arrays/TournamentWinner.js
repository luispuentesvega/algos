function getWinner(teams) {
  let winner = {};
  for (team in teams) {
    const score = teams[team];
    if (!winner.name) {
      winner = { name: team, score: teams[team] };
    } else {
      if (score > winner.score) {
        winner = { name: team, score: teams[team] };
      }
    }
  }
  return winner?.name;
}

function tournamentWinner(competitions, results) {
  // R.E.A.C.T.O

  let winner = '';
  let teams = {};
  //1. loop competitions, store the competitions in one Set
  //2. check results in the same positions
  //3. if 1, give the point to home
  //4. if 0, give the point to away team

  for (let i = 0; i < competitions.length; i++) {
    const [home, away] = competitions[i];
    const result = results[i];

    // home
    if (result === 1) {
      if (!teams[home]) {
        teams[home] = 1;
      } else {
        teams[home] = teams[home] + 1;
      }
    } else {
      if (!teams[away]) {
        teams[away] = 1;
      } else {
        teams[away] = teams[away] + 1;
      }
    }
  }
  return getWinner(teams);
}
