//! 1. Задача
//(map()) Потрібно отримати масив імен студентів та записати їх великими літерами.
// let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];
// const name = studentRecords.map((student)=>{
//     return student.name.toUpperCase();
// })
//console.log(name);

//! 2. ЗАдача
//(filter()) Припустимо, що ми маємо той самий набір даних, що й вище, але цього разу ми хочемо
// отримати детальну інформацію про студентів, які набрали більше 50 балів.
// let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];

// const student = studentRecords.filter(function (stutendName) {
//   return stutendName.marks > 50;
// });
// console.log(student);

//! 3. Задача
//(reduce()) Необхідно одержати загальну суму балів студентів.
// let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];
// const result = studentRecords.reduce((acc, student) => {
//   return acc + student.marks;
// }, 0);
// console.log(result);

//! 4. Задача
//(map(), filter()) Необхідно отримати лише імена студентів, які набрали більше 50 балів із того ж набору
// даних.
// let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];
// const result = studentRecords
//   .filter((student) => {
//     return student.marks > 50;
//   })
//   .map((student) => student.name);
// console.table(result);

//! 5. Задача
//(filter(), reduce()) Необхідно отримати загальну суму балів студентів із id більше 120.
// let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];
// const result = studentRecords
//   .filter((student) => {
//     return student.id > 120;
//   })
//   .reduce((acc, student) => {
//     return acc + student.marks;
//   }, 0);
// console.log(result);

//! 6. Задача
//(map(), filter(), reduce()) Необхідно вивести загальну кількість студентів із балами
//більше 50, отриманими після нарахування заохочення до 15 балів.
//Використовуючи map(), додається заохочення до 15 балів студентам, які набрали менше 50 балів.
// Потім використовуємо filter() для масиву студентів, що повертається функцією map().
// Так ми знайдемо всіх студентів із відмітками понад 50.
// Нарешті ми використовували функцію reduce() для повертаного функцією filter()
// масиву студентів, щоб повернути суму оцінок.
// let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];
// const result = studentRecords
//   .map((student) => {
//     if (student.marks < 50) {
//       student.marks += 15;
//     }
//     return student;
//   })
//   .filter((student) => student.marks > 50)
//   .reduce((acc, student) => acc + student.marks, 0);
// console.log(result);
//! 7. Задача
// Напиши функцію конструктор User для створення користувача з такими властивостями
//a. userName - ім'я, рядок
//b. age - вік, число
//c. numbersOfPost - кількість постів, число
//d. функція очікує 1 параметр - об'єкт налаштувань з однойменними властивостями

//Додай метод getInfo(), який повертає рядок:
//`Користувачеві ${} ${} років і в нього ${} публікацій.`

// const User = function (userObj) {
//   this.userName = userObj.userName;
//   this.age = userObj.age;
//   this.numbersOfPost = userObj.numbersOfPost;
// };

// User.prototype.getInfo = function () {
//   return `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`;
// };
// const user = new User({ userName: "Poly", age: 34, numbersOfPost: 78 });
// console.log(user.getInfo());

//Для управління складом товарів.
//При виклику отримуватиме один агрумент - початковий масив товарів,
//і записувати їх у властивість items.
//Додай методи класу:
//getItems() - повертайте масив товарів
//addItems(item) - отримує новий товар та додає його до поточних
//removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних
//++++++++++++++++++++++++++++++++++++++++++
// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItems(item) {
//     this.items.push(item);
//   }
//   removeItem(item) {
//     this.items = this.items.filter((frutc) => frutc !== item);
//   }
// }

// const storage = new Storage(["apple", "mango"]);
// console.log(storage.getItems());
// storage.addItems("banana");
// storage.removeItem("apple");
// console.log(storage.getItems());

