export default class Section {
    constructor({items, renderer}, containerSelector) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._containerSelector = document.querySelector(containerSelector)
    }

    setItem(element) {
        this._containerSelector.prepend(element);
    }

    clear() {
        this._containerSelector.innerHTML = ''; 
    }

    addItem(){
        this._clear();

        this._renderedItems.forEach((item) => {
            this._renderer(item);
        });
    }
}