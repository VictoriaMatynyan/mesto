import {popupPicture, popupCaption} from './constants.js';
import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popup, data) {
        super(popup);
        this._image = data.image;
        this._description = data.description;
    }

    open() {
        super.open();
        popupPicture.src = this._image;
        popupCaption.textContent = this._description;
    }
}