//Реалізуйте клас Worker (Працівник), який матиме такі властивості: name (ім'я),
//surname (прізвище), rate (ставка за день роботи), days (кількість відпрацьованих
//днів). Також клас повинен мати метод getSalary(), який виводитиме зарплату
//працівника. Зарплата - це добуток (множення) ставки rate на кількість
//відпрацьованих днів days. І метод getFullName() - ім'я та прізвище працівника.
// class Worker {
//   constructor(name, surname, rate, days) {
//     this.name = name;
//     this.surname = surname;
//     this.rate = rate;
//     this.days = days;
//   }
//   getSalary() {
//     return this.rate * this.days;
//   }
//   get getFullName() {
//     return `${this.name} ${this.surname}`;
//   }
// }
// const worker = new Worker("Іван", "Іванов", 10, 31);

// console.log(worker.name); //Виведе 'Іван'
// console.log(worker.surname); //Виведе 'Іванов'
// console.log(worker.getFullName); //Виведе 'Іванов Іван'
// console.log(worker.rate); //Виведе 10
// console.log(worker.days); //Виведе 31
// console.log(worker.getSalary()); //Виведе 310 - тобто 10 * 31
// const courseTopic = "JavaScript essentials";

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic.length - 1;

// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(courseTopic[lastElement]);

// Функція getLastElementMeta(array) приймає один параметр array -
//масив довільних значень. Доповни код функції таким чином, щоб вона повертала новий масив з двох елементів:

// перший елемент - це індекс останнього елементу у масиві array
// другий елемент - це значення останнього елементу у масиві array
// function getLastElementMeta(array) {
//   const result = array.[];
//   return result[array.length - 1];
// }

// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));
// console.log(getLastElementMeta(["apple", "peach", "pear"]));
// console.log(getLastElementMeta(["apple", "peach"]));
// console.log(getLastElementMeta(["apple"]));

//! 1. Задача
// Перед звільненням розробник зламав вихідний код управління акаунтами користувачів нашого сервісу доставки їжі. Виконай рефакторинг методів об'єкта customer, розставивши відсутні this під час звернення до властивостей об'єкта.

// Використай цей стартовий код і виконай рефакторинг. Після оголошення об'єкта ми додали виклики методів. У консоль будуть виведені результати їх роботи. Будь ласка, нічого там не змінюй.
// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// Створи клас Storage, який створюватиме об'єкти для управління складом товарів. Клас очікує лише один аргумент — початковий масив товарів, який записується до створеного об'єкта в приватну властивість items.

// Оголоси наступні методи класу:

// getItems() — повертає масив поточних товарів у приватній властивості items.
// addItem(newItem) — приймає новий товар newItem і додає його до масиву товарів у приватну властивість items об'єкта.
// removeItem(itemToRemove) — приймає рядок з назвою товару itemToRemove і видаляє його з масиву товарів у приватній властивості items об'єкта.

// Візьми код нижче з ініціалізацією екземпляра й викликами методів і встав його після оголошення класу для перевірки коректності роботи. У консоль будуть виведені результати їх роботи. Будь ласка, нічого там не змінюй.

// class Storage {
//   #items;
//   constuctor(items) {
//     this.items = items;
//   }
// }
//! Задача
/**
 * Реалізуй пошук автомобілів по сайту
 * Користувач потрапляє на сайт і одразу бачить форму для пошуку і картки всіх автомобілів (масив cars)
 * Користувач може ввести в форму назву Марки або Моделі авто і в тегу селект обрати що він ввів Марку або Модель (https://prnt.sc/PkkZZRy_ggtT)
 * Після натискання кнопки пошуку (сабміт форми) відмалюй авто які збігаються з критеріями пошуку
 */

