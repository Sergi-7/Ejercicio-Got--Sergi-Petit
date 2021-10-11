class gotCharacter {
  series;

  constructor(name, family, age, status) {
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

class gotKing extends gotCharacter {
  constructor() {
    super();
  }
}

class gotFighter extends gotCharacter {
  constructor() {
    super();
  }
}

class gotAssistant extends gotCharacter {
  constructor() {
    super();
  }
}

class gotShieldbearer extends gotCharacter {
  constructor() {
    super();
  }
}
