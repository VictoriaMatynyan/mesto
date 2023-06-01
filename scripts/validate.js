/*sprint 6*/

// const formInput = formElement.querySelector('.popup__input');

// const setFormSubmitButtonState = (form) => {
//     const submitButton = form.querySelector('.popup__submit-button');
//     if (!form.checkValidity()) {
//         submitButton.setAttribute('disabled', true);
//         submitButton.classList.add('popup__submit-button_inactive');
//     } else {
//         submitButton.removeAttribute('disabled');
//         submitButton.classList.remove('popup__submit-button_inactive');
//     }
// };



const getErrorElement = (inputElement) => {
    return document.querySelector(`.${inputElement.id}-error`);
};

const showInputError = (inputElement, errorElement) => {
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add('popup__input_invalid');
};

const hideInputError = (inputElement, errorElement) => {
    errorElement.textContent = '';
    inputElement.classList.remove('popup__input_invalid');
};

const validateInput = (formElement, inputElement) => {
    const errorElement = getErrorElement(inputElement);
    if (!inputElement.validity.valid) {
        showInputError(inputElement, errorElement);
    } else {
        hideInputError(inputElement, errorElement);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

const setFormSubmitButtonState = (inputList, submitButton) => {
    if (hasInvalidInput(inputList)) {
      submitButton.setAttribute('disabled', true);
      submitButton.classList.add('popup__submit-button_inactive');
    } else {
      submitButton.removeAttribute('disabled');
      submitButton.classList.remove('popup__submit-button_inactive');
    }
  };

const sendForm = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    if (!form.checkValidity()) {
        console.log('doesnt work');
    } else {
        console.log('it works!');
    }
};

const setEventListeners = (formElement) => {
    const inputList = Array.from(document.querySelectorAll('.popup__input'));
    const submitButton = formElement.querySelector('.popup__submit-button');
    setFormSubmitButtonState(inputList, submitButton);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            validateInput(formElement, inputElement);
            setFormSubmitButtonState(inputList, submitButton);
        });
    });
};

const enableValidation = (enableConfig) => {
    const formList = Array.from(document.querySelectorAll(enableConfig.formElement));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            setEventListeners(formElement);
            })
    const inputList = Array.from(formElement.querySelectorAll(enableConfig.inputElement));
    const submitButton = formElement.querySelector(enableConfig.submitButton);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', (evt) => {
            evt.preventDefault();
            validateInput(formElement, inputElement);
            setFormSubmitButtonState(inputList, submitButton);
        });        
    });
    });
};

enableValidation({
    formElement: '.popup__input-form',
    inputElement: '.popup__input',
    submitButton: '.popup__submit-button',
    inactiveSubmitButton: 'popup__submit-button_inactive',
    inputError: 'popup__input_invalid',
    errorElement: 'popup__input-error'
  });


// const setFormSubmitButtonState = (form) => {
//     const submitButton = form.querySelector('.popup__submit-button');
//     if (!form.checkValidity()) {
//         submitButton.setAttribute('disabled', true);
//         submitButton.classList.add('popup__submit-button_inactive');
//     } else {
//         submitButton.removeAttribute('disabled');
//         submitButton.classList.remove('popup__submit-button_inactive');
//     }
// };

// const getErrorElement = (input) => {
//     return document.querySelector(`.${input.id}-error`);
// };

// const showInputError = (input) => {
//     const errorElement = getErrorElement(input);
//     errorElement.textContent = input.validationMessage;
//     input.classList.add('popup__input_invalid');
// };

// const hideInputError = (input) => {
//     const errorElement = getErrorElement(input);
//     errorElement.textContent = '';
//     input.classList.remove('popup__input_invalid');
// };

// const validateInput = (input) => {
//     if (!input.validity.valid) {
//         showInputError(input);
//     } else {
//         hideInputError(input);
//     }
// };

// const sendForm = (evt) => {
//     evt.preventDefault();
//     const form = evt.target;
//     if (!form.checkValidity()) {
//         console.log('doesnt work');
//     } else {
//         console.log('it works!');
//     }
// };

// document.querySelectorAll('.popup__input-form').forEach((formElement) => {
//     formElement.addEventListener('input', (evt) => {
//         const input = evt.target;
//         const form = evt.currentTarget;
//         validateInput(input);
//         setFormSubmitButtonState(form);
//     }, true);

//     formElement.addEventListener('submit', sendForm);
//     setFormSubmitButtonState(formElement)
// });







/*sprint 6*/
 