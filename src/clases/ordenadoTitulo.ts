import Ordenador from "./ordenador";
import Tarea from "./tarea";
import TareaArchivo from "./tareaArchivo";

export default class OrdenadoTitulo implements Ordenador {
  constructor() {}

  public ordenar(tareaArchivo: TareaArchivo): void {
    let listaTareas: Array<Tarea> = tareaArchivo.cargarTarea();
    listaTareas.sort((tarea1, tarea2) => {
      if (tarea1.getTitulo() > tarea2.getTitulo) {
        return 1;
      } else if (tarea1.getTitulo() < tarea2.getTitulo()) {
        return -1;
      }
      return 0;
    });
    tareaArchivo.guardarTarea(listaTareas);
  }
}
