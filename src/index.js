import '../src/pages/index.css';
import Card from '../src/components/Card.js';
import {popupEdit, popupEditOpener, popupAdd, profileName, profileDescription, formProfileElement, 
    popupInputName, popupInputDescription, popupAddOpener, formAddElement, elementCards, popupImage, 
    formStateObj, elements} from '../src/components/constants.js';
import FormValidator from '../src/components/FormValidator.js';
import Section from '../src/components/Section.js';
import PopupWithImage from '../src/components/PopupWithImage.js';
import PopupWithForm from '../src/components/PopupWithForm.js';
import UserInfo from '../src/components/UserInfo.js';

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
    popupInputName.value = profileName.textContent;
    popupInputDescription.value = profileDescription.textContent;
    formEditValidator.setFormState();
});

// отрисовываем карточки на странице
const elementList = new Section({
    items: elements,
    renderer: (item) => {
        const card = new Card(item, '.element-template', {
            handleCardClick: () => popupWithImage.open(item.name, item.link)            
        });
        const newCardElement = card.generateCard();
        elementCards.prepend(newCardElement);
    }
}, elementCards);

elementList.addItem();

//функция создания новой карточки 
function createCard(data) {
    const card = new Card(data, '.element-template', {
        handleCardClick: () => popupWithImage.open(data.name, data.link)
    });
    const newCardItem = card.generateCard();
    elementCards.prepend(newCardItem);
}

const newCardPopup = new PopupWithForm(popupAdd, {
    handleFormSubmit: (formValues) => {
        const inputData = {
        name: formValues.placeInputName,
        link: formValues.placeInputDescription
        };
        createCard(inputData);
        newCardPopup.close();
    }
});
newCardPopup.setEventListeners();

popupAddOpener.addEventListener('click', () => {
    newCardPopup.open();
    formAddValidator.setFormState();
});


// старый код just in case (of emergency)

// function closePopupByEsc(evt) {
//     if (evt.key === 'Escape') {
//       const openedPopup = document.querySelector('.popup_opened');
//       removePopupStatus(openedPopup); 
//     };
// };

// const addPopupStatus = (popupToBeAdded) => {
//     popupToBeAdded.classList.add('popup_opened');
//     document.addEventListener('keydown', closePopupByEsc);
// };

// const removePopupStatus = (popupToBeRemoved) => {
//     popupToBeRemoved.classList.remove('popup_opened');
//     document.removeEventListener('keydown', closePopupByEsc);
// };


// const popupAddOpener = document.querySelector('.profile__popup-add').addEventListener('click', () => {
//     addPopupStatus(popupAdd);
//     formAddValidator.setFormState();
// });

// popups.forEach((popup) => {
//     popup.addEventListener('mousedown', (evt) => {
//         if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-button')) {
//             removePopupStatus(popup)
//         }
//     });
// });

// const elements = [
//     {
//         name: 'Озеро Морейн, Канада',
//         link: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
//     },
//     {
//         name: 'Утёсы Мохер, Ирландия',
//         link: 'https://images.unsplash.com/photo-1527995145077-f35025789549?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
//     },
//     {
//         name: 'Вик, Исландия',
//         link: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
//     },
//     {
//         name: 'Лаутербруннен, Швейцария',
//         link: 'https://images.unsplash.com/photo-1508166093217-f35d00c95fca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
//     },
//     {
//         name: 'Фарерские острова',
//         link: 'https://images.unsplash.com/photo-1610962427218-1d6878a96662?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
//     },
//     {
//         name: 'Гранд-Каньон, США',
//         link: 'https://images.unsplash.com/photo-1456425712190-0dd8c2b00156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
//     },
// ]; массив карточек

// function createCardClassInstance(data, templateSelector, openPopupImg) {
//     const card = new Card(data, templateSelector, openPopupImg);
//     const newCardElement = card.generateCard();
//     elementCards.prepend(newCardElement);
// };

// function renderItem() {
//     createCardClassInstance({
//             name: popupInputPlace.value,
//             link: popupInputLink.value
//         }, '.element-template', openPopupImg);
// };

// elements.forEach((el) => createCardClassInstance(el, '.element-template', openPopupImg)); блок из 3 функций - создание и отрисовка карточек на странице

// popups.forEach((popup) => {
//     popup.addEventListener('mousedown', (evt) => {
//         if (evt.target.classList.contains('popup_opened')) {
//             removePopupStatus(popup)
//         }
//         if (evt.target.classList.contains('popup__close-button')) {
//             removePopupStatus(popup)
//         }
//     });
// }); альтернативный способ закрытия попапов, разделённый на 2 if, которые я объединила в 1 строчку оператором ||


// const deleteButton = (evt) => {
//     const delItem = evt.target.closest('.element');
//     delItem.remove();
// } функция кнопки удаления

// const createCard = (place) => {
//     const cardElement = elementTemplate.cloneNode(true);
//     const cardImage = cardElement.querySelector('.element__image');
//     cardImage.src = place.link;
//     cardElement.alt = place.name;
//     cardElement.querySelector('.element__caption').textContent = place.name;
//     const popupImageOpener = cardElement.querySelector('.element__popup-open').addEventListener('click', () => {
//         addPopupStatus(popupImage);
//         popupPicture.src = cardImage.src;
//         popupPicture.alt = cardImage.alt;
//         popupCaption.textContent = place.name;
//     });
//     cardElement.querySelector('.element__delete-button').addEventListener('click', deleteButton);
//     const likeButton = cardElement.querySelector('.element__like-button').addEventListener('click', (evt) =>
//         evt.target.classList.toggle('element__like-button_active'));
    
//     return cardElement;
// } создание карточек + слушатели кнопки лайка, удаления, открытия попапа

// elements.forEach((el) => {
//     const newCardItem = createCard(el);
//     elementCards.prepend(newCardItem);
// }) отражение карточек на странице

// function handleFormProfileSubmit (evt) {
//     evt.preventDefault();
//     const nameInput = popupInputName.value;
//     const descriptionInput = popupInputDescription.value;
//     profileName.textContent = nameInput;
//     profileDescription.textContent = descriptionInput;
//     removePopupStatus(popupEdit);
// };
// formProfileElement.addEventListener('submit', handleFormProfileSubmit); 
//функция сабмита формы профиля

// function handleFormAddSubmit (evt) {
//     evt.preventDefault();
//     renderItem();
//     removePopupStatus(popupAdd);
//     evt.target.reset();
// };

// formAddElement.addEventListener('submit', handleFormAddSubmit);
// функция сабмита формы добавления новой карточки

// popupCloseSigns.forEach((sign) => {
//     const popup = sign.closest('.popup');
//     sign.addEventListener('click', () => removePopupStatus(popup));
// }) альтернативный обработчик для крестиков

// if (evt.target === evt.currentTarget) {
//     removePopupStatus(popup)
// }; альтернативный способ закрытия попапов при клике на overlay. 
// В условной конструкции popup.forEach это лишнее условие, которое заставляет каждый попап при
// клике на оверлей закрываться дважды. Первый раз в 55 строке и второй раз в этом условии