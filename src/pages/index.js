import '../pages/index.css';
import Card from '../components/Card.js';
import {popupEdit, popupEditOpener, popupAdd, profileName, profileDescription, formProfileElement, 
    popupInputName, popupInputDescription, popupAddOpener, formAddElement, elementCards, popupImage, 
    formStateObj, elements} from '../utils/constants.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const formEditValidator = new FormValidator(formStateObj, formProfileElement);
formEditValidator.enableValidation();

const formAddValidator = new FormValidator(formStateObj, formAddElement);
formAddValidator.enableValidation();

const userInfo = new UserInfo({
    userNameSelector: '.profile__name', 
    userDataSelector: '.profile__description'
});

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
    popupInputDescription.value = userDetails.data;
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