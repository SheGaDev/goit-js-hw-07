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
let instance;
const onClick = (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") return;
  const source = e.target.dataset.source;
  instance = basicLightbox.create(`<img src="${source}">`, {
    onShow: function () {
      galleryEl.addEventListener("keydown", onEscape);
    },
    onClose: function () {
      galleryEl.removeEventListener("keydown", () => {});
    }
  });
  instance.show();
};
function onEscape(e) {
  if (e.code !== "Escape"
    || !instance) return;
  instance.close();
  instance = null;
}
galleryEl.addEventListener("click", onClick);