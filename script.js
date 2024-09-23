const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".sign");
const closeButton = document.querySelector(".close-btn");
const hamburgerBtn = document.querySelector("#hamburgerBtn");
const nav = document.querySelector(".top-menu");

// Menu
hamburgerBtn.addEventListener("click", hamburgerShow);

function hamburgerShow() {
  if (nav.className === "top-menu") {
    nav.className += " responsive";
  } else {
    nav.className = "top-menu";
  }
}

// Avaa dialogin
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" btn sulkee dialogin
closeButton.addEventListener("click", () => {
  dialog.close();
});
