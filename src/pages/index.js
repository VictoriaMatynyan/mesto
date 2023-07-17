import '../pages/index.css';
import Card from '../components/Card.js';
import {popupEdit, popupEditOpener, popupAdd, profileName, profileDescription, formProfileElement, 
    popupInputName, popupInputDescription, popupAddOpener, formAddElement, elementCards, popupImage, 
    formStateObj, elements, popupConfirmation, popupAvatarUpdate, formAvatarElement, 
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

Promise.all([api.getUserInfo()])
.then((data) => {
    console.log(data)
    userInfo.setUserInfo(data.name, data.about);
    userInfo.setUserAvatar(data.avatar)
})
.catch((err) => {
    console.log(`Ошибка загрузки данных: ${err}`);
})

// new Promise ((resolve, reject) => {
//     api.getUserInfo()
//     .then((res) => {
//         resolve(`Успех: ${res}`);
//     })
//     .catch((err) => {
//         reject(`Ошибка загрузки данных: ${err}`);
//     })
// })

// api.getUserInfo()
// .then((data) => {
//     console.log(`Значение 'data' в api.getUserInfo() = ${data}`)
//     userInfo.setUserInfo(data.name, data.about);
//     userInfo.setUserAvatar(data.avatar)
// })
// .catch((err) => {
//     console.log(`Ошибка загрузки данных: ${err}`);
// })

// api.getInitialCards();

const popupWithImage = new PopupWithImage(popupImage);
popupWithImage.setEventListeners();

const profilePopup = new PopupWithForm(popupEdit, {
    handleFormSubmit: (formValues) => {
        userInfo.setUserInfo(formValues);
        profilePopup.close();
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

// функция создания экземпляра класса Card и получения карточки: принимаем данные карточки как аргумент
function createCard(data) {
    // создаём экземпляр класса
    const card = new Card(data, '.element-template', {
        handleCardClick: () => popupWithImage.open(data.name, data.link)            
    });
    const newCardElement = card.generateCard();
    // возвращаем результат работы метода createCard
    return newCardElement
}

// отрисовываем карточки на странице
const elementList = new Section({
    items: elements,
    renderer: (item) => {
        elementList.setItem(createCard(item));
    }
}, elementCards);

elementList.addItem();

const newCardPopup = new PopupWithForm(popupAdd, {
    handleFormSubmit: (formValues) => {
        elementList.setItem(createCard(formValues));
        newCardPopup.close();
    }
});
newCardPopup.setEventListeners();

popupAddOpener.addEventListener('click', () => {
    newCardPopup.open();
    formAddValidator.setFormState();
});