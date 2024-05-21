document.addEventListener('DOMContentLoaded', () => {
    const paragraphs = document.querySelectorAll('p');

    paragraphs.forEach(paragraph => {
        paragraph.onclick = () => {
            paragraph.style.backgroundColor = 'yellow';
        };

        paragraph.ondblclick = () => {
            paragraph.style.fontSize = '1.2em';
        };
    });
});
