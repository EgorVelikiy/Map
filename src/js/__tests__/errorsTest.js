import ErrorRepository from '../errors'

test('Существующая ошибка', () => {
	const repo = new ErrorRepository('ошибки');
	expect(repo.translate(404)).toBe('не найдено');
});

test('Несуществуюшая ошибка', () => {
	const repo = new ErrorRepository('ошибки');
	expect(repo.translate(123)).toBe('Unknown error');
});