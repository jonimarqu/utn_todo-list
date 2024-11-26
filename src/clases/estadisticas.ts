import Tarea from "./tarea";
import { Estado } from "../enums/Estado";

export default class Estadisticas {
  constructor() {}

  /**
   * Calcula la cantidad de tareas con estado Completada en una lista de Tarea.
   *
   * @param listaTareas la lista a analizar.
   * @returns un numero indicando la cantidad de tareas con estado Completada.
   */
  public calcularTareasCompletadas(listaTareas: Array<Tarea>): number {
    let tareasCompletadas: number = 0;

    for (let tarea of listaTareas) {
      if (tarea.getEstado() == Estado.COMPLETADA) {
        tareasCompletadas++;
      }
    }
    return tareasCompletadas;
  }

  /**
   * Calcula la cantidad de tareas con estado Pendiente en una lista de Tarea.
   *
   * @param listaTareas la lista a analizar.
   * @returns un numero indicando la cantidad de tareas con estado Pendiente.
   */
  public calcularTareasPendientes(listaTareas: Array<Tarea>): number {
    const totalTareas: number = listaTareas.length;
    const tareasCompletadas: number =
      this.calcularTareasCompletadas(listaTareas);

    let tareasPendientes: number = totalTareas - tareasCompletadas;

    return tareasPendientes;
  }

  /**
   * Calcula el porcentaje de tareas con estado Completada en una lista de Tarea.
   *
   * @param listaTareas la lista a analizar.
   * @returns un numero indicando el porcentaje de tareas con estado Completada.
   */
  public calcularTasaFinalizacion(listaTareas: Array<Tarea>): number {
    const totalTareas: number = listaTareas.length;
    const tareasCompletadas: number =
      this.calcularTareasCompletadas(listaTareas);

    let tasaFinalizacion: number = (tareasCompletadas * 100) / totalTareas;

    return tasaFinalizacion;
  }

  /**
   * Calcula el tiempo en dias que se le dedico a cada tarea en una lista de Tarea.
   *
   * @param listaTareas la lista a analizar.
   * @returns un numero indicando la cantidad de tareas con estado Completada.
   */
  public tiempoDedicadoPorTarea(
    listaTareas: Array<Tarea>
  ): Map<number, number> {
    let mapDiasDedicado = new Map();
    for (let tarea of listaTareas) {
      if (tarea.getFechaCompletado()) {
        let tCreacion: number = tarea.getfechaCreacion().getTime();
        let tCompletado: number | undefined = tarea
          .getFechaCompletado()
          ?.getTime();
        if (tCompletado) {
          let tDedicado: number = tCompletado - tCreacion;
          let diasDedicado: number = Math.floor(
            tDedicado / (1000 * 60 * 60 * 24)
          );
          let idTarea: number = tarea.getId();
          mapDiasDedicado.set(idTarea, diasDedicado);
        }
      }
    }
    return mapDiasDedicado;
  }
}
