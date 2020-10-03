import './index.css'

import { initialCards } from '../utils/utils.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import FormValidator from '../components/FormValidator.js';
import {
  profileOpenButton,
  openPlacePopupButton,
  imgPopup,
  profilePopup,
  popupAddCard,
  popupName,
  popupText,
  elementList,
  cardSelector,
  validationConfig,
  profileForm,
  mestoForm, 
  placeFormElement, 
  placeInputText
} from '../utils/utils.js'
const validProfilePopup = new FormValidator(validationConfig, profileForm);
const validMestoPopup = new FormValidator(validationConfig, mestoForm);
const userInfo = new UserInfo('.profile__name', '.profile__text');

const imagePopup = new PopupWithImage( imgPopup );

const addPlace = ({ name, link }) => {
  const card = new Card({ name, link, cardSelector, handleCardClick: () => {
      imagePopup.open({ name, link });
    }
  });
  const cardElement = card.generateCard();

  cardList.addItem(cardElement);
}

const cardList = new Section({ items: initialCards, renderer: ({ name, link }) => {
    addPlace({ name, link });
   }
}, elementList);

const handleFormSubmit = () => {

  userInfo.setUserInfo({
    name: popupName.value,
    text: popupText.value
  })
  editPopup.close();
}

const handleMestoSubmit = () => {
  addPlace({
    name: placeFormElement.value,
    link: placeInputText.value
  })
  addPopup.close();
}

profileOpenButton.addEventListener('click', () => {
  const profileInfo = userInfo.getUserInfo();

  popupName.value = profileInfo.name;
  popupText.value = profileInfo.text;

  validProfilePopup.resetForm();
  editPopup.open();
});

openPlacePopupButton.addEventListener('click', () => {
  validMestoPopup.resetForm();
  addPopup.open();
});

const editPopup = new PopupWithForm(profilePopup, handleFormSubmit);
const addPopup = new PopupWithForm(popupAddCard, handleMestoSubmit);

cardList.renderItems();

editPopup.setEventListeners();
addPopup.setEventListeners();
imagePopup.setEventListeners();

validProfilePopup.enableValidation();
validMestoPopup.enableValidation();