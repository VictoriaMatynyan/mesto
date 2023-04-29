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
submitButton.addEventListener('click', function(){
    const popupName = popupInputName.value;
    const popupDescription = popupInputDescription.value;
    profileName.textContent = `${popupName}`;
    profileDescription.textContent = `${popupDescription}`;
})