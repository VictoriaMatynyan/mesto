/*sprint 6*/

// const formInput = formElement.querySelector('.popup__input');

const formSubmitButtonState = (form) => {
    const submitButton = form.querySelector('.popup__submit-button');
    if (!form.checkValidity()) {
        submitButton.setAttribute('disabled', true);
        submitButton.classList.add('popup__submit-button_invalid');
    } else {
        submitButton.removeAttribute('disabled');
        submitButton.classList.remove('popup__submit-button_invalid');
    }
};

const getErrorElement = (input) => {
    return document.querySelector(`.${input.id}-error`);
};

const showInputError = (input) => {
    const errorElement = getErrorElement(input);
    errorElement.textContent = input.validationMessage;
    input.classList.add('popup__input_invalid');
};

const hideInputError = (input) => {
    const errorElement = getErrorElement(input);
    errorElement.textContent = '';
    input.classList.remove('popup__input_invalid');
};

const validateInput = (input) => {
    if (!input.validity.valid) {
        showInputError(input);
    } else {
        hideInputError(input);
    }
};

const sendForm = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    if (!form.checkValidity()) {
        console.log('no good');
    } else {
        console.log('all good');
    }
};

document.querySelectorAll('.popup__input-container').forEach((formElement) => {
    formElement.addEventListener('input', (evt) => {
        const input = evt.target;
        const form = evt.currentTarget;
        validateInput(input);
        formSubmitButtonState(form);
    }, true);

    formElement.addEventListener('submit', sendForm);
    formSubmitButtonState(formElement)
});



// const setEventListeners = (formElement) => {
//     const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
//     inputList.forEach((inputElement) => {
//         inputElement.addEventListener('input', () => {
//             isValid = (formElement, inputElement); 
//         });
//     });
// };




/*sprint 6*/
 