const profilePopup = document.querySelector('.popup');
const profileOpenButton = document.querySelector('.profile__edit')
const profileCloseButton = profilePopup.querySelector('.popup__close')
const formElement = profilePopup.querySelector('.popup__content');
const nameInput = profilePopup.querySelector('.popup__name');
const jobInput = profilePopup.querySelector('.popup__text');
const profSubmitButton = profilePopup.querySelector('.popup__save');
const profName = document.querySelector('.profile__name');
const profText = document.querySelector('.profile__text');
const elementTemplateElement = document.querySelector('.element-template');
const elementGroup = document.querySelector('.element__group');
const elementList = document.querySelector('.element__list');
const placePopup = document.querySelector('.popup-mesto');
const openPlacePopupButton = document.querySelector('.profile__button-add');
const closePlacePopupButton = placePopup.querySelector('.popup-mesto__close');
const placeFormElement = placePopup.querySelector('.popup-mesto__content');
const placeInputElement = placeFormElement.querySelector('.popup-mesto__name');
const placeInputText = placeFormElement.querySelector('.popup-mesto__text');
const placeSubmitButton = placeFormElement.querySelector('.popup-mesto__save');
const imgPopup = document.querySelector('.popup-img');
const imgPopupName = imgPopup.querySelector('.popup-img__name');
const imgPopupImage = imgPopup.querySelector('.popup-img__image');
const imgCloseButton = imgPopup.querySelector('.popup-img__close');

initialCards.forEach(function(element) {
  createCards(element.name, element.link);
});


const popupToggle = function (event) {
    if (!profilePopup.classList.contains('popup__opened')) {
        nameInput.value = profName.textContent;
        jobInput.value = profText.textContent;
    }
    profilePopup.classList.toggle('popup__opened');
};

const popupImgToggle = function () {
    imgPopup.classList.toggle('popup__opened');
}

const placePopupToggle = function () {
    placePopup.classList.toggle('popup-mesto__opened');  
    placeSubmitButton.setAttribute('disabled', true);
    placeSubmitButton.classList.add('popup__but-disabled');
    placeSubmitButton.classList.remove('popup__save');
}

const closePopupOverlay = function (event) {
    if (event.target !== event.currentTarget) {return}
    popupToggle();
}

const closePlacePopupOverlay = function (event) {
    if (event.target !== event.currentTarget) {return}
    placePopupToggle();
}

const closeImgPopupOverlay = function (event) {
    if (event.target !== event.currentTarget) {return}
    popupImgToggle();
}

document.body.addEventListener('keyup', function (esc) {
  const escKey = 27;
  if (esc.keyCode === escKey) {
      profilePopup.classList.remove('popup__opened');
      placePopup.classList.remove('popup-mesto__opened');
      imgPopup.classList.remove('popup__opened');
  };
}, false);

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profName.textContent = nameInput.value;
    profText.textContent = jobInput.value;
    popupToggle();
}

formElement.addEventListener('submit', formSubmitHandler);

function createCards(name, link) {
    const card = elementTemplateElement.content.cloneNode(true); 
    const elementImage = card.querySelector('.element__image');
    const elementText = card.querySelector('.element__text');

    elementImage.src = link;
    elementImage.alt = name;
    elementText.textContent = name;
    addCard(card);
}

function addCard(card) {
    elementList.prepend(card);
}

elementList.addEventListener('click', function(evt) {
  if (evt.target.classList.contains('element__delete')) {
    const place = evt.target.closest('.element__group');
    place.remove();
  }
})

elementList.addEventListener('click', function(evt) {
  if (evt.target.classList.contains('element__image')) {
    const imageTarget = evt.target;
    imgPopup.classList.toggle('popup__opened');
    imgPopupImage.src = imageTarget.src;
    const elementCard = imageTarget.closest('.element__group');
    imgPopupName.textContent = elementCard.querySelector('.element__text').textContent;

  }
})

elementList.addEventListener('click', function(evt) {
  if (evt.target.classList.contains('element__like')) {
    evt.target.classList.toggle('element__like-active')
  }
})

elementList.addEventListener('click', function(evt)  { 
  if (evt.target.classList.contains('element__image')) {
    evt.target.classList.toggle('popup__opened');
    const imgImageTarget = evt.target;
    imgPopupImage.src = imgImageTarget.src;
    const imageCard = evt.target.closest('.element__group');
    imgPopupName.textContent = imageCard.querySelector('.element__text').textContent;
  }
})


placeFormElement.addEventListener('submit', el => {
    el.preventDefault();
    const name = placeInputElement.value;
    const link = placeInputText.value;
    placeFormElement.reset();
    createCards(name, link);
    placePopupToggle();
    
})

profileOpenButton.addEventListener('click', popupToggle)
profileCloseButton.addEventListener('click', popupToggle)
profilePopup.addEventListener('click', closePopupOverlay);
placePopup.addEventListener('click', closePlacePopupOverlay);
openPlacePopupButton.addEventListener('click', placePopupToggle);
closePlacePopupButton.addEventListener('click', placePopupToggle);
imgCloseButton.addEventListener('click', popupImgToggle);
imgPopup.addEventListener('click', closeImgPopupOverlay);