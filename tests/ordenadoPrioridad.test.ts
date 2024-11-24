import OrdenadoPrioridad from "../src/clases/ordenadoPrioridad";
import Tarea from "../src/clases/tarea";
import { mock } from "jest-mock-extended";

describe("Test de la clase OrdenadoPrioridad", () => {
  let instance: OrdenadoPrioridad;

  beforeEach(() => {
    instance = new OrdenadoPrioridad();
  });

  test("Pruebo que obtuve una instancia de OrdenadoPrioridad", () => {
    expect(instance).toBeInstanceOf(OrdenadoPrioridad);
  });

  test("Pruebo que el metodo ordenar ordene correctamente una lista de tareas por prioridad", () => {
    const tarea1 = mock<Tarea>();
    const tarea2 = mock<Tarea>();
    const tarea3 = mock<Tarea>();
    tarea1.getPrioridad.mockReturnValue(1);
    tarea2.getPrioridad.mockReturnValue(2);
    tarea3.getPrioridad.mockReturnValue(3);

    let listaTareas: Array<Tarea> = [tarea3, tarea1, tarea2];
    let listaEsperada: Array<Tarea> = [tarea1, tarea2, tarea3];

    expect(instance.ordenar(listaTareas)).toEqual(listaEsperada);
  });
});
