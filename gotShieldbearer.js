import gotCharacter from "./gotCharacter";

class gotShieldbearer extends gotCharacter {
  constructor(
    name,
    family,
    age,
    status,
    series,
    servedCharacter,
    peloteoLevel
  ) {
    super(name, family, age, status, series);
    this.name = name;
    this.family = family;
    this.age = age;
    this.status = status;
    this.servedCharacter = servedCharacter;
    this.peloteoLevel = peloteoLevel;
  }
  comunicate() {
    return "Soy un loser";
  }
}
