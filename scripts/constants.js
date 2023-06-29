const popups = document.querySelectorAll('.popup');
const popupEdit = document.querySelector('.popup-edit');
const popupAdd = document.querySelector('.popup-add');
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

export {popups, popupEdit, popupAdd, profileName, profileDescription, formProfileElement, popupInputName, popupInputDescription, formAddElement, popupInputPlace,
    popupInputLink, elementCards, popupImage, popupPicture, popupCaption, closeButton};