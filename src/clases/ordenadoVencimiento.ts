import Ordenador from "./ordenador";
import Tarea from "./tarea";

export default class OrdenadoVencimiento implements Ordenador {
  constructor() {}

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
