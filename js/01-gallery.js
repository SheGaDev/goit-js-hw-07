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
</div>`).join("\n"));
let instance;
const onClick = (e) => {
    e.preventDefault();
    if (e.target.classList.contains("gallery")) return;
    const source = e.target.dataset.source;
    instance = basicLightbox.create(`<img src="${source}">`);
    instance.show();
};
const onEscape = (e) => {
    if (e.code !== "Escape"
        || !instance) return;
    instance.close();
    instance = null;
}
galleryEl.addEventListener("click", onClick);
galleryEl.addEventListener("keydown", onEscape);