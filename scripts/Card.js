class Card {
    constructor(data, templateSelector, openPopupImg) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._openPopupImg = openPopupImg;
    }

    _getTemplate() {
        const elementTemplate = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.element')
        .cloneNode(true)

        return elementTemplate
    }

    generateCard() {
        this._element = this._getTemplate();
                
        this._element.querySelector('.element__image').src = this._link;
        this._element.querySelector('.element__image').alt = this._name;
        this._element.querySelector('.element__caption').textContent = this._name;

        this._setEventListeners();

        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.element__like-button').addEventListener('click', () =>{
            this._handleLikeCard();
        })
        
        this._element.querySelector('.element__delete-button').addEventListener('click', () => {
            this._handleDeleteCard();
        });

        this._element.querySelector('.element__image').addEventListener('click', () => {
            this._handleOpenImagePopup();
        });
    }

    _handleOpenImagePopup() {
        this._openPopupImg(this._link, this._name);
    }

    _handleDeleteCard() {
        const delItem = this._element.closest('.element');
        delItem.remove();
    }
    

    _handleLikeCard() {
        this._element.querySelector('.element__like-button').classList.toggle('element__like-button_active');
    }

}

export default Card