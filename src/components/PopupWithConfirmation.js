import Popup from './Popup.js';
export default class PopupWithConfirmation extends Popup {
    constructor(popup, handleRemoveCard) {
        super(popup);
        this._form = this._popup.querySelector('.popup__input-form');
        this._handleRemoveCard = handleRemoveCard;
        this._submitButton = this._popup.querySelector('.popup__submit-button');
    } 

    open(cardItem, cardElement) {
        this.cardItem = cardItem;  //объект карточки
        this.cardElement = cardElement;  //DOM-елемент
        super.open();
    }

    setEventListeners() {
        // super.setEventListeners();
        this._form.addEventListener('submit', (e) => {
            e.preventDefault();
            this._handleRemoveCard(this.cardItem, this.cardElement);
            this._submitButton.textContent = 'Удаление...';
        });
        super.setEventListeners();
    }
}

// console.log(`cardId в методе open класса PopupWithConfirmation = ${cardItem}`);
// console.log(`cardId в методе open класса PopupWithConfirmation = ${JSON.stringify(cardItem)}`);

// предыдущие попытки
// constructor(popup, {handleFormSubmit}) {
//     super(popup);
//     this._form = this._popup.querySelector('.popup__input-form');
//     this._handleFormSubmit = handleFormSubmit;
// }

// open(cardItem, cardElement) {
//     this._cardItem = cardItem;  //объект карточки
//     this._cardElement = cardElement;  //DOM-елемент
//     super.open();
// }

// setEventListeners() {
//     this._form.addEventListener('submit', (e) => {
//         e.preventDefault();
//         this._handleFormSubmit(this._cardItem, this._cardElement);
//     });
//     super.setEventListeners();
// }
//   // handleFormSubmit(apiConnect) {
    //     this._submitForm = apiConnect;
    // }  
     