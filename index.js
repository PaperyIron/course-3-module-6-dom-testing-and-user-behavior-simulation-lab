//simulate a user button click
function simulateClick(id, phrase) {
    document.getElementById(id).innerHTML = phrase;
};

//handle form submit
function handleFormSubmit(formId, targetElementId) {
    const form = document.getElementById(formId);
    const input = document.getElementById('user-input');
    const dynamicContent = document.getElementById(targetElementId);
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!input.value) {//make sure input has a value or throw an error
            errorMessage.textContent = 'Input cannot be empty';
            errorMessage.classList.remove('hidden');
        } else { //else submit the form
            dynamicContent.textContent = input.value;
            errorMessage.classList.add('hidden');
        }
    });

    // Trigger submit for testing
    form.dispatchEvent(new Event('submit'));
}
//add and element to the dom
function addElementToDOM(id, phrase) {
    const dynamicContent = document.getElementById(id);
    dynamicContent.textContent = phrase;
};

//remove element from dom
function removeElementFromDOM(element) {
    document.getElementById(element).remove();
}

module.exports = {
    addElementToDOM,
    removeElementFromDOM,
    simulateClick,
    handleFormSubmit,
};