/*
////// Random Monster ////////
*/

{
  function initMonster() {

    function Monster(monsterType) {
      this.monsterType = monsterType;
    };

    let mon00 = new Monster("Goblin");
    let mon01 = new Monster("Giant");
    let mon02 = new Monster("Skeleton");
    let mon03 = new Monster("Dragon");
    let mon04 = new Monster("Spider")
    let mon05 = new Monster("Werewolf")

    let monsterMon = [mon00, mon01, mon02, mon03, mon04, mon05];

    let randomMonster = monsterMon[Math.floor(Math.random() * monsterMon.length)];

    let monsterName = ['...', 'Cant Remember', 'Borg', 'Terry the Great', 'Hamtony the Destroyer', 'Kayla the ...', 'Mel the Farone', 'Bobby the Fair', 'Jeff the Lost', 'Seth the Singer', 'Jesse the Dark', 'Steve', ];

    let randomName = monsterName[Math.floor(Math.random() * monsterName.length)];

    function Mood(mood) {
      this.mood = mood;
    };
    let mood00 = new Mood("Feels Hungry");
    let mood01 = new Mood("Thinks its Lost");
    let mood02 = new Mood("Feels Nervous");
    let mood03 = new Mood("Feels Angry");
    let mood04 = new Mood("Feels Meh");

    let monMood = [mood00, mood01, mood02, mood03, mood04];

    let randomMood = monMood[Math.floor(Math.random() * monMood.length)];

    // Armour Class
    let randomAc = Math.floor(Math.random() * 25 + 3);
    // Hitpoints
    let hitPoint = [5, 10, 20, 30, 50, 100, 150, 200];
    let randomHp = hitPoint[Math.floor(Math.random() * hitPoint.length)];

    let movement = [25, 30, 30, 30, 30, 35];
    let randomMovement = movement[Math.floor(Math.random() * movement.length)];

    let weapon = ['Axe 1d6 +1', 'hands 1d4', 'Sword 1d8', 'club 1d6 +2']

    let randomWeapon = weapon[Math.floor(Math.random() * weapon.length)];


    let randomGold = Math.floor(Math.random() * 100 + 1) / 2;

    let randomAll = document.querySelector('.monster');


    if (randomMonster === monsterMon[0]) {
      document.getElementById('monsterImg').src = 'img/iconfinder_Orc.png';
    } else if (randomMonster === monsterMon[1]) {
      document.getElementById('monsterImg').src = 'img/iconfinder_Viking.png';
    } else if (randomMonster === monsterMon[2]) {
      document.getElementById('monsterImg').src = 'img/iconfinder_skel.png';
    } else if (randomMonster === monsterMon[3]) {
      document.getElementById('monsterImg').src = 'img/iconfinder_dragon.png';
    } else if (randomMonster === monsterMon[4]) {
      document.getElementById('monsterImg').src = 'img/iconfinder_Spider.png';
    } else if (randomMonster === monsterMon[5]) {
      document.getElementById('monsterImg').src = 'img/iconfinder_Werewolf.png';
    }


    randomAll.innerHTML = '<h2>' + randomMonster.monsterType + '</h2><p>Name: ' + randomName + '<p>Mood: ' + randomMood.mood + '</p></p><p>AC: ' + randomAc + '</p><p>HP: ' + randomHp + '</p><p>Speed: ' + randomMovement + '</p><p>Weapon: ' + randomWeapon + '</p><p>Gold: ' + randomGold + '</p>';
  };
}



/*
////// Random NPC ////////
*/

