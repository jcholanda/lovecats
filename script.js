document.addEventListener('DOMContentLoaded', () => {
    const paragraphs = document.querySelectorAll('p');

    paragraphs.forEach(paragraph => {
        paragraph.onclick = () => {
            paragraph.style.backgroundColor = 'rgba(79, 94, 114, 0.9)';
        };

        paragraph.ondblclick = () => {
            paragraph.style.fontSize = '1.2em';
        };
    });
});
