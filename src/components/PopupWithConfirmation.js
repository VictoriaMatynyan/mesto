import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
    constructor(popup, handleFormSubmit) {
        super(popup);
        this._form = this._popup.querySelector('.popup__input-form');
        this._handleFormSubmit = handleFormSubmit;
    }

    open() {
        this.cardItem = cardItem;  //объект карточки
        this.cardElement = cardElement;  //DOM-елемент
        super.open();
    }

    setEventListeners() {
        this._form.addEventListener('submit', this._handleFormSubmit())
        super.setEventListeners();
    }
}