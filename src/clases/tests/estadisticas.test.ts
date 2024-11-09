import Estadisticas from "../estadisticas";
import { mock } from "jest-mock-extended";
import Tarea from "../tarea.ts";
import Estado from "../estado.ts";

describe("Test de la clase Estadistica", () => {
  let instance: Estadisticas;

  beforeEach(() => {
    instance = new Estadisticas();
  });

  test("Pruebo que se cree una isntancia de Estadisticas", () => {
    expect(instance).toBeInstanceOf(Estadisticas);
  });

  test("Pruebo que calcularTareasCompletadas devuelva la cantidad correcta", () => {
    const tarea1 = mock<Tarea>();
    tarea1.getEstado.mockReturnValue(Estado.COMPLETADA);
    const tarea2 = mock<Tarea>();
    tarea2.getEstado.mockReturnValue(Estado.PENDIENTE);
    const tarea3 = mock<Tarea>();
    tarea3.getEstado.mockReturnValue(Estado.PENDIENTE);
    const tarea4 = mock<Tarea>();
    tarea4.getEstado.mockReturnValue(Estado.COMPLETADA);
    const tarea5 = mock<Tarea>();
    tarea5.getEstado.mockReturnValue(Estado.COMPLETADA);
    let listaTareas: Array<Tarea> = [tarea1, tarea2, tarea3, tarea4, tarea5];

    expect(instance.calcularTareasCompletadas(listaTareas)).toEqual(3);
  });

  test("Pruebo que calcularTareasPendientes devuelva la cantidad correcta", () => {
    const tarea1 = mock<Tarea>();
    tarea1.getEstado.mockReturnValue(Estado.COMPLETADA);
    const tarea2 = mock<Tarea>();
    tarea2.getEstado.mockReturnValue(Estado.PENDIENTE);
    const tarea3 = mock<Tarea>();
    tarea3.getEstado.mockReturnValue(Estado.PENDIENTE);
    const tarea4 = mock<Tarea>();
    tarea4.getEstado.mockReturnValue(Estado.COMPLETADA);
    const tarea5 = mock<Tarea>();
    tarea5.getEstado.mockReturnValue(Estado.COMPLETADA);
    let listaTareas: Array<Tarea> = [tarea1, tarea2, tarea3, tarea4, tarea5];

    expect(instance.calcularTareasPendientes(listaTareas)).toEqual(2);
  });

  test("Pruebo que calcularTasaFinalizacion devuelva el porcentaje correcto", () => {
    const tarea1 = mock<Tarea>();
    tarea1.getEstado.mockReturnValue(Estado.COMPLETADA);
    const tarea2 = mock<Tarea>();
    tarea2.getEstado.mockReturnValue(Estado.PENDIENTE);
    const tarea3 = mock<Tarea>();
    tarea3.getEstado.mockReturnValue(Estado.PENDIENTE);
    const tarea4 = mock<Tarea>();
    tarea4.getEstado.mockReturnValue(Estado.COMPLETADA);
    const tarea5 = mock<Tarea>();
    tarea5.getEstado.mockReturnValue(Estado.COMPLETADA);
    let listaTareas: Array<Tarea> = [tarea1, tarea2, tarea3, tarea4, tarea5];

    expect(instance.calcularTasaFinalizacion(listaTareas)).toEqual(60);
  });
});
