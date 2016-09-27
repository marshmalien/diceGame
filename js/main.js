var diceGame = {
  startTime: null,
  rounds: [],
  dice: document.getElementsByClassName('dice'),
  rollBtn: document.getElementById('rollBtn'),

  diceRollHandler: function() {
    this.setStartTime();
    this.diceRoll();
    this.checkForWinningCombinations();
  },

  setStartTime: function() {
    if (this.rounds.length === 0) {
      var now = moment();
      this.startTime = now;
      document.querySelector("footer").innerHTML = "Game Started " + now.format("YYYY-MM-DD [at] HH:mm");
    }
  },

  diceRoll: function() {
    var sum = 0;
    for (var index = 0; index < this.dice.length; index++) {
      var diceValue = Math.floor(Math.random() * 6) + 1;
      sum += diceValue;
      this.dice[index].innerHTML = diceValue.toString();
    }
    this.rounds.push(sum);
  },

  checkForWinningCombinations: function() {
    var combination = this.rounds[this.rounds.length - 1];
    if (combination == 7 || combination == 11) {
      var secondsToWin = Math.round((moment() - this.startTime) / 1000);
      document.querySelector("header").innerHTML = "Winner!";
      document.querySelector("h3").innerHTML = "(It took you " + (this.rounds.length) + " tries and " +  secondsToWin + " seconds)";
    } else {
      document.querySelector("header").innerHTML = "Try Again";
    }
  },

  init: function() {
    this.rollBtn.addEventListener('click', this.diceRollHandler.bind(this));
  }
};

diceGame.init();
