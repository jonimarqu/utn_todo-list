export default class Categoria {
    constructor(
        private id: number,
        private nombre: string
    ) { }
    public getId(): number {
        return this.id;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public setId(id: number) {
        this.id = id;
    }
    public setNombre(nombre: string) {
        this.nombre = nombre;
    }
}



