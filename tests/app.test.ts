import App from "../src/clases/app";
import Command from "../src/command/Command";
import OrdenTitulo from "../src/clases/ordenTitulo";
import OrdenPrioridad from "../src/clases/ordenPrioridad";
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

  test("Pruebo que el metodo getEstrategiaOrden y setEstrategiaOrden seteen y devuelvan los valores correctos", () => {
    const estrategia1 = mock<OrdenTitulo>();
    const estrategia2 = mock<OrdenPrioridad>();
    instance.setEstrategiaOrden(estrategia1);
    expect(instance.getEstrategiaOrden()).toEqual(estrategia1);
    instance.setEstrategiaOrden(estrategia2);
    expect(instance.getEstrategiaOrden()).toEqual(estrategia2);
  });

  test("Pruebo que el metodo ordenar devuelva una lista de tareas", () => {
    const estrategia = mock<OrdenTitulo>();
    instance.setEstrategiaOrden(estrategia);

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
