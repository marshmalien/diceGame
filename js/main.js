var diceGame = {
  startTime: null,
  rounds: [],
  dice: document.getElementsByClassName('dice'),
  rollBtn: document.getElementById('rollBtn'),

  diceRoll: function() {
    for (var index = 0; index < this.dice.length; index++) {
      var diceValue = Math.floor(Math.random() * 6) + 1;
      this.dice[index].innerHTML = diceValue.toString();
      console.log(diceValue);
    }
  },

  time: function() {
    var now = moment();
    console.log(now);
    this.startTime = now;
    this.startTime.innerHTML = now;
  },

  init: function() {
    this.rollBtn.addEventListener('click', this.diceRoll.bind(this));
    this.rollBtn.addEventListener('click', this.time.bind(this));
  }
}

diceGame.init();
