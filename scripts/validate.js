const showInputError = (validationConfig, inputElement) => {
    const errorElement = document.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(validationConfig.inputError);
};

const hideInputError = (validationConfig, inputElement) => {
    const errorElement = document.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = '';
    inputElement.classList.remove(validationConfig.inputError);
};

const validateInput = (validationConfig, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(validationConfig, inputElement);
    } else {
        hideInputError(validationConfig, inputElement);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid; 
    });
};

const setFormSubmitButtonState = (formElement, inputList, validationConfig) => {
    const submitButton = formElement.querySelector(validationConfig.submitButton);
    if (hasInvalidInput(inputList)) {
      submitButton.setAttribute('disabled', true);
      submitButton.classList.add(validationConfig.inactiveSubmitButton);
    } else {
      submitButton.removeAttribute('disabled');
      submitButton.classList.remove(validationConfig.inactiveSubmitButton);
    }
};

const setFormState = (formElement, validationConfig) => {
    const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputElement));
    inputList.forEach((inputElement) => {
        validateInput(validationConfig, inputElement);
        hideInputError(validationConfig, inputElement);
    });
    setFormSubmitButtonState(formElement, inputList, validationConfig);
} 

const setEventListeners = (formElement, validationConfig) => {
    const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputElement));
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            validateInput(validationConfig, inputElement);
            setFormSubmitButtonState(formElement, inputList, validationConfig);
        });
    });
};

const enableValidation = (validationConfig) => {
    const formList = Array.from(document.querySelectorAll(validationConfig.formElement));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();   
        });
        setEventListeners(formElement, validationConfig);
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


// старый код, удалю, когда новый будет проверен и одобрен

//   const enableValidation = (validationConfig) => {
//     const formList = Array.from(document.querySelectorAll(validationConfig.formElement));
//     formList.forEach((formElement) => {
//         formElement.addEventListener('submit', (evt) => {
//             evt.preventDefault();
//             setEventListeners(validationConfig.formElement);
//             })
    // const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputElement));
    // const submitButton = formElement.querySelector(validationConfig.submitButton);
    // inputList.forEach((inputElement) => {
    //     inputElement.addEventListener('input', (evt) => {
    //         evt.preventDefault();
    //         validateInput(formElement, inputElement);
    //         setFormSubmitButtonState(inputList, submitButton);
    //     });        
    // });
    // });
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
 