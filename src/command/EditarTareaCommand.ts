import Command from './Command';
import { Tarea } from '../clases/tarea';
import { TareaArchivo } from '../clases/tareaArchivo';

export default class EditarTareaCommand implements Command {
  constructor(private tareaArchivo: TareaArchivo, private tareaEditada: Tarea) {}

  public execute(): void {
    const tarea: Tarea | undefined = this.tareaArchivo.cargarTareaPorId(
      this.tareaEditada.getId()
    );
    if (tarea) {
      Object.assign(tarea, this.tareaEditada);
      this.tareaArchivo.guardarTarea(tarea);
    }
  }
}
