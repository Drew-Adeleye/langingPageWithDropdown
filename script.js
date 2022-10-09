const mobileNav = document.querySelector(".mobile-navbar");
const hamburgerBtn = document.querySelector(".hamburger");
const mobileDropdowns = document.querySelectorAll(".mobile-dropdown");
const background = document.querySelector(".nav-background");
console.log(mobileDropdowns);

document.addEventListener("click", (e) => {
  isDropdownButton = e.target.matches("[data-dropdown-button]");
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
    if (currentDropdown.classList.contains("active")) {
      currentDropdown.children[1].src = "images/icon-arrow-up.svg";
    } else {
      currentDropdown.children[1].src = "images/icon-arrow-down.svg";
    }
  }

  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
    dropdown.children[1].src = "images/icon-arrow-down.svg";
  });
});

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("active");
  mobileNav.classList.toggle("active");
  background.classList.toggle("active");
});

mobileDropdowns.forEach((drop) => {
  drop.addEventListener("click", () => {
    drop.children[2].classList.toggle("active");
    if (drop.children[2].classList.contains("active")) {
      drop.children[1].src = "images/icon-arrow-up.svg";
    } else {
      drop.children[1].src = "images/icon-arrow-down.svg";
    }
  });
});
