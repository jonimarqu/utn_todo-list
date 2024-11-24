import Estadisticas from "./estadisticas";
import TareaArchivo from "./tareaArchivo";
import Command from "./command";
import Ordenador from "./ordenador";
import OrdenadoTitulo from "./ordenadoTitulo";

export default class App {
  private static instance: App;
  private tareaArchivo: TareaArchivo;
  private estadisticas: Estadisticas;
  private estrategiaOrdenado: Ordenador;

  private constructor() {
    this.tareaArchivo = new TareaArchivo();
    this.estadisticas = new Estadisticas();
    this.estrategiaOrdenado = new OrdenadoTitulo();
  }

  static getInstance(): App {
    if (!App.instance) {
      App.instance = new App();
    }
    return App.instance;
  }

  public ejecutarComando(cmd: Command): void {
    try {
      cmd.execute();
    } catch (error) {}
  }

  public getEstrategiaOrdenado(): Ordenador {
    return this.estrategiaOrdenado;
  }

  public setEstrategiaOrdenado(estrategiaOrdenado: Ordenador): void {
    this.estrategiaOrdenado = estrategiaOrdenado;
  }

  public ordenar(): void {
    this.estrategiaOrdenado.ordenar(this.tareaArchivo);
  }
}
