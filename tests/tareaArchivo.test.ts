import Tarea from '../src/clases/tarea';
import Categoria from '../src/clases/categoria';
import TareaArchivo from '../src/clases/tareaArchivo';
import { mock } from 'jest-mock-extended';

describe('Test de tareaArchivo', () => {
	let instance: TareaArchivo;
	const tarea1 = new Tarea(
		1,
		"test",
		"test",
		new Date(1/1/2000),
		new Date(1/1/2000),
		1,
		new Categoria(1, "test")
	  );

	beforeEach(() => {
		instance = new TareaArchivo('../DB/');
	});

	it('should test constructor', () => {
		expect(instance).toBeInstanceOf(TareaArchivo);
	});

	it('should test guardarTarea', async () => {
		instance.guardarTarea(tarea1);
		const resultado: Tarea = await instance.cargarTarea(tarea1.getId())
		expect(resultado).toEqual(tarea1);
	});

	it('should test cargarTarea', async () => {
		instance.guardarTarea(tarea1);
		expect(await instance.cargarTarea(tarea1.getId())).toEqual(tarea1);
	});

	test("Pruebo que el metodo cargarTareas devuelva el valor de this.archivo correctamente", () => {
		instance.guardarTarea(tarea1)
		const tarea2 = new Tarea(
			2,
			"test",
			"test",
			new Date(1/1/2000),
			new Date(1/1/2000),
			1,
			new Categoria(1, "test")
		  );
		instance.guardarTarea(tarea2)
		const mapEsperado = new Map()
		mapEsperado.set(1,tarea1)
		mapEsperado.set(2,tarea2)
		expect(instance.cargarTareas()).toEqual(mapEsperado)
	})

	test("Pruebo que el metodo cargarArrayTareas devuelva el valor de this.archivo como un Array", () => {
		instance.guardarTarea(tarea1);
		const tarea2 = new Tarea(
		  2,
		  "test",
		  "test",
		  new Date(1 / 1 / 2000),
		  new Date(1 / 1 / 2000),
		  1,
		  new Categoria(1, "test")
		);
		instance.guardarTarea(tarea2);
		const arrayEsperado = new Array<Tarea>();
		arrayEsperado.push(tarea1);
		arrayEsperado.push(tarea2);
		expect(instance.cargarArrayTareas()).toEqual(arrayEsperado);
	  });

	it('should test eliminarTarea', async () => {
		const tareaElim = new Tarea(
			1,
			"test",
			"test",
			new Date(1/1/2000),
			new Date(1/1/2000),
			1,
			new Categoria(1, "test")
		  );
		  const tareaEsperada = new Tarea(
			1,
			"test",
			"test",
			new Date(1/1/2000),
			new Date(1/1/2000),
			1,
			new Categoria(1, "test")
		  );
		  tareaEsperada.setActivo(false)
		instance.guardarTarea(tareaElim);
		await instance.eliminarTarea(tareaElim.getId());
		expect(await instance.cargarTarea(tareaElim.getId())).toEqual(tareaEsperada);
	});
});
