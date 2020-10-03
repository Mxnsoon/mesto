export const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const profile = document.querySelector('.profile');
export const profileOpenButton = profile.querySelector('.profile__edit');
export const openPlacePopupButton = profile.querySelector('.profile__button-add');

export const imgPopup = '.popup_image';
export const profilePopup = '.popup_profile';
export const popupAddCard = '.popup_mesto';

export const popupName = document.querySelector('.popup__field_name');
export const popupText = document.querySelector('.popup__field_text');
export const placeFormElement = document.querySelector('.popup__field_mesto-name');
export const placeInputText = document.querySelector('.popup__field_mesto-text');
export const profileForm = document.querySelector('.popup__content_profile')
export const mestoForm = document.querySelector('.popup__content_mesto')

export const elementList = '.element__list';
export const cardSelector = '.element-template';

export const validationConfig = { 
  formSelector: '.popup__content', 
  inputSelector: '.popup__field', 
  submitButtonSelector: '.popup__save', 
  inactiveButtonClass: 'popup__save_disabled', 
  inputErrorClass: 'popup__field_type_error', 
  errorClass: 'popup__field_error-visible', 
}; 