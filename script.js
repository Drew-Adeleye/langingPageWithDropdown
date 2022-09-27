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
