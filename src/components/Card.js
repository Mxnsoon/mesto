export default class Card {
  constructor({ name, link, cardSelector, handleCardClick }) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element__group').cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    this._element.querySelector('.element__like').addEventListener('click', (evt) => {
      this._likeCard(evt);
    });
    this._element.querySelector('.element__delete').addEventListener('click', (evt) => {
      this._deleteCard(evt);
    });
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleCardClick();
    });
  }

  generateCard() {
    this._element = this._getTemplate();

    this._elementImage = this._element.querySelector('.element__image');
    this._element.querySelector('.element__text').textContent = this._name
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;

    this._setEventListeners();

    return this._element;
  }


  _likeCard(evt) {
    evt.target.classList.toggle('element__like_active');
  }

  _deleteCard(evt) {
    evt.target.closest('.element__group').remove();
  }
}