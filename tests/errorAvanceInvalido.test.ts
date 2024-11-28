import ErrorAvanceInvalido from "../src/clases/errors/errorAvanceInvalido";

describe("Tests de ErrorAvanceInvalido", () => {
  let instance: ErrorAvanceInvalido;

  beforeEach(() => {
    instance = new ErrorAvanceInvalido();
  });

  test("Pruebo que el mensaje sea el correcto", () => {
    expect(instance.getMessage()).toEqual(
      "Avance inválido. Los valores permitidos son 0, 25, 50, 75, 100."
    );
  });
});
