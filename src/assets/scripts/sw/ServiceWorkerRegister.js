const registerWorker = (file) => {
    if('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register(`\\${file}`).then(registration => {
                return `SW registered: ${registration}`
            }).catch(registrationError => {
                return `SW failed: ${registrationError}`
            });
        });
    }
};

export { registerWorker }