// const cars = [
//   {
//     id: 1,
//     car: "Audi",
//     type: "A6",
//     price: 30000,
//     img: "https://static.wixstatic.com/media/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg/v1/fill/w_520,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg",
//   },
//   {
//     id: 2,
//     car: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   },
//   {
//     id: 3,
//     car: "Audi",
//     type: "Q7",
//     price: 40000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//   },
//   {
//     id: 4,
//     car: "BMW",
//     type: "5 siries",
//     price: 9000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//   },
//   {
//     id: 5,
//     car: "Honda",
//     type: "Accord",
//     price: 20000,
//     number: "+380000000000",
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//   },
//   {
//     id: 6,
//     car: "Volvo",
//     type: "XC60",
//     price: 7000,
//     img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   },
// ];
/*
1. відмальовуємо карточки автомобілів, створюючи розмітку через map та join, показуючи її на екрані за допомогою innerHTML
2. повісили обробник подій по сабміту на форму
3. зібрали дані форми через елементи форми
4. запускаємо фільтрацію масиву автомобілів по критеріям з даних форми(тобто по запиту і по марці або моделі), якщо обʼєкт в масиві підходить - ми його додаємо в масив результату, якщо ні - не додаємо
5. Відмальовуємо нову розмітку на основі масиву результатів який ми отримали в наслідок фільтрації 

*/
// const elements = {
//   form: document.querySelector(".js-form"),
//   container: document.querySelector(".js-list"),
// };
// elements.container.innerHTML = pageNumber(cars);
// function pageNumber(arr) {
//   return arr
//     .map(
//       ({ id, car, type, price, img }) =>
//         `<li class="car-card" data-id="${id}">
//       <img class="img-car" src="${img}" alt="${type}"/>
//       <h2 class="car-dir">${car}</h2>
//       <h3 class="car-dir">${price}</h3>
//       </li>`
//     )
//     .join("");
// }

// const result = document.querySelector(".gallery");

// function handleList(arr) {
//   return `resut`;
// }

// const images = [
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
//     description: "Hokkaido Flower",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
//     description: "Container Haulage Freight",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
//     description: "Aerial Beach View",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
//     description: "Flower Blooms",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
//     description: "Alpine Mountains",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
//     description: "Mountain Lake Sailing",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
//     description: "Alpine Spring Meadows",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
//     description: "Nature Landscape",
//   },
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
//     description: "Lighthouse Coast Sea",
//   },
// ];
// const form = document.querySelector(".form");
// const inputPrice = document.querySelector("#price");
// const amount = document.querySelector(".amount");
// const quantity = document.querySelector("#quantity");
// const textRight = document.querySelector(".text-right");

// function calculator(event) {
//   const price = inputPrice.value;
//   const amountOfMeat = quantity.value;
//   // console.log(price);
//   // console.log(amountOfMeat);
//   const total = price * amountOfMeat;
//   textRight.textContent = total;
//   event.preventDefault();
// }

// function quantityTotal() {
//   const amountOfMeat = quantity.value;
//   amount.textContent = amountOfMeat;
// }

// // calculator();

// form.addEventListener("submit", calculator);
// form.addEventListener("input", quantityTotal);

// // 2.2 ПЕРЕПИШІТЬ КОД , ЩОБ ЗНАЧЕННЯ МИ ОТРИМУВАЛИ ПО КЛІЦІ НА КНОПКУ ,
// //  ПРИ НАЖАТТІ ЯКОГО БУДЕ ВАМ РАХУВАТИ ТА ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН

// // 2.3 НАПИШІТЬ  РАНДОМНИЙ КОЛІР ДЛЯ НАШОЇ ФОРМИ КОЛЬКУЛЯТОРА ЗА ДОПОМОГОЮ ІНЛАЙНОВОГО СТИЛЮ

// const container = document.querySelector(".container");

// const randomRgbColor = () => {
//   const r = Math.round(Math.random() * (255 - 1) + 1);
//   const g = Math.round(Math.random() * (255 - 1) + 1);
//   const b = Math.round(Math.random() * (255 - 1) + 1);
//   return `rgb(${r},${g},${b})`;
// };

// const color = randomRgbColor();
// container.style.backgroundColor = color;
//const result = document.querySelector(".js-form");
//console.log(result);
// result.addEventListener("submit", handeClick);
// function handeClick(event) {
//   event.preventDefault();
//   const edvent = event.currentTarget.elements;
//   const info = {
//     email: edvent.email.value,
//     password: edvent.password.value,
//     comment: edvent.comment.value,
//   };
//   console.log(info);
//   event.currentTarget.reset();
// }
