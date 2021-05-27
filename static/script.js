document.addEventListener('DOMContentLoaded', start);

function start() {
    const clearAllButton = document.querySelector('#clear-all-button');
    const setKeyButton = document.querySelector('#set-key-button');

    clearAllButton.addEventListener('click', () => {
        localStorage.clear();
    });

    setKeyButton.addEventListener('click', () => {
        const localStorageKey = document.querySelector('#key-input').value;
        const newValue = document.querySelector('#value-input').value;

        localStorage.setItem(localStorageKey, newValue);
    })
}
