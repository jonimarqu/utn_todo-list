import OrdenadoVencimiento from "../src/clases/ordenadoVencimiento";
import Tarea from "../src/clases/tarea";
import TareaArchivo from "../src/clases/tareaArchivo";
import { mock } from "jest-mock-extended";

describe("Test de la clase OrdenadoVencimiento", () => {
  let instance: OrdenadoVencimiento;

  beforeEach(() => {
    instance = new OrdenadoVencimiento();
  });

  test("Pruebo que obtuve una instancia de OrdenadoVencimiento", () => {
    expect(instance).toBeInstanceOf(OrdenadoVencimiento);
  });

  test("Pruebo que el metodo ordenar ordene correctamente una lista de tareas por fecha de vencimiento", () => {
    const tarea1 = mock<Tarea>();
    const tarea2 = mock<Tarea>();
    const tarea3 = mock<Tarea>();
    tarea1.getFechaVencimiento["getTime"]().mockReturnValue(1);
    tarea2.getFechaVencimiento["getTime"]().mockReturnValue(2);
    tarea3.getFechaVencimiento["getTime"]().mockReturnValue(3);

    let listaTareas: Array<Tarea> = [tarea3, tarea1, tarea2];
    let listaEsperada: Array<Tarea> = [tarea1, tarea2, tarea3];

    const tareaArchivo = mock<TareaArchivo>();
    tareaArchivo.cargarTarea.mockReturnValue(listaTareas);

    instance.ordenar(tareaArchivo);
    expect(listaTareas).toEqual(listaEsperada);
  });
});
