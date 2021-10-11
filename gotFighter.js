import gotCharacter from "./gotCharacter";

class gotFighter extends gotCharacter {
  constructor(name, family, age, status, series, weapon, skill) {
    super(name, family, age, status, series);
    this.name = name;
    this.family = family;
    this.age = age;
    this.status = status;
    this.weapon = weapon;
    this.skill = skill;
  }
  comunicate() {
    return "Primero pego y luego pregunto";
  }
}
