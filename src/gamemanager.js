let GameManager = {
  setGameStart: function(classType) {
    this.resetPlayer(classType);
    this.setPreFight();
  },
  resetPlayer: function(classType) {
    switch (classType) {
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
    }

    let getInterface = document.querySelector(".interface");
    getInterface.innerHTML = '<img src="../img/' + classType.toLowerCase() + '2.jpg" alt = ' + classType + ' player hero class= img-hero><div><h3>' + classType + "</h3><p>Health: "+ player.health + "</p><p>Mana: "+ player.mana + "</p><p>Strength: " + player.strength + "</p><p>Agility: " + player.agility + "</p><p>Speed: " + player.speed + "</p></div>";
  },
  setPreFight: function(classType) {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getArena = document.querySelector(".arena");
    getHeader.innerHTML = '<p>Task: Choose your destiny!</p>';
    getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for enemy</a>';
    getArena.style.visibility = "visible";
  },
  setFight: function() {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getEnemy = document.querySelector(".enemy");
    let enemy00 = new Enemy("Rogue", 100,100,100,100,100);
    let enemy01 = new Enemy("Goblin", 75,125,75,125,100);
  }
};