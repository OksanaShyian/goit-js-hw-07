import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector("div.gallery");

const arrayEl = galleryItems
  .map(
    (item) => `<div class="gallery__item">
<a class="gallery__link" href="${item.original}">
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt='${item.description}'
  />
</a>
</div>`
  )
  .join("");

galleryEl.innerHTML = arrayEl;

galleryEl.addEventListener("click", onLargeImage);

function onLargeImage(e) {
  e.preventDefault();
  if (e.target === e.currentTarget) return;

  const modalGallery = basicLightbox.create(
    `
    <div class="modal">
        <img src = '${e.target.dataset.source}' width="800" height="600"/> 
    </div>
`,
    {
      onShow: () => {
        window.addEventListener("keyup", onCloseWindowByEsc);
      },
    }
  );
  modalGallery.show();

  function onCloseWindowByEsc(e) {
    if (e.code === "Escape");
    modalGallery.close();
  }
}
