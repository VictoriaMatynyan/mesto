const popups = document.querySelectorAll('.popup');
const popupEdit = document.querySelector('.popup-edit');
const profileAvatar = document.querySelector('.profile__avatar');
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

// const imageCanada = new URL('https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', import.meta.url);
// const imageIreland = new URL('https://images.unsplash.com/photo-1527995145077-f35025789549?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', import.meta.url);
// const imageIceland = new URL('https://images.unsplash.com/photo-1504829857797-ddff29c27927?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', import.meta.url);
// const imageSwitzerland = new URL('https://images.unsplash.com/photo-1508166093217-f35d00c95fca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80', import.meta.url);
// const imageFaroeIslands = new URL('https://images.unsplash.com/photo-1610962427218-1d6878a96662?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', import.meta.url);
// const imageUsa = new URL('https://images.unsplash.com/photo-1456425712190-0dd8c2b00156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', import.meta.url);

// const elements = [
//     {
//         name: 'Озеро Морейн, Канада',
//         link: imageCanada
//     },
//     {
//         name: 'Утёсы Мохер, Ирландия',
//         link: imageIreland
//     },
//     {
//         name: 'Вик, Исландия',
//         link: imageIceland
//     },
//     {
//         name: 'Лаутербруннен, Швейцария',
//         link: imageSwitzerland
//     },
//     {
//         name: 'Фарерские острова',
//         link: imageFaroeIslands
//     },
//     {
//         name: 'Гранд-Каньон, США',
//         link: imageUsa
//     },
// ];

export {popups, popupEdit, profileAvatar, popupEditOpener, popupAdd, profileName, profileDescription, formProfileElement, 
    popupInputName, popupInputDescription, formAddElement, popupInputPlace, popupInputLink, popupAddOpener, 
    elementCards, popupImage, popupPicture, popupCaption, closeButton, formStateObj, popupUpdateButton,
    popupConfirmation, popupAvatarUpdate, formAvatarElement, popupInputAvatar};