document.addEventListener('DOMContentLoaded', (event) => {
    const textElement = document.querySelector('.section-title');

    const textToType = ["Who am I?"];

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
