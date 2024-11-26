import Categoria from "../src/clases/categoria";

describe("Test de la clase Categoria", () => {
  let instance: Categoria;

  beforeEach(() => {
    instance = new Categoria(1, "test");
  });

  test("Pruebo que se cree una isntancia de Categoria", () => {
    expect(instance).toBeInstanceOf(Categoria);
  });

  test("Pruebo que el metodo getId devuelva el valor correcto", () => {
    expect(instance.getId()).toEqual(1);
  });

  test("Pruebo que el metodo getNombre devuelva el valor correcto", () => {
    expect(instance.getNombre()).toEqual("test");
  });

  test("Pruebo que el metodo setId cambie el valor correctamente", () => {
    instance.setId(2);
    expect(instance.getId()).toEqual(2);
  });

  test("Pruebo que el metodo setNombre cambie el valor correctamente", () => {
    instance.setNombre("test2");
    expect(instance.getNombre()).toEqual("test2");
  });
});
