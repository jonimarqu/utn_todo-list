import Categoria from "./categoria";
import { Estado, Prioridad } from "../enums";

/**
 * Representa una tarea dentro de la aplicación.
 * Las tareas pueden incluir detalles como título, descripción, fechas, prioridad y etiquetas.
 */
export default class Tarea {
	private avance: number;
	private estado: Estado;
	private etiquetas: string[];
	private activo: boolean;
	private fechaCompletado: Date | undefined;

	/**
	 * Crea una nueva instancia de una tarea.
	 * @param id - Identificador único de la tarea.
	 * @param titulo - Título de la tarea.
	 * @param descripcion - Descripción detallada de la tarea.
	 * @param fechaCreacion - Fecha en que se creó la tarea.
	 * @param fechaVencimiento - Fecha límite para completar la tarea.
	 * @param prioridad - Nivel de prioridad de la tarea.
	 * @param categoria - Categoría a la que pertenece la tarea.
	 */
	constructor(
		private id: number,
		private titulo: string,
		private descripcion: string,
		private fechaCreacion: Date,
		private fechaVencimiento: Date,
		private prioridad: Prioridad,
		private categoria: Categoria
	) {
		this.avance = 0;
		this.estado = Estado.PENDIENTE;
		this.etiquetas = [];
		this.activo = true;
	}
	public getId(): number {
		return this.id;
	}

	public getTitulo(): string {
		return this.titulo;
	}

	public getDescripcion(): string {
		return this.descripcion;
	}

	public getfechaCreacion(): Date {
		return this.fechaCreacion;
	}

	public getFechaVencimiento(): Date {
		return this.fechaVencimiento;
	}

	public getFechaCompletado(): Date | undefined {
		return this.fechaCompletado;
	}

	public getPrioridad(): Prioridad {
		return this.prioridad;
	}

	public getCategoria(): Categoria {
		return this.categoria;
	}

	public getEstado(): Estado {
		return this.estado;
	}

    public getEtiquetas(): string[] {
        return this.etiquetas;
		}

    /**
     * Verifica si la tarea está activa.
     * @returns Verdadero si la tarea está activa, falso si no lo está.
     */
    public getActivo(): boolean {
        return this.activo;
    }

    /**
     * Establece el estado activo de la tarea.
     * @param activo - Nuevo estado activo.
     */
    public setActivo(activo: boolean): void {
        this.activo = activo;
    }

	/**
	 * Obtiene el porcentaje de avance de la tarea.
	 * @returns El porcentaje de avance (0, 25, 50, 75 o 100).
	 */
	public getAvance(): number {
		return this.avance;
	}

	/**
	 * Actualiza el porcentaje de avance de la tarea.
	 * @param nuevoAvance - El nuevo porcentaje de avance permitido (0, 25, 50, 75 o 100).
	 */
	actualizarAvance(nuevoAvance: number): void {
		if ([0, 25, 50, 75, 100].includes(nuevoAvance)) {
			this.avance = nuevoAvance;
		} else {
			throw new Error("Avance inválido. Los valores permitidos son 0, 25, 50, 75, 100.");
		}
	}

	/**
	 * Marca la tarea como completada y registra la fecha de finalización.
	 */
	marcarComoCompletada(): void {
		this.estado = Estado.COMPLETADA;
		this.fechaCompletado = new Date();
	}

	/**
	 * Crea una instancia de Tarea a partir de un JSON.
	 * @param json - Una cadena JSON que representa la tarea.
	 * @returns Una nueva instancia de Tarea.
	 */
	public static fromJSON(json: string): Tarea {
		const data = JSON.parse(json);
		const tarea: Tarea = new Tarea(
			data.id,
			data.titulo,
			data.descripcion,
			new Date(data.fechaCreacion),
			new Date(data.fechaVencimiento),
			data.prioridad,
			new Categoria(data.categoria.id, data.categoria.nombre)
		);
		tarea.avance = data.avance;
		tarea.estado = data.estado;
		tarea.etiquetas = data.etiquetas;
		tarea.activo = data.activo;
		return tarea;
	}
}
