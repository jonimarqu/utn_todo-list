import Ordenador from "./ordenador";
import Tarea from "../tarea";

export default class OrdenVencimiento implements Ordenador {
  constructor() {}

  /**
   * Ordena una lista de Tarea por fecha de vencimiento ascendente.
   *
   * @param listaTareas la lista a ordenar.
   * @returns una lista de Tarea ordenada por fecha de vencimiento.
   */
  public ordenar(listaTareas: Array<Tarea>): Array<Tarea> {
    listaTareas.sort((tarea1, tarea2) => {
      if (
        tarea1.getFechaVencimiento().getTime() >
        tarea2.getFechaVencimiento().getTime()
      ) {
        return 1;
      } else if (
        tarea1.getFechaVencimiento().getTime() <
        tarea2.getFechaVencimiento().getTime()
      ) {
        return -1;
      }
      return 0;
    });
    return listaTareas;
  }
}
