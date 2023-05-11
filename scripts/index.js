const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup-edit');
const popupAdd = document.querySelector('.popup-add');
const popupCloseSigns = document.querySelectorAll('.popup__close-button');
const popupCloseSignArr = Array.from(popupCloseSigns);
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const formElement = document.querySelector('.popup__input-container');
const popupInputName = formElement.querySelector('.popup__input_type_name');
const popupInputDescription = formElement.querySelector('.popup__input_type_description');
const popupInputPlace = formElement.querySelector('.popup__input_type_place');
const popupInputLink = formElement.querySelector('.popup__input_type_link');
const elementCards = document.querySelector('.elements');
const elementTemplate = document.querySelector('.element-template').content;

// const BUTTON_ADD_TITLE = 'Создать' 

const togglePopupStatus = (popupIntoToggle) => popupIntoToggle.classList.toggle('popup_opened');


const popupEditOpener = document.querySelector('.profile__popup-open_type_edit').addEventListener('click', () => {
    togglePopupStatus(popupEdit);
    popupInputName.value = profileName.textContent;
    popupInputDescription.value = profileDescription.textContent;
})

const popupAddOpener = document.querySelector('.profile__popup-open_type_add').addEventListener('click', () => togglePopupStatus(popupAdd));

popupCloseSignArr.forEach (function (item) {
    item.addEventListener('click', () => {
        if (popupEdit) {
            popupEdit.classList.remove('popup_opened');
            popupInputName.value = '';
            popupInputDescription.value = '';
        }
        popupAdd.classList.remove('popup_opened');
    })
})

// popup.addEventListener('click', (evt) => {
//     if (evt.target === evt.currentTarget) {
//         togglePopupStatus(popup)}
// }) функция закрытия окна popup при нажатии на область вне окна

function handleFormSubmit (evt) {
    evt.preventDefault();
    const nameInput = popupInputName.value;
    const descriptionInput = popupInputDescription.value;
    profileName.textContent = popupInputName.value;
    profileDescription.textContent = popupInputDescription.value;
    togglePopupStatus(popup);
}

formElement.addEventListener('submit', handleFormSubmit);

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
        name: 'Швейцария',
        link: 'https://images.unsplash.com/photo-1508166093217-f35d00c95fca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    {
        name: 'Исландия',
        link: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
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

elements.forEach((el) => {
    const cardElement = elementTemplate.cloneNode(true);
    
    cardElement.querySelector('.element__image').src = el.link;
    cardElement.querySelector('.element__caption').textContent = el.name;
    const likeButton = cardElement.querySelector('.element__like-button').addEventListener('click', (evt) =>
        evt.target.classList.toggle('element__like-button_active'));
    
    elementCards.append(cardElement);
})