export class Card {
    constructor(data, cardTemplate, createImagePopup) {
        this._name = data.name;
        this._link = data.link;
        this._cardTemplate = cardTemplate;
        this._createImagePopup = createImagePopup;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardTemplate).content.querySelector('.element__group').cloneNode(true);
        return cardElement;
    }

    _setEventListeners() {
        this._element.querySelector('.element__like').addEventListener('click', (evt) => {
            this._likeCard(evt)
        });
        this._element.querySelector('.element__delete').addEventListener('click', (evt) => {
            this._deleteCard(evt)
        })
        this._element.querySelector('.element__image').addEventListener('click', this._createImagePopup)
    }

    _likeCard = (evt) => {
        evt.target.classList.toggle('element__like_active');
    }

    _deleteCard(evt) {
        evt.target.closest('.element__group').remove();
    }


    generateCard() {
        this._element = this._getTemplate();
        const elementImage = this._element.querySelector('.element__image');
        this._element.querySelector('.element__text').textContent = this._name;
        elementImage.src = this._link;
        elementImage.alt = this._name;
        this._setEventListeners();
        return this._element;
    }
}