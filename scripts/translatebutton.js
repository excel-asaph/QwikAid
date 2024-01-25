// Ensure JavaScript runs after DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    function hideTranslator() {
        const getTranslator = document.querySelector('#translate');
        getTranslator.classList.add('hide-translator');
    }

    const translateButton = document.querySelector('.button-services');
    console.log(translateButton);
    translateButton.addEventListener('click', hideTranslator);
});
