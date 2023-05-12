const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup-edit');
const popupAdd = document.querySelector('.popup-add');
const popupCloseSigns = document.querySelectorAll('.popup__close-button');
const popupCloseSignArr = Array.from(popupCloseSigns);
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const formProfileElement = document.querySelector('.popup__input-container_type_edit');
const popupInputName = formProfileElement.querySelector('.popup__input_type_name');
const popupInputDescription = formProfileElement.querySelector('.popup__input_type_description');
const formAddElement = document.querySelector('.popup__input-container_type_add');
const popupInputPlace = formAddElement.querySelector('.popup__input_type_place');
const popupInputLink = formAddElement.querySelector('.popup__input_type_link');
const elementCards = document.querySelector('.elements');
const elementTemplate = document.querySelector('.element-template').content;
const popupImage = document.querySelector('.popup-image');
const popupPicture = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

const addPopupStatus = (popupToBeAdded) => popupToBeAdded.classList.add('popup_opened');
const togglePopupStatus = (popupIntoToggle) => popupIntoToggle.classList.toggle('popup_opened');
const removePopupStatus = (popupToBeRemoved) => popupToBeRemoved.classList.remove('popup_opened');

const popupEditOpener = document.querySelector('.profile__popup-open_type_edit').addEventListener('click', () => {
    addPopupStatus(popupEdit);
    popupInputName.value = profileName.textContent;
    popupInputDescription.value = profileDescription.textContent;
})

const popupAddOpener = document.querySelector('.profile__popup-open_type_add').addEventListener('click', () => addPopupStatus(popupAdd));

popupCloseSignArr.forEach (function (item) {
    item.addEventListener('click', () => {
        if (popupEdit) {
            removePopupStatus(popupEdit);
            popupInputName.value = '';
            popupInputDescription.value = '';
        }
        if (popupAdd) {
            removePopupStatus(popupAdd);
        } 
        if (popupImage) {
            removePopupStatus(popupImage);
        }
    })
})

const elements = [
    {
        name: 'Канада',
        link: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        name: 'Ирландия',
        link: 'https://images.unsplash.com/photo-1527995145077-f35025789549?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        name: 'Исландия',
        link: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        name: 'Швейцария',
        link: 'https://images.unsplash.com/photo-1508166093217-f35d00c95fca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    {
        name: 'Фарерские острова',
        link: 'https://images.unsplash.com/photo-1610962427218-1d6878a96662?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        name: 'США',
        link: 'https://images.unsplash.com/photo-1456425712190-0dd8c2b00156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
]

const deleteButton = (evt) => {
    const delItem = evt.target.closest('.element');
    delItem.remove();
}

const renderItem = (places) => {
    const cardElement = elementTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.element__image').src = places.link;
    cardElement.querySelector('.element__caption').textContent = places.name;
    const popupImageOpener = cardElement.querySelector('.element__popup-open').addEventListener('click', () => {
        togglePopupStatus(popupImage);
        popupPicture.src = cardImage;
        popupCaption.textContent = places.name;
    });
    cardElement.querySelector('.element__delete-button').addEventListener('click', deleteButton);
    const likeButton = cardElement.querySelector('.element__like-button').addEventListener('click', (evt) =>
        evt.target.classList.toggle('element__like-button_active'));
    
    elementCards.prepend(cardElement);
}

elements.forEach((el) => {
    renderItem(el);
})

function handleFormProfileSubmit (evt) {
    evt.preventDefault();
    const nameInput = popupInputName.value;
    const descriptionInput = popupInputDescription.value;
    profileName.textContent = nameInput;
    profileDescription.textContent = descriptionInput;
    togglePopupStatus(popup);
}

formProfileElement.addEventListener('submit', handleFormProfileSubmit);

function createCard () {
    const placeItem = popupInputPlace.value;
    const placeLink = popupInputLink.value;
    const newPlaceItem = {
        name: placeItem,
        link: placeLink
    }
    const newCardElement = renderItem(newPlaceItem);
    return newCardElement;
}

function handleFormAddSubmit (evt) {
    evt.preventDefault();
    createCard ();
    togglePopupStatus(popupAdd);
}

formAddElement.addEventListener('submit', handleFormAddSubmit);

// popup.addEventListener('click', (evt) => {
//     if (evt.target === evt.currentTarget) {
//         togglePopupStatus(popup)}
// }) функция закрытия окна popup при нажатии на область вне окна