let player;

function Player(classType, health, mana, strength, agility, speed) {
  this.classType = classType;
  this.health = health;
  this.mana = mana;
  this.strength = strength;
  this.agility = agility;
  this.speed = speed;
}

let PlayerMoves = {
  calcAttack: function() {
    let getPlayerSpeed = player.speed;
    let getEnemySpeed = enemy.speed;
  }
  let playerAttack = function() {
    let calcBaseDamage;
    if(player.mana > 0) {
      calcBaseDamage = player.strength * player.mana / 1000;
    } else {
      calcBaseDamage = player.strength * player.agility / 1000;
    }
    let offsetDamage = Math.floor(Math.random() * Math.floor(20));
    let calcOutputDamage = calcBaseDamage + offsetDamage;
    let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility /10) /2) +1);
    let attackValues = [calcOutputDamage, numberOfHits];
    return attackValues;
  }

  let ememyAttack = function() {
    let calcBaseDamage;
    if(enemy.mana > 0) {
      calcBaseDamage = enemy.strength * enemy.mana / 1000;
    } else {
      calcBaseDamage = enemy.strength * enemy.agility / 1000;
    }
    let offsetDamage = Math.floor(Math.random() * Math.floor(20));
    let calcOutputDamage = calcBaseDamage + offsetDamage;
    let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility /10) /2) +1);
    let attackValues = [calcOutputDamage, numberOfHits];
    return attackValues;
  }
  let getPlayerHealth = document.querySelector(".health-player")
  let getEnemyHealth = document.querySelector(".health-enemy")
}
