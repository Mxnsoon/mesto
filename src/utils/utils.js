export const profile = document.querySelector('.profile');
export const profileAvatar = profile.querySelector('.profile__avatar');
export const editProfileAvatarButton = profile.querySelector('.profile__avatar-edit');
export const profileOpenButton = profile.querySelector('.profile__edit');
export const openPlacePopupButton = profile.querySelector('.profile__button-add');

export const popupConfirmSelector = '.popup_confirmation';
export const popupAvatarSelector = '.popup_avatar';
export const profilePopup = '.popup_profile';
export const popupAddCard = '.popup_mesto';
export const imgPopup = '.popup_image';

export const editAvatarPopup = document.querySelector(popupAvatarSelector);
export const editProfilePopup = document.querySelector(profilePopup);
export const addCardPopup = document.querySelector(popupAddCard);

export const avatarSaveButton = editAvatarPopup.querySelector('.popup__save');
export const profileSaveButton = editProfilePopup.querySelector('.popup__save');
export const mestoSaveButton = addCardPopup.querySelector('.popup__save');

export const popupName = document.querySelector('.popup__field_name');
export const popupText = document.querySelector('.popup__field_text');
export const placeFormElement = document.querySelector('.popup__field_mesto-name');
export const placeInputText = document.querySelector('.popup__field_mesto-text');
export const avatarInput = document.querySelector('.popup__field_avatar')

export const cardListSelector = '.element__list';
export const cardSelector = '.element-template';

export const profileForm = document.querySelector('.popup__content_profile')
export const mestoForm = document.querySelector('.popup__content_mesto')
export const avatarForm = document.querySelector('.popup__content_avatar')

export const validationConfig = {
  formSelector: '.popup__content', 
  inputSelector: '.popup__field', 
  submitButtonSelector: '.popup__save', 
  inactiveButtonClass: 'popup__save_disabled', 
  inputErrorClass: 'popup__field_type_error', 
  errorClass: 'popup__field_error-visible', 
};
