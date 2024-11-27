import Tarea from "../tarea";
export default interface Ordenador {
  ordenar(listaTareas: Array<Tarea>): Array<Tarea>;
}
