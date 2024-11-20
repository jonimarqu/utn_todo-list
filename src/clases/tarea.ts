enum Prioridad {
    ALTA = 'Alta',
    MEDIA = 'Media',
    BAJA = 'Baja'
}

enum Estado {
    PENDIENTE = 'Pendiente',
    COMPLETADA = 'Completada'
}

class Categoria {
    constructor(
        public id: string,
        public nombre: string
    ) {}
}

class Tarea {
    public avance: number = 0;
    public estado: Estado = Estado.PENDIENTE;
    public etiquetas: string[] = [];

    constructor(
        public id: number,
        public titulo: string,
        public descripcion: string,
        public fechaCreacion: Date,
        public fechaVencimiento: Date,
        public prioridad: Prioridad,
        public categoria: Categoria
    ) {}

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
}
