import OrdenadoTitulo from "../src/clases/ordenadoTitulo";
import Tarea from "../src/clases/tarea.ts";
import TareasArchivo from "../src/clases/tareasArchivo.ts";
import { mock } from "jest-mock-extended";

describe("Test de la clase OrdenadoTitulo", () => {
  let instance: OrdenadoTitulo;

  beforeEach(() => {
    instance = new OrdenadoTitulo();
  });

  test("Pruebo que obtuve una instancia de OrdenadoTitulo", () => {
    expect(instance).toBeInstanceOf(OrdenadoTitulo);
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

    const tareasArchivo = mock<TareasArchivo>();
    tareasArchivo.cargarTareas.mockReturnValue(listaTareas);

    instance.ordenar();
    expect(listaTareas).toEqual(listaEsperada);
  });
});
