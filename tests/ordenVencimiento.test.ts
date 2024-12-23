import { OrdenVencimiento } from "../src/clases/ordenador";
import Tarea from "../src/clases/tarea";
import { mock } from "jest-mock-extended";

describe("Test de la clase OrdenVencimiento", () => {
  let instance: OrdenVencimiento;

  beforeEach(() => {
    instance = new OrdenVencimiento();
  });

  test("Pruebo que obtuve una instancia de OrdenVencimiento", () => {
    expect(instance).toBeInstanceOf(OrdenVencimiento);
  });

  test("Pruebo que el metodo ordenar ordene correctamente una lista de tareas por fecha de vencimiento", () => {
    const tarea1 = mock<Tarea>();
    const tarea2 = mock<Tarea>();
    const tarea3 = mock<Tarea>();
    tarea1.getFechaVencimiento.mockReturnValue(new Date(1, 1, 2000));
    tarea2.getFechaVencimiento.mockReturnValue(new Date(2, 1, 2000));
    tarea3.getFechaVencimiento.mockReturnValue(new Date(3, 1, 2000));

    let listaTareas: Array<Tarea> = [tarea3, tarea1, tarea2];
    let listaEsperada: Array<Tarea> = [tarea1, tarea2, tarea3];

    expect(instance.ordenar(listaTareas)).toEqual(listaEsperada);
  });
});
