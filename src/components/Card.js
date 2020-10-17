export default class Card {
  constructor({ name, link, likes, _id, owner, cardSelector, handleCardClick }, handleLikeClick, handleRemoveClick, userId) {
    this._title = name;
    this._image = link;
    this._likes = likes;
    this._id = _id;
    this._owner = owner;
    this._userId = userId;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleRemoveClick;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element__group').cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    this._elementImage.addEventListener('click', () => {
      this._handleCardClick();
    });
    this._elementLike.addEventListener('click', () => {
      this._handleLikeClick(this);
    });
    this._elementDelete.addEventListener('click', () => {
      this._handleDeleteClick(this);
    });
  }

  generateCard() {
    this._element = this._getTemplate();

    this._elementImage = this._element.querySelector('.element__image');
    this._elementTitle = this._element.querySelector('.element__text');
    this._elementLike = this._element.querySelector('.element__like');
    this._elementDelete = this._element.querySelector('.element__delete');
    this._elementLikeCounter = this._element.querySelector('.element__like-counter');

    this._setEventListeners();

    this._elementImage.src = this._image;
    this._elementImage.alt = this._title;
    this._elementTitle.textContent = this._title;
    this._elementLikeCounter.textContent = this._likes.length;

    if (this._owner._id !== this._userId) {
      this._elementDelete.classList.add('element__delete_hidden');
    }

    if (this._likes.some(like => {
        return like._id === this._userId;
      })
    ) {
      this.likeCard();
    }

    return this._element;
  }


  likeCard() {
    this._elementLike.classList.toggle('element__like_active');
  }

  isLiked() {
    return this._elementLike.classList.contains('element__like_active');
  }

  setLikesCount(likes) {
    this._elementLikeCounter.textContent = likes;
  }

  removeCard() {
    this._element.remove();
    this._element = null;
  }
}