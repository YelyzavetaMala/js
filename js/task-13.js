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
