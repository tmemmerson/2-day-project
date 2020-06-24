let GameManager = {
  setGameStart: function(classType) {
    this.resetPlayer(classType);
    this.setPreFight();
  },
  resetPlayer: function(classType) {
    switch (expression) {
      case "Warrior":
        player = new Player(classType, 150, 0, 200, 100, 50);
        break;
      case "Assassin":
        player = new Player(classType, 125, 0, 150, 100, 125);
        break;
      case "Paladin":
        player = new Player(classType, 150, 0, 125, 150, 75);
        break;
      case "Necromancer":
        player = new Player(classType, 125, 100, 100, 75, 100);
        break;  
        default:

    }
  },
  setPreFight: function(classType) {

  }
}