const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__edit');
const closeButton = document.querySelector('.popup__close');
const formElement = document.querySelector('.popup__content');
const nameInput = document.querySelector('.popup__name');
const jobInput = document.querySelector('.popup__text');
const cardsList = document.querySelector('.element__group');
const popupImageOpenButton = document.querySelector('.profile__button-add');
const profName = document.querySelector('.profile__name');
const profText = document.querySelector('.profile__text');
const popupImage = document.querySelector('.popup-mesto');
const popupImageCloseButton = document.querySelector('.popup-mesto__close');
let imageFormElement = document.querySelector('.popup-mesto__content');
const popupImg = document.querySelector('.popup-img');
const popupImgText = popupImg.querySelector('.popup-img__name');
const popupImgFoto = popupImg.querySelector('.popup-img__image');
const popupImgCloseButton = popupImg.querySelector('.popup-img__close');



const popupToggle = function (event) {
  if (!popup.classList.contains('popup__opened')){
    nameInput.value = profName.textContent;
    jobInput.value = profText.textContent;

  }
  popup.classList.toggle('popup__opened');
};

function formSubmitHandler(evt){
  evt.preventDefault();
  profName.textContent = nameInput.value;
  profText.textContent = jobInput.value;
  popupToggle();

}

formElement.addEventListener('submit', formSubmitHandler);


popupOpenButton.addEventListener('click', popupToggle);
closeButton.addEventListener('click', popupToggle);

let popupImageToggle = function() {
  if (popupImage.classList.contains('popup-mesto__opened')){

  }
  popupImage.classList.toggle('popup-mesto__opened');
};

popupImageOpenButton.addEventListener('click', popupImageToggle);
popupImageCloseButton.addEventListener('click', popupImageToggle);


const initialCards = [
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

const placesContainer = document.querySelector('.element__list');
const addPlaceToForm = document.querySelector('.popup-mesto__content');

const addItemToContainer = (name, link) => {
  const placeElement = document.querySelector ('.element-template').content.cloneNode(true);
  placeElement.querySelector('.element__text').textContent = name;
  placeElement.querySelector('.element__image').src = link;
  placeElement.querySelector('.element__like').addEventListener('click', evt => {
    evt.target.classList.toggle('element__like-active');
  });
  placeElement.querySelector('.element__delete').addEventListener('click', evt => {
    const place = evt.target.closest('.element__group');
    place.remove();
  })
  placesContainer.prepend(placeElement);
}

initialCards.forEach(cards => {
  addItemToContainer(cards.name, cards.link)
});

addPlaceToForm.addEventListener('submit', evt => {
  evt.preventDefault()
  const placeElement = addPlaceToForm.querySelector('.popup-mesto__name').value;
  const placeElement1 = addPlaceToForm.querySelector('.popup-mesto__text').value;
  addItemToContainer(placeElement, placeElement1);
  popupImageToggle();
  addPlaceToForm.reset();
});

const popupImgToggle = function () {
  popupImg.classList.toggle('popup__opened');
}

const figureFoto = placesContainer.querySelectorAll('.element__image');

figureFoto.forEach((activeFoto) => {
  activeFoto.addEventListener('click', (evt) => {
    const figureFotoTarget = evt.target;
    popupImg.classList.toggle('popup__opened');
    popupImgFoto.src = figureFotoTarget.src;
    const figureCard = figureFotoTarget.closest('.element__group');
    popupImgText.textContent = figureCard.querySelector('.element__text').textContent;
  })
})



function closePopupImg() {
  popupImg.classList.remove('popup__opened');
};

popupImgCloseButton.addEventListener('click', closePopupImg);