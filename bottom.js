function scrollToBottom() {
    var bottomElement = document.querySelector('.bottom');
    var bottomPosition = bottomElement.getBoundingClientRect().top;
    var offset = 30; // Puoi regolare questo valore per personalizzare l'offset

    // Calcola la posizione per fermare lo scorrimento prima di raggiungere l'elemento "bottom"
    var stopPosition = bottomPosition - offset;

    // Scorri fino a quella posizione
    window.scrollTo({ top: stopPosition, behavior: 'smooth' });
}