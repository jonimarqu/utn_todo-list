import { Command } from './Command';
import { Tarea } from "../clases/tarea";
import { TareasArchivo } from "../clases/tareasArchivo";

export class AgregarTareaCommand implements Command {
	constructor(private tarea: Tarea, private tareasArchivo: TareasArchivo) { }

	public execute(): void {
		this.tareasArchivo.guardarTarea([this.tarea]);
	}
}