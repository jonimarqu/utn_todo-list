import { Command } from "./Command";
import { Tarea } from "../clases/tarea";
import { TareasArchivo } from "../clases/tareasArchivo";

export class EditarTareaCommand implements Command {
	constructor(private tareaId: number, private datos: Tarea, private tareasArchivo: TareasArchivo) { }

	public execute(): void {
		const tarea = this.tareasArchivo.cargarTareaPorId(this.tareaId);
		if (tarea) {
			Object.assign(tarea, this.datos);
			this.tareasArchivo.guardarTarea(tarea);
		}
	}
}