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
