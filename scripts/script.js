const profilePopup = document.querySelector('.popup_profile');
const profileOpenButton = document.querySelector('.profile__edit');
const profileCloseButton = document.querySelector('.popup__close-button_profile');
const profSubmitButton = document.querySelector('.popup__save-button_profile');
const popupName = document.querySelector('.popup__field_name');
const popupText = document.querySelector('.popup__field_text');
const profName = document.querySelector('.profile__name');
const profText = document.querySelector('.profile__text');
const popupAddCard = document.querySelector('.popup_card');
const openPlacePopupButton = document.querySelector('.profile__button-add');
const popupAddCardCloseButton = document.querySelector('.popup__close-button_card');
const popupAddCardSaveButton = document.querySelector('.popup__save-button_card');
const placeFormElement = document.querySelector('.popup__field_mesto-name');
const placeInputText = document.querySelector('.popup__field_mesto-text');
const imgPopup = document.querySelector('.popup_image');
const imgPopupName = imgPopup.querySelector('.element__image-name');
const imgPopupImage = imgPopup.querySelector('.element__image-screen');
const imgCloseButton = document.querySelector('.popup__close-button_image');
const elementList = document.querySelector('.element__list');
const escKey = 27;

function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  popupElement.addEventListener("click", closePopupOverlay);
  document.addEventListener("keydown", closeWithEsc);
}

function openProfilePopup() {
  popupName.value = profName.textContent;
  popupText.value = profText.textContent;
  openPopup(profilePopup);
  popupValidCheck(profilePopup);
}

function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  popupElement.addEventListener("click", closePopupOverlay);
  document.addEventListener("keydown", closeWithEsc);
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
  popupElement.removeEventListener("click", closePopupOverlay);
  document.removeEventListener("keydown", closeWithEsc);
}

function closePopupOverlay(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  }
}

function closeWithEsc(evt) {
  if (evt.keyCode === escKey) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function openProfilePopup() {
  popupName.value = profName.textContent;
  popupText.value = profText.textContent;
  openPopup(profilePopup);
  popupValidCheck(profilePopup);
}

function closeProfilePopup() {
  closePopup(profilePopup);
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profName.textContent = popupName.value;
  profText.textContent = popupText.value;
  closeProfilePopup();
}

function openAddCardPopup() {
  placeFormElement.value = placeFormElement.textContent;
  placeInputText.value = placeInputText.textContent;
  openPopup(popupAddCard);
  popupValidCheck(popupAddCard);
}

function closeAddCardPopup() {
  closePopup(popupAddCard);
}

function figureImage(evt) {
  openPopup(imgPopup);
  imgPopupImage.src = evt.target.src;
  imgPopupImage.alt = evt.target.alt;
  imgPopupName.textContent = evt.target.parentNode.querySelector('.element__text').textContent;
}

function closeImgPopup() {
  closePopup(imgPopup);
}

function createCard(name, link) {
  const card = document.querySelector('.element-template').content.cloneNode(true);
  const elementImage = card.querySelector('.element__image');
  const elementText = card.querySelector('.element__text');
  const cardDeleteButton = card.querySelector('.element__delete');
  const cardLikeButton = card.querySelector('.element__like');

  elementImage.src = link;
  elementImage.alt = name;
  elementText.textContent = name;

  cardDeleteButton.addEventListener('click', deleteCard);
  cardLikeButton.addEventListener('click', likeCard);
  elementImage.addEventListener('click', figureImage);

  return card;
}

initialCards.forEach(function(element) {
  elementList.append(createCard(element.name, element.link));
})

function addCard(evt) {
  evt.preventDefault();
  const newCard = {
    name: placeFormElement.value,
    link: placeInputText.value,
  };
  const newPlace = createCard(newCard.name, newCard.link);
  elementList.prepend(newPlace);
  closeAddCardPopup();
}

function deleteCard(evt) {
  evt.target.parentNode.remove();
}

function likeCard(evt) {
  evt.target.classList.toggle('element__like_active');
}

profileOpenButton.addEventListener('click', openProfilePopup);
profileCloseButton.addEventListener('click', closeProfilePopup);
profSubmitButton.addEventListener('click', formSubmitHandler);
openPlacePopupButton.addEventListener('click', openAddCardPopup);
popupAddCardCloseButton.addEventListener('click', closeAddCardPopup);
imgCloseButton.addEventListener('click', closeImgPopup);
popupAddCardSaveButton.addEventListener('click', addCard);