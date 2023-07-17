import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popup) {
        super(popup);
        this._image = this._popup.querySelector('.popup__image');
        this._description = this._popup.querySelector('.popup__caption');
    }

    open(name, link) {
        this._image.alt = name;
        this._image.src = link;
        this._description.textContent = name;
        super.open(); //super лучше перенести из начала в конец
    }
}