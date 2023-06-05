const popups = document.querySelectorAll('.popup');
const popupEdit = document.querySelector('.popup-edit');
const popupAdd = document.querySelector('.popup-add');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const formProfileElement = document.querySelector('.popup__input-form_type_edit');
const popupInputName = formProfileElement.querySelector('.popup__input_type_name');
const popupInputDescription = formProfileElement.querySelector('.popup__input_type_description');
const formAddElement = document.querySelector('.popup__input-form_type_add');
const popupInputPlace = formAddElement.querySelector('.popup__input_type_place');
const popupInputLink = formAddElement.querySelector('.popup__input_type_link');
const elementCards = document.querySelector('.elements');
const elementTemplate = document.querySelector('.element-template').content;
const popupImage = document.querySelector('.popup-image');
const popupPicture = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');
 
// 1) установка и удаление слушателя keydown для closePopupByEsc должны осуществляться при открытии и закрытии попапа,
// иначе, когда ни один попап не открыт, нажатие Esc будет лишний раз вызывать это событие.
// 2) keydown должен добавляться к документу, а не к каждому модальному окну, поэтому нельзя повесить
// addEventListener на popup внутри popups.forEach
function closePopupByEsc(evt) {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      removePopupStatus(openedPopup); 
    };
};

// передаю функцию для закрытия popups по Esc через слушатель keydown в функции открытия и закрытия popups
const addPopupStatus = (popupToBeAdded) => {
    popupToBeAdded.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByEsc);
}

const removePopupStatus = (popupToBeRemoved) => {
    popupToBeRemoved.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupByEsc);
}

const popupEditOpener = document.querySelector('.profile__popup-edit').addEventListener('click', () => {
    addPopupStatus(popupEdit);
    popupInputName.value = profileName.textContent;
    popupInputDescription.value = profileDescription.textContent;
    setFormState(formProfileElement, formStateObj);
});

const popupAddOpener = document.querySelector('.profile__popup-add').addEventListener('click', () => {
    addPopupStatus(popupAdd);
    setFormState(formAddElement, formStateObj);
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
]

const deleteButton = (evt) => {
    const delItem = evt.target.closest('.element');
    delItem.remove();
}

const createCard = (place) => {
    const cardElement = elementTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.element__image');
    cardImage.src = place.link;
    cardElement.alt = place.name;
    cardElement.querySelector('.element__caption').textContent = place.name;
    const popupImageOpener = cardElement.querySelector('.element__popup-open').addEventListener('click', () => {
        addPopupStatus(popupImage);
        popupPicture.src = cardImage.src;
        popupPicture.alt = cardImage.alt;
        popupCaption.textContent = place.name;
    });
    cardElement.querySelector('.element__delete-button').addEventListener('click', deleteButton);
    const likeButton = cardElement.querySelector('.element__like-button').addEventListener('click', (evt) =>
        evt.target.classList.toggle('element__like-button_active'));
    
    return cardElement;
}

function renderItem() {
    const placeItem = popupInputPlace.value;
    const placeLink = popupInputLink.value;
    const newPlaceItem = {
        name: placeItem,
        link: placeLink
    }
    const newCardElement = createCard(newPlaceItem);
    elementCards.prepend(newCardElement);
}

elements.forEach((el) => {
    const newCardItem = createCard(el);
    elementCards.prepend(newCardItem);
})

function handleFormProfileSubmit (evt) {
    evt.preventDefault();
    const nameInput = popupInputName.value;
    const descriptionInput = popupInputDescription.value;
    profileName.textContent = nameInput;
    profileDescription.textContent = descriptionInput;
    removePopupStatus(popupEdit);
}

formProfileElement.addEventListener('submit', handleFormProfileSubmit);

function handleFormAddSubmit (evt) {
    evt.preventDefault();
    renderItem();
    removePopupStatus(popupAdd);
    evt.target.reset();
}

formAddElement.addEventListener('submit', handleFormAddSubmit);

// popupCloseSigns.forEach((sign) => {
//     const popup = sign.closest('.popup');
//     sign.addEventListener('click', () => removePopupStatus(popup));
// }) альтернативный обработчик для крестиков

// if (evt.target === evt.currentTarget) {
//     removePopupStatus(popup)
// }; альтернативный способ закрытия попапов при клике на overlay