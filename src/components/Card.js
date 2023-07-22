import { handleLikeRequest, handleDislikeRequest } from '../pages/index.js'
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

    _handleCardLike(cardItem) {
        handleLikeRequest(cardItem)
        .then((res) => this.handleLikeOperations(res))
        .catch((err) => console.log(`Ошибка при лайке элемента: ${err}`));
    }

    _handleCardDislike(cardItem) {
        handleDislikeRequest(cardItem)
        .then((res) => this.handleLikeOperations(res))
        .catch((err) => console.log(`Ошибка при дислайке элемента: ${err}`));
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

   
    

    // неудачные попытки
    // checkMyLike() {
    //     return this._likes.some((myLike) => {
    //         return myLike._id === this._currentUser;
    //     }); //some возвращает true / false
    // }

    //some возвращает true/false
    // checkLikeButton() {
    //     if (Array.isArray(this._likes) && this._likes.some((myLike) => myLike._id === this._currentUserId)) { //если true, закрашиваем лайк
    //         this._likeButton.classList.add('element__like-button_active');
    //         console.log(`currentUserId = ${this._currentUserId}`)
    //     } else {
    //         this._likeButton.classList.remove('element__like-button_active');
    //     }
    // } 
    // // checkLikeButton() {
    // //     if (this._likes.some((myLike) => myLike._id === this._currentUser)) { //если true, закрашиваем лайк
    // //         this._likeButton.classList.add('element__like-button_active');
    // //         console.log(`currentUser = ${this._currentUser}`)
    // //     } else {
    // //         this._likeButton.classList.remove('element__like-button_active');
    // //     }
    // // } 
     //устанавливаю геттер, чтобы во внешнем коде значение isLiked стало свойством объекта
    // get isLiked() {
    //     return this._isLiked;
    // }
    // handleLikeCard(cardLikes) {
    //     this._likes = Array.from(cardLikes);
    //     console.log(`Значение this._likes = ${this._likes}`);
    //     this._likesCounter.textContent = this._likes.length;
    //     this._checkLikeButton();

    //     // if (this.checkLikeButton()) {
    //     //     // this._likeButton.classList.remove('element__like-button_active');
    //     //     this._likesCounter.textContent = this._likes.length - 1; 
    //     // } else {
    //     //     // this._likeButton.classList.add('element__like-button_active');
    //     //     this._likesCounter.textContent = this._likes.length + 1;
    //     //     }
    //     // }
    // }
}
// checkMyLike() {
    //     if (this._likes.some((item) => item._id === this._currentUserId)) {
    //         console.log(this._likes);
    //         this._deleteButton.classList.add('element__like-button_active');
    //     } //some возвращает true / false
    // }

    // _checkLikeButton() {
    //     return this._likeButton.classList.contains('element__like-button_active');
    // } // return возвращает true / false
   

    // handleLikeCard(cardItem) {
    //     this._likes = cardItem.likes;

    //     if (this._checkLikeButton()) {
    //         this._likeButton.classList.remove('element__like-button_active');
    //         this._likesCounter.textContent = this._likes.length - 1; 
    //     } else {
    //         this._likeButton.classList.add('element__like-button_active');
    //         if (this._userId === this._currentUserId) {
    //             this._likesCounter.textContent = this._likes.length + 1;
    //         } else { 
    //             this._likesCounter.textContent = this._likes.length;
    //         }
    //     }
    // }
    // handleLikeCard() {
    //     this._isLiked = !this._isLiked;
    //     if (this._isLiked) {
    //         this._likeButton.classList.add('element__like-button_active');
    //         this._likesCounter.textContent = this._likes.length + 1; //если isLiked = true, увеличиваем счётчик лайков на 1
    //     } else {
    //         this._likeButton.classList.remove('element__like-button_active');
    //         if (this._likes.length === 1 && this._userId === this._currentUserId) {
    //             this._likesCounter.textContent = this._likes.length - 1;
    //         } else { 
    //             this._likesCounter.textContent = this._likes.length; //если isLiked = false, то -1 лайк
    //         }
    //     }
    // }
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
    
    // _handleOpenImagePopup() {
    //     this._handleCardClick(this._name, this._link);
    // }
     
    // //метод нужен для счётчика лайков, иначе функция будет огромной
    // checkLikeButton() {
    //     return this._likeButton.classList.add('element__like-button_active');
    // }
    
    // updateLikesNumber(cardLikes) {
    //     this._likes = cardLikes;
    //     this._likesCounter.textContent = this._likes.length;
    // }

    // updateLikeBtnState() {
    //     this._isLiked = !this._isLiked;
    // }