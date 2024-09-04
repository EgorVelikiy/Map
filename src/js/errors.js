export default class ErrorRepository {
	constructor(name) {
		this.name = name
		this.errors = new Map();
		this.errors.set(400, 'неправильный, некорректный запрос');
		this.errors.set(404, 'не найдено');
		this.errors.set(500, 'ошибка на стороне сервера');
		this.errors.set(501, 'метод запроса не поддерживается')
	};

	translate(code) {
		if(this.errors.has(code)) {
			return this.errors.get(code)
		} else {
			return 'Unknown error'
		}
	};
}