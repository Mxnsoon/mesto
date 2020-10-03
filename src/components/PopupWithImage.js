import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor( popupSelector ) {
    super( popupSelector );
  }

  open({ name, link }) {
    super.open();

    this._popupImage = this._popup.querySelector('.element__image-screen');
    this._popupName = this._popup.querySelector('.element__image-name');

    this._popupImage.src = link;
    this._popupImage.alt = name;
    this._popupName.textContent = name;
  }
}