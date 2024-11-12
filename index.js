import "./styles/index.css";
import {
  createCardElement,
  removeCardElement,
  cardLikeFunction,
} from "./components/card.js";
import { openModal, closeModal } from "./components/modal.js";
import { enableValidation, clearValidation } from "./components/validation.js";
import {
  fetchResponse,
  profileEditPromise,
  cardAddPromise,
  avatarEditPromise,
  config,
} from "./components/promises.js";
// Карточки должны создаваться и удаляться
// Что для этого нужно? 
// 1. Изучи верстку, пойми, какие узлы необходиы для работы. 
// 2. Пропиши DOM узлы

// @todo: DOM узлы
const container = document.querySelector('.content');
const cardsContainer = container.querySelector('.places__list');
const cardElement = cardsContainer.querySelector('.places__item');

const popup = document.querySelectorAll('.popup');
const popClose = popup.querySelectorAll('.popup__close');
const popupCard = popup.querySelectorAll('.popup__content');
const popupImage = popup.querySelector('.popup__image');
const popupCaption = popup.querySelector('.popup__caption');
const openImage = 
const popupInput = document.querySelectorAll('.popup__input');
const popupForm = document.querySelectorAll('.popup__form');
const cardTemplate = document.querySelector('#card-template');

const buttonProfileAdd = 
const buttonProfileEdit = 
