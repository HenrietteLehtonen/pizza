const dialog = document.querySelector("dialog");
const showButton = document.querySelector("span>i");
const closeButton = document.querySelector(".close-btn");

// Avaa dialogin
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" btn sulkee dialogin
closeButton.addEventListener("click", () => {
  dialog.close();
});
