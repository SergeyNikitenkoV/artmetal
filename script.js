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
