export default class ErrorAvanceInvalido extends Error {
  constructor() {
    super();
  }

  public getMessage(): string {
    return "Avance inválido. Los valores permitidos son 0, 25, 50, 75, 100.";
  }
}
