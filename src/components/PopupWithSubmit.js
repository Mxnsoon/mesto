import Popup from './Popup.js';

export default class PopupWithSubmit extends Popup {
  constructor({ popupSelector}, handleConfirmClick ) {
    super({ popupSelector });
    this._form = this._popup.querySelector('.popup__content');
    this._handleConfirmClick = handleConfirmClick;
  }

  open(element) {
    this._element = element;
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();

      this._handleConfirmClick(this._element);
    });
  }
}