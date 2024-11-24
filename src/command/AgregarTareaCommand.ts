import Command from './Command';
import { Tarea } from '../clases/tarea';
import { TareaArchivo } from '../clases/tareaArchivo';

export default class AgregarTareaCommand implements Command {
  constructor(private tarea: Tarea, private tareaArchivo: TareaArchivo) {}

  public execute(): void {
    this.tareaArchivo.guardarTarea([this.tarea]);
  }
}
