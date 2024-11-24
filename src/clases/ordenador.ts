import TareasArchivo from "./tareaArchivo";

export default interface Ordenador {
  ordenar(tareaArchivo: TareasArchivo): void;
}
