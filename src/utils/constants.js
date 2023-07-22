const popups = document.querySelectorAll('.popup');
const popupEdit = document.querySelector('.popup-edit');
const popupEditOpener = document.querySelector('.profile__popup-edit');
const popupAdd = document.querySelector('.popup-add');
const popupAddOpener = document.querySelector('.profile__popup-add');
const closeButton = document.querySelector('.popup__close-button');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const formProfileElement = document.querySelector('.popup__input-form_type_edit');
const popupInputName = formProfileElement.querySelector('.popup__input_type_name');
const popupInputDescription = formProfileElement.querySelector('.popup__input_type_description');
const formAddElement = document.querySelector('.popup__input-form_type_add');
const popupInputPlace = formAddElement.querySelector('.popup__input_type_place');
const popupInputLink = formAddElement.querySelector('.popup__input_type_link');
const elementCards = document.querySelector('.elements');
const popupImage = document.querySelector('.popup-image');
const popupPicture = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');
const popupUpdateButton = document.querySelector('.profile__update-button');
const popupAvatarUpdate = document.querySelector('.popup-update');
const popupConfirmation = document.querySelector('.popup-confirm');
const formAvatarElement = document.querySelector('.popup__input-form_type_update');
const popupInputAvatar = formAvatarElement.querySelector('.popup__input_type_update');

const formStateObj = {
    formElement: '.popup__input-form',
    inputElement: '.popup__input',
    submitButton: '.popup__submit-button',
    inactiveSubmitButton: 'popup__submit-button_inactive',
    inputError: 'popup__input_invalid',
    errorElement: 'popup__input-error'
};

export {popups, popupEdit, popupEditOpener, popupAdd, profileName, profileDescription, formProfileElement, 
    popupInputName, popupInputDescription, formAddElement, popupInputPlace, popupInputLink, popupAddOpener, 
    elementCards, popupImage, popupPicture, popupCaption, closeButton, formStateObj, popupUpdateButton,
    popupConfirmation, popupAvatarUpdate, formAvatarElement, popupInputAvatar};