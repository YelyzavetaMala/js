function filterArray(numbers, value) {
  let filteredArray = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > value) {
      filteredArray.push(numbers[i]);
    }
  }

  return filteredArray;
}
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

class Storage {
  #items;
  constructor(initialItems) {
    this.#items = initialItems;
  }
  getItems() {
    return this.#items;
  }
  addItem(newItem) {
    return this.#items.push(newItem);
  }
  removeItem(itemToRemove) {
    const indexToRemove = this.#items.indexOf(itemToRemove);
    if (indexToRemove !== -1) {
      this.#items.splice(indexToRemove, 1);
    }
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

function isEnoughCapacity(products, containerSize) {
  let totalProducts = Object.values(products).reduce(
    (sum, quantity) => sum + quantity,
    0
  );
  return totalProducts <= containerSize;
}
console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false

function calcAverageCalories(days) {
  if (days.length === 0) {
    return 0;
  }
  let totalCalories = 0;

  for (const day of days) {
    totalCalories += day.calories;
  }

  return totalCalories / days.length;
}
console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 },
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 },
  ])
); // 2270

console.log(calcAverageCalories([])); // 0

const header = document.querySelector("#HEADER_JS");
const overlay = document.querySelector("#overlay");

/* ======= menu button ======= */
/* ======= menu закрити.відкрити ======= */
const menuButton = document.querySelector("#HEADER_MENU_JS");
function handleMenuButton() {
  document.body.classList.toggle("is-hidden");
  header.classList.toggle("ih-header-menu-open");
}

if (menuButton) {
  menuButton.removeEventListener("click", handleMenuButton);
  menuButton.addEventListener("click", handleMenuButton);
}
/* ======= END menu закрити.відкрити ======= */

const menuNav = document.querySelector("#MENU_NAV_JS");

function handleMenuNavigation(event) {
  document.body.classList.remove("is-hidden");
  if (event.target.tagName === "A") {
    header.classList.remove("ih-header-menu-open");
    overlay.classList.remove("is-visible");
  }
}

if (menuNav) {
  menuNav.removeEventListener("click", handleMenuNavigation);
  menuNav.addEventListener("click", handleMenuNavigation);
}

/* ======= menu navigation  ======= */

const menuNavigation = document.querySelector("#MENU_NAV_JS");

const createNavigationMarkup = () => {
  return ` <li class="ih-menu-item" data-section="benefits" data-lang="header.menu.benefits" type="button">
             <img
                loading="lazy"
                src="./images/little-candy/Candy-purple-1x.png"
                alt="photo desc"
                width="24"
                height="24"
              />
            Benefits
          </li>
          <li class="ih-menu-item" data-section="about-the-game" data-lang="header.menu.about-the-game" type="button">
            <img
                class="candy-img"
                loading="lazy"
                src="./images/little-candy/Candy-red-1x.png"
                alt="photo desc"
                width="24"
                height="24"
              />
            About the Game
          </li>
          <li class="ih-menu-item" data-section="how-to-play"
          data-lang="header.menu.how-to-play" type="button">
           <img
                loading="lazy"
                src="./images/little-candy/Candy-purple-1x.png"
                alt="photo desc"
                width="24"
                height="24"
              />
            How to Play
          </li>
          <li class="ih-menu-item" data-section="gallery" data-lang="header.menu.gallery" type="button">
            <img
                class="candy-img"
                loading="lazy"
                src="./images/little-candy/Candy-red-1x.png"
                alt="photo desc"
                width="24"
                height="24"
              /> Gallery
          </li>
          <li class="ih-menu-item" data-section="advantages" data-lang="header.menu.advantages" type="button">
            <img
          loading="lazy"
          src="./images/little-candy/Candy-left-1x.png"
          alt="photo desc"
          width="24"
          height="24"
        />
            Advantages
          </li>`;
};

const renderNavigationMarkup = () => {
  if (menuNavigation) {
    menuNavigation.innerHTML = createNavigationMarkup();
  }
};

/* ======= smooth scroll  ======= */
function handleScrollToSection(event) {
  if (event.target.dataset.section) {
    const sectionId = event.target.dataset.section;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      header.classList.remove("ih-header-menu-open");
    }
  }
}

if (menuNavigation) {
  menuNavigation.removeEventListener("click", handleScrollToSection);
  menuNavigation.addEventListener("click", handleScrollToSection);
}

document.addEventListener("DOMContentLoaded", () => {
  renderNavigationMarkup();
});

const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],

  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
};

customer.setDiscount(0.15);
console.log(customer.getDiscount());
customer.addOrder(5000, "Steak");
console.log(customer.getBalance());
console.log(customer.getOrders());
