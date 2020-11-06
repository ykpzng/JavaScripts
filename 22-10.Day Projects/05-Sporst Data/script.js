const team = {
  _players: [
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11
    },
    {
      firstName: 'Muhammet',
      lastName: 'Ali',
      age: 25
    },
    {
      firstName: 'Pepe',
      lastName: 'Donizo',
      age: 30
    }
  ],
  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    },
    {
      opponent: 'Barcelona',
      teamPoints: 50,
      opponentPoints: 85
    },
    {
      opponent: 'Real Madrit',
      teamPoints: 48,
      opponentPoints: 33
    }
  ],

  get players() {
    return this.players;
  },
  get games() {
    return this.games;
  },
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    }
    return this._players.push(player);
  },

  addGame(opponent, teamPoints, opponentPoints) {
    const game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    }
    return this._games.push(game);
  }

}

team.addPlayer('Steph', 'Curry', 28);

console.log(team._players);

team.addGame('Titans', 100, 98);

console.log(team._games);