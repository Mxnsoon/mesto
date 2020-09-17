import {
  initialCards
} from './initialCards.js';
import {
  Card
} from './Card.js';
import {
  FormValidator
} from './FormValidator.js';

const profilePopup = document.querySelector('.popup_profile');
const profileOpenButton = document.querySelector('.profile__edit');
const profileCloseButton = document.querySelector('.popup__close-button_profile');
const profSubmitButton = document.querySelector('.popup__save-button_profile');
const popupName = document.querySelector('.popup__field_name');
const popupText = document.querySelector('.popup__field_text');
const profName = document.querySelector('.profile__name');
const profText = document.querySelector('.profile__text');
const popupAddCard = document.querySelector('.popup_mesto');
const openPlacePopupButton = document.querySelector('.profile__button-add');
const popupAddCardCloseButton = document.querySelector('.popup__close_mesto');
const popupAddCardSaveButton = document.querySelector('.popup__save_mesto');
const placeFormElement = document.querySelector('.popup__field_mesto-name');
const placeInputText = document.querySelector('.popup__field_mesto-text');
const imgPopup = document.querySelector('.popup_image');
const imgPopupName = imgPopup.querySelector('.element__image-name');
const imgPopupImage = imgPopup.querySelector('.element__image-screen');
const imgCloseButton = document.querySelector('.popup__close_image');
const elementList = document.querySelector('.element__list');
const escKey = 27;

const validationConfig = {
  formSelector: '.popup__content',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__field_type_error',
  errorClass: 'popup__field_error-visible',
};

const validProfilePopup = new FormValidator(validationConfig, profilePopup);
const validAddCardPopup = new FormValidator(validationConfig, popupAddCard);

validProfilePopup.enableValidation();
validAddCardPopup.enableValidation();

function addPlace(data) {
  const card = new Card(data, '.element-template', figureImage);
  const cardElement = card.generateCard();
  elementList.prepend(cardElement);
}

initialCards.forEach(function (item) {
  addPlace(item);
});

function saveAddPlacePopup(e) {
  e.preventDefault();
  const data = {
    name: placeFormElement.value,
    link: placeInputText.value
  }

  addPlace(data);
  closeAddCardPopup();
}


function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  popupElement.addEventListener("click", closePopupOverlay);
  document.addEventListener("keydown", closeWithEsc);
}

function openProfilePopup() {
  popupName.value = profName.textContent;
  popupText.value = profText.textContent;
  openPopup(profilePopup);
  validProfilePopup.resetForm();
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


function closeProfilePopup() {
  closePopup(profilePopup);
}

function submitFormHandler(evt) {
  evt.preventDefault();
  profName.textContent = popupName.value;
  profText.textContent = popupText.value;
  closeProfilePopup();
}

function openAddCardPopup() {
  placeFormElement.value = placeFormElement.textContent;
  placeInputText.value = placeInputText.textContent;
  openPopup(popupAddCard);
  validAddCardPopup.resetForm();
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


profileOpenButton.addEventListener('click', openProfilePopup);
profileCloseButton.addEventListener('click', closeProfilePopup);
profSubmitButton.addEventListener('click', submitFormHandler);
openPlacePopupButton.addEventListener('click', openAddCardPopup);
popupAddCardCloseButton.addEventListener('click', closeAddCardPopup);
imgCloseButton.addEventListener('click', closeImgPopup);
popupAddCardSaveButton.addEventListener('click', saveAddPlacePopup);