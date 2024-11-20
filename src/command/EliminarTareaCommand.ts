import { Command } from "./Command";
import { Tarea } from "../clases/tarea";
import { TareasArchivo } from "../clases/tareasArchivo";
export class EliminarTareaCommand implements Command{
	constructor(private tareaId: number, private tareasArchivo: TareasArchivo) { }

	public execute(): void {
		this.tareasArchivo.eliminarTarea(this.tareaId);
	}
}