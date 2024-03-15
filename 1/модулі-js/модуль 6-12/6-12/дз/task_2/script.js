// ЗАДАЧА 2
// 2.1НАПИШІТЬ КАЛЬКУЛЯТОР, ЯКИЙ БУДЕ РАХУВАТИ ЦІНУ ШАШЛИКА, В ЗАЛЕЖНОСТІ ВІД ЦІНИ ЗА КІЛОГРАМ І КІЛЬКОСТІ КУПЛЕНОГО ПРОДУКТА , І БУДЕ ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН
// html/

// <div class="container">
//     <h2 class="title">Скільки коштує мясо на шашлик :) ?</h2>
//     <form class="form">
//         <label for="price">Ціна грн</label>
//         <input type="text" id="price" name="price" value="50">
//         <label for="quantity">Кількість<span class="amount">1</span>кг </label>
//         <input type="range" id="quantity" name="quantity" value="1" min="1" , max="20">
//     </form>
//     <p class="text-right total"></p>//ТУТ ФІНАЛЬНА ЦІНА ТОВАРУ
// </div>

// const form = document.querySelector(".form");
// const inputPrice = document.querySelector("#price");
// const amount = document.querySelector(".amount");
// const quantity = document.querySelector("#quantity");
// const textRight = document.querySelector(".text-right");

// function calculator(event) {
//   const price = inputPrice.value;
//const amountOfMeat = quantity.value;
// console.log(price);
// console.log(amountOfMeat);
//   const total = price * amountOfMeat;
//   textRight.textContent = total;
//   event.preventDefault();
// }

// function quantityTotal() {
//   const amountOfMeat = quantity.value;
//   amount.textContent = amountOfMeat;
// }

// calculator();

// form.addEventListener("submit", calculator);
// form.addEventListener("input", quantityTotal);

// 2.2 ПЕРЕПИШІТЬ КОД , ЩОБ ЗНАЧЕННЯ МИ ОТРИМУВАЛИ ПО КЛІЦІ НА КНОПКУ ,
//  ПРИ НАЖАТТІ ЯКОГО БУДЕ ВАМ РАХУВАТИ ТА ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН

// 2.3 НАПИШІТЬ  РАНДОМНИЙ КОЛІР ДЛЯ НАШОЇ ФОРМИ КОЛЬКУЛЯТОРА ЗА ДОПОМОГОЮ ІНЛАЙНОВОГО СТИЛЮ

// const container = document.querySelector(".container");

// const randomRgbColor = () => {
//   const r = Math.round(Math.random() * (255 - 1) + 1);
//   const g = Math.round(Math.random() * (255 - 1) + 1);
//   const b = Math.round(Math.random() * (255 - 1) + 1);
//   return `rgb(${r},${g},${b})`;
// };

// const color = randomRgbColor();
// container.style.backgroundColor = color;
//
const result = document.querySelector(".form");
const resultAaa = document.querySelector("#price");
const resultBbb = document.querySelector(".amount");
const resultquintiti = document.querySelector("#quantity");
const textRight = document.querySelector(".text-right");
function caePageNumber(event) {
  event.preventDefault();
  const price = resultAaa.value;
  const priceQuantity = resultquintiti.value;
  const result = price * priceQuantity;
  textRight.textContent = result;
  resultBbb.textContent = priceQuantity;
  //   console.log(price);
  //   console.log(priceQuantity);
}

result.addEventListener("submit", caePageNumber);
result.addEventListener("input", resultCarePage);
//! Зробили калькулятор
//! Доробляємо умову
// 2.2 ПЕРЕПИШІТЬ КОД , ЩОБ ЗНАЧЕННЯ МИ ОТРИМУВАЛИ ПО КЛІЦІ НА КНОПКУ ,
//  ПРИ НАЖАТТІ ЯКОГО БУДЕ ВАМ РАХУВАТИ ТА ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН
function resultCarePage(event) {
  event.preventDefault();
  const priceQuantity = resultquintiti.value;
  resultBbb.textContent = priceQuantity;
}
//!
// 2.3 НАПИШІТЬ  РАНДОМНИЙ КОЛІР ДЛЯ НАШОЇ ФОРМИ КОЛЬКУЛЯТОРА ЗА ДОПОМОГОЮ ІНЛАЙНОВОГО СТИЛЮ
const container = document.querySelector(".container");

const randomRgbColor = () => {
  const r = Math.round(Math.random() * (255 - 1) + 1);
  const g = Math.round(Math.random() * (255 - 1) + 1);
  const b = Math.round(Math.random() * (255 - 1) + 1);
  return `rgb(${r},${g},${b})`;
};
const color = randomRgbColor();
container.style.backgroundColor = color;
