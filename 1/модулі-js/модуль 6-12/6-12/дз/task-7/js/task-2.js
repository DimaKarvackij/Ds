// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>.

// Ти можеш створити й додати HTML-елементи, використовуючи document.createElement() і elem.append() або шаблонні рядки і elem.insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами через CSS класи.

//! Важчий варіант
// const namePage = document.querySelector(".gallery");
// const namePageReuslt = document.createElement("li");
// namePageReuslt.classList.add("is-active");
// const pageNumber = document.createElement("img");
// pageNumber.src =
//   "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260";
// pageNumber.alt = "White and Black Long Fur Cat";
// namePageReuslt.append(pageNumber);
// namePage.append(namePageReuslt);

// const namePageReusltName = document.createElement("li");
// namePageReusltName.classList.add("is-active");
// const namePageReusltNameIS = document.createElement("img");
// namePageReusltNameIS.src =
//   "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260";
// namePageReusltNameIS.alt = "White and Black Long Fur Cat";
// namePageReusltName.append(namePageReusltNameIS);
// namePage.append(namePageReusltName);

// const namePageReusltSecond = document.createElement("li");
// namePageReusltSecond.classList.add("is-active");
// const namePageReusltSecondIf = document.createElement("img");
// namePageReusltSecondIf.src =
//   "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260";
// namePageReusltSecondIf.alt = "White and Black Long Fur Cat";
// namePageReusltSecond.append(namePageReusltSecondIf);
// namePage.append(namePageReusltSecond);

const namePage = document.querySelector(".gallery");
const result = `<li class="is-active"><img></li>`;
namePage.insertAdjacentHTML("beforeend", result);

const images = [
  {
    url: "<https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260>",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "<https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260>",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "<https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260>",
    alt: "Group of Horses Running",
  },
];
