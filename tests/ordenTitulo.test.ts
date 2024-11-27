import { OrdenTitulo } from "../src/clases/ordenador";
import Tarea from "../src/clases/tarea";
import { mock } from "jest-mock-extended";

describe("Test de la clase OrdenTitulo", () => {
  let instance: OrdenTitulo;

  beforeEach(() => {
    instance = new OrdenTitulo();
  });

  test("Pruebo que obtuve una instancia de OrdenTitulo", () => {
    expect(instance).toBeInstanceOf(OrdenTitulo);
  });

  test("Pruebo que el metodo ordenar ordene correctamente una lista de tareas por titulo", () => {
    const tarea1 = mock<Tarea>();
    const tarea2 = mock<Tarea>();
    const tarea3 = mock<Tarea>();
    tarea1.getTitulo.mockReturnValue("aaa");
    tarea2.getTitulo.mockReturnValue("bbb");
    tarea3.getTitulo.mockReturnValue("ccc");

    let listaTareas: Array<Tarea> = [tarea3, tarea1, tarea2];
    let listaEsperada: Array<Tarea> = [tarea1, tarea2, tarea3];

    expect(instance.ordenar(listaTareas)).toEqual(listaEsperada);
  });
});
