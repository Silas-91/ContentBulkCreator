const imageModal = document.getElementById("image-preview-modal");
const imageModalTitle = document.getElementById("image-preview-title");
const imageModalImage = document.getElementById("image-preview-src");

function openModal(modal) {
  if (!modal) return;
  modal.hidden = false;
  document.body.classList.add("modal-open");
  const closeButton = modal.querySelector("[data-modal-close]");
  closeButton?.focus();
}

function closeModal(modal) {
  if (!modal) return;
  modal.hidden = true;
  document.body.classList.remove("modal-open");
}

document.querySelectorAll(".preview-trigger").forEach((button) => {
  button.addEventListener("click", () => {
    imageModalTitle.textContent = button.dataset.previewTitle || "Vorschau";
    imageModalImage.src = button.dataset.previewSrc;
    imageModalImage.alt = button.querySelector("img")?.alt || "";
    openModal(imageModal);
  });
});

document.querySelectorAll("[data-modal-open]").forEach((button) => {
  button.addEventListener("click", () => {
    openModal(document.getElementById(button.dataset.modalOpen));
  });
});

document.querySelectorAll(".modal-backdrop").forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal || event.target.closest("[data-modal-close]")) {
      closeModal(modal);
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  document.querySelectorAll(".modal-backdrop:not([hidden])").forEach(closeModal);
});
