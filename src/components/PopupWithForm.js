import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor( popupSelector, handleFormSubmit ) {
    super( popupSelector );
    this._form = this._popup.querySelector('.popup__content');
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    this._inputList = this._popup.querySelectorAll('.popup__field');
    this._popupValues = {};

    this._inputList.forEach(input => {
      this._popupValues[input.name] = input.value;
    });

    return this._popupValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();

      this._handleFormSubmit(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}