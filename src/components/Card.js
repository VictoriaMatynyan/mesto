export default class Card {
    constructor(data, templateSelector, {handleCardClick, isOwn, handleCardDelete}) {
        this._name = data.name;
        this._link = data.link;
        this._img = null;
        this._likeButton = null;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._isOwn = isOwn;  //булевый параметр для проверки моей/не моей карточки
        this._handleCardDelete = handleCardDelete;
    }

    _getTemplate() {
        const elementTemplate = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.element')
        .cloneNode(true)

        return elementTemplate;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._img = this._element.querySelector('.element__image');
        this._img.src = this._link;
        this._img.alt = this._name;
        this._likeButton = this._element.querySelector('.element__like-button');
        this._element.querySelector('.element__caption').textContent = this._name;
        this._setEventListeners();

        return this._element;
    }

    _setEventListeners() {
        this._likeButton.addEventListener('click', () =>{
            this._handleLikeCard();
        });
        
        //добавляю на функцию удаления карточки условие, чтобы удалялись только мои карточки
        if(this._isOwn) {
            this._element.querySelector('.element__delete-button').addEventListener('click', () => {
                this._handleDeleteCard(); 
            });
        }

        this._img.addEventListener('click', () => {
            this._handleCardClick();
        });
    }

    _handleOpenImagePopup() {
        this._handleCardClick(this._name, this._link,);
    }

    _handleDeleteCard() {
        const delItem = this._element;
        delItem.remove();
        this._element = null;
    }
    
    _handleLikeCard() {
        this._likeButton.classList.toggle('element__like-button_active');
    }
}