const car = [
  {
    name: "pajero",
    img: "https://smart-style.com.ua/uploads/mitsubishi-pajero-2011.jpg",
    price: 950000,
    description:
      "Широкий вибір комплектацій дозволяє підібрати автомобіль під ваші потреби та стиль життя. Тип привода, потужність двигуна та кількість місць у салоні — порівняти комплектації та ціни стало ще простіше.",
  },
  {
    name: "jeep",
    img: "https://ukravto.ua/files/Text/190225_JEEP_NEW_CHEROKEE_9.jpg",
    price: 1200000,
    description:
      "Як і всі моделі Jeep - володіє безпрецедентним поєднанням ходових якостей, комфортності та міського шику. 2,4-літровий бензиновий двигун в поєднанні з шестиступінчастою автоматичною коробкою передач, яка відрізняється плавністю перемикання.",
  },
  {
    name: "toyota",
    img: "https://molbuk.ua/uploads/posts/2021-06/1623319390_toyota_camry.jpg",
    price: 999000,
    description:
      "Оснащений тихим самозарядним гібридним двигуном об’ємом 2,5 літра, автомобіль забезпечує значний крутний момент на низьких оборотах і феноменальну потужність на високих, а також краще реагування на дії водія та легше прискорення.",
  },
  {
    name: "range rover",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7UDUbCd6nzB5lO33DgkvyXJD4OOoKEsCemg&usqp=CAU",
    price: 5328000,
    description:
      "Редуктивний характер дизайну не містить зайвих деталей, що створює форму, яка демонструє захоплюючий дух сучасності. Це найбажаніший Range Rover серед усіх існуючих.",
  },
];
const resultAaa = document.querySelector(".js-goods");
console.log(resultAaa);
function productCar({ name, img, price, description }) {
  const productElememt = document.createElement("li");
  const productTitle = document.createElement("h2");
  productTitle.textContent = name;
  const productImg = document.createElement("img");
  productImg.src = img;
  productImg.alt = name;
  productImg.width = 300;
  const productPrice = document.createElement("p");
  productPrice.textContent = price;
  const productDescription = document.createElement("p");
  productDescription.textContent = description;
  productElememt.append(
    productTitle,
    productImg,
    productPrice,
    productDescription
  );
  return productElememt;
}
const elementsCreate = car.map(productCar);
console.log(elementsCreate);
resultAaa.append(...elementsCreate);
