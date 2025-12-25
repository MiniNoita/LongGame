class Round {
  //how many rounds in whole game
  public rounds: number = 15;
  //what round
  public currentRound: number = 1;
  //how many players?
  public players = 2;
  //whose turn it is
  public whoseTurn: number = 0;
  //is round going on
  public roundAlive: boolean = false;
  // who started last time
  public hasStarted: number = 0;

  // start round
  start() {
    this.roundAlive = true;
    this.whoStarts();
  }

  //who starts

  //is this even needed? because of the nextTurn() function
  whoStarts() {
    //if it's the first round, player 1 starts
    if (this.currentRound == 1) {
      this.hasStarted = 1;
      this.whoseTurn = 1;
      return;
    } //if player 1 started last round, the next person starts (player 2)
    if (this.hasStarted == 1) {
      this.hasStarted = 2;
      return;
    }
    if (this.hasStarted > 1 && this.hasStarted < this.players) {
      this.hasStarted += 1;
      return;
    }
    //go here if player hasStarted is greater than player count, set it back to one
    this.hasStarted = 1;
    return;
  }

  // }
  //player takes a card aka starts their turn
  playerStartsTurn() {
    //player draws a card from the deck
    const player = this.whoseTurn;
  }
  //player discards a card aka ends their turn
  playerEndsTurn() {
    //player removes one card from their hand
    this.nextTurn();
  }

  //players take turn
  nextTurn() {
    if (this.whoseTurn == 1) {
      this.whoseTurn = 2;
      return;
    }
    if (this.whoseTurn > 1 && this.whoseTurn < this.players) {
      this.whoseTurn += 1;
      return;
    }
    this.whoseTurn = 1;
    return;
  }
  //end round
  end() {
    this.roundAlive = false;
  }

  //set how many players
  //this needs protection or it needs to be somewhere else
  changePlayersCount(count: number) {
    if (count > 1) {
      this.players = count;
      return;
    }
  }
}
