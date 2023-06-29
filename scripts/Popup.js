import {popupPicture, popupCaption, closeButton} from '../scripts/constants.js'

export default class Popup {
    constructor(popup) {
        this._popup = document.querySelector(popup)
    }

    open() { 
        this._popup.classList.add('popup_opened');
    }

    close() {
        this._popup.classList.remove('popup_opened');
        popupPicture.src = '';
        popupCaption.textContent = '';
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
            }
        });
        this._handleEscClose();
    }
}