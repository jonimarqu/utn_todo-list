import Estadisticas from './estadisticas';
import TareaArchivo from './tareaArchivo';
import { Ordenador, OrdenTitulo } from './ordenador';
import Tarea from './tarea';

export default class App {
	private static instance: App;
	private tareaArchivo: TareaArchivo;
	private estadisticas: Estadisticas;
	private estrategiaOrden: Ordenador;

	private constructor(DBdir: string) {
		this.tareaArchivo = new TareaArchivo(DBdir);
		this.estadisticas = new Estadisticas();
		this.estrategiaOrden = new OrdenTitulo();
	}

	/**
	 * patron singleton, permite asegurarnos de que una clase tenga una única instancia.
	 *
	 * @returns la primer instancia de App.
	 */
	static getInstance(DBdir: string): App {
		if (!App.instance) {
			App.instance = new App(DBdir);
		}
		return App.instance;
	}

	public getEstrategiaOrden(): Ordenador {
		return this.estrategiaOrden;
	}

	public setEstrategiaOrden(estrategiaOrden: Ordenador): void {
		this.estrategiaOrden = estrategiaOrden;
	}

	/**
	 * Ordena una lista de Tarea dependiendo de la estrategia de orden que tiene App.
	 *
	 * @param listaTareas la lista a ordenar.
	 * @returns una lista de Tarea ordenada.
	 */
	public ordenar(listaTareas: Array<Tarea>): Array<Tarea> {
		return this.estrategiaOrden.ordenar(listaTareas);
	}
}
