import Estadisticas from "./estadisticas";
import TareaArchivo from "./tareaArchivo";
import Command from "../command/Command";
import Ordenador from "./ordenador";
import OrdenTitulo from "./ordenTitulo";
import Tarea from "./tarea";

export default class App {
  private static instance: App;
  private tareaArchivo: TareaArchivo;
  private estadisticas: Estadisticas;
  private estrategiaOrden: Ordenador;

  private constructor() {
    this.tareaArchivo = new TareaArchivo("../../BD/");
    this.estadisticas = new Estadisticas();
    this.estrategiaOrden = new OrdenTitulo();
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

  public getEstrategiaOrden(): Ordenador {
    return this.estrategiaOrden;
  }

  public setEstrategiaOrden(estrategiaOrden: Ordenador): void {
    this.estrategiaOrden = estrategiaOrden;
  }

  public ordenar(listaTareas: Array<Tarea>): Array<Tarea> {
    return this.estrategiaOrden.ordenar(listaTareas);
  }
}
