const popupButtonOpener = document.querySelector('.profile__popup-open');
const popup = document.querySelector('.popup');
const popupCloseSymbol = document.querySelector('.popup__close-icon');

const togglePopupStatus = (popupIntoToggle) => popupIntoToggle.classList.toggle('popup__opened');
popupButtonOpener.addEventListener('click', () => togglePopupStatus(popup))

popupCloseSymbol.addEventListener('click', () => togglePopupStatus(popup))

popup.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
        togglePopupStatus(popup)
    }
})

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const popupInputName = document.querySelector('.popup__input-name');
const popupInputDescription = document.querySelector('.popup__input-description');
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

const likeButtons = document.querySelectorAll('.element__like-button');
likeButtons.forEach((likeButton) => {
    likeButton.classList.remove ('element__like-button_active');
    likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('element__like-button_active'),
    likeButton.classList.toggle('element__like-button')}
    );
})

const formElement = document.querySelector('.popup__input-container'); 

function handleFormSubmit (evt) {
    evt.preventDefault();
    const nameInput = popupInputName.value;
    const descriptionInput = popupInputDescription.value;
    profileName.textContent = popupInputName.value;
    profileDescription.textContent = popupInputDescription.value;
}

formElement.addEventListener('submit', handleFormSubmit);