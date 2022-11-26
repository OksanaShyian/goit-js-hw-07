import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector("div.gallery");

console.log(galleryEl);

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
  if (!e.target.classList.contains("gallery__image")) return;

  const instance = basicLightbox.create(
    `
    <div class="modal">
        <img src = '${e.target.dataset.source}' width="800" height="600"/>
    </div>
`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", onCloseWindowByEsc);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", onCloseWindowByEsc);
      },
    }
  );
  instance.show();

  function onCloseWindowByEsc(e) {
    if (e.code === "Escape");
    instance.close();
  }
}
