import {popupPicture, popupCaption, closeButton} from '../scripts/constants.js'

export default class Popup {
    constructor(popup) {
        this._popup = popup
    }

    open() { 
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose()); //по аналогии с функцией открытия попапа addPopupStatus()
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose()); //по аналогии с функцией закрытия попапа removePopupStatus()
        // popupPicture.src = '';
        // popupCaption.textContent = '';
    }

    _handleEscClose() {
        document.addEventListener('keydown', (evt) => {
            if (evt.key === 'Escape') {
                this.close(); 
              };
        });
    }

    setEventListeners() {
        closeButton.addEventListener('click', () => {
            this.close();
        });

        this._popup.addEventListener('mousedown', (evt) => {
            if (evt.target === evt.currentTarget) {
                this.close();
                this._handleEscClose();
            }
        });
    }
}