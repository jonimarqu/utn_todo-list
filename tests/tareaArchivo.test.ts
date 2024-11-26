import { Categoria, Tarea } from '../src/clases/tarea';
import TareaArchivo from '../src/clases/tareaArchivo';
import { mock } from 'jest-mock-extended';

describe('Test de tareaArchivo', () => {
	let instance: TareaArchivo;

	beforeEach(() => {
		instance = new TareaArchivo('./BD/');
	});

	it('should test constructor', () => {
		expect(instance).toBeInstanceOf(TareaArchivo);
	});

	it('should test guardarTarea', async () => {
		const tarea1 = new Tarea(
			1,
			"test",
			"test",
			new Date(),
			new Date(),
			1,
			new Categoria(1, "test")
		  );
		instance.guardarTarea(tarea1);
		const resultado: Tarea = await instance.cargarTarea(tarea1.getId())
		expect(resultado).toEqual(tarea1);
	});

	it('should test cargarTarea', async () => {
		const tarea1 = new Tarea(
			1,
			"test",
			"test",
			new Date(),
			new Date(),
			1,
			new Categoria(1, "test")
		  );
		instance.guardarTarea(tarea1);
		expect(await instance.cargarTarea(tarea1.getId())).toEqual(tarea1);
	});

	it('should test eliminarTarea', async () => {
		const tarea1 = new Tarea(
			1,
			"test",
			"test",
			new Date(),
			new Date(),
			1,
			new Categoria(1, "test")
		  );
		  const tareaEsperada = new Tarea(
			1,
			"test",
			"test",
			new Date(),
			new Date(),
			1,
			new Categoria(1, "test")
		  );
		  tareaEsperada.setActivo(false)
		instance.guardarTarea(tarea1);
		await instance.eliminarTarea(tarea1.getId());
		expect(await instance.cargarTarea(tarea1.getId())).toEqual(tareaEsperada);
	});
});
