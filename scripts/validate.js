const showInputError = (form, input, errorSelector, controlSelector, errorText) => {
  const errorMessage = input.closest(controlSelector).querySelector(errorSelector);
  input.classList.add('form__input_type_error');
  errorMessage.textContent = errorText;
  errorMessage.classList.add('form__input-error_active');
};

const hideInputError = (form, input, errorSelector, controlSelector) => {
  const errorMessage = input.closest(controlSelector).querySelector(errorSelector);
  input.classList.remove('form__input_type_error');
  errorMessage.classList.remove('form__input-error_active');
  errorMessage.textContent = '';
};

const checkInputValidity = (form, input, errorSelector, controlSelector) => {
  if (!input.validity.valid) {
    showInputError(form, input, errorSelector, controlSelector, input.validationMessage);
  } else {
    hideInputError(form, input, errorSelector, controlSelector);
  }
};

function toggleButtonState(form, buttonElement) {
  if (form.checkValidity()) {
      buttonElement.removeAttribute('disabled');
      buttonElement.classList.remove('popup__but-disabled');
      buttonElement.classList.add('popup__save');
  } else {
      buttonElement.setAttribute('disabled', true);
      buttonElement.classList.add('popup__but-disabled');
      buttonElement.classList.remove('popup__save');
  }
};

const setEventListeners = (form, controlSelector, inputSelector, errorSelector) => {
  const inputList = Array.from(form.querySelectorAll(inputSelector));
  const buttonElement = form.querySelector('.popup__save');
  
  inputList.forEach((input) => {
      input.addEventListener('input', function () {
      checkInputValidity(form, input, errorSelector, controlSelector);
      toggleButtonState(form, buttonElement)
    });
  });
};

function enableValidation ({formSelector, controlSelector, inputSelector, errorSelector}) {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((form) => {
      form.addEventListener('submit', (evt) => {
          evt.preventDefault();
      });
      setEventListeners(form, controlSelector, inputSelector, errorSelector);
});
}



enableValidation({
  formSelector: '.form',
  inputSelector: '.popup__input',
  submitButtonSelector: 'popup__save',
  inactiveButtonClass: 'popup__but-disabled',
  controlSelector: '.popup__control',
  errorSelector: '.popup__error',
});



