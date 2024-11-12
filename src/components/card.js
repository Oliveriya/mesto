// Задача – создавать (добавлять) и удалять карточки.
// Вам нужно написать функцию, которая принимает в аргументах данные одной
// карточки и функцию-колбэк для удаления, а возвращает подготовленный к выводу элемент
// карточки. Для этого внутри функции вам понадобится:
// -- клонировать шаблон,
// -- установить значения вложенных элементов,
// --  добавить к иконке удаления обработчик клика, по которому будет вызван переданный в аргументах колбэк.
// Используя полученную функцию, выведите все карточки из массива на страницу в элемент .places__list.

import { cardDeletePromise, config } from "./promises";

// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;
// То, что я буду вставлять в элемент .places_list

// @todo: Функция создания карточки
// создаем функцию и переменными "удалить карточку, добавить лайк,
// открыть изображение карточки, айтем, мой айди
// внутри назначаем переменные и обязательно копируем cardTemplate,
// делая из него элемент
// зачем-то пишем про карточку cardImage.src = item.link
function createCardElement(
  removeCardElement,
  cardLikeFunction,
  openCardImage,
  item,
  myId
) {
  const cardElement = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);
  // изображение карточки
  // заголовок карточки
  // кнопка удаления карточки
  // кнопка для лайков карточки
  // счетчик лайков
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const buttonRemoval = cardElement.querySelector("card__delete-button");
  const buttonCardLike = cardElement.querySelector(".card__like-button");
  const cardLikeCounter = cardElement.querySelector(".card__like-counter");
  //     Устанавливаются значения для изображения и заголовка карточки:
  // src изображения задаётся ссылкой из объекта item.
  // alt изображения и текст заголовка заполняются именем из item.
  cardImage.src = item.link;
  cardTitle.alt = item.alt;
  cardTitle.textContent = item.name;
}

// @todo: Функция удаления карточки
// здесь две переменные – карточка и айтем,
// делаем через промисы
function removeCardElement(card, item) {
  cardDeletePromise(`${config.baseUrl}/cards/${item._id}`)
    .then((res) => {
      card.remove();
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}
export { createCardElement, removeCardElement };