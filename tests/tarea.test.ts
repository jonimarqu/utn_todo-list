import Tarea from "../src/clases/tarea"
import { Estado } from '../src/enums/Estado';
import { Prioridad } from '../src/enums/Prioridad';
import Categoria from '../src/clases/categoria';
import { mock } from 'jest-mock-extended';
describe('Testeo la clase Tarea', () => {
	let tarea: Tarea;
	const categoriaMock = mock<Categoria>();
	beforeEach(() => {
		categoriaMock.getId.mockReturnValue(123);
		categoriaMock.getNombre.mockReturnValue("trabajo");

		tarea = new Tarea(
			1,
			"Tarea Test",
			"Descripción de la tarea",
			new Date("2024-01-01"),
			new Date("2024-12-31"),
			Prioridad.ALTA,
			categoriaMock
		);
	});
	categoriaMock.getId.mockReturnValue(123);
	categoriaMock.getNombre.mockReturnValue("trabajo");

	it('Deberia crear una nueva instancia de Tarea con los valores correctos', () => {
		expect(tarea.getId()).toBe(1);
		expect(tarea.getTitulo()).toBe("Tarea Test");
		expect(tarea.getDescripcion()).toBe('Descripción de la tarea');
		expect(tarea.getFechaVencimiento()).toEqual(new Date('2024-12-31'));
		expect(tarea.getPrioridad()).toBe(Prioridad.ALTA);
		expect(tarea.getCategoria().getNombre()).toBe('trabajo');
		expect(tarea.getEstado()).toBe(Estado.PENDIENTE);
	});

	it('Deberia actualizar avance con valores validos', () => {
		tarea.actualizarAvance(25);
		expect(tarea['avance']).toBe(25);

		tarea.actualizarAvance(40); // No es un valor permitido
		expect(tarea['avance']).toBe(25); // Debe seguir en 25
	});

	it('deberia marcar como completada cuando llamas a marcarComoCompletada', () => {
		tarea.marcarComoCompletada();
		expect(tarea.getEstado()).toBe(Estado.COMPLETADA);
	});

	it('deberia crear una instancia de tarea desde JSON', () => {
		const json = JSON.stringify({
			id: 1,
			titulo: 'Tarea Test',
			descripcion: 'Descripción de la tarea',
			fechaCreacion: '2024-01-01T00:00:00Z',
			fechaVencimiento: '2024-12-31T00:00:00Z',
			prioridad: Prioridad.ALTA,
			categoria: { id: 1, nombre: 'Categoria Test' },
			avance: 50,
			estado: Estado.PENDIENTE,
			etiquetas: ['etiqueta1', 'etiqueta2'],
			activo: true,
		});

		const tareaFromJSON = Tarea.fromJSON(json);
		expect(tareaFromJSON.getId()).toBe(1);
		expect(tareaFromJSON.getTitulo()).toBe('Tarea Test');
		expect(tareaFromJSON.getPrioridad()).toBe(Prioridad.ALTA);
		expect(tareaFromJSON.getEstado()).toBe(Estado.PENDIENTE);
	});
});

