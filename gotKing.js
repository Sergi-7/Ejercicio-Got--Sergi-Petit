import gotCharacter from "./gotCharacter";

class gotKing extends gotCharacter {
  constructor(name, family, age, status, series, reignAge) {
    super(name, family, age, status, series);
    this.name = name;
    this.family = family;
    this.age = age;
    this.status = status;
    this.reignAge = reignAge;
  }
  comunicate() {
    return "Vais a morir todos";
  }
}
