import Ordenador from "./ordenador";
import Tarea from "../tarea";

export default class OrdenPrioridad implements Ordenador {
  constructor() {}

  /**
   * Ordena una lista de Tarea por Prioridad ascendente.
   *
   * @param listaTareas la lista a ordenar.
   * @returns una lista de Tarea ordenada por Prioridad.
   */
  public ordenar(listaTareas: Array<Tarea>): Array<Tarea> {
    listaTareas.sort((tarea1, tarea2) => {
      if (tarea1.getPrioridad() > tarea2.getPrioridad()) {
        return 1;
      } else if (tarea1.getPrioridad() < tarea2.getPrioridad()) {
        return -1;
      }
      return 0;
    });

    return listaTareas;
  }
}
