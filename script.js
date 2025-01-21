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
      .then(() => {
        // Изменяем стиль кнопки
        const originalText = this.textContent; // Сохраняем оригинальный текст кнопки
        this.textContent = "Code Copied";
        this.classList.add("copied");
        this.disabled = true;

        // Возвращаем кнопку в исходное состояние через 1 секунду
        setTimeout(() => {
          this.textContent = originalText;
          this.classList.remove("copied");
          this.disabled = false;
        }, 1000); // 1 секунда
      })
      .catch((err) => console.error(`Ошибка: ${err}`));
  });
});
