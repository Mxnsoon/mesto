export class FormValidator {

  constructor(data, form) {
    this._formSelector = data.formSelector;
    this._fieldsetSelector = data.fieldsetSelector;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._form = form;
  }

_showInputError = (inputElement, errorText) => {
  const errorElement = this._form.querySelector(`.${inputElement.id}_error`); 
  inputElement.classList.add(this._inputErrorClass);
  errorElement.textContent = errorText; 
  errorElement.classList.add(this._errorClass); 
}

_hideInputError = (inputElement) => {
  const errorElement = this._form.querySelector(`.${inputElement.id}_error`);
  inputElement.classList.remove(this._inputErrorClass);
  errorElement.classList.remove(this._errorClass);
  errorElement.textContent = "";
}

_checkInputValidity = (inputElement) => {
  if (!inputElement.validity.valid) {
    this._showInputError(inputElement, inputElement.validationMessage);
  } else {
    this._hideInputError(inputElement);
  }
};

_hasInvalidInput(inputList) {
  return inputList.some(input => !input.validity.valid);
}

_toggleButtonState(inputList, buttonElement) {
  if (this._hasInvalidInput(inputList)) {
    buttonElement.classList.add(this._inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(this._inactiveButtonClass);
    buttonElement.disabled = false;
  }
}

_setEventListeners = () => {
  const inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
  const buttonElement = this._form.querySelector(this._submitButtonSelector);
  this._toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      this._checkInputValidity(inputElement);
      this._toggleButtonState(inputList, buttonElement);
    });
  });
}

enableValidation = () => {
  const formList = Array.from(this._form.querySelectorAll(this._formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', evt => {
      evt.preventDefault()
    })
  })
  this._setEventListeners();
}

}
