    // Asteapta ca pagina sa se incarce complet inainte de a rula codul jQuery
    $(document).ready(function() {
    // Adauga un event listener pentru miscarea mouse-ului in interiorul elementului cu clasa .hero
    $('.hero').mousemove(function(e) {
    // Calculeaza si salveaza distanta miscarii in pixeli pe axa X si Y a mouse-ului
    var moveX = (e.pageX * -3 / 10);
    var moveY = (e.pageY * -3 / 10);
    // Gaseste elementul cu clasa .moving-image din interiorul elementului .hero si aplica o transformare CSS pentru a muta imaginea in functie de distanta miscarii mouse-ului
    $(this).find('.moving-image').css('transform', 'translateX(' + moveX + 'px) translateY(' + moveY + 'px)');
    });
    });
