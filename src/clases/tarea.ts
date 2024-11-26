import Categoria from "./categoria";
import { Estado } from "../enums/Estado";
import { Prioridad } from "../enums/Prioridad";
export default class Tarea {
    private avance: number = 0;
    private estado: Estado = Estado.PENDIENTE;
    private etiquetas: string[] = [];
    private activo: boolean = true;
    private fechaCompletado: Date | undefined;

    constructor(
        private id: number,
        private titulo: string,
        private descripcion: string,
        private fechaCreacion: Date,
        private fechaVencimiento: Date,
        private prioridad: Prioridad,
        private categoria: Categoria
    ) {}

    public getId():number{
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
	public getActivo(): boolean {
		return this.activo;
	}
	public setActivo(activo: boolean): void {
		this.activo = activo;
	}

    actualizarAvance(nuevoAvance: number): void {
        if ([0, 25, 50, 75, 100].includes(nuevoAvance)) {
            this.avance = nuevoAvance;
        } else {
            console.error("Avance inválido. Los valores permitidos son 0, 25, 50, 75, 100.");
        }
    }

    marcarComoCompletada(): void {
        this.estado = Estado.COMPLETADA;
        this.fechaCompletado = new Date();
    }

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

export { Tarea, Prioridad, Estado, Categoria };