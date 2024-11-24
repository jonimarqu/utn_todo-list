import Ordenador from "./ordenador";
import Tarea from "./tarea";
import TareaArchivo from "./tareaArchivo";

export default class OrdenadoVencimiento implements Ordenador {
  constructor() {}

  public ordenar(tareaArchivo: TareaArchivo): void {
    let listaTareas: Array<Tarea> = tareaArchivo.cargarTarea();
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
    tareaArchivo.guardarTarea(listaTareas);
  }
}
