import '../pages/index.css';
import Card from '../components/Card.js';
import {popupEdit, profileAvatar, popupEditOpener, popupAdd, profileName, profileDescription, formProfileElement, 
    popupInputName, popupInputDescription, popupAddOpener, formAddElement, elementCards, popupImage, 
    formStateObj, popupUpdateButton, popupConfirmation, popupAvatarUpdate, formAvatarElement, 
    popupInputAvatar} from '../utils/constants.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';

const formEditValidator = new FormValidator(formStateObj, formProfileElement);
formEditValidator.enableValidation();

const formAddValidator = new FormValidator(formStateObj, formAddElement);
formAddValidator.enableValidation();

const formAvatarValidator = new FormValidator(formStateObj, formAvatarElement);
formAvatarValidator.enableValidation();

const api = new Api ({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-71',
    headers: {
        authorization: 'e123c2f1-8f0a-4bf0-aab3-5c98d8db455d',
        'Content-Type': 'application/json' //передача данных в формате json
    }
});

const userInfo = new UserInfo({
    name: '.profile__name', 
    about: '.profile__description',
    avatar: '.profile__avatar'
});

// console.log(`Значение userData: ${userData}`)
// console.log(`userInfo: ${JSON.stringify(userData)}`)

let elementList; //массив карточек
let currentUser; //попытки как-то использовать const не увенчались успехом. Только перезапись let

Promise.all([api.getUserInfo(), api.getInitialCards()])
.then(([userData, cardsData]) => {     
    userInfo.setUserInfo(userData.name, userData.about);
    userInfo.setUserAvatar(userData.avatar);
    currentUser = userData._id;
    // console.log(`Значение currentUser в Promise.all = ${currentUser}`) - возвращается id, всё ок
    // cardsData.forEach((item) => console.log(`Значение item в CardsData ${JSON.stringify(item)}`)) - тут всё ок
    // console.log(`Значение cardsData в Promise.all = ${cardsData}`) - возвращается кучка [object Object]
    elementList = new Section({
        items: cardsData,
        renderer: (items) => elementList.setItem(createCard(items))
    }, elementCards);
    elementList.addItem(cardsData);
})
.catch((err) => {
    console.log(`Ошибка загрузки данных с сервера: ${err}`);
})

function handleDeleteClick(cardItem, cardElement) {
    api.removeCard(cardItem)
    .then(() => {
        //вызываю метод удаления карточки из экз-ра класса Section
        elementList.handleDeleteCard(cardElement);
        popupWithConfirmation.close();
    })
    .catch((err) => {
        console.log(`Ошибка при удалении элемента: ${err}`);
    })
    .finally(() => popupWithConfirmation.savingData('Да'))
}

const popupWithConfirmation = new PopupWithConfirmation(popupConfirmation, handleDeleteClick);
popupWithConfirmation.setEventListeners();

function createCard(cardItem) {
    const card = new Card(cardItem, '.element-template', currentUser, {
        handleCardClick: (cardItem) => popupWithImage.open(cardItem.name, cardItem.link),
        // handleCardLike: (cardItem) => { 
        //     api.likeCard(cardItem)
        //     .then((res) => card.handleLikeCard(res))
        //     .catch((err) => console.log(`Ошибка при лайке элемента: ${err}`))
        // },
        // handleCardDislike: (cardItem) => {
        //     api.dislikeCard(cardItem)
        //     .then((res) => card.handleLikeCard(res))
        //     .catch((err) => console.log(`Ошибка при дизлайке элемента: ${err}`))
        // },
    }, popupWithConfirmation.open(cardItem, cardElement)); 
    return card.generateCard();
}



// console.log(`Значение popupWithConfirmation: ${popupWithConfirmation}`);
// console.log(`Значение popupWithConfirmation: ${JSON.stringify(popupWithConfirmation)}`);


const popupWithImage = new PopupWithImage(popupImage);
popupWithImage.setEventListeners();

const profilePopup = new PopupWithForm(popupEdit, {
    handleFormSubmit: (formValues) => {
        api.editUserInfo(formValues)
        .then((data) => {
            userInfo.setUserInfo(data.name, data.about);
            profilePopup.close();
        })
        .catch((err) => {
            console.log(`Ошибка загрузки данных пользователя: ${err}`);
        })
        .finally(() => {
            profilePopup.savingData('Сохранить');
        })
    }
})
profilePopup.setEventListeners();

popupEditOpener.addEventListener('click', () => {
    profilePopup.open();
    const userDetails = userInfo.getUserInfo();
    popupInputName.value = userDetails.name;
    popupInputDescription.value = userDetails.about;
    formEditValidator.setFormState();
});

const avatarUpdate = new PopupWithForm(popupAvatarUpdate, {
    handleFormSubmit: () => {
        api.editAvatar({avatar: popupInputAvatar.value})
        .then((res) => {
            userInfo.setUserAvatar(res.avatar);
        })
        .catch((err) => {
            console.log(`Ошибка загрузки аватара: ${err}`);
        })
        .finally(() => {
            avatarUpdate.close();
            avatarUpdate.savingData('Сохранить');
        })
    }
})
avatarUpdate.setEventListeners();

popupUpdateButton.addEventListener('click', () => {
    avatarUpdate.open();
    formAvatarValidator.setFormState();
})

const newCardPopup = new PopupWithForm(popupAdd, {
    handleFormSubmit: (formValues) => {
        api.addNewCard({
            name: formValues.name,
            link: formValues.link
        })
        .then((item) => {
        elementList.setItem(createCard(item)); //было formValues
        })
        .catch((err) => {
            console.log(`Ошибка при загрузке новой карточки: ${err}`)
        })
        .finally(() => {
        newCardPopup.close();
        newCardPopup.savingData('Сохранить');
        })
    }
});
newCardPopup.setEventListeners();

popupAddOpener.addEventListener('click', () => {
    newCardPopup.open();
    formAddValidator.setFormState();
});

// Previous code (just in case)
// function createCard(data) {
//     // создаём экземпляр класса
//     const card = new Card(data, '.element-template', {
//         handleCardClick: () => popupWithImage.open(data.name, data.link)            
//     });
//     const newCardElement = card.generateCard();
//     return newCardElement
// }

// const elementList = new Section({
//     items: [],
//     renderer: (items) => {
//         items.forEach((item) => {
//         elementList.setItem(createCard(item))
//     })
//     }
// }, elementCards);