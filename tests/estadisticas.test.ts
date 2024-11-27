import Estadisticas from "../src/clases/estadisticas";
import { mock } from "jest-mock-extended";
import Tarea from "../src/clases/tarea";
import { Estado } from "../src/enums";

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

  test("Pruebo que tiempoDedicadoPorTarea devuelva un map con valores correctos", () => {
    const tarea1 = mock<Tarea>();
    tarea1.getfechaCreacion.mockReturnValue(new Date(2024, 9, 8));
    tarea1.getFechaCompletado.mockReturnValue(new Date(2024, 9, 10));
    tarea1.getId.mockReturnValue(1);
    const tarea2 = mock<Tarea>();
    tarea2.getfechaCreacion.mockReturnValue(new Date(2024, 9, 4));
    tarea2.getFechaCompletado.mockReturnValue(undefined);
    tarea2.getId.mockReturnValue(2);
    const tarea3 = mock<Tarea>();
    tarea3.getfechaCreacion.mockReturnValue(new Date(2024, 10, 5));
    tarea3.getFechaCompletado.mockReturnValue(new Date(2024, 10, 25));
    tarea3.getId.mockReturnValue(3);

    const listaTareas: Array<Tarea> = [tarea1, tarea2, tarea3];

    const mapEsperado = new Map();
    mapEsperado.set(1, 2);
    mapEsperado.set(3, 20);
    expect(instance.tiempoDedicadoPorTarea(listaTareas)).toEqual(mapEsperado);
  });
});
