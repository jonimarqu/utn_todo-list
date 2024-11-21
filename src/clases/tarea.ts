import Categoria from "./categoria";
export enum Prioridad {
    ALTA = 1,
    MEDIA = 2,
    BAJA = 3,
}

export enum Estado {
    PENDIENTE = 'Pendiente',
    COMPLETADA = 'Completada'
}

export default class Tarea {
    private avance: number = 0;
    private estado: Estado = Estado.PENDIENTE;
    private etiquetas: string[] = [];
    public activo: boolean = true;

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
    public getTitulo():string{
        return this.titulo;
    }
    public getDescripcion():string{
        return this.descripcion;
    }
    public getfechaCreacion():Date{
        return this.fechaCreacion;
    }
    public getFechaVencimiento():Date{
        return this.fechaVencimiento;
    }
    public getPrioridad():Prioridad{
        return this.prioridad;
    }
    public getCategoria():Categoria{
        return this.categoria;
    }
    public getEstado():Estado{
        return this.estado;
    }
    public getEtiquetas():string[]{
        return this.etiquetas;
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
