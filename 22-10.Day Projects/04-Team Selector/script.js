const team = {
  _positions: {
    centers: [],
    forwards: [],
    guards: []
  },

  get centers() {
    return this._positions.centers;
  },
  get forwards() {
    return this._positions.forwards;
  },
  get guards() {
    return this._positions.guards;
  },
  set centers(player) {
    this._positions.centers = player;
  },
  set forwards(player) {
    this._positions.forwards = player;
  },
  set guards(player) {
    this._positions.guards = player;
  },

  get positions() {
    return {
      centers: this.centers,
      forwards: this.forwards,
      guards: this.guards
    };
  },
  addPlayerToPosition(positionName, playerName, playerPoint) {
    const player = {
      name: playerName,
      point: playerPoint
    }
    this._positions[positionName].push(player);
  },
  getRandomPlayerFromPosition(positionName) {
    const position = this._positions[positionName];
    const randomIndex = Math.floor(Math.random() * position.length);
    return position[randomIndex];
  },
  generateRandomTeam() {
    const randonCenter = this.getRandomPlayerFromPosition('centers');
    const randonForward = this.getRandomPlayerFromPosition('forwards');
    const randonGuard = this.getRandomPlayerFromPosition('guards');

    return [randonCenter, randonForward, randonGuard];
  }

}

team.addPlayerToPosition('centers', 'Michael Jordan', '6.5');
team.addPlayerToPosition('centers', 'Stevan Adams', '12');
team.addPlayerToPosition('centers', 'Jarrett Allen', '31');
team.addPlayerToPosition('centers', 'Deandre Ayton', '22');
team.addPlayerToPosition('centers', 'Mo Bamba', '5');

team.addPlayerToPosition('forwards', 'Bam Adebayo', '12');
team.addPlayerToPosition('forwards', 'Ryan Anderson', '34');
team.addPlayerToPosition('forwards', 'Kostas Antetoko', '37');
team.addPlayerToPosition('forwards', 'Carmelo Anthony', '00');
team.addPlayerToPosition('forwards', 'Marvin Bagley', '35');

team.addPlayerToPosition('guards', 'Jaylen Adams', '10');
team.addPlayerToPosition('guards', 'Bradley Beal', '3');
team.addPlayerToPosition('guards', 'Malik Beasley', '5');
team.addPlayerToPosition('guards', 'Marco Belinelli', '18');
team.addPlayerToPosition('guards', 'Khem Birch', '24');





console.log(team.generateRandomTeam());