{
  function initNpc() {


    function Npc(npcType) {
      this.npcType = npcType;
    };

    let npc00 = new Npc("Human Man");
    let npc01 = new Npc("Dwarf Man");
    let npc02 = new Npc("Gnome Man");
    let npc03 = new Npc("Elf Man");
    let npc04 = new Npc("Human Woman");
    let npc05 = new Npc("Dwarf Woman");
    let npc06 = new Npc("Gnome Woman");
    let npc07 = new Npc("Elf Woman");


    let npcType = [npc00, npc01, npc02, npc03, npc04, npc05, npc06, npc07];

    let randomNpc = npcType[Math.floor(Math.random() * npcType.length)];

    let npcName = ['...', 'Cant Remember', 'Borg', 'Terry the Great', 'Hamtony the Destroyer', 'Kayla the ...', 'Mel the Farone', 'Bobby the Fair', 'Jeff the Lost', 'Seth the Singer', 'Jesse the Dark', 'Steve', ];

    let randomName = npcName[Math.floor(Math.random() * npcName.length)];


    function Mood(mood) {
      this.mood = mood;
    };
    let mood00 = new Mood("Feels Hungry");
    let mood01 = new Mood("Thinks its Lost");
    let mood02 = new Mood("Feels Nervous");
    let mood03 = new Mood("Feels Angry");
    let mood04 = new Mood("Feels Meh");

    let monMood = [mood00, mood01, mood02, mood03, mood04];

    let randomMood = monMood[Math.floor(Math.random() * monMood.length)];

    // Armour Class
    let randomAc = Math.floor(Math.random() * 25 + 3);

    // Hitpoints
    let hitPoint = [5, 10, 20, 30, 50, 100, 150, 200];
    let randomHp = hitPoint[Math.floor(Math.random() * hitPoint.length)];
    // Speed
    let movement = [25, 30, 30, 30, 30, 35];
    let randomMovement = movement[Math.floor(Math.random() * movement.length)];

    let weapon = ['Axe 1d6 +1', 'hands 1d4', 'Sword 1d8', 'club 1d6 +2']

    let randomWeapon = weapon[Math.floor(Math.random() * weapon.length)];


    let randomGold = Math.floor(Math.random() * 100 + 1) / 2;


    let randomAll = document.querySelector('.npc');


    /* if (randomMonster === monsterMon[0]) {
       document.getElementById('npcImg').src = 'img/iconfinder_Orc.png';
     } else if (randomMonster === monsterMon[1]) {
       document.getElementById('npcImg').src = 'img/iconfinder_Viking.png';
     } else if (randomMonster === monsterMon[2]) {
       document.getElementById('npcImg').src = 'img/iconfinder_skel.png';
     } else if (randomMonster === monsterMon[3]) {
       document.getElementById('npcImg').src = 'img/iconfinder_dragon.png';
     } else if (randomMonster === monsterMon[4]) {
       document.getElementById('npcImg').src = 'img/iconfinder_Spider.png';
     }
     */


    randomAll.innerHTML = '<h2>' + randomNpc.npcType + '</h2><p>Name: ' + randomName + '<p>Mood: ' + randomMood.mood + '</p></p><p>AC: ' + randomAc + '</p><p>HP: ' + randomHp + '</p><p>Speed: ' + randomMovement + '</p><p>Weapon: ' + randomWeapon + '</p><p>Gold: ' + randomGold + '</p>';
  };
};


/*
////// Random Item ////////
*/

class Items {
  constructor(item, name, effect, dmg) {
    this.item = item;
    this.name = name;
    this.effect = effect;
    this.dmg = dmg;
  }
};

let itemEffect = ['...', '...', '...', '...', '...', '...', '...', 'returns to owner when called.', 'Turns to dust on crit hit.', 'Glows when lost.', 'It speaks.'];

let itemName = ['...', '...', '...', '...', '...', '...', '...', 'Death Machine', 'The Destroyer', '...', 'The Redeemer', 'Rain Maker', 'Steve'];

let randomEffect = itemEffect[Math.floor(Math.random() * itemEffect.length)];
let randomName = itemName[Math.floor(Math.random() * itemName.length)];

// damage
let dmg = ['1d6 +1', '1d4', '1d8', '1d6 +2', '1d12']

let randomDmg = dmg[Math.floor(Math.random() * dmg.length)];

let item00 = new Items("Short Sword", randomName, randomEffect, randomDmg);
let item01 = new Items("Dagger", randomName, randomEffect, randomDmg);
let item02 = new Items("Lock Picks", randomName, randomEffect, randomDmg);
let item03 = new Items("Tavel Pack", randomName, randomEffect, randomDmg);
let item04 = new Items("Rat Tail", randomName, randomEffect, randomDmg);
let item05 = new Items("Rations", randomName, randomEffect, randomDmg);
let item06 = new Items("Gems", randomName, randomEffect, randomDmg);
let item07 = new Items("Stick", randomName, randomEffect, randomDmg);
let item09 = new Items("Axe", randomName, randomEffect, randomDmg);
let item10 = new Items("Long Sword", randomName, randomEffect, randomDmg);
let item11 = new Items("Staff", randomName, randomEffect, randomDmg);
let item12 = new Items("rope", randomName, randomEffect, randomDmg);



