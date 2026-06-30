const form = document.querySelector(".order-form");
const whatsappNumber = "77772834797";

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = data.get("name")?.toString().trim() || "Не указано";
  const phone = data.get("phone")?.toString().trim() || "Не указано";
  const product = data.get("product")?.toString().trim() || "Не указано";
  const message = data.get("message")?.toString().trim() || "Не указано";

  const text = [
    "Здравствуйте! Хочу заказать изделие ArtMetal.",
    "",
    `Имя: ${name}`,
    `Телефон: ${phone}`,
    `Изделие: ${product}`,
    `Описание: ${message}`,
  ].join("\n");

  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
});

const zoomableImages = document.querySelectorAll(
  ".product-card img, .gallery-grid img, .ready-card img"
);

const lightbox = document.createElement("div");
lightbox.className = "lightbox";
lightbox.innerHTML = `
  <button class="lightbox-close" type="button" aria-label="Закрыть фото">×</button>
  <img alt="">
`;
document.body.appendChild(lightbox);

const lightboxImage = lightbox.querySelector("img");
const lightboxClose = lightbox.querySelector(".lightbox-close");

const closeLightbox = () => {
  lightbox.classList.remove("is-open");
  document.body.classList.remove("lightbox-open");
  lightboxImage.removeAttribute("src");
};

zoomableImages.forEach((image) => {
  image.classList.add("zoomable-image");
  image.addEventListener("click", () => {
    lightboxImage.src = image.currentSrc || image.src;
    lightboxImage.alt = image.alt || "Фото изделия";
    lightbox.classList.add("is-open");
    document.body.classList.add("lightbox-open");
  });
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox || event.target === lightboxClose) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
    closeLightbox();
  }
});
