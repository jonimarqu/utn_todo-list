import Command from './Command';
import { Tarea } from '../clases/tarea';
import { TareaArchivo } from '../clases/tareaArchivo';

export default class EliminarTareaCommand implements Command {
  constructor(private tarea: Tarea, private tareaArchivo: TareaArchivo) {}

  public execute(): void {
    this.tareaArchivo.eliminarTarea(this.tarea.getId());
  }
}
