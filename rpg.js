class Character {
  constructor(hp, mana, dmg, name){
    this.hp = hp;
    this.mana = mana;
    this.dmg = dmg;
    this.name = name;
    this.status = "playing";

  }

  takedamage(bonusHealth) {
    this.hp += bonusHealth;
    alert(`${this.name} recoit ${this.bonusHealth} points de bonus.`);
  };

  dealDamage(victim) {
    victim.hp -= this.dmg
    alert(`${this.name} inflige ${this.dmg} points de dégâts à ${victim.name}.`);
  };
}

class Fighter extends Character {
  constructor(bonusHealth){
    super(status);
    this.hp = 12;
    this.mana = 40;
    this.dmg = 4;
    this.bonusHealth = bonusHealth;
    this.priceSpecialAttack = 20;
    this.name = "Grace";
  }
  // darkVision
  specialAttack(victim) {
    victim.hp -= 5;
   // this.mana -= 20;
   alert(`${this.name} joue son attaque spéciale : Dark Vision !`)
   alert(`${this.name} inflige 5 points de dégâts à ${victim.name} !`)
 }
}

class Paladin extends Character {
  constructor(bonusHealth){
    super(status);
    this.hp = 16;
    this.mana = 160;
    this.dmg = 3;
    this.bonusHealth = bonusHealth;
    this.priceSpecialAttack = 40;
    this.name = "Ulder";
  }

   //healingLightning 
   specialAttack(victim) {
    victim.hp -= 4;
    this.hp += 5;
   // this.mana -= 40;
   alert(`${this.name} joue son attaque spéciale : Healing Lightning !`)
   alert(`${this.name} récupère 4 points de vie et inflige 4 points de dégâts à ${victim.name} !`)
 }
}

class Monk extends Character {
  constructor(bonusHealth){
    super(status);
    this.hp = 8;
    this.mana = 200;
    this.dmg = 2;
    this.bonusHealth = bonusHealth;
    this.priceSpecialAttack = 25;
    this.name = "Moana";
  }

  // heal
  specialAttack = () => {
    this.hp += 8;
   // this.mana -= 25;
   alert(`${this.name} joue son attaque spéciale : Heal !`)
   alert(`${this.name} récupère 8 points de vie !`)
 }
}

class Berzerker extends Character {
  constructor(bonusHealth){
    super(status);
    this.hp = 8;
    this.mana = 0;
    this.dmg = 4;
    this.bonusHealth = bonusHealth;
    this.priceSpecialAttack = 0;
    this.name = "Draven";
  }

   //rage
   specialAttack(victim) {
    this.dmg += 1;
    this.hp -= 1;
    alert(`${this.name} joue son attaque spéciale : Rage !`)
    alert(`${this.name} récupère 1 points de vie et augmente sa force d'attaque d'un point de dégâts !`)
 }
}

class Assassin extends Character {
  constructor(bonusHealth){
    super(status);
    this.hp = 6;
    this.mana = 20;
    this.dmg = 6;
    this.bonusHealth = bonusHealth;
    this.priceSpecialAttack = 20;
    this.name = "Carl";
  }

  //shadowHit
  specialAttack(victim) {
    this.hp += 2;
  //  this.mana -= 20;
    victim.hp -= 7;
    alert(`${this.name} joue son attaque spéciale : Shadow Hit !`)
    alert(`${this.name} récupère 2 points de vie et inflige 7 points de dégâts à ${victim.name} !`)
 }
}




class Turn {
  constructor (play1, play2, play3, play4, play5) {
    [play1, play2, play3, play4, play5].forEach(player => this.onePlayerAtTime(player))
  }

  oppomentToAttack(play) {
    let players = [play1, play2, play3, play4, play5];
    players.splice(players.indexOf(play), 1)
    do{
      var index = prompt(`${play.name}, qui souhaitez-vous attaquer ? (saisissez un numero)\n1 - ${players[0].name} \n2 - ${players[1].name} \n3 - ${players[2].name} \n4 - ${players[3].name} `);
    }
    while ( !["1","2","3","4"].includes(index))
    return players[index - 1]
  }

  whichMoveToPlay(play) {
    do {
      var answer =prompt(`${play.name}, souhaitez-vous recourir à votre attaque spéciale ? \n(o/n)`);
    }
    while ( !["O","o","N","n"].includes(answer) )
    return answer;
  }

  onePlayerAtTime(play) {
    const attackedPlayer = this.oppomentToAttack(play)

    if (this.whichMoveToPlay(play).toLowerCase() == "o") {
      play.specialAttack(attackedPlayer)
    }
    else {
      play.dealDamage(attakedPlayer)
    }
    if (attackedPlayer.hp > 0) {
      alert(`${attackedPlayer.name} n'a plus que ${attackedPlayer.hp} point(s) de vie !`)
    }
    else {
      alert(`${attackedPlayer.name} a perdu tous ses points de points de vie !`)
    }
  }
}




class Game {
  constructor(play1, play2, play3, play4, play5) {
    this.play1 = play1;
    this.play2 = play2;
    this.play3 = play3;
    this.play4 = play4;
    this.play5 = play5;
    this.turnLeft = 10;
    this.status = "ongoing";
  };

  newTurn() {
    new Turn(play1, play2, play3, play4, play5);
    this.turnLeft -= 1;
  };

  gameOver(){
    if ((this.play1 <= 0 && this.play2 <= 0 && this.play3 <= 0 && this.play4 <= 0) ||
        (this.play1 <= 0 && this.play2 <= 0 && this.play3 <= 0 && this.play5 <= 0) ||
        (this.play1 <= 0 && this.play2 <= 0 && this.play4 <= 0 && this.play5 <= 0) ||
        (this.play1 <= 0 && this.play3 <= 0 && this.play4 <= 0 && this.play5 <= 0) ||
        (this.play2 <= 0 && this.play3 <= 0 && this.play4 <= 0 && this.play5 <= 0)) {
      alert("Les quatres autres joueurs sont morts, la partie est terminée !");
      this.status = "over" ;
    }

    if(this.turnLeft == 0) {
      alert("Les dix tours sont écoulés, la partie est finie !");
      this.status = "over" ;
    }
  };

  start() {
    while (game1.status == "ongoing") {
      alert(`Il reste ${game1.turnLeft} tour(s) à jouer pour la partie en cours.`)
      game1.newTurn()
      game1.gameOver()
    }
  }

};

let play1 = new Assassin()
let play2 = new Monk()
let play3 = new Fighter()
let play4 = new Paladin()
let play5 = new Berzerker()
let game1 = new Game(play1, play2, play3, play4, play5)



