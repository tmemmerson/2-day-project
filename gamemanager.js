let GameManager = {
  setGameStart: function(classType) {
    this.resetPlayer(classType);
    this.setPreFight();
  },
  resetPlayer: function(classType) {
    switch (classType) {
      case "Cyrax":
        player = new Player(classType, 200, 0, 200, 100, 50);
        break;
      case "Jade":
        player = new Player(classType, 200, 0, 100, 150, 200);
        break;
      case "Jax":
        player = new Player(classType, 200, 0, 50, 200, 50);
        break;
      case "Kabal":
        player = new Player(classType, 200, 0, 50, 200, 100);
        break;
      case "Kano":
        player = new Player(classType, 200, 0, 200, 100, 50);
        break;
      case "Kitana":
        player = new Player(classType, 200, 0, 100, 150, 200);
        break;
      case "KungLao":
        player = new Player(classType, 200, 0, 50, 200, 50);
        break;
      case "LiuKang":
        player = new Player(classType, 200, 0, 50, 200, 100);
        break;
      case "Nightwolf":
        player = new Player(classType, 200, 0, 200, 100, 50);
        break;
      case "Scorpion":
        player = new Player(classType, 200, 0, 100, 150, 200);
        break;
      case "Sektor":
        player = new Player(classType, 200, 0, 50, 200, 50);
        break;
      case "Sheeva":
        player = new Player(classType, 200, 0, 50, 200, 100);
        break;
      case "Sindel":
        player = new Player(classType, 200, 0, 200, 100, 50);
        break;
      case "Smoke":
        player = new Player(classType, 200, 0, 100, 150, 200);
        break;
      case "Sonya":
        player = new Player(classType, 200, 0, 50, 200, 50);
        break;
      case "SubZero":
        player = new Player(classType, 200, 0, 50, 200, 100);
        break;
    }
    let getInterface = document.querySelector(".interface");
    getInterface.innerHTML = '<img src="https://coding-assets.s3-us-west-2.amazonaws.com/mk/fight/' + classType.toLowerCase() + '.png" class="img-avatar"><div><h3>' + classType + '</h3><p class="health-player">Health: ' + player.health + '</p><p>Mana: ' + player.mana + '</p><p>Strength: ' + player.strength + '</p><p>Agility: ' + player.agility + '</p><p>Speed: ' + player.speed + '</p></div>';
  },
  setPreFight: function() {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getArena = document.querySelector(".arena");
    getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
    getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for enemy!</a>';
    getArena.style.visibility = "visible";
  },
  setFight: function() {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getEnemy = document.querySelector(".enemy");
    let enemy00 = new Enemy("Cyrax", 200, 0, 50, 100, 100);
    let enemy01 = new Enemy("Jade", 200, 0, 150, 80, 150);
    let enemy02 = new Enemy("Jax", 200, 0, 50, 100, 100);
    let enemy03 = new Enemy("Kabal", 200, 0, 150, 80, 150);
    let enemy04 = new Enemy("Kano", 200, 0, 50, 100, 100);
    let enemy05 = new Enemy("Kitana", 200, 0, 150, 80, 150);
    let enemy06 = new Enemy("KungLao", 200, 0, 50, 100, 100);
    let enemy07 = new Enemy("LiuKang", 200, 0, 150, 80, 150);
    let enemy08 = new Enemy("Nightwolf", 200, 0, 50, 100, 100);
    let enemy09 = new Enemy("Scorpion", 200, 0, 150, 80, 150);
    let enemy10 = new Enemy("Sektor", 200, 0, 50, 100, 100);
    let enemy11 = new Enemy("Sheeva", 200, 0, 150, 80, 150);
    let enemy12 = new Enemy("Sindel", 200, 0, 50, 100, 100);
    let enemy13 = new Enemy("Smoke", 200, 0, 150, 80, 150);
    let enemy14 = new Enemy("Sonya", 200, 0, 50, 100, 100);
    let enemy15 = new Enemy("SubZero", 200, 0, 150, 80, 150);
    let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(16));
    switch (chooseRandomEnemy) {
      case 0:
        enemy = enemy00;
        break;
      case 1:
        enemy = enemy01;
        break;
      case 2:
        enemy = enemy02;
        break;
      case 3:
        enemy = enemy03;
        break;
      case 4:
        enemy = enemy04;
        break;
      case 5:
        enemy = enemy05;
        break;
      case 6:
        enemy = enemy06;
        break;
      case 7:
        enemy = enemy07;
        break;
      case 8:
        enemy = enemy08;
        break;
      case 9:
        enemy = enemy09;
        break;
      case 10:
        enemy = enemy10;
        break;
      case 11:
        enemy = enemy11;
        break;
      case 12:
        enemy = enemy12;
        break;
      case 13:
        enemy = enemy13;
        break;
      case 14:
        enemy = enemy14;
        break;
      case 15:
        enemy = enemy15;
        break;
      case 16:
        enemy = enemy16;
        break;
    }
    getHeader.innerHTML = '<p>FIGHT!</p>';
    getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
    getEnemy.innerHTML = '<img src="https://coding-assets.s3-us-west-2.amazonaws.com/mk/fight/' + enemy.enemyType.toLowerCase() + '.png" alt="' + enemy.enemyType + '" class="img-avatar"><div><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>Strength: ' + enemy.strength + '</p><p>Agility: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div>';
  }
}
