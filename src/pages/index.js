import './index.css'

import {
  editProfileAvatarButton,
  profileOpenButton,
  openPlacePopupButton,
  popupConfirmSelector,
  popupAvatarSelector,
  profilePopup,
  popupAddCard,
  imgPopup,
  avatarSaveButton,
  profileSaveButton,
  mestoSaveButton,
  popupName,
  popupText,
  cardListSelector,
  cardSelector,
  validationConfig,
  profileForm,
  mestoForm,
  avatarForm,
  placeFormElement,
  placeInputText,
  avatarInput
} from '../utils/utils.js';
import Api from '../components/Api.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithConfirm from '../components/PopupWithSubmit.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import FormValidator from '../components/FormValidator.js';

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-16',
  headers: {
    authorization: 'cce65d1e-fda6-465b-9ce4-eb05b78869dc',
    'Content-Type': 'application/json'
  }
});

const userInfo = new UserInfo('.profile__avatar', '.profile__name', '.profile__text');

Promise.all([
  api.getUserData(),
  api.getInitialCards()
])
.then((values) => {
  const [userData, cards] = values
  const userId = userData._id;

  userInfo.setUserInfo({
    avatar: userData.avatar,
    name: userData.name,
    about: userData.about
  });

const renderLoading = (button, isLoading) => {
  if (isLoading) {
    button.textContent = 'Сохранение...';
  } else {
    button.textContent = 'Сохранить';
  }
};

const handleLikeClick = (card) => {
  if (card.isLiked()) {
    const unlikeCard = api.likeRemove({ _id: card._id });

    unlikeCard.then(cardInfo => {
      card.setLikesCount(cardInfo.likes.length);
      card.likeCard();
    })
    .catch((err) => {
      console.log(err);
    })
  } else {
    const likeCard = api.likeSet({ _id: card._id });

    likeCard.then(cardInfo => {
      card.setLikesCount(cardInfo.likes.length);
      card.likeCard();
    })
    .catch((err) => {
      console.log(err);
    })
  }
}

const handleRemoveClick = (card) => {
  confirmPopup.open(card);
}

const createCard = ({ name, link, likes, _id, owner }, userId) => {
  const card = new Card({ name, link, likes, _id, owner, cardSelector,
    handleCardClick: () => {
    imagePopup.open({ name, link });
    }}, handleLikeClick, handleRemoveClick, userId);

  const cardElement = card.generateCard();

  return cardElement;
}

const cardList = new Section({
  renderer: ({ name, link, likes, _id, owner }) => {
    const card = createCard({ name, link, likes, _id, owner }, userId);

    cardList.addItem(card);
  }
}, cardListSelector);

const handleConfirmClick = (card) => {
  const deleteCard = api.removeCard({ _id: card._id });

  deleteCard.then(() => {
    card.removeCard();
    confirmPopup.close();
  })
  .catch((err) => {
    console.log(err);
  })
}

const handleAvatarSubmit = () => {
  renderLoading(avatarSaveButton, true);

  const patchAvatar = api.setUserAvatar({
     avatar: avatarInput.value
    });

  patchAvatar.then(({ avatar, name, about }) => {
    userInfo.setUserInfo({ avatar, name, about});
    editAvatarPopup.close();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    renderLoading(avatarSaveButton, false);
  })
}

const handleFormSubmit = () => {
  renderLoading(profileSaveButton, true);

  const patchProfile = api.setUserData({
    name: popupName.value,
    about: popupText.value
  });

  patchProfile.then(({ avatar, name, about }) => {
    userInfo.setUserInfo({ avatar, name, about });
    editProfilePopup.close();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    renderLoading(profileSaveButton, false);
  })
}

const handleMestoSubmit = () => {
  renderLoading(mestoSaveButton, true);

  const newCard = api.addCard({
    name: placeFormElement.value,
    link: placeInputText.value
  });

  newCard.then(({ name, link, likes, _id, owner }) => {
    return createCard({ name, link, likes, _id, owner }, userId);
  })
  .then(cardElement => {
    cardList.addNewItem(cardElement);
    addCardPopup.close();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    renderLoading(mestoSaveButton, false);
  });
}

cardList.renderItems(cards);

const imagePopup = new PopupWithImage({ popupSelector: imgPopup });
const confirmPopup = new PopupWithConfirm({ popupSelector: popupConfirmSelector }, handleConfirmClick);
const editProfilePopup = new PopupWithForm({ popupSelector: profilePopup}, handleFormSubmit);
const editAvatarPopup = new PopupWithForm({ popupSelector: popupAvatarSelector }, handleAvatarSubmit);
const addCardPopup = new PopupWithForm({ popupSelector: popupAddCard }, handleMestoSubmit);


const editAvatarFormValidator = new FormValidator(validationConfig, avatarForm);
const editProfileFormValidator = new FormValidator(validationConfig, profileForm);
const addCardFormValidator = new FormValidator(validationConfig, mestoForm);

  editProfileAvatarButton.addEventListener('click', () => {
    editAvatarFormValidator.resetForm();
    editAvatarPopup.open();
  });

  profileOpenButton.addEventListener('click', () => {
    const profileData = userInfo.getUserInfo();

    popupName.value = profileData.name;
    popupText.value = profileData.about;

    editProfileFormValidator.resetForm();
    editProfilePopup.open();
  });

  openPlacePopupButton.addEventListener('click', () => {

    addCardFormValidator.resetForm();
    addCardPopup.open();
  });

  confirmPopup.setEventListeners();
  imagePopup.setEventListeners();
  editAvatarPopup.setEventListeners();
  editProfilePopup.setEventListeners();
  addCardPopup.setEventListeners();

  editAvatarFormValidator.enableValidation();
  editProfileFormValidator.enableValidation();
  addCardFormValidator.enableValidation();
})
.catch((err) => {
  console.log(err);
})



