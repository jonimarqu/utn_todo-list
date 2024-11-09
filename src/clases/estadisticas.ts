export default class Estadisticas {
  constructor() {}

  public calcularTareasCompletadas(listaTareas: Array<Tarea>): number {
    let tareasCompletadas: number = 0;

    for (let tarea of listaTareas) {
      if (tarea.getEstado() == Estado.COMPLETADA) {
        tareasCompletadas++;
      }
    }
    return tareasCompletadas;
  }

  public calcularTareasPendientes(listaTareas: Array<Tarea>): number {
    const totalTareas: number = listaTareas.length;
    const tareasCompletadas: number =
      this.calcularTareasCompletadas(listaTareas);

    return totalTareas - tareasCompletadas;
  }

  public tiempoDedicadoPorTarea(): Map<Tarea, number> {}
}
