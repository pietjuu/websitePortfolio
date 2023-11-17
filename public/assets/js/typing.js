document.addEventListener('DOMContentLoaded', (event) => {
    const textElement = document.querySelector('.typing-text');
    const cursorElement = document.querySelector('.cursor');

    const textToType = ["My Projects"];

    let index = 0;
    let currentText = '';
    let letterIndex = 0;

    function type() {
        if (index < textToType.length) {
            if (letterIndex < textToType[index].length) {
                currentText += textToType[index][letterIndex];
                textElement.textContent = currentText;
                letterIndex++;
                setTimeout(type, 100);
            }
        }
    }
    type();
});
