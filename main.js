const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-box input");
const cardWrapper = document.querySelector(".content-main__list");
const cardArray = [
  {
    id: 0,
    title: "Первый материал 2й сорт",
    price: "170 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    image: "./assets/images/card-image.png",
  },
  {
    id: 1,
    title: "Второй материал 2й сорт",
    price: "175 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    image: "./assets/images/card-image.png",
  },
  {
    id: 2,
    title: "Третий материал 2й сорт",
    price: "179 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    image: "./assets/images/card-image.png",
  },
  {
    id: 3,
    title: "Четвертый материал 2й сорт",
    price: "105 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    image: "./assets/images/card-image.png",
  },
  {
    id: 4,
    title: "Пятый материал 2й сорт",
    price: "155 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    image: "./assets/images/card-image.png",
  },
  {
    id: 5,
    title: "Шестой материал 2й сорт",
    price: "145 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    image: "./assets/images/card-image.png",
  },
];

const renderFunction = (cardList) => {
  cardWrapper.innerHTML = "";
  cardList.forEach((item, index) => {
    cardWrapper.insertAdjacentHTML(
      "beforeend",
      `<a href="./product.html" class="content-main__list-item">
       <div class="content-main__list-item--img">
        <img src="${item.image}" alt="${item.title}" />
          </div>
          <h5 class="content-main__list-item--title">
            ${item.title}
              </h5>
              <strong class="content-main__list-item--price">${item.price}</strong>
              <div class="content-main__list-item--desc-box">
                    <span class="content-main__list-item--desc"
                 >${item.address}</span
                    >
               <span class="content-main__list-item--desc"
                      >${item.date}</span
                    >
                  </div>
                </a>`
    );
  });
};
const filteredArray = (array, value) => {
  //   console.log(array);
  //   console.log(value);

  return array.filter((item) => {
    return item.title.includes(value) || item.price.includes(value);
  });
};
// !
cardWrapper.style.justifyContent = "flex-start";
cardWrapper.style.gap = "30px";
// !
renderFunction(cardArray);
searchBtn.addEventListener("click", () => {
  renderFunction(filteredArray(cardArray, searchInput.value));
});
