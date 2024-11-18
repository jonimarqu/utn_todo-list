import App from "../src/clases/app";
import Command from "../src/clases/command";
import { mock } from "jest-mock-extended";

describe("Test de la clase App", () => {
  let instance: App;
  const command = mock<Command>();

  beforeEach(() => {
    instance = App.getInstance();
  });

  test("Pruebo que obtuve una instancia de App", () => {
    expect(instance).toBeInstanceOf(App);
  });

  test("Pruebo que solo se pueda crear una sola instancia de App", () => {
    const instance1 = instance;
    const instance2 = App.getInstance();
    expect(instance1).toEqual(instance2);
  });

  test("Pruebo que el metodo ejecutarComando no haga throw error", () => {
    expect(instance.ejecutarComando(command)).not.toThrow();
  });
});
