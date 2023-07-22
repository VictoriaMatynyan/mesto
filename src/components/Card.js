export default class Card {
    constructor(data, templateSelector, currentUser, callbacks) {
        this._data = data;
        this._name = this._data.name;
        this._link = this._data.link;
        this._userId = data.owner._id; //получаем доступ к свойству id в свойстве owner у объекта (мой id)
        this._currentUserId = currentUser._id; //id для проверки наличия моего лайка
        this._currentUser = currentUser;
        this._likes = data.likes; //массив пользователей, лайкнувших карточку
        this._img = null;
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
        //проверка на наличие моего лайка
        if (this._likes.some((item) => item._id === this._currentUser)) {
            this._likeButton.classList.add('element__like-button_active');
        }
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
        this._img.addEventListener('click', () => {
            this._handleCardClick(this._data); 
        });

        this._likeButton.addEventListener('click', () =>{
            if (this._checkLikeButton()) {
                this._handleCardDislike(this._data);
            } else {
                this._handleCardLike(this._data);
            }
        });
        
        this._deleteButton.addEventListener('click', () => {
            this._handleCardDelete(this._data, this._element);
        });
    }

    _handleCardLike() {
        handleLikeRequest(this._data);
    }

    _handleCardDislike() {
        handleDislikeRequest(this._data);
    }

    //метод нужен для счётчика лайков, иначе функция будет огромной
    _checkLikeButton() {
        return this._likeButton.classList.contains('element__like-button_active');
    }

    handleLikeOperations(cardItems) {
        this._likes = cardItems.likes;
        if (this._checkLikeButton()) {
            this._likeButton.classList.remove('element__like-button_active');
            this._likesCounter.textContent = parseInt(this._likesCounter.textContent) - 1;
        } else {
          this._likeButton.classList.add('element__like-button_active');
          this._likesCounter.textContent = parseInt(this._likesCounter.textContent) + 1;
        }
    }
}