import Estadisticas from "./estadisticas";
import TareasArchivo from "./tareasArchivo";
import Command from "./command";

export default class App {
  private static instance: App;
  private tareasArchivo: TareasArchivo;
  private estadisticas: Estadisticas;

  private constructor() {
    this.tareasArchivo = new TareasArchivo();
    this.estadisticas = new Estadisticas();
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
}
