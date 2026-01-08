// Attendre que la page soit chargée
document.addEventListener('DOMContentLoaded', function() {
    // Trouver le bouton et le message
    const button = document.getElementById('clickButton');
    const message = document.getElementById('message');
    
    // Ajouter un événement au clic sur le bouton
    button.addEventListener('click', function() {
        // Afficher un message
        message.textContent = '🎉 Bravo ! Vous avez cliqué sur le bouton ! JavaScript fonctionne parfaitement !';
        message.classList.add('show');
        
        // Changer la couleur du bouton temporairement
        button.style.background = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
        
        // Remettre la couleur originale après 1 seconde
        setTimeout(function() {
            button.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        }, 1000);
    });
    
    // Animation d'apparition des cartes
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(function() {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
});
