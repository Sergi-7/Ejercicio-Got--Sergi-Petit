import gotCharacter from "./gotCharacter";

class gotAssistant extends gotCharacter {
  constructor(name, family, age, status, series, asesedCharacter) {
    super(name, family, age, status, series);
    this.name = name;
    this.family = family;
    this.age = age;
    this.status = status;
    this.asesedCharacter = asesedCharacter;
  }
  comunicate() {
    return "No sé por qué, pero creo que voy a morir pronto";
  }
}
