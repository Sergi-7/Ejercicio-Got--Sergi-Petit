class gotCharacter {
  series;

  constructor(name, family, age) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.status = "Alive";
    this.series = "Game of Thrones";
  }

  comunicate() {}

  die() {
    this.status = "dead";
  }
}

export default gotCharacter;
