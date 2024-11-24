import { CustomFileClass } from "stdio";
import path from 'path';
import { Tarea } from "./tarea";

export default class TareasArchivo {
	private file:CustomFileClass = new CustomFileClass();
	constructor(private carpeta: string) { }

	public guardarTarea(tarea: Tarea): void {
		this.file.open(path.resolve(this.carpeta, `${tarea.id}.json`), 'w');
		this.file.writeToFile(JSON.stringify(tarea));
		this.file.close();
	}

	public async cargarTarea(id: number): Promise<Tarea> {
		this.file.open(path.resolve(this.carpeta, `${id}.json`), 'r');
		let tareaStr: string = '';
		let i = 1;
		for await (const line of this.file.readLine()) {
			tareaStr += line;
			i++;
		}
		let tarea: Tarea = Tarea.fromJSON(tareaStr);
		return tarea;
	}

	public async eliminarTarea(id: number): Promise<void> {
		let tarea: Tarea = await this.cargarTarea(id);
		tarea.activo = false;
		this.guardarTarea(tarea);
		return;
	}
}