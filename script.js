//PART 1 -------------------------------
const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: "Leo",
    type: "Cat",
    companion: {
      name: "Frank",
      type: "Flea",
      inventory: ["small hat", "sunglasses"],
    },
  },
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  },
};

//we could find a sword at adventurer.inventory[0]

// create a loop that logs each item in Robin’s inventory.

// let robinInventory = adventurer.inventory;
// robinInventory.forEach((item) => {
//   console.log(item);
// });

// Test this method by calling adventurer.roll() a few times.
// adventurer.roll()

//PART 2 -------------------
// Add the roll method to the Character class.
class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }
  static maxHealth() {
    maxHealth(100);
  }
}

const robin = new Adventurer("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Companion("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Companion("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

// Even the companions can roll now; give it a try!
robin.roll();
// OUTPUT: Robin rolled a 14.

// PART 3 -------------------
class Adventurer extends Character {
  constructor(name, role) {
    super(name);
    // Adventurers have specialized roles.
    this.role = role;
    // Every adventurer starts with a bed and 50 gold coins.
    this.inventory.push("bedroll", "50 gold coins");
  }
  // Adventurers have the ability to scout ahead of them.
  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
  static roles() {
    roles = ["Fighter", "Healer", "Wizard"];

    if (!roles.includes(role)) {
      console.log(`Invalid role`);
    }
  }
}

class Companion extends Adventurer {
  constructor(name, type, inventory) {
    super(name);
    this.type = type;
    this.inventory = inventory;
  }
}

//PART 4 ---------------
