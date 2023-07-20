export default class Card {
    constructor(data, templateSelector, currentUser, callbacks) {
        this._data = data;
        this._name = this._data.name;
        this._link = this._data.link;
        this._cardId = data._id; //получаем доступ к id карточки
        this._userId = data.owner._id; //получаем доступ к свойству id в свойстве owner у объекта (мой id)
        this._currentUserId = currentUser._id; //получаем id любого другого пользователя
        this._currentUser = currentUser;
        this._likes = data.likes; //массив пользователей, лайкнувших карточку
        this._isLiked = false;
        this._img = null;
        this._likeButton = null;
        this._templateSelector = templateSelector;

        //собираю все колбэки в один объект (в будущем их может стать ещё больше)
        this._handleCardClick = callbacks.handleCardClick;
        this._handleCardLike = callbacks.handleCardLike;
        this._handleCardDislike = callbacks.handleCardDislike;
        this._handleCardDelete = callbacks.handleCardDelete;
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
        this._deleteButton = this._element.querySelector('.element__delete-button');
        this._caption = this._element.querySelector('.element__caption')
        this._likeButton = this._element.querySelector('.element__like-button');
        this._likesCounter = this._element.querySelector('.element__likes-counter');
        //делаем иконку удаления только на моих карточках сразу при их генерации
        if (this._userId !== this._currentUser) {
            this._deleteButton.style.display = 'none';
        }
        this._caption.textContent = this._name;
        this._likesCounter.textContent = this._likes.length;
        this._setEventListeners();

        return this._element;
    }

    _setEventListeners() {
        this._likeButton.addEventListener('click', () =>{
            this.handleLikeCard(); //this._cardId
        });
        
        this._deleteButton.addEventListener('click', () => {
            this._handleCardDelete(this._data, this._element);
        });

        this._img.addEventListener('click', () => {
            this._handleCardClick(); 
        });
    }
    
    _handleOpenImagePopup() {
        this._handleCardClick(this._name, this._link,);
    }
   
    handleLikeCard() {
        this._isLiked = !this._isLiked;
        if (this._isLiked) {
            this._likeButton.classList.add('element__like-button_active');
            this._likesCounter.textContent = this._likes.length + 1; //если isLiked = true, увеличиваем счётчик лайков на 1
        } else {
            this._likeButton.classList.remove('element__like-button_active');
            if (this._likes.length === 1 && this._userId === this._currentUserId) {
                this._likesCounter.textContent = this._likes.length - 1;
            } else { 
                this._likesCounter.textContent = this._likes.length; //если isLiked = false, то -1 лайк
            }
        }
    }
    // handleLikeCard() {
    //     if (this._isLiked = !this._isLiked) {
    //         this._likeButton.classList.add('element__like-button_active');
    //         this._likesCounter.textContent = this._likes.length + 1; //если isLiked = true, увеличиваем счётчик лайков на 1
    //     } else if (this._isLiked && this._likes.length === 1) {
    //         this._likeButton.classList.remove('element__like-button_active');
    //         this._likesCounter.textContent = parseInt('0');
    //     } else {
    //         this._likeButton.classList.remove('element__like-button_active');
    //         this._likesCounter.textContent = this._likes.length - 1; //если isLiked = false, то -1 лайк
    //     }
    // }
}