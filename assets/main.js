/* 
Presetting the DOM 
*/

window.addEventListener('DOMContentLoaded', (event) => {
    fetchThesis(questionStatus.innerText);
    count();
});
questionStatus.innerText = 1;

/* 
Button function 
*/

sendButton.addEventListener('click', () => {
    loading();
    if (questionStatus.innerText <= questionCount.innerText - 1) {
        questionStatus.innerText++;
        fetchThesis(questionStatus.innerText)
        updateSunflowers(questionHeader.innerText);
        slider.value = 50
    } else {
        updateSunflowers(questionHeader.innerText);
        questionHeader.innerText = 'Nachfolgend haben wir Ihre Anworten ausgewertet:'
        questionText.innerText = ''
        loading();
        maxResult = parseInt(questionCount.innerText) * 100;
        var result = (sunflowers / maxResult) * 100
        resultBar.innerText = result.toFixed(2) + '%'
        resultBar.style.width = result + '%'
        sliderSection.style.display = 'none';
        resultSection.style.display = 'block';
        percentValue.innerText = result.toFixed(2)
        evaluateGreen();
    }
})