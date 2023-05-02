const popupButtonOpener = document.querySelector('.profile__popup-open');
const popup = document.querySelector('.popup');
const popupCloseSymbol = document.querySelector('.popup__close-button');

const togglePopupStatus = (popupIntoToggle) => popupIntoToggle.classList.toggle('popup_opened');
popupButtonOpener.addEventListener('click', () => togglePopupStatus(popup))
popupCloseSymbol.addEventListener('click', () => togglePopupStatus(popup)
)

// popup.addEventListener('click', (evt) => {
//     if (evt.target === evt.currentTarget) {
//         togglePopupStatus(popup)
//     }
// }) функция закрытия окна popup при нажатии на область вне окна

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const formElement = document.querySelector('.popup__input-container');
const popupInputName = formElement.querySelector('.popup__input_name');
const popupInputDescription = formElement.querySelector('.popup__input_description');
const submitButton = document.querySelector('.popup__submit-button');

popupCloseSymbol.addEventListener('click', () => {
    const popupName = popupInputName.value;
    const popupDescription = popupInputDescription.value;
    popupInputName.value = '';
    popupInputDescription.value = '';
    profileName.value = '';
    profileDescription.value = '';
});

submitButton.addEventListener('click', () => {
    const profileSubmitName = popupInputName.value;
    const profileSubmitDescription = popupInputDescription.value;
    profileName.textContent = profileSubmitName;
    profileDescription.textContent = profileSubmitDescription;
    togglePopupStatus(popup);
})

function handleFormSubmit (evt) {
    evt.preventDefault();
    const nameInput = popupInputName.value;
    const descriptionInput = popupInputDescription.value;
    profileName.textContent = popupInputName.value;
    profileDescription.textContent = popupInputDescription.value;
}

formElement.addEventListener('submit', handleFormSubmit);