import { galleryItems } from './gallery-items.js';
const galleryEl = document.querySelector(".gallery");
galleryEl.insertAdjacentHTML("beforeend", galleryItems
    .map(({ preview, original, description }) => `<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`).join(""));
new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250
});