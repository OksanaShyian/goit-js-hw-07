import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector("ul.gallery");
const onLargeImage = (e) => {
  const arrayEl = galleryItems
    .map(
      (item) => `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`
    )
    .join("");

  galleryEl.innerHTML = arrayEl;
};

onLargeImage();
// galleryEl.addEventListener("click", onLargeImage);

// function onLargeImage(e) {
//   e.preventDefault();
//   if (e.target === e.currentTarget) return;

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
