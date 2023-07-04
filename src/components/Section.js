export default class Section {
    constructor({items, renderer}, containerSelector) {
        this._renderedItems = items; //массив данных, которые нужно добавить на страницу при инициализации класса
        this._renderer = renderer; //создание и отрисовка данных на странице
        this._containerSelector = containerSelector //убрала document.querySelector, чтобы в index.js поставить переменную, а не название класса
    }

    setItem(element) {
        this._containerSelector.prepend(element);
    }

    addItem() {
        this._renderedItems.forEach((item) => {
            this._renderer(item);
        });
    }
}