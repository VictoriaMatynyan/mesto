class FormValidator {
    constructor(formStateObj, formElement) {
        this._formStateObj = formStateObj;
        this._formElement = formElement;
        this._inputElement = formElement.querySelector(formStateObj.inputElement);
        this._inputList = Array.from(formElement.querySelectorAll(formStateObj.inputElement));
        this._submitButton = formElement.querySelector(formStateObj.submitButton);
        this._inactiveSubmitButton = formStateObj.inactiveSubmitButton;
        this._inputError = formStateObj.inputError;
        this._errorElement = formElement.querySelector(formStateObj.errorElement);
    }

    _showInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        errorElement.textContent = inputElement.validationMessage;
        inputElement.classList.add(this._inputError);
    }

    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        errorElement.textContent = '';
        inputElement.classList.remove(this._inputError);
    }

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement);
        } else {
            this._hideInputError(inputElement);
        }
    }

    _checkInputInvalidity() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid; 
        });
    }

    _setFormSubmitButtonState() {
        if (this._checkInputInvalidity()) {
            this._submitButton.setAttribute('disabled', true);
            this._submitButton.classList.add(this._inactiveSubmitButton);
        } else {
            this._submitButton.removeAttribute('disabled');
            this._submitButton.classList.remove(this._inactiveSubmitButton);
        }
    }

    _setEventListeners() {
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._setFormSubmitButtonState();
            })
        })
    }

    setFormState() {
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement);
            });
        this._setFormSubmitButtonState();
    } 

    enableValidation() {
        this._setEventListeners(); 
    }
}

export default FormValidator;



// старый код just in case (of emergency)

// const showInputError = (formElement, validationConfig, inputElement) => {
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     errorElement.textContent = inputElement.validationMessage;
//     inputElement.classList.add(validationConfig.inputError);
// };

// const hideInputError = (formElement, validationConfig, inputElement) => {
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     errorElement.textContent = '';
//     inputElement.classList.remove(validationConfig.inputError);
// };

// const validateInput = (formElement, validationConfig, inputElement) => {
//     if (!inputElement.validity.valid) {
//         showInputError(formElement, validationConfig, inputElement);
//     } else {
//         hideInputError(formElement, validationConfig, inputElement);
//     }
// };

// const hasInvalidInput = (inputList) => {
//     return inputList.some((inputElement) => {
//         return !inputElement.validity.valid; 
//     });
// };

// const setFormSubmitButtonState = (submitButton, inputList, validationConfig) => {
//     if (hasInvalidInput(inputList)) {
//       submitButton.setAttribute('disabled', true);
//       submitButton.classList.add(validationConfig.inactiveSubmitButton);
//     } else {
//       submitButton.removeAttribute('disabled');
//       submitButton.classList.remove(validationConfig.inactiveSubmitButton);
//     }
// };

// const setFormState = (formElement, validationConfig) => {
//     const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputElement));
//     const submitButton = formElement.querySelector(validationConfig.submitButton);
//     inputList.forEach((inputElement) => {
//         hideInputError(formElement,validationConfig, inputElement);
//     });
//     setFormSubmitButtonState(submitButton, inputList, validationConfig);
// } 

// const setEventListeners = (formElement, validationConfig) => {
//     const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputElement));
//     const submitButton = formElement.querySelector(validationConfig.submitButton);
//     inputList.forEach((inputElement) => {
//         inputElement.addEventListener('input', () => {
//             validateInput(formElement, validationConfig, inputElement);
//             setFormSubmitButtonState(submitButton, inputList, validationConfig);
//         });
//     });
// };

// const enableValidation = (validationConfig) => {
//     const formList = Array.from(document.querySelectorAll(validationConfig.formElement));
//     formList.forEach((formElement) => {
//         setEventListeners(formElement, validationConfig);
//     });
// };

// //объявляю объект для удобства передачи аргументов в функцию setFormState
// // p.s. объект был изначально в функции enableValidation как аргумент, сейчас заменён на formStateObj, чтобы не дублироваться
// const formStateObj = {
//     formElement: '.popup__input-form',
//     inputElement: '.popup__input',
//     submitButton: '.popup__submit-button',
//     inactiveSubmitButton: 'popup__submit-button_inactive',
//     inputError: 'popup__input_invalid',
//     errorElement: 'popup__input-error'
// } 

// // вызываю функцию, кот. запускает валидацию форм и передаю объект настроек как аргумент
// // p.s. раньше здесь было содержимое formStateObj из index.js.
// enableValidation(formStateObj);