console.log(item12);
/*
{
  function initItem() {


    function Item(itemType) {
      this.itemType = itemType;
    };

    let item00 = new Item("Short Sword");
    let item01 = new Item("Dagger");
    let item02 = new Item("Lock Picks");
    let item03 = new Item("Tavel Pack");
    let item04 = new Item("Rat Tail");
    let item05 = new Item("Rations");
    let item06 = new Item("Gems");
    let item07 = new Item("Stick");


    let itemType = [item00, item01, item02, item03, item04, item05, item06, item07];

    let randomItem = itemType[Math.floor(Math.random() * itemType.length)];

    let itemName = ['...', '...', '...', '...', '...', '...', '...', 'Death Machine', 'The Destroyer', '...', 'The Redeemer'];

    let randomName = itemName[Math.floor(Math.random() * itemName.length)];


    function Magic(effect) {
      this.effect = effect;
    };
    let effect00 = new Magic("None");
    let effect01 = new Magic("None");
    let effect02 = new Magic("None");
    let effect03 = new Magic("Burns anything that touches it.");
    let effect04 = new Magic("will give you + 5 speed");

    let effect = [effect00, effect01, effect02, effect03, effect04];

    let randomEffect = effect[Math.floor(Math.random() * effect.length)];

    // Armour Class
    let randomAc = Math.floor(Math.random() * 25 + 3);

    // Hitpoints
    let hitPoint = [5, 10, 20, 30, 50, 100, 150, 200];
    let randomHp = hitPoint[Math.floor(Math.random() * hitPoint.length)];

    // damage
    let dmg = ['1d6 +1', '1d4', '1d8', '1d6 +2', '1d12']

    let randomWeapon = dmg[Math.floor(Math.random() * dmg.length)];


    let randomGold = Math.floor(Math.random() * 100 + 1) / 2;


    let randomAll = document.querySelector('.item');


    /* if (randomMonster === monsterMon[0]) {
       document.getElementById('npcImg').src = 'img/iconfinder_Orc.png';
     } else if (randomMonster === monsterMon[1]) {
       document.getElementById('npcImg').src = 'img/iconfinder_Viking.png';
     } else if (randomMonster === monsterMon[2]) {
       document.getElementById('npcImg').src = 'img/iconfinder_skel.png';
     } else if (randomMonster === monsterMon[3]) {
       document.getElementById('npcImg').src = 'img/iconfinder_dragon.png';
     } else if (randomMonster === monsterMon[4]) {
       document.getElementById('npcImg').src = 'img/iconfinder_Spider.png';
     }
     */

/*
randomAll.innerHTML = '<h2>' + randomItem.itemType + '</h2><p>Name: ' + randomName + '<p>Mood: ' + randomEffect.effect + '</p></p><p>AC: ' + randomAc + '</p><p>HP: ' + randomHp + '</p><p>Speed: -' + '</p><p>Damage: ' + randomWeapon + '</p><p>Value: ' + randomGold + '</p>';
};
}
*/

/*
////// DICE TOOLS ////////
*/

{
  function rollDice() {
    const dieFour = document.getElementById("dieFour");
    const dieSix = document.getElementById("dieSix");
    const dieEight = document.getElementById("dieEight");
    const dieTwo = document.getElementById("dieTwo");
    const status = document.getElementById("status");
    let d4 = Math.floor(Math.random() * 4) + 1;
    let d6 = Math.floor(Math.random() * 6) + 1;
    let d8 = Math.floor(Math.random() * 8) + 1;
    let d20 = Math.floor(Math.random() * 20) + 1;
    let diceTotal = d4 + d6 + d8 + d20;
    dieFour.innerHTML = d4;
    dieSix.innerHTML = d6;
    dieEight.innerHTML = d8;
    dieTwo.innerHTML = d20;
    status.innerHTML = `Total Roll: ${diceTotal}`;
  };

  function rollDiceFour() {
    const dieFour = document.getElementById("dieFour");
    let d4 = Math.floor(Math.random() * 4) + 1;
    // let diceTotal = d1 + d2;
    dieFour.innerHTML = d4;
  };

  function rollDiceSix() {
    const dieSix = document.getElementById("dieSix");
    let d6 = Math.floor(Math.random() * 6) + 1;
    // let diceTotal = d1 + d2;
    dieSix.innerHTML = d6;
  };

  function rollDiceEight() {
    const dieEight = document.getElementById("dieEight");
    let d8 = Math.floor(Math.random() * 8) + 1;
    // let diceTotal = d1 + d2;
    dieEight.innerHTML = d8;
  };

  function rollDiceTwo() {
    const dietwo = document.getElementById("dieTwo");
    let d4 = Math.floor(Math.random() * 4) + 1;
    let d20 = Math.floor(Math.random() * 20) + 1;
    // let diceTotal = d1 + d2;
    dieTwo.innerHTML = d20;
  };

}