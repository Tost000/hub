// Находим все кнопки с классом "copy-button"
const buttons = document.querySelectorAll(".copy-button");

// Добавляем обработчик события для каждой кнопки
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    // Получаем текст из атрибута data-text
    const textToCopy = this.getAttribute("data-text");
    // Копируем текст в буфер обмена
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => alert(`Скопировано: "${textToCopy}"`))
      .catch((err) => alert(`Ошибка: ${err}`));
  });
});
