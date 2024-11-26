import { Tarea } from '../src/clases/tarea';
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

	it('should test guardarTarea', () => {
		const tarea1 = mock<Tarea>();
		tarea1.getId.mockReturnValueOnce(1);
		instance.guardarTarea(tarea1);
		expect(instance.cargarTarea(tarea1.getId())).toMatchObject<Tarea>({ ...tarea1 });
	});

	it('should test cargarTarea', () => {
		const tarea1 = mock<Tarea>();
		tarea1.getId.mockReturnValueOnce(1);
		instance.guardarTarea(tarea1);
		expect(instance.cargarTarea(tarea1.getId())).toMatchObject<Tarea>({ ...tarea1 });
	});

	it('should test eliminarTarea', () => {
		const tarea1 = mock<Tarea>();
		tarea1.getId.mockReturnValueOnce(1);
		instance.guardarTarea(tarea1);
		instance.eliminarTarea(tarea1.getId());
		expect(instance.cargarTarea(tarea1.getId())).toBeUndefined();
	});
});
