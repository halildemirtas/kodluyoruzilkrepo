const menu = [
  {
    id: 1,
    title: "Sushi Roll",
    category: "Japanese",
    price: 10.99,
    img: "https://via.placeholder.com/150",
    desc: "Delicious sushi roll with fresh fish and vegetables.",
  },
  {
    id: 2,
    title: "Kung Pao Chicken",
    category: "Chinese",
    price: 12.99,
    img: "https://via.placeholder.com/150",
    desc: "Spicy stir-fried chicken with peanuts, vegetables, and chili peppers.",
  },
  // Diğer menü öğeleri buraya eklenecek
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
              <img src=${item.img} class="photo" alt=${item.title}/>
              <div class="item-info">
                <header>
                  <h4>${item.title}</h4>
                  <h4 class="price">${item.price}</h4>
                </header>
                <p class="item-text">${item.desc}</p>
              </div>
            </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(function (values, item) {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  }, ["All"]);

  const categoryBtns = categories.map(function (category) {
    return `<button class="filter-btn" type="button" data-id=${category}>
              ${category}
            </button>`;
  }).join("");

  btnContainer.innerHTML = categoryBtns;

  const filterBtns = document.querySelectorAll(".filter-btn");

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "All") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
