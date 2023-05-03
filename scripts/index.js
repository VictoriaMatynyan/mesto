const popupButtonOpener = document.querySelector('.profile__popup-open');
const popup = document.querySelector('.popup');
const popupCloseSymbol = document.querySelector('.popup__close-button');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const formElement = document.querySelector('.popup__input-container');
const popupInputName = formElement.querySelector('.popup__input_type_name');
const popupInputDescription = formElement.querySelector('.popup__input_type_description');

const togglePopupStatus = (popupIntoToggle) => popupIntoToggle.classList.toggle('popup_opened');

popupButtonOpener.addEventListener('click', () => {
    togglePopupStatus(popup);
    popupInputName.value = profileName.textContent;
    popupInputDescription.value = profileDescription.textContent;
})

popupCloseSymbol.addEventListener('click', () => {
    togglePopupStatus(popup);
    popupInputName.value = '';
    popupInputDescription.value = '';
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