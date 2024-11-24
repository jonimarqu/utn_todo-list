import Ordenador from "./ordenador";
import Tarea from "./tarea";
import TareasArchivo from "./tareasArchivo";

export default class OrdenadoVencimiento implements Ordenador {
  constructor() {}

  public ordenar(): void {
    let listaTareas: Array<Tarea> = TareasArchivo.cargarTareas();
    listaTareas.sort((tarea1, tarea2) => {
      if (
        tarea1.fechaVencimiento.getTime() > tarea2.fechaVencimiento.getTime()
      ) {
        return 1;
      } else if (
        tarea1.fechaVencimiento.getTime() < tarea2.fechaVencimiento.getTime()
      ) {
        return -1;
      }
      return 0;
    });
    TareasArchivo.guardarTareas(listaTareas);
  }
}
