import Card from './Card.js';
import {popups, popupEdit, popupAdd, profileName, profileDescription, formProfileElement, popupInputName, popupInputDescription, formAddElement, popupInputPlace,
    popupInputLink, elementCards, popupImage, popupPicture, popupCaption} from './constants.js';
import FormValidator from './FormValidator.js';

const formStateObj = {
    formElement: '.popup__input-form',
    inputElement: '.popup__input',
    submitButton: '.popup__submit-button',
    inactiveSubmitButton: 'popup__submit-button_inactive',
    inputError: 'popup__input_invalid',
    errorElement: 'popup__input-error'
};
 
const formEditValidator = new FormValidator(formStateObj, formProfileElement);
formEditValidator.enableValidation();
const formAddValidator = new FormValidator(formStateObj, formAddElement);
formAddValidator.enableValidation();

function closePopupByEsc(evt) {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      removePopupStatus(openedPopup); 
    };
};

const addPopupStatus = (popupToBeAdded) => {
    popupToBeAdded.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByEsc);
};

const removePopupStatus = (popupToBeRemoved) => {
    popupToBeRemoved.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupByEsc);
};

const popupEditOpener = document.querySelector('.profile__popup-edit').addEventListener('click', () => {
    addPopupStatus(popupEdit);
    popupInputName.value = profileName.textContent;
    popupInputDescription.value = profileDescription.textContent;
    formEditValidator.setFormState();
});

const popupAddOpener = document.querySelector('.profile__popup-add').addEventListener('click', () => {
    addPopupStatus(popupAdd);
    formAddValidator.setFormState();
});

popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            removePopupStatus(popup)
        }
        if (evt.target.classList.contains('popup__close-button')) {
            removePopupStatus(popup)
        }
    });
});

const elements = [
    {
        name: 'Озеро Морейн, Канада',
        link: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        name: 'Утёсы Мохер, Ирландия',
        link: 'https://images.unsplash.com/photo-1527995145077-f35025789549?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        name: 'Вик, Исландия',
        link: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        name: 'Лаутербруннен, Швейцария',
        link: 'https://images.unsplash.com/photo-1508166093217-f35d00c95fca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    {
        name: 'Фарерские острова',
        link: 'https://images.unsplash.com/photo-1610962427218-1d6878a96662?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        name: 'Гранд-Каньон, США',
        link: 'https://images.unsplash.com/photo-1456425712190-0dd8c2b00156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
];

// для себя: в этой функции названия свойств объекта - name и link - должны совпадать с названиями свойств в
// конструкторе класса Card
function renderItem() {
    const card = new Card({
        name: popupInputPlace.value,
        link: popupInputLink.value
    }, '.element-template', openPopupImg);
    const newCardItem = card.generateCard();
    elementCards.prepend(newCardItem);
};

const openPopupImg = (link, name) => {
    addPopupStatus(popupImage);
    popupPicture.src = `${link}`;
    popupPicture.alt = name;
    popupCaption.textContent = name;
};

// для себя: здесь в 1м аргументе создания экз-ра Card мы передаём el, потому что это позволяет нам использовать текущий
// элемент массива elements. Внутри колбэк-функции мы будем обращаться к свойствам объекта (= текущего элемента
// массива, используя его имя, => el.name, el.link
elements.forEach((el) => {
    const card = new Card(el, '.element-template', openPopupImg);
    const newCardElement = card.generateCard();
    elementCards.prepend(newCardElement);
});

function handleFormProfileSubmit (evt) {
    evt.preventDefault();
    const nameInput = popupInputName.value;
    const descriptionInput = popupInputDescription.value;
    profileName.textContent = nameInput;
    profileDescription.textContent = descriptionInput;
    removePopupStatus(popupEdit);
};

formProfileElement.addEventListener('submit', handleFormProfileSubmit);


function handleFormAddSubmit (evt) {
    evt.preventDefault();
    renderItem();
    removePopupStatus(popupAdd);
    evt.target.reset();
};

formAddElement.addEventListener('submit', handleFormAddSubmit);


// старый код just in case (of emergency)

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

// popupCloseSigns.forEach((sign) => {
//     const popup = sign.closest('.popup');
//     sign.addEventListener('click', () => removePopupStatus(popup));
// }) альтернативный обработчик для крестиков

// if (evt.target === evt.currentTarget) {
//     removePopupStatus(popup)
// }; альтернативный способ закрытия попапов при клике на overlay. 
// В условной конструкции popup.forEach это лишнее условие, которое заставляет каждый попап при
// клике на оверлей закрываться дважды. Первый раз в 55 строке и второй раз в этом условии