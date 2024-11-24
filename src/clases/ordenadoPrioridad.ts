import Ordenador from "./ordenador";
import Tarea from "./tarea";
import TareaArchivo from "./tareaArchivo";

export default class OrdenadoPrioridad implements Ordenador {
  constructor() {}

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
