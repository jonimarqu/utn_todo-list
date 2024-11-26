import Ordenador from "./ordenador";
import Tarea from "./tarea";

export default class OrdenTitulo implements Ordenador {
  constructor() {}

  public ordenar(listaTareas: Array<Tarea>): Array<Tarea> {
    listaTareas.sort((tarea1, tarea2) => {
      if (tarea1.getTitulo() > tarea2.getTitulo()) {
        return 1;
      } else if (tarea1.getTitulo() < tarea2.getTitulo()) {
        return -1;
      }
      return 0;
    });
    return listaTareas;
  }
}
