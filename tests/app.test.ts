import App from "../src/clases/app";
import { Command } from "../src/command/Command";
import OrdenadoTitulo from "../src/clases/ordenadoTitulo";
import OrdenadoPrioridad from "../src/clases/ordenadoPrioridad";
import { mock } from "jest-mock-extended";
import Tarea from "../src/clases/tarea";

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

  test("Pruebo que el metodo getEstrategiaOrdenado y setEstrategiaOrdenado seteen y devuelvan los valores correctos", () => {
    const estrategia1 = mock<OrdenadoTitulo>();
    const estrategia2 = mock<OrdenadoPrioridad>();
    instance.setEstrategiaOrdenado(estrategia1);
    expect(instance.getEstrategiaOrdenado()).toEqual(estrategia1);
    instance.setEstrategiaOrdenado(estrategia2);
    expect(instance.getEstrategiaOrdenado()).toEqual(estrategia2);
  });

  test("Pruebo que el metodo ordenar devuelva una lista de tareas", () => {
    const estrategia = mock<OrdenadoTitulo>();
    instance.setEstrategiaOrdenado(estrategia);

    const tarea1 = mock<Tarea>();
    const tarea2 = mock<Tarea>();
    const tarea3 = mock<Tarea>();
    tarea1.getTitulo.mockReturnValue("aaa");
    tarea2.getTitulo.mockReturnValue("bbb");
    tarea3.getTitulo.mockReturnValue("ccc");

    let listaTareas: Array<Tarea> = [tarea3, tarea1, tarea2];
    let listaEsperada: Array<Tarea> = [tarea1, tarea2, tarea3];
    estrategia.ordenar.mockReturnValue(listaEsperada);

    expect(instance.ordenar(listaTareas)).toEqual(listaEsperada);
  });
});
