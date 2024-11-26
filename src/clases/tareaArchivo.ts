import { CustomFileClass } from 'stdio';
import path from 'path';
import { Tarea } from './tarea';
/**
 * Clase que maneja el archivo de las Tareas y su acceso.
 */
export default class TareaArchivo {
	private file: CustomFileClass = new CustomFileClass();
	private archivo: Map<number, Tarea> = new Map();

	constructor(private carpeta: string) { }

	/**
	 * Actualiza el archivo con la tarea pasada por parámetro.
	 * 
	 * @param tarea Tarea a actualizar en el archivo
	 */
	private actualizarArchivo(tarea: Tarea): void {
		this.archivo.set(tarea.getId(), tarea);
	}

	/**
	 * Guarda la tarea pasada por parámetro en el archivo.
	 * 
	 * @param tarea Tarea a guardar en el archivo
	 */
	public guardarTarea(tarea: Tarea): void {
		this.file.open(path.resolve(this.carpeta, `${tarea.getId()}.json`), 'w');
		this.file.writeToFile(JSON.stringify(tarea));
		this.file.close();
		this.actualizarArchivo(tarea);
	}

	/**
	 * Carga la Tarea requerida desde el directorio.
	 * 
	 * @param id id de la Tarea a cargar
	 * @returns Tarea cargada desde el directorio
	 */
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

	/**
	 * Carga las tareas desde el archivo.
	 * 
	 * @returns Mapa con todas las tareas
	 */
	public cargarTareas(): Map<number, Tarea> {
		return this.archivo;
	}

	/**
	 * Aplica borrado lógico a una Tarea.
	 * 
	 * @param id id de la Tarea a eliminar
	 */
	public async eliminarTarea(id: number): Promise<void> {
		let tarea: Tarea = await this.cargarTarea(id);
		tarea.setActivo(false);
		this.guardarTarea(tarea);
		return;
	}
}
