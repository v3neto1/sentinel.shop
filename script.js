document.addEventListener('DOMContentLoaded', () => {
    const bottone = document.getElementById('btnAzione');

    bottone.addEventListener('click', () => {
        alert('Grazie per aver cliccato! Ora personalizziamo il resto.');
        console.log('Azione eseguita con successo.');
    